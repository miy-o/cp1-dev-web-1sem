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

