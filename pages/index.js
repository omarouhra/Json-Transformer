import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import responce from "../responce";
import styles from "../styles/Home.module.css";

export default function Home() {
  let goalArray = [];

  // map return array by default !
  goalArray = responce.map(
    ({ id, category: { highLevel, lowLevel }, title, price, salePrice }) => ({
      id: id,
      product_details: {
        category: `${highLevel}-${lowLevel}`,
        name: title,
      },
      price_data: {
        price: price,
        salePrice: salePrice,
      },
    })
  );

  console.log(goalArray);

  return (
    <div className={styles.container}>
      <h1>Json Transformer</h1>
    </div>
  );
}
