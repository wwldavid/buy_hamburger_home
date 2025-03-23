import { useState } from "react";
import Meals from "./components/Meals/Meals";
import CartContext from "./store/cart-context";
import FilterMeals from "./components/filterMeals/FilterMeals";
import Cart from "./components/Cart/Cart";

const MEALS_DATA = [
  {
    id: "1",
    title: "hamburger",
    desc: "here is best delicioua beef hamburger for you every day ",
    price: 12,
    img: "/img/meals/1.png",
  },
  {
    id: "2",
    title: "Double cheese hamburger",
    desc: "here is best delicioua beef hamburger for you every day ",
    price: 15,
    img: "/img/meals/2.png",
  },
  {
    id: "3",
    title: "Big MAC hamburger",
    desc: "here is best delicioua beef hamburger for you every day",
    price: 23,
    img: "/img/meals/3.png",
  },
  {
    id: "4",
    title: "Spicy Chicken Leg hamburger",
    desc: "here is best delicioua beef hamburger for you every day ",
    price: 18,
    img: "/img/meals/4.png",
  },
  {
    id: "5",
    title: "chicken hamburger",
    desc: "here is best delicioua beef hamburger for you every day ",
    price: 14,
    img: "/img/meals/5.png",
  },
  {
    id: "6",
    title: "chicken wing hamburger",
    desc: "here is best delicioua beef hamburger for you every day ",
    price: 21,
    img: "/img/meals/6.png",
  },
  {
    id: "7",
    title: "beef hamburger",
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

  const filterHandler = (keyword) => {
    const newMealsData = MEALS_DATA.filter(
      (item) => item.title.indexOf(keyword) !== -1
    );
    setMealsData(newMealsData);
  };

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

  const clearCart = () => {
    const newCart = { ...cartData };
    newCart.items.forEach((item) => delete item.amount);
    newCart.items = [];
    newCart.totalAmount = 0;
    newCart.totalPrice = 0;

    setCartData(newCart);
  };

  return (
    <CartContext.Provider
      value={{ ...cartData, addItem, removeItem, clearCart }}
    >
      <div>
        <FilterMeals onFilter={filterHandler} />
        <Meals mealsData={mealsData} />
        <Cart />
      </div>
    </CartContext.Provider>
  );
}

export default App;
