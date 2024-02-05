import fs from "fs";

export default defineEventHandler(async (event) => {
  // Check if directory exists
  const path = "./content/github";
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
  }

  const currentDate: number = Date.now();

  let githubCache: any = {
    lastfetched: currentDate,
    repos: [],
  };

  //Check if cachefile exists
  if (!fs.existsSync(`${path}/githubcache.json`)) {
    fs.writeFileSync(`${path}/githubcache.json`, JSON.stringify(githubCache));
  }

  githubCache = JSON.parse(
    fs.readFileSync(`${path}/githubcache.json`, "utf-8")
  );

  const timeDiff = Date.now() - githubCache.lastfetched;

  var diffMins = Math.round(((timeDiff % 86400000) % 3600000) / 60000);

  /*
  if (diffMins > 5) {
    updateCache(githubCache, path);
  }*/

  githubCache = JSON.parse(
    fs.readFileSync(`${path}/githubcache.json`, "utf-8")
  );

  const include = ["ao3-toolkit"];

  githubCache.repos.forEach((repo: any) => {
    if (include.includes(repo.name)) {
      createMarkdown(repo);
    }
  });
});

async function updateCache(githubCache: any, path: string) {
  //Get Repos
  const res: any = await $fetch(
    "https://api.github.com/users/lucaengelhard/repos"
  );

  let toFetchReadme: any = [];

  res.forEach((element: any) => {
    toFetchReadme.push(defineRepo(element));
  });

  githubCache.repos = await Promise.all(toFetchReadme);

  fs.writeFileSync(`${path}/githubcache.json`, JSON.stringify(githubCache));
}

function createMarkdown(repo: {
  name: string;
  description: string;
  readme: string;
}) {
  const md = `---
title: ${repo.name}
thumbnail: 
---
${repo.description}

${replaceHeading(repo.readme)}
`;

  fs.writeFileSync(`./content/projects/${repo.name}.md`, md);
}

async function defineRepo(element: any) {
  try {
    return {
      name: element.name,
      description: element.description,
      readme: await $fetch(
        `https://raw.githubusercontent.com/lucaengelhard/${element.name}/main/README.md`
      ),
    };
  } catch (error) {
    return {
      name: element.name,
      description: element.description,
      readme: "",
    };
  }
}

function replaceHeading(readme: string) {
  const regXHeader = /#{1,6}.+/g;
  const regXReplace = /#{1,6}./g;
  const matchArray = readme.match(regXHeader);

  matchArray.forEach((element: string) => {
    const elementText: string = element.replace(regXReplace, "");

    console.log(elementText);

    readme = readme.replace(
      element,
      `:wordWave{text="${elementText}" link="false"}`
    );
  });

  console.log(readme);

  return readme;
}
