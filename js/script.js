const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
const alert = document.querySelector('.alert');
const copy = document.querySelector('.fa-copy');

btn.addEventListener('click', () => {
    generate();
});


copy.addEventListener('click', () => {
    copyPassword();
    if (input.value) {
        alert.classList.remove('active');
        setTimeout(() => {
            alert.classList.add('active');
        }, 2000)
    }
});

function generate() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*(){}[]-+?:_ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const num = 10;
    let password = '';

    for (let i = 0; i < num; i++) {
        const random = Math.floor(Math.random() * chars.length);
        password += chars.substring(random, random + 1);
        //console.log(random, password);
    }
    input.value = password;
    alert.innerText = `${password} copied!`
}

function copyPassword() {
    input.select();
    input.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(input.value);
}