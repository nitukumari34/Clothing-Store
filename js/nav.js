const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="nav">
    <img src="img/dark-logo .png" class="brand-logo" alt="">
    <div class="nav-items">
      <div class="search">
        <input type="text" class="search-box" placeholder="search brand, product">
        <button class="search-btn">search</button>
      </div>
      <a href="signup.html"><img src="img/user .png" alt=""></a>

      <a href="cart.html"><img src="img/cart (1).png" alt=""></a>
    </div>
  </div>
</nav>

<ul class="links-container">
         <li class="link-item"><a href="#" class="link">home</a></li>
         <li class="link-item"><a href="#" class="link">women</a></li>
          <li class="link-item"><a href="#" class="link">men</a></li>
          <li class="link-item"><a href="#" class="link">kids</a></li>
          <li class="link-item"><a href="#" class="link">accessories</a></li> 
</ul>
    `;
}

createNav();