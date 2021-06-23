import React from 'react'


function TopButton() {

   const [showScroll, setShowScroll] = React.useState(false)

   const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
         setShowScroll(true)
      } else if (showScroll && window.pageYOffset <= 400) {
         setShowScroll(false)
      }
   };

   const scrollTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
   };

   window.addEventListener('scroll', checkScrollTop)

   return (
      <button className="scrollTop"
         onClick={scrollTop}
         style={{ height: 40, display: showScroll ? 'flex' : 'none' }}>Наверх</button>
   )
}

export default TopButton
