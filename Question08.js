/*
Q8.
const name = { firstName: 'Philip',
lastName: 'Fry' };
const details = {
job: 'Delivery Boy',
employer: 'Planet Express'
};
How to copy values from one object to another in above mentioned example , merge and
print them?

*/

const name = { firstName: 'Philip',
lastName: 'Fry' };

const details = {
job: 'Delivery Boy',
employer: 'Planet Express'
};

let employee = {
  ...name,
  ...details
};
console.log(employee);

/*
OUTPUT:

//[object Object]
{
"firstName": "Philip",
"lastName": "Fry",
"job": "Delivery Boy",
"employer": "Planet Express"
}

*/
