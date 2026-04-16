function getNum(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        let num = Math.floor(Math.random() * 10) + 1;
        if(num<4){
            reject("promise rejected")
        }
        console.log(num);
        resolve();
    }, 1000); 
    });
}

async function demo(){
    try{
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    getNum();
    } catch(err){
        console.log("error caught");
        console.log("Error was: "+ err);
    }   
}
demo();