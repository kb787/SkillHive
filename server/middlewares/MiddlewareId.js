const MiddlewareId = (req, res, next) => {
    const _id = req.params.id;
    if (!_id) {
      return res.status(400).send({ message: 'Missing ID parameter' });
    }
    req._id = _id; 
    next();
  };
  
  module.exports = MiddlewareId;