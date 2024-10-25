class Scooter {
  // Scooter code here
  static nextSerial = 1;
  constructor(station, user, charge, isBroken){
    this.station = station;
    this.user = user;
    this.serial = Scooter.nextSerial;
    this.charge = charge;
    this.isBroken = isBroken;
    this.checkedOut = false;
    Scooter.nextSerial += 1;
  }
  rent(user){
    if(this.charge < 20){
      console.log("CHARGING REQUIRED");
      throw new Error("scooter needs to charge");
    } else if(this.isBroken == true){
      throw new Error("scooter needs repair");
    } else{
      // Scooter has been checked out 
      this.station = null;
      // Assign to the user
      this.user = user;
      this.checkedOut = true;
      console.log(`Scooter checked out to: ${this.user}`);
    }
  }
  dock(station){
    // Check in scooter, and remove user
    this.station = station;
    this.user = null;
    this.checkedOut = false;
  }
  async recharge(){
    if (this.charge < 100){
      console.log('Charging scooter');

      await new Promise(resolve => setTimeout(resolve, 1000));
      this.charge = 100;

      console.log(`Current charge is: ${this.charge}`);
    }
  }
  async requestRepair(){
    if (this.isBroken){
      console.log("Repair requested");

      await new Promise(resolve => setTimeout(resolve, 5000));
      this.isBroken = false;

      console.log("Repair completed");

    }
    setInterval(this.recharge, 10000);
    setInterval(this.requestRepair, 5000);
  }
}

module.exports = Scooter;
