let url =  "https://catfact.ninja/facts";

fetch(url)
.then((responce) => {
    console.log(responce);
    // console.log(responce.json());  //Helps you to access data

    return responce.json();
    })
    .then((data) => {
        console.log(data);
    })
.catch((err) => {
    console.log("ERROR - ", err);
});