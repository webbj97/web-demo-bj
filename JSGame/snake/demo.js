//点击 开始游戏 图标消失 游戏开始
//随机出现食物  初始蛇为三解 1蛇头+2身
//绑定上下左右事件 
//判断吃掉食物 食物消失 蛇身+1
//撞墙或反方向移动 弹出游戏失败

var startP = document.getElementById('startP');
var startPage = document.getElementById('startPage');
var close = document.getElementById('close');
var lose = document.getElementById('lose');
var content = document.getElementById('content');
var speed = 300;
var snakeMove;
var loserScore = document.getElementById('loserScore');
var scoreBox = document.getElementById('score');
var startBtn = document.getElementById('startBtn');
var startGameBool = true;
var startPaushBool = true;

init();
function init() {
    //地图
    this.mapW = parseInt(getComputedStyle(content).width);
    this.mapH = parseInt(getComputedStyle(content).height);
    this.mapDiv = content;
    //食物
    this.foodW = 20;
    this.foodH = 20;
    this.foodX = 0;
    this.foodY = 0;
    //蛇
    this.snakeW = 20;
    this.snakeH = 20;
    this.snakeBody = [[3, 1, 'head'], [2, 1, 'body'], [1, 1, 'body']];
    //游戏属性
    this.direct = 'right';
    this.left = false;
    this.right = false;
    this.up = true;
    this.down = true;
    //分数
    this.score = 0;
    startGame();
}

function startGame() {
    //暂停按钮
    startPage.style.display = 'none';
    startP.style.display = 'block';
    //食物
    food();
    //蛇 
    snake();
    //移动

    //获取方向键盘
    bindEvent();
}

function food() {
    var food = document.createElement('div');
    food.style.width = this.foodW + 'px';
    food.style.height = this.foodH + 'px';
    food.style.position = 'absolute';
    this.foodX = Math.floor(Math.random() * (this.mapW / 20));
    this.foodY = Math.floor(Math.random() * (this.mapH / 20));
    food.style.left = this.foodX * 20 + 'px';
    food.style.top = this.foodY * 20 + 'px';
    this.mapDiv.appendChild(food).setAttribute('class', 'food');
}

function snake() {
    for (var i = 0; i < this.snakeBody.length; i++) {
        var snake = document.createElement('div');
        snake.style.width = this.snakeW + 'px';
        snake.style.height = this.snakeH + 'px';
        snake.style.position = 'absolute';
        snake.style.left = this.snakeBody[i][0] * 20 + 'px';
        snake.style.top = this.snakeBody[i][1] * 20 + 'px';
        snake.classList.add(this.snakeBody[i][2]);
        this.mapDiv.appendChild(snake).classList.add('snake');
        switch (this.direct) {
            case 'right':
                break;
            case 'up':
                snake.style.transform = 'rotate(270deg)';
                break;
            case 'left':
                snake.style.transform = 'rotate(180deg)';
                break;
            case 'down':
                snake.style.transform = 'rotate(90deg)';
                break;
        }
    }
}

