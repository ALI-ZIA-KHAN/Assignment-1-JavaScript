


 var student=[];


 var x=new Array();



var str=['Ali','Asad','Ahsan']
document.write(str);
document.write("<br>")

var num=[101,142,12153,123224]
document.write(num);
document.write("<br>")


var bool=[true,false,true]
document.write(bool)
document.write("<br>")

var z=['laptop','pakistan',40,true];
document.write(z)
document.write("<br>")

document.write("<h1> Qualifications </h1> <br>")
var qualifications=[ '1 :SSC', '2 :HSC', '2 :BCS' ,'3 :BS', '4 :BCOM', '5 :MS', '6 :M. Phil'];
for (var i=0;i<qualifications.length;i++){

    document.write(qualifications[i]+"<br>");
}



var std_name=['Rehan','Haris','Kabeer'];
var std_score=[410,451,480];
var totalscore=500;
 for(var i=0;i < std_name.length;i++){
     document.write("Score of "+std_name[i]+" is = "+std_score[i]+"  Percentage : "+(std_score[i]/totalscore)*100+"% <br>")
 }


 document.write("<br>")
var colours=["Yellow","Orange","Black","Green","Red","Purple","White"];
document.write(colours+"<br>");

var colours=["Yellow","Orange","Black","Green","Red","Purple","White"];
var x=prompt("Which color do you you want to add in the begging of list ?" )
colours.unshift(x);
document.write(colours +"<br>");

var colours=["Yellow","Orange","Black","Green","Red","Purple","White"];
var y=prompt("Which color do you you want to add in the last of this list ?<br>")
colours.push(y);
document.write(colours +"<br>");

var y=prompt("Which two colors do you you want to add in the last of this list ?<br>");
var z=prompt("Which two colors do you you want to add in the last of this list ?<br>");
colours.push(y);
colours.push(z);
document.write(colours +"<br>");

var colours=["Yellow","Orange","Black","Green","Red","Purple","White"];
colours.shift();
document.write(colours);


var colours=["Yellow","Orange","Black","Green","Red","Purple","White"];
colours.pop();
document.write(colours);


var colours=["Yellow","Orange","Black","Green","Red","Purple","White"];
var a=+prompt("At which index you want to add color");
var b=prompt("Which color do you want to add ");
colours.splice(a,0,b);
document.write(colours);


var colours=["Yellow","Orange","Black","Green","Red","Purple","White"];
var a=+prompt("From which index you want to delete color");
var b=prompt("How many colors do you want to add ");
colours.splice(a,b);
document.write(colours);




var cities=['Karachi','Hyderabad','Lahore','Multan'];
var selectedCities=['Islamabad','Quetta'];
selectedCities.push(cities[0],cities[1],cities[3]);
document.write(selectedCities);


var arr = ["This","is","my","cat"];
 var arr=['This','is','my','cat'];
 var x=arr.join("&nbsp")
 document.write(arr+"<br>");
 document.write(x);



var z=[];
z.push("Keyboard");
z.push("Mouse");
z.push("Monitor");
z.push("CPU");
document.write(z+"<br>")
for (var i=0; i<4;i++){
    document.write("Out :"+"<br>"+z[i]+"<br>")
}



var z=[];
z.unshift("Keyboard");
z.unshift("Mouse");
z.unshift("Monitor");
z.unshift("CPU");

document.write(z+"<br>");
for (var i=0; i<4;i++){
    document.write("Out :"+"<br>"+z[i]+"<br>")
}


  

var manu=[ "Apple", "Samsung", "Motorola", "Nokia", "Sony","Haier"]
document.write("<select><option>"+ manu[0]+"</option><option>"+manu[1]+"</option><option>"+manu[2]+"</option><option>"
+manu[3]+"</option><option>"
+manu[4]+"</option><option>"
+manu[4]+"</option><option></select>")