var url_bb = 'https://breakingbadapi.com/api/characters'
async function getAPI()
{
    const response = await fetch(url_bb);
    const data = await response.json();
    console.log("Breaking Bad Characters:");
    for (var i=0; i<62 ; i++)
    {
        console.log(data[i].name);
    }
}
getAPI();