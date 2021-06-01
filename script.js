const shippingDOM = document.getElementById('shipping-dom')
const paymentDOM = document.getElementById('payment-dom')
const shippingBTN = document.getElementById('shipping-button')
const paymentBTN = document.getElementById('payment-button')
const continuePaymentBTN = document.getElementById('continue-to-payment')
const completeOrderBTN = document.getElementById('complete-order')
const modalDOM = document.getElementById('modal')
const orderSummaryBTN = document.getElementById('order-summary-button')
const orderWrapperDOM = document.getElementById('order-wrapper')
const orderSummaryBTNTITLE = document.getElementById('order-summary-button-title')
const orderSummaryBTNARROW = document.getElementById('order-summary-button-arrow')
const closeModalBTN = document.querySelectorAll('#close-modal')


const onLoad = () => {
    let isOrderSummaryOpen = true
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

    function onClickOrderSummary(){
        isOrderSummaryOpen = !isOrderSummaryOpen

        if(isOrderSummaryOpen){
            orderWrapperDOM.style.height = 'max-content'
            orderSummaryBTNTITLE.textContent = 'Hide order summary'
            orderSummaryBTNARROW.style.transform = 'rotate(180deg)'
        }
        else{
            orderWrapperDOM.style.height = '0px'
            orderSummaryBTNTITLE.textContent = 'Show order summary'
            orderSummaryBTNARROW.style.transform = 'rotate(0deg)'
        }
        
    }

    paymentBTN.addEventListener('click', onclickPaymentBTN)
    shippingBTN.addEventListener('click', onclickShippingBTN)
    continuePaymentBTN.addEventListener('click', onclickPaymentBTN)
    orderSummaryBTN.addEventListener('click', onClickOrderSummary)
    completeOrderBTN.addEventListener('click', () => modalDOM.style.display = 'flex')
    closeModalBTN[0].addEventListener('click', () => modalDOM.style.display = 'none')
    closeModalBTN[1].addEventListener('click', () => modalDOM.style.display = 'none')
}


window.onload = onLoad
