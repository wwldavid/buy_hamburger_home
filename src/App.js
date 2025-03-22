import { useState } from "react";
import Meals from "./components/Meals/Meals";
import CartContext from "./store/cart-context";
import FilterMeals from "./components/filterMeals/FilterMeals";

const MEALS_DATA = [
  {
    id: "1",
    title: "hamburger1",
    desc: "here is best delicioua beef hamburger for you every day ",
    price: 12,
    img: "/img/meals/1.png",
  },
  {
    id: "2",
    title: "hamburger2",
    desc: "here is best delicioua beef hamburger for you every day ",
    price: 15,
    img: "/img/meals/2.png",
  },
  {
    id: "3",
    title: "hamburger3",
    desc: "here is best delicioua beef hamburger for you every day",
    price: 123,
    img: "/img/meals/3.png",
  },
  {
    id: "4",
    title: "hamburger1",
    desc: "here is best delicioua beef hamburger for you every day ",
    price: 18,
    img: "/img/meals/4.png",
  },
  {
    id: "5",
    title: "hamburger1",
    desc: "here is best delicioua beef hamburger for you every day ",
    price: 14,
    img: "/img/meals/5.png",
  },
  {
    id: "6",
    title: "hamburger1",
    desc: "here is best delicioua beef hamburger for you every day ",
    price: 21,
    img: "/img/meals/6.png",
  },
  {
    id: "7",
    title: "hamburger1",
    desc: "here is best delicioua beef hamburger for you every day",
    price: 22,
    img: "/img/meals/7.png",
  },
];

function App() {
  const [mealsData, setMealsData] = useState(MEALS_DATA);
  const [cartData, setCartData] = useState({
    items: [],
    totalAmount: 0,
    totalPrice: 0,
  });

  const addItem = (meal) => {
    const newCart = { ...cartData };
    if (newCart.items.indexOf(meal) === -1) {
      newCart.items.push(meal);
      meal.amount = 1;
    } else {
      meal.amount += 1;
    }
    newCart.totalAmount += 1;
    newCart.totalPrice += meal.price;
    setCartData(newCart);
  };

  const removeItem = (meal) => {
    const newCart = { ...cartData };
    meal.amount -= 1;
    if (meal.amount === 0) {
      newCart.items.splice(newCart.items.indexOf(meal), 1);
    }
    newCart.totalAmount -= 1;
    newCart.totalPrice -= meal.price;
    setCartData(newCart);
  };

  return (
    <CartContext.Provider value={{ ...cartData, addItem, removeItem }}>
      <div>
        <FilterMeals />
        <Meals mealsData={mealsData} />
      </div>
    </CartContext.Provider>
  );
}

export default App;
