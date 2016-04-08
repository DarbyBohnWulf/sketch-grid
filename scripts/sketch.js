$(document).ready(function() {
  $('#topWrap').append($('<div id="grid"></div>'));
  /*
  var popGrid
  var addRow = function(num) {
    do {

    }
  };*/
  function addScrib() {
    $('#grid').append($('<div id="scrib"></div>'));
  };

  function addRow(num) {
    do {
      addScrib();
      num--;
    } while (num > 0);
    $('#grid').append($('<br>'));
  };

  function popGrid(sqSize) {
    $('#scrib').height(function() {
      return 900 / sqSize;
    });
    $('#scrib').width(function() {
      return (900 / this.sqSize);
    });
    this.i = sqSize;
    do {
      addRow(sqSize);
      i--;
    } while (i > 0);
  };

  var size = 16;

  $('#setSize').click(function() {
    size = $('#square').val();
    $('#grid').empty();
    popGrid(size);
  });
  popGrid(size);
});
