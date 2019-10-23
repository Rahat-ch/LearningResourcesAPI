const Resource = require("../models/Resources");

// @desc get all resources
// @route GET /api/v1/resources
// @access Public

exports.getResources = async (req, res, next) => {
  try {
    const resources = await Resource.find();
    res
      .status(200)
      .json({ success: true, count: resources.length, data: resources });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// @desc get single resource
// @route GET /api/v1/resources/:id
// @access Public

exports.getResource = async (req, res, next) => {
  try {
    const resource = await Resource.findById(req.params.id);
    if (!resource) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: resource });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// @desc create new resource
// @route POST /api/v1/resources
// @access Private

exports.createResource = async (req, res, next) => {
  try {
    const resource = await Resource.create(req.body);
    res.status(201).json({
      success: true,
      data: resource
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// @desc update resource
// @route PUT /api/v1/resources/:id
// @access Private

exports.updateResource = async (req, res, next) => {
  try {
    const resource = await Resource.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!resource) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: resource });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// @desc delete resource
// @route DELETE /api/v1/resources/:id
// @access Private

exports.deleteResource = async (req, res, next) => {
  try {
    const resource = await Resource.findByIdAndDelete(req.params.id);
    if (!resource) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
