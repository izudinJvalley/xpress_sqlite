const {
  createUser,
  readUser,
  deleteUser,
  editUser,
} = require("../models/userModel");
const express = require("express");
const user = express.Router();

//post data user
user.post("/", (req, res) => {
  createUser(req.body)
    .then((result) => {
      if (result.length > 0) {
        res.status(201).json({
          mag: "success register",
          result: result,
        });
      } else {
        res.status(401).json({
          msg: "email sudah terpakai..",
          result: result,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

//get data user
user.get("/", (req, res) => {
  readUser()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json({
        msg: "error",
        error: err,
      });
    });
});

//delete data user
user.delete("/", (req, res) => {
  let data = req.body;

  deleteUser(data)
    .then((result) => {
      if (result > 0) {
        res.status(200).json({
          pesan: "berhasil menghapus data",
        });
      } else {
        res.status(404).json({
          pesan: "Data yang akan dihapus tidak ditemukan",
        });
      }
    })
    .catch((err) => {
      res.status(401).json({
        pesan: "gagal menghapus data",
      });
    });
});

//update data user
user.patch("/edit/:id", (req, res) => {
  //capture params id
  let id = req.params.id;

  //capture body data
  let data = req.body;

  editUser(id, data)
    .then((result) => {
      if (result > 0) {
        res.status(200).json({
          hasil: result,
          pesan: "berhasil ubah data",
        });
      } else {
        res.status(404).json({
          hasil: result,
          pesan: "data yang akan diubah tidak ditemukan",
        });
      }
    })
    .catch((err) => console.log(err));
});

module.exports = user;
