let arr = [1, 2, 3, 6, 5, 6, 10, 0, 14, 12, 18210, null, NaN];
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