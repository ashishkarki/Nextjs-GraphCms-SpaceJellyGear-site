import { gql } from '@apollo/client'

export const HOME_PAGE_QUERY = gql`
  query PageHome($locale: Locale!) {
    page(where: { slug: "home" }) {
      heroLink
      heroText
      heroTitle
      id
      name
      slug
      heroBackground
      localizations(locales: [$locale]) {
        heroText
        heroTitle
        locale
      }
    }

    products(where: { categories_some: { slug: "featured" } }) {
      id
      name
      price
      image
      slug
    }
  }
`

export const PRODUCTS_QUERY = gql`
  query PageProducts {
    products {
      name
      price
      slug
      image
    }
  }
`

export const PRODUCT_QUERY = gql`
  query PageProduct($slug: String, $locale: Locale!) {
    product(where: { slug: $slug }) {
      id
      name
      image
      price
      description {
        html
      }
      slug
      localizations(locales: [$locale]) {
        description {
          html
        }
        locale
      }
    }
  }
`

export const CATEGORIES_QUERY = gql`
  query Categories {
    categories {
      id
      slug
    }
  }
`

export const CATEGORY_QUERY = gql`
  query Category($slug: String = "") {
    category(where: { slug: $slug }) {
      id
      name
      slug
      products {
        id
        name
        price
        image
        slug
      }
    }
  }
`
