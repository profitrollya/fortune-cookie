window.onload = function() {
     var app = new Vue({
        el: '#app',
        data: {
            startState: false,
            btnCrackText: 'Crack the cookie',
            linkNewText: 'Get a new cookie',
            imageSourcePath: 'img/i-0.png',
            imageIndex: 0,
            imageMaxIndex: 54
        },
        methods: {
            crackCookie: function () {
                this.startState = false;
            },
            getNew: function () {
                this.startState = true;
            },
            getNext: function() {
                if (this.imageIndex <= this.imageMaxIndex) {
                    this.imageSourcePath = "img/i-" + this.imageIndex+ ".png";
                    this.imageIndex++;
                } else {
                    this.imageIndex = 0;
                }
            }
        }
    });

     //Sergey Happy Birthday background code
    var q = document.getElementById("q");

    var s = window.screen;
    var width = q.width = s.width;
    var height = q.height = s.height;
    var letters = Array(256).join(1).split('');

    var draw = function () {
        q.getContext('2d').fillStyle = 'rgba(0,0,0,.05)'; //Тут цвет фона
        q.getContext('2d').fillRect(0, 0, width, height);
        q.getContext('2d').fillStyle = '#0F0'; //Тут цвет букв
        letters.map(function (y_pos, index) {
            text = String.fromCharCode(65 + Math.random() * 33);
            x_pos = index * 10;
            q.getContext('2d').fillText(text, x_pos, y_pos);
            letters[index] = (y_pos > 758 + Math.random() * 1e4) ? 0 : y_pos + 10;
        });
    };
    setInterval(draw, 33);
}