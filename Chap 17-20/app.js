
 multi_array=[[],[],[],[],[]];




matrix=[[0,5,2,9],[1,0,11,2],[2,41,0,17]];
console.log(matrix[0],matrix[1],matrix[2]);



for (i=1;i<=10;i++){
     document.write(i,"<br>");
}


numb=+prompt("Enter a number to print  table of:");
len=+prompt("Enter length for multiplication:");
document.write("MULTIPLICATION TABLE OF :",numb,"<br>");
document.write("LENGTH :",len,"<br>","<br>");

for (i=1;i<=len;i++){
    document.write(numb,"*",i,"=",numb*i,"<br>")
}



fruits=["apple","banana","mango","orange","strawberry"];
for (i in  fruits){
    document.write(fruits[i],"<br>");
   
}
for (i in  fruits){
    document.write("Element at index ",i," is ",fruits[i],"<br>")

}


document.write("<b>Counting</b><br>")
for (i=1;i<=15;i++){
    document.write(i+',');
}
document.write("<br><br><b><em>Reverse Counting</em</b><br></br>")
for (i=1;i<=10;i--){
    document.write(i+',')
}
document.write("<br><br><b>Even</b><br>")
for (i=0;i<=20;i++){
    if (i%2==0){
        document.write(i+',')

    }
}
document.write("<br><<b>Odd</b><br>")
for (i=0;i<=20;i++){
    if (i%2!=0){
        document.write(i+',')
    }
}
document.write("<br><b>Series</b><br>")
for (i=0;i<=20;i++){
    if (i%2==0){
        document.write(i,"k"+',')
    }

}



array1=["cake","apple pie","cookie","chips","patties"];
search=prompt("Welcome to our bakery!What do you want to search ");
for (i=0;i<array1.length;i++){
    if ( array1[i]==search){
        document.write(search," is available at index ",i, " in our bakery.")
    }
    else{
        document.write("We are sorry ! ",search," is not available in our bakery.")
    }
    break;
}




Am = [24, 53, 78, 91, 12]

Am=[24,53,78,91,12];
document.write("ARRAY ELEMENTS ARE :",Am, "<br>");
document.write("The largest number is ",Math.max(...Am),"<br>")



Am = [24, 53, 78, 91, 12];
document.write("ARRAY ELEMENTS ARE:",Am, "<br>");
document.write("The lowest number is ",Math.min(...Am))


for (i=1;i<=100;i++){
    if (i%5==0){
        document.write(i+",")
    }
 }