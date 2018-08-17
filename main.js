fetch('https://api-to-call.com/endpoint').then(response => {
  // Code to handle a successful response
}, networkError => {
  console.log(networkError.message);
}).then(jsonResponse => {
  return jsonResponse;
})
