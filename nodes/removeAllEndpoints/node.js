on.input.el = function() {
  $.jsplumb.removeAllEndpoints($.el, $.recurse);
  output( { jsplumb: $.jsplumb })
};
