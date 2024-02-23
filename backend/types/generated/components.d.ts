import type { Schema, Attribute } from '@strapi/strapi';

export interface NavigationNavigationLinkExternal extends Schema.Component {
  collectionName: 'components_navigation_navigation_link_externals';
  info: {
    displayName: 'Extern\u00ED odkaz';
    icon: 'earth';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
  };
}

export interface NavigationNavigationLink extends Schema.Component {
  collectionName: 'components_navigation_navigation_links';
  info: {
    displayName: 'Polo\u017Eka navigace';
    icon: 'link';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.Relation<
      'navigation.navigation-link',
      'oneToOne',
      'api::page.page'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'navigation.navigation-link-external': NavigationNavigationLinkExternal;
      'navigation.navigation-link': NavigationNavigationLink;
    }
  }
}
