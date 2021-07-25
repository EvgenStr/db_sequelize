const { User } = require('../models');

module.exports.checkUser = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    const userInstance = await User.findByPk(id);

    if (!userInstance) {
      throw new Error('User not found');
    }
    req.userInstance = userInstance;
    next();
  } catch (error) {
    next(error);
  }
};
