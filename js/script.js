let button1 = document.querySelector(`.button-1`)
let button2 = document.querySelector(`.button-2`)
let result = document.querySelector(`.result`)
let input = document.querySelector(`.input`)
let frog = document.querySelector(`.frog`)
let openImg = document.querySelector(`.open`)
let i = 0
result.textContent = `Привет`
button1.textContent = `Привет`
button1.addEventListener(`click`, function () {
    i++
})
button2.addEventListener(`click`, function () {
    i++
})
document.addEventListener(`click`, function () {
    switch (i) {
        case 1:
            result.textContent = `Как твои дела?`
            button1.textContent = `Хорошо`
            button2.textContent = `Плохо`
            button2.classList.remove(`d-none`)
            frog.src = `assets/q-frog.png`
            break
        case 2:
            result.textContent = `А что ты тут делаешь?`
            button1.textContent = `Я гуляла по ссылкам в интернете и попала сюда`
            button2.textContent = `Меня насильно сюда затащили`
            frog.src = `assets/sadq-frog.png`
            break
        case 3:
            result.textContent = `Ого, тебе не страшно?`
            button1.textContent = `Нет, все хорошо`
            button2.textContent = `Да, мне очень страшно`
            frog.src = `assets/scared-frog.png`
            break
        case 4:
            result.textContent = `Это замечательно! можно узнать как тебя зовут?`
            button1.textContent = `Ни при каких условиях!! я никогда не напишу свое имя на этом сайте!!`
            button2.textContent = `Отправить`
            input.classList.remove(`d-none`)
            frog.src = `assets/fun-frog.png`
            break
        case 5:
            let username = input.value
            if (username) {
                result.textContent = `${username}? замечательное имя!!`
                button1.textContent = `Большое спасибо`
                button2.classList.add(`d-none`)
            } else {
                result.textContent = `Очень жаль что ты мне не доверяешь`
                button1.textContent = `Я думаю мы подружимся`
                button2.textContent = `И правильно делаю`
            }
            input.classList.add(`d-none`)
            break
        case 6:
            result.textContent = `Я слышал сегодня какой то праздник и возможно у меня есть для тебя подарок!!`
            button1.textContent = `Правда?`
            button2.textContent = `Я тебе не верю`
            button2.classList.remove(`d-none`)
            break
        case 7:
            result.textContent = `Вон же он за спиной`
            button1.textContent = `А что это такое?`
            button2.classList.add(`d-none`)
            break
        case 8:
            openImg.style.cssText = `filter:blur(0px);
                transition: 1s;`
            frog.classList.add(`d-none`)
            button1.classList.add(`d-none`)
            result.classList.add(`d-none`)
            break
    }
})
