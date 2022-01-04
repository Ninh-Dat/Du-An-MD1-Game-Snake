class Snake {
    constructor(x, y, width, height) {
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
        this._canvas = document.getElementById('canvass')
        this._ctx = this._canvas.getContext('2d')
        this.dx = 10;
        this.dy = 0;
        this.maxCells=0
    }
    draw() {
        this._ctx.beginPath();
        this._ctx.fillStyle = "#b42121"
        this._ctx.rect(this._x, this._y, this._width, this._height);
        this._ctx.fill();
        this._ctx.closePath();
    }

    clear() {//xóa
        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }

    chay() {///chạy rắn
        this.clear()
        this._x += this.dx;
        this._y += this.dy;

        this.checkVacham()


        setTimeout(() => this.chay(), 30)
        this.draw()

    }

    diChuyen() {
        this.clear()
        window.addEventListener('keydown', (event) => {
            if (event.keyCode == 37 && this.dx == 0) {//Đi sang trái
                this.dx -= 10;
                this.dy = 0
            } else if (event.keyCode == 39 && this.dx == 0) {
                //Đi sang phải
                this.dx += 10;
                this.dy = 0;
            } else if (event.keyCode == 38 && this.dy == 0) {
                //Đi lên trên
                this.dx = 0;
                this.dy -= 10;
            } else if (event.keyCode == 40 && this.dy == 0) {
                //Đi xuống dưới
                this.dx = 0;
                this.dy += 10;
            }
        })
        this.draw()
    }

    checkVacham() {

        if (this._x >= this._canvas.width) {
            alert('Game Over')
            alert('Bạn có muốn chơi lại ko');



        } else if (this._x < -1) {

            alert('Game Over')

        } else if (this._y >= this._canvas.height) {
            alert('Game Over')
        } else if (this._y < -1) {
            alert('Game Over')
        }
    }
    eat(x,y){
        if (this._x ===x && this._y === y){
            this.maxCells +=1;
            return true;
        }
        return false;
    }

}