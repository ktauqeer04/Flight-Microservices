const { createLogger, format, transports } = require('winston');
const { combine, timestamp, json, colorize } = format;

// Custom format for console logging with colors
const consoleLogFormat = format.combine(
  format.colorize(),
  format.printf(({ level, message, timestamp, label }) => {
    return `${timestamp}: ${message}`;
  })
);

// Create a Winston logger
const logger = createLogger({
  format: combine(colorize(), timestamp({format: 'YYYY-MM-DD HH:mm:ss'}), consoleLogFormat),
  transports: [
    new transports.Console({
      format: consoleLogFormat,
    }),
    new transports.File({ filename: "app.log" }),
  ],
});

module.exports = logger;