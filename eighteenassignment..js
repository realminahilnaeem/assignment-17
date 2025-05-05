let yourHeight=parseFloat(prompt("Enter your height in inches:"));
let yourWeight=parseFloat(prompt("Enter you weight in Ibs:"));
let BMI=(yourWeight*703)/(yourHeight*yourHeight);
let weight=" ";
if(BMI<16.0){
     weight="severly underweight";
}
else if(BMI>=16.0 && BMI<=18.4){
  weight="Under weight";
}
else if(BMI>=18.5 && BMI<=24.9){
    weight="Normal";
}
else if(BMI>=25.0 && BMI<=29.9){
weight="Moderately Obese";
}
else if(BMI>=30.0 && BMI<=34.9){
weight="Severely Obese";
}
else if(BMI>=35.0 && BMI<=39.9)
{
weight="Severely Obese";
}
else if(BMI>39.9)
{
    weight="Morbidly Obese";
}
alert(`Your BMI of ${BMI} makes you ${weight}`);