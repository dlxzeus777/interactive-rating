const rating = document.querySelector('.rating');
const thanks = document.querySelector('.thanks');
const submitBtn = document.querySelector('.submit');
const buttons = document.querySelectorAll('.btn');
const selectedNumber = document.querySelector('span');


submitBtn.addEventListener('click', () => 
{
    thanks.classList.remove('hidden');
    rating.classList.add('hidden');
});

for(let btn of buttons)
{
    btn.addEventListener('click', (e) => 
    {
        const target = e.target.value;
        console.log(target);
        selectedNumber.innerText = target;
    })
}
