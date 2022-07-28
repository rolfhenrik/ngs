const http = require('http');

const requestListener = function(req,res){
  res.end('from the event listener');
}

const server = http.createServer(requestListener);

server.listen(4242, () => {
  console.log('Server is running...');
});

