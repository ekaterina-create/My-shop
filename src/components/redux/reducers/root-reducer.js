const initialState = {
   items: [],
   loading: true,
   cartItems: [],
   orderTotal: 0
}

const updateCartItems = (cartItems, item, index) => {
   // удалять элементы
   if(item.count === 0) {
       return [
         ...cartItems.slice(0, index),
         ...cartItems.slice(index + 1)
      ]
   }
   // добавлять
   if (index === -1) {
      return [
         ...cartItems,
         item
      ]
   }
   
   // модифицировать
   return [
      ...cartItems.slice(0, index),
      item,
      ...cartItems.slice(index + 1)
   ]
}

const updateCartItem = (selectedItem, item = {}, quantity) => {
  
  const {id = selectedItem.id, 
   count = 0, 
   name = selectedItem.name, 
   price = 0, 
   description = selectedItem.description, 
   img = selectedItem.img} = item;
   
     return  {
         id,
         img,
         name,
         description,
         price: Number(price) + quantity*selectedItem.price,
         count: count + quantity
      }
}

const updateOrder = (state, itemId, quantity ) => {
   
   const {items, cartItems} = state
         const selectedItem = items.find(({ id }) => id === itemId);
         const selectedItemIndex = cartItems.findIndex(({ id }) => id === itemId);
         const item = cartItems[selectedItemIndex];
         const newItem = updateCartItem(selectedItem, item, quantity);
         const addedItems = updateCartItems(cartItems, newItem, selectedItemIndex)
         
         const total = addedItems.reduce((acc, item) => {
            return acc += Number(item.price);
        }, 0);
        
         return {
            ...state,
             orderTotal: total,
            cartItems: addedItems
         }
}


export const rootReducer = (state = initialState, action) => {
   
   switch (action.type) {
      case "ADD_TO_CART":
         return updateOrder(state, action.payload, 1)
      case "REMOVE_FROM_CART":
       return updateOrder(state, action.payload, -1)
      case "DELETE_FROM_CART":
         const item = state.cartItems.find(({ id }) => id === action.payload);
         return updateOrder(state, action.payload, -item.count)
      case 'ITEMS_REQUESTED':
         return {
            ...state,
            items: [],
            loading: true
         }
      case 'ITEMS_LOADED':
         return {
            ...state,
            items: action.payload,
            loading: false
         }
      default:
         return state
   }

}

export default rootReducer