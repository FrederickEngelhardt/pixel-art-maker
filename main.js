// Your JS goes here
//GLOBALS
var palette = 0
var main = document.getElementsByTagName('main')[0];
var color = ['red','blue','green']
function createTable(){
  for (var i = 0; i < 32; i++) {
    console.log('STARTED')
    var tile = document.createElement("div");
    main.appendChild(tile);
    tile.style.width = '5.1%';
    tile.style.paddingBottom = '5.1%';
    tile.display = 'float';
    tile.style.float = 'left';
    tile.style.background = 'white'
    tile.style.border = "thin solid black"
  }
}
// function createPalette(){
//   var palette = document.getElementsByClassname('palette')[0]
//   // for (let i = 0; i < 8; i++){
//     var tile = document.createElement("div");
//     palette.appendChild(tile);
//     tile.style.width = '11.1%';
//     tile.style.paddingBottom = '11.1%';
//     tile.display = 'float';
//     tile.style.float = 'left';
//     tile.style.background = color[0]
//     tile.style.border = "thin solid black"
//   // }
// }
// USE THIS TO LOAD THE FUNCTION!!
document.getElementsByTagName('html')[0].addEventListener('load',createTable());

//LISTENERS!!
main.addEventListener("click", function(){
  event.target.style.backgroundColor = "red"
})
