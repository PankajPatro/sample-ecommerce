import { Chip } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import { useCartSelector } from '../../services/cartSlice';
import './CartNavigation.css';

const CartNavigation: React.FC = () => {
  const count = useCartSelector((state) => state.cartReducer.count);
  
  return (
    <Link to="/cart">
      <Chip
        label={count}
        onDelete={()=>{}}
        onClick={()=>{}}
        deleteIcon={<ShoppingCart />}
      />
    </Link>
  );
}

export default CartNavigation;
