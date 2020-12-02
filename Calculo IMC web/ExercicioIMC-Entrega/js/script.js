//: peso / (altura * altura);
//nome, idade, peso e altura

document.getElementById('idCalcular').onclick = function(){
  var nome = document.getElementById('idNome').value;
  var idade = document.getElementById('idIdade').value;
  var peso = document.getElementById('idPeso').value;
  var altura = document.getElementById('idAltura').value;



  var imc = peso/(altura*altura);
  console.log(imc.toFixed(1));


  //TESTE
  if (imc<17) {
    console.log("Muito Abaixo");
    document.getElementById("imgPessoas").src = "img/muitoAbaixo.png";

  }
  else if (imc>=17 && imc<18.49) {
    console.log("Abaixo do Peso");
    document.getElementById("imgPessoas").src = "img/abaixo.png";
  }
  else if (imc>=18.5 && imc<24.99) {
    console.log("Peso normal");
    document.getElementById("imgPessoas").src = "img/normal.png";
  }
  else if (imc>=25 && imc<29.99) {
    console.log("Acima do Peso");
    document.getElementById("imgPessoas").src = "img/acima.png";
  }
  else if (imc>=30 && imc<34.99) {
    console.log("Obesidade 1");
    document.getElementById("imgPessoas").src = "img/obesidade1.png";
  }
  else if (imc>=35 && imc<39.99) {
    console.log("Obesidade 2");
    document.getElementById("imgPessoas").src = "img/obesidade2.png";
  }
  else if (imc>40) {
    console.log("Obesidade 3, acima de 40");
    document.getElementById("imgPessoas").src = "img/obesidade3.png";
  }

  var resposta = document.getElementById('Idresposta');
  resposta.innerHTML = ("O seu IMC é igual a: "+imc.toFixed(1))

  document.querySelector('#resposta').appendChild(resposta);

}
