const input = document.getElementById('button');

function clickAlert() {
  alert('I was clicked!');
}

function addingEventListener() {
input.addEventListener('click', clickAlert);
}