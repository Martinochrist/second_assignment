var nameP = 1;
var person = 2;

var output = person + nameP
console.log(output)


// you are going to create a function that tells us how many days, weeks and months we have let ,if we live upto 90 years old.
function lifeInWeeks(age) {
   
    /************Don't change the code above************/    
       
        //Write your code here.
        person = prompt("Enter your age")

        if(person == 25){
            alert("you have" + " " + "65year , 3,380 weaks , 23,725 days" +" " + "to 90year before you die!")

        }else(
            alert("you are up to"+ "" + age +"year!")
        )
 


    /*************Don't change the code below**********/
    }

    lifeInWeeks(90)




//  Now we want to build a love calculator that will give us how many percent match are 2 partners 
//  Build a love Calculator that takes 2 name inputs, then generate a random number that tells us if they are match
//  i.e firstinput = John, secondinput = Mary, then return:
//  John and Mary are 75% match!!

var first_name = prompt("Enter your name ", "boy name") 

var second_name = prompt("Enter your name", "girl name")

if(first_name.length == 4 && second_name.length == 4){

    alert(first_name + " " + "and" + " " + second_name + " " +"are 75% match!!!")

} if (first_name.length == 5 && second_name.length == 4) {
    alert(first_name + "" + "and" + " " +second_name + " "+ "are 80% match!!!")
    
} else {
    alert("your love is not strong!!!")
    
}
