on.input.el = function() {
  $.jsplumb.recalculateOffsets($.el);
  output( { jsplumb: $.jsplumb });
};
