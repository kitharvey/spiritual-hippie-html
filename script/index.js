const shippingDOM = document.getElementById('shipping-dom')
const paymentDOM = document.getElementById('payment-dom')
const shippingBTN = document.getElementById('shipping-button')
const paymentBTN = document.getElementById('payment-button')
const continuePaymentBTN = document.getElementById('continue-to-payment')
const completeOrderBTN = document.getElementById('complete-order')
const modalDOM = document.getElementById('modal')
const orderSummaryBTN = document.getElementById('order-summary-button')
const orderWrapperDOM = document.getElementById('order-wrapper')
const productWrapperDOM = document.getElementById('product-wrapper')
const orderSummaryBTNTITLE = document.getElementById('order-summary-button-title')
const orderSummaryBTNARROW = document.getElementById('order-summary-button-arrow')
const differentAddressBTN = document.getElementById('different-address')
const sameAddressBTN = document.getElementById('same-address')
const securedShippingAddressBTN = document.getElementById('secured-shipping')
const differentAddressFORM = document.getElementById('different-address-form')
const paymentCCBTN = document.getElementById('creditcard-button')
const paymentPPBTN = document.getElementById('paypal-button')
const paymentCCFORM = document.getElementById('payment-cc-input')
const paymentPPFORM = document.getElementById('payment-pp-info')
const closeModalBTN = document.querySelectorAll('#close-modal')

const productData = [
    {
      img: "/assets/shoe3-1.png",
      name: "Yin Yang Mandala",
      description: "Women's Aqua Barefoot Shoes",
      details: ["Black Sole", "US 9-10", "EU40-41"],
      price: 35,
      qnty: 1,
      isFree: true,
    },
    {
      img: "/assets/shoe2-1.png",
      name: "Yin Yang Mandala",
      description: "Women's Aqua Barefoot Shoes",
      details: ["Black Sole", "US 9-10", "EU40-41"],
      price: 35,
      qnty: 1,
      isFree: false,
    },
    {
      img: "/assets/shoe1-1.png",
      name: "Watercolor Flowers",
      description: "Women's Aqua Barefoot Shoes",
      details: ["Black Sole", "US 9-10", "EU40-41"],
      price: 35,
      qnty: 2,
      isFree: false,
    },
    {
      img: "/assets/GiftYWV1.png",
      name: "Copy of Free Mystery Gift",
      details: ["Free Gift", "Vibrant Vibes", "One Size"],
      price: 0,
      qnty: 1,
      isFree: false,
    },
    {
      img: "/assets/shippingSafeGuardLogo.png",
      name: "Safeguard - Shipping Guarantee",
      description: "Safeguard shipping guarantee",
      details: [".98"],
      price: 0.98,
      qnty: 1,
      isFree: false,
    },
  ]


sameAddressBTN.checked = true
securedShippingAddressBTN.checked = true
paymentCCBTN.checked = true

const onLoad = () => {
    let isOrderSummaryOpen = true
    let isSecured = true
    let products = ''



    productData.forEach( 
        ({img,
        name,
        description,
        details,
        price,
        qnty,
        isFree}) => {
        products += `<div class="product" id=${name}>
                        <div class="img-wrapper">
                            <img src=${img} alt=${name} />
                            <span class="qnty">${qnty}</span>
                        </div>
                    
                        <div class="info">
                            <p class="name">${name}</p>
                            ${description ? `<p class="description">${description}</p>` : ""}
                            <div class="details">
                                ${details.map( detail => `<p>${detail}</p>` ).join("")}
                            </div>
                        </div>
                        <div class="price-wrapper">
                        <p class=${isFree ? "no-price" : "price"}>$${price.toFixed(2)}</p>
                        ${isFree ? "<p class='free'>FREE</p>" : ""}
                        </div>
                    </div>`
    })

    productWrapperDOM.innerHTML = products

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



    function selectBillingAddress(){
        if(differentAddressBTN.checked) {
            differentAddressFORM.style.display = 'block'
        }
        else{
            differentAddressFORM.style.display = 'none'
        }
    }

    function selectPayment(){
        if(paymentCCBTN.checked){
            paymentCCFORM.style.display = 'block'
            paymentPPFORM.style.display = 'none'
        }
        if(paymentPPBTN.checked){
            paymentCCFORM.style.display = 'none'
            paymentPPFORM.style.display = 'flex'
        }
    }

    function securedShippingAddress(){
        isSecured = !isSecured
        securedShippingAddressBTN.checked = isSecured
        if(!isSecured){
            const safeguard = document.getElementById('Safeguard')
            productWrapperDOM.removeChild(safeguard)
        }
        if(isSecured){
            const safeguard = document.createElement('div')
            safeguard.className = "product" 
            safeguard.id = "Safeguard"
            safeguard.innerHTML = `<div class="img-wrapper">
                                <img src="/assets/shippingSafeGuardLogo.png" alt="Safeguard - Shipping Guarantee" />
                                <span class="qnty">1</span>
                            </div>
                        
                            <div class="info">
                                <p class="name">Safeguard - Shipping Guarantee</p>
                                <p class="description">Safeguard shipping guarantee</p>
                                <div class="details">
                                   <p>.98</p>
                                </div>
                            </div>
                            <div class="price-wrapper">
                                <p class="price">$0.98</p>
                            </div>
                        </div>`
            productWrapperDOM.appendChild(safeguard)
        }
    }

    securedShippingAddressBTN.onclick = securedShippingAddress

    differentAddressBTN.onclick = selectBillingAddress
    sameAddressBTN.onclick = selectBillingAddress
    paymentCCBTN.onclick = selectPayment
    paymentPPBTN.onclick = selectPayment
    

    paymentBTN.addEventListener('click', onclickPaymentBTN)
    shippingBTN.addEventListener('click', onclickShippingBTN)
    continuePaymentBTN.addEventListener('click', onclickPaymentBTN)
    orderSummaryBTN.addEventListener('click', onClickOrderSummary)
    completeOrderBTN.addEventListener('click', () => modalDOM.style.visibility = 'visible')
    closeModalBTN[0].addEventListener('click', () => modalDOM.style.visibility = 'hidden')
    closeModalBTN[1].addEventListener('click', () => modalDOM.style.visibility = 'hidden')
}


window.onload = onLoad
