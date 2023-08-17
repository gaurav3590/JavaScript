class Shape{
    constructor(id,x,y){
        this.id=id
        this.move=(x,y)
    }
    move(x,y){
        this.x=x
        this.y=y
    }
}
console.log("typeof Shape class in function");
console.log(typeof(Shape));

class Rectamgle extends Shape{
    constructor(id,x,y,width,height){
        super(id,x,y)
        this.width=width
        this.height=height
    }
}

class Circle extends Shape{
    constructor(id,x,y,radius){
        super(id,x,y)
        this.radius=radius
    }
}