var first=5;
var second=3;

var sum=first+second;
document.write("The sum of "+ first + "and" + second +"is" +sum +"<br>")


var a;
document.write( "Value after variable declaration is:" + a + "<br>")
a=5
document.write("Initial value:"+ a + "<br>")
a+1;
document.write("Value after increment is:"+ a + "<br>")
a+7
document.write("ValueMATH EXPRESSIONS | JAVASCRIPTafter addition is:" +a +"<br>");
a-1;
document.write("Value after decrement is:"+ a +"<br>");
a%4
document.write("remainder after dividing the variable’s value by 3." +"<br>")
document.write("Output : “The remainder is : "+ a+"<br>")





var ticket=+prompt("Enter no of ticket")
document.write("The price of"+ ticket +"iz"+ ticket*100 + "<br>")








var n = +prompt("Enter the number");
for(var a=1; a<=10; a++)
{
    document.write( n + "*" + a + "=" + n*a + "<br>")
}

 

var t=25;
var F =(t *9 /5 ) +32
document.write(t + "is" + F + "<br>");
var s= 77;
var C = (s -32 )* 5/9;
document.write(s + "is" + C +"<br>");








var a = "Price of item 1";
var a1 = +prompt("Enter price of item 1");
var b = "Ordered quantity of item 1";
var b1 = +prompt("Enter quantity of item 1");
var c = "Price of item 2";
var c1 = +prompt("Enter price of item 2");
var d = "Ordered quantity of item 2";
var d1=  +prompt("Enter quantity of item 2");
var ShippingCharges = 100;

document.write( a + "is : " + a1 + "<br>")
document.write( b +" is :" + b1 + "<br>")
document.write( c +"is : " + c1 + "<br>")
document.write( d +"is :" + d1 + "<br>")
document.write("Shipping Charges :" + ShippingCharges + "<br>" +"<br>" +"<br>")
var total = ( x=a1*b1) + (y=c1*d1);
document.write("Total cost of Your order is :" + total + "<br>")







var max = 100;
var min = 40;
var p= (min*100)/max;

document.write("Maximum marks :" + max + "<br>")
document.write("Minimum marks :" + min + "<br>")                
document.write("Percentage :" + p + "<br>")

 

var USD= 10;
var SR= 25;
var PKR= USD*140;
var pkr=  SR * 28;

document.write("Total Currency in PKR from US Dollars is :" + PKR + "<br>")
document.write("Total Currency in PKR from Saudi Riyal is :" + pkr + "<br>")
                
var a = 10 ; a += 5 ; a *= 10 ; a/=2;
document.write(a);



var a = +prompt("Current Year");
var b = +prompt("Birth Year");
var c = 

document.write("Current Year :" + a + "<br>")
document.write("Birth Year :" + b + "<br>")
document.write("Your age is :" + c + "<br>")


var r = 2;                
var c = 2 * 3.142 * r ;
var a = 3.142 * r * 2;

document.write("Radius of circle is :" + r + "<br>")
document.write("The Circumference is :" + c + "<br>")
document.write("The Area is :" + a + "<br>")




var snack = "Lays";
var age = 18;
var a = 64;
var b = 2;
var c = a-age*b;

document.write("Favourite Snack : " + snack + "<br>")
document.write("Current Age : " + age + "<br>")
document.write("Maximum Age : " + a + "<br>")
document.write("Amount of snack per day : " + b + "<br>" + "<br>")
document.write("You will need " + " " + c + " " + snack + " " + "to last you untill the ripe old age of " + a  )