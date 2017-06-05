const path = require('path');
const util = require('util');

util.log(path.basename(__filename));
let dirUploads = path.join(__dirname, 'www', 'files', 'uploads');

util.log(dirUploads);