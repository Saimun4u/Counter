//Set initial count
let count = 0;

//Select value and buttons

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach((btn)=>{
    btn.addEventListener('click', e => {
        // console.log(e.currentTarget.classList)
        const style = e.currentTarget.classList; 
        if (style.contains('increase')){
            count++;
        } else if (style.contains('decrease')){
            count--;
        }
        else{
            count = 0;
        }
        if (count < 0){
            value.style.color = 'red';
        } else if (count > 0){
            value.style.color = 'green'
        }else{
            value.style.color = 'black'
        }
        value.textContent =count;
    })
})

