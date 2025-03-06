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

  async subscribe() {
    console.log("Waiting For Messages!");
    await this.channel.assertQueue(this.queueName);
    await this.channel.bindQueue(
      this.queueName,
      this.exchangeName,
      this.bindingKey
    );

    this.channel.consume(this.queueName, (msg) => {
      if (msg !== null) {
        console.log("Received message:", msg.content.toString());
        this.channel.ack(msg);
      }
    });
  }
}

module.exports = { RabbitMQClient };