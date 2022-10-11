import axios from 'axios'

export default function asyncModule({ req }) {

    var host
    if(req!= null)
      host=req.headers.host
    else
      host=location.protocol + '//' + location.host

  var myRegexp = new RegExp("https:\/\/([a-zA-Z0-9]+)", "g");
  var match = myRegexp.exec(host);
  if(match == null || match[1] == "localhost")
    host = "kundea"
  else
     host = match[1]

return axios.get('https://api.dev-cobra.de/v1/auth/config?host=' + host, 
{headers: {"X-Integration-Name": "test", "X-Integration-Provider": "nuxt", "Content-Type": "application/json"},
}).then(response => {
  if(req != null)  
    req.authConfig = response.data
  else
    globalThis.authConfig = response.data
  })
  .catch((error) => {
  });
}
