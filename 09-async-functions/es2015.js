function travel3SecondsIntoTheFuture(result) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(result);
        }, 3000);
    });
}


function callFuture() {
    return new Promise(resolve => {

        travel3SecondsIntoTheFuture(2)
            .then(results => {

                // Do something with results here

                resolve(results);
            });
    });
}

callFuture()
    .then(results => console.log(results));
