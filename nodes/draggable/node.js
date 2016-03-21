on.input.el = function() {
  $.jsplumb.draggable($.el, $.options),
  output({jsplumb: $.get('jsplumb')})
};
