const UsernameInput = document.querySelector('#Username');
const TitleInput = document.querySelector('#Title');
const PostInput = document.querySelector('#post');
const submitButton = document.querySelector('#Submit');
const msgDiv = document.querySelector('#msg');


renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute('class', type);
}

function renderLastRegistered() {
  const Username = localStorage.getItem('Username');
  const Title = localStorage.getItem('Title');
  const Post = localStorage.getItem('post');

  if (!Username || !Title || !Post) {
    return;
  }

}

submitButton.addEventListener('click', function (event) {
  event.preventDefault();

  const Username = UsernameInput.value;
  const Title = TitleInput.value;
  const Post = PostInput.value;

  if (Username === '') {
    displayMessage('error', 'Username cannot be blank');
  } else if (Title === '') {
    displayMessage('error', 'Title cannot be blank');
  } else {
    displayMessage('success', 'Registered successfully');

    localStorage.setItem('Username', Username);
    localStorage.setItem('Title', Title);
    localStorage.setItem('post', Post);

    window.location.href = './blog.html';
  }
});