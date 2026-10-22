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

export type TTag = {
  Title: string;
  Color: string;
};
