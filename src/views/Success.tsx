import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import firebaseApp from "../config/firebase";
import CheckMark from "../checkmark.svg";

import modules from "./styles/CheckOutStatus.module.css";

const Success = withRouter(({ props }) => {
  const authListener = () => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        const userRef = firebaseApp
          .firestore()
          .collection("users")
          .doc(user.uid!);
        userRef.get().then((doc) => {
          const data = doc.data();
          if (data) {
            const total = data.total;
            var currentDate = new Date();
            userRef
              .collection("past_orders")
              .doc()
              .set({
                name: "Eastside",
                total: `$${total}`,
                date: `${
                  currentDate.getMonth() + 1
                } / ${currentDate.getDate()} / ${currentDate.getFullYear()}`,
              });
          }
          userRef
            .collection("current_order")
            .get()
            .then((snapshot) => {
              snapshot.forEach((doc) => {
                userRef.collection("current_order").doc(doc.id).delete();
              });
            });
        });
      }
    });
  };

  useEffect(() => {
    authListener();
  });
  return (
    <div className={modules.Container}>
      <img src={CheckMark} alt="CheckMark" />
      <div className={modules.Text}>Success</div>
    </div>
  );
});

export default Success;
