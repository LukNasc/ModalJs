 var modal=document.getElementById("modal"); 
        var btn=document.getElementById("btnModal");
        var span=document.getElementsByClassName("fechar")[0];
        elemento=document.getElementsByClassName('modal-content')[0];
    btn.onclick=function(){
        modal.style.display="block";
    }
    span.onclick=function(){
        elemento.style.animationName ="decer";
        setTimeout(function(){modal.style.display="none"},1000);
        
    }