const logger = require('./logger');

setInterval(() => {
    logger.info("New log...");
}, 10);