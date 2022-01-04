class Food {
    constructor(x, y,grid) {
        this.x = x;
        this.y = y;
        this.grid=grid;
        this._canvas = document.getElementById('canvass');
        this._ctx = this._canvas.getContext('2d');
this.checkToDo()
    }
    draw2() {
        this._ctx.beginPath();
        this._ctx.fillStyle = "#010208";
        this._ctx.rect(this.x, this.y, this.grid, this.grid);
        this._ctx.fill();
        this._ctx.closePath();

    }
    clear() {//xóa
        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }
    checkToDo(){
this.clear()
        this.x=(Math.floor(Math.random()* (29 - 0)) + 0 )* (this.grid);
        this.y=(Math.floor( Math.random()*(29 - 0)) + 0)* (this.grid);
        setTimeout(() => this.checkToDo(), 2000)
        this.draw2()
    }


}