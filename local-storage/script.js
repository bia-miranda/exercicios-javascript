//criando a lista de usuarios
let listaDados = [];

//criando a base(construtor)
function Campos(usu, email, senha){
    this.usu = usu;
    this.email = email;
    this.senha = senha;
}

//disparo do botao DOM
const btnEnviar = document.querySelector('#btnSubmit')//pega somente um elemento

//evento click
btnEnviar.addEventListener('click', ()=>{//funçao anonima(nao tem nome)
    
    const inputUsuario = document.querySelector('#usu')
    const inputEmail = document.querySelector('#email')
    const inputSenha = document.querySelector('#senha')

    //instanciando  para receber o objeto
    let info = new Campos(inputUsuario.value, inputEmail.value, inputSenha.value)
    
    listaDados.push(info);
    localStorage.setItem("dados", JSON.stringify(listaDados))

    window.alert("Usuário cadastrado!");
})

localStorage.clear()
console.log(info)