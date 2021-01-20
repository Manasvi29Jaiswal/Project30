class Block {
    constructor(x,y) {
      var options = {
          isStatic:false,
          restitution:0.8,
          friction:0.1,
          density:1.0
      }
      this.body = Bodies.rectangle(x,y,30,40,options);
      this.width = 30;
      this.height = 40;
      World.add(world, this.body);
    }
    
    display(){

      if(this.body.speed<3){

      var pos = this.body.position
      push()
      rectMode(CENTER);
      fill ("magenta")
      strokeWeight(2);
      rect(pos.x,pos.y, this.width, this.height);
      pop();

        
      }
      
      else{
      
        World.remove(world,this.body)
        push()
        this.visibility=this.visibility-5
        tint(255,this.visibility)
        pop();
      
      }
    
  }
  
}