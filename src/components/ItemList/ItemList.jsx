import React from 'react';
import { ItemsListElement } from '../ItemsListElement/ItemsListElement'

function ItemList({items, onAddedToCart}) {
   return (
      <div className="container d-flex">
            {items.map((item) => {
               return (
                  <ItemsListElement key={item.id} item={item} onAddedToCart={() => onAddedToCart(item.id)}/>
               )
            })}
         </div>
   )
}

export default ItemList
