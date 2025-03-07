const { connect } = require("amqplib");

class RabbitMQClient {
  constructor(exchangeName, bindingKey, queueName) {
    this.exchangeName = exchangeName;
    this.bindingKey = bindingKey;
    this.queueName = queueName;
  }

  async initialize() {
    this.connection = await connect('amqp://localhost');
    this.channel = await this.connection.createChannel();
    this.exchange = await this.channel.assertExchange(
      this.exchangeName,
      "direct",
      { durable: false }
    );
  }

  async subscribe(onMessage) {
    console.log("Waiting For Messages!");
    await this.channel.assertQueue(this.queueName);
    await this.channel.bindQueue(
      this.queueName,
      this.exchangeName,
      this.bindingKey
    );

    this.channel.consume(this.queueName, async (msg) => {
      if (msg) {
        // console.log("Received message:", msg.content.toString());
        const message = msg.content.toString();
        await onMessage(message);
        this.channel.ack(msg);
      }
    });
  }

  async getResponse(){

  }

}

module.exports = { RabbitMQClient };