const main = function () {
createMessage ();       
}

function createMessage () {
  const messageContext = document.createElement('div');
  messageContext.classList.add('messageContext');
  document.querySelector('#messageArea')
    .appendChild(messageContext);

  const messageDescription = document.createElement('div');
  messageDescription.classList.add('messageDescription');
  messageContext.appendChild(messageDescription);

  const messageProfile = document.createElement('div');
  messageProfile.classList.add('messageProfile');
  messageProfile.classList.add('panda');
  messageDescription.appendChild(messageProfile);

  const messageInfo = document.createElement('div');
  messageInfo.classList.add('messageInfo');
  messageDescription.appendChild(messageInfo);

  const messageName = document.createElement('div');
  messageName.classList.add('messageName');
  messageName.innerText = 'Jinx123';
  messageInfo.appendChild(messageName);

  const textNode = document.createTextNode(' donated ');
  messageInfo.appendChild(textNode);

  const contributionAmount = document.createElement('div');
  contributionAmount.classList.add('contributionAmount');
  contributionAmount.innerText = '$20';
  messageInfo.appendChild(contributionAmount);

  const message = document.createElement('div');
  message.classList.add('message');
  messageContext.appendChild(message);

  const p = document.createElement('p');
  p.innerText = 'Hey 👋 I just created a page here.';
  message.appendChild(p);
}


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
window.addEventListener("load", main);
