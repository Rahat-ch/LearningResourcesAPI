const express = require("express");
const {
  getResource,
  getResources,
  createResource,
  updateResource,
  deleteResource
} = require("../controllers/resources");
const router = express.Router();

router
  .route("/")
  .get(getResources)
  .post(createResource);

router
  .route("/:id")
  .get(getResource)
  .put(updateResource)
  .delete(deleteResource);

module.exports = router;
