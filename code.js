var request = require('request')
var form = { message:'gay'};
var token = "insertyourusertokenhere"
var groupId = "groupchatid"
setInterval(()=>{
var okretard = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
  request.patch({
                            headers: {'Authorization': token,'Content-Type':'application/json'},
                            url: `https://discordapp.com/api/v6/channels/${groupId}`,
        body:`{"name":"${okretard}"}`
                        }, function (error, response, body) {
console.log(body)

});
}, 25)