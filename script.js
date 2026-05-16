function mostrarMensagem(){
  const msg = document.getElementById("mensagem");

  if(msg.style.display === "block"){
    msg.style.display = "none";
  }else{
    msg.style.display = "block";
  }
}

/* contador amizade */

const dataInicio = new Date("2023-01-01");

function atualizarContador(){

  const hoje = new Date();

  const diferenca = hoje - dataInicio;

  const dias = Math.floor(
    diferenca / (1000 * 60 * 60 * 24)
  );

  document.getElementById("contador").innerHTML =
    `${dias} dias juntas 💕`;
}

atualizarContador();