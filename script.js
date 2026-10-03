let cart=JSON.parse(localStorage.getItem('pempekCart')||'[]');
function updateCart(){const el=document.getElementById('cartCount');if(el)el.textContent=cart.reduce((a,b)=>a+b.qty,0)}
function addToCart(name,price){cart.push({name,price,qty:1});localStorage.setItem('pempekCart',JSON.stringify(cart));updateCart();toast(name+' ditambahkan ke keranjang')}
function toast(message){const el=document.getElementById('toast');if(!el)return;el.textContent=message;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),2200)}
function showCart(){if(!cart.length){toast('Keranjang masih kosong');return}const list=cart.map(x=>x.name+' × '+x.qty).join(', ');toast('Keranjang: '+list)}
document.addEventListener('DOMContentLoaded',updateCart);