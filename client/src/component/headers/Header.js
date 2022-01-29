import React,{useContext, useState} from 'react';
import { GlobleState } from '../../GlobleState';
import Menu from '../headers/icons/menu.svg'
import Close from '../headers/icons/close.svg'
import Cart from '../headers/icons/cart.svg'
import { Link } from 'react-router-dom';


function Header() {
  const value = useContext(GlobleState)

  return <div>
      <header>

<div className='menu'>
  <img src={Menu} alt='' width='30' />
</div>

<div className='logo'>
 <Link to="/">
   <h1> DevAt Shop</h1>
 </Link>
</div>

<ul>
  <li><Link to="/">Products</Link></li>
  <li><Link to="/login">Login and Register</Link></li>
  <li>
    <img src={Close} alt='' width='30' className='menu' />
  </li>
</ul>

<div className="cart-icon">
  <span>0</span>
  <Link to="/cart">
  <img src={Cart} alt='' width='30' />
  </Link>
</div>

      </header>
  </div>
}

export default Header;
