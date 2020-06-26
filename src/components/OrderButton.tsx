import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Button from '@material-ui/core/Button';

import modules from './styles/OrderButton.module.css';

// const useStyles = makeStyles({
//   root: {
//     background: 'linear-gradient(90deg, #1a1f71 20%, #FAAA13 80%)',
//     borderRadius: 3,
//     border: 0,
//     color: 'white',
//     height: 35,
//     width: 150,
//     padding: '0 30px',
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     margin: theme.spacing(1),
//   },
//   label: {
//     textTransform: 'capitalize',
//   },
// });

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: 'linear-gradient(90deg, #294285 20%, #FAAA13 80%)',
      // background: '#FAAA13',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 35,
      width: 150,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      margin: theme.spacing(1),
    }
  }),
);


const OrderButton: React.FC = () => {
  const [price, usePrice] = useState('$5.75')
  const classes = useStyles();

  return (
    <div className={modules.OrderButton}>
      <Button
        variant="contained"
        color="primary"
        startIcon={<ShoppingCartOutlinedIcon />}
        size="large"
        classes={{
          root: classes.root, // class name, e.g. `classes-nesting-root-x`
        }}
      >
        {price}
      </Button>
    </div>
  )
}

export default OrderButton;