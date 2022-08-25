let allbtn = document.querySelectorAll('#swap-btn')
let img = document.querySelector('#immmg')
let colorName = document.querySelector('.swap-color-name')
let whiteBtn = document.querySelector('.white-btn')
let greyBtn = document.querySelector('.grey-btn')
let swapcolor = {
    white: './img/mbp14-silver-select-202110-1white.svg',
    spacegrey: './img/mbp14-spacegray-select-202110-1grey.svg'
}

allbtn.forEach((btn) => {
    btn.onclick = () => {
        let color = btn.getAttribute('data-color')
        let text = btn.innerHTML
        img.src = swapcolor[color]
        if (color === 'white') {
            whiteBtn.classList.remove('color-off')
            whiteBtn.classList.add('color-on')
            greyBtn.classList.remove('color-on')
            greyBtn.classList.add('color-off')
        } else if (color === 'spacegrey') {
            whiteBtn.classList.remove('color-on')
            whiteBtn.classList.add('color-off')
            greyBtn.classList.remove('color-off')
            greyBtn.classList.add('color-on')
        }
        colorName.innerHTML = text
    }
})





let priceSwapBoxs = document.querySelectorAll('.btn-box')
let pricePlus = document.querySelector('.bot-price')

let plusNum1 = Number(document.querySelector('#price-number-1').innerHTML)
let plusNum2 = Number(document.querySelector('#price-number-2').innerHTML)
let plusNum3 = Number(document.querySelector('#price-number-3').innerHTML)


let btn1 = document.querySelector('.bo1')
let btn2 = document.querySelector('.bo2')
let btn3 = document.querySelector('.bo3')
let btn4 = document.querySelector('.bo4')

priceSwapBoxs.forEach((box) => {
    box.onclick = () => {
        let ssd = box.getAttribute('data-ssd')
        if (ssd === 'SSD') {
            pricePlus.innerHTML = `$1999`
            btn2.classList.remove('boxc-2')
            btn3.classList.remove('boxc-3')
            btn4.classList.remove('boxc-4')
            btn1.classList.add('boxc')
        } else if (ssd === 'SSD-1') {
            pricePlus.innerHTML = `$${1999 + plusNum1}`
            btn1.classList.remove('boxc')
            btn4.classList.remove('boxc-4')
            btn3.classList.remove('boxc-3')
            btn2.classList.add('boxc-2')
        } else if (ssd === 'SSD-2') {
            pricePlus.innerHTML = `$${1999 + plusNum2}`
            btn4.classList.remove('boxc-4')
            btn2.classList.remove('boxc-2')
            btn1.classList.remove('boxc')
            btn3.classList.add('boxc-3')
        } else if (ssd === 'SSD-3') {
            pricePlus.innerHTML = `$${1999 + plusNum3}`
            btn2.classList.remove('boxc-2')
            btn3.classList.remove('boxc-3')
            btn1.classList.remove('boxc')
            btn4.classList.add('boxc-4')
        }
    }
})
