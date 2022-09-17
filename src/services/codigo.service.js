import boom from "@hapi/boom";
import { models } from "../libs/sequelize";

const secret = "4FE62AA516EE42DCFC19C996B585C";

class CodigoService {
  constructor() {
    this.codigo = null;
  }

  async findCodigo(codigo) {
    const rta = await models.Codes.findOne({
      where: {
        code: codigo,
      },
    });
    if (!rta) {
      throw boom.notFound("Codigo no encontrado");
    }
    //Eliminar el codigo de la base de datos
    // await models.Codes.destroy({
    //   where: {
    //     code: codigo,
    //   },
    // });
    return rta;
  }

  async buscarFrases(categoria) {
    const frases = await models.Frases.findAll({
      where: {
        categoryId: categoria,
      },
    });
    if (!frases) {
      throw boom.notFound("Categoria no encontrada");
    }
    const frase = frases[Math.floor(Math.random() * frases.length)];
    delete frase.dataValues.categoryId;
    return frase;
  }

  async verify(codigo, categoria) {
    const rta = await this.findCodigo(codigo);
    if (rta) {
      const frase = await this.buscarFrases(categoria);

      return frase;
    }
    return false;
  }
}

export default CodigoService;
