function step1(callback) {
  setTimeout(() => {
    console.log("Step 1: User Logged In");
    callback(); // Calling the next step
  }, 1000);
}

function step2(callback) {
  setTimeout(() => {
    console.log("Step 2: Fetching Profile Data");
    callback(); // Calling the next step
  }, 1000);
}

function step3() {
  setTimeout(() => {
    console.log("Step 3: Displaying Dashboard");
  }, 1000);
}

// THIS IS CALLBACK HELL:
step1(() => {
  step2(() => {
    step3();
  });
});