
const users = {
}
for(let i = 1; i <= 10; i++){
    let num = 'Пользователь ' + i
    users.name = prompt('Введите ваше имя ' + i + ' го  пользователя '   )
    users.age  = +prompt('введите ваш возраст' + i + ' го  пользователя ')
    for ( const key in users ){
        console.info(`${num}\n ваше имя ${users.name} , ваш возраст ${users.age}`)
    }

}
console.info(users)