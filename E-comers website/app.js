function toggleMenu(){

var menu = document.getElementById("menu");

menu.classList.toggle("show");

}

var allProducts = [];

fetch("https://fakestoreapi.com/products")
.then(function(response){
    return response.json()
})
.then(function(data){
     allProducts = data; 
     showProducts(data); 
        // var productsParent = document.getElementById('productsParent')
        //  productsParent.innerHTML = "";
        // console.log(data);
        
        // for(var card of data ){
        //      var cards = ` <div class="product">
        //     <img src= "${card.image}" alt="">
        //     <h3> ${card.title} </h3>
        //     <p>Rs. ${card.price}</p>
        //     <button>Buy</button>

        // </div>`
        // productsParent.innerHTML += cards
        // }
})
.catch(function(error){
    console.log(error)
})


function showProducts(products){
    var productsParent = document.getElementById('productsParent');
    productsParent.innerHTML = ""; // 👉 pehle empty karo

    for(var card of products ){
        var cards = ` 
        <div class="product">
            <img src="${card.image}" alt="">
            <h3>${card.title}</h3>
            <p>Rs. ${card.price}</p>
            <button>Buy</button>
        </div>`;
        
        productsParent.innerHTML += cards;
    }
}


// 🔥 SEARCH LOGIC
document.getElementById("search").addEventListener("keyup", function(){
    var value = this.value.toLowerCase();

    var filtered = allProducts.filter(function(item){
        return item.title.toLowerCase().includes(value);
    });

    showProducts(filtered); // 👉 sirf filtered show karo
});

  