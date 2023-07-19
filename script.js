class Person {
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
	get _name(){
		return this.name;
	}
	set _age(age){
		this.age = age;
	}
}

class Student extends Person {
	study(){
		console.log(`${this._name} is studying`);
	}
}

class Teacher extends Person {
	teach(){
        console.log(`${this._name} is teaching`);
    }
	
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;


