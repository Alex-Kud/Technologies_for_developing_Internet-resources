class Map {
	static init(canv) {
            this.canv = canv;
            this.canv.width = 1000;
            this.canv.height = 500;

            this.ctx = this.canv.getContext('2d');
	}

	static clear() {
            this.ctx.clearRect(0, 0, this.canv.width, this.canv.height);
	}

	static show(obj) {
            obj.draw(this.ctx);
	}
        
        static update(obj){
            obj.update(this.ctx, this.canv);
        }
}