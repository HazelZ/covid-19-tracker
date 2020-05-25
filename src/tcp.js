const net = require('net');
const server = net.createServer(function(socket){
  socket.on('data',function(data){
    socket.write('hello hazel');
  })
  socket.on('end', function() {
    console.log('disconnected...')
  });
  socket.write('welcome to Node, Hazel')
})

server.listen(8124,function(){
  console.log('server bound...')
})