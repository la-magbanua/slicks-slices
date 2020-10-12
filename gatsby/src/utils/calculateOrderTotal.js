import calculatePizzaPrice from './calculatePizzaPrice';

export default function calculateOrderTotal(order, pizzas) {
  return order.reduce((acc, next) => {
    const pizza = pizzas.find(pizza => pizza.id === next.id);
    return (acc += calculatePizzaPrice(pizza.price, next.size));
  }, 0);
}
