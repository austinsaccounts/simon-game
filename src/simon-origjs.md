var sequence=[];

function randint(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function simon(arr) {
  var colors = ["blue", "green", "yellow", "red"];
  arr.push(colors[randint( 0,3 )]);
}

function flashing() {
  var i = 0;
function flasher(num){
    if(i < sequence.length){
      setTimeout(function(){$('.' + sequence[i]).addClass("flash");
      setTimeout(function(){$('.' + sequence[i]).removeClass("flash") ; i++}, 500);
      flasher()}, 1000);}
    }
    flasher();
  }
// }


  $(document).ready(function() {
    simon(sequence); //this is
    console.log(sequence);
    flashing();
    var j = 0;
    $('.buttons').click(function() {
      var colorInput = $(this).attr('stuff');
      colorInput = colorInput.toString();
      console.log(colorInput);

      // comparison(colorInput);
      // j++
      // console.log(sequence);
      // flashing();
    });
  });
  //above shows we can get comparison value


  function comparison(peets) {
    var sequencechecker = sequencechecker.slice(0, j)
    var k = 0;
    var i = -1;
  function hunter() {
    i++;
    if(sequencechecker[i] !== sequence[i] && i <= sequencechecker.length) {
      hunter();
    }
    if(i == sequencechecker.length+1) {

    } else{
      sequence.length = 0;
      simon(sequence)
      console.log("no dice");
      k = 0;
      j=0;
    }
  } hunter();
}
    if (sequence[k] == peets) {
      console.log('match'+sequence);
      k++;
    }
    else {
      sequence.length = 0;
      simon(sequence)
      console.log("no dice");
      k = 0;
      j=0;
    }
