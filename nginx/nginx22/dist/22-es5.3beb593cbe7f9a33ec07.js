!function(){function t(e,i){return(t=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(e,i)}function e(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var r,c=n(t);if(e){var s=n(this).constructor;r=Reflect.construct(c,arguments,s)}else r=c.apply(this,arguments);return i(this,r)}}function i(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function n(t){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function s(t,e,i){return e&&c(t.prototype,e),i&&c(t,i),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{E3nD:function(i,n,c){"use strict";c.d(n,"a",function(){return ft});var o,a=c("Nach"),l=c("CwUn"),b=c("fXoL"),d=c("ReGW"),p=c("ofXK"),u=c("tyNb"),g=c("NLkC"),f=c("sCq/"),P=c("Q8Cd"),m=c("Ji6n"),h=c("3Pt+"),D=((o=function(){function t(){r(this,t)}return s(t,[{key:"transform",value:function(t,e,i){return t.replace(new RegExp(e,"g"),i)}}]),t}()).\u0275fac=function(t){return new(t||o)},o.\u0275pipe=b.Rb({name:"revreplaceSubstring",type:o,pure:!0}),o);function T(t,e){if(1&t){var i=b.Zb();b.Yb(0,"div"),b.Yb(1,"app-print-access-header",10),b.ic("onselectedLetterhead",function(t){return b.Lc(i),b.mc().onselectedLetterhead(t)})("onselectedLanguage",function(t){return b.Lc(i),b.mc().onselectedLanguage(t)})("onselectedMedicine",function(t){return b.Lc(i),b.mc().onselectedMedicine(t)})("OnselectedStartDate",function(t){return b.Lc(i),b.mc().OnselectedStartDate(t)})("OnChangeMainComplaint",function(t){return b.Lc(i),b.mc().onChangeMainComplaint(t)})("OnChangeNote",function(t){return b.Lc(i),b.mc().onChangeNote(t)})("onPrint",function(t){return b.Lc(i),b.mc().onPrint(t)}),b.Xb(),b.Xb()}if(2&t){var n=b.mc();b.Fb(1),b.tc("IsLetterhead",n.IsLetterhead)("IsOnlyLanguage",!0)("SelectLanguage",n.Language)("IsMedicine",n.IsMedicine)("IsMainComplaint",n.IsMainComplaint)("IsNote",n.IsNote)("lstPrintDate",n.lstPrintDate)("SelectedStartDate",n.SelectedStartDate)("IsIPD",!0)("IsPrint",!0)}}var Y=function(){return{standalone:!0}};function v(t,e){if(1&t){var i=b.Zb();b.Yb(0,"td"),b.Yb(1,"p-checkbox",14),b.ic("onChange",function(t){b.Lc(i);var n=e.$implicit;return b.mc(2).ShowNote(n.id,t)})("ngModelChange",function(t){return e.$implicit.code=t}),b.Xb(),b.Yb(2,"label",15),b.Uc(3),b.Xb(),b.Xb()}if(2&t){var n=e.$implicit;b.Fb(1),b.tc("ngModelOptions",b.yc(4,Y))("ngModel",n.code)("binary",!0),b.Fb(2),b.Vc(n.name)}}function X(t,e){if(1&t&&(b.Yb(0,"div",6),b.Yb(1,"table",11),b.Yb(2,"tbody"),b.Yb(3,"tr"),b.Sc(4,v,4,5,"td",12),b.Xb(),b.Xb(),b.Xb(),b.Yb(5,"p",13),b.Uc(6),b.Xb(),b.Xb()),2&t){var i=b.mc();b.Fb(4),b.tc("ngForOf",i.stlstNoteList),b.Fb(2),b.Vc(i.SelectedNote)}}function S(t,e){if(1&t&&(b.Yb(0,"td",24),b.Yb(1,"strong"),b.Uc(2,"Main Complaints :"),b.Xb(),b.Tb(3,"br"),b.Tb(4,"div",25),b.Xb()),2&t){var i=b.mc(2);b.Fb(4),b.tc("innerHTML",i.PrintPrescriptionDTO.Diagnosis,b.Mc)}}function O(t,e){if(1&t&&(b.Yb(0,"td",26),b.Yb(1,"strong"),b.Uc(2,"Diagnosis :"),b.Xb(),b.Tb(3,"br"),b.Yb(4,"span",27),b.Uc(5),b.Xb(),b.Xb()),2&t){var i=b.mc(2);b.Fb(5),b.Vc(i.diseases)}}function I(t,e){if(1&t&&(b.Yb(0,"td",28),b.Yb(1,"strong"),b.Uc(2,"Prescribed Pathology Test :"),b.Xb(),b.Tb(3,"br"),b.Tb(4,"div",29),b.Xb()),2&t){var i=b.mc(2);b.Fb(4),b.tc("innerHTML",i.PrintPrescriptionDTO.PrescPathTest,b.Mc)}}function M(t,e){if(1&t&&(b.Yb(0,"td",26),b.Yb(1,"strong"),b.Uc(2,"Prescribed Radiology Test :"),b.Xb(),b.Tb(3,"br"),b.Tb(4,"div",29),b.Xb()),2&t){var i=b.mc(2);b.Fb(4),b.tc("innerHTML",i.PrintPrescriptionDTO.PrescRadiolTest,b.Mc)}}function y(t,e){if(1&t&&(b.Yb(0,"tr"),b.Yb(1,"td",32),b.Uc(2),b.nc(3,"date"),b.Xb(),b.Yb(4,"td",33),b.Uc(5),b.Xb(),b.Yb(6,"td",33),b.Uc(7),b.Xb(),b.Yb(8,"td",33),b.Uc(9),b.Xb(),b.Yb(10,"td",33),b.Uc(11),b.Xb(),b.Yb(12,"td",33),b.Uc(13),b.Xb(),b.Yb(14,"td",33),b.Uc(15),b.Xb(),b.Yb(16,"td",33),b.Uc(17),b.Xb(),b.Yb(18,"td",33),b.Uc(19),b.Xb(),b.Yb(20,"td",33),b.Uc(21),b.Xb(),b.Yb(22,"td",33),b.Uc(23),b.Xb(),b.Xb()),2&t){var i=e.$implicit,n=b.mc(3);b.Fb(2),b.Wc(" ",b.pc(3,11,i.CaptureDate,n.customDateFormat.DEF_DATE_TIME),""),b.Fb(3),b.Vc(i.bp),b.Fb(2),b.Vc(i.pr),b.Fb(2),b.Vc(i.respiration),b.Fb(2),b.Vc(i.temp),b.Fb(2),b.Vc(i.height),b.Fb(2),b.Vc(i.weight),b.Fb(2),b.Vc(i.FBS),b.Fb(2),b.Vc(i.PPBS),b.Fb(2),b.Vc(i.RBS),b.Fb(2),b.Vc(i.BMI)}}function F(t,e){if(1&t&&(b.Yb(0,"div",22),b.Yb(1,"table",16),b.Yb(2,"thead",30),b.Yb(3,"tr"),b.Yb(4,"td",31),b.Uc(5,"Vital Data"),b.Xb(),b.Xb(),b.Yb(6,"tr"),b.Yb(7,"th",32),b.Yb(8,"strong"),b.Uc(9,"Date"),b.Xb(),b.Xb(),b.Yb(10,"th",33),b.Yb(11,"strong"),b.Uc(12,"BP"),b.Xb(),b.Tb(13,"br"),b.Yb(14,"span",34),b.Uc(15,"(mmHg)"),b.Xb(),b.Xb(),b.Yb(16,"th",33),b.Yb(17,"strong"),b.Uc(18,"Pulse Rate"),b.Xb(),b.Tb(19,"br"),b.Yb(20,"span",34),b.Uc(21,"(bpm)"),b.Xb(),b.Xb(),b.Yb(22,"th",33),b.Yb(23,"strong"),b.Uc(24,"Respiration"),b.Xb(),b.Tb(25,"br"),b.Yb(26,"span",34),b.Uc(27,"(bpm)"),b.Xb(),b.Xb(),b.Yb(28,"th",33),b.Yb(29,"strong"),b.Uc(30,"Temperature"),b.Xb(),b.Tb(31,"br"),b.Yb(32,"span",34),b.Uc(33,"(\xb0F)"),b.Xb(),b.Xb(),b.Yb(34,"th",33),b.Yb(35,"strong"),b.Uc(36,"Height"),b.Xb(),b.Tb(37,"br"),b.Yb(38,"span",34),b.Uc(39,"(cms.)"),b.Xb(),b.Xb(),b.Yb(40,"th",33),b.Yb(41,"strong"),b.Uc(42,"Weight"),b.Xb(),b.Tb(43,"br"),b.Yb(44,"span",34),b.Uc(45,"(kg.)"),b.Xb(),b.Xb(),b.Yb(46,"th",33),b.Yb(47,"strong"),b.Uc(48,"FBS"),b.Xb(),b.Tb(49,"br"),b.Yb(50,"span",34),b.Uc(51,"(mg/dl)"),b.Xb(),b.Xb(),b.Yb(52,"th",33),b.Yb(53,"strong"),b.Uc(54,"PPBS"),b.Xb(),b.Tb(55,"br"),b.Yb(56,"span",34),b.Uc(57,"(mg/dl)"),b.Xb(),b.Xb(),b.Yb(58,"th",33),b.Yb(59,"strong"),b.Uc(60,"RBS"),b.Xb(),b.Tb(61,"br"),b.Yb(62,"span",34),b.Uc(63,"(mg/dl)"),b.Xb(),b.Xb(),b.Yb(64,"th",33),b.Yb(65,"strong"),b.Uc(66,"BMI"),b.Xb(),b.Tb(67,"br"),b.Yb(68,"span",34),b.Uc(69,"(kg/m\xb2)"),b.Xb(),b.Xb(),b.Xb(),b.Xb(),b.Yb(70,"tbody"),b.Sc(71,y,24,14,"tr",12),b.Xb(),b.Xb(),b.Xb()),2&t){var i=b.mc(2);b.Fb(71),b.tc("ngForOf",i.PrintPrescriptionDTO.lstPrescriptionPrintVital)}}var w=function(t){return{width:t}};function L(t,e){if(1&t&&(b.Yb(0,"th",38),b.Tb(1,"span",39),b.Tb(2,"span",39),b.Xb()),2&t){var i=e.$implicit;b.tc("ngStyle",b.zc(3,w,"Date"==i.field?"10%":"auto")),b.Fb(1),b.tc("innerHTML",i.header,b.Mc),b.Fb(1),b.tc("innerHTML",""==i.OtherDetails||null==i.OtherDetails||null==i.OtherDetails?"":"<br>"+i.OtherDetails,b.Mc)}}var U=function(t){return{width:t,"word-wrap":"break-word"}};function k(t,e){if(1&t&&(b.Yb(0,"td",38),b.Uc(1),b.nc(2,"revreplaceSubstring"),b.Xb()),2&t){var i=e.$implicit,n=b.mc().$implicit;b.tc("ngStyle",b.zc(6,U,"Date"==i.fieldId?"10%":"auto")),b.Fb(1),b.Wc(" ","Date"==i.field||null==n[i.field]?n[i.field]:b.qc(2,2,"#"+n[i.field],"#.*?[^,]~",", ").slice(1)," ")}}function R(t,e){if(1&t&&(b.Yb(0,"tr"),b.Sc(1,k,3,8,"td",37),b.Xb()),2&t){var i=b.mc(3);b.Fb(1),b.tc("ngForOf",i.lstTreatHead)}}function x(t,e){if(1&t&&(b.Yb(0,"div",22),b.Yb(1,"table",35),b.Yb(2,"thead",30),b.Yb(3,"tr"),b.Yb(4,"td",36),b.Uc(5," Treatment"),b.Xb(),b.Xb(),b.Yb(6,"tr"),b.Sc(7,L,3,5,"th",37),b.Xb(),b.Xb(),b.Yb(8,"tbody"),b.Sc(9,R,2,1,"tr",12),b.Xb(),b.Xb(),b.Xb()),2&t){var i=b.mc(2);b.Fb(4),b.Gb("colspan",null==i.lstTreatHead?null:i.lstTreatHead.length),b.Fb(3),b.tc("ngForOf",i.lstTreatHead),b.Fb(2),b.tc("ngForOf",i.lstTreatmentList)}}function N(t,e){if(1&t&&(b.Yb(0,"tr"),b.Yb(1,"td",40),b.Yb(2,"strong"),b.Uc(3," Treatment Note : "),b.Xb(),b.Yb(4,"span"),b.Uc(5),b.Xb(),b.Xb(),b.Xb()),2&t){var i=b.mc(2);b.Fb(5),b.Vc(i.PrintPrescriptionDTO.TreatmentRemarks)}}function C(t,e){if(1&t&&(b.Yb(0,"tr"),b.Yb(1,"td",40),b.Yb(2,"strong"),b.Uc(3," Refer To : "),b.Yb(4,"span"),b.Uc(5),b.Xb(),b.Xb(),b.Xb(),b.Xb()),2&t){var i=b.mc(2);b.Fb(5),b.Vc(i.PrintPrescriptionDTO.ReferTreatment)}}function H(t,e){if(1&t&&(b.Yb(0,"th",38),b.Uc(1),b.Tb(2,"span",39),b.Xb()),2&t){var i=e.$implicit;b.tc("ngStyle",b.zc(3,w,"Date"==i.field?"10%":"11%")),b.Fb(1),b.Wc(" ",i.header," "),b.Fb(1),b.tc("innerHTML",""==i.OtherDetails||null==i.OtherDetails||null==i.OtherDetails?"":"<br>"+i.OtherDetails,b.Mc)}}function B(t,e){if(1&t&&(b.Yb(0,"td",38),b.Uc(1),b.nc(2,"revreplaceSubstring"),b.Xb()),2&t){var i=e.$implicit,n=b.mc().$implicit;b.tc("ngStyle",b.zc(6,U,"Date"==i.field?"10%":"11%")),b.Fb(1),b.Wc(" ","Date"==i.field||null==n[i.field]?n[i.field]:b.qc(2,2,"#"+n[i.field],"#.*?[^,]~",", ").slice(1)," ")}}function V(t,e){if(1&t&&(b.Yb(0,"tr"),b.Sc(1,B,3,8,"td",37),b.Xb()),2&t){var i=b.mc(3);b.Fb(1),b.tc("ngForOf",i.lstDietHead)}}function j(t,e){if(1&t&&(b.Yb(0,"tr"),b.Yb(1,"td",41),b.Yb(2,"strong"),b.Uc(3," Special Diet Instructions : "),b.Xb(),b.Yb(4,"span"),b.Uc(5),b.Xb(),b.Xb(),b.Xb()),2&t){var i=b.mc(3);b.Fb(1),b.Gb("colspan",null==i.lstDietHead?null:i.lstDietHead.length),b.Fb(4),b.Vc(i.PrintPrescriptionDTO.DietRemarks)}}function _(t,e){if(1&t&&(b.Yb(0,"div",22),b.Yb(1,"table",16),b.Yb(2,"thead",30),b.Yb(3,"tr"),b.Yb(4,"td",36),b.Uc(5," Diet"),b.Xb(),b.Xb(),b.Yb(6,"tr"),b.Sc(7,H,3,5,"th",37),b.Xb(),b.Xb(),b.Yb(8,"tbody"),b.Sc(9,V,2,1,"tr",12),b.Sc(10,j,6,2,"tr",1),b.Xb(),b.Xb(),b.Xb()),2&t){var i=b.mc(2);b.Fb(4),b.Gb("colspan",null==i.lstDietHead?null:i.lstDietHead.length),b.Fb(3),b.tc("ngForOf",i.lstDietHead),b.Fb(2),b.tc("ngForOf",i.lstDietList),b.Fb(1),b.tc("ngIf",null!=i.PrintPrescriptionDTO.DietRemarks&&null!=i.PrintPrescriptionDTO.DietRemarks&&""!=i.PrintPrescriptionDTO.DietRemarks)}}function A(t,e){1&t&&(b.Yb(0,"li",44),b.Uc(1,"Treatment Section: Shift- 1: (9:00AM / 2:30PM), Shift-2: (10:00Am\xa0/\xa03:30PM)"),b.Xb())}function G(t,e){if(1&t&&(b.Yb(0,"div",22),b.Yb(1,"div",42),b.Uc(2," Note"),b.Xb(),b.Yb(3,"ul"),b.Sc(4,A,2,0,"li",43),b.Yb(5,"li"),b.Uc(6,"Health Seeker must be reached treatment centre at given times. \u0938\u094d\u0935\u093e\u0938\u094d\u0925\u094d\u092f \u0938\u093e\u0927\u0915 \u0915\u094b \u0928\u093f\u0936\u094d\u091a\u093f\u0924 \u0938\u092e\u092f \u092a\u0930 \u0909\u092a\u091a\u093e\u0930 \u0915\u0947\u0902\u0926\u094d\u0930 \u092a\u0930 \u0905\u0935\u0936\u094d\u092f \u092a\u0939\u0941\u0902\u091a\u0928\u093e \u091a\u093e\u0939\u093f\u090f \u0964 "),b.Xb(),b.Yb(7,"li"),b.Uc(8,"Discharge Summary (Discharge Ticket) is mandatory for all the health seekers. All the health seekers must have to get discharge ticket from their concerned doctor, one day before from their discharge date (Date of Departure). You will not be check out from the room without the discharge ticket. \u0921\u093f\u0938\u094d\u091a\u093e\u0930\u094d\u091c \u0938\u092e\u0930\u0940 (\u0921\u093f\u0938\u094d\u091a\u093e\u0930\u094d\u091c \u091f\u093f\u0915\u091f) \u0938\u092d\u0940 \u0938\u094d\u0935\u093e\u0938\u094d\u0925\u094d\u092f \u0938\u093e\u0927\u0915\u094b \u0915\u0947 \u0932\u093f\u090f \u0905\u0928\u093f\u0935\u093e\u0930\u094d\u092f \u0939\u0948\u0964 \u0938\u092d\u0940 \u0938\u094d\u0935\u093e\u0938\u094d\u0925\u094d\u092f \u0938\u093e\u0927\u0915\u094b \u0915\u094b \u0921\u093f\u0938\u094d\u091a\u093e\u0930\u094d\u091c \u0915\u0940 \u0924\u093e\u0930\u0940\u0916 (\u092a\u094d\u0930\u0938\u094d\u0925\u093e\u0928 \u0915\u0930\u0928\u0947 \u0915\u0940 \u0921\u0947\u091f) \u0938\u0947 \u090f\u0915 \u0926\u093f\u0928 \u092a\u0939\u0932\u0947 \u0905\u092a\u0928\u0947 \u0938\u0902\u092c\u0902\u0927\u093f\u0924 \u091a\u093f\u0915\u093f\u0924\u094d\u0938\u0915 \u0938\u0947 \u0921\u093f\u0938\u094d\u091a\u093e\u0930\u094d\u091c \u091f\u093f\u0915\u091f \u092a\u094d\u0930\u093e\u092a\u094d\u0924 \u0915\u0930\u0928\u093e \u0939\u094b\u0917\u093e\u0964 \u0921\u093f\u0938\u094d\u091a\u093e\u0930\u094d\u091c \u091f\u093f\u0915\u091f \u0915\u0947 \u092c\u093f\u0928\u093e \u0906\u092a\u0915\u094b \u0915\u092e\u0930\u0947 \u0938\u0947 \u091a\u0947\u0915 \u0906\u0909\u091f \u0928\u0939\u0940\u0902 \u0915\u093f\u092f\u093e \u091c\u093e\u090f\u0917\u093e\u0964 "),b.Xb(),b.Yb(9,"li"),b.Uc(10,"It is compulsory to attend yog bhavan sessions both in morning(5.00AM to 7:30AM) and evening (6.00PM to 7.30PM). \u092f\u094b\u0917 \u092d\u0935\u0928 \u092e\u0947\u0902 \u0939\u094b\u0928\u0947 \u0935\u093e\u0932\u0940 \u092f\u094b\u0917 \u0925\u0947\u0930\u0947\u092a\u0940 \u091a\u093f\u0915\u093f\u0924\u094d\u0938\u093e \u092e\u0947\u0902 \u0926\u094b\u0928\u094b\u0902 \u0938\u092e\u092f (\u0938\u0941\u092c\u0939 5.00 \u0938\u0947 7:30 \u092c\u091c\u0947 \u090f\u0935\u0902 \u0936\u093e\u092e 6.00 \u0938\u0947 7.30 \u092c\u091c\u0947 \u0924\u0915) \u0909\u092a\u0938\u094d\u0925\u093f\u0924 \u0939\u094b\u0928\u093e \u0905\u0928\u093f\u0935\u093e\u0930\u094d\u092f \u0939\u0948\u0964"),b.Xb(),b.Yb(11,"li"),b.Uc(12,"Diet prescribed in the form of therapy depending upon individual Health Seeker\u2019s clinical condition should be followed strictly during their inpatient\u2019s stay without making any humble request to their concerned consultant doctor. \u091a\u093f\u0915\u093f\u0924\u094d\u0938\u093e \u0915\u0947 \u0930\u0942\u092a \u092e\u0947\u0902 \u0928\u093f\u0930\u094d\u0927\u093e\u0930\u093f\u0924 \u0906\u0939\u093e\u0930, \u092a\u094d\u0930\u0924\u094d\u092f\u0947\u0915 (\u0935\u094d\u092f\u0915\u094d\u0924\u093f\u0917\u0924) \u0938\u094d\u0935\u093e\u0938\u094d\u0925\u094d\u092f \u0938\u093e\u0927\u0915 \u0915\u0940 \u0928\u0948\u0926\u093e\u0928\u093f\u0915 \u0938\u094d\u0925\u093f\u0924\u093f \u092a\u0930 \u0928\u093f\u0930\u094d\u092d\u0930 \u0915\u0930\u0924\u093e \u0939\u0948, \u0907\u0938\u0932\u093f\u090f \u0905\u092a\u0928\u0947 \u0938\u0902\u092c\u0902\u0927\u093f\u0924 \u0938\u0932\u093e\u0939\u0915\u093e\u0930 \u0921\u0949\u0915\u094d\u091f\u0930 \u0938\u0947 \u0915\u094b\u0908 \u0935\u093f\u0928\u092e\u094d\u0930 \u0905\u0928\u0941\u0930\u094b\u0927 \u0915\u093f\u090f \u092c\u093f\u0928\u093e \u0938\u092d\u0940 \u092d\u0930\u094d\u0924\u0940 \u0938\u094d\u0935\u093e\u0938\u094d\u0925\u094d\u092f \u0938\u093e\u0927\u0915\u094b\u0902 \u0915\u094b \u0930\u0939\u0928\u0947 \u0915\u0947 \u0926\u094c\u0930\u093e\u0928 \u0907\u0938 \u0928\u093f\u0930\u094d\u0927\u093e\u0930\u093f\u0924 \u0906\u0939\u093e\u0930 \u0915\u093e \u0938\u0916\u094d\u0924\u0940 \u0938\u0947 \u092a\u093e\u0932\u0928 \u0915\u093f\u092f\u093e \u091c\u093e\u0928\u093e \u091a\u093e\u0939\u093f\u090f I "),b.Xb(),b.Xb(),b.Xb()),2&t){var i=b.mc(2);b.Fb(4),b.tc("ngIf","YGM"==(null==i.lsobjClinicMaster?null:i.lsobjClinicMaster.ShortCode))}}function z(t,e){if(1&t&&(b.Yb(0,"div",2),b.Yb(1,"div",6),b.Yb(2,"table",16),b.Yb(3,"tbody"),b.Yb(4,"tr",17),b.Sc(5,S,5,1,"td",18),b.Sc(6,O,6,1,"td",19),b.Sc(7,I,5,1,"td",20),b.Sc(8,M,5,1,"td",19),b.Xb(),b.Xb(),b.Xb(),b.Xb(),b.Sc(9,F,72,1,"div",21),b.Sc(10,x,10,3,"div",21),b.Yb(11,"div",22),b.Yb(12,"table"),b.Yb(13,"tbody"),b.Sc(14,N,6,1,"tr",1),b.Sc(15,C,6,1,"tr",1),b.Yb(16,"tr"),b.Yb(17,"td",23),b.Yb(18,"strong"),b.Uc(19," Remark :"),b.Xb(),b.Xb(),b.Xb(),b.Xb(),b.Xb(),b.Xb(),b.Sc(20,_,11,4,"div",21),b.Sc(21,G,13,1,"div",21),b.Xb()),2&t){var i=b.mc();b.Fb(5),b.tc("ngIf",i.IsMainComplaint&&null!=i.PrintPrescriptionDTO.Diagnosis&&null!=i.PrintPrescriptionDTO.Diagnosis&&""!=i.PrintPrescriptionDTO.Diagnosis),b.Fb(1),b.tc("ngIf",null!=i.diseases&&null!=i.diseases&&""!=i.diseases),b.Fb(1),b.tc("ngIf",null!=i.PrintPrescriptionDTO.PrescPathTest&&null!=i.PrintPrescriptionDTO.PrescPathTest&&""!=i.PrintPrescriptionDTO.PrescPathTest),b.Fb(1),b.tc("ngIf",null!=i.PrintPrescriptionDTO.PrescRadiolTest&&null!=i.PrintPrescriptionDTO.PrescRadiolTest&&""!=i.PrintPrescriptionDTO.PrescRadiolTest),b.Fb(1),b.tc("ngIf",null!=i.PrintPrescriptionDTO.lstPrescriptionPrintVital&&null!=i.PrintPrescriptionDTO.lstPrescriptionPrintVital&&(null==i.PrintPrescriptionDTO.lstPrescriptionPrintVital?null:i.PrintPrescriptionDTO.lstPrescriptionPrintVital.length)>0),b.Fb(1),b.tc("ngIf",(null==i.lstTreatmentList?null:i.lstTreatmentList.length)>0&&("treatment"==i.IsMedicine||"all"==i.IsMedicine||"withoutmedicine"==i.IsMedicine)),b.Fb(4),b.tc("ngIf",null!=i.PrintPrescriptionDTO.TreatmentRemarks&&null!=i.PrintPrescriptionDTO.TreatmentRemarks&&""!=i.PrintPrescriptionDTO.TreatmentRemarks),b.Fb(1),b.tc("ngIf",null!=i.PrintPrescriptionDTO.ReferTreatment&&null!=i.PrintPrescriptionDTO.ReferTreatment&&""!=i.PrintPrescriptionDTO.ReferTreatment),b.Fb(5),b.tc("ngIf",(null==i.lstDietList?null:i.lstDietList.length)>0&&("diet"==i.IsMedicine||"all"==i.IsMedicine||"withoutmedicine"==i.IsMedicine)),b.Fb(1),b.tc("ngIf",i.IsNote)}}function E(t,e){1&t&&b.Tb(0,"div",51)}function W(t,e){if(1&t&&(b.Yb(0,"div",52),b.Tb(1,"app-print-header",3),b.Xb()),2&t){var i=b.mc(2);b.Fb(1),b.tc("IsPrescription",!0)("slotBookingId",i.slotBookingId)("IsLetterhead",i.IsLetterhead)}}function J(t,e){if(1&t&&(b.Yb(0,"tr"),b.Yb(1,"td",53),b.Yb(2,"strong"),b.Uc(3,"Main Complaints :"),b.Xb(),b.Tb(4,"br"),b.Tb(5,"div",25),b.Xb(),b.Xb()),2&t){var i=b.mc(2);b.Fb(5),b.tc("innerHTML",i.PrintPrescriptionDTO.Diagnosis,b.Mc)}}function q(t,e){if(1&t&&(b.Yb(0,"tr"),b.Yb(1,"td",53),b.Yb(2,"strong"),b.Uc(3,"Diagnosis :"),b.Xb(),b.Tb(4,"br"),b.Yb(5,"span",27),b.Uc(6),b.Xb(),b.Xb(),b.Xb()),2&t){var i=b.mc(2);b.Fb(6),b.Vc(i.diseases)}}function Q(t,e){if(1&t&&(b.Yb(0,"tr"),b.Yb(1,"td",53),b.Yb(2,"strong"),b.Uc(3,"Prescribed Pathology Test :"),b.Xb(),b.Tb(4,"br"),b.Tb(5,"div",29),b.Xb(),b.Xb()),2&t){var i=b.mc(2);b.Fb(5),b.tc("innerHTML",i.PrintPrescriptionDTO.PrescPathTest,b.Mc)}}function K(t,e){if(1&t&&(b.Yb(0,"tr"),b.Yb(1,"td",53),b.Yb(2,"strong"),b.Uc(3,"Prescribed Radiology Test :"),b.Xb(),b.Tb(4,"br"),b.Tb(5,"div",29),b.Xb(),b.Xb()),2&t){var i=b.mc(2);b.Fb(5),b.tc("innerHTML",i.PrintPrescriptionDTO.PrescRadiolTest,b.Mc)}}function Z(t,e){if(1&t&&(b.Yb(0,"tr"),b.Yb(1,"td",53),b.Yb(2,"strong"),b.Uc(3,"Remarks :"),b.Xb(),b.Tb(4,"br"),b.Tb(5,"div",29),b.Xb(),b.Xb()),2&t){var i=b.mc(2);b.Fb(5),b.tc("innerHTML",i.PrintPrescriptionDTO.DoctorRemarks,b.Mc)}}function tt(t,e){if(1&t&&(b.Yb(0,"td",62),b.Yb(1,"Span"),b.Uc(2),b.Xb(),b.Xb()),2&t){var i=b.mc().$implicit;b.tc("rowSpan",i.rowspan),b.Fb(2),b.Wc("(",i.Rx,")")}}function et(t,e){if(1&t&&(b.Yb(0,"label"),b.Yb(1,"b"),b.Uc(2,"Notes:"),b.Xb(),b.Uc(3),b.Xb()),2&t){var i=b.mc(2).$implicit;b.Fb(3),b.Wc(" ",i.MedcineNote,"")}}function it(t,e){if(1&t&&(b.Yb(0,"td",63),b.Uc(1),b.Tb(2,"br"),b.Sc(3,et,4,1,"label",1),b.Xb()),2&t){var i=b.mc().$implicit;b.Hb(i.GroupNumber>1&&i.rowgroup?"top-boarder-td":""),b.tc("rowSpan",i.rowspan),b.Fb(1),b.Wc(" ",i.MOADescription," "),b.Fb(2),b.tc("ngIf",i.MedcineNote&&""!=i.MedcineNote)}}function nt(t,e){if(1&t&&(b.Yb(0,"tr"),b.Sc(1,tt,3,2,"td",59),b.Yb(2,"td",60),b.Uc(3),b.Xb(),b.Yb(4,"td",57),b.Uc(5),b.Xb(),b.Sc(6,it,4,6,"td",61),b.Xb()),2&t){var i=e.$implicit;b.Fb(1),b.tc("ngIf",i.rowgroup),b.Fb(1),b.Hb(i.GroupNumber>1&&i.rowgroup?"top-boarder-td":""),b.Fb(1),b.Wc(" ",i.MasterName,""),b.Fb(1),b.Hb(i.GroupNumber>1&&i.rowgroup?"top-boarder-td":""),b.Fb(1),b.Wc(" ",i.Qty,""),b.Fb(1),b.tc("ngIf",i.rowgroup)}}function rt(t,e){if(1&t&&(b.Yb(0,"div",22),b.Yb(1,"table",35),b.Yb(2,"thead",30),b.Yb(3,"tr"),b.Yb(4,"td",36),b.Uc(5," Medicine "),b.Xb(),b.Xb(),b.Yb(6,"tr"),b.Tb(7,"th",55),b.Yb(8,"th",56),b.Yb(9,"strong"),b.Uc(10,"Name"),b.Xb(),b.Xb(),b.Yb(11,"th",57),b.Yb(12,"strong"),b.Uc(13,"Qty"),b.Xb(),b.Xb(),b.Yb(14,"th",58),b.Yb(15,"strong"),b.Uc(16,"MOA"),b.Xb(),b.Xb(),b.Xb(),b.Xb(),b.Yb(17,"tbody"),b.Sc(18,nt,7,10,"tr",12),b.Xb(),b.Xb(),b.Xb()),2&t){var i=b.mc(3);b.Fb(4),b.Gb("colspan",4),b.Fb(14),b.tc("ngForOf",i.PrintPrescriptionDTO.lstSuggestedPrintMedicine)}}function ct(t,e){if(1&t&&(b.Yb(0,"div",6),b.Yb(1,"table",64),b.Yb(2,"tr",65),b.Yb(3,"td",66),b.Yb(4,"span"),b.Yb(5,"strong"),b.Uc(6,"Med Remarks : "),b.Xb(),b.Tb(7,"span",39),b.Xb(),b.Xb(),b.Xb(),b.Xb(),b.Xb()),2&t){var i=b.mc(3);b.Fb(7),b.tc("innerHTML",i.PrintPrescriptionDTO.MedicineRemarks,b.Mc)}}function st(t,e){if(1&t&&(b.Yb(0,"div",54),b.Sc(1,rt,19,2,"div",21),b.Sc(2,ct,8,1,"div",4),b.Xb()),2&t){var i=b.mc(2);b.Fb(1),b.tc("ngIf",null!=i.PrintPrescriptionDTO.lstSuggestedPrintMedicine&&null!=i.PrintPrescriptionDTO.lstSuggestedPrintMedicine&&(null==i.PrintPrescriptionDTO.lstSuggestedPrintMedicine?null:i.PrintPrescriptionDTO.lstSuggestedPrintMedicine.length)>0),b.Fb(1),b.tc("ngIf",null!=i.PrintPrescriptionDTO.MedicineRemarks&&null!=i.PrintPrescriptionDTO.MedicineRemarks&&""!=i.PrintPrescriptionDTO.MedicineRemarks)}}function ot(t,e){1&t&&b.Tb(0,"div",51)}function at(t,e){if(1&t&&(b.Yb(0,"tr"),b.Yb(1,"td",73),b.Uc(2),b.Xb(),b.Yb(3,"td",74),b.Uc(4),b.Xb(),b.Yb(5,"td",71),b.Uc(6),b.Xb(),b.Xb()),2&t){var i=e.$implicit,n=e.index;b.Fb(2),b.Wc("(",n+1,")"),b.Fb(2),b.Wc(" ",i.MasterName,""),b.Fb(2),b.Xc("",i.Remarks," (",i.Timing,")")}}function lt(t,e){if(1&t&&(b.Yb(0,"div",22),b.Yb(1,"table",67),b.Yb(2,"thead",30),b.Yb(3,"tr"),b.Yb(4,"td",68),b.Uc(5," Yoga Therapy"),b.Xb(),b.Xb(),b.Yb(6,"tr",69),b.Tb(7,"th",55),b.Yb(8,"th",70),b.Yb(9,"strong"),b.Uc(10,"Yoga Name"),b.Xb(),b.Xb(),b.Yb(11,"th",71),b.Yb(12,"strong"),b.Uc(13,"Duration"),b.Xb(),b.Xb(),b.Xb(),b.Xb(),b.Yb(14,"tbody",72),b.Sc(15,at,7,4,"tr",12),b.Xb(),b.Xb(),b.Xb()),2&t){var i=b.mc(3);b.Fb(15),b.tc("ngForOf",i.PrintPrescriptionDTO.lstSuggestedPrintYoga)}}function bt(t,e){if(1&t&&(b.Yb(0,"div",22),b.Yb(1,"table",64),b.Yb(2,"tr",65),b.Yb(3,"td",66),b.Yb(4,"strong"),b.Uc(5,"Yoga Remarks : "),b.Xb(),b.Tb(6,"span",39),b.Xb(),b.Xb(),b.Xb(),b.Xb()),2&t){var i=b.mc(3);b.Fb(6),b.tc("innerHTML",i.PrintPrescriptionDTO.YogaRemarks,b.Mc)}}function dt(t,e){if(1&t&&(b.Yb(0,"div",54),b.Sc(1,lt,16,1,"div",21),b.Sc(2,bt,7,1,"div",21),b.Xb()),2&t){var i=b.mc(2);b.Fb(1),b.tc("ngIf",null!=i.PrintPrescriptionDTO.lstSuggestedPrintYoga&&null!=i.PrintPrescriptionDTO.lstSuggestedPrintYoga&&(null==i.PrintPrescriptionDTO.lstSuggestedPrintYoga?null:i.PrintPrescriptionDTO.lstSuggestedPrintYoga.length)>0),b.Fb(1),b.tc("ngIf",null!=i.PrintPrescriptionDTO.YogaRemarks&&null!=i.PrintPrescriptionDTO.YogaRemarks&&""!=i.PrintPrescriptionDTO.YogaRemarks)}}function pt(t,e){if(1&t&&(b.Yb(0,"div",2),b.Sc(1,E,1,0,"div",45),b.Sc(2,W,2,3,"div",46),b.Yb(3,"div",47),b.Yb(4,"div",6),b.Yb(5,"table",48),b.Yb(6,"tbody"),b.Sc(7,J,6,1,"tr",1),b.Sc(8,q,7,1,"tr",1),b.Sc(9,Q,6,1,"tr",1),b.Sc(10,K,6,1,"tr",1),b.Sc(11,Z,6,1,"tr",1),b.Xb(),b.Xb(),b.Xb(),b.Xb(),b.Sc(12,st,3,2,"div",49),b.Sc(13,ot,1,0,"div",45),b.Sc(14,dt,3,2,"div",49),b.Tb(15,"div",50),b.Xb()),2&t){var i=b.mc();b.Fb(1),b.tc("ngIf","all"==i.IsMedicine),b.Fb(1),b.tc("ngIf","all"==i.IsMedicine),b.Fb(5),b.tc("ngIf",i.IsMainComplaint&&null!=i.PrintPrescriptionDTO.Diagnosis&&null!=i.PrintPrescriptionDTO.Diagnosis&&""!=i.PrintPrescriptionDTO.Diagnosis),b.Fb(1),b.tc("ngIf",null!=i.diseases&&null!=i.diseases&&""!=i.diseases),b.Fb(1),b.tc("ngIf",null!=i.PrintPrescriptionDTO.PrescPathTest&&null!=i.PrintPrescriptionDTO.PrescPathTest&&""!=i.PrintPrescriptionDTO.PrescPathTest),b.Fb(1),b.tc("ngIf",null!=i.PrintPrescriptionDTO.PrescRadiolTest&&null!=i.PrintPrescriptionDTO.PrescRadiolTest&&""!=i.PrintPrescriptionDTO.PrescRadiolTest),b.Fb(1),b.tc("ngIf",null!=i.PrintPrescriptionDTO.DoctorRemarks&&null!=i.PrintPrescriptionDTO.DoctorRemarks&&""!=i.PrintPrescriptionDTO.DoctorRemarks),b.Fb(1),b.tc("ngIf","medicine"==i.IsMedicine||"all"==i.IsMedicine),b.Fb(1),b.tc("ngIf","all"==i.IsMedicine),b.Fb(1),b.tc("ngIf","yoga"==i.IsMedicine||"all"==i.IsMedicine)}}function ut(t,e){if(1&t){var i=b.Zb();b.Yb(0,"div"),b.Yb(1,"app-print-access-header",75),b.ic("onselectedLetterhead",function(t){return b.Lc(i),b.mc().onselectedLetterhead(t)})("onselectedMedicine",function(t){return b.Lc(i),b.mc().onselectedMedicine(t)})("OnselectedStartDate",function(t){return b.Lc(i),b.mc().OnselectedStartDate(t)})("onPrint",function(t){return b.Lc(i),b.mc().onPrint(t)}),b.Xb(),b.Xb()}if(2&t){var n=b.mc();b.Fb(1),b.tc("IsLetterhead",n.IsLetterhead)("IsMedicine",n.IsMedicine)("lstPrintDate",n.lstPrintDate)("SelectedStartDate",n.SelectedStartDate)("IsIPD",!0)("IsPrint",!0)}}var gt,ft=((gt=function(i){!function(e,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(i&&i.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),i&&t(e,i)}(c,i);var n=e(c);function c(t,e,i,s,o,l){var b,d;return r(this,c),(b=n.call(this)).cdRef=t,b._DoctorServices=e,b.datepipe=i,b.route=s,b._ConstantsService=o,b._UtilityService=l,b.lsobjClinicMaster=JSON.parse(localStorage.getItem("objClinicMaster"))||null,b.InputType=0,b.customDateFormat=a.h,b.treatmentTimeDetails=a.r,b.IsTreatmmentShift=!1,b.diseaseName="",b.tag="",b.slotBookingId=null,b.userId=null,b.diseases=null,b.PrintPrescriptionDTO={},b.IsLetterhead="false",b.IsMedicine="all",b.lstTreatHead=[],b.lstTreatmentList=[],b.lstDietHead=[],b.lstDietList=[],b.lstPrintDate=[],b.SelectedStartDate=null,b.IsMainComplaint=!0,b.IsNote=!0,b.stlstNoteList=[],b.selectedstlstNoteList=[],b.SelectedNote="",b.Language="English",b.IsTreatmmentShift=1==(null===(d=b.lsobjClinicMaster)||void 0===d?void 0:d.IsTreatmmentShift),b.stlstNoteList=[{id:"1",name:"Kit + Abdomen/Calf/Neck  \u0915\u093f\u091f + \u092a\u0947\u091f / \u092a\u093f\u0902\u0921\u0932\u0940 / \u0917\u0932\u093e",code:!0},{id:"2",name:"Kit + Abdomen/Calf  \u0915\u093f\u091f\xa0+\xa0\u092a\u0947\u091f\xa0/\xa0\u092a\u093f\u0902\u0921\u0932\u0940",code:!0}],b.selectedstlstNoteList=b.stlstNoteList,b}return s(c,[{key:"ngOnInit",value:function(){var t=this;this.unsubscribe.add=this.route.queryParams.subscribe(function(e){t.userId=e.UserId,t.slotBookingId=e.SlotBookingId,t.tag=e.tag}),1==this.InputType&&(this.IsNote=!1),this.ResetPrescriptionDiseaseSelected(),this.GetPrintPrescriptionListBySlotId(this.tag)}},{key:"ShowNote",value:function(t,e){this.ResetPrescriptionDiseaseSelected()}},{key:"ResetPrescriptionDiseaseSelected",value:function(){var t=this;this.SelectedNote="";var e=this.selectedstlstNoteList.filter(function(t){return 1==t.code});if((null==e?void 0:e.length)>0){var i=1;null==e||e.map(function(n){t.SelectedNote=i==(null==e?void 0:e.length)?t.SelectedNote+n.name:t.SelectedNote+n.name+", ",i+=1}),this.cdRef.detectChanges()}}},{key:"GetPrintPrescriptionListBySlotId",value:function(t){var e=this;this._UtilityService.showSpinner(),this.unsubscribe.add=this._DoctorServices.GetPrintPrescriptionListBySlotId(this.slotBookingId,t,"Hindi"==this.Language).subscribe(function(t){var i,n,r,c,s,o,a,l,b,d,p,u,g,f,P,m;if(e._UtilityService.hideSpinner(),1==t.actionResult.success){var h=JSON.parse(t.actionResult.result);if(h=h||[],e.diseases="",e.PrintPrescriptionDTO=h,0==e.InputType&&null!=(null===(i=e.PrintPrescriptionDTO)||void 0===i?void 0:i.PeriodFrom)&&null!=(null===(n=e.PrintPrescriptionDTO)||void 0===n?void 0:n.PeriodFrom)&&null!=(null===(r=e.PrintPrescriptionDTO)||void 0===r?void 0:r.PeriodUpto)&&null!=(null===(c=e.PrintPrescriptionDTO)||void 0===c?void 0:c.PeriodUpto)&&(null==e.SelectedStartDate||null==e.SelectedStartDate)){for(var D=new Date(new Date(null===(s=e.PrintPrescriptionDTO)||void 0===s?void 0:s.PeriodFrom)),T=new Date(new Date(null===(o=e.PrintPrescriptionDTO)||void 0===o?void 0:o.PeriodUpto)),Y=Math.floor((T-D)/864e5),v=0;v<=Y;v++){var X=new Date(null===(a=e.PrintPrescriptionDTO)||void 0===a?void 0:a.PeriodFrom);X.setDate(X.getDate()+v),e.lstPrintDate.push({StartDate:new Date(X)})}e.SelectedStartDate=new Date(new Date(null===(l=e.PrintPrescriptionDTO)||void 0===l?void 0:l.PeriodFrom)),e.datepipe.transform(new Date,"yyyy-MM-dd")<=e.datepipe.transform(null===(b=e.PrintPrescriptionDTO)||void 0===b?void 0:b.PeriodUpto,"yyyy-MM-dd")&&(e.SelectedStartDate=new Date(e.datepipe.transform(new Date,"yyyy-MM-dd")))}if(null!=e.PrintPrescriptionDTO.lstPrescriptionPrintDisease&&(null===(d=e.PrintPrescriptionDTO.lstPrescriptionPrintDisease)||void 0===d?void 0:d.length)>0&&(e.PrintPrescriptionDTO.lstPrescriptionPrintDisease.forEach(function(t){e.diseases+=t.DiseaseName+", "}),e.diseases=e.diseases.slice(0,-2)),null!=e.PrintPrescriptionDTO.lstSuggestedPrintMedicine&&null!=e.PrintPrescriptionDTO.lstSuggestedPrintMedicine){if(null!=e.SelectedStartDate&&null!=e.SelectedStartDate&&(null===(p=e.PrintPrescriptionDTO.lstSuggestedPrintMedicine)||void 0===p?void 0:p.length)>0)var S=1;for(var O=0;O<e.PrintPrescriptionDTO.lstSuggestedPrintMedicine.length;O++)e.PrintPrescriptionDTO.lstSuggestedPrintMedicine[O].rowgroup&&(e.PrintPrescriptionDTO.lstSuggestedPrintMedicine[O].GroupNumber=S,S+=1)}if((null===(u=t.actionResult.result3)||void 0===u?void 0:u.length)>0){var I=JSON.parse(t.actionResult.result3);e.lstDietList=I=I||[]}if(e.lstTreatmentList=[],(null===(g=t.actionResult.result2)||void 0===g?void 0:g.length)>0){var M=JSON.parse(t.actionResult.result2);e.lstTreatmentList=M=M||[],null!=e.SelectedStartDate&&null!=e.SelectedStartDate&&(null===(f=e.lstTreatmentList)||void 0===f?void 0:f.length)>0&&(e.lstTreatmentList=e.lstTreatmentList.filter(function(t){return new Date(t.Date.replace(/[/]/g,"-").split("-").reverse().join("-"))>=new Date(e.datepipe.transform(e.SelectedStartDate,"yyyy-MM-dd"))}));var y=e.lstTreatmentList.filter(function(t){return null!=t[e.treatmentTimeDetails.Time9PM]});e.PrintPrescriptionDTO.lstTreatmentField&&(e.lstTreatHead=e.PrintPrescriptionDTO.lstTreatmentField,0==(null==y?void 0:y.length)&&(e.lstTreatHead=e.lstTreatHead.filter(function(t){return t.field!=e.treatmentTimeDetails.Time9PM})),e.IsTreatmmentShift||(e.lstTreatHead=e.lstTreatHead.filter(function(t){return"Shift"!=t.field})))}e.lstDietList=[],(null===(P=t.actionResult.result3)||void 0===P?void 0:P.length)>0&&(I=JSON.parse(t.actionResult.result3),e.lstDietList=I=I||[],null!=e.SelectedStartDate&&null!=e.SelectedStartDate&&(null===(m=e.lstDietList)||void 0===m?void 0:m.length)>0&&(e.lstDietList=e.lstDietList.filter(function(t){return new Date(t.Date.replace(/[/]/g,"-").split("-").reverse().join("-"))>=new Date(e.datepipe.transform(e.SelectedStartDate,"yyyy-MM-dd"))})),e.PrintPrescriptionDTO.lstDietField&&(e.lstDietHead=e.PrintPrescriptionDTO.lstDietField,e.IsTreatmmentShift||(e.lstDietHead=e.lstDietHead.filter(function(t){return"Shift"!=t.field})))),e.calculateAge(),e.cdRef.detectChanges()}else e.cdRef.detectChanges()},function(t){e._UtilityService.hideSpinner(),e._UtilityService.showErrorAlert(t.message)})}},{key:"calculateAge",value:function(){if(null!=this.PrintPrescriptionDTO.DateOfBirth){var t=new Date,e=new Date(this.PrintPrescriptionDTO.DateOfBirth),i=t.getFullYear()-e.getFullYear(),n=t.getMonth()-e.getMonth(),r=t.getDate()-e.getDate();n<=0&&(i--,n=12+n),t.getDate()<e.getDate()&&(n--,r=30+r),12==n&&(i+=1,n=0),this.PrintPrescriptionDTO.Age=i>0?i+" yrs":n+" month "+r+" day"}}},{key:"onselectedLetterhead",value:function(t){this.IsLetterhead=t}},{key:"onselectedLanguage",value:function(t){this.Language=t,this.GetPrintPrescriptionListBySlotId("IPD")}},{key:"onselectedMedicine",value:function(t){this.IsMedicine=t}},{key:"OnselectedStartDate",value:function(t){this.SelectedStartDate=t,this.GetPrintPrescriptionListBySlotId("IPD")}},{key:"onChangeMainComplaint",value:function(t){this.IsMainComplaint=t}},{key:"onChangeNote",value:function(t){this.IsNote=t}},{key:"onPrint",value:function(t){t&&this.print()}},{key:"print",value:function(){"medicine"==this.IsMedicine||"yoga"==this.IsMedicine?$("head").append("<style>@page { size: A4 !important; }</style>"):$("head").append("<style>@page { size: A4 landscape !important; }</style>"),$("title").html(this.PrintPrescriptionDTO.PaitentName+" "+this.PrintPrescriptionDTO.MRNo+" "+this.PrintPrescriptionDTO.PatientContactNumber+", "+("Male"===this.PrintPrescriptionDTO.Gender?"M":"Female"===this.PrintPrescriptionDTO.Gender?"F":this.PrintPrescriptionDTO.Gender)+", "+this.PrintPrescriptionDTO.Age+", DOA: "+this.datepipe.transform(this.PrintPrescriptionDTO.PeriodFrom,this.customDateFormat.DEF_DATE)+", "+this.PrintPrescriptionDTO.DoctorName);var t=window.location.href;history.replaceState(history.state,"","/"),window.print(),history.replaceState(history.state,"",t),$("title").html("Patanjali Wellness")}}]),c}(l.a)).\u0275fac=function(t){return new(t||gt)(b.Sb(b.h),b.Sb(d.a),b.Sb(p.f),b.Sb(u.a),b.Sb(a.f),b.Sb(g.a))},gt.\u0275cmp=b.Mb({type:gt,selectors:[["app-ipd-print-prescription"]],inputs:{InputType:"InputType",tag:"tag",IsMedicine:"IsMedicine"},features:[b.Cb],decls:17,vars:8,consts:[[1,"container","invoice-container"],[4,"ngIf"],[1,"wd100"],[3,"IsPrescription","slotBookingId","IsLetterhead"],["class","table-responsive",4,"ngIf"],["class","wd100",4,"ngIf"],[1,"table-responsive"],[1,"table",2,"border-color","none !important"],[1,"pt-10","text-right"],["rel","stylesheet","href","https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css"],[3,"IsLetterhead","IsOnlyLanguage","SelectLanguage","IsMedicine","IsMainComplaint","IsNote","lstPrintDate","SelectedStartDate","IsIPD","IsPrint","onselectedLetterhead","onselectedLanguage","onselectedMedicine","OnselectedStartDate","OnChangeMainComplaint","OnChangeNote","onPrint"],[1,"d-print-none","table","pdzerotable","mb-2","text-center"],[4,"ngFor","ngForOf"],[1,"bold","mb-2",2,"font-size","17px"],["inputId","binary",3,"ngModelOptions","ngModel","binary","onChange","ngModelChange"],["for","binary",1,"ml-2"],[1,"table","pdzerotable","mb-0","text-center"],[2,"text-align","left"],["class","wd25","style","text-align: left; padding: 0; padding-bottom: 10px !important;",4,"ngIf"],["class","wd25","style","text-align: left; padding: 0; padding-bottom: 10px !important; padding-right: 15px !important;",4,"ngIf"],["class","wd25","style","text-align: left; padding: 2px; padding-bottom: 10px !important; padding-right: 15px !important;",4,"ngIf"],["class","table-responsive mb-5",4,"ngIf"],[1,"table-responsive","mb-5"],[1,"text-left",2,"padding-bottom","40px"],[1,"wd25",2,"text-align","left","padding","0","padding-bottom","10px !important"],[2,"margin-bottom","0 !important","word-break","break-word",3,"innerHTML"],[1,"wd25",2,"text-align","left","padding","0","padding-bottom","10px !important","padding-right","15px !important"],[2,"word-break","break-word"],[1,"wd25",2,"text-align","left","padding","2px","padding-bottom","10px !important","padding-right","15px !important"],[2,"margin-bottom","0 !important",3,"innerHTML"],[1,"card-header"],["colspan","11",1,"t-head"],[2,"width","10%"],[2,"width","9%"],[1,"unitcolor"],[1,"table","mb-0","text-center"],[1,"t-head"],["style","border: 1px solid #000000;",3,"ngStyle",4,"ngFor","ngForOf"],[2,"border","1px solid #000000",3,"ngStyle"],[3,"innerHTML"],[1,"text-left",2,"padding-bottom","5px"],[1,"text-left",2,"height","50px","padding-top","10px"],[1,"text-center","t-head"],["class","bold",4,"ngIf"],[1,"bold"],["class","page-break",4,"ngIf"],["class","divhide",4,"ngIf"],[1,"wd25",2,"vertical-align","top","float","left"],[1,"table","pdzerotable","mb-0","text-center",2,"border-color","none !important"],["class","wd75","style","float: right;",4,"ngIf"],[1,"clearfix"],[1,"page-break"],[1,"divhide"],[2,"text-align","left","padding","0","padding-bottom","10px !important"],[1,"wd75",2,"float","right"],[2,"width","2%","text-align","center"],[2,"width","35%","text-align","left"],[2,"width","5%"],[2,"width","58%"],["style","width: 2%;text-align: center;vertical-align: top;",3,"rowSpan",4,"ngIf"],[2,"width","35%","text-align","left","vertical-align","top"],["style","width: 58%;text-align: left;border-left:1px solid #000000; padding-left: 10px !important;",3,"rowSpan","class",4,"ngIf"],[2,"width","2%","text-align","center","vertical-align","top",3,"rowSpan"],[2,"width","58%","text-align","left","border-left","1px solid #000000","padding-left","10px !important",3,"rowSpan"],[1,"table","pdzerotable",2,"border","none !important"],[2,"border","0 !important","margin-bottom","10px !important"],[2,"text-align","left","padding","0","width","100%","border","0"],[1,"table","pdzerotable","mb-10","text-center"],["colspan","4",1,"t-head"],[2,"border-bottom","2px solid #000000!important"],[2,"width","78%",";text-align","left"],[2,"width","20%"],[2,"border-top","none","border-color","#eaeaea"],[2,"width","2%",";text-align","center"],[2,"width","78%","text-align","left","vertical-align","top"],[3,"IsLetterhead","IsMedicine","lstPrintDate","SelectedStartDate","IsIPD","IsPrint","onselectedLetterhead","onselectedMedicine","OnselectedStartDate","onPrint"]],template:function(t,e){1&t&&(b.Yb(0,"article"),b.Yb(1,"div",0),b.Sc(2,T,2,10,"div",1),b.Yb(3,"div",2),b.Tb(4,"app-print-header",3),b.Sc(5,X,7,2,"div",4),b.Sc(6,z,22,10,"div",5),b.Sc(7,pt,16,10,"div",5),b.Yb(8,"div",2),b.Yb(9,"div",6),b.Yb(10,"table",7),b.Yb(11,"tr"),b.Yb(12,"td",8),b.Yb(13,"h5"),b.Uc(14,"Doctor\u2019s Signature/ \u091a\u093f\u0915\u093f\u0924\u094d\u0938\u0915 \u0915\u0947 \u0939\u0938\u094d\u0924\u093e\u0915\u094d\u0937\u0930"),b.Xb(),b.Xb(),b.Xb(),b.Xb(),b.Xb(),b.Xb(),b.Xb(),b.Sc(15,ut,2,6,"div",1),b.Xb(),b.Xb(),b.Tb(16,"link",9)),2&t&&(b.Fb(2),b.tc("ngIf",0==e.InputType),b.Fb(2),b.tc("IsPrescription",!0)("slotBookingId",e.slotBookingId)("IsLetterhead",e.IsLetterhead),b.Fb(1),b.tc("ngIf","YGM"==(null==e.lsobjClinicMaster?null:e.lsobjClinicMaster.ShortCode)),b.Fb(1),b.tc("ngIf","diet"==e.IsMedicine||"treatment"==e.IsMedicine||"all"==e.IsMedicine||"withoutmedicine"==e.IsMedicine),b.Fb(1),b.tc("ngIf",(null!=e.PrintPrescriptionDTO.lstSuggestedPrintMedicine&&null!=e.PrintPrescriptionDTO.lstSuggestedPrintMedicine&&(null==e.PrintPrescriptionDTO||null==e.PrintPrescriptionDTO.lstSuggestedPrintMedicine?null:e.PrintPrescriptionDTO.lstSuggestedPrintMedicine.length)>0||null!=e.PrintPrescriptionDTO.lstSuggestedPrintYoga&&null!=e.PrintPrescriptionDTO.lstSuggestedPrintYoga&&(null==e.PrintPrescriptionDTO||null==e.PrintPrescriptionDTO.lstSuggestedPrintYoga?null:e.PrintPrescriptionDTO.lstSuggestedPrintYoga.length)>0)&&("medicine"==e.IsMedicine||"all"==e.IsMedicine||"yoga"==e.IsMedicine)),b.Fb(8),b.tc("ngIf",0==e.InputType))},directives:[p.p,f.a,P.a,p.o,m.a,h.o,h.r,p.q],pipes:[p.f,D],styles:["","@page {\n        size[_ngcontent-%COMP%]:   A4[_ngcontent-%COMP%]   landscape[_ngcontent-%COMP%];\n    }"]}),gt)},coK0:function(t,e,i){"use strict";i.r(e),i.d(e,"IpdPrintPrescriptionModule",function(){return D});var n,c,s=i("ofXK"),o=i("tyNb"),a=i("E3nD"),l=i("fXoL"),b=[{path:"",component:a.a}],d=((n=function t(){r(this,t)}).\u0275fac=function(t){return new(t||n)},n.\u0275mod=l.Qb({type:n}),n.\u0275inj=l.Pb({imports:[[o.l.forChild(b)],o.l]}),n),p=i("3Pt+"),u=i("arFO"),g=i("QoE7"),f=i("LuMj"),P=i("9XlL"),m=i("ycwT"),h=i("Ji6n"),D=((c=function t(){r(this,t)}).\u0275fac=function(t){return new(t||c)},c.\u0275mod=l.Qb({type:c}),c.\u0275inj=l.Pb({imports:[[s.c,d,p.i,u.b,f.b,g.a,P.a,m.a,h.b]]}),c)}}])}();