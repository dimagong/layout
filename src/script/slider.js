

 const SlideSwow = () => {
    var sircleList = document.getElementsByClassName('sircle');
    sircleList[0].setAttribute('id', 'dark-sircle');

    var arrowLeft = document.getElementById('arrow-left');
    var arrowRight = document.getElementById('arrow-right');
    var imageForChange = document.getElementById('main-illustration');

        arrowLeft.onclick = () => {
            var sircleBaseElemDark = document.getElementById('dark-sircle');
            var darkIndex = Array.from(sircleList).indexOf(sircleBaseElemDark);
            //alert(darkIndex);

            sircleList[darkIndex].removeAttribute('id'); 
            if(darkIndex == 0) {
                darkIndex = sircleList.length;
            }
            sircleList[darkIndex - 1].setAttribute('id', 'dark-sircle'); 
            var numderPhoto = darkIndex - 1;
            ImageState(numderPhoto);          
        }
        arrowRight.onclick = () => {
            var sircleBaseElemDark = document.getElementById('dark-sircle');
            var darkIndex = Array.from(sircleList).indexOf(sircleBaseElemDark);
            //alert(darkIndex);

            sircleList[darkIndex].removeAttribute('id'); 
            if(darkIndex == sircleList.length - 1) {
                darkIndex = -1;
            }
            sircleList[darkIndex + 1].setAttribute('id', 'dark-sircle'); 
            var numderPhoto = darkIndex + 1;
            ImageState(numderPhoto);          
        } 
}
SlideSwow();

const ImageState = (data) => {
    var elementGetPhoto = document.getElementById('main-illustration');
   switch(data){
         case 0: 
            elementGetPhoto.style.background = "#eeeeee url(img/run.jpg)";
         break;
         case 1:
             elementGetPhoto.style.background = '#eeeeee url(img/run1.jpg)';
        break;
         case 2: 
            elementGetPhoto.style.background = 'url(img/run2.jpg)';
         break;
         case 3: 
             elementGetPhoto.style.background = 'url(img/run3.jpg)';
         break;
        case 4: 
             elementGetPhoto.style.background = 'url(img/run4.jpg)';
         break;
     }
}