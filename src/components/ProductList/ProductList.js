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
              <Button>Add to Cart</Button>
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default ProductList;
