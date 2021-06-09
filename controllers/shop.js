const Product = require('../models/product');
const Cart=require('../models/Cart')
exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};

exports.getDetails=(req,res,next)=>{
  const id=req.params.productID;
  Product.findById(id,(product)=>{
    console.log(product)
    res.render('shop/product-detail',{
      prods:product,
      path:'/product-details',
      pageTitle: 'product-details'
    })
  })
}

exports.addToCart=(req,res,next)=>{
  const id=req.body.productId;
  Product.findById(id,(product)=>{
  Cart.addProduct(id,product.price);
  })
  res.redirect('/')
}