function move() { //末尾往前循环 长度-1 从最后一次开始
    for (var i = this.snakeBody.length - 1; i > 0; i--) {
        this.snakeBody[i][0] = this.snakeBody[i - 1][0];
        this.snakeBody[i][1] = this.snakeBody[i - 1][1];
    }
    switch (this.direct) {
        case 'right':
            this.snakeBody[0][0] += 1;
            break;
        case 'up':
            this.snakeBody[0][1] -= 1;
            break;
        case 'left':
            this.snakeBody[0][0] -= 1;
            break;
        case 'down':
            this.snakeBody[0][1] += 1;
            break;
        default:
            break;
    }
    removeClass('snake');
    snake();
    if (this.snakeBody[0][0] == this.foodX && this.snakeBody[0][1] == this.foodY) {

        var snakeEndX = this.snakeBody[this.snakeBody.length - 1][0];
        var snakeEndY = this.snakeBody[this.snakeBody.length - 1][1];
        switch (this.direct) {
            case 'right':
                this.snakeBody.push([snakeEndX + 1, snakeEndY, 'body']);
                //this.snakeBody[0][0] += 1;
                break;
            case 'up':
                this.snakeBody.push([snakeEndX, snakeEndY - 1, 'body']);
                //this.snakeBody[0][1] -= 1;
                break;
            case 'left':
                this.snakeBody.push([snakeEndX - 1, snakeEndY, 'body']);
                //this.snakeBody[0][0] -= 1;
                break;
            case 'down':
                this.snakeBody.push([snakeEndX, snakeEndY + 1, 'body']);
                //this.snakeBody[0][1] += 1;
                break;
            default:
                break;
        }
        this.score += 1;
        scoreBox.innerHTML = this.score;
        removeClass('food');
        food();
    }

    if (this.snakeBody[0][0] < 0 || this.snakeBody[0][0] >= this.mapW / 20) {
        //alert('1');
        relodGame();
    }
    if (this.snakeBody[0][1] < 0 || this.snakeBody[0][1] >= this.mapH / 20) {
        //alert('1');
        relodGame();
    }
    var snakeHX = this.snakeBody[0][0];
    var snakeHY = this.snakeBody[0][1];
    for (var i = 1; i < this.snakeBody.length; i++) {
        if (snakeHX == snakeBody[i][0] && snakeHY == snakeBody[i][1]) {
            //alert('1');
            relodGame();
        }
    }
}

function relodGame() {
    removeClass('snake');
    removeClass('food');
    clearInterval(snakeMove);
    this.snakeBody = [[4, 3, 'head'], [3, 3, 'body'], [2, 3, 'body']];
    this.direct = 'right';
    this.left = false;
    this.right = false;
    this.up = true;
    this.down = true;
    lose.style.display = 'block';
    loserScore.innerHTML = this.score;
    this.score = 0; 
    scoreBox.innerHTML = this.score;
}

function removeClass(className) {
    var ele = document.getElementsByClassName(className);
    while (ele.length > 0) {
        ele[0].parentNode.removeChild(ele[0]);
    }
}

function setDerict(code) {
    switch (code) {
        case 37:
            if (this.left) {
                this.direct = 'left';
                this.left = 'false';
                this.right = 'false';
                this.up = 'true';
                this.down = 'true';
            }
            break;
        case 38:
            if (this.up) {
                this.direct = 'up';
                this.left = 'true';
                this.right = 'true';
                this.up = 'false';
                this.down = 'false';
            }
            break;
        case 39:
            if (this.right) {
                this.direct = 'right';
                this.left = 'false';
                this.right = 'false';
                this.up = 'true';
                this.down = 'true';
            }
            break;
        case 40:
            if (this.down) {
                this.direct = 'down';
                this.left = 'true';
                this.right = 'true';
                this.up = 'false';
                this.down = 'false';
            }
            break;
        default:
            break;
    }
}

function bindEvent() {
    // document.onkeydown = function (e) {
    //     var code = e.keyCode
    //     setDerict(code);
    // }
    close.oncclick = function() {
        lose.style.display = 'none';   
    }
    startBtn.onclick = function () {
        startAndPaush();
    }
    startP.onclick = function () {
        startAndPaush();
    }
}

function startAndPaush() {
    if (startPaushBool) {
        if (startGameBool) {
            startGame();
            startGameBool = false;
        }
        startP.setAttribute('src', './img/paush.png');
        document.onkeydown = function (e) {
            var code = e.keyCode
            setDerict(code);
        }
        snakeMove = setInterval(function () {
            move()
        }, speed);
        
        startPaushBool = false
    } else {
        startP.setAttribute('src', './img/start-b.png');
        clearInterval(snakeMove);
        document.onkeydown = function (e) {
            e.returnValue = false;
            return false;
        };
        startPaushBool = true;
    }
}