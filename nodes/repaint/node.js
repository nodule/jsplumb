on.input.el = function() {
  $.jsplumb.repaint($.el);
  output( { jsplumb: $.get('jsplumb') })
};
