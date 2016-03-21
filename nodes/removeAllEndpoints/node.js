on.input.el = function() {
  input.jsplumb.removeAllEndpoints(input.el, input.recurse);
  output( { jsplumb: input.jsplumb })
};
