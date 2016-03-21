on.input.el = function() {
  output({
    endpoint: $.create($.jsplumb.addEndpoint($.el, $.params, $.reference_params)),
    jsplumb: $.create($.jsplumb)
  })
};

