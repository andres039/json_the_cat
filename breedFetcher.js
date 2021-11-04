"use strict";
const request = require("request");
//https://api.thecatapi.com/v1/breeds/search?q=Siberian
let catUrl = "https://api.thecatapi.com/v1/breeds/search?q=";
const usersCat = process.argv[2];
request(catUrl + usersCat, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }
  if (body.length === 2) {
    console.log("we don't have that flavour!");
  } else {
    console.log(JSON.parse(body));
  }
});
