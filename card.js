class Card {
    constructor(img,x,y,w,h) {
        this.img = img;
        this.x = x;
        this.y = y;
        this.w = img.width;
        this.h = img.height
        this.isHidden = false;
    }
    isInside(xPos, yPos) {
        if (xPos > this.x && xPos < this.x+this.w &&
        yPos > this.y && yPos < this.y+this.h) {
            return true;
         } else {
            return false;
         }
    }
        
        display(){
        if(isHidden = false)
        image(this.img, this.x, this.y, this.w, this.y)

    }

}