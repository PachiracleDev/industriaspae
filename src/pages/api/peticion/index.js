import pool from "../../../../config/db";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { ordenFull, datos } = req.body;
    const { fullname, celular, pais, ciudad, provincia, dni } = datos;

    const orden = JSON.stringify(ordenFull);
    pool.query(
      "INSERT INTO ordenesxd SET ?",
      { fullname, dni, celular, pais, provincia, ciudad, orden },
      (err, results) => {
        if (err) {
          res.status(500).json({
            message: "Error",
            error: err,
          });
        } else {
          res.status(201).json({
            message: "Orden Enviada",
            results: results,
          });
        }
      }
    );
  }
}
