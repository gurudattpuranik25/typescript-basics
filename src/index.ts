// 1st method to create a class

class User {
  protected _courseCount = 5;

  public email: string;
  name: string;
  private readonly city: string = "";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }

  private deleteToken() {
    console.log("Token deleted");
  }

  get courseCount(): number {
    return this.courseCount;
  }

  set courseCount(courseNumber) {
    if (courseNumber <= 1) {
      throw new Error("Course count should be greate than 1");
    }
    this._courseCount = courseNumber;
  }
}

// 2nd method to create a class

// class newUser {
//   readonly city: string = "Haveri";
//   constructor(public name: string, public email: string) {}
// }

// use PRIVATE keyword to restrict the access
// use PROTECTED keyword to access a property both inside and outside a class (inherited class)

class newUser extends User {
  isFinished: boolean = true;
  changeCourseCount() {
    this._courseCount = 25;
  }
}

const vikas = new User("vikas@gmail.com", "Vikas");

// vikas.city;  cannot access as city is PRIVATE
// vikas.deleteToken();
