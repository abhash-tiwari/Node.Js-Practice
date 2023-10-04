// revision 

//fetch

// console.log("--------- fetching the data from github- -------- ");

// fetch("https://api.github.com/users")
//    .then((response) => {
//     return response.json();

// })
//    .then((data) => {
//     // i can create beautiful UI

//     console.log(data);
//   });
// fetch("https://api.github.com/users") // 5 sec
//   .then((response) => {
//     return response.json(); // 1sec
//   })
//   .then((data) => {
//     // i can create beautiful UI

//     console.log(data);
//   });

console.log("---------- END OF DATA --------- ");

console.log("Creating something using fetch and dom");

function addQuoteToDOM(quote) {
      const bodyElement = document.body;
    
      const h1Element = document.createElement("h1");
      h1Element.innerText = quote;
    
      bodyElement.append(h1Element);
    }
    
    // function fetchQUote() {
    //   const url = "https://api.kanye.rest";
    
    //   fetch(url) // 5 sec
    //     .then((response) => response.json()) // 5sec
    //     .then((data) => {
    //       console.log(data);
    //       // bad code
    //       // const quote = data["quote"];
    //       const { quote } = data;
    //       console.log(quote, "QUOTE debug");
    
    //       // i here i am playing with the data
    //       addQuoteToDOM(quote);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //       addQuoteToDOM("soory");
    //     });
    
    // }
    
    // fetchQUote();



    //async await

    async function quoteKanye(){
        try {
        const url = "https://api.kanye.rest";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        const { quote } = data;
        console.log(quote, "QUOTE debug");
    
        addQuoteToDOM(quote);


       
    } catch (Errro) {
        addQuoteToDOM("sorry");
        // handling of the error
      }
    }
    quoteKanye();