/* DOUBLE SHOTS */
/* Can be used to convert truthy or falsy values to true or false boolean values */
/* This can sometimes improve performance */

const google = "google";
const fb = null;

// True value
if (google) {
  console.log("BLOCK 0");
}

// Falsy
if (fb) {
  console.log("BLOCK 1");
}

// True value
if (!fb) {
  console.log("BLOCK 2");
}

// False value
if (!!fb) {
  console.log("BLOCK 3");
}
