// @desc get all resources
// @route GET /api/v1/resources
// @access Public

exports.getResources = (req, res, next) => {
  res.status(200).json({ success: true, msg: "show all learning resources" });
};

// @desc get single resource
// @route GET /api/v1/resources/:id
// @access Public

exports.getResource = (req, res, next) => {
  res.status(200).json({ success: true, msg: `get bootcamp ${req.params.id}` });
};

// @desc create new resource
// @route POST /api/v1/resources
// @access Private

exports.createResource = (req, res, next) => {
  res.status(200).json({ success: true, msg: "create new learning resources" });
};

// @desc update resource
// @route PUT /api/v1/resources/:id
// @access Private

exports.updateResource = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `update bootcamp ${req.params.id}` });
};

// @desc delete resource
// @route DELETE /api/v1/resources/:id
// @access Private

exports.deleteResource = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `delete bootcamp ${req.params.id}` });
};
