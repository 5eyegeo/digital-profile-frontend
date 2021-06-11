import React from 'react';
import NotFound from '../../assets/images/000-404.png'
import {makeStyles} from "@material-ui/core/styles";

const ItemNotFound = (props) => {
  const classes = useNotFoundStyles()
  return (
    <>
      <img src={NotFound} alt="Not Found" className={classes.img}/>
    </>
  );
};

const useNotFoundStyles = makeStyles((theme) => ({
  img: {
    width: "100%"
  }
}))

export default ItemNotFound;