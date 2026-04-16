let url = "https://catfact.ninja/#/Facts/getRandomFact";

async function getFacts() {
    try {
        let res = await fetch(url);
    let data = await res.json();
    console.log(data);

    let res2 = await fetch(url);
    let data2 = await res2.json();
    console.log(data);
    } catch(err){
        console.log("ERROR - " + err)
    }
    console.log("bye");
}
