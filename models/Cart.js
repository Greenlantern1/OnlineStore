const fs=require('fs')
const path=require('path')
const p=path.join(path.dirname(process.mainModule.filename),'data','carts.json')

module.exports=class Cart{
    static addProduct(id,Price){
       fs.readFile(p,(err,fileContent)=>{
        let cart={products:[],TotalPrice:0}
           if(!err)
           {
              cart=JSON.parse(fileContent) //cart stores the prev carts too now
           }
           //analyse the cart for existing products
           const existProductIndex=cart.products.findIndex((p)=>id==p.id)
           
           const existProduct=cart.products[existProductIndex];
           let updatedProducts;
           if(existProduct)
           {
                updatedProducts={...existProduct};
                updatedProducts.qty=updatedProducts.qty + 1;
                console.log(cart.products)
                cart.products=[...cart.products]
                console.log(cart.products)
                cart.products[existProductIndex]=updatedProducts;
           }
           else{
            updatedProducts={id:id,qty:1};
            cart.products=[...cart.products,updatedProducts]
            }
            cart.TotalPrice=cart.TotalPrice + +Price;
         fs.writeFile(p,(JSON.stringify(cart)),(err)=>{console.log(err)})
    })
    }
}