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



$('#same-address').prop( "checked", true )
$('#secured-shipping').prop( "checked", true )
$('#creditcard-button').prop( "checked", true )

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

    $('#product-wrapper').html(productWrapperInnerHTML.join(""))

    function onclickShippingBTN() {
        $('#shipping-dom').show()
        $('#payment-dom').hide()
        $('#shipping-button').removeClass("idle").addClass("active")
        $('#payment-button').removeClass("active").addClass("idle")
    }
    function onclickPaymentBTN() {
        $('#shipping-dom').hide()
        $('#payment-dom').show()
        $('#shipping-button').removeClass("active").addClass("idle")
        $('#payment-button').removeClass("idle").addClass("active")
    }

    function onClickOrderSummary(){
        isOrderSummaryOpen = !isOrderSummaryOpen
        $('#order-wrapper').slideToggle(500)
        if(isOrderSummaryOpen){
            $('#order-summary-button-title').text('Hide order summary')
            $('#order-summary-button-arrow').css('transform', 'rotate(180deg)')
        }
        else{
            $('#order-summary-button-title').text('Show order summary')
            $('#order-summary-button-arrow').css('transform', 'rotate(0deg)')
        }
        
    }

    $('#different-address-form').slideUp(0)
    $('#payment-pp-info').slideUp(0)

    function selectBillingAddress(){
        if($('#different-address').prop("checked")) {
            $('#different-address-form').slideDown(250)
        }
        else{
            $('#different-address-form').slideUp(250)
        }
    }

    function selectPayment(){
        if($('#creditcard-button').prop("checked")){
            $('#payment-cc-input').slideDown(250)
            $('#payment-pp-info').slideUp(250)
            $('.paypal').css("border-top", "0.5px solid #ced4da")
        }
        if($('#paypal-button').prop("checked")){
            $('#payment-cc-input').slideUp(250)
            $('#payment-pp-info').slideDown(250)
            $('.paypal').css("border-top", "none")
        }
    }

    function securedShippingAddress(){
        isSecured = !isSecured
        $('#secured-shipping').prop( "checked", isSecured )
        if(!isSecured){
            $('#Safeguard').remove()
        }
        if(isSecured){
            const safeguard = $("<div>", {id: "Safeguard", "class": "product"});
            safeguard.html(`<div class="img-wrapper">
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
                            </div>`)
            $('#product-wrapper').append(safeguard)
        }
    }

    function toggleAdvert(){
        if($('#addtomyorder').prop("checked")){
            $('#advert-button-name').textContent = "Add to my order"
        }

        else {
            window.location.href = "/index.html";
        }
    }

    $('#secured-shipping').click(securedShippingAddress)
    $('#different-address').click(selectBillingAddress)
    $('#same-address').click(selectBillingAddress)
    $('#creditcard-button').click(selectPayment)
    $('#paypal-button').click(selectPayment)
    $('#addtomyorder-button').click(toggleAdvert)
    $('#payment-button').click(onclickPaymentBTN) 
    $('#shipping-button').click(onclickShippingBTN) 
    $('#continue-to-payment').click(onclickPaymentBTN)
    $('#order-summary-button').click(onClickOrderSummary)
    $('#complete-order').click(() => window.location.href = "/thankyou.html")
}


window.onload = onLoad
