on.input.el = function() {
  input.jsplumb.removeAllEndpoints(data, input.recurse);
  output( { jsplumb: input.jsplumb })
};
