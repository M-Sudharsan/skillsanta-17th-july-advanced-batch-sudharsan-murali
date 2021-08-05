/*
  Q3. What will be the output of the following code?
  var Employee =
  {
  company: 'Rohit'
  }
  var Emp1 = Object.create(employee);
  delete Emp1.company Console.log(emp1.company);
*/

var Employee =
  {
  company: 'Rohit'
  }
  var Emp1 = Object.create(employee);
  delete Emp1.company Console.log(emp1.company);

/*
OUTPUT:

Uncaught SyntaxError: Unexpected identifier 
 at https://cdpn.io/cp/internal/boomboom/pen.js?key=pen.js-4f411ff3-5891-87e1-45d4-93e9ed41c22a:6
 
 */
