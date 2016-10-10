/*var api = "http://hop.dev/";*/
var api = "http://www.joelhenry.me/hop/"

angular.module('starter.services', [])

.factory('TimeTable', ['$http', function($http) { 
   var promise = null;
   return function(){
      if (promise){
         return promise;
      }
      else{
         promise = $http.get('http://www.joelhenry.me/hop/');
         return promise; 
      }
   }
}])

.factory('MarkersFactory', function() {
	var Json = [
   {
      "ID": 1,
      "Name":"Macquarie University Station",
      "Color": "#A6192E",
      "Icon" : "white.png",
      "Lat":"-33.7770040000",
      "Lng":"151.1176940000",
      "Paths":[
         {
            "lat":-33.7770040000,
            "lng":151.1176940000
         },
         {
            "lat":-33.7773342629,
            "lng":151.1181608657
         },
         {
            "lat":-33.7755283779,
            "lng":151.1199096660
         },
         {
            "lat":-33.7749620000,
            "lng":151.1191750000
         }
      ]
   },
   {
      "ID": 2,
      "Name":"EMC Building",
      "Color": "#A6192E",
      "Icon" : "white.png",
      "Lat":"-33.7749620000",
      "Lng":"151.1191750000",
      "Paths":[
         {
            "lat":-33.7749620000,
            "lng":151.1191750000
         },
         {
            "lat":-33.77475473414295,
            "lng":151.1189226131363
         },
         {
            "lat":-33.774654405177614,
            "lng":151.11865707444383
         },
         {
            "lat":-33.77466555284622,
            "lng":151.11840762900545
         },
         {
            "lat":-33.77433781078329,
            "lng":151.11789800929262
         },
         {
            "lat":-33.77426646540612,
            "lng":151.11774780558778
         },
         {
            "lat":-33.77425754722981,
            "lng":151.1175520043297
         },
         {
            "lat":-33.77426200631809,
            "lng":151.11741521166994
         },
         {
            "lat":-33.77348166233596,
            "lng":151.11741252946092
         },
         {
            "lat":-33.77345490755913,
            "lng":151.11776121663286
         },
         {
            "lat":-33.7734030000,
            "lng":151.1179410000
         }
      ]
   },
   {
      "ID": 3,
      "Name":"Macquarie University Hospital",
      "Color": "#A6192E",
      "Icon" : "white.png",
      "Lat":"-33.7734030000",
      "Lng":"151.1179410000",
      "Paths":[
         {
            "lat":-33.7734030000,
            "lng":151.1179410000
         },
         {
            "lat":-33.77345490755913,
            "lng":151.11776121663286
         },
         {
            "lat":-33.77348166233596,
            "lng":151.11741252946092
         },
         {
            "lat":-33.772237556374165,
            "lng":151.1173186521454
         },
         {
            "lat":-33.772059188447315,
            "lng":151.11729183005525
         },
         {
            "lat":-33.771947708304474,
            "lng":151.11707725333406
         },
         {
            "lat":-33.77184960565877,
            "lng":151.11703970240785
         },
         {
            "lat":-33.77173366602359,
            "lng":151.11680903243257
         },
         {
            "lat":-33.77179163586079,
            "lng":151.1164563219471
         },
         {
            "lat":-33.771800554293804,
            "lng":151.11589171694948
         }
      ]
   },
   {
      "ID": 4,
      "Name":"MGSM",
      "Color": "#A6192E",
      "Icon" : "white.png",
      "Lat":"-33.7716780000",
      "Lng":"151.1167560000",
      "Paths":[
         {
            "lat":-33.77173366602359,
            "lng":151.11680903243257
         },
         {
            "lat":-33.771613267005606,
            "lng":151.11687206434442
         },
         {
            "lat":-33.77148506416158,
            "lng":151.11682914900018
         },
         {
            "lat":-33.771306694668176,
            "lng":151.11666687535478
         },
         {
            "lat":-33.77096667679276,
            "lng":151.11635305690004
         },
         {
            "lat":-33.77085185077924,
            "lng":151.11653008269502
         },
         {
            "lat":-33.76907927434873,
            "lng":151.11513399290277
         },
         {
            "lat":-33.768798334340474,
            "lng":151.11484431432916
         },
         {
            "lat":-33.76733118822129,
            "lng":151.1127790133877
         },
         {
            "lat":-33.7688690000,
            "lng":151.1111900000
         }
      ]
   },
   {
      "ID": 5,
      "Name":"W19F",
      "Color": "#A6192E",
      "Icon" : "white.png",
      "Lat":"-33.7688690000",
      "Lng":"151.1111900000",
      "Paths":[
         {
            "lat":-33.7688690000,
            "lng":151.1111900000
         },
         {
            "lat":-33.77036913391294,
            "lng":151.10964216994478
         },
         {
            "lat":-33.770538586794714,
            "lng":151.10940613555147
         },
         {
            "lat":-33.77063223166455,
            "lng":151.1091057281418
         },
         {
            "lat":-33.770583179602625,
            "lng":151.10889651583864
         },
         {
            "lat":-33.7705040000,
            "lng":151.1086500000
         }
      ]
   },
   {
      "ID": 6,
      "Name":"MU Village Administration Office",
      "Color": "#A6192E",
      "Icon" : "white.png",
      "Lat":"-33.7705040000",
      "Lng":"151.1086500000",
      "Paths":[
         {
            "lat":-33.7705040000,
            "lng":151.1086500000
         },
         {
            "lat":-33.76782284104904,
            "lng":151.10487856673433
         },
         {
            "lat":-33.768629992862444,
            "lng":151.1041543703003
         },
         {
            "lat":-33.770039145760386,
            "lng":151.10299029158784
         },
         {
            "lat":-33.771680155369815,
            "lng":151.10159017848207
         },
         {
            "lat":-33.771867442511805,
            "lng":151.10165991591646
         },
         {
            "lat":-33.7722890000,
            "lng":151.1016870000
         }
      ]
   },
   {
      "ID": 7,
      "Name":"Dayman Place",
      "Color": "#A6192E",
      "Icon" : "white.png",
      "Lat":"-33.7722890000",
      "Lng":"151.1016870000",
      "Paths":[
         {
            "lat":-33.7722890000,
            "lng":151.1016870000
         },
         {
            "lat":-33.77295102436819,
            "lng":151.1017028312607
         },
         {
            "lat":-33.77509585174621,
            "lng":151.10473372744752
         },
         {
            "lat":-33.77686161527286,
            "lng":151.10722818183137
         },
         {
            "lat":-33.777316427256075,
            "lng":151.10778608130647
         },
         {
            "lat":-33.77745911287083,
            "lng":151.10819377707674
         },
         {
            "lat":-33.77749478423738,
            "lng":151.10853709983064
         },
         {
            "lat":-33.777432359336174,
            "lng":151.1087624053879
         },
         {
            "lat":-33.77717820034013,
            "lng":151.10936858462526
         },
         {
            "lat":-33.77680810782196,
            "lng":151.10938467787935
         },
         {
            "lat":-33.77659407768413,
            "lng":151.10936858462526
         },
         {
            "lat":-33.776518275215416,
            "lng":151.10913255023195
         },
         {
            "lat":-33.77643355472983,
            "lng":151.10893406676485
         },
         {
            "lat":-33.77640680087487,
            "lng":151.1087624053879
         },
         {
            "lat":-33.77643801370483,
            "lng":151.1085478286667
         },
         {
            "lat":-33.7765070000,
            "lng":151.1082610000
         }
      ]
   },
   {
      "ID": 8,
      "Name":"Y3A",
      "Color": "#A6192E",
      "Icon" : "white.png",
      "Lat":"-33.7765070000",
      "Lng":"151.1082610000",
      "Paths":[
         {
            "lat":-33.7765070000,
            "lng":151.1082610000
         },
         {
            "lat":-33.77656955336336,
            "lng":151.10803016232683
         },
         {
            "lat":-33.77653611109644,
            "lng":151.10775925921632
         },
         {
            "lat":-33.77645807908954,
            "lng":151.10756077574922
         },
         {
            "lat":-33.77631762129798,
            "lng":151.10740520762636
         },
         {
            "lat":-33.77611027842286,
            "lng":151.10729791926576
         },
         {
            "lat":-33.775956443062185,
            "lng":151.10712894009782
         },
         {
            "lat":-33.775882869531166,
            "lng":151.10687681245042
         },
         {
            "lat":-33.77589401703993,
            "lng":151.1066005449219
         },
         {
            "lat":-33.77584273848761,
            "lng":151.1063698749466
         },
         {
            "lat":-33.775693361660274,
            "lng":151.1061365227623
         },
         {
            "lat":-33.775138212660956,
            "lng":151.10578515338136
         },
         {
            "lat":-33.775086933656226,
            "lng":151.10573150920106
         },
         {
            "lat":-33.774839456288845,
            "lng":151.10538818644716
         },
         {
            "lat":-33.77468561864608,
            "lng":151.10515751647188
         },
         {
            "lat":-33.774056888017114,
            "lng":151.10582002209856
         },
         {
            "lat":-33.7711495062443,
            "lng":151.10882409619524
         },
         {
            "lat":-33.770895328608276,
            "lng":151.1091084103508
         },
         {
            "lat":-33.771060321194724,
            "lng":151.10941954659654
         },
         {
            "lat":-33.77137692770052,
            "lng":151.10983797120286
         },
         {
            "lat":-33.77179163586079,
            "lng":151.11038782405092
         },
         {
            "lat":-33.773069918695796,
            "lng":151.1121726598128
         },
         {
            "lat":-33.77319477481062,
            "lng":151.11207073587025
         },
         {
            "lat":-33.7734400273636,
            "lng":151.112027820526
         },
         {
            "lat":-33.773618392415685,
            "lng":151.11202245610798
         },
         {
            "lat":-33.7736510000,
            "lng":151.1122920000
         }
      ]
   },
   {
      "ID": 9,
      "Name":"MUSE",
      "Color": "#A6192E",
      "Icon" : "white.png",
      "Lat":"-33.7736510000",
      "Lng":"151.1122920000",
      "Paths":[
         {
            "lat": -33.77178717664394,
            "lng": 151.11037977742387
         },
         {  
            "lat": -33.77278157625758,
            "lng": 151.1093578557892
         },
         {
            "lat": -33.77318958890319,
            "lng": 151.10986747550203
         },
         {
            "lat": -33.77333897009627,
            "lng": 151.11005254792406
         },
         {
            "lat": -33.77339470928069,
            "lng": 151.11007400559618
         },
         {
            "lat": -33.77344375973298,
            "lng": 151.11005254792406
         },
         {
            "lat": -33.7736979298,
            "lng": 151.1097682338
         }
      ]
   },
   {
      "ID": 10,
      "Name":"X8 Car Park",
      "Color": "#A6192E",
      "Icon" : "white.png",
      "Lat":"-33.7736979298",
      "Lng":"151.1097682338",
      "Paths":[
         {
            "lat": -33.7736979298,
            "lng": 151.1097682338
         },
         {
            "lat": -33.773840621450525,
            "lng": 151.10956438588335
         },
         {
            "lat": -33.77395209913035,
            "lng": 151.10942222880556
         },
         {
            "lat": -33.77401006746652,
            "lng": 151.10934712695314
         },
         {
            "lat": -33.7740814130572,
            "lng": 151.10927470730974
         },
         {
            "lat": -33.77418843133184,
            "lng": 151.109140596859
         },
         {
            "lat": -33.77429990855907,
            "lng": 151.10902794408037
         },
         {
            "lat": -33.774438140119386,
            "lng": 151.10886701153947
         },
         {
            "lat": -33.77455407609477,
            "lng": 151.10871680783464
         },
         {
            "lat": -33.77462765076701,
            "lng": 151.10857733296587
         },
         {
            "lat": -33.77468561864608,
            "lng": 151.10845126914217
         },
         {
            "lat": -33.77474581601745,
            "lng": 151.10854246424867
         },
         {
            "lat": -33.77487735827435,
            "lng": 151.1085826973839
         },
         {
            "lat": -33.77525191817064,
            "lng": 151.10869803237154
         },
         {
            "lat": -33.77528313142142, 
            "lng": 151.10895820664598
         },
         {
            "lat": -33.775274213350926,
            "lng": 151.10928007172777
         },
         {
            "lat": -33.77529873804254, 
            "lng": 151.10956438588335
         },
         {
            "lat": -33.77530096755961,
            "lng": 151.10968240308
         },
         {
            "lat": -33.776299785371464,
            "lng": 151.10972263621522
         },
         {
            "lat": -33.77633768671087,
            "lng": 151.10984870003892
         },
         {
            "lat": -33.77640903036309, 
            "lng": 151.11037173079683
         },
         {
            "lat": -33.776484832928475, 
            "lng": 151.11069359587862
         },
         {
            "lat": -33.7766297494109, 
            "lng": 151.11095377015306
         },
         {
            "lat": -33.77685715631989,
             "lng": 151.11125685977174
         },
         {
            "lat": -33.77693741743775, 
            "lng": 151.11144997882081
         },
         {
            "lat": -33.776955253231506, 
            "lng": 151.11160286473466
         },
         {
            "lat": -33.7769620000, 
            "lng": 151.1117990000
         }
      ]
   },
   {
      "ID": 11,
      "Name":"University Avenue",
      "Color": "#A6192E",
      "Icon" : "white.png",
      "Lat":"-33.7769620000",
      "Lng":"151.1117990000",
      "Paths":[
         {
            "lat": -33.7769620000, 
            "lng": 151.1117990000
         },
         {
            "lat": -33.776977547968485,
            "lng": 151.11464180754854
         },
         {
            "lat": -33.77701767848042,
            "lng": 151.11495294379426
         },
         {
            "lat": -33.77703105531354,
            "lng": 151.11541964816286
         },
         {
            "lat": -33.77672784658294,
            "lng": 151.1171040754242
         },
         {
            "lat": -33.77672784658294,
            "lng": 151.11729719447328
         },
         {
            "lat": -33.7770040000,
            "lng": 151.1176940000
         }
      ]
   },
];

return {
	locations: function(){
		return Json;
	}
}

});
