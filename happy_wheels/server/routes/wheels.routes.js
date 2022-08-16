const wheelController = require('../controllers/wheels.controller');

module.exports = (app) => {
    app.get('/api/wheels', wheelController.getWheels);
    app.get('/api/wheels/:id', wheelController.getWheelById);
    app.post('/api/wheels', wheelController.createWheel);
    app.put('/api/wheels/:id', wheelController.updateWheel);
    app.delete('/api/wheels/:id', wheelController.deleteWheel);
}