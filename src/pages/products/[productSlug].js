import Head from "next/head";
import DOMPurify from "isomorphic-dompurify";

import Layout from "@components/Layout";
import Container from "@components/Container";
import Button from "@components/Button";

import styles from "@styles/Product.module.scss";
import { setClientAndGetData } from "@utils/commonScripts";
import { PRODUCTS_QUERY, PRODUCT_QUERY } from "@utils/queries";
import AppImage from "@components/AppImage";

export default function Product({ product }) {
  return (
    <Layout>
      <Head>
        <title>{product.name}</title>
        <meta
          name="description"
          content={`Find ${product.name} on our website`}
        />
      </Head>

      <Container>
        <div className={styles.productWrapper}>
          <AppImage
            className={styles.productImage}
            src={product.image.url}
            width={product.image.width}
            height={product.image.height}
          />

          <div className={styles.productContent}>
            <h1>{product.name}</h1>

            <div
              className={styles.productDescription}
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(product.description?.html),
              }}
            />

            <p className={styles.productPrice}>${product.price}</p>

            <p className={styles.productBuy}>
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
          </div>
        </div>
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const queryResult = await setClientAndGetData(PRODUCT_QUERY, {
    slug: params.productSlug,
  });

  return {
    props: {
      product: queryResult.data.product,
    },
  };
}

export async function getStaticPaths() {
  const queryResult = await setClientAndGetData(PRODUCTS_QUERY);

  const paths = queryResult.data.products.map((product) => {
    return {
      params: {
        productSlug: product.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
