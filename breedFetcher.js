"use strict";
const request = require("request");
//https://api.thecatapi.com/v1/breeds/search?q=Siberian
//const breedName = process.argv[2];
const fetchBreedDescription = function(breedName, callback) {
  let catUrl = "https://api.thecatapi.com/v1/breeds/search?q=";
  request(catUrl + breedName, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (body.length === 2) {
      callback("we don't have that flavour!", null);
      return;
      // console.log("we don't have that flavour!");
    }
    callback(null, JSON.parse(body)[0].description);
    //console.log(JSON.parse(body));
  });
};
module.exports = { fetchBreedDescription };
