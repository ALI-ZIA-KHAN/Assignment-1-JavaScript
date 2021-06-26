var A=+prompt("ENTER NUMBER") 
if(A<0){
    alert("Number is Negative")
}
else if(A>0){
    alert("Number is Positive")
}
else{
    alert("Number is Zero")
}



var A=+prompt("ENTER NUMBER")
var B=+prompt("ENTER NUMBER")
if(A>B){
    alert(A + " is larger")
}
else if(A<B){
    alert(B + " is larger")
}
else
{
    alert("Number is Equal")
}



var vovel=["A","a","E","e","I","i","O","o","U","u"]
var A=prompt("ENTER CHARACTER")
if(A==vovel){
    alert("True Character is Vovel")
}
else{
    alert("False  Character is Not Vovel")
}




var enter=prompt("ENTER PASSWORD")
var pass="BASIT"
if(enter == " ")
{
    alert(" “ Please enter your password” ")
}
else if(enter == pass)
{
    alert(" “Correct! The password you entered matches the original password” ")
}
else
{
    alert(" “Incorrect password” ")
}




var greeting;
var hour = 13;
if (hour < 18)
{
document.write("Good day")
}
else
{
document.write("Good evening")
}