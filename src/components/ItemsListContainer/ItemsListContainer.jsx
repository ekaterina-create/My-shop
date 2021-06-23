import React from 'react';
import ItemsList  from '../ItemList/ItemList'
import { connect } from 'react-redux';
import Wrapper from '../../hoc/wrapper';
import Spinner from '../Spinner/Spinner'
import {fetchItems, fetchFilteredItems} from '../redux/actions/fetchItems';
import { addToCart } from '../redux/actions/addToCart';

class ItemsListContainer extends React.Component {

   componentDidMount() {
      const {newarrival} = this.props;
      if(newarrival) {
      this.props.fetchFilteredItems();
      }else {
         this.props.fetchItems();
      }

   }
   render() {
      const { items, loading, onAddedToCart } = this.props;
      if (loading) {
         return <Spinner />
      }
      return <ItemsList items={items} onAddedToCart={onAddedToCart}/>
   }
}


const mapStateToProps = (state) => {
   return {
      items: state.items,
      loading: state.loading
   };
};

const mapDispatchToProps = (dispatch, {dataService}) => {
  
   return {
     fetchItems:fetchItems(dataService, dispatch),
     fetchFilteredItems:fetchFilteredItems(dataService, dispatch,'label','new'),
     onAddedToCart:(id) => {
        dispatch(addToCart(id))
        
     }
   }
}
export default Wrapper()(connect(mapStateToProps, mapDispatchToProps)(ItemsListContainer));

