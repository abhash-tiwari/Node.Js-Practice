const greetRohan = new Promise((resolve, reject) => {
    try {
      const greeting = "https://api.github.com/users";
  
      resolve(greeting);
    } catch (error) {
      reject(new Error(error));
    }
  });
  
  const greetShyam = new Promise((resolve, reject) => {
    try {
      const greeting = "Hello Shyam!";
  
      aasdadsasda;
      reject(greeting);
    } catch {
      reject(new Error("Cannot Greet!"));
    }
  });
  
  greetRohan
    .then((data) => {
      console.log("1 debug", data);
  
      // return greetShyam;
  
      return greetShyam;
    })
    .then((data) => {
      console.log("2 debug", data);
    })
  
    .catch((error) => console.log("I dont want to greet anyone", error));