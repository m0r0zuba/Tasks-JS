function isPtime(a)
{
    let ind = 0;
    for (let i = 2; i < Math.sqrt(a); i++)
    {
        if (a % i == 0)
        {
            ind += 1;
        }
    }
    if (ind > 0)
    {
        console.log("It's non-prime num");
    }
    else
    {
        console.log("It's prime num");
    }
}

let a = prompt("Enter the number from 0 to 1000:");
if (a != 1 && a != 0)
{
    isPtime(a);
}
else if(a == 1)
{
    console.log("One is one...");
}
else if (a == 0)
{
    console.log("Zero is zero...");
}