
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Khet' });
};


exports.room = function(req, res){
  res.render('index', { title: 'Khet', room: req.params.room });
};
