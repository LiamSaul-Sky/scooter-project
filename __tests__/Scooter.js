const { describe, expect, it, test } = require("@jest/globals");
const Scooter = require("../classes/Scooter.js");

describe("scooter.rent(user)", () => {
  it("checks a scooter out to a user", () => {
    // Arrange
    const scoot = new Scooter("any", "any", 123, 100, true);
    // Act
    scoot.rent(this.user);
    expect(scoot.checkedOut).toBe(true);
    // Assert
  });

  it("throws an error if battery dead or scooter broken", () => {
    // Arrange
    const scoot = new Scooter("any", "any", 10, false);
    expect(() =>{
      scoot.rent(scoot.user)
    }).toThrow("scooter needs to charge");
  });
});

describe("scooter.dock(station)", () => {
  it("returns a scooter to a station", () => {
    const scoot = new Scooter("any", "any", 10, false);
    scoot.dock("any");
    expect(scoot.checkedOut).toBe(false);
  });
});

describe("scooter.charge()", () => {
  it("charges a scooter", async () => {
    const scoot = new Scooter("any", "any", 10, false);
    await scoot.recharge();
    expect(scoot.charge).toBe(100);
  });
});

describe("scooter.repair()", () => {
  it("repairs a scooter", async () =>{
    const scoot = new Scooter("any", "any", 100, true);
    await scoot.requestRepair();
    expect(scoot.isBroken).toBe(false);
  }, 10000);
});
