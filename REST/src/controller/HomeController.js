class HomeController {
  async index(req, res) {
    try {
      res.json('Index');
    } catch (e) {
      res.status(400).json(e.errors.map((err) => err.message));
    }
  }
}

export default new HomeController();
