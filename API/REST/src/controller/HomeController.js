class HomeController {                                                                // Controlador da home
  async index(req, res) {                                                             // De modo asíncrono recebe as req e joga suas resp.
    try {                                                                             // Ao ser requisitado, retorna um Json escrito 'index'.
      res.json('Index');
    } catch (e) {
      res.status(400).json(e.errors.map((err) => err.message));                       // Em caso de erro, mapeia o evento e retorna apenas a mensagem de erro.
    }
  }
}

export default new HomeController();
