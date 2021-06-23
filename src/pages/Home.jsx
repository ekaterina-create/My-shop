import React from 'react'
import ItemsListContainer from '../components/ItemsListContainer/ItemsListContainer'
import Slider from '../components/Slider/Slider'


function Home() {
  const [viewAll,setViewAll] = React.useState(false)

  const handleClick = () => {
    setViewAll(true)
  }

  return (
    <div>
      <Slider/>
    <div className="container">
      <div className="home-top">
      <h2 className="section-title">Новые поступления</h2>
      <button className="show-all" onClick={handleClick}> Показать все </button>
      </div>
       {!viewAll &&  <ItemsListContainer newarrival={true}/>}
       {viewAll &&  <ItemsListContainer newarrival={false}/>}
     
    </div>
    </div>
  );
}

export default Home;