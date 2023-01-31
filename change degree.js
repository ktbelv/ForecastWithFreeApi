
let form1 = document.querySelector(".form1");
let form2 =document.querySelector(".form2")
let degree;

form1.addEventListener("change", function(form1){ 

    let a = new ChangerDegree();
    a.change(form1, 'first', city)
 
 })
 form2.addEventListener("change", function(form2){

    let b = new ChangerDegree();
    b.change(form2, 'second', city)

 })

class ChangerDegree{

    constructor(){
    }
    change(form, toogle, ctName){

        if(form.target.checked){

            if (form.target.id=="celsius"){
                degree="metric";
            }
            else if(form.target.id=="fahrenheit"){
                degree="imperial";
            }
            
            if(toogle=='first') {

                let a = new Remover("feature"); 
                a.delete('class', "feature");

                let london=new DataServise("london", degree, "weather");
                london.getData();

                let kyiv=new DataServise("kyiv", degree, "weather");
                kyiv.getData();

                let paris=new DataServise("paris", degree, "weather");
                paris.getData();

                let berlin=new DataServise("berlin", degree, "weather");
                berlin.getData();

                let miami=new DataServise("miami", degree, "weather");
                miami.getData();
            }
            else if(toogle=='second'){

                let b = new Remover("feature2");
                b.delete('id', "feature2");
                b.delete('id', "date");

                let object=new DataServise(ctName, degree, "forecast");
                object.getData();
            }
        }
    }
}