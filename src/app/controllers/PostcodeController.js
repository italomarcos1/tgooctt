import Postcode from '../models/Postcode';

class PostcodeController {
  async index(req, res) {
    const { postcode } = req.params;
    const location = await Postcode.findByPk(postcode);

    return res.json(location);
  }
}

export default new PostcodeController();
