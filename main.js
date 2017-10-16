// Your JS goes here
// GLOBALS
//
var main = document.getElementsByTagName('main')[0]
var color = ['red', '#FED8B1', '#FFA500', 'blue', 'green', 'yellow', 'purple', 'lightgreen', 'orange', 'lightblue', 'black']
var palette = document.getElementsByClassName('palette')[0]
function createTable () {
  for (var i = 0; i < 3002; i++) {
    var tile = document.createElement('div');
    main.appendChild(tile);
    tile.style.width = '1.1%'
    tile.style.paddingBottom = '1.1%'
    tile.display = 'float'
    tile.style.float = 'left'
    tile.style.background = 'white'
    tile.style.border = 'thin solid black'
  }
}
function createPalette(){
  for (var i = 0; i < color.length; i++){
    var tile = document.createElement('div')
    palette.appendChild(tile)
    tile.style.width = '5.1%'
    tile.style.paddingBottom = '5.1%'
    tile.display = 'float'
    tile.style.float = 'left'
    tile.style.background = color[i]
    tile.style.border = 'thin solid black'
  }
}
// USE THIS TO LOAD THE FUNCTION!!
document.getElementsByTagName('html')[0].addEventListener('load', createTable())
document.getElementsByClassName('palette')[0].addEventListener('load', createPalette())

// LISTENERS!!
var mouseDown = false
main.addEventListener('mousedown', function (event) {
  mouseDown = true
  event.target.style.backgroundColor = colorPick
})

main.addEventListener('mouseover', function (event) {
  if (mouseDown === true){
    event.target.style.backgroundColor = colorPick;
  }
})

main.addEventListener('mouseup', function (event) {
    mouseDown = false
})
// Color picker
var colorPick = 'black'
palette.addEventListener('mousedown', function (event) {
  colorPick = event.target.style.backgroundColor
})
