var express = require('express');
var router = express.Router();
var unirest = require('unirest');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express2'
  });
});

router.get('/countries', (req, res) => {
  unirest.get('http://localhost:3000/countries.json')
    .end(function (result) {
      //console.log(result);
      var data = result.body
      console.log(data.api.results);
      res.send(data.api)
    })
})

router.get('/leagues', (req, res) => {
  /*
  leagues / Get all available leagues
  leagues / league / {league_id}
  get one league from his ID
  leagues / season / {season}
  Get all leagues from one season
  leagues / country / { country_name}
  /{season} Get all leagues from one country or country code (GB, FR, IT etc..) and filter by 
  */
  unirest.get('http://localhost:3000/leagues.json')
    .end(function (result) {
      //console.log(result);
      var data = result.body
      console.log(data.api.results);
      res.send(data.api)
    })
})



router.get('/seasons', (req, res) => {
  unirest.get('http://localhost:3000/seasons.json')
    .end((result) => {
      console.log(result.body.api.results);
      var data = result.body
      res.send(data)
    })
})

router.get('/teams', (req, res) => {
  // teams/team/{team_id} Get one team from his ID
  // teams/league/{league_id} Get all teams from one league
  unirest.get('http://localhost:3000/teams.json')
    .end((result) => {
      console.log(result.body.api.results);
      var data = result.body
      res.send(data)
    })
})

router.get('/players', (req, res) => {
  // "players/{season}/{team_id}"
  unirest.get('http://localhost:3000/players.json')
    .end((result) => {
      console.log(result.body.api.results);
      var data = result.body
      res.send(data)
    })
})

router.get('/fixtures', (req, res) => {
  /*
  fixtures/live Get all fixtures in play
  fixtures/date/{date} Get all fixtures from one date | YYYY-MM-DD
  fixtures/id/{fixture_id} Get one fixture from his ID
  fixtures/league/{league_id} Get all fixtures from one league
  fixtures/h2h/{team_id_1}/{team_id_2} Get all Head 2 Heads between 2 teams
  fixtures/team/{team_id} Get all fixtures from one team
  */
  unirest.get('http://localhost:3000/fixtures.json')
    .end((result) => {
      console.log(result.body.api.results);
      var data = result.body
      res.send(data)
    })
})


router.get('/lineups', (req, res) => {
  //lineups/{fixture_id} Get all line ups from one fixture
  unirest.get('http://localhost:3000/lineups.json')
    .end((result) => {
      console.log(result.body.api.results);
      var data = result.body
      res.send(data)
    })
})

module.exports = router;