//exercicio 1
function test(t) {
    if (t === undefined) {
    return 'valor indefinivel';
    }
    return t;
    }
    
    let x;
    
    
    
    
    
    console.log(test(x));
    
//exercicio 2
let num1= 7 ;
let num2= 2 ;
let res= num1%num2 ;
console.log(res);

//exercicio 3
let texto= prompt('informe seu imc!')
if(texto <18.5){
    document.write('voce esta abaixo do imc adequado')
    document.write("<br><br>")
}


if(texto == 18 || texto <=24){
    document.write('seu imc esta adequado')
    document.write("<br><br>")

}
else if(texto >= 25){
    document.write('seu imc esta fora do normal por favor consultar o medico')
    document.write("<br><br>")
}

//exercicio 4

let idade = prompt("Informe a sua idade")
if(idade <= 12){
    document.write("e uma crianca")
}
else if(idade <= 17 && idade >= 13){
    document.write("e um adolescente")
}
else if(idade >=18 && <=49){
    document.write("e um adulto")
}
else if(idade <=50){
    document.write('e um idoso')
}

//exercicio 5
let usuario=prompt("Digite o nome de usuário")
let senha=prompt("Digite sua senha")
if(usuario=="admin" && senha=="1234"){
    document.write("Usuario logado com sucesso")
}else
document.write("Login ou senha incorretos")

document.write("<br></br>")
let num1= 7 ;
let num2= 2 ;
let res= num1%num2 ;
console.log(res);

//exercicio 6
let nota1=parseFloat(prompt("me fale sua primeira nota"))
let nota2=parseFloat(prompt("me fale sua segunda nota"))
let nota3=parseFloat(prompt("me fale sua terceira nota"))
let nota4=parseFloat(prompt("me fale sua quarta nota"))
let nota5=parseFloat(prompt("me fale sua quinta nota"))
let nota6=parseFloat(prompt("me fale sua sexta nota"))
let nota7=parseFloat(prompt("me fale sua sétima nota"))
let notas= nota1+nota2+nota3+nota4+nota5+nota6+nota7
let media=notas/7
if(media>=6){
    document.write("Você foi aprovado")
}else{
    document.write("Você foi reprovado")
}
document.write("<br></br>") 
document.write(nota1)
document.write("<br></br>")
document.write(nota2)
document.write("<br></br>")
document.write(nota3)
document.write("<br></br>")
document.write(nota4)
document.write("<br></br>")
document.write(nota5)
document.write("<br></br>")
document.write(nota6)
document.write("<br></br>")
document.write(nota7)

//exercicio 7

let nome=prompt("Me de seu nome")
let idade2=parseInt(prompt("Me de sua idade"))
let curso=prompt("Qual o nome do seu curso")
let ano=prompt("Em que ano você começou seu curso?")
document.write("O seu nome é ", nome)
document.write("<br></br>")
document.write("Você tem ", idade2, " anos de idade")
document.write("<br></br>")
document.write("Você cursa ", curso)
document.write("<br></br>")
document.write("E começou no curso no ano de ", ano)
document.write("<br></br>")
document.body.style.backgroundColor="#FFFF00"
document.write("<br></br>")
document.write("<br></br>") 

