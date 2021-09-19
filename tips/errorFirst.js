function asincrona(callback) {
  setTimeout(() => {
    try {
      let a = 3 + z;
      callback(null, a);
    } catch (e) {
      callback(e, null);
    }
  }, 1000);
}

/** ERROR TRY FOR SYNC
try {
  asincrona(function (err, dato) {
    if (err) {
      throw err;
    }
    console.log("Everything is ok");
  });
} catch (err) {
  console.error("We have an error");
  console.error(err);
}
*/

asincrona(function (err, dato) {
  if (err) {
    console.error("We have an error");
    console.error(err);
    return false;
  }
  console.log("Everything is ok", dato);
});
