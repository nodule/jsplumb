on.input.connection = function() {
  output( { success: $.create($.jsplumb.detach($.connection, $.params)), jsplumb: $.get('jsplumb') })
};
