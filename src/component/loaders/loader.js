import { getShoppingCart } from "../../utilities/fakedb";

const cardProductsLoader = async () => {
  const loaderProducts = await fetch("products.json");
  const products = await loaderProducts.json();
  const storedCard = getShoppingCart();
  // console.log(storedCard);
  const saveCart = [];
  for (const id in storedCard) {
    const addedProduct = products.find((pd) => pd.id === id);
    //    console.log(addedProduct);
    if (addedProduct) {
      const quantity = storedCard[id];
      // console.log(quantity);
      addedProduct.quantity = quantity;
      // console.log(addedProduct);
      saveCart.push(addedProduct);
    }
  }
  return saveCart;
};

export default cardProductsLoader;
