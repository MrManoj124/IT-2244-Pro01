//Function
function PrintMsg(){
	console.log("Hello Manorooban")
}
PrintMsg()

function sum()
{
	return 4+6
}

console.log(sum())

function sub(a,b)
{
    return a-b
}
console.log(sub(18,10))

//write a boolean function to find a given number is prime number or not
function prime(n)
{
    if(n<2)
    {
        return false
    }
    else{
        for(i=2; i<n; i++)
        {
            if(n%i==0)
            {
                return false;
            }
            else{
                return true;
            }
        }
    }
}