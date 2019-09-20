
// 轮播图部分
var index = 0;//初始话一个变量 指向下标


        $(".tab-btn .btn").click(function () {
            index = $(this).index();//获取点击元素的下标
            $(this).addClass("active").siblings().removeClass("active");
            $(".item").eq(index).fadeIn().siblings().fadeOut();
            //eq方法 找到第 下标 个图片，让他淡入,
            //同时为了避免每张图片只能点击一次，所以找到其他图片，让他们淡出

            // alert(index);
        });//通过点击事件 点击到小按钮
        //siblings().  当我们点击给他添加样式的时候，
        //找到除了点击以外的其他的兄弟元素，删除他的class名字

        $(".lr-tab .you-btn").click(function () {
            index++;//下标变大
            if (index > 4) {
                index = 0;
            }
            $(".item").eq(index).fadeIn().siblings().fadeOut();
            //找到图片，找到现在index指向的那张图片，让他淡入，并将其他的图片淡出
            $(".tab-btn .btn").eq(index).addClass("active").siblings().removeClass("active");
            //这里和之前类似，找到当前下标的按钮，给他添加显示样式，给其他兄弟移除样式。
        });//通过点击事件 点击到小按钮
        //siblings().  当我们点击给他添加样式的时候，
        //找到除了点击以外的其他的兄弟元素，删除他的class名字

        $(".lr-tab .zuo-btn").click(function () {
            index--;
            if (index < 0) {
                index = 4;
            }
            $(".item").eq(index).fadeIn().siblings().fadeOut();
            //找到图片，找到现在index指向的那张图片，让他淡入，并将其他的图片淡出
            $(".tab-btn .btn").eq(index).addClass("active").siblings().removeClass("active");
            //这里和之前类似，找到当前下标的按钮，给他添加显示样式，给其他兄弟移除样式。
        });//通过点击事件 点击到小按钮
        //siblings().  当我们点击给他添加样式的时候，
        //找到除了点击以外的其他的兄弟元素，删除他的class名字

        var timer = setInterval(function () {
            index++;//下标变大
            if (index > 4) {
                index = 0;
            }
            $(".item").eq(index).fadeIn().siblings().fadeOut();
            //找到图片，找到现在index指向的那张图片，让他淡入，并将其他的图片淡出
            $(".tab-btn .btn").eq(index).addClass("active").siblings().removeClass("active");
            //这里和之前类似，找到当前下标的按钮，给他添加显示样式，给其他兄弟移除样式。
            //通过点击事件 点击到小按钮
            //siblings().  当我们点击给他添加样式的时候，
            //找到除了点击以外的其他的兄弟元素，删除他的class名字
        }, 1500);//定时



       // 瀑布流懒加载
        // 1.
        var pbbox = document.querySelector('.pubu_box');//存储页面用的box对象
        var count = 0;//已经加载的图片数量
        var length = 15;//需要加载的图片数量
        var imgList = [];
        var line = 3;//每一行放四张图片
        // var maxWidth = window.innerWidth - 20;


        function addImg(i) {//循环添加图片
            var img = document.createElement('img');
            img.src = 'img/pbll_' + i + '.png';
            imgList.push(img);    //所有添加的图片，放到imglist里
            pbbox.appendChild(img);
            img.onload = function () {
                img.prop = img.height / img.width;//高宽比例
                count++;
                // console.log(img.prop);
                if (count == length) {
                    fomate();
                }
            }
        }
        for (var i = 1; i < length + 1; i++) {//循环i次
            addImg(i);
        }

        //2.调整图片的尺寸，首先要记录图片,调整图片
        function fomate() {
            var row = Math.floor(length / line);//行数 
            for (var i = 0; i < row; i++) {
                var w = 0;//每行的宽度
                for (var j = 0; j < line; j++) {
                    w += imgList[i * 3 + j].prop * 300;//单张图片为300高的时候，每一行所累积的宽度
                    console.log(imgList[i*3+j])
                }
                // w/1200 = 300 / h;s
                var h = 1200 * 300 / w;
                // console.log(h)        
                for (var j = 0; j < line; j++) {
                    imgList[i * 3 + j].style.height = h + 'px';
                    imgList[i * 3 + j].style.width = h * imgList[i * 3 + j].prop + 'px';
                }
            }
        }

        window.onscroll = function () {
            var scroll = document.documentElement.scrollTop;//滚动的距离
            var screen = window.innerHeight;//屏幕的高度
            var offsetTop = pbbox.offsetTop;//盒子的距离
            var height = pbbox.offsetHeight;
            console.log(scroll + screen - offsetTop - height);
            var zhi = scroll + screen - offsetTop - height;
            if (zhi >= -20) {
                add_img(15)
            }
        }

        function add_img(n) {
            length += n;
            for (var i = 1; i < n + 1; i++) {//循环i次
                addImg(i);
            }
        }
