let url = "https://catfact.ninja/fact";

async function getFacts() {
    try {
        let res = await axios.get(url);
    // let data = await res.json();
    console.log(res.data.fact);

    } catch(err){
        console.log("ERROR - " + err)
    }
}
getFacts();