const breedName = process.argv[2];
const { fetchBreedDescription } = require("./breedFetcher");
const catInfo = function(error, result) {
  if (error) {
    console.log(error);
    return;
  }
  console.log(result);
};
fetchBreedDescription(breedName, catInfo);

// if something else something else
// if (something return) (no need for else ...)
