
async function getProducts(){
    
    try{

        const data =await fetch(
            "https://ecommercebackend.fundamentos-29.repl.co/");

        const res= await data.json();
            console.log(res);
            return res;

    
    }catch(error){
        console.log(error);
       }
     
}


//una forma es TextEncoderStream. pero tiene que estar elo type modele
//const res=await getProducts(); //para usar el await el script tiene que tener el type:module

//console.log(res);

//Otra forma

//creo una funcion main que me llama la funcion que me trae la data y me arranca el cpodigo de forma asyncrona

// // // // async function main(){
// // // //     const res= JSON.parse(window.localStorage.getItem('products'))
// // // //    || (await getProducts());
// // // //     console.log(res);
// // // // }

//llamo a la funcion y hace todo

// // // // main();



//LARGAMOS CON EL ALGORITMO*************************************************************
//******************************************************************* */

// // // // // MEJOE CREO UN OBJETO CON DOS CAMPOS

 
async function main(){

        const db ={
            products:JSON.parse(window.localStorage.getItem('products')) ||
                    (await getProducts()),
            cart:{}
        };
        // console.log(db.products);
        /*printVariosProducts(db);*/
}

main();

        
        
      function printProduct(product){  
        let prod=`
            <div class="product">  
                <div class="product__img">
                   <img src="${product.image}" alt=""></img>
                </div>
            
                <div class="producto__info">
                    <h2 class="precio">$${product.price}</h2>
                    <h2>Stock: ${product.quantity}</h2>
                  
                   <h3><span> ${product.name}</span> </h3>
                </div>
               
            </div> `;
         return prod;
      } 
     
      //<i class='bx bx-plus' id='${product.id}'></i>
     function printVariosProducts(products){
            const dataHTML=document.querySelector(".products");
            
            let html="";
            for (const prod of products.products){
                html+=printProduct(prod);
              } 
             
              dataHTML.innerHTML=html;

     }
     
     



// // console.log(usuario[0]);
