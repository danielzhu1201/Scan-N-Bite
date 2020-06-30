import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import Button from "@material-ui/core/Button";

import modules from "./styles/OrderButton.module.css";
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import './styles/ReactToastify.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: "linear-gradient(90deg, #294285 20%, #FAAA13 80%)",
      // background: '#FAAA13',
      borderRadius: 3,
      border: 0,
      color: "white",
      height: 50,
      width: 200,
      padding: "0 30px",
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      margin: theme.spacing(1),
      fontSize: "18px",
    },
  })
);

interface OrderButtonProps {
  price: string;
}


const OrderButton: React.FC<OrderButtonProps> = ({ price }) => {
  const classes = useStyles();
  const notify = () => toast.success('🦄 Added!', {
    position: "bottom-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
  return (
    <div className={modules.OrderButton}>
      <Button
        onClick={notify}
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
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default OrderButton;
