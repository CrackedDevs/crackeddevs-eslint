// Test file with TypeScript errors
const unusedVariable = 'this should trigger an error';

function badFunction(parameter: any) {
  console.log(parameter);
  return parameter;
}

const arrowFunction = (x: number, y: string) => {
  return x + y; // Type error: number + string
};

// Missing semicolons
const obj = {
  name: 'test',
  value: 42,
};

// Unused import (if we had one)
// import { something } from 'somewhere'

export { badFunction, arrowFunction };
