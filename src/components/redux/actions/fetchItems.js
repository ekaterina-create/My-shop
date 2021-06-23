import itemsLoad from "./itemsLoad";
import itemsRequesed from "./itemsRequested";


const fetchItems = (dataService, dispatch) => ()=> {
   dispatch(itemsRequesed());
   dataService.getItems()
   .then((data)=>  dispatch(itemsLoad(data)))

  }

const fetchFilteredItems = (dataService, dispatch, prop, value) => ()=> {
   dispatch(itemsRequesed());
   dataService.getFilteredItems(prop, value)
   .then((data)=>  dispatch(itemsLoad(data)))

  }  

export {fetchItems, fetchFilteredItems }