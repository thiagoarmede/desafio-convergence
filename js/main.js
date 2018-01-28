/*
    Arquivo principal que engloba os eventos e funções do desafio.
    Autor: Thiago Armede
*/

//função que atualiza o elemento a cada vez que a cidade muda.

refresh = (cidade) => {
    if(cidade == 'Salvador'){
        var dados_cidade = {
            nome : 'Salvador',
            temp1 : 32,
            temp2 : 30,
            temp3 : 28,
            temp4 : 31
        };
    }else if (cidade == 'São Paulo'){
        var dados_cidade = {
            nome: 'São Paulo',
            temp1: 22,
            temp2: 25,
            temp3: 19,
            temp4: 21
        };
    }else if (cidade == 'Rio de Janeiro') {
        var dados_cidade = {
            nome: 'Rio de Janeiro',
            temp1: 34,
            temp2: 32,
            temp3: 29,
            temp4: 33
        };
    }
    
    update_template(dados_cidade);
    console.log(cidade);
};

//função responsável por atualizar os elementos do DOM.

update_template = (dados_cidade) => {
    //Atribuindo elementos do DOM a serem atualizados.
    var botaoCidade = document.getElementById('btn-cidade');
    var elementoNomeCidade = document.getElementById('cidade');
    var divTemperaturaAtual = document.getElementById('temp1');
    var divTemperatura2 = document.getElementById('temp2');
    var divTemperatura3 = document.getElementById('temp3');
    var divTemperatura4 = document.getElementById('temp4');

    //Atualizando Botão
    botaoCidade.innerHTML = dados_cidade.nome;
    //Atualizando nome da cidade no widget
    elementoNomeCidade.innerHTML = dados_cidade.nome;
    //Atualizando temperaturas com template strings.
    divTemperaturaAtual.innerHTML = `${dados_cidade.temp1}&deg;<small>C</small>`;
    divTemperatura2.innerHTML = `${dados_cidade.temp2}&deg;<small>C</small>`;
    divTemperatura3.innerHTML = `${dados_cidade.temp3}&deg;<small>C</small>`;
    divTemperatura4.innerHTML = `${dados_cidade.temp4}&deg;<small>C</small>`;

    //mudança do icone da temperatura de acordo com os dados recebidos.
    var iconeTemperatura = document.getElementById('icone-temp');

    //mudando a classe da div pra ocorrer a mudança de icone.
    if(dados_cidade.temp1 >= 30 && !iconeTemperatura.classList.contains('wi-day-sunny')){
        iconeTemperatura.classList.remove('wi-day-cloudy');
        iconeTemperatura.classList.add('wi-day-sunny');
    }else if(dados_cidade.temp1 >= 20 && !iconeTemperatura.classList.contains('wi-day-cloudly')){
        iconeTemperatura.classList.remove('wi-day-sunny');
        iconeTemperatura.classList.add('wi-day-cloudy');
    }

    //mudando imagem do fundo do widget
    var displayTemperatura = document.querySelector('.weather .current');   

    if(dados_cidade.nome == "Rio de Janeiro"){
        displayTemperatura.style.background = "url('./images/rj.jpg') repeat-x"; 
    } else if (dados_cidade.nome == "Salvador"){
        displayTemperatura.style.background = "url('./images/salvador.JPG') repeat-x"; 
    } else if (dados_cidade.nome == "São Paulo"){
        displayTemperatura.style.background = "url('./images/sp.jpg') repeat-x"; 
    }

    
};  

//FIM