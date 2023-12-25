## Temperature & humidity logging
original codes from `Github` `arduino-nodejs-plotly-streaming`(https://github.com/Redwoods/arduino-nodejs-plotly-streaming/tree/master)

### Howto
1. Install `nodejs` (from `conda activate web` - macbook pro (R319))
2. `npm install` (package-lock.json)
3. `node data_dht11.js`
4. open `clients_dht11.html` with Chrome web browser


#### ETC.
* missing `Plotly.js`
* `Plotly.js` function: Plotly.plot -> Plotly.newPlot
* `node` `socket.io` version
* plotly [streaming plot](https://plotly.com/javascript/streaming/)
* simple communication [between arduino and node.js](http://john-home.iptime.org:8085/xe/index.php?mid=board_Bpvz97&document_srl=813)
