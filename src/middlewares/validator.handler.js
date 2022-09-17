import boom from "@hapi/boom";
import nextConnect from "next-connect";

const middleware = nextConnect();

export default middleware.use((req, res, next) => {
  if (!req.body) {
    next(boom.badRequest("Body is required"));
  }
  next();
});
