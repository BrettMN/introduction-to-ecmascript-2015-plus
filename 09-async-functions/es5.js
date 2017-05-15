function travel3SecondsIntoTheFuture(result, callback) {
    setTimeout(function () {
        callback(result);
    }, 3000);
}

function callFuture(callback) {

    let futureAnwser = travel3SecondsIntoTheFuture(2, callback);

    // Do something with results here
    
    callback(futureAnwser);
}

callFuture(function (results) {
    console.log(results);
});
