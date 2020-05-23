//#region Variables
var list = document.getElementById('Roll-Call');

var li;
        
var textValue;

const rollButton = document.querySelector('#Create-Roll-Button');

const showAllRollsButton = document.querySelector('#Show-All-Rolls-Button'); 

const resetButton = document.querySelector("#Reset-Button"); 

let rollsTotal = document.querySelector("#Total-Of-Rolls");

let numOfDie = document.querySelector("#Number-Of-Dice");

let newTotalValue = 0;

let rollCallList = document.querySelector("#Roll-Call");

const dieRolls = [numOfDie];

let numberOfSides = 6;

let isShowing = false;
//#endregion

//#region Methods
rollButton.addEventListener("click", function()
{
//  //This decides how many SIDES the SINGLE dice has!
//  let randomRollNumber = rollDie(numberOfSides);   

 let index = 0; 

 let numberOfDice = numOfDie.value;

 console.log("Roll button clicked. Number of Dice is: " + numberOfDice);

 while(index < numberOfDice)
 {
         //This decides how many SIDES the SINGLE dice has!
        let randomRollNumber = rollDie(numberOfSides);   
        //Debug each value
        console.log("Inside while loop " + index + "times. Random roll number is", randomRollNumber + " of " + numberOfSides + " sides.");
        //Push the most recent randomRollNumber to the dieRolls Array
        dieRolls.push(randomRollNumber);
        //Add randomRollNumber to the newTotalValue 
        newTotalValue += randomRollNumber;
        //increment the while loop
        index++;
 }
 //Return total number of rolls. 
   return rollsTotal.innerHTML = newTotalValue;       
})
//Show all rolls that have been rolled
showAllRollsButton.addEventListener("click", function()
{     
     

        console.log("Show all rolls button clicked.");

         //Don't know why but it doesn't want to start at index 0...
         index = 1;

        if(!isShowing)
        {
                while(index < dieRolls.length)
                {
                        console.log("Show all rolls: " + index);
                        //https://www.w3schools.com/howto/howto_js_todolist.asp
                        li = document.createElement("li");

                        textValue = document.createTextNode(dieRolls[index]);
                        
                        li.appendChild(textValue);
                        list.appendChild(li);
                        //  if(dieRolls[index] != Number)
                        //  {
                        //   dieRolls.shift(); 
                        //   let removedItem = dieRolls.shift();
                        //  }              
                        index++;
                }
        }
        isShowing = true;
})

//Reset the scores
//https://stackoverflow.com/questions/1232040/how-do-i-empty-an-array-in-javascript
resetButton.addEventListener("click", function() {

        isShowing = false;
        numOfDie.value = 0;

        newTotalValue.value = 0;
       // newTotalValue.innerHTML = 0;

        rollsTotal.value = 0;
        rollsTotal.innerHTML = 0;

        while(dieRolls.length)
        {
                removeItem(dieRolls.length - 1);
               // dieRolls.pop();
        }
               
    })

function rollDie (numberOfSides) 
        {return rollNumber = Math.floor(Math.random() * numberOfSides) + 1};

function removeItem(item)
{
        console.log(item);
    list.removeItem(item);
    var li = document.getElementById("li");

    item = document.getElementById(li);

    list.removeChild(list[item]);
//      index = dieRolls.length - 1;

//         while(index < dieRolls.length)
//         {
//                 soundOff.removeChild(index)
//                 index--;
//         }
    
}
//#endregion