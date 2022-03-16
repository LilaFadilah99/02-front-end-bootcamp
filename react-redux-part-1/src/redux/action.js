export const ACTION_INIT_PRODUCTS = "products/init";
export const ACTION_ADD_PRODUCT_TO_CART = "products/add-to-cart";
export const ACTION_DEL_PRODUCT_FROM_CART = "products/delete-from-cart";

export function initProducts(newProducts) {
  return {
    type: ACTION_INIT_PRODUCTS,
    payload: newProducts,
  };
}

export function addProductCart(id) {
  return {
    type: ACTION_ADD_PRODUCT_TO_CART,
    payload: {
      id: id,
    },
  };
}

export function delProductCart(id) {
  return {
    type: ACTION_DEL_PRODUCT_FROM_CART,
    payload: {
      id: id,
    },
  };
}
