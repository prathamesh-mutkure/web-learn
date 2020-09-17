fetch("https://api.chucknorris.io/jokes/random")
  .then((response) => {
    console.log("RESPONSE: ", response);
    return response.json();
  })
  .then((data) => {
    console.log("DATA: ", data);
  })
  .catch((err) => {
    console.log("ERROR: ", err);
  });
