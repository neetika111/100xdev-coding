//even numbers between 1 to 100
for(let i=1;i<100;i++)
{
    if(i%2==0)
    {
        console.log(i);
    }
}

//biggest number in array

let max=0;
const ages = [24,25,26,92,89];
const no = ages.length;
for(let i=0;i<no;i++)   
{
    
    if(ages[i]>max)
    {
        max=ages[i];
    }
    
}
console.log(max);
