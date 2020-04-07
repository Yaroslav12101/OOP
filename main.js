window.onload = function(event) {
    let number = document.querySelector('#input'),
        triesCount = 10,
        rand = Math.floor(Math.random() * 101);
        sendForm = document.querySelector('.button');

        sendForm.addEventListener('click', function(event) {
        let selectednumber = number.value;
            counter = document.querySelector('#span');
         if (selectednumber == rand) {
            counter.textContent = triesCount = 10;
            alert('Congrats');
        } else if (selectednumber < rand && selectednumber >= 0) {
            counter.textContent = triesCount = triesCount - 1;
            alert('Ваше число меньше');
        } else if (selectednumber > rand && selectednumber <= 100) {
            counter.textContent = triesCount = triesCount - 1;
            alert('Ваше число больше');
        } else {
            counter.textContent = triesCount = triesCount - 1;
            alert('Промазал. Укажи число от 0 до 100');
        }
        if (triesCount == 0) {
            alert('Вы проиграли');
            counter.textContent = triesCount = 10;
        }

    });
};