//inintial count
let count = 0;

// value and buttons select

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');


btns.forEach(function (btn) {  //btn se moze zvati bilo kako, parametar sa kojim mozemo pristupiti svim vrijednostima btns
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList; //currentTarget - daje vrijednost kliknutog btna 
        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++;
        } else if (styles.contains('random')) {
            count = Math.floor(Math.random() * 100) + 10;
        } else {
            count = 0;
        }
        if (count > 0) {
            value.style.color = "green";
        }
        if (count < 0) {
            value.style.color = "red";
        }
        if (count === 0) {
            value.style.color = "black";
        } if (count > 10) {
            value.style.color = "yellow";
        }
        value.textContent = count;
    })
})

