function changeColor1(){
    document.getElementById('btn1').style.color= "white";
    document.getElementById('btn1').style.background = "#007bffc0";
}

function changeColor2(){
    document.getElementById('btn2').style.color= "white";
    document.getElementById('btn2').style.background= "#f047bdb0";
}

function calc(){
    var w = document.getElementById("demo1").value;
    var h = document.getElementById("demo2").value;

    var bmi = w / ((h/100)*(h/100));
    var result = document.getElementById("result");
    var rImage = document.getElementById("img");

    if(w == 0 || h==0){
        result.innerHTML = "Enter a number rather than 0";
    
    }

    else if((bmi>= 16 ) && (bmi<=18)){
        result.innerHTML = bmi+"  Under Weight";
        rImage.style.display='block';
        rImage.src='images/underweight.jpg';
    }

    else if((bmi> 18 ) && (bmi<=25)){
        result.innerHTML = bmi+"  Normal";
        rImage.style.display='block';
        rImage.src='images/normal.jpg';
    }

    else if((bmi> 25 ) && (bmi<= 30)){
        result.innerHTML = bmi+"  Over Weight";
        rImage.style.display='block';
        rImage.src='images/overweight.jpg';
    }

    else if(bmi> 30){
        result.innerHTML = bmi+"  Obese";
        rImage.style.display='block';
        rImage.src='images/obese.jpg';
    }


    return false;
}

