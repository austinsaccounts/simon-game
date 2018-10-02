
var sequence=[];
var colors = ["blue", "green", "yellow", "red"];

function randint(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function simon(z) {
  sequence.push(colors[randint( 0,3 )]);
  z++;
  var newbie = sequence[z]
  return newbie;
};

  $(document).ready(function() {
    console.log("hello");
  });

      $('#start').click(function() {
        var jesuss = simon(0);
        alert(jesuss);
      });

    $('.buttons').click(function() {
      var colorInput = $(this).attr('stuff');
      colorInput = colorInput.toString();
    });
