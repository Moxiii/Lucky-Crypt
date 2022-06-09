import { sql } from "./mysql";
import { encrypt, decrypt } from "./aes";

function validFile(fichiers) {
  var filesTypes = [
    "image/jpeg",
    "image/png",
    "text/txt",
    "text/docx",
    "text/odt",
  ];
  for (var i = 0; i < filesTypes.length; i++) {
    if (fichiers.type === filesTypes[i]) {
      //connexion :
      sql().connection.connect((err) => {
        if (err) {
          console.log("Erreur rencontré :", err);
        } else {
          //création de la base
          console.log("Connecté");
          sql();
          const query = "CREATE DATABASE test";
          sql().connection.query(query, function (err, result) {
            if (err) {
              err;
            }
            console.log("BASE CREER");
          });
        }
      });
    }
  }
  return false;
}

validFile("test.doc");
