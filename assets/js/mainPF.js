const products=[
    {
    id:1,
    name:"Camiseta de manga corta con cuello redondo",
    price:10,
    image:"https://res.cloudinary.com/duu1imwxs/image/upload/v1677270464/eCommerce/shirt1_prckre.png",
    category:"shirt",
    quantity:5,
    description:"Esta camiseta básica presenta un corte regular y un cuello redondo clásico. Es ideal para el uso diario y se puede combinar con una amplia variedad de looks."
},
{
    id:2,
    name:"Camiseta de manga larga con estampado gráfico",
    price:15,
    image:"https://academlostorev1.netlify.app/images/sweater2.png",//es la principal
    // image:"https://res.cloudinary.com/duu1imwxs/image/upload/v1677270464/eCommerce/shirt2_av4jld.png",
    // image:"https://res.cloudinary.com/duu1imwxs/image/upload/v1677270464eCommerce/shirt2_av4jld.png",
    category:"shirt",
    quantity:3,
    description:"Perfecta para un look casual, esta camiseta de manga largapresenta un estampado gráfico llamativo en el pecho. Su ajuste regular ysuave tejido de algodón la hacen cómoda y fácil de usar."
},
{
    id:1,
    name:"Camiseta de manga corta con cuello redondo",
    price:10,
    image:"https://res.cloudinary.com/duu1imwxs/image/upload/v1677270464/eCommerce/shirt1_prckre.png",
    category:"shirt",
    quantity:5,
    description:"Esta camiseta básica presenta un corte regular y un cuello redondo clásico. Es ideal para el uso diario y se puede combinar con una amplia variedad de looks."
},
{
    id:2,
    name:"Camiseta de manga larga con estampado gráfico",
    price:15,
    image:"https://academlostorev1.netlify.app/images/sweater2.png",//es la principal
    // image:"https://res.cloudinary.com/duu1imwxs/image/upload/v1677270464/eCommerce/shirt2_av4jld.png",
    // image:"https://res.cloudinary.com/duu1imwxs/image/upload/v1677270464eCommerce/shirt2_av4jld.png",
    category:"shirt",
    quantity:3,
    description:"Perfecta para un look casual, esta camiseta de manga largapresenta un estampado gráfico llamativo en el pecho. Su ajuste regular ysuave tejido de algodón la hacen cómoda y fácil de usar."
},{
    id:1,
    name:"Camiseta de manga corta con cuello redondo",
    price:10,
    image:"https://res.cloudinary.com/duu1imwxs/image/upload/v1677270464/eCommerce/shirt1_prckre.png",
    category:"shirt",
    quantity:5,
    description:"Esta camiseta básica presenta un corte regular y un cuello redondo clásico. Es ideal para el uso diario y se puede combinar con una amplia variedad de looks."
},
{
    id:2,
    name:"Camiseta de manga larga con estampado gráfico",
    price:15,
    image:"https://academlostorev1.netlify.app/images/sweater2.png",//es la principal
    // image:"https://res.cloudinary.com/duu1imwxs/image/upload/v1677270464/eCommerce/shirt2_av4jld.png",
    // image:"https://res.cloudinary.com/duu1imwxs/image/upload/v1677270464eCommerce/shirt2_av4jld.png",
    category:"shirt",
    quantity:3,
    description:"Perfecta para un look casual, esta camiseta de manga largapresenta un estampado gráfico llamativo en el pecho. Su ajuste regular ysuave tejido de algodón la hacen cómoda y fácil de usar."
}
];
        


        
        
      function printProduct(product){  
        let prod=`
            <div class="product">  
                <div class="product__img">
                   <img src="${product.image}" alt=""></img>
                </div>
            
                <div producto__info>
                    <h2>Precio: $_${product.price}</h2>
                    <h2>${product.quantity}</h2>
                    <i class='bx bx-plus' id='${product.id}'></i>
                    <h2>Producto${product.name}</h2>
                </div>
                                         
            </div> `;
         return prod;
      } 
     
      
     function printVariosProducts(products){
            const dataHTML=document.querySelector(".products");
            
            let html="";
            for (const prod of products){
                html+=printProduct(prod);
              } 
             
              dataHTML.innerHTML=html;

     }
     
     

printVariosProducts(products);

// console.log(usuario[0]);
