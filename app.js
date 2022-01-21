const add_product = document.getElementById('add_product');
const sess = document.getElementById('sess');
const plist = document.getElementById('plist');
const add_box = document.querySelector('.product-add-box');

add_product.addEventListener('click', function(){

    add_box.style.display = 'block';
    

});

sess.addEventListener('click', function(){
    add_box.style.display = 'none';
});


let products = dataGet('products');

products.map(data => {
    console.log(data);
});