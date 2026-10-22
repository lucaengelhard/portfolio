import { gql } from "@apollo/client";

export const PROJECT = gql`
  query GetProject($id: ID!) {
    post(documentId: $id) {
      Title
      Subtitle
      Thumbnail {
        url
      }
      Tags(pagination: { limit: 100 }) {
        documentId
        Title
        Color
      }
      Collaborators(pagination: { limit: 100 }) {
        documentId
        Name
        URL
        Mail
      }
      Content
      Gallery {
        Description
        Images(pagination: { limit: 20 }) {
          url
        }
      }
    }
  }
`;
