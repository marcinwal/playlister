var partyPlannerModel = require('../models/partyPlannerModel');

exports.authorize = function(req, res) {
  partyPlannerModel.authorizeSpotify(req, res);
};

exports.authorizeCallback = function(req, res) {
  partyPlannerModel.authorizeSpotifyCallback(req, res);
};

exports.beacon = function(req, res) {
  var spotifyID = req.params.spotifyID;
  var error = req.query.error;
  res.render('partyPlanner/beacon', {spotifyID: spotifyID, errorID: error});
};

exports.saveBeacon = function(req, res) {
  partyPlannerModel.saveBeacon(req, res);
};

exports.eventDetails = function(req, res) {
  var spotifyID = req.params.spotifyID;
  res.render('partyPlanner/eventDetails', {spotifyID: spotifyID});
};

exports.saveEventDetails = function(req, res) {
  partyPlannerModel.saveEventDetails(req, res);
};

exports.completed = function(req, res) {
  var partyName = req.params.partyName;
  var partyDate = req.params.partyDate;
  var partyPlaylistName = req.params.partyPlaylistName;
  var getSongsLink = "http://localhost:3000/partygoer/getsongs/"
      + partyName + '/'
      + partyDate;
  res.render('partyPlanner/completed', { partyName: partyName, partyDate: partyDate
      , partyPlaylistName: partyPlaylistName, getSongsLink: getSongsLink } );
};
