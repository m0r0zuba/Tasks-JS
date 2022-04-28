let arr = [1, 1, 1, 1, 2, 1, 1, 1];
let ind;
for (let i = 1; i < arr.length; i++)
{
    if (arr[i] != arr[i - 1])
    {
        console.log("Не все элементы равны");
        ind = -1;
        break;
    }
}
if (ind != -1)
{
    console.log("Все элементы масива равны")
}