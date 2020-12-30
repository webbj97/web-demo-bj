function sliceClick(type) {
    const sliderDis = 230; // 一个元素宽

    const oBox = document.querySelector('#slider-box');
    const boxWidth = oBox.offsetWidth; // 可视区域

    const sliderWrap = document.querySelector('#slider-wrap');
    const wrapWidth = sliderWrap.offsetWidth; // 滑动区域

    console.log('wrapWidth:', wrapWidth);
    console.log('boxWidth:', boxWidth);
    console.log('sliderWrap.style.transform:', sliderWrap.style.transform);

    const dif = wrapWidth - boxWidth;
    const oneDif = dif % sliderDis
    if(type === 'left'){
        sliderWrap.style.transform = `translate(-${dif}px, 0)`;
    }
    if(type === 'right'){
        sliderWrap.style.transform = `translate(0, 0)`;
    }
}