import React from 'react';
import { ItemsConsumer } from '../context/context'

const Wrapper = ()  => (Wrapped) => {
   return (props) => {
    
      return (
         <ItemsConsumer>
            {
               (dataService) => {
                  return (<Wrapped {...props}
                     dataService={dataService}/>
                  )
               }
            }
         </ItemsConsumer>
      )
   }
  
}

export default Wrapper
