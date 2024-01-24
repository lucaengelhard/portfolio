import { Client } from "@notionhq/client";
const { notionAPISecret } = useRuntimeConfig();
const { notionPhotographyPage } = useRuntimeConfig();

export default defineEventHandler(async (event) => {
  const notion = new Client({ auth: notionAPISecret });
  const databaseId = "b43c25ce6fbd4dadab24a4b0f9758507";
  const { type } = getQuery(event);

  switch (type) {
    case "list":
      return await getDatabase(notion, databaseId);
    case "project":
      return await getProjectPage(notion, databaseId, event);
    case "page":
      const id = await getPageId(event, notion);
      return await getPage(notion, id);
    default:
      break;
  }
});

async function getPageId(event: any, notion: Client) {
  const { id } = getQuery(event);
  if (id) {
    return id;
  }

  const blocks = await getBlocks(notionPhotographyPage, notion);
  for (let index = 0; index < blocks.results.length; index++) {
    const block = blocks.results[index];

    if (block.type !== "child_page") {
      continue;
    }
    const { category } = getQuery(event);

    if (
      block.child_page.title.toLowerCase() !==
      category?.toString().toLowerCase()
    ) {
      continue;
    }

    return block.id;
    //const pageInfo = await getPageInfo(block.id, notion);
  }
}

async function getDatabase(notion: Client, databaseId: string) {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "Publish",
      checkbox: {
        equals: true,
      },
    },
  });

  const projects = response.results;

  const projectList: any = [];

  projects.forEach((project) => {
    let projectInfo = {
      thumbnail: project.cover ? project.cover.file.url : undefined,
      id: project.id,
      title: project.properties.Name
        ? project.properties.Name.title[0].plain_text
        : undefined,
      tags: project.properties.Tags
        ? project.properties.Tags.multi_select
        : undefined,
      subtitle: project.properties.Untertitel.rich_text.length
        ? project.properties.Untertitel.rich_text[0].plain_text
        : undefined,
    };
    projectList.push(projectInfo);
  });

  return projectList;
}

async function getProjectPage(notion: Client, databaseId: string, event: any) {
  const { title } = getQuery(event);
  const database = await notion.databases.query({
    database_id: databaseId,
    filter: {
      and: [
        {
          property: "Publish",
          checkbox: {
            equals: true,
          },
        },
        {
          property: "Name",
          rich_text: {
            contains: title,
          },
        },
      ],
    },
  });

  return await getPage(notion, database.results[0].id);
}

async function getPage(notion: Client, id: any) {
  const page = await getBlocks(id, notion);
  const pageInfo = await getPageInfo(id, notion);

  const blockList = await parseBlocks(page.results, notion);
  pageInfo.content = blockList;

  return pageInfo;
}

async function getPageInfo(id: string, notion: Client) {
  const response = await notion.pages.retrieve({ page_id: id });

  return {
    thumbnail: getPageThumbnail(response),
    id: response.id,
    title: response.properties.Name
      ? response.properties.Name.title[0].plain_text
      : undefined,
    tags: response.properties.Tags
      ? response.properties.Tags.multi_select
      : undefined,
    subtitle: getPageSubtitle(response),
  };
}

function getPageThumbnail(response: any) {
  if (!response.cover) {
    return undefined;
  }

  if (response.cover.type !== "external") {
    return response.cover.file.url;
  }

  if (response.cover.type === "external") {
    return response.cover.external.url;
  }
}

function getPageSubtitle(response: any) {
  if (!response.properties.Untertitel) {
    return undefined;
  }
  if (!response.properties.Untertitel.rich_text.length) {
    return undefined;
  }
  return response.properties.Untertitel.rich_text[0].plain_text;
}

async function getBlocks(blockId: string, notion: Client) {
  return await notion.blocks.children.list({ block_id: blockId });
}

async function parseBlocks(blocks: any, notion: Client) {
  let blockList: any = [];

  for (let index = 0; index < blocks.length; index++) {
    const block = blocks[index];

    switch (block.type) {
      case "image":
        blockList.push(getBlockImage(block));
        break;
      case "paragraph":
        blockList.push(getBlockParagraph(block));
        break;
      case "column_list":
        blockList.push(await getBlockNested(block, notion));
        break;
      case "column":
        blockList.push(await getBlockNested(block, notion));
        break;
      case "heading_2":
        blockList.push(getBlockHeading(block));
        break;
      case "heading_1":
        blockList.push(getBlockHeading(block));
        break;
      case "heading_3":
        blockList.push(getBlockHeading(block));
        break;
      case "bulleted_list_item":
        blockList.push(await getBlockList(block, notion));
        break;
      default:
        break;
    }
  }

  return blockList;
}

function getBlockImage(block: any) {
  return {
    type: block.type,
    url: block.image.file.url,
  };
}

function getBlockParagraph(block: any) {
  try {
    return {
      type: block.type,
      content: block.paragraph.rich_text[0].plain_text,
    };
  } catch (error) {
    return {
      type: block.type,
      content: "",
    };
  }
}

async function getBlockNested(block: any, notion: Client) {
  const nestedBlocks = await notion.blocks.children.list({
    block_id: block.id,
  });

  const recursiveBlockList = await parseBlocks(nestedBlocks.results, notion);

  return {
    type: "recursive",
    content: recursiveBlockList,
  };
}

function getBlockHeading(block: any) {
  try {
    return {
      type: block.type,
      text: block[block.type].rich_text[0].plain_text,
    };
  } catch (error) {
    return {
      type: block.type,
      text: "",
    };
  }
}

async function getBlockList(block: any, notion: Client) {
  if (block.has_children) {
    try {
      const text = block[block.type].rich_text[0].plain_text;
      return {
        type: "list",
        text: text,
        content: await getBlockNested(block, notion),
      };
    } catch (error) {
      const text = "";
      return {
        type: "list",
        text: text,
        content: await getBlockNested(block, notion),
      };
    }
  } else {
    try {
      return {
        type: "list",
        text: block[block.type].rich_text[0].plain_text,
      };
    } catch (error) {
      return {
        type: "list",
        text: "",
      };
    }
  }
}
