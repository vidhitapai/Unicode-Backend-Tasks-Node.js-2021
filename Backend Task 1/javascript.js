var countObj=[];

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

var occurences = [];
var nameArray = [];
// for(var i =0 ; i<n ; i++)
// {
//     nameArray.push(countObj[i].name);
//     occurences += " " + ((countObj[i].value).toString());
// }

countObj.forEach((currValue, index, arr) =>
{
    nameArray.push(arr[index].name);
    occurences += (arr[index].value).toString() + " ";
});

console.log(nameArray.length);
console.log(occurences);