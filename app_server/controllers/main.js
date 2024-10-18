module.exports.index=function(req,res){
    res.render('index', { title: 'index' });
   };
   module.exports.signin=function(req,res){
    res.render('signin', { title: 'Signin' });
   };
   module.exports.review=function(req,res){
    res.render('review', { title: 'Review' });
   };