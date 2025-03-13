let count=0;

function counter()
{
    console.log(count++);

    if(count<=10)
    {
        setTimeout(counter,1000);
    }
    else
    {
        console.log("Counter stopped!");
    }
}

counter();
