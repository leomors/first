window.addEventListener('load', function(e){
   
    eventoOnLoad();

    let missao  = "Missão estelar está em execução";
    let $botao = document.querySelector('#botao');
    $botao.addEventListener('click', function(){
        eventoOnClick();
    });

    function eventoOnClick(){
        console.log("Missão estelar JS realizada com sucesso!");
    }

    function eventoOnLoad(){
        console.log("Evento onload dispirado");
    }
});