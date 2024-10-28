function logar(){
    let nome = document.getElementById('nome').value;
    let senha = document.getElementById('senha').value;

    if(nome === nome && senha === senha){
        console.log("oi, eu estou funcionando")
    }
    else{
        console.log("lol, tu fez alguma coisa de errado")
    }
}