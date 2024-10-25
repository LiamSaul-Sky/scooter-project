const { describe, expect, it } = require("@jest/globals");
const ScooterApp = require("../classes/ScooterApp.js");
const Scooter = require("../classes/Scooter.js");
const User = require("../classes/User.js");

describe("ScooterApp.registerUser(username, password, age)", () => {
  it("registers a new user if old enough", () => {
    let u = new User("billy", 123, 29);
    let s = new ScooterApp();
    s.registerUser(u.username, u.password, u.age);
    expect(u).toEqual(s.registeredUsers[0]);
  });
  
  it.skip("throws an error if too young or already registered", () => {
    // Arrange
    // Act
    // Assert
  });
});

describe("ScooterApp.loginUser(username, password)", () => {
  it.skip("logs in a registered user", () => {
    // Arrange
    // Act
    // Assert
  });

  it.skip("throws an error if user not found or password incorrect", () => {
    // Arrange
    // Act
    // Assert
  });
});

describe("ScooterApp.logoutUser(username)", () => {
  it.skip("logs out a registered user", () => {
    // Arrange
    // Act
    // Assert
  });

  it.skip("throws an error if user not found", () => {
    // Arrange
    // Act
    // Assert
  });
});

describe("ScooterApp.createScooter(station)", () => {
  it.skip("creates a new scooter and adds it to ScooterApp.stations", () => {
    // Arrange
    // Act
    // Assert
  });

  it.skip("throws an error if a station does not exist", () => {
    // Arrange
    // Act
    // Assert
  });
});

describe("ScooterApp.dockScooter(scooter, station)", () => {
  it.skip("docks a scooter at a station", () => {
    // Arrange
    // Act
    // Assert
  });

  it.skip("throws an error if a station does not exist", () => {
    // Arrange
    // Act
    // Assert
  });

  it.skip("throws an error if a scooter is already at a station", () => {
    // Arrange
    // Act
    // Assert
  });
});

describe("ScooterApp.rentScooter(scooter, user)", () => {
  it.skip("rents a scooter out to a user", () => {
    // Arrange
    // Act
    // Assert
  });

  it.skip("throws an error if a scooter is already rented", () => {
    // Arrange
    // Act
    // Assert
  });
});
