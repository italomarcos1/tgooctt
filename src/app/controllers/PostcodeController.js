import Postcode from '../models/Postcode';

class PostcodeController {
  async index(request, response) {
    const { postcode } = request.params;

    const location = await Postcode.findByPk(postcode);

    return response.json(location);
  }
}

export default new PostcodeController();
