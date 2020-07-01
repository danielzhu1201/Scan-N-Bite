import firebaseApp from "./firebase";

const db = firebaseApp.firestore();

const refs = {
  drinks: db
    .collection("menu")
    .doc("smy7J1V4liwCklUdtncK")
    .collection("category")
    .doc("WAZAfnCeu8q6cbM9vA9L")
    .collection("items"),
  desserts: db
    .collection("menu")
    .doc("smy7J1V4liwCklUdtncK")
    .collection("category")
    .doc("Yjk8qVTRIrfYCKL2YP7O")
    .collection("items"),
  sides: db
    .collection("menu")
    .doc("smy7J1V4liwCklUdtncK")
    .collection("category")
    .doc("ZMhZzktzxR7YphkEd1sG")
    .collection("items"),
  appetizers: db
    .collection("menu")
    .doc("smy7J1V4liwCklUdtncK")
    .collection("category")
    .doc("eJJ7b01T6W3MD5OLdzLI")
    .collection("items"),
  entrees: db
    .collection("menu")
    .doc("smy7J1V4liwCklUdtncK")
    .collection("category")
    .doc("lip1YumvzOTqcuHofR90")
    .collection("items"),
};

export default refs;
