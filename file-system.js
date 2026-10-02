const fs = require("fs");

// Create welcome.txt
fs.writeFile("welcome.txt", "Hello Node\n", (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log("welcome.txt created successfully.");
});

// Create hello.txt
fs.writeFile("hello.txt", "Hello Node\n", (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log("hello.txt created successfully.");

  // Read hello.txt
  fs.readFile("hello.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log("Content of hello.txt:");
    console.log(data);
  });
});