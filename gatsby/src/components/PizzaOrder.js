import React from 'react';
import Img from 'gatsby-image';
import MenuItemStyles from '../styles/MenuItemStyles';
import calculatePizzaPrice from '../utils/calculatePizzaPrice';
import formatMoney from '../utils/formatMoney';

export default function PizzaOrder({ order, pizzas, removeFromOrder }) {
  return (
    <>
      {order.map((singleOrder, i) => {
        let orderItem = pizzas.find(pizza => pizza.id === singleOrder.id);
        return (
          <MenuItemStyles key={`${singleOrder.id}-${i}`}>
            <Img fluid={orderItem.image.asset.fluid} />
            <h2>{orderItem.name}</h2>
            <p>
              {formatMoney(
                calculatePizzaPrice(orderItem.price, singleOrder.size)
              )}
              <button
                type="button"
                className="remove"
                title="{`Remove ${singleOrder.size} ${orderItem.name} from order`}"
                onClick={() => removeFromOrder(i)}
              >
                &times;
              </button>
            </p>
          </MenuItemStyles>
        );
      })}
    </>
  );
}
