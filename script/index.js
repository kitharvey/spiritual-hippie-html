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
            $('#advert-button-name').text("Add to my order")
            $('.checkbox').html('<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="svg-inline--fa fa-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6z"></path></svg>')
        }

        else {
            $('#advert-button-name').text("Successfully Added :)")
            $('.checkbox').html('<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="check-square" class="svg-inline--fa fa-check-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"></path></svg>')
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


$(window).resize(function(){     

    if (window.matchMedia('(max-width: 1200px)').matches)  $('#order-wrapper').slideUp(0)   
    else $('#order-wrapper').slideDown(0)

});
