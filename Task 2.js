let x = 12
// Не до конца ясно задание. Кто вводит значение: вы как разработчик или как пользователь
switch (typeof(x)) {
    case "number":
        console.log('Это число');
        break;
    case "string":
        console.log('Это строка');
        break;
    case "boolean":
        console.log('Это булеан');
        break;
    default:
        console.log('Тип не определён');
}