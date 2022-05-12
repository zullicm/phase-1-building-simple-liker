// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const modal = document.getElementById('modal')
modal.classList.add('hidden')

function heartPressServerCall(){
  const hearts = document.getElementsByClassName('like-glyph')
  hearts.addEventListener('click',serverCall())
}

function heartSuccess(){
  if(heart.target.innerText === EMPTY_HEART){
    heart.target.classList.add('activated-heart')
  }else{
    heart.target.classList.remove('activated-heart')
}  }

function heartFail(message){
  const modalMessage = document.getElementById("modal-message")
  modal.classList.remove('hidden')
  modalMessage.innerText = message
  setTimeout(() => {
    modal.classList.add('hidden')
    modalMessage.innerText = ''
  }, 3000)
}


function serverCall(){
  mimicServerCall()
  .then(() => heartSuccess())
  .catch((error) => heartFail(error))
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
