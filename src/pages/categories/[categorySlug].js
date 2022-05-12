import Head from "next/head";

import Layout from "@components/Layout";
import Container from "@components/Container";
import Button from "@components/Button";

import styles from "@styles/Page.module.scss";
import { CATEGORIES_QUERY, CATEGORY_QUERY } from "@utils/queries";
import { setClientAndGetData } from "@utils/commonScripts";
import AppImage from "@components/AppImage";
import Link from "next/link";

export default function Category({ category, products }) {
  return (
    <Layout>
      <Head>
        <title>{category.name}</title>
        <meta
          name="description"
          content={`View category for ${category.name}`}
        />
      </Head>

      <Container>
        <h1>{category.name}</h1>

        <h2>Products</h2>

        <ul className={styles.products}>
          {products.map((product) => (
            <li key={product.slug}>
              <Link href={`/products/${product.slug}`}>
                <a>
                  <div className={styles.productImage}>
                    <AppImage
                      className={styles.productImage}
                      src={product.image.url}
                      width={product.image.width}
                      height={product.image.height}
                    />
                  </div>
                  <h3 className={styles.productTitle}>{product.name}</h3>
                  <p className={styles.productPrice}>${product.price}</p>
                </a>
              </Link>

              <p>
                <Button
                  className="snipcart-add-item"
                  data-item-id={product.id}
                  data-item-price={product.price}
                  data-item-image={product.image.url}
                  data-item-name={product.name}
                  data-item-url={`/products/${product.slug}`}
                >
                  Add to Cart
                </Button>
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const queryResult = await setClientAndGetData(CATEGORY_QUERY, {
    slug: params.categorySlug,
  });

  return {
    props: {
      category: queryResult.data.category,
      products: queryResult.data.category.products,
    },
  };
}

export async function getStaticPaths() {
  const queryResult = await setClientAndGetData(CATEGORIES_QUERY);

  const paths = queryResult.data.categories.map((category) => {
    return {
      params: {
        categorySlug: category.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
