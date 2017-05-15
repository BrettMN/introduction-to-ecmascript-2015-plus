
var messageContainer = {
        message: 'look at me I\'m a message',
        wittySecondProperty: 'funny remark',
        success: false
};

var {message: newMessage, success: succeeded} = messageContainer;

console.log('newMessage');
console.log(newMessage);
console.log('succeeded');
console.log(succeeded);