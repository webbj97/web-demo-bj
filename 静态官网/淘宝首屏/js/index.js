var oNavContentData = [
    { title: '标题1', list1: [1, 2, 3, 4, 5], list2: [1, 2, 3, 4, 5], list3: [1, 2, 3, 4, 5] },
    { title: '标题2', list1: [1, 2, 3, 4, 5], list2: [1, 2, 3, 4, 5], list3: [1, 2, 3, 4, 5] },
    { title: '标题3', list1: [1, 2, 3, 4, 5], list2: [1, 2, 3, 4, 5], list3: [1, 2, 3, 4, 5] },
    { title: '标题4', list1: [1, 2, 3, 4, 5], list2: [1, 2, 3, 4, 5], list3: [1, 2, 3, 4, 5] },
    { title: '标题5', list1: [1, 2, 3, 4, 5], list2: [1, 2, 3, 4, 5], list3: [1, 2, 3, 4, 5] },
    { title: '标题6', list1: [1, 2, 3, 4, 5], list2: [1, 2, 3, 4, 5], list3: [1, 2, 3, 4, 5] },
    { title: '标题7', list1: [1, 2, 3, 4, 5], list2: [1, 2, 3, 4, 5], list3: [1, 2, 3, 4, 5] },
    { title: '标题8', list1: [1, 2, 3, 4, 5], list2: [1, 2, 3, 4, 5], list3: [1, 2, 3, 4, 5] },
    { title: '标题9', list1: [1, 2, 3, 4, 5], list2: [1, 2, 3, 4, 5], list3: [1, 2, 3, 4, 5] },
    { title: '标题10', list1: [1, 2, 3, 4, 5], list2: [1, 2, 3, 4, 5], list3: [1, 2, 3, 4, 5] },
    { title: '标题11', list1: [1, 2, 3, 4, 5], list2: [1, 2, 3, 4, 5], list3: [1, 2, 3, 4, 5] },
    { title: '标题12', list1: [1, 2, 3, 4, 5], list2: [1, 2, 3, 4, 5], list3: [1, 2, 3, 4, 5] },
    { title: '标题13', list1: [1, 2, 3, 4, 5], list2: [1, 2, 3, 4, 5], list3: [1, 2, 3, 4, 5] },
    { title: '标题14', list1: [1, 2, 3, 4, 5], list2: [1, 2, 3, 4, 5], list3: [1, 2, 3, 4, 5] },
]
var oNavItemBox = document.getElementById('left-items');
var oNavItemLi = document.querySelectorAll('.left-items-li'); //列表内容
var oNavContent = document.getElementById('left-items-content'); //内容区域

oNavItemLi.forEach((item, index) => {
    item.onmouseover = function(e) {
        oNavContent.style.display = 'block'
        oNavContent.innerText = oNavContentData[index].title
    }
    item.onmouseout = function(e) {
        oNavContent.style.display = 'none'
        oNavContent.innerText = ''
    }
});