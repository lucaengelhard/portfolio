export type TProject = {
  id: string;
  attributes: {
    Title: string;
    Subtitle: string;
    Tags: TTags;
    Thumbnail: TThumbnail;
    Content?: TContent;
    Gallery?: TGallery;
    Collaborators?: TCollaborators;
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
  | TParagraph
  | THeading
  | TImage
  | TBlockQuote
  | TCodeBlock
  | TList
  | TText
  | TLink
  | TListItem,
];

export type TText = {
  type: "text";
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  code?: boolean;
};

export type TParagraph = {
  type: "paragraph";
  children: TContent;
};

export type TLink = {
  type: "link";
  children: TContent;
  url: string;
};

export type THeading = {
  type: "heading";
  children: TContent;
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
  children: TContent;
};

export type TCodeBlock = {
  type: "code";
  children: TContent;
};

export type TList = {
  type: "list";
  format: "ordered" | "unordered";
  children: TContent;
};

export type TListItem = {
  type: "list-item";
  children: TContent;
};

export type TGallery = {
  Description: string;
  Images: { data: [{ attributes: { url: string } }] };
};

export type TTags = {
  data: [{ id: string; attributes: { Tag: TTag } }];
};

export type TTag = {
  Title: string;
  color: string;
};

export type TCollaborators = {
  data: { id: string; attributes: TCollaborator }[];
};

export type TCollaborator = {
  Name: string;
  URL: string;
  Mail: string;
};

export type TPhotoproject = {
  id: string;
  attributes: {
    Title: string;
    Content: TContent;
    Thumbnail: TThumbnail;
    Gallery?: TGallery;
  };
};

export type TAbout = {
  attributes: {
    Portrait: TThumbnail;
    Welcome: string;
    Stack: TTags;
    Education: TTag[];
    Imprint: TTag[];
  };
};
