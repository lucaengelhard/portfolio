export type TProject = {
  id: string;
  attributes: {
    Title: string;
    Subtitle: string;
    Tags: TTag[];
    Thumbnail: TThumbnail;
    Content?: TContent;
    Gallery?: TGallery;
  };
};

export type TThumbnail = {
  data: {
    attributes: {
      url: string;
    };
  };
};

export type TContent = [
  TParagraph | THeading | TImage | TBlockQuote | TCodeBlock | TList,
];

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

export type TBlockQuote = {
  type: "quote";
  children: [{ type: "text"; text: string }];
};

export type TCodeBlock = {
  type: "code";
  children: [{ type: "text"; text: string }];
};

export type TList = {
  type: "list";
  format: "ordered" | "unordered";
  children: TListItem[];
};

export type TListItem = {
  type: "list-item";
  children: [{ type: "text"; text: string }];
};

export type TGallery = {
  Description: string;
  Images: { data: [{ attributes: { url: string } }] };
};

export type TTag = {
  Title: string;
  color: string;
};

export type TPhotoproject = {
  id: string;
  attributes: {
    Title: string;
    Description: string;
    Thumbnail: TThumbnail;
    Gallery?: TGallery;
  };
};

export type TAbout = {
  attributes: {
    Portrait: TThumbnail;
    Welcome: string;
    Stack: TTag[];
    Education: TTag[];
    Imprint: TTag[];
  };
};
