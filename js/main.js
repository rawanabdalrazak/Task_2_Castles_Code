

function changeColor(){
   
   
    
        let color = document.getElementById('color').value;
        let body = document.getElementsByTagName('body')[0];
    body.style.backgroundColor=color;
    if(color === "white" || color === "#fff" || color ==="#ffffff"){
        let h1 = document.querySelector('h1');
        let circle1 = document.querySelector('.circle1');
        let circle2 = document.querySelector('.circle2');
        let input = document.querySelector('.Change-color');
        h1.style.color="#f78ca0";
        input.style.color="#f78ca0";
        circle1.style.boxShadow = "0 25px 45px rgba(0, 0, 0, 0.1)";
        circle2.style.boxShadow = "0 25px 45px rgba(0, 0, 0, 0.1)";
       
    }
   

    
}





