const Contact = require('../../models/Contact');

module.exports = (app) => {
  app.post('/api/contacts', function (req, res, next) {
    const contact = new Contact(req.body);

    contact.save()
      .then(() => res.json(contact))
      .catch((err) => next(err));
  });
}
