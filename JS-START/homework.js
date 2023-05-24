const initialValues=[3, 65,'Andreea', false, null, 'Simona', true];
console.log(initialValues)


const otherValues=[3, 65,'Andreea','Ioana', '12', false, null, 'Simona', true];
console.log(otherValues);

const arrays = initialValues.push(otherValues);
console.log(initialValues);

let rezultat = initialValues[0]+2;
let rezultate = initialValues[1]-2;
console.log(rezultat)
console.log(rezultate)

initialValues[0] = rezultat;
initialValues[1] = rezultate;


let secondOp = otherValues[0]-2;
console.log(secondOp)

otherValues[0] = secondOp