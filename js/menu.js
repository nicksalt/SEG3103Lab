$(function() {
  $(".menu-items > .list-group > .list-group-item").click(function(item) {
    let name = item.target.dataset.name;
    let price = item.target.dataset.price;
    let checkoutList = $("#checkout-items")[0];
    let quantity = 1;
    
    // Check if entry already exists, otherwise add new entry
    let existingEntry = $(checkoutList).children(`[data-name="${name}"]`)[0];
    if (existingEntry !== undefined) {
      quantity = parseInt(existingEntry.dataset.quantity) + 1;
      $(existingEntry).replaceWith($(`<li class='list-group-item' data-name="${name}" data-quantity="${quantity}">${name} - ${quantity} x \$${price}</li>`));
    }
    else {
      let newListItem = $(`<li class='list-group-item' data-name="${name}" data-quantity="1">${name} - 1 x \$${price}</li>`)[0];
      checkoutList.append(newListItem);
    }
    // TODO allow subtraction of order item
  });
});
