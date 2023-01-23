// import nextConnect from "next-connect";
// import middleware from "../../../middlewares/validator.handler";
// import CodigoService from "../../../services/codigo.service";

// const service = new CodigoService();

// const handler = nextConnect()
//   //Middleware

//   .post(async (req, res) => {
//     const { codigo, categoria } = req.body;
//     const rta = await service.verify(codigo, categoria);
//     if (!rta) {
//       res.status(404).json({ message: "Codigo invalido" });
//     }
//     res.status(200).json(rta);
//   });

// export default handler;
