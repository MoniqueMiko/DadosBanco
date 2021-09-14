class Tabels {
  init(conexao) {
    this.conexao = conexao;

    this.bancoSaldo();
  }

  bancoSaldo() {
    const sql =
      "CREATE TABLE IF NOT EXISTS banco (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, saldo double NOT NULL, data datetime NOT NULL, PRIMARY KEY(id))  ";

    this.conexao.query(sql, (erro) => {
      if (erro) {
        console.log(erro);
      } else {
        console.log("tabela criada com sucesso");
      }
    });
  }
}

module.exports = new Tabels();
