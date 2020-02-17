const main = document.getElementById('imgMain');
const secondary = document.getElementsByClassName('imgSecond');

for(let x=0; x < secondary.length; x++){
    secondary[x].addEventListener('mouseover', function(){
        let src = this.currentSrc;
        main.src = src;
    });
    
    secondary[x].addEventListener('mouseout', function(){
        main.src="images/exterior2.jpg";
    })
}