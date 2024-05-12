/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/
let n;
function wait(n) {
  return new Promise(function (resolve) {
    setTimeout(resolve, n * 1000);
  });
}
wait(n).then(function () {
  console.log("resolved");
});

module.exports = wait;
