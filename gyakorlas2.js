var tomb = ["hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat", "vasárnap", ];
console.log("sima for --------------------------------------------")
for(let i = 0; i<tomb.length;i++)
{
    console.log(tomb[i])
}
console.log("for ... of ------------------------------------------")
for(var element of tomb)
{
    console.log(element);
}