function odd_or_not(arr)
{
    let odd = 0, even = 0, nulls = 0;
    for (let i = 0; i < arr.length; i++)
    {
        if (typeof(arr[i] == Number))
        {
            if(arr[i] == 0)
            {
                nulls++;
                break;
            }
            if (arr[i] % 2 == 0)
            {
                even++;
            }
            if (arr[i] % 2 != 0)
            {
                odd++;
            }

        }
    }
    console.log("odd:", odd, "even:", even, "nulls:", nulls);
}

let arr = [1, "irrs", NaN, "NaN", null, 2, 4, "some string", "smt else", "1", 0, 12, 13];
odd_or_not(arr);