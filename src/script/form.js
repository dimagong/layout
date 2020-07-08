
import {fileRegister} from './dataInput.js';

var formElem;
//.........created div elements and input elements for form.......//
const CreateFormInput = () => {
    var startPlaceList = document.getElementById('0');

        formElem = fileRegister.map( ({ id, type, placeholder}) => {
        
        var divinput = document.createElement('div');
        divinput.className = "divinput";

        var input_el = document.createElement('input');
    
        input_el.setAttribute('id', `${id}`); 
        input_el.setAttribute('type', `${type}`);
        input_el.setAttribute('placeholder', `${placeholder}`);  
        
        startPlaceList.append(divinput);
        divinput.append(input_el);
        return input_el;
    
    });
}
CreateFormInput();


var open_list = document.getElementById('3');
var toggle = false;

//
//..........create arow down for input in form ...........................//
//

const SetArrowDown = () => {
    var getDivinput = document.getElementsByClassName('divinput');
    var divArrow = document.createElement('div');
    divArrow.className = "arrow-down";
    divArrow.id = 'arrow';
    getDivinput[2].append(divArrow);  
}
SetArrowDown();

const ChangeArrowUpDown = () => {
    var changeArrow =  document.getElementById('arrow');
    changeArrow.removeAttribute('className');
    if(formElem[3].type == 'hidden'){
        
        changeArrow.className = "arrow-down";
    }else{  
        changeArrow.className = "arrow-up";
    }
}


//.........created drop-down list.......//
const OpenCloseList = () => {

      
    const OpenClose = () => {

        for(var i = 3; i < formElem.length; i++){
            if(formElem[i].type == 'hidden'){
                formElem[i].setAttribute('type', 'text');
                formElem[i].setAttribute('name', 'open');
                
            }else{
                formElem[i].setAttribute('type', 'hidden');
                formElem[i].setAttribute('name', 'close');
                
            }
        }       
        AddScroll();
        ChangeArrowUpDown();  ////////////////////////
    }
    var upDownArrow =  document.getElementById('arrow');
    upDownArrow.onclick = () => OpenClose();
    open_list.onclick = () => OpenClose();
}
OpenCloseList();

//.......select input element from drop-down list ......//

const ChangeCountry = () => {
    for(let j = 3; j < formElem.length; j++){
        formElem[j].onclick = () => {
            var context = formElem[j].getAttribute('placeholder');
            open_list.value = context;
            for(let q = 3; q < formElem.length; q++ ) {
                formElem[q].setAttribute('type', 'hidden');
            }
            AddScroll();
            ChangeArrowUpDown();
        }
    }
    
}
ChangeCountry();


//.......created scroll element for div element if it is open.........//
const AddScroll = () => {

    var getDivinput = document.getElementsByClassName('divinput');
    
    for(var i = 3; i < getDivinput.length; i++){

        var checkToOpenInput = formElem[i].getAttribute('type');
        
        
        if(checkToOpenInput == 'text') {
            var divscroll = document.createElement('div');
            divscroll.className = "divscroll";
            getDivinput[i].append(divscroll);
        }else{
            var divscroll = document.getElementsByClassName('divscroll'); 
            divscroll[0].remove();
        }
    }
   AddRunToScroll();
}

//.......add style fot scroll element when done event onmouseover.........//
const AddRunToScroll = () => {
    let allDivWithInput = document.getElementsByClassName('divinput');
    let divAddScroll = document.getElementsByClassName('divscroll');

    for(let i = 3; i < allDivWithInput.length; i++){
            allDivWithInput[i].onmouseover = () => {
                divAddScroll[i - 3].setAttribute('id', 'run-scroll');
            }
            allDivWithInput[i].onmouseout  = () => {
                divAddScroll[i - 3].removeAttribute('id');
             }     
    }
    
}




