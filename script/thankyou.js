const productWrapperDOM = document.getElementById('product-wrapper')
const shipmentProductWrapperDOM = document.getElementById('shipment-product-wrapper')

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

  const shipmentProductData = [
    {
      img: "/assets/shoe3-1.png",
      name: "Yin Yang Mandala",
      description: "Women's Aqua Barefoot Shoes",
      details: ["Black Sole", "US 9-10", "EU40-41"],
      price: 35,
      qnty: 2,
      isFree: true,
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
  ]


const onLoad = () => {
    let isOrderSummaryOpen = true



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
    const shipmentProductWrapperInnerHTML = shipmentProductData.map(item => arrayToHTML(item, false))
    $('#shipment-product-wrapper').html(shipmentProductWrapperInnerHTML.join(""))

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
    

    $('#order-summary-button').click(onClickOrderSummary)
}

function initMap() {
    const myLatLng = { lat: 45.508888, lng: -73.561668 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 13,
      center: myLatLng,
    });
    new google.maps.Marker({
      position: myLatLng,
      map,
    });
}

window.initMap = initMap

window.onload = onLoad
