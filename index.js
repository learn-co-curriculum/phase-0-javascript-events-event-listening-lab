function addingEventListener(){
    const input = document.getElementById('input');

    function clickAlert() {
      alert('I was clicked!');
    }
    
    input.addEventListener('click', clickAlert); 
}

addingEventListener;
clickAlert;
