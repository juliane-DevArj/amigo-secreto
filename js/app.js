let amigos = [];
let contagemSorteio = 0;

function adicionar(){
    
    // Recuperar nome dos amigos
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');

    /* Concatenar os nomes dos amigos na lista que aparece na tela, DICA: Use apenas um if else
    Não se esqueça do  text.Content */

    // Verificação de entrada vazia ou inválida usando expressão regular
    const nomeValido = /^[a-zA-Z0-9À-ÿ]+( [a-zA-Z0-9À-ÿ]+)*$/; // Aceita letras, números e acentos
    if (amigo.value.trim() === '' || !nomeValido.test(amigo.value)) {
        alert("Por favor, insira um nome válido (sem espaços ou caracteres especiais isolados).");
    } 
    else if(lista.textContent == ''){
        lista.textContent = amigo.value;
    }   
    else if(amigos.includes(amigo.value)){
        alert(`Você já inseriu ${amigo.value} na lista!`);
    }
    else{
        lista.textContent = lista.textContent +", "+ amigo.value;
    }
    
    // Adiciona o amigo escrito na lista do Array
    amigos.push(amigo.value);
    
    // Limpar campo onde se escreve o nome dos amigos - Passando um valor vazio para a var amigo
    amigo.value = '';
}

function sortear(){
    
    let sorteio =  document.getElementById('lista-sorteio');

    if (contagemSorteio === 0){
       
        embaralhar(amigos);    
    
        for(let i = 0; i < amigos.length; i++){
    
            if (i == amigos.length - 1) {
                sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[0] + '<br/>';
    
            } else {
                sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[i + 1] + '<br/>';
            }
    
            contagemSorteio++ ;
        }
    }

    else{
        alert('Você já realizou o sorteio, reinicie!')
    }
 
}

function embaralhar(lista){
    //Código copiado, local que já estava pronto
    // Declara a var indice, que é formada pelo tamanho da lista passada
    // Ele faz um decremento da lista no final do laço for
    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);
        
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }

}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}






