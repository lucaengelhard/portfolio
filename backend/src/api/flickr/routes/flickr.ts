export default {
  routes: [
    {
      method: "GET",
      path: "/flickr",
      handler: "flickr.getAlbums",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/flickr/album",
      handler: "flickr.getAlbumContent",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
