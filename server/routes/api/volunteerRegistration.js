const VolunteerRegistration = require('../../models/VolunteerRegistration');
const Contact = require('../../models/Contact');

module.exports = (app) => {
  app.post('/api/volunteerRegistrations', function (req, res, next) {
    const registration = new VolunteerRegistration(req.body);

    registration.save()
      .then(() => res.json(registration))
      .catch((err) => next(err));
  });

  app.post('/api/contacts', function (req, res, next) {
    console.log(req.body);
    const contact = new Contact(req.body);

    contact.save()
      .then(() => res.json(contact))
      .catch((err) => next(err));
  });

  // app.get('/api/projects', (req, res, next) => {
  //   Counter.find()
  //     .exec()
  //     .then((counter) => res.json(counter))
  //     .catch((err) => next(err));
  // });
  //
  // app.get('/api/members', (req, res, next) => {
  //   Counter.find()
  //     .exec()
  //     .then((counter) => res.json(counter))
  //     .catch((err) => next(err));
  // });

  // app.get('/api/contacts', (req, res, next) => {
  //   Counter.find()
  //     .exec()
  //     .then((counter) => res.json(counter))
  //     .catch((err) => next(err));
  // });
  //
  // app.get('/api/voluteer-registrations', (req, res, next) => {
  //   Counter.find()
  //     .exec()
  //     .then((counter) => res.json(counter))
  //     .catch((err) => next(err));
  // });
  //
  // app.get('/api/events', (req, res, next) => {
  //   Counter.find()
  //     .exec()
  //     .then((counter) => res.json(counter))
  //     .catch((err) => next(err));
  // });

  // app.delete('/api/counters/:id', function (req, res, next) {
  //   Counter.findOneAndRemove({ _id: req.params.id })
  //     .exec()
  //     .then((counter) => res.json())
  //     .catch((err) => next(err));
  // });
  //
  // app.put('/api/counters/:id/increment', (req, res, next) => {
  //   Counter.findById(req.params.id)
  //     .exec()
  //     .then((counter) => {
  //       counter.count++;
  //
  //       counter.save()
  //         .then(() => res.json(counter))
  //         .catch((err) => next(err));
  //     })
  //     .catch((err) => next(err));
  // });
  //
  // app.put('/api/counters/:id/decrement', (req, res, next) => {
  //   Counter.findById(req.params.id)
  //     .exec()
  //     .then((counter) => {
  //       counter.count--;
  //
  //       counter.save()
  //         .then(() => res.json(counter))
  //         .catch((err) => next(err));
  //     })
  //     .catch((err) => next(err));
  // });
};
