const { Token } = require('../models/token.model');

module.exports.create = (request, response) => {
    Token.create(request.body)
        .then(object => response.json(object))
        .catch(err => response.status(400).json(err));
}

module.exports.getAll = (request, response) => {
    Token.find({})
        .then(objects => response.json(objects))
        .catch(err => response.json(err));
}

module.exports.getOne = (request, response) => {
    Token.findOne({ _id: request.params.id })
        .then(object => response.json(object))
        .catch(err => response.json(err));
}

module.exports.update = (request, response) => {
    Token.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true, runValidators: true })
        .then(updated => response.json(updated))
        .catch(err => response.status(400).json(err));
}

module.exports.delete = (request, response) => {
    Token.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err));
}
