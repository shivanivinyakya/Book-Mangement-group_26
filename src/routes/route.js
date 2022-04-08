const express = require('express');
const router = express.Router();
const userController = require("../controller/userController")
const bookController = require("../controller/bookController")
const reviewController = require("../controller/reviewController")
const authentication = require("../middleware/auth")


router.post("/register", userController.createUser);
router.post("/login", userController.userLogin)

router.post("/books",authentication.authentication, bookController.createBook)
router.get("/books",authentication.authentication, bookController.getBooks)
router.get("/books/:bookId",authentication.authentication, bookController.getBooksById)
router.put("/books/:bookId",authentication.authentication, bookController.updateBooks)
router.delete("/books/:bookId",authentication.authentication, bookController.deleteBooks)

router.post("/books/:bookId/review", reviewController.createReview)
router.put("/books/:bookId/review/:reviewId", reviewController.updateReviews)
router.delete("/books/:bookId/review/:reviewId",reviewController.deleteReviews)





module.exports = router;