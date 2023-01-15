const Events = require('../model/events');

//sending all the events
exports.getEvents = (req, res, next)=>{
    Events.find({})
        .then((data)=>{res.json(data)})
        .catch((err)=>{res.json(err)})
}

//Creating a new event

exports.postEvents = (req, res, next)=>{
    const event = req.body.event;
    const teamA = req.body.teamA;
    const teamB = req.body.teamB;
    const scoreA = req.body.scoreA;
    const scoreB = req.body.scoreB;

    const newEvent = new Events({
        event: event,
        teamA: teamA,
        teamB: teamB,
        scoreA: scoreA,
        scoreB: scoreB
    });

    newEvent
        .save()
        .then(()=>{res.json('event added')})
        .catch((err)=>{res.json(err)})
}

// updating the event

exports.updateScore = (req, res, next)=>{
    Events.findOneAndUpdate({event: req.body.event}, {
        teamA: req.body.teamA,
        teamB: req.body.teamB,
        scoreA: req.body.scoreA,
        scoreB: req.body.scoreB
    })
    .then(()=>{
        res.json("Event score updated")
    })
    .catch((err)=>{res.json(err)})
}