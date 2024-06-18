const userNameSpan = document.querySelector('#user-Name');
const userTitleSpan = document.querySelector('#user-Title');
const userPostSpan = document.querySelector('#user-Post');


function renderLastRegistered() {
    const Username = localStorage.getItem('Username');
    const Title = localStorage.getItem('Title');
    const Post = localStorage.getItem('post');

  
    userNameSpan.textContent = Username;
    userTitleSpan.textContent = Title;
    userPostSpan.textContent = Post;
  }