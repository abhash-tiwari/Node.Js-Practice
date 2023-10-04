let payload = {
    name : "",
    email : "",
};

const nameElement = document.getElementById("name");
const emailElement = document.getElementById("email");
const submitElement = document.getElementById("btn");

nameElement.addEventListener("input", (event) => {
    const inputElement = event.target; 
    const { value } = inputElement; // 1st way or we can use const value = inputElement.value
  
    payload.name = value;
  
    console.log(value, "input name debug");
  });
  
  emailElement.addEventListener("input", (event) => {
    const value = event.target.value;
  
    payload.email = value;
  
    console.log(value, "input email debug");
  });
  
  submitElement.addEventListener("click", () => {
    // send the payload to the server
    console.log(payload);
  });