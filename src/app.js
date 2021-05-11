let Echo = require('laravel-echo')

window.pusher = require('pusher-js');

window.Echo = new Echo({
    broadcaster: 'pusher',
    key : 'test',
    wsHost : 'localhost',
    wsPort : 6001,
    forceTLS: false,
    disableStats: true,
})

window.Echo.channel('test')
.listen('TestEvent', e=>{
    console.log(e);
})

