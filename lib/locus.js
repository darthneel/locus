(function() {
  var Locus;

  Locus = (function() {
    function Locus() {}

    Locus.listen = function(context) {
      var e, input, prompt, quit, _results;
      quit = false;
      _results = [];
      while (!quit) {
        prompt = require('sync-prompt').prompt;
        input = prompt('> ').trim();
        try {
          if (input === 'quit') {
            _results.push(quit = true);
          } else {
            _results.push(console.log(eval(input)));
          }
        } catch (_error) {
          e = _error;
          _results.push(console.log(e));
        }
      }
      return _results;
    };

    return Locus;

  })();

  global.locus = "(" + (Locus.listen.toString()) + ")()";

}).call(this);