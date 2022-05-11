import Head from "next/head";

import { ApolloClient, InMemoryCache } from "@apollo/client";

import Layout from "@components/Layout";
import Container from "@components/Container";
import ProductList from "@components/ProductList";

import styles from "@styles/Page.module.scss";
import { HOME_PAGE_QUERY } from "../utils/queries";
import { GRAPHCMS_API_ENDPOINT } from "@utils/constants";
import AppBackground from "../components/AppBackground";

export default function Home({ homeData, productsData }) {
  const { heroTitle, heroText, heroLink, heroBackground } = homeData;

  return (
    <Layout>
      <Head>
        <title>Space Jelly Gear</title>
        <meta name="description" content="Get your Space Jelly gear!" />
      </Head>

      <Container>
        <h1 className="sr-only">Space Jelly Gear</h1>

        <AppBackground
          heroLink={heroLink}
          heroTitle={heroTitle}
          heroText={heroText}
          heroBackground={heroBackground}
        />

        <h2 className={styles.heading}>Featured Gear</h2>

        <ProductList productsData={productsData} />
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
    uri: GRAPHCMS_API_ENDPOINT,
    cache: new InMemoryCache(),
  });

  const queryResult = await client.query({
    query: HOME_PAGE_QUERY,
  });

  const homeData = queryResult.data.page;
  const productsData = queryResult.data.products;

  return {
    props: {
      homeData,
      productsData,
    },
  };
}
