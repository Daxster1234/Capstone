const { Router } = require('express');
const Event = require("../models/Event");
const router = Router();

router.post("/", (request, response) => {
  const newEvent = new Event(request.body);
  newEvent.save((error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

router.get("/", (request, response) => {
  Event.find({}, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  })
});

router.delete("/:id", (request, response) => {
  Event.findByIdAndRemove(request.params.id, {}, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

router.put("/:id", (request, response) => {
  const body = request.body;
  Event.findByIdAndUpdate(
    request.params.id,
    {
      $set: {
        bands: body.bands,
        date: body.date,
        location: body.location
      }
    },
    {
      new: true,
      upsert: true
    },
    (error, record) => {
      if (error) return response.status(500).json(error);
      return response.json(record);
    }
  );
});

module.exports = router;
