let cart = [];

function addToCart(product, price) {
  let item = cart.find(i => i.product === product);
  if (item) {
    item.quantity++;
  } else {
    cart.push({ product, price, quantity: 1 });
  }
  displayCart();
}

function displayCart() {
  let cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";

  let total = 0;
  cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = `${item.product} - $${item.price} x ${item.quantity}`;
    cartItems.appendChild(li);
    total += item.price * item.quantity;
  });

  document.getElementById("total").textContent = `Total: $${total}`;
}

function checkout() {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }
  alert("Proceeding to checkout...\n" + JSON.stringify(cart, null, 2));
}
