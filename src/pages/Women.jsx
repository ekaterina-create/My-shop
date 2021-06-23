import React from 'react';
import { ItemsListElement } from '../components/ItemsListElement/ItemsListElement'
import { connect } from 'react-redux';
import Wrapper from '../components/../hoc/wrapper';
import Spinner from '../components/Spinner/Spinner'
import { fetchFilteredItems } from '../components/redux/actions/fetchItems';
import { addToCart } from '../components/redux/actions/addToCart';


class Women extends React.Component {

   componentDidMount() {
      this.props.fetchFilteredItems();

   }
   render() {
      const { items, loading, onAddedToCart } = this.props;

      if (loading) {
         return <Spinner />
      }
      return (
         <div className="container d-flex">
            {items.map((item) => {
               return (
                  <ItemsListElement key={item.id} item={item} onAddedToCart={() => onAddedToCart(item.id)} />
               )
            })}
         </div>
      )
   }
}


const mapStateToProps = (state) => {
   return {
      items: state.items,
      loading: state.loading
   };
};
const mapDispatchToProps = (dispatch, { dataService }) => {

   return {
      fetchFilteredItems: fetchFilteredItems(dataService, dispatch, 'gender', 'Womens'),
      onAddedToCart: (id) => {
         dispatch(addToCart(id))
      }
   }
}
export default Wrapper()(connect(mapStateToProps, mapDispatchToProps)(Women));