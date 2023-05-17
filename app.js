var msg = 'Hello World'
console.log(msg);


class Vehicles {
    constructor (_wheels){
      this.numWheels = _wheels;
    }

    get wheels (){
     return this.numWheels;
}
    set wheels (_wheels){
     this.numWheels = _wheels;
} 
    static accelerate (){
      console.log('Go faster!')
} 
    static decelerate(){
      console.log('Go slower!')
}   

}



let car = new Vehicles (6)
let car1 = new Vehicles (4)
let car2 = new Vehicles (2)
let car3 = new Vehicles (0)
console.log(car)
console.log(car3.wheels)
Vehicles.accelerate()