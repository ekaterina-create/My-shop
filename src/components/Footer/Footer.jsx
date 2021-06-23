import React from 'react'


function Footer() {
   return (
      <footer className="footer">
         <div className="container footer__container">
            <div className="payment">
               <img className="payment-logo" src="img/visa.png" alt="visa logo"></img>
               <img className="payment-logo" src="img/master-card.png" alt="master card logo"></img>
               <img className="payment-logo" src="img/paypal.png" alt="paypal logo "></img>
               <img className="payment-logo" src="img/bitcoin.png" alt="bitcoin logo"></img>
            </div>
            <div className="social">
               <span className="footer-text">Follow Us</span>
               <span className="footer-social">
                  <a href="https://www.facebook.com/" className="social-link">
                     <img src="img/Facebook.svg" alt="Facebook"></img>
                  </a>
                  <a href="https://twitter.com/?lang=ru" className="social-link">
                     <img src="img/Twitter.svg" alt="Twitter"></img>
                  </a>
                  <a href="https://www.instagram.com/?hl=ru" className="social-link">
                     <img src="img/Instagram.svg" alt="Instagram"></img>
                  </a>
               </span>
            </div>
           
         </div>

      </footer>
   )
}

export default Footer
