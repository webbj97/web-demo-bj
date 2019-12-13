
var preBtn = document.getElementById('pre')
var nextBtn = document.getElementById('next')

function pre(){
    count--
    if(count === 0){
        count = 5
    }
    slider(count)
}
function next(){
    count++
    if(count === 6){
        count = 1
    }
    slider(count)
}

var count = 1//全局下标

function slider(i) {
    var sliderBox = document.getElementById('slider-box')
    var res = sliderBox.className.split(' ')
    sliderBox.className = res[0]+' '+'slider-box-'+i
}

var timer = setInterval(() => {
    count++
    if(count === 6){
        count = 1
    }
    slider(count)
}, 3000);



