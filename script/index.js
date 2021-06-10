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
const advertButtonName = document.getElementById('advert-button-name')
const addToMyOrderCheckBox = document.getElementById('addtomyorder')
const addToMyOrderBTN = document.getElementById('addtomyorder-button')
const closeModalBTN = document.querySelectorAll('#close-modal')
const paypalLabel = document.querySelector('.paypal')

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

    function arrayToHTML({img,
        name,
        description,
        details,
        price,
        qnty,
        isFree}, isPrice){
        return `<div class="product" id=${name}>
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
        ${isPrice ? `<div class="price-wrapper">
        <p class=${isFree ? "no-price" : "price"}>$${price.toFixed(2)}</p>
        ${isFree ? "<p class='free'>FREE</p>" : ""}
        </div>` : ""}
        </div>`
    }


    const productWrapperInnerHTML = productData.map(item => arrayToHTML(item, true))

    productWrapperDOM.innerHTML = productWrapperInnerHTML.join("")

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
            orderWrapperDOM.style.maxHeight = '9999px'
            orderSummaryBTNTITLE.textContent = 'Hide order summary'
            orderSummaryBTNARROW.style.transform = 'rotate(180deg)'
        }
        else{
            orderWrapperDOM.style.maxHeight = '0'
            orderSummaryBTNTITLE.textContent = 'Show order summary'
            orderSummaryBTNARROW.style.transform = 'rotate(0deg)'
        }
        
    }



    function selectBillingAddress(){
        if(differentAddressBTN.checked) {
            differentAddressFORM.classList.replace('close', 'open')
        }
        else{
            differentAddressFORM.classList.replace('open', 'close')
        }
    }

    function selectPayment(){
        if(paymentCCBTN.checked){
            paymentCCFORM.classList.replace('close', 'open')
            paymentPPFORM.classList.replace('open', 'close')
            paypalLabel.style.borderTop = '0.5px solid #ced4da'
        }
        if(paymentPPBTN.checked){
            paymentCCFORM.classList.replace('open', 'close')
            paymentPPFORM.classList.replace('close', 'open')
            paypalLabel.style.borderTop = 'none'
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

    function toggleAdvert(){
        if(addToMyOrderCheckBox.checked){
            advertButtonName.textContent = "Add to my order"
        }

        else {
            window.location.href = "/index.html";
        }
    }

    securedShippingAddressBTN.onclick = securedShippingAddress

    differentAddressBTN.onclick = selectBillingAddress
    sameAddressBTN.onclick = selectBillingAddress
    paymentCCBTN.onclick = selectPayment
    paymentPPBTN.onclick = selectPayment
    addToMyOrderBTN.onclick = toggleAdvert

    paymentBTN.onclick = onclickPaymentBTN
    shippingBTN.onclick = onclickShippingBTN
    continuePaymentBTN.onclick = onclickPaymentBTN
    orderSummaryBTN.onclick = onClickOrderSummary
    completeOrderBTN.onclick = () => modalDOM.style.visibility = 'visible'
    closeModalBTN[0].onclick = () => modalDOM.style.visibility = 'hidden'
    closeModalBTN[1].onclick = () => modalDOM.style.visibility = 'hidden'
}


window.onload = onLoad
