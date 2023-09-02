

function changeColor(){
   
   
    
        let color = document.getElementById('color').value;
        let body = document.getElementsByTagName('body')[0];
    body.style.backgroundColor=color;
    
   

    
}
var btn =document.querySelector("button");

function getNewColor(){
    var symbols ='0123456789ABCDEF';
    var colorhash = '#';
    for(var i=0;i<6;i++){
        colorhash = colorhash + symbols[Math.floor(Math.random()* 16)];

    }
    
    document.body.style.backgroundColor = colorhash;
    
}






