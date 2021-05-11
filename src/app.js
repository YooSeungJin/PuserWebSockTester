let Echo = require('laravel-echo')

window.pusher = require('pusher-js');

window.Echo = (host, port, key, channel)=>{
    return new Echo({
    broadcaster: 'pusher',
    key : key,
    wsHost : host,
    wsPort : port,
    forceTLS: false,
    disableStats: true,
}).channel(channel)};


