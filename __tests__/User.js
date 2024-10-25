const { describe, expect, it } = require("@jest/globals");
const User = require("../classes/User.js");

describe("user.login(password)", () => {
  it("logs a user in if the password is correct", () => {
    let u = new User("billy", 123, 29);
    u.login(123);
    expect(u.loggedIn).toBe(true);
  });

  it("throws an error if the password is incorrect", () => {
    let u = new User("billy", 123, 29);
    expect(()=>{
      u.login(124);
    }).toThrow("incorrect password");
  });
});

describe("user.logout()", () => {
  it("logs a user out", () => {
    let u = new User("billy", 123, 29);
    u.login(123);
    console.log(u.loggedIn);
    u.logout();
    console.log(u.loggedIn);
    expect(u.loggedIn).toBe(false);
  });
});
