/**
 * Determine if this application instance is running in production mode
 */
const isThisProduction = () => process.env.NODE_ENV === 'production';

exports.applicationName = 'Setlist';

const port = process.env.PORT || 3000;
exports.port = port;
exports.host = process.env.WEBSITE_HOSTNAME || `localhost:${port}`;

exports.authSecret = process.env.AUTH_SECRET || 'TestingSecr3tz';

exports.sessionMaxAge = 1000*60*20; // 2 minutes
