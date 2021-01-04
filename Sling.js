class SlingShot{
  constructor(bodyA, bodyB){
      var options = {
          bodyA: bodyA,
          bodyB: bodyB,
          length: 10,
          stiffness: 1
      }
      this.body = Constraint.create(options);
      World.add(world, this.body);
  }  
  display(){
      var b =  this.body.bodyA.position
      var c = this.body.bodyB.position
      srtokeWeight(5)
      line(b.x, b.y, c.x, c.y);
  }
}