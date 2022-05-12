import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="<https://app.snipcart.com>" />
        <link rel="preconnect" href="<https://cdn.snipcart.com>" />
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.3.0/default/snipcart.css"
        />
      </Head>

      <body>
        <Main />
        <NextScript />

        <script
          async
          src="https://cdn.snipcart.com/themes/v3.3.0/default/snipcart.js"
        ></script>
        <div
          id="snipcart"
          data-config-modal-style="side"
          data-api-key="MmUwYzVjMGYtYjgzYi00YmE5LTlkNmYtOTU2YzI0MmE3MDE3NjM3ODc4ODEwNzg2NTY5MjM5"
          hidden
        ></div>
      </body>
    </Html>
  );
}
