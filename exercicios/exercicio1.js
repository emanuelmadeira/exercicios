let lista = [1,2,5,2,5];
let maiornum = 0;
let menornum = 0 ;
for(let i = 0;i<lista.length;i++ ){
    if(lista[i]>maiornum){
        maiornum = lista[i]
    }
    if(menornum == 0){
        menornum = lista[i]
    }
    if(lista[i]<menornum){
        menornum = lista[i]
    }
}
console.log(maiornum)
console.log(menornum)