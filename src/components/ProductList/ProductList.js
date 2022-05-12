import Link from "next/link";

import Button from "@components/Button";
import AppImage from "@components/AppImage";

import styles from "./ProductList.module.scss";

const ProductList = ({ productsData }) => {
  return (
    <ul className={styles.products}>
      {productsData.map((product) => {
        return (
          <li key={product.slug}>
            <Link href={`/products/${product.slug}`}>
              <a className="">
                {/* <div className={styles.productImage}> */}
                <AppImage
                  className={styles.productImage}
                  src={product.image.url}
                  width={product.image.width}
                  height={product.image.height}
                />
                {/* </div> */}
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
        );
      })}
    </ul>
  );
};

export default ProductList;
