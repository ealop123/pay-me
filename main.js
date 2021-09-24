;(() => {
  const $ = str => [...document.querySelectorAll(str)];
  console.log(`
    ${"-".repeat(10)}launch test${"-".repeat(10)}
    Checking status of #leftSide load

    ${
      $("#leftSide")[0] == undefined ?
      "STATUS DEFER FAILED" :
      "STATUS GOOD"
    }
    ${"-".repeat(10)}end test${"-".repeat(10)}

    `); //launch test
})();
