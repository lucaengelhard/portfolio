export type TProject = {
  id: string;
  attributes: {
    Title: string;
    Subtitle: string;
    Tags: TTag[];
    Thumbnail: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    Content?: TContent;
    Gallery?: TGallery;
  };
};

export type TContent = [TParagraph | THeading | TImage];

export type TParagraph = {
  type: "paragraph";
  children: [{ type: "text"; text: string }];
};

export type THeading = {
  type: "heading";
  children: [{ type: "text"; text: string }];
  level: number;
};

export type TImage = {
  type: "image";
  children: [{ type: "text"; text: string }];
  image: {
    alternativeText: string;
    caption: string | null;
    createdAt: string;
    ext: string;
    //formats: Object { thumbnail: {…}, small: {…}, medium: {…}, … }
    hash: string;
    height: number;
    mime: string;
    name: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: string | null;
    size: number;
    updatedAt: string;
    url: string;
    width: number;
  };
};

export type TGallery = {
  Description: string;
  Images: { data: [{ attributes: { url: string } }] };
};

export type TTag = {
  Title: string;
  color: string;
};
