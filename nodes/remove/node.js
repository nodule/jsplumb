on.input.el = function() {
  $.jsplumb.remove($.el);
  output( { jsplumb: $.get('jsplumb') });
};
