const orderList = document.getElementById('order-list');

document.querySelector('button[type="submit"]').addEventListener('click', (e) => {
  e.preventDefault(); 

  const menuItem = document.getElementById('menu-item').value;
  const quantity = document.getElementById('quantity').value;

  const orderItem = document.createElement('li');
  orderItem.textContent = `${menuItem} x ${quantity}`;

  orderList.appendChild(orderItem);
});