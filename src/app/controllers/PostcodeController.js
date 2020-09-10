import Postcode from '../models/Postcode';

class PostcodeController {
  async index(req, res) {
    console.log('one');
    const { postcode } = req.params;
    console.log('two');
    console.log(postcode);

    const location = await Postcode.findByPk(postcode);

    console.log('fuck');

    return res.json(location);
  }
}

export default new PostcodeController();
