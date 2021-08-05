/*

Q4. Consider the two functions below. Will they both return the same thing? Why or why
not?
  
  
  function foo1()
  {
  return {
  bar: "hello"
  };
  }
  function foo2()
  {return
  {
  bar: "hello"
  };
  }

*/

function foo1()
{
 return {
    bar: "hello"
  };
}
function foo2()
{
  return
  {
    bar: "hello"
  };
}
console.log(foo1());
console.log(foo2());

/*

OUTPUT:
// [object Object] 
{
  "bar": "hello"
}

undefined


ANSWER: No. 
EXPLANATION: The placement of the curly braces '{' or '}' causes a change in the output.
This is mostly because of two reasons -- The semicolon convention and the curly brace convention is Js.
Briefly, the semicolon convention is optional in Js. But not using it is considered as  bad form. 
If a semicolon is not specified, Js assumes a semi colon at the end of the line.

Now, the placement of the curly braces plays a major part in this. 
If the curly brace is placed at the end of the line before returning the line without the semicolon,the code is perfectly valid and gives a proper output.
Now, since the curly brace is placed at the beginning of the new line and immediately returned before calling the return statement, 
Js automatically assumes a semicolon at the end of the new line i.e., immediately after the '{'. This means that the code after the '{' is not considered. 

This is why, foo1 returns the value while foo2 returns as 'undefined'
*/
