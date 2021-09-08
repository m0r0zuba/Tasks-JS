let N = prompt("Введите число")
N = +N
if (typeof(N) == "number")
{
    if (N % 2 == 0)
        {
          console.log("Чётное")
        }
    else {console.log("нечётное")}
}
else {console.log("Упс, кажется, вы ошиблись")}