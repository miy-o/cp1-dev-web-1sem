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

