const redis=require('redis');
const client=redis.createClient('//redis-10183.c52.us-east-1-4.ec2.cloud.redislabs.com:10183',
                                {password:'9vHwChMs7difCzt5e1RZVyfjqFzVLLzW'});

client.on('ready',()=>{console.log('ready')});
client.on('error',(err)=>{console.log('error '+err)});
client.on('connect',()=>{console.log('connect')});
client.on('end',()=>{console.log('end')});
client.quit();