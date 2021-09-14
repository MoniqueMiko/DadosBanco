const Conta = require("../model/model");

module.exports = (app) => {
  app.post("/cliente", (req, res) => {
    const cliente = req.body;

    Conta.adiciona(cliente, res);
  });

  app.get("/cliente", (req, res) => {
    Conta.lista(res);
  });

  app.get("/cliente/:id", (req, res) => {
    const id = parseInt(req.params.id);

    Conta.buscaPorId(id, res);
  });
};