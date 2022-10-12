import { randomSize } from './random-size.js';

export const generateShapeParams = ( maxSize ) => {
  const size = randomSize(maxSize);
  const xOffset = randomSize(100);
  const yOffset = randomSize(100);
  return { size: `${size}px`, position: { x: `${xOffset}%`, y: `${yOffset}%` } };
};
