const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Resource = require("../models/Resources");

// @desc get all resources
// @route GET /api/v1/resources
// @access Public

exports.getResources = asyncHandler(async (req, res, next) => {
  const resources = await Resource.find();
  res
    .status(200)
    .json({ success: true, count: resources.length, data: resources });
});

// @desc get single resource
// @route GET /api/v1/resources/:id
// @access Public

exports.getResource = asyncHandler(async (req, res, next) => {
  const resource = await Resource.findById(req.params.id);
  if (!resource) {
    return next(
      new ErrorResponse(`Resource not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: resource });
});

// @desc create new resource
// @route POST /api/v1/resources
// @access Private

exports.createResource = asyncHandler(async (req, res, next) => {
  const resource = await Resource.create(req.body);
  res.status(201).json({
    success: true,
    data: resource
  });
});

// @desc update resource
// @route PUT /api/v1/resources/:id
// @access Private

exports.updateResource = asyncHandler(async (req, res, next) => {
  const resource = await Resource.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  if (!resource) {
    return next(
      new ErrorResponse(`Resource not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: resource });
});

// @desc delete resource
// @route DELETE /api/v1/resources/:id
// @access Private

exports.deleteResource = asyncHandler(async (req, res, next) => {
  const resource = await Resource.findByIdAndDelete(req.params.id);
  if (!resource) {
    return next(
      new ErrorResponse(`Resource not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: {} });
});
