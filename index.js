    const nome = document.getElementById("nome");
    const aniversario = document.getElementById("aniversario");
    const corFavorita = document.getElementById("cor-favorita");
    const comeco = document.getElementById("comeco");
    const nomeCerto ="Gabriel Martins Vieira";
    const aniversarioCerto ="2025-05-18";
    const corFavoritaCerto ="Rosa";
    const comecoCerto ="2024-03-23";

    function teste(){
        const nomeValor = nome.value;
        const aniversarioValor = aniversario.value;
        const corFavoritaValor = corFavorita.value;
        const comecoValor = comeco.value;
    if(nomeValor==nomeCerto && aniversarioValor==aniversarioCerto 
    && corFavoritaValor==corFavoritaCerto && comecoValor==comecoCerto){
        window.location.href='lembrancas.html';
    }
    else{
        window.location.href='lembrancas.html';
    }
    }
