const fs = require("fs");

//Promises + async/await
const readFile = path =>
  new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });

const writeFile = (path, data) =>
  new Promise((resolve, reject) => {
    fs.writeFile(path, data, err => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });

//Exportando para uso em outros lugares
/*module.exports = {
  readFile: readFile,
  writeFile: writeFile
};
*/
module.exports = {
  readFile,
  writeFile
};
