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

  /*
  <div class="messageContext">
   <div class="messageDescription">
     <div class="messageProfile panda"></div>
     <div class="messageInfo">
       <div class="messageName">Jinx123</div>
       donated
       <div class="contributionAmount">$20</div>
     </div>
   </div>
   <div class="message">
     <p>Hey 👋 I just created a page here.</p>
   </div>
 </div>
  */

  function createMessage({name, amt}) {

  }
})();
