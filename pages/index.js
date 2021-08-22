import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import responce from "../responce";
import styles from "../styles/Home.module.css";

export default function Home() {
  let goalArray = [];

  responce.map(item => {
    const arr = {
      id: item.id,
      product_details: {
        category: `${item.category.highLevel}-${item.category.lowLevel}`,
        name: item.title,
      },
      price_data: {
        price: item.price,
        salePrice: item.salePrice,
      },
    };

    goalArray.push(arr);
  });

  console.log(goalArray);

  return (
    <div className={styles.container}>
      <h1>Json Transformer</h1>
    </div>
  );
}
