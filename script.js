do{
    var bmi = prompt("Enter Your BMI");
    if(bmi<18.5){
        alert("you are underweight per BMI Score");
    }
    else if (18.5<=25.5)
    {
        alert("you have healthy BMI Score");
    }
    else if (25.5<bmi)
    {
        alert("you are obsese per BMI Score");
    }
    else{
        alert("enter a valid BMI score");
    }
}while(confirm("Do you wanna check again ?"));