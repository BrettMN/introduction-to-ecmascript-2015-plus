
var messageContainer = {
        message: 'look at me I\'m a message',
        wittySecondProperty: 'funny remark',
        success: false
};

var newMessage = 'nothing',
    succeeded = false;

console.log('newMessage before');
console.log(newMessage);
console.log('succeeded before');
console.log(succeeded);

({message: newMessage, success: succeeded} = messageContainer);

console.log('newMessage');
console.log(newMessage);
console.log('succeeded');
console.log(succeeded);