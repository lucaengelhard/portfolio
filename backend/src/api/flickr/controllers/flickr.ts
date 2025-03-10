/**
 * A set of functions called "actions" for `flickr`
 */

const flickrCache: Map<string, { timestamp: number; data: any }> = new Map();

export default {
  getAlbums: async (ctx, next) => {
    const key = process.env.FLICKR_KEY;
    const user_id = process.env.FLICKR_USERID;
    try {
      const albums = await getAllAlbums(user_id, key);

      ctx.body = await Promise.all(
        albums.map(async (album) => {
          return {
            id: album.id,
            title: album.title["_content"],
            description: album.description["_content"],
            primary: await getPhotoSizes(key, album.primary),
          };
        })
      );
    } catch (err) {
      console.error(err);
      ctx.body = "Error while fetching Flickr Albums";
    }
  },
  getAlbumContent: async (ctx, next) => {
    const key = process.env.FLICKR_KEY;
    const user_id = process.env.FLICKR_USERID;
    const query = ctx.request.query;
    try {
      if (query.albumId === undefined) throw new Error("albumId undefined");
      const photos = await getAllPhotosInAlbum(user_id, key, query.albumId);
      ctx.body = await Promise.all(
        photos.map(async (photo) => await getPhotoSizes(key, photo.id))
      );
    } catch (error) {
      console.error(error);
      ctx.body = "Error while fetching Album content";
    }
  },
};

async function getAllAlbums(user_id: string, key: string, page = 1, acc = []) {
  const url = `https://www.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=${key}&user_id=${user_id}&format=json&nojsoncallback=1&page=${page}`;

  const data = await cachedFetch(url);

  if (data.stat !== "ok") {
    throw new Error("Failed to fetch Albums");
  }

  acc = acc.concat(data.photosets.photoset);

  if (page < data.photosets.pages) {
    return getAllAlbums(user_id, key, page + 1, acc);
  } else {
    return acc;
  }
}

async function getAllPhotosInAlbum(
  user_id: string,
  key: string,
  photoset_id: string,
  page = 1,
  acc = []
) {
  const url = `https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${key}&user_id=${user_id}&format=json&nojsoncallback=1&page=${page}&photoset_id=${photoset_id}`;

  const data = await cachedFetch(url);

  if (data.stat !== "ok") {
    throw new Error("Failed to fetch Photos in Album");
  }

  acc = acc.concat(data.photoset.photo);

  if (page < data.photoset.pages) {
    return getAllAlbums(user_id, key, page + 1, acc);
  } else {
    return acc;
  }
}

async function getPhotoSizes(key: string, photo_id: string) {
  const url = `https://www.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=${key}&photo_id=${photo_id}&format=json&nojsoncallback=1`;

  const data = await cachedFetch(url);

  if (data.stat !== "ok") {
    throw new Error("Failed to fetch Photo");
  }

  return data.sizes.size as Array<{
    label: string;
    width: number;
    height: number;
    source: string;
    url: string;
    media: string;
  }>;
}

async function cachedFetch(url: string, expiry = 300000) {
  const now = Date.now();
  if (flickrCache.has(url)) {
    const stored = flickrCache.get(url);
    if (now - stored.timestamp < expiry) return stored.data;
  }

  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      flickrCache.set(url, { timestamp: now, data });
      return data;
    });
}
