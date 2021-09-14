const conexao = require("../database/conexao");

class Conta {
  lista(res) {
    const sql = "SELECT * FROM banco";

    conexao.query(sql, (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json(resultados);
      }
    });
  }
  buscaPorId(id, res) {
    const sql = `SELECT * FROM banco WHERE id=${id}`;

    conexao.query(sql, (erro, resultados) => {
      const conta = resultados[0];
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json(conta);
      }
    });
  }

  adiciona(cliente, res) {
    const saldo = { ...cliente };
    const sql = "INSERT INTO Banco SET ?";

    conexao.query(sql, saldo, (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json(resultados);
      }
    });
  }
}

module.exports = new Conta();
