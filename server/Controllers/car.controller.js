const { Car } = require('../models/car.model');

module.exports.create = (request, response) => {
    Car.create(request.body)
        .then(object => response.json(object))
        .catch(err => response.status(400).json(err));
};

module.exports.getAll = (request, response) => {
    Car.find({})
      .then(objects => response.json(objects))
      .catch(err => response.json(err));
};

module.exports.getOne = (request, response) => {
    Car.findOne({ _id: request.params.id })
        .then(object => response.json(object))
        .catch(err => response.json(err));
};

module.exports.update = (request, response) => {
    Car.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true, runValidators: true })
        .then(updated => response.json(updated))
        .catch(err => response.status(400).json(err));
};

module.exports.delete = (request, response) => {
    Car.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err));
};
