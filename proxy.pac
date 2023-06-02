var domains = ['openai.com', 'twimg.com'];

function FindProxyForURL(url, host) {
  for (var i= 0; i < domains.length; i++) {
    if (dnsDomainIs(host.toLowerCase(), domains[i])) {
      return "SOCKS 192.168.1.45:1080";
    }
  }

  return "DIRECT";
}
