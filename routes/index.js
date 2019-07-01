exports.test = function(req, res){
  res.render('login_page', { title: 'Hello World' });
};

exports.sup = function(req, res){
  res.render('sup', { title: 'Hello World' });
};

