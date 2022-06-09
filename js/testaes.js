const mysql = require("mysql");

const crypto = require("crypto");
const fs = require("fs");

const algorithme = "aes-256-cbc";
let key = crypto.randomBytes(32);
key = crypto
  .createHash("sha256")
  .update(String(key))
  .digest("base64")
  .substr(0, 32);

// encrypt function

const encrypt = (buffer) => {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(algorithme, key, iv);
  // encryption de la memoire

  const result = Buffer.concat([iv, cipher.update(buffer), cipher.final()]);
  return result;
};
const decrypt = (encrypt) => {
  // recuperer la clé IV
  const iv = encrypt.slice(0, 16);
  encrypt = encrypt.slice(16);

  // decipher
  const decipher = crypto.createDecipheriv(algorithme, key, iv);
  const result = Buffer.concat([decipher.update(encrypt), decipher.final()]);
  return result;
};

//ouvrir et  encrypter le fichier :
function encryption() {
  fs.readFile("./files/test.txt", (err, file) => {
    if (err) return console.log(err.message);
    console.log("Fichier selectionner : ${file}");
    // encrypter les données :

    const encryptedFile = encrypt(file);
    // ecrire les données dans un nouveaux fichiers :
    fs.writeFile("./files/encrypt/${name}.enc", encryptedFile, (err, file) => {
      if (err) return console.error(err.message);

      if (file) {
        console.log("fichier encrypter");
      }
    });
  });
}

function decryption() {
  fs.readFile("./files/decrypt");
}
