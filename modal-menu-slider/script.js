const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');
const navbar = document.getElementById('navbar');

// This function closes navbar if user clicks anywhere outside of navbar once it's opened
// Does not leave unused event listeners on
// It's messy, but it works
function closeNavbar(e) {
  if ( // 열려있었다면
    document.body.classList.contains('show-nav') &&
    e.target !== toggle && // 토글 클릭한게 아니어야 한다 (다른 이벤트 핸들러와 중복 액션)
    !toggle.contains(e.target) && // 토글 안 클릭한게 아니어야 한다
    e.target !== navbar && // 네비바 클릭한게 아니어야 한다 (다른 이벤트 핸들러와 중복 액션)
    !navbar.contains(e.target) // 네비바 안 클릭한게 아니어야 한다
  ) {
    document.body.classList.toggle('show-nav');
    document.body.removeEventListener('click', closeNavbar);
  }  // 닫혀있었다면
  else if (!document.body.classList.contains('show-nav')) {
    document.body.removeEventListener('click', closeNavbar);
  }
  // 나머지 경우 = 열려있는데, 이상한 곳 클릭했을 때
}

// Toggle nav
toggle.addEventListener('click', () => {
  document.body.classList.toggle('show-nav'); // body 에 해준다는 것에 주목!
  document.body.addEventListener('click', closeNavbar); // body 에 해준다는 것에 주목!
});

// Show modal
open.addEventListener('click', () => modal.classList.add('show-modal'));

// Hide modal
close.addEventListener('click', () => modal.classList.remove('show-modal'));

// Hide modal on outside click
window.addEventListener('click', e =>
  e.target == modal ? modal.classList.remove('show-modal') : false
);
