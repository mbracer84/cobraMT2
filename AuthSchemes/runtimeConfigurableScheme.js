import { OpenIDConnectScheme } from '@nuxtjs/auth-next/dist/runtime.js'

export default class RuntimeConfigurableOpenIDConnectScheme extends OpenIDConnectScheme {
  constructor($auth, options) {

    var authConfig
    if($auth.ctx.req != null)
        authConfig =  $auth.ctx.req.authConfig
      else
        authConfig =  globalThis.authConfig
    
    $auth.options.redirect.login = '/login';
    options.endpoints.configuration=authConfig.oAuth2Url
    options.clientId= authConfig.clientId

    super($auth, options)
  }
}