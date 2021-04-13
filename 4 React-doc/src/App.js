import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Data from "./Data.json";
import Product from "./Product.json";
import ProductCard from "./components/ProductCard";
import ST from "./STATE";
import Launcher from "./Conditinal_render/Launcher";
import Event from "./Event_handling_binding/Event";
import HookUseState from "./Hook_UseState/HookUseState";
import Form from "./FORM_CONTROL/FORM";

function App() {
  // below key is an extra attribute for every componenents to make it unique
  // it is wrriten for console error
  // Below map will return an array containing <Card> components
  let persons = Data.map((person, index) => (
    <Card key={index} name={person.name} age={person.age} />
  ));
  let products = Product.map((product, index) => {
    return (
      <ProductCard
        key={index}
        name={product.name}
        model={product.model}
        price={product.price}
      />
    );
  });
  return (
    <div>
      <Header />
      <Event />
      <br></br>
      <h1>Hook useState() in functional component</h1>
      <HookUseState />

      <h1>Condional rendering in class component</h1>
      <Launcher />
      <h1>State in class component</h1>
      <ST />
      {/* using props we can send data as attribute */}
      {/* <Card name="Authoy" age="20" />
    <Card name="Sadman" age="21" />
    <Card name="Shafi" age="22" />
    <Card name="Mim" age="21" />
    <Card name="Jubair" age="22" /> */}

      <h1>Functional component</h1>
      {persons}

      {/* <ProductCard name="Macbook pro" model="A5" price="566$" />
      <ProductCard name="Macbook pro" model="A5" price="566$" />
      <ProductCard name="Macbook pro" model="A5" price="566$" />
      <ProductCard name="Macbook pro" model="A5" price="566$" /> */}
      <h1>Class component</h1>
      {products}
      <Form />
    </div>
  );
}

export default App;
