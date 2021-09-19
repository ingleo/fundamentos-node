function firstFunc() {
  broken();
}

function broken() {
  return 3 + z;
}

function brokenAsync(cb) {
  setTimeout(() => {
      try {
        return 5 + y;
      } catch (err) {
        console.error('Error in async function');
        cb(err);
      }
  });
}

try {
  //firstFunc();
  brokenAsync(function (err) {
    console.log(err.message);
  });
} catch (err) {
  console.error("Something was wrong");
  console.error(err.message);
  console.log("But it is fine");
}
