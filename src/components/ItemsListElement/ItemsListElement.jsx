import React, { useState } from 'react'

export function ItemsListElement({item, onAddedToCart}) {
   const { name,description, price,img,label } = item;
   const [clicked,setClicked] = useState(false)

   const handleClick = () => {
      onAddedToCart()
      console.log('добавлен товар')
      setClicked(true)
      setTimeout(() => setClicked(false), 500);
   }
   return (
      
      <div className="goods-card">
         {label === 'new' && <span className="label">New</span>}
      <img src={img} alt="good-img" className="goods-image"></img>
         <h3 className="goods-title">{name}</h3>
         <p className="goods-description">{description}</p>
         <button className="button goods-card-btn add-to-cart" onClick={handleClick}>
            <span className="button-price">${price}</span>
         </button>
         {clicked && <strong className='alert'>товар добавлен</strong>}
         </div>
        
   )
}

