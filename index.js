var JSONStream = require('JSONStream');

module.exports = function jsonStreamResponse(res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  var stringify = JSONStream.stringify();
  stringify.pipe(res, {end: true});
  return stringify;
};

