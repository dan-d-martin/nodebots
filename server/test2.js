	var io = require('socket.io-client');
	var socket = io.connect('localhost', { port: 8080 });

	var name = process.argv[2];
	socket.emit('join', name);

	i = 0;
	dir = 0;
	socket.on('turn', function() {
		if(dir == 0)
			{socket.emit('right');socket.emit('right');}
		else if (dir == 1)
			{socket.emit('down');socket.emit('down');}
		else if (dir == 2)
			{socket.emit('left');socket.emit('left');}
		else if (dir == 3)
			{socket.emit('up');socket.emit('up');}
		if(++i % 5 == 0) {
			dir = Math.floor(Math.random() * 3);
		}
	});
