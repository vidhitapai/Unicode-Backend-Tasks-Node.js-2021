// var countObj=
// [

// ]

// /*function wordPresent(wordToBeChecked)
// {
//     for(var i = 0; i<n ; i++)
//     {
//         if(wordToBeChecked === countObj[i].name)
//         {
//             return true;
//         }
//     }
//     return false;
// }*/

// var n = prompt("Enter number of words:");
// for(var i = 0; i < Number(n) ; i++)
// {
//     var word = prompt("Enter word");
//     if (i===0)
//     {
//         countObj.push({name:word, value:1});
//     }
//     else
//     {
//        /* if (wordPresent(word) === false)
//         { 
//             countObj[i].name=word;
//             countObj[i].value = 1;
//         }
//         else if (wordPresent(word) === true)
//         {
//             countObj[i].value += 1;
//         }*/
//         for(var j=0; j<i ; j++)
//         {
//             if (word == countObj[j].name)
//             { 
//                 countObj[j].value += 1;
//                 break;
//             }
//             else if (j===countObj.length-1)
//             {
//                 if(countObj[j] == word)
//                 {
//                     countObj[j].value += 1;
//                     break;
//                 }
//                 countObj[i]={name:" ",value:" "};
//                 countObj[i].name=word;
//                 countObj[i].value = 1;
//             }
//         }
//     }
// }

// //console.log(countObj.length);
// var occurences,nameArray;
// for(var i =0 ; i<n ; i++)
// {
//     nameArray.push(countObj[i].name);
//     occurences += " " + ((countObj[i].value).toString());
// }
// console.log(nameArray.length);
// console.log(occurences);

var countObj=
[

]

var n = prompt("Enter number of words:");
for(var i = 0; i<Number(n) ; i++)
{
    var word = prompt("Enter word");
    if (i===0)
    {
        countObj.push({name:word, value:1});
    }
    else
    {
        for(var j=0; j<i ; j++)
        {
            if (word == countObj[j].name)
            { 
                countObj[j].value += 1;
                break;
            }
            else if (j===countObj.length-1)
            {
                if(countObj[j] == word)
                {
                    countObj[j].value += 1;
                    break;
                }
                countObj[i]={name:" ",value:" "};
                countObj[i].name=word;
                countObj[i].value = 1;
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
})

console.log(nameArray.length);
console.log(occurences);