import { Client } from "@notionhq/client";
const { notionAPISecret } = useRuntimeConfig();

export default defineEventHandler(async (event) => {
  const notion = new Client({ auth: notionAPISecret });

  const databaseId = "b43c25ce6fbd4dadab24a4b0f9758507";
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

    /*
    let projectInfo = {
      thumbnail: project.cover ? project.cover.file.url : undefined,
      title: project.properties.name.title[0].plain_text,
      untertitel: project.properties.untertitel,
      tags: project.properties.tags.multi_select[0].plain_text,
    };
    console.log(projectInfo);*/

    projectList.push(projectInfo);
  });

  return projectList;
});
