on.input.el = function() {
  output({
    endpoint: input.jsplumb.addEndpoint(data, input.params, input.reference_params),
    jsplumb: input.jsplumb
  })
};

