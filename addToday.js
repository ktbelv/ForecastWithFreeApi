 class AddToday{ ////adds today weather HTML-code

    constructor(cityName){
        this.cityName=cityName;
    }
    
    create(){

        parent=document.querySelector("#"+this.cityName);

        let indexImg = parent.children[0];
        let indexSR = parent.children[1];
        let indexSS = parent.children[2];
        let indexTemp=parent.children[3];
        let indexWind=parent.children[4];
        let indexPressure=parent.children[5];

        let picture=document.createElement("img");
        picture.setAttribute("src", "http://openweathermap.org/img/wn/"+image+"@2x.png")
        let tempDiv = document.createElement("div");
        tempDiv.textContent=temperature;
        let timeSRdiv = document.createElement("div");
        timeSRdiv.textContent=timeSR;
        let timeSSdiv = document.createElement("div");
        timeSSdiv.textContent=timeSS;
        let windDiv = document.createElement("div");
        windDiv.textContent=wind;
        let pressureDiv = document.createElement("div");
        pressureDiv.textContent=pressure;

        indexImg.append(picture);
        indexSR.append(timeSRdiv);
        indexSS.append(timeSSdiv);
        indexTemp.append(tempDiv);
        indexWind.append(windDiv);
        indexPressure.append(pressureDiv);
    }

}
