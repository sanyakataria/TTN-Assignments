// Q4 Write a program to implement a class having static functions

class myclass{
    constructor(name){
        this.name = name;
    }
    static func1(x){
        return "i am statc method 1 " + "my name is : " + x.name;
    }

    func2(){
        return "i am not a static method."
    }
}

let my1 = new myclass("sanya");
console.log(myclass.func1(my1));
console.log(my1.func2());