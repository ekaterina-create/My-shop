import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Button from '../Button/Button';


function Header(props) {

  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
             <div>
              <h1>Wildberiiies</h1>
              <p className='logo-text'>магазин одежды и аксессуаров</p>
            </div>
          </div>
        </Link >
        <div className="col-lg-6 d-none d-lg-block">
				<nav>
          <div className="burger"></div>
					<ul className="navigation">
          
          <li className="navigation-item">
          <NavLink to="/women" className="navigation-link" data-field="gender" activeClassName="selected">Женское</NavLink>
						</li>
						<li className="navigation-item">
            <NavLink to="/men" className="navigation-link" data-field="gender" activeClassName="selected">Мужское</NavLink>
						</li>
					<li className="navigation-item">
            <NavLink to="/accessories" className="navigation-link" data-field="category" activeClassName="selected">Аксессуары</NavLink>
						</li>
						<li className="navigation-item">
							<NavLink to="/shoes" className="navigation-link" data-field="category" activeClassName="selected">Обувь</NavLink>
						</li>
           </ul>
				</nav>
			</div>
        <Link to="/cart">
          <Button/>
        </Link>
      </div>
    </div>


  )
}

export default Header