import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementsGallery extends Schema.Component {
  collectionName: 'components_elements_galleries';
  info: {
    displayName: 'Gallery';
    icon: 'grid';
  };
  attributes: {
    Description: Attribute.String;
    Images: Attribute.Media<'images', true> & Attribute.Required;
  };
}

export interface ElementsTag extends Schema.Component {
  collectionName: 'components_elements_tags';
  info: {
    displayName: 'Tag';
    icon: 'priceTag';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    color: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'elements.gallery': ElementsGallery;
      'elements.tag': ElementsTag;
    }
  }
}
