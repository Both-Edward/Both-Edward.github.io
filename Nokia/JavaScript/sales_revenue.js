// approximate in billion USD, based on shipments * ASP
const salesRevenueData = {
Apple: { // High ASP ~$600-700
2007: 2.4,
2008: 7.5,
2009: 16.5,
2010: 31.4,
2011: 59.0,
2012: 86.0,
2013: 101.3
},
Nokia: { // Lower ASP ~$200
2007: 12.1,
2008: 12.0,
2009: 13.6,
2010: 20.1,
2011: 15.5,
2012: 7.0,
2013: 6.0
},
androidTop3: {
2007: {},
2008: {
HTC: 1.5,
Motorola: 0.6,
Samsung: 0.3
},
2009: {
HTC: 7.4,
Samsung: 1.0,
Motorola: 3.0
},
2010: {
Samsung: 7.2,
HTC: 7.5,
Motorola: 4.2
},
2011: {
Samsung: 28.3,
HTC: 13.0,
Motorola: 12.2
},
2012: {
Samsung: 64.7,
HTC: 9.6,
LG: 7.9
},
2013: {
Samsung: 94.2,
LG: 14.3,
Sony: 11.5
}
}
};