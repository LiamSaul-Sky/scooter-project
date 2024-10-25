const Scooter = require("./Scooter.js");
const User = require("./User.js");

class ScooterApp {
  // ScooterApp code here
  constructor(stations, registeredUsers){
    this.stations = {'station1': [], 'station2' : [], 'station3' : []};
    this.registeredUsers = {};
  } 
  registerUser(username, password, age){
    console.log(this.registeredUsers);
    const newUser = {username, password, age};
    if (newUser in this.registeredUsers){
      throw new Error("Already registered");
    } else if(newUser.age < 18){
      throw new Error("Too young to register");
    } else{
      this.registeredUsers[newUser.name] = newUser;
    }
    console.log(`User: ${User.name} has been registered`);
  }

}

module.exports = ScooterApp;
