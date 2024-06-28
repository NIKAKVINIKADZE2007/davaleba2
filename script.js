let addbtn = document.getElementById('addbtn');
let removebtn = document.getElementById('removebtn');
let div = document.querySelector('.addeddiv');

addbtn.addEventListener('click', () => {
  div.classList.add('displaydiv');
});
removebtn.addEventListener('click', () => {
  div.classList.remove('displaydiv');
});
