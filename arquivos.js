//const fs = require("./fs-promise");
//const readFile = fs.readFile;
//const writeFile = fs.writeFile;

//ou usar assim destructing
const { readFile, writeFile } = require("./fs-promise");

//Callback Hell
/*fs.readFile("temporizadores.js", (err, data) => {
  fs.writeFile("temporizador-copy.js", data, err => {
    console.log("Arquivo copiado");
  });
});
*/

//Antigas promises

/*
readFile("temporizadores.js")
  .then(data => writeFile("copia-promisse.js", data))
  .then(() => console.log("arquivo copiado!"))
  .catch(err => console.log(err));
*/

// async/await

const copyFile = async () => {
  console.log("Olá async/await");
  try {
    const data = await readFile("temporizadores.js");
    await writeFile("copy-async.await.js", data);
    //console.log(String(data));
    console.log("Arquivo Lido e escrito");
  } catch (err) {
    console.log("Erro: ", err);
  }
};

copyFile().then(() => console.log("fim do async await"));
