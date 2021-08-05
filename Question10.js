/*
Q10.
Consider below as an example of constructor function where we want name and level to be
referred to a function itself, is below example correct or not? Please explain?


function Hero(name, level)
{
name = name;
level = level;
}

*/

//The name and level parameters passed to function Hero(name, level) are passed as parameters of the Hero function.
//As such the name and level parameters are referred to the Hero function. as such, the function can be written as follows:

function Hero(name, level)
{
  this.name = name;
  this.level = level;
}

//But if the question is to assign the name and level parameters to a function inside the Hero function, 
//then the best way to do this is to call a function inside the Hero function and assign the values to those respective functionsa while defining the
//called functions separately under the Hero function. As such, the function can be written as folows:
  
function Hero(name, level)
{
  this.name = name(name);
  this.level = level(level);
}

function name()
{
//code to get or manipulate the name variable before returning the name
}

function level
{
//code to get or manipulate the name variable before returning the level
}
