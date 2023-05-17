import { getShoppingCart } from "../../utilities/fakedb";

const cardProductsLoader = async () => {

  const storedCard = getShoppingCart();
  const ids = Object.keys(storedCard)

  const loaderProducts = await fetch("http://localhost:5000/products",{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(ids)
  });
  const products = await loaderProducts.json();
  // console.log(storedCard);
  const saveCart = [];
  for (const id in storedCard) {
    const addedProduct = products.find((pd) => pd._id === id);
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
