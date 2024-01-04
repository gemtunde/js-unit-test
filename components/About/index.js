import React from "react";
import commerce from "../../lib/commerce";

export async function getStaticProps(context) {
  const { data: products } = await commerce.products.list();
  const { data: categories } = await commerce.categories.list();

  return {
    props: { products, categories },
    revalidate: 30,
  };
}

const About = ({ products, categories }) => {
  console.log(products, categories);
  //commerce.products.list().then((product) => console.log(product));
  return (
    <div>
      <h2>About Us</h2>
      <input
        role="searchbox"
        type="text"
        title="Search"
        placeholder="Search products"
      />
    </div>
  );
};

export default About;
