var sequence=["green"];
var i = 0;
// function randint(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
// }
//
//  function simon() {
//    console.log("i transfered");
// export function simon(arr) {
//   var colors = ["blue", "green", "yellow", "red"];
//   var sequence = [];
//   sequence = arr.push(colors[randint( 0,3 )])




$(document).ready(function() {
  $('.buttons').click(function() {
    // i++
    var jesus = $(this).attr('stuff');
    jesus = jesus.toString();
    console.log("start works and is importing");
    console.log(sequence[0] +" "+ jesus);
    comparison(jesus)
  });
});
//above shows we can get comparison value



// the edits are currently greyed out because wewanna simplify the script calling
function comparison(peets) {
  while (i <= sequence.length)
  if (sequence[i] == peets) {
    console.log("matches");
  }
  else {
    console.log("doesnt");
  }
}

//
// function comparison(peets) {
//   while (i <= sequence.length)
//   if (sequence[i] == peets) {
//     console.log("matches");
//   }
//   else {
//     console.log("doesnt");
//   }
// }
