const { createLogger, format, transports } = require('winston');

// Import mongodb
require('winston-mongodb');

module.exports = createLogger({
transports:[

// File transport
    new transports.File({
    filename: 'logs/server.log',
    format:format.combine(
        format.timestamp({format: 'MMM-DD-YYYY HH:mm:ss'}),
        format.align(),
        format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`),
)}),

// MongoDB transport
    new transports.MongoDB({
        db : 'mongodb://root:example@127.0.0.1:27017/',
        format: format.combine(
        format.timestamp(),
        // Convert logs to a json format
        format.json())
    })]
});