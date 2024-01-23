export default defineEventHandler(async (event) => {
  //Request Parameters
  const { getType: type } = getQuery(event);

  //Flickr API Setup
  const { flickrKey, flickrUserId } = useRuntimeConfig();
  const request = {
    endpoint: "https://api.flickr.com/services/rest/",
    method: "flickr.collections.getTree",
    format: "json",
    extras: "",
  };

  const uri = `${request.endpoint}?method=${request.method}&api_key=${flickrKey}&user_id=${flickrUserId}&format=${request.format}&nojsoncallback=1`;

  switch (type) {
    case "set":
      return await getSet(uri, event);
      break;
    case "section":
      return await getSection(request, flickrKey, event);
      break;
    default:
      throw new Error("No Endpoint");
      break;
  }
});

async function getSet(uri: string, event: any) {
  const { collections } = await $fetch(uri);
  const { category } = getQuery(event);

  for (let index = 0; index < collections.collection.length; index++) {
    if (collections.collection[index].title !== category) {
      continue;
    }
    const element = collections.collection[index];

    return element.set;
  }
}

async function getSection(request: any, flickrKey: string, event: any) {
  const { photosetId: id } = getQuery(event);

  request.method = "flickr.photosets.getPhotos";
  request.extras = "url_sq,url_t,url_s,url_m,url_o";

  const uri = `${request.endpoint}?method=${request.method}&api_key=${flickrKey}&photoset_id=${id}&extras=${request.extras}&format=${request.format}&nojsoncallback=1`;

  const res: any = await $fetch(uri);

  const pictures = res.photoset.photo;

  const pictureList: [
    {
      url_sq: string;
      url_t: string;
      url_s: string;
      url_m: string;
      url_o: string;
    }
  ] = [];

  pictures.forEach((picture: any) => {
    pictureList.push({
      url_sq: picture.url_sq,
      url_t: picture.url_t,
      url_s: picture.url_s,
      url_m: picture.url_m,
      url_o: picture.url_o,
    });
  });

  return pictureList;
}

async function getImages(set: any, request: any, flickrKey: string) {
  const uri = `${request.endpoint}?method=${request.method}&api_key=${flickrKey}&photoset_id=${set.id}&extras=${request.extras}&format=${request.format}&nojsoncallback=1`;

  const res: any = await $fetch(uri);

  const pictures = res.photoset.photo;

  const pictureList: [
    {
      url_sq: string;
      url_t: string;
      url_s: string;
      url_m: string;
      url_o: string;
    }
  ] = [];

  pictures.forEach((picture: any) => {
    pictureList.push({
      url_sq: picture.url_sq,
      url_t: picture.url_t,
      url_s: picture.url_s,
      url_m: picture.url_m,
      url_o: picture.url_o,
    });
  });

  return {
    title: set.title,
    setId: set.id,
    pictureList: pictureList,
  };
}

function stringToBool(boolString: any): boolean {
  try {
    return boolString.toLowerCase() === "true";
  } catch (error) {
    return false;
  }
}
