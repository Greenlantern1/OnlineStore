const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(null,title, imageUrl, description, price);
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
};

exports.geteditproduct=(req,res,next)=>{
  const id=req.params.productID;
  Product.findById(id,product=>{
    res.render('admin/edit-product',
    {pageTitle: 'Add Product',
    path: '/admin/edit-product',
    product:product
    })
  })
}

exports.postEditProduct=(req,res,next)=>{
    const id=req.body.id;
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const updatedproduct=new Product(id,title,imageUrl,price,description)
    updatedproduct.save();
  }


