import { Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton } from '@material-ui/core';
import { AddShoppingCartRounded } from '@material-ui/icons';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ItemData } from '../../models/itemData';
import { add } from '../../services/cartSlice';
import { ItemDataService } from '../../services/itemDataService';
import { filter, start, success, useItemDataSelector } from '../../services/itemDataSlice';
import './Home.css';


const Home: React.FC = () => {

  const dispatch = useDispatch()
  const itemData = new ItemDataService().getItems();

  useEffect(() => {
    dispatch(start());
    dispatch(success(itemData));
  }, []);

  const isLoading = useItemDataSelector((state) => state.itemDataReducer.isLoading);
  const filteredData = useItemDataSelector((state) => state.itemDataReducer.filteredData);

  const addToCart = (itemData: ItemData) => {
    dispatch(add(itemData))
  }

  useEffect(() => {
    dispatch(filter(''))
  }, [isLoading])

  return (
    <Grid container spacing={1} className="Home">
      {
        filteredData ? filteredData.length > 0 ?
          filteredData?.map((item) => {
            return (
              <Grid item xs={4} key={item.id}>
                <Card>
                  <CardHeader title={item.imageTitle}></CardHeader>
                  <CardMedia className="itemImage" image={item.imageUrl} />
                  <CardContent><p>{item.imageDescription}</p></CardContent>
                  <CardActions disableSpacing>
                    <IconButton className="align-right" onClick={() => addToCart(item)}>
                      <AddShoppingCartRounded />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            )
          })
          : <span>No Items or Search returns empty items.</span> : <span>No Items or Search returns empty items.</span>
      }
    </Grid>
  )
};

export default Home;
