// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  updateTotal();

  // Like buttons (heart icons)
  document.querySelectorAll(".like-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      btn.classList.toggle("liked"); // Add a .liked class in CSS to change color
    });
  });

  // Delete buttons
  document.querySelectorAll(".delete-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      btn.closest(".cart-item").remove(); // Assumes each item has a class 'cart-item'
      updateTotal();
    });
  });

  // Quantity + and - buttons
  document.querySelectorAll(".qty-plus").forEach(function (btn) {
    btn.addEventListener("click", function () {
      let qtyElem = btn.previousElementSibling;
      qtyElem.innerText = parseInt(qtyElem.innerText) + 1;
      updateTotal();
    });
  });

  document.querySelectorAll(".qty-minus").forEach(function (btn) {
    btn.addEventListener("click", function () {
      let qtyElem = btn.nextElementSibling;
      let currentQty = parseInt(qtyElem.innerText);
      if (currentQty > 1) {
        qtyElem.innerText = currentQty - 1;
        updateTotal();
      }
    });
  });

  // Update total price
  function updateTotal() {
    let total = 0;
    document.querySelectorAll(".cart-item").forEach(function (item) {
      const price = parseFloat(item.querySelector(".item-price").innerText);
      const quantity = parseInt(item.querySelector(".item-qty").innerText);
      total += price * quantity;
    });

    document.getElementById("total-price").innerText = total.toFixed(2) + " $";
  }
});
