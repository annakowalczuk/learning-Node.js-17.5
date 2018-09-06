function timeFormat(secondsTotal) {
    var days = Math.floor(secondsTotal / 86400);
    var hours = Math.floor((secondsTotal % 86400) / 3600);
    var minutes = Math.floor(((secondsTotal % 86400) % 3600) / 60);
    var seconds = ((secondsTotal % 86400) % 3600) % 60;
    return days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's';
    // process.stdout.write('Uptime: '.green + days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's\n');
};

exports.print = timeFormat;