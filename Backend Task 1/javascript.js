var countObj=[]; //to save each distinct word and number of it's occurences

var n = prompt("Enter number of words:");

for(var i = 0; i < Number(n); i++)
{   
    var word = prompt("Enter word");
    if (i === 0)
    {
        countObj.push({name:word, value:1});
    }
    else
    {
        for(var j = 0; j < i; j++)
        {
            
            if (j === countObj.length-1)
            {
                if(countObj[j].name === word)
                {
                    countObj[j].value += 1;
                    break;
                }
                else
                {
                  countObj.push({name: word, value: 1});
                  break;
                }   
            }
            else if (word === countObj[j].name)
            { 
                countObj[j].value += 1;
                break;
            }
        }
    }
}

//concatenate occurences in an array
var occurences = [];
countObj.forEach((currValue, index, arr) =>
{
    occurences += (arr[index].value).toString() + " ";
});

//print output
console.log(countObj.length);
console.log(occurences);

//bonus task
countObj.sort((a,b) => {
    return b.value - a.value;
});
var a = countObj[0].value;
var b = countObj[(countObj.length)-1].value;
console.log("\nBONUS TASK -")
countObj.forEach((item) => 
{
    if (item.value === a)
    {
        console.log(`Most repeated word: ${item.name}`);
    }
});
countObj.forEach((item) => 
{
    if (item.value === b)
    {
        console.log(`Least repeated word: ${item.name}`);
    }
});