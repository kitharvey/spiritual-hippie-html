const frontImageDOM = document.getElementById('front-image')
const itemDetail = document.getElementById('item-detail')
const thumbnailBTN = document.querySelectorAll('#thumbnail')
const menuWrapper = document.querySelector('.menu-wrapper')


const itemsArray = [
    {
        src: "/assets/ocu/FacemasksPeacePattern2x.png",
        detail: "Peace Pattern"
    },
    {
        src: "/assets/ocu/FacemasksWaterColorFlowers2x.png",
        detail: "Water Color Flowers"
    },
    {
        src: "/assets/ocu/FacemasksHappyHippieInColors2x.png",
        detail: "Happy Hippie In Colors"
    },
]

thumbnailBTN[0].checked = true

const onLoad = () => {

    function increment(){
        $('#number-of-items').val(+$('#number-of-items').val() + 1)    
    }

    function decrement(){
        if(+$('#number-of-items').val() > 1) $('#number-of-items').val(+$('#number-of-items').val() - 1)  
    }

    function selectThumbnail(){
        if(this.checked) {
            const idx = +this.value
            frontImageDOM.src = itemsArray[idx].src
            itemDetail.innerText = itemsArray[idx].detail
        }
    }

    thumbnailBTN[0].onclick = selectThumbnail
    thumbnailBTN[1].onclick = selectThumbnail
    thumbnailBTN[2].onclick = selectThumbnail
    $('#increment').click(increment)
    $('#decrement').click(decrement)
}

window.onload = onLoad
