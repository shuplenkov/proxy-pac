var domains = ['openai.com', 'twimg.com'];

function getDomain(host) {
    host = host.replace(/(https?:\/\/)?(www.)?/i, '');
    host = host.split('.');
    host = host.slice(host.length - 2).join('.');
    if (host.indexOf('/') !== -1) {
        return host.split('/')[0];
    }

    return host;
}

function FindProxyForURL(url, host) {
  var domain = getDomain(host);

  if (domains.indexOf(domain) !== -1) {
    return "HTTPS proxy-ssl.antizapret.prostovpn.org:3143; PROXY proxy-nossl.antizapret.prostovpn.org:29976; DIRECT";
  }

  return "DIRECT";
}
