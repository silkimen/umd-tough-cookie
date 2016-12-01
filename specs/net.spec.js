const net = require('../polyfills/net.js');

describe('node module "net" polyfill', () => {
  it('provides "isIP" function', () => {
    expect(net.isIP).toBeDefined();
  });

  it('provides "isIPv4" function', () => {
    expect(net.isIPv4).toBeDefined();
  });

  it('provides "isIPv6" function', () => {
    expect(net.isIPv6).toBeDefined();
  });

  it('matches an IP v4 address correctly', () => {
    expect(net.isIP('192.168.1.1')).toBe(4);
    expect(net.isIPv4('192.168.1.1')).toBe(true);
  });

  it('matches an IP v6 address correctly', () => {
    expect(net.isIP('2001:0db8:85a3:08d3:1319:8a2e:0370:7344')).toBe(6);
    expect(net.isIPv6('2001:0db8:85a3:08d3:1319:8a2e:0370:7344')).toBe(true);
  });

  it('detects invalid IPs correctly', () => {
    expect(net.isIP('256.256.256.256')).toBe(0);
    expect(net.isIPv4('256.256.256.256')).toBe(false);
    expect(net.isIPv6('256.256.256.256')).toBe(false);

    expect(net.isIP('gggg:gggg:gggg:gggg:gggg:gggg:gggg:gggg')).toBe(0);
    expect(net.isIPv4('gggg:gggg:gggg:gggg:gggg:gggg:gggg:gggg')).toBe(false);
    expect(net.isIPv6('gggg:gggg:gggg:gggg:gggg:gggg:gggg:gggg')).toBe(false);
  });

  it('detects valid hostnames as non IP values', () => {
    expect(net.isIP('www.google.de')).toBe(0);
    expect(net.isIPv4('www.google.de')).toBe(false);
    expect(net.isIPv6('www.google.de')).toBe(false);
  });
});
