on.input.el = function() {
  output({
    endpoint: input.jsplumb.addEndpoint(input.el, input.params, input.reference_params),
    jsplumb: input.jsplumb
  })
};

