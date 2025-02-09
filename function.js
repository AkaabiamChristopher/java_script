// first funcion
function getName(){
 return "Chris"
};
console.log(getName());

// second function
function assertEquals(){
   function getMen(){	
	let numberOfMen = 23;
	return numberOfMen
    };
 function getLadies(){
	let numberOfLadies = 6;
	return numberOfLadies
  };

 return getMen() === getLadies()
};
console.log(assertEquals());


//third function
function count(){
   let value = 0;
return{
   increment: function(){
   return value++
},
   decrement: () =>{
   return value --
},
  getValue: function(){
  return value
    }
  }
};
let counter = count()
counter.increment();
console.log(counter.getValue());

//forth function
let firstName =  "chris"

function greet(name){ 
  return `Hello $(name)`
};

function executeFunction(callback, userName){
   return callBack(userName)
}

let result = executeFunction(greet, firstName);
console.log(result)

