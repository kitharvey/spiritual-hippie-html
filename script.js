const shippingDOM = document.getElementById('shipping-dom')
const paymentDOM = document.getElementById('payment-dom')
const shippingBTN = document.getElementById('shipping-button')
const paymentBTN = document.getElementById('payment-button')
const continuePaymentBTN = document.getElementById('continue-to-payment')
const completeOrderBTN = document.getElementById('complete-order')
const modalDOM = document.getElementById('modal')
const closeModalBTN = document.querySelectorAll('#close-modal')

const onLoad = () => {
    shippingDOM.style.display = 'block'
    paymentDOM.style.display = 'none'
    modalDOM.style.display = 'none'
    shippingBTN.classList.replace('idle', 'active')
    paymentBTN.classList.replace('active', 'idle')

    function onclickShippingBTN() {
        shippingDOM.style.display = 'block'
        paymentDOM.style.display = 'none'
        shippingBTN.classList.replace('idle', 'active')
        paymentBTN.classList.replace('active', 'idle')
    }
    function onclickPaymentBTN() {
        shippingDOM.style.display = 'none'
        paymentDOM.style.display = 'block'
        shippingBTN.classList.replace('active', 'idle')
        paymentBTN.classList.replace('idle', 'active')
    }

    paymentBTN.addEventListener('click', onclickPaymentBTN)
    shippingBTN.addEventListener('click', onclickShippingBTN)
    continuePaymentBTN.addEventListener('click', onclickPaymentBTN)
    completeOrderBTN.addEventListener('click', () => modalDOM.style.display = 'flex')
    closeModalBTN[0].addEventListener('click', () => modalDOM.style.display = 'none')
    closeModalBTN[1].addEventListener('click', () => modalDOM.style.display = 'none')
}


window.onload = onLoad
