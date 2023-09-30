class University {
  constructor() {
    this.teachers = [];
    this.students = [];
  }

  addMember(member) {
    if (member.role === "teacher") {
      this.teachers.push(member);
    } else if (member.role === "student") {
      this.students.push(member);
    }
  }

  removeMember(member) {
    if (member.role === "student") {
      this.students = this.students.filter(
        (student) => student.name !== member.name
      );
    } else if (member.role === "teacher") {
      this.teachers = this.teachers.filter(
        (teacher) => teacher.name !== member.name
      );
    }
  }

  startLesson() {
    this.teachers.forEach((teacher) => (teacher.energy -= 5));
    this.students.forEach((student) => (student.energy -= 2));
  }
}

class UniversityMember {
  constructor(name, age, role) {
    this.name = name;
    this.age = age;
    this.role = role;
    this.energy = 24;
  }

  info() {
    return `Name: ${this.name}, Age: ${this.age}, Role: ${this.role}, Energy: ${this.energy}`;
  }
}

class Teacher extends UniversityMember {
  constructor(name, age) {
    super(name, age, "teacher");
  }
}

class Student extends UniversityMember {
  constructor(name, age) {
    super(name, age, "student");
  }
}
