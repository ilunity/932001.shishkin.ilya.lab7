import { Canvas } from './canvas.js';
import { Triangle } from './shapes/triangle.js';
import { Square } from './shapes/square.js';
import { Circle } from './shapes/circle.js';
import { addShape } from './utils/add-shape.js';

const addListeners = ( canvas ) => {
  const addTriangleBtnElem = document.querySelector('.form__triangle-btn');
  const addSquareBtnElem = document.querySelector('.form__square-btn');
  const addCircleBtnElem = document.querySelector('.from__circle-btn');

  const inputElem = document.querySelector('.form__input');

  const handleAddShapeBtn = ( shapeClass ) => {
    const figuresCount = inputElem.value;

    addShape(shapeClass, figuresCount, canvas);
  };

  addTriangleBtnElem.addEventListener('click', () => handleAddShapeBtn(Triangle));
  addSquareBtnElem.addEventListener('click', () => handleAddShapeBtn(Square));
  addCircleBtnElem.addEventListener('click', () => handleAddShapeBtn(Circle));
};

const start = () => {
  const root = document.querySelector('.root');

  const canvas = new Canvas({ width: '1200px', height: '600px' });
  root.append(canvas);

  addListeners(canvas);
};

start();
