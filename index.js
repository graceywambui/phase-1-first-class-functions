 //The `receivesAFunction` function should:

  //- take a _callback function_ as an argument
  //- call the callback function
  //- it doesn't matter what this function returns, so long as it calls the
    //callback function

-// The `returnsANamedFunction` function should:

 // - take no arguments
  //- return a _name

  function callback() {
    console.log("Hello, world!");
  }

  
 function receivesAFunction(callback){
    callback();
 };
  
   
  receivesAfunction(callback);
  
  
  function returnsANamedFunction() {
    return function namedFunction() {
      // function body here
    }
  }
  
  function returnsAnAnonymousFunction(){
    return function (){

    }
  }