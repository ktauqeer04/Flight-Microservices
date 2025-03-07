const { RabbitMQClient } = require("./receiver-init");

const connectQueue = async () => {

  let receivedMessages = []; 

  try {
    const Queue = new RabbitMQClient("myExchangeName", "myBindingKey", "myQueue");
    await Queue.initialize();
    const response = await Queue.subscribe((message) => {
      receivedMessages.push(message);
    });
    console.log(receivedMessages.length);
    console.log(receivedMessages);
  } catch (error) {
    console.log("error is ", error);
    throw error;
  }
};

module.exports = {
    connectQueue
}