import Head from "next/head";
import Image from "next/image";
import responce from "../responce";
import styles from "../styles/Home.module.css";

export default function Home() {
  const data = responce;
  // map return an array by default !
  const numbers = [1, 2, 3, 4, 5, 6];
  const doubles = numbers.map(number => number * 2);

  const goalArray = responce.map(
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
  console.log(doubles);

  // Reduce
  const total = data.reduce((total, item) => total + item.price, 0);
  console.log(total);

  return (
    <div className={styles.container}>
      <h1>Json Transformer</h1>
    </div>
  );
}
