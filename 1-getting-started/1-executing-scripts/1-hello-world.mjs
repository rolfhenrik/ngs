import {createServer} from 'http';

const requestListener = function(req,res){
  res.end('from the request listener');
}

const server = createServer(requestListener);

server.listen(4242, () => {
  console.log('Server is running...');
});

