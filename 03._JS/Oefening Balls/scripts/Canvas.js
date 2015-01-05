var Canvas = function (id, width, height, backgroundColor) {
    this.id = id;
    this.width = width ? width : this.obj.width;
    this.height = height ? height : this.obj.height;

    this.backgroundColor = backgroundColor ? backgroundColor : "#c3c3c3";

    this.ctx = this.setContext ? this.setContext() : null;
}

Canvas.prototype = {
    
    get backgroundColor(){
        return this.obj.style.backgroundColor
    },

    set backgroundColor(value){
        this.obj.style.backgroundColor = value;
    },


    get obj() {
        return document.getElementById(this.id) ? document.getElementById(this.id) : null;
    }
    ,
    setContext: function () {
        if (this.obj && this.obj.getContext) {
            var oContext = this.obj.getContext('2d');
            oContext.fillStyle = this.backgroundColor;
            oContext.fillRect(0, 0, this.width, this.height);
            return (oContext ? oContext : null);
        }
}
}