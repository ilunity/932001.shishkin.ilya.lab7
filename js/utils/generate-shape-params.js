import { randomSize } from './random-size.js';

export const generateShapeParams = ( maxSize ) => {
  const size = randomSize(Math.round(maxSize / 2));
  const xOffset = randomSize(100);
  const yOffset = randomSize(100);
  return { size: `${size}px`, position: { x: `${xOffset - 3}%`, y: `${yOffset - 3}%` } };
};
