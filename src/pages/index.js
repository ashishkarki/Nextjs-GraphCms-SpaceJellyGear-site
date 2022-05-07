import Head from "next/head";
import Link from "next/link";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import Layout from "@components/Layout";
import Container from "@components/Container";
import Button from "@components/Button";

import products from "@data/products";

import styles from "@styles/Page.module.scss";

export default function Home({ homeData, productsData }) {
  console.log(`Received data by React Client: ${JSON.stringify(productsData)}`);

  const { heroTitle, heroText, heroLink, heroBackground } = homeData;

  return (
    <Layout>
      <Head>
        <title>Space Jelly Gear</title>
        <meta name="description" content="Get your Space Jelly gear!" />
      </Head>

      <Container>
        <h1 className="sr-only">Space Jelly Gear</h1>

        <div className={styles.hero}>
          <Link href={heroLink}>
            <a>
              <div className={styles.heroContent}>
                <h2>{heroTitle}</h2>
                <p>{heroText}</p>
              </div>
              <img
                className={styles.heroImage}
                src={heroBackground.url}
                width={heroBackground.width}
                height={heroBackground.height}
                alt=""
              />
            </a>
          </Link>
        </div>

        <h2 className={styles.heading}>Featured Gear</h2>

        <ul className={styles.products}>
          {productsData.map((product) => {
            return (
              <li key={product.slug}>
                <Link href="#">
                  <a>
                    <div className={styles.productImage}>
                      <img
                        width={product.image.width}
                        height={product.image.height}
                        src={product.image.url}
                        alt=""
                      />
                    </div>
                    <h3 className={styles.productTitle}>{product.name}</h3>
                    <p className={styles.productPrice}>${product.price}</p>
                  </a>
                </Link>
                <p>
                  <Button>Add to Cart</Button>
                </p>
              </li>
            );
          })}
        </ul>
      </Container>
    </Layout>
  );
}

/**
 * It fetches data from the GraphCMS API and returns it as props to the page
 * @returns The data is being returned as props.
 */
export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://api-ap-south-1.graphcms.com/v2/cl2una1640ibs01wbao6j81b1/master",
    cache: new InMemoryCache(),
  });

  const queryResult = await client.query({
    query: gql`
      query PageHome {
        page(where: { slug: "home" }) {
          heroLink
          heroText
          heroTitle
          id
          name
          slug
          heroBackground {
            height
            size
            width
            url
          }
        }
        products(first: 10) {
          name
          price
          slug
          image {
            height
            url
            width
          }
        }
      }
    `,
  });

  const homeData = queryResult.data.page;
  const productsData = queryResult.data.products;
  console.log(`Fetched data on the server: ${JSON.stringify(productsData)}`);

  return {
    props: {
      homeData,
      productsData,
    },
  };
}
