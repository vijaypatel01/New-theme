const addToCartForms = document.querySelectorAll('form[action="/cart/add"]');

addToCartForms.forEach((form) => {
  form.addEventListener("submit", async (event) => {
    // Prevent normal submission
    event.preventDefault();

    // Submit form with ajax
    await fetch("/cart/add", {
      method: "post",
      body: new FormData(form),
    });

    // Get new cart object
    const res = await fetch("/cart.json");
    const cart = await res.json();

    // Update cart count
    document.querySelectorAll(".cart-count").forEach((el) => {
      el.textContent = cart.item_count;
    });
  });
});
$(document).ready(function () {
    $('.cart-item__quantity-input').on('change', function () {
      const line = $(this).data('line');
      const quantity = $(this).val();
      if (quantity < 1) {
        alert('Quantity must be at least 1.');
        return;
      }
      $.ajax({
        url: '/cart/change.js',
        type: 'POST',
        data: {
          line: line,
          quantity: quantity
        },
        dataType: 'json',
        success: function (cart) {
          const newSubtotal = (cart.items_subtotal_price / 100).toFixed(2);
          $('.cart-total').text(newSubtotal);
          console.log('Cart updated:', cart);
        },
        error: function (error) {
          console.error('Error updating cart:', error);
        }
      });
    });
  });