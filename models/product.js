const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(id,title, imageUrl, description, price) {
    this.id=id
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    if(this.id) //edited Product
    {
      getProductsFromFile(products => {
        const existProductIndex=product.findByIndex((p)=>p.id===id)
        const updatedproduct=[...product]
        updatedproduct[existProductIndex]=this
        fs.writeFile(p, JSON.stringify(products), err => {
          console.log(err);
        });
      });

    }
    else{   //newProduct
    this.id=Math.random()*1000;
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    });
    }
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static findById(id,cb){
    getProductsFromFile((products)=>{
      
      return cb(products.find((prod)=>id==prod.id)) 
    })
  }

};
