let timeSR; //global variables for all code
let timeSS;
let wind; 
let pressure;
let temperature;
let image;
let date;
let parent;
let apiChoose;
let obj;
let number;
let index;
let city;

 class DataServise{ //makes requests
    constructor(cityName, degree, apiChoose){
        this.cityName=cityName;
        this.degree=degree;
        this.apiChoose=apiChoose;
    }

    getData(){
        let api=`http://api.openweathermap.org/data/2.5/${this.apiChoose}?q=${this.cityName}&appid=bf35cac91880cb98375230fb443a116f&units=${this.degree}`;
    fetch(api)
            .then(response => response.json())
            .then(json => {

                if(this.apiChoose=="weather"){
                    timeSR = new Date((json.sys.sunrise)/1000);
                    timeSS = new Date((json.sys.sunset)/1000);
                    wind = json.wind.speed;
                    pressure = json.main.pressure;
                    temperature = json.main.temp;
                    image = json.weather[0].icon;

                    city = this.cityName;

                   let x=new AddToday(this.cityName);
                   x.create();
                }
                else if(this.apiChoose=="forecast"){
                    obj=json.list;
                   
                    for(let i=0; i<obj.length; i++){
                        
                        number=obj[i];
                        index=i;
                        date=new Date((number.dt)/1000);;
                        wind = number.wind.speed;
                        pressure = number.main.pressure;
                        temperature = number.main.temp;
                        image = number.weather[0].icon;

                        city = this.cityName;

                        let x=new AddForecast(this.cityName);
                        x.create();
                    }
                }
            })   
    }
 }