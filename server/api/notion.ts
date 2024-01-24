import { Client } from "@notionhq/client";
const { notionAPISecret } = useRuntimeConfig();

export default defineEventHandler(async (event) => {
  const notion = new Client({ auth: notionAPISecret });
  const databaseId = "b43c25ce6fbd4dadab24a4b0f9758507";
  const { type } = getQuery(event);

  switch (type) {
    case "list":
      return await getDatabase(notion, databaseId);
      break;
    case "page":
      return await getPage(notion, databaseId, event);
      break;
    default:
      break;
  }
});

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

async function getProjectPage(notion: Client, databaseId: string, event: any) {}

async function getPage(notion: Client, databaseId: string, event: any) {
  const { page: title } = getQuery(event);
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

  const page = await getBlocks(database.results[0].id, notion);
  const blockList = await parseBlocks(page.results, notion);

  let projectInfo = {
    thumbnail: database.results[0].cover
      ? database.results[0].cover.file.url
      : undefined,
    id: page.id,
    title: database.results[0].properties.Name
      ? database.results[0].properties.Name.title[0].plain_text
      : undefined,
    tags: database.results[0].properties.Tags
      ? database.results[0].properties.Tags.multi_select
      : undefined,
    subtitle: database.results[0].properties.Untertitel.rich_text.length
      ? database.results[0].properties.Untertitel.rich_text[0].plain_text
      : undefined,
    content: blockList,
  };

  return projectInfo;
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
  return {
    type: block.type,
    content: block.paragraph.rich_text[0].plain_text,
  };
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
