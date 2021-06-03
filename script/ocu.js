const incrementBTN = document.getElementById('increment')
const decrementBTN = document.getElementById('decrement')
const numberOfItemsDOM = document.getElementById('number-of-items')
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



const onLoad = () => {

    function increment(){
        const num = +numberOfItemsDOM.value
        numberOfItemsDOM.value = num + 1        
    }

    function decrement(){
        const num = +numberOfItemsDOM.value
        if(num > 1)
        numberOfItemsDOM.value = num - 1
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
    incrementBTN.onclick = increment
    decrementBTN.onclick = decrement

}

window.onload = onLoad
