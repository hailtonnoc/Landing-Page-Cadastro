console.log('JScriptou');

function validarCEP()
{
    let cep = document.getElementById('cep').value;
    console.log(`CEP: ${cep}`)

    const Httpreq = new XMLHttpRequest();
    Httpreq.open("GET",`https://viacep.com.br/ws/${cep}/json/`, false);
    Httpreq.send();
    console.log(Httpreq.responseText); 

    document.getElementById('erroCEP').style.display = 'none';
    document.getElementById('erroBlocoCEP').style.border = 'none';

    if (!cep) {
        document.getElementById('erroCEP').style.display = 'block';
        document.getElementById('erroBlocoCEP').style.border = '.1875rem solid red';
    }
}

function validaCPF(cpf) 
{
    console.log(cpf.length);
    if (cpf.length != 11) {return false;} 
    
    else 
    {
        var numeros = cpf.substring(0, 9);
        var digitos = cpf.substring(9);
        var soma = 0
        for (var i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i
    }

    var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

    //____________________________________________________________validação do primeiro digito
    if (resultado != digitos.charAt(0)) {return false;}

    soma = 0;
    numeros = cpf.substring(0, 10);

    for (var k = 11; k > 1; k--) 
    {
        soma += numeros.charAt(11 - k) * k;
    }

    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

    //________________________________________________________________validação segundo digito
    if (resultado != digitos.charAt(1)) {return false;}
    
    return true;
    }
}

function validacaoCPF() 
{
    let cpf = document.getElementById('cpf').value;

    let resultadoValidacao = validaCPF(cpf);

    if (!resultadoValidacao) {
        document.getElementById('erroCPF').style.display = 'block';
        document.getElementById('erroBlocoCPF').style.border = '.1875rem solid red';
    } else {
        document.getElementById('erroCPF').style.display = 'none';
        document.getElementById('erroBlocoCPF').style.border = 'none';
    }
}

function validacaoEmail()
{
    let email = document.forms['container']['email'].value;
    if (!email) {
        document.getElementById('erroEmail').style.display = 'block';
        document.getElementById('erroBlocoEmail').style.border = '.1875rem solid red';
    } else {
        document.getElementById('erroEmail').style.display = 'none';
        document.getElementById('erroBlocoEmail').style.border = 'none';
    }
}

function validacaoIdentidade()
{
    let id = document.forms['container']['identidade'].value;
    if (!id) {
        document.getElementById('erroId').style.display = 'block';
        document.getElementById('erroBlocoId').style.border = '.1875rem solid red';
    } else {
        document.getElementById('erroId').style.display = 'none';
        document.getElementById('erroBlocoId').style.border = 'none';

    }
}

function validacaoNascimento() 
{
    let dia = document.getElementById('dia');
    let mes = document.getElementById('mes');
    let ano = document.getElementById('ano');
    let aux = dia.options[dia.selectedIndex].text;
    let aux2 = mes.options[mes.selectedIndex].text;
    let aux3 = ano.options[ano.selectedIndex].text;
    if (!aux || !aux2 || !aux3 ) {
        document.getElementById('erroNascimento').style.display = 'block';
        document.getElementById('dataNascimento').style.border = '.1875rem solid red';
    } else {
        document.getElementById('erroNascimento').style.display = 'none';
        document.getElementById('dataNascimento').style.border = 'none';
    }
}

function validacoes()
{
    validacaoCPF();
    validarCEP();
    validacaoEmail();
    validacaoNascimento();
    validacaoIdentidade();
}