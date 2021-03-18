import { Button, IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import React from 'react';
import { useDispatch } from 'react-redux';
import { ItemData } from '../../models/itemData';
import { remove, useCartSelector } from '../../services/cartSlice';
import './Cart.css';

const Cart: React.FC = () => {
  const cartData = useCartSelector((state) => state.cartReducer.cartData);
  const dispatch = useDispatch();
  const removeFromCart = (itemData: ItemData) => {
    dispatch(remove(itemData))
  }

  return (
    <div>
      {
        cartData ? cartData.length > 0 ?
          <>
            <table className="table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Item</th>
                  <th>Snapshot</th>
                  <th>Count</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody></tbody>
              {
                cartData?.map((cartItem) => {
                  return (
                    <tr key={cartItem.id}>
                      <td>{cartItem.itemData.category}</td>
                      <td>{cartItem.itemData.imageTitle}</td>
                      <td><img height="50" width="50" src={cartItem.itemData.imageUrl} /></td>
                      <td>{cartItem.count}</td>
                      <td>
                        <IconButton onClick={() => removeFromCart(cartItem.itemData)}>
                          <Delete />
                        </IconButton>
                      </td>
                    </tr>
                  )
                })
              }
            </table>
            <div className="align-right">
              <Button variant="contained" color="primary" className="margin-right-10">
                Check Out
              </Button>
            </div>
          </>
          : <span>No Items in Cart.</span> : <span>No Items in Cart.</span>
      }
    </div>
  )
}

export default Cart;
