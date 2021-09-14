const customExpress = require("./config/customExpress");
const conexao = require("./database/conexao");
const tabels = require("./database/tabels");

conexao.connect((erro) => {
  if (erro) {
    console.log("erroooo");
  } else {
    console.log("conectado com sucesso");

    tabels.init(conexao);

    const app = customExpress();

    app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
  }
});
