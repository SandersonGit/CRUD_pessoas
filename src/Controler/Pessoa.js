import { openDb } from "../configdb.js";

export async function createTable() {
  openDb().then((db) => {
    db.exec(
      "CREATE TABLE IF NOT EXISTS Pessoa (id INTEGER PRIMARY KEY, nome TEXT, idade INTEGER)"
    );
  });
}
export async function insertPessoa(Pessoa) {
  openDb().then((db) => {
    db.run("INSERT INTO Pessoa (nome, idade) VALUES (?, ?)", [
      Pessoa.nome,
      Pessoa.idade,
    ]);
  });
}
export async function updatePessoa(Pessoa) {
  openDb().then((db) => {
    db.run("UPDATE Pessoa SET nome=?, idade=? WHERE id=?", [
      Pessoa.nome,
      Pessoa.idade,
      Pessoa.id,
    ]);
  });
}
export async function selectPessoa(Pessoa) {
  return openDb().then((db) => {
    db.all("SELECT * FROM Pessoa").then(res => res);
  });
}
