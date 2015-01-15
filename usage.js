/*

 A bare bones example of getting mongoWrap up and running

 -- If you have questions or feedback: xybersolve@gmail.com

*/

var cfg              = require('./config/config')
  , mongoWrap        = require('./lib/mongo-wrap')(cfg.mongo);

mongoWrap.connect(function(err, db) {  "use strict";
  if(err) throw err;
  runAfterDBConnect();
});
function runAfterDBConnect(){
  var query = {
    collection: 'myCollection',
    where: {myField: 'myValue'},
    sort: {mySortField: 1}
  };
  mongoWrap.findAll(query, function(err, results){
    if(err) return cb(err);
    if(results){
      // do something with results
    }
  });
}
