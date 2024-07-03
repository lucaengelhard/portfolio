import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementsGallery extends Schema.Component {
  collectionName: 'components_elements_galleries';
  info: {
    displayName: 'Gallery';
    icon: 'apps';
  };
  attributes: {
    Description: Attribute.String;
    Images: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true> &
      Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'elements.gallery': ElementsGallery;
    }
  }
}
