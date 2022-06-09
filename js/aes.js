function encrypt() {
  const crypto = require("crypto");
  const algorithme = "aes-256-cbc";
  const initVector = crypto.randomBytes(16);
  const securityKey = crypto.randomBytes(32);
  const cipher = crypto.createCipheriv(algorithme, securityKey, initVector);
  const message = "test du message";

  let encryptedData = cipher.update(message, "utf-8", "hex");
  encryptedData += cipher.final("hex");

  console.log("Message enc :" + encryptedData);
}
function decrypt() {
  const decipher = crypto.createDecipheriv(
    encrypt().algorithme,
    encrypt().securityKey,
    encrypt().initVector
  );

  let decryptedData = decipher.update(encrypt().encryptedData, "hex", "utf-8");

  decryptedData += decipher.final("utf8");

  console.log("Decrypted message: " + decryptedData);
}
