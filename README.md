# Icculus


Read The Book

```
'use strict';

const icculus = require('icculus');

const client = icculus({apiKey: API_KEY});

client.latest().then(({response, body}) => {
	console.log(body);

})
```