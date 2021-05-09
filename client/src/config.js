/**
 * Application wide configuration
 */
const config = {
  baseURI: process.env.REACT_APP_API_BASE_URL,
  payPal: process.env.REACT_APP_API_PAYPAL,
  esewaImageUrl: process.env.REACT_APP_ESEWA_IMAGE_URL,
  esewaPaymentUrl: process.env.REACT_APP_ESEWA_PAYMENT_URL,
  apiEndPoint: {
    product: {
      fetchProducts: "/product",
      fetchProduct: "/product/:id",
      fetchProductReviews: "/product/:id/reviews",
      createReview: "/product/:id/reviews",
      deleteProduct: "/product/:id",
      createProduct: "/product",
      editProduct: "/product/:id",
    },
  },
};

export default config;