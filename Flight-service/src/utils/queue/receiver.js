const { RabbitMQClient } = require("./receiver-init");

const connectQueue = async () => {

  // let receivedMessage = [];

  try {
    const Queue = new RabbitMQClient("myExchangeName", "myBindingKey", "myQueue");
    await Queue.initialize();
    await Queue.subscribe();

  } catch (error) {
    console.log("error is ", error);
    throw error;
  }
};

module.exports = {
    connectQueue
}