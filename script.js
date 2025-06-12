// 환경변수처럼 수정하기 쉬운 성별 값
const GENDER = '여자아이'; // '남자아이' 또는 '여자아이'로 변경 가능

const button = document.getElementById('revealButton');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const genderResult = document.getElementById('genderResult');

button.addEventListener('click', () => {
  // 버튼 숨기기
  button.style.display = 'none';

  // 이미지 표시
  image1.classList.remove('hidden');
  image2.classList.remove('hidden');
  image1.classList.add('show');
  image2.classList.add('show');

  // 5초 후 결과 표시
  setTimeout(() => {
    genderResult.textContent = `아기는 ${GENDER}입니다! 🎀`;
    genderResult.classList.remove('hidden');
  }, 5000);
});
