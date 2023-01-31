class AddForecast{ //adds forecast HTML-code

    constructor(cityName){ 
        this.cityName=cityName;
    }

    create(){

        let parent = document.querySelector(".day-"+index)

        let picture=document.createElement("img");
        picture.setAttribute("src", "http://openweathermap.org/img/wn/"+image+"@2x.png")
        let tempDiv = document.createElement("div");
        tempDiv.textContent=temperature;
        let windDiv = document.createElement("div");
        windDiv.textContent=wind;
        let pressureDiv = document.createElement("div");
        pressureDiv.textContent=pressure;
        let dtDiv=document.createElement("div");
        dtDiv.textContent=date;
    
        if(parent===null){
            return;
        }
        else{
    
            if (index==0||index==1){
                parent.children[1].append(picture);
                parent.children[2].append(tempDiv);
                parent.children[3].append(windDiv);
                parent.children[4].append(pressureDiv);
            }
            else{
                parent.children[0].append(dtDiv);
                parent.children[1].append(picture);
                parent.children[2].append(tempDiv);
                parent.children[3].append(windDiv);
                parent.children[4].append(pressureDiv);
            }
    
        }
    }
}
