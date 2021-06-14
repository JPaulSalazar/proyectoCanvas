import Picture from './modules/picture.js';
import MouseBrush from './modules/mouseBrush.js';
import{canvas}from './modules/util.js';
import{getMousePos}from './modules/mousePosition.js';

let pictureSrc = './img/picture.jpeg';//defini el src de la imagen en una funcion por si se necesita cambiar en algun momento
let image = new Picture(pictureSrc);

image.picture.addEventListener('load', () => {
    //image.picture es la imagen definida en la clase Picture
    image.draw();
})
    
canvas().addEventListener('mousemove', function(e) {
    let mouseRadius = 40;//radio que define el tamaño del pincel o circulo que se usa para decubrir la ilustracion
    let mousePos = getMousePos(e.clientX, e.clientY);// aca sepasan los parametros de en que punto se encuenta el mouse segun la ventana del browser
    let mouseEraser = new MouseBrush(mousePos.x, mousePos.y, mouseRadius);
    mouseEraser.draw();
});
