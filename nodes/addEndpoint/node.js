on.input.el = function() {
  output({
    endpoint: $.jsplumb.addEndpoint($.el, $.params, $.reference_params),
    jsplumb: $.jsplumb
  })
};

