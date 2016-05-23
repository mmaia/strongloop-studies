/**
 * Created by mmaia on 5/23/16.
 */
'use strict';

module.exports = function (app) {
  app.get('/ping', function(req, res){
    res.send('pong');
  });

  app.get('/express-status', function(req, res){
    res.json({running: true});
  });

};
