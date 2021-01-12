const User = require("../../model/User");

async function serviceLogin(email, password, req, res) {
  try {
    User.find(
      {
        email: email,
        password: password,
      },
      async function (err, result) {
        if (err) {
          res.json(err);
        } else {
          if (result[0] == null) {
            res.json({ status: "Email atau Password anda Salah!" });
          } else {
            res.json(result);
          }
        }
      }
    );
  } catch (error) {
    res.json(error);
  }
}

module.exports = serviceLogin;
