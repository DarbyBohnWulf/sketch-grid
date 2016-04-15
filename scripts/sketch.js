$(document).ready(function() {
  $('#topWrap').append($('<div id="grid"></div>'));
  function addScrib() {
    $('#grid').append($('<div class="scrib"></div>'));
  };

  function addRow(num) {
    do {
      addScrib();
      num--;
    } while (num > 0);
    $('#grid').append($('<br>'));
  };

  function popGrid(sqSize) {
    this.i = sqSize;
    do {
      addRow(sqSize);
      i--;
    } while (i > 0);
    this.scHeight = 900 / sqSize;
    $('.scrib').height(scHeight);
    $('.scrib').width(scHeight);
  };

  var size = 16;

  $('#setSize').click(function() {
    size = $('#square').val();
    $('#grid').empty();
    popGrid(size);
  });
  popGrid(size);
  $('.scrib').hover(
    function() {
      $(this).addClass("scribd");
    }, function() {
      $(this).delay(3000).queue(function() {
        $(this).removeClass("scribd").dequeue;
      });
    }
  );
});
