import { generateShapeParams } from './generate-shape-params.js';

export const addShape = ( shapeClass, figuresCount, canvas ) => {
  for (let i = 0; i < figuresCount; i++) {
    const randomParams = generateShapeParams(parseInt(canvas.size.height));
    const newShape = new shapeClass(randomParams);
    canvas.append(newShape);
  }
};
