const authService = require('../services/auth.service');

class AuthController {
  async register(req, res, next) {
    try {
      const { email, password } = req.body;
      const data = await authService.register(email, password);
      return res.json(data);
    } catch (error) {
      console.log(error);
    }
  }

  async activation() {
    try {
      const userId = req.params.id;
      await authService.activation(userId);
      return res.json({ massage: 'User activated' });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new AuthController();