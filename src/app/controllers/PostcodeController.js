import Postcode from '../models/Postcode';

class PostcodeController {
  async index(request, response) {
    console.log('one');
    const { postcode } = request.params;
    console.log('two');
    console.log(postcode);

    const location = await Postcode.findByPk(postcode);
    console.log(location);

    console.log('fuck');

    return response.json(location);
  }
}

export default new PostcodeController();
