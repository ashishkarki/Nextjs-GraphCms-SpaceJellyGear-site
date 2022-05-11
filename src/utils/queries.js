import { gql } from "@apollo/client";

export const HOME_PAGE_QUERY = gql`
  query PageHome {
    page(where: { slug: "home" }) {
      heroLink
      heroText
      heroTitle
      id
      name
      slug
      heroBackground
    }
    products(first: 10) {
      name
      price
      slug
      image
    }
  }
`;

export const PRODUCTS_QUERY = gql`
  query PageProducts {
    products {
      name
      price
      slug
      image
    }
  }
`;

export const PRODUCT_QUERY = gql`
  query PageProduct($slug: String) {
    product(where: { slug: $slug }) {
      id
      name
      image
      price
      description {
        html
      }
    }
  }
`;
