# SYNOPSIS

Stream a JSON response from an http server. Useful for when restify doesn't
send a content-type by default when you send a JSON stream through it... this
does.

# USAGE

```javascript
var jsr = require('json-stream-response');

function requestHandler(req, res, next) {
  // ...
  var ws = jsr(res);
  ws.pipe(res);
  ws.write(bigJSONThing);
  ws.write(bigJSON2);
  ws.end();
  res.on('finish', next);
}
```

