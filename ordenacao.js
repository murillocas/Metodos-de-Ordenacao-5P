var qtdelementos = 10000;
var listaPrincipal = [qtdelementos];
var listaSecundaria = [qtdelementos];

const insertion = document.getElementById('insertion');
const selection = document.getElementById('selection');



for(let x=0; x<qtdelementos ; x++){
    listaPrincipal[x] = Math.floor(Math.random() * (qtdelementos));
}
console.log(listaPrincipal);
function CopiarLista(){
    for(let x=0;x<qtdelementos;x++){
        listaSecundaria[x] = listaPrincipal[x];
    }
}





insertion.addEventListener('click', ()=>{
    console.log("insection");

        CopiarLista();
        let aux;
        for(let i = 1 ; i<qtdelementos; i++){
            for(let j=i ; j>0 ; j--){
                if(listaSecundaria[j]< listaSecundaria[j-1]){
                    aux = listaSecundaria[j-1];
                    listaSecundaria[j-1] = listaSecundaria[j];
                    listaSecundaria[j] = aux;
                }
            }
        }
        console.log(listaSecundaria);
        console.log("----------------------------------"); 
});

selection.addEventListener('click', ()=>{
    console.log("selection");
        CopiarLista();
        let aux;
        let posi;
        for(let x=0;x<qtdelementos-1;x++){
            aux = listaSecundaria[x];
            posi = x;
            for(let j = x+1 ; j < qtdelementos ; j++){
                if(aux > listaSecundaria[j]){
                    aux = listaSecundaria[j];
                    posi = j
                }
            }
            if(x != posi){
                aux = listaSecundaria[posi];
                listaSecundaria[posi] = listaSecundaria[x];
                listaSecundaria[x] = aux;
            }
        }
        console.log(listaSecundaria);
        console.log("----------------------------------"); 
});