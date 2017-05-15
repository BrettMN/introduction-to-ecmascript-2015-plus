function travel3SecondsIntoTheFuture(result) {
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve(result);
        }, 3000);
    });    
}


async function callFuture(){
    let futureAnwser = await travel3SecondsIntoTheFuture(2);

    // Do something with results here
    
    return futureAnwser;
}

callFuture()
.then(results => console.log(results));
