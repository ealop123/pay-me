const main = function () {
 for (let i=0; i < 10; i++) {
   createFakeMessage();
 }
}

function createMessage (name, amt, msg, img) {
  const messageContext = document.createElement('div');
  messageContext.classList.add('messageContext');
  document.querySelector('#messageArea')
    .appendChild(messageContext);

  const messageDescription = document.createElement('div');
  messageDescription.classList.add('messageDescription');
  messageContext.appendChild(messageDescription);

  const messageProfile = document.createElement('div');
  messageProfile.classList.add('messageProfile');
  messageProfile.classList.add(img);
  messageDescription.appendChild(messageProfile);

  const messageInfo = document.createElement('div');
  messageInfo.classList.add('messageInfo');
  messageDescription.appendChild(messageInfo);

  const messageName = document.createElement('div');
  messageName.classList.add('messageName');
  messageName.innerText = name;
  messageInfo.appendChild(messageName);

  const textNode = document.createTextNode(' donated ');
  messageInfo.appendChild(textNode);

  const contributionAmount = document.createElement('div');
  contributionAmount.classList.add('contributionAmount');
  contributionAmount.innerText = '$' + amt;
  messageInfo.appendChild(contributionAmount);

  const message = document.createElement('div');
  message.classList.add('message');
  messageContext.appendChild(message);

  const p = document.createElement('p');
  p.innerText = msg;
  message.appendChild(p);
}

let lastImg = 'panda';

function createFakeMessage() {
  const names = ['Kyle', 'Chad', 'Michael', 'Jason', 'Steven', 'Jackson'];
  const randomName = names[~~(Math.random() * names.length)];

  const amount = Math.random() * 100;
  const amountFix = amount.toFixed(2);
  const imgArray = ['fox', 'panda', 'fish', 'bear', 'bull', 'cat'];
  const filteredArray = imgArray.filter(img => img != lastImg);
  const randomImg = filteredArray[~~(Math.random() * filteredArray.length)];
  lastImg = randomImg;

  const messageArray = [
    'north',
    'east',
    'south',
    'weast'
  ];

  const randomMsg = messageArray[~~(Math.random() * messageArray.length)];
  createMessage(randomName, amountFix, randomMsg, randomImg);
}

window.addEventListener("load", main);
