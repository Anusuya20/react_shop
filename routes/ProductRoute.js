const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
  createProductReview,
  getSingleProductReviews,
  deleteReview,
  getAdminAllProducts,
} = require("../controller/ProductController");
const {
  isAuthenticatedUser,
  authorizeRoles,
} = require("../middleware/auth.js");

const router = express.Router();

router.route("/products").get(getAllProducts);

router
  .route("/product/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);


router
  .route("/product/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct)
  .get(getSingleProduct);

router.route("/product/review").post(isAuthenticatedUser, createProductReview);

router
  .route("/reviews")
  .get(getSingleProductReviews)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteReview);

module.exports = router;
