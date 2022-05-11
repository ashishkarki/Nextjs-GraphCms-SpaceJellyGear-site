import { gql } from "@apollo/client";

export const HOME_PAGE_GQL = gql`
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
