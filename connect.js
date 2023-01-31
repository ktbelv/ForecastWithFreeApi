//settings of original site view 

let london=new DataServise("london", 'metric', "weather");
london.getData();

let kyiv=new DataServise("kyiv", 'metric', "weather");
kyiv.getData();

let paris=new DataServise("paris", 'metric', "weather");
paris.getData();

let berlin=new DataServise("berlin", 'metric', "weather");
berlin.getData();

let miami=new DataServise("miami", 'metric', "weather");
miami.getData();

let clickMenu=document.querySelector('#anotherDays');
clickMenu.addEventListener('mousemove', function(e){
    let menu = document.querySelector('#menuCont');
    menu.style.display='block';
})

let menu = document.querySelector('#menuCont');
menu.addEventListener('mouseout', function(e){
    menu.style.display='none';
})

class Clicker{ 
    constructor(){
    }

    makeClick(cityN){
        let container=document.querySelector(".forecast");
        container.style.display="flex";

        city = cityN;

        let objectNew = new Remover("feature2");
        objectNew.delete('id', "feature2");
        objectNew.delete('id', "date");

        let object1 = new DataServise(city, 'metric', "forecast");
        object1.getData();
    }
}


class Finder{ 
    constructor(){}

    find(cityName, cityId){
        let xCity=document.querySelectorAll('#'+cityId); 

        for (city of xCity){
            city.addEventListener('click', function(e){
                let objectNew = new Clicker;
                city = cityName;
                objectNew.makeClick(city)
            })
        }
    }
}

let kyivCity=new Finder;
kyivCity.find('kyiv', 'nameK')

let miamiCity=new Finder;
miamiCity.find('miami', 'nameM')

let londonCity=new Finder;
londonCity.find('london', 'nameL')

let berlinCity=new Finder;
berlinCity.find('berlin', 'nameB')

let parisCity=new Finder;
parisCity.find('paris', 'nameP')