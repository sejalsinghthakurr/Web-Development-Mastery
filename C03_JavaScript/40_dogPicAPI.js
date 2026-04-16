// 01_index.html

let btn = document.querySelector("button");
let url = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click", async () => {
    let link = await getImage();
    console.log(link);
    let img = document.querySelector("#result");
    img.setAttribute("src", link);
});

async function getImage(params) {
    try{
        let result = await axios.get(url);
        return result.data.message;
        
    } catch (err){
        console.log("Error - " + err)
        return "No Image found";
    }
}