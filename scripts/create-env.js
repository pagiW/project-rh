const fs = require('fs');

fs.writeFileSync('./.env', `appId=${process.env.appId}\nmapId=${process.env.mapId}\nlinkId=${process.env.linkId}`);