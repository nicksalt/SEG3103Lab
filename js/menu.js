var total = 0;
$(function(){ 
    $("#nav-placeholder").load("topnav.html");
    $(".menu-item").click(function(){ addToCart($(this)); });
    $(".cart-items").on('click', '.cart-item', function(e){removeFromCart($(this), e)})
    $("#input").click(function(){alert("Not implemented yet.")})
    
});

function addToCart(menuItem) {
    console.log(menuItem.find('.meal').text() + ", " + menuItem.find('.price').text());
    total = total + Number(menuItem.find('.price').text().substr(1));
    var item = `<div class="cart-item row align-items-center">
                <div class="cart-food col-md-6"><h5>${menuItem.find('.meal').text()}</h5></div>
                <div class="cart-price col-md-3"><h5>${menuItem.find('.price').text()}</h5></div>
                <div class="cart-icon col-md-3">
                    <button type="button remove-cart" class="btn btn-default remove-item">
                        <i class="fa fa-trash fa-lg" aria-hidden="true"></i>
                    </button>
                </div>
            </div>`
    $(".cart-items").append(item);
    $("#total-price").text("$" + total.toFixed(2));
}

function removeFromCart(removeButton,e) {
    var classList = e.target.classList;
    if (classList.contains("fa-trash") || classList.contains("remove-item")){
        total = total - removeButton.closest(".cart-item").find('.cart-price').find('h5').text().substr(1);
        removeButton.remove();
        $("#total-price").text("$" + total.toFixed(2));
    } 
}