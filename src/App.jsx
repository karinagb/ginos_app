import React from 'react';
import { createRoot } from 'react-dom';
import Pizza from './Pizza';

const App = () => {
  // return React.createElement('div', {}, [
  //   React.createElement('h1', {}, "Padre Gino's"),
  //   React.createElement(Pizza, {
  //     name: 'Pepperoni',
  //     description: 'pepperoni',
  //   }),
  //   React.createElement(Pizza, {
  //     name: 'Hawaiian',
  //     description: 'pineapple',
  //   }),
  //   React.createElement(Pizza, {
  //     name: 'BBQ Chicken',
  //     description: 'bbq sauce & chicken',
  //   }),
  //   React.createElement(Pizza, {
  //     name: '4 Cheeses',
  //     description: 'a lot of cheese',
  //   }),
  //   React.createElement(Pizza, {
  //     name: 'Margarita',
  //     description: 'light',
  //   }),
  // ]);

  return (
    <div>
      <h1>Padre Gino's - Order Now</h1>
      <Pizza name="Pepperoni" description="pepperoni, cheese, n stuff" image={"/public/pizzas/pepperoni.webp"}></Pizza>
      <Pizza name="Hawaiian" description="pineapple, cheese, n stuff" image={"/public/pizzas/hawaiian.webp"}></Pizza>
      <Pizza name="BBQ Chicken" description="bbq sauce, chicken, cheese, n stuff" image={"/public/pizzas/bbq_ckn.webp"}></Pizza>
      <Pizza name="4 Cheeses" description="only cheese, a lot of it" image={"/public/pizzas/four_cheese.webp"}></Pizza>
    </div>
  )
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);
