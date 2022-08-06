const { IP2Location, IPTools } = require("ip2location-nodejs");

let ip2location4 = new IP2Location();
let ip2location6 = new IP2Location();
let tools = new IPTools();

ip2location4.open("./data/IP2LOCATION-LITE-DB11.BIN");
ip2location6.open("./data/IP2LOCATION-LITE-DB11.IPV6.BIN");

function lookup(ip) {
    if(tools.isIPV4(ip)){
        return {
            country: ip2location4.getCountryLong(ip),
            country_short: ip2location4.getCountryShort(ip),
            region: ip2location4.getRegion(ip),
            city:  ip2location4.getCity(ip),
            timezone: ip2location4.getTimeZone(ip),
            zipcode: ip2location4.getZIPCode(ip),
            lat: ip2location4.getLatitude(ip),
            lon: ip2location4.getLongitude(ip),
        }
    } else if (tools.isIPV6(ip)) {
        return {
            country: ip2location6.getCountryLong(ip),
            country_short: ip2location6.getCountryShort(ip),
            region: ip2location6.getRegion(ip),
            city:  ip2location6.getCity(ip),
            timezone: ip2location6.getTimeZone(ip),
            zipcode: ip2location6.getZIPCode(ip),
            lat: ip2location6.getLatitude(ip),
            lon: ip2location6.getLongitude(ip),
        }
    } else {
        return "Invalid IP";
    }
}

module.exports = lookup

function run(){
    console.time("lookup");
    console.log(lookup("88.99.242.106"))
    console.timeEnd("lookup");
}

run()