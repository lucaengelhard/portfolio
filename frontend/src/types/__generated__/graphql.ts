/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type GetProjectQueryVariables = Exact<{
  id: string | number;
}>;


export type GetProjectQuery = { post: { __typename: 'Post', Title: string, Subtitle: string, Content: unknown, Thumbnail: { __typename: 'UploadFile', url: string }, Tags: Array<{ __typename: 'Tag', documentId: string, Title: string, Color: string } | null>, Collaborators: Array<{ __typename: 'Collaborator', documentId: string, Name: string, URL: string | null, Mail: string | null } | null>, Gallery: { __typename: 'ComponentElementsGallery', Description: string | null, Images: Array<{ __typename: 'UploadFile', url: string } | null> } | null } | null };

export type GetAboutQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAboutQuery = { about: { __typename: 'About', Welcome: string, Portrait: { __typename: 'UploadFile', url: string }, Stack: Array<{ __typename: 'Tag', Title: string, Color: string } | null>, Education: Array<{ __typename: 'Tag', Title: string, Color: string } | null>, Imprint: Array<{ __typename: 'Tag', Title: string, Color: string } | null> } | null };

export type GetCodesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCodesQuery = { posts: Array<{ __typename: 'Post', documentId: string, Title: string, Subtitle: string, Tags: Array<{ __typename: 'Tag', documentId: string, Title: string, Color: string } | null>, Thumbnail: { __typename: 'UploadFile', url: string } } | null> };

export type GetDesignsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDesignsQuery = { posts: Array<{ __typename: 'Post', documentId: string, Title: string, Subtitle: string, Tags: Array<{ __typename: 'Tag', documentId: string, Title: string, Color: string } | null>, Thumbnail: { __typename: 'UploadFile', url: string } } | null> };

export type GetHomeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHomeQuery = { home: { __typename: 'Home', Heroimage: { __typename: 'UploadFile', url: string, formats: unknown } } | null };
