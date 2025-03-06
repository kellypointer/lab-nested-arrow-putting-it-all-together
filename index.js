
let userInfo = {
  username: "user1",
  password: "password123"
};

function createLoginTracker(userInfo) {
  let attemptCount = 0;

  while (attemptCount < 3) {
    testPassword();
  }
  function testPassword() {
    const passwordAttempt = prompt("Please enter your password");

    if (passwordAttempt === userInfo.password) {
      console.log("Login successful");
      exit;
    } else {
      attemptCount++;
      console.log(`Login failed. You have attempted ${attemptCount} login(s). You may try ${3 - attemptCount} more time(s) before your account is locked.`);
    }
    if (attemptCount >= 3) {
      console.log("Account locked due to too many failed login attempts.");
      alert("Account locked due to too many failed login attempts.");
    }
  }
}

createLoginTracker(userInfo);
