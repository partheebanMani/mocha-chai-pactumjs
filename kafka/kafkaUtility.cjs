const { Kafka, Partitioners } = require('kafkajs')

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['kafka1:9092', 'kafka2:9092'],
  })


const producer = kafka.producer()

await producer.connect()

await producer.send({
    topic:'test-topic',
    messages: [
        { value: 'Hello  kafka user'}
    ]
})

await producer.disconnect()


//consume message 

const consume = kafka.consumer({groupId:'test-group'})

await consume.connect()

await consume.subscribe({topic:'test-topic', fromBeginning:true})

await consume.run({
    eachMessage: async ({ topic, Partition , messages}) =>{
        
    }
})