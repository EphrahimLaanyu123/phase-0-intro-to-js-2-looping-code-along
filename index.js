// Code your solutions in this file
function writeCards(names, event) {
    var messages = [];
  
    for (var i = 0; i < names.length; i++) {
      var message = `Thank you, ${names[i]}, for attending the ${event}!`;
      messages.push(message);
    }
  
    return messages;
  }
  
  // Example usage
  var names = ["Guadalupe", "Ollie", "Aki"];
  var event = "birthday party";
  var thankYouMessages = writeCards(names, event);
  console.log(thankYouMessages);