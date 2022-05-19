

const cart = function () {

    const cartBtn = document.getElementById("cart")
    const cartModal = document.querySelector(".cart")
    const cartCloseBtn = cartModal.querySelector(".cart-close")

    // Open Btn
    const openCart = function () {
        cartModal.style.display = "flex"
    }

    cartBtn.addEventListener("click", openCart)

    // cartBtn.onclick = openCart

    // Close Btn

    const closeCart = function () {
        cartModal.style.display = ""
    }

    cartCloseBtn.addEventListener("click", closeCart)

    // cartCloseBtn.onclick = closeCart

    // console.dir(cartModal);

}

cart();

export default cart