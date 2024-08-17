const UserController = require('../Controllers/user.controller');
const { authenticate } = require('../config/jwt.config');
const BiddingRoomController = require('../Controllers/bidding_room.controller');
const CarController = require('../controllers/car.controller');
const TokenController = require('../controllers/token.controller');

module.exports = (app) => {
  // User routes
  app.post('/api/register', UserController.register);
  app.post('/api/login', UserController.login);
  app.post('/api/logout', UserController.logout);

  // Bidding Room routes
  app.post('/api/biddingRooms/new', BiddingRoomController.create);
  app.get('/api/biddingRooms', BiddingRoomController.getAll);
  app.get('/api/biddingRooms/:id', BiddingRoomController.getOne);
  app.put('/api/biddingRooms/update/:id', BiddingRoomController.update);
  app.delete('/api/biddingRooms/delete/:id', BiddingRoomController.delete);

  // Car routes
  app.post('/api/cars/new', CarController.create);
  app.get('/api/cars', CarController.getAll);
  app.get('/api/cars/:id', CarController.getOne);
  app.put('/api/cars/update/:id', CarController.update);
  app.delete('/api/cars/delete/:id', CarController.delete);

  // Token routes
  app.post('/api/tokens/new', TokenController.create);
  app.get('/api/tokens', TokenController.getAll);
  app.get('/api/tokens/:id', TokenController.getOne);
  app.put('/api/tokens/update/:id', TokenController.update);
  app.delete('/api/tokens/delete/:id', TokenController.delete);
}
