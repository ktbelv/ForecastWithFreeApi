class Remover{ //removes choosen content
    constructor(item){
        this.item=item;
    }

    delete(type,item){

        let parents;

        if(type==='class'){
            parents=document.querySelectorAll("."+item);
        }
        else if (type==='id'){
            parents=document.querySelectorAll("#"+item);
        }

        for (parent of parents){
        let del=parent.children[0];
        if(del === undefined){
            continue;
        }
        else{
            del.remove();
        }
    }
    }
}