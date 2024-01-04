import ModalService from "../services/ModalService.js";

class ModalController {
  async save(req, res) {
    try {
      const modalSizes = ModalService.save(req.params.id);
    } catch (e) {
      res.status(404).json(e);
    }
  }
}

export default new ModalController();
