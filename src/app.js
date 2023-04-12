// import { openDb } from "./configdb.js";
import { createTable, insertPessoa, updatePessoa, selectPessoa } from "./Controler/Pessoa.js";
import express from "express";

const app = express();
app.use(express.json());

createTable();

app.get("/teste", (req, res) => {
  res.send("Olá mundo");
});
app.get("/pessoa", async (req, res) => {
  let pessoas = await selectPessoa();
  res.json(pessoas);
});

app.post("/pessoa", (req, res) => {
  insertPessoa(req.body);
  res.json({
    statusCode: 200,
  });
});

app.put("/pessoa", (req, res) => {
  if (req.body && !req.body.id) {
    res.json({
      satatusCode: 400,
      msg: "Vc precisa informar o ID",
    });
  } else {
    updatePessoa(req.body);
    res.json({
      statusCode: 200,
    });
  }
});

app.listen(3003, () => console.log("Api Rodando"));
