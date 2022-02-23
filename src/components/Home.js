import React, { useState } from "react";
import faker from "@faker-js/faker";
import SingleProduct from "./SingleProduct";

const Home = () => {
  faker.seed(100);
  const productArray = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
  }));
  console.log(productArray);
  const [products] = useState(productArray);
  return (
    <div>
      <nav>Home</nav>
      {products.map((prod) => (
        <SingleProduct prod={prod} key={prod.id} />
      ))}
    </div>
  );
};

export default Home;
