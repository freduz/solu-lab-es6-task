const userController = {
  async createUser(req, res, next) {
    try {
      console.log(req.body);
    } catch (err) {
      console.log(err);
    }
  },
};

export default userController;
