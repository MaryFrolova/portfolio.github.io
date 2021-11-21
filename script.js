const logo_card = document.querySelector('.logo');
logo_card.addEventListener('mousemove', startRotate);
logo_card.addEventListener('mouseout', stopRotate);

function startRotate (event) { 
    const cardImg = this.querySelector('.logo-img');
    const halfHeight = cardImg.offsetHeight / 2;

    cardImg.style.transform = 'rotateX('+ - (event.offsetY - halfHeight) / 3 +'deg) rotateY('+ (event.offsetX - halfHeight) / 3 +'deg)';
 }

 function stopRotate (event) {
    const cardImg = this.querySelector('.logo-img');
    cardImg.style.transform = 'rotate(0)';
 }

 

const skill_card = document.querySelectorAll('.skills');

for (let i = 0; i < skill_card.length; i++){
    const card = skill_card[i];
    card.addEventListener('mousemove', startRotateSkill);
    card.addEventListener('mouseout', stopRotateSkill);
}

function startRotateSkill (event) { 
    const cardSkill = this.querySelector('.skill');
    const halfHeight = cardSkill.offsetHeight / 2;

    cardSkill.style.transform = 'rotateX('+ - (event.offsetY - halfHeight) / 3 +'deg) rotateY('+ (event.offsetX - halfHeight) / 3 +'deg)';
 }

 function stopRotateSkill (event) {
    const cardSkill = this.querySelector('.skill');
    cardSkill.style.transform = 'rotate(0)';
 }