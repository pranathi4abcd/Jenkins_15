(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{E3nD:function(t,e,i){"use strict";i.d(e,"a",function(){return at});var n=i("Nach"),r=i("CwUn"),s=i("fXoL"),c=i("ReGW"),o=i("ofXK"),l=i("tyNb"),a=i("NLkC"),b=i("sCq/"),d=i("Q8Cd"),p=i("Ji6n"),h=i("3Pt+");let g=(()=>{class t{transform(t,e,i){return t.replace(new RegExp(e,"g"),i)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=s.Rb({name:"revreplaceSubstring",type:t,pure:!0}),t})();function P(t,e){if(1&t){const t=s.Zb();s.Yb(0,"div"),s.Yb(1,"app-print-access-header",10),s.ic("onselectedLetterhead",function(e){return s.Lc(t),s.mc().onselectedLetterhead(e)})("onselectedLanguage",function(e){return s.Lc(t),s.mc().onselectedLanguage(e)})("onselectedMedicine",function(e){return s.Lc(t),s.mc().onselectedMedicine(e)})("OnselectedStartDate",function(e){return s.Lc(t),s.mc().OnselectedStartDate(e)})("OnChangeMainComplaint",function(e){return s.Lc(t),s.mc().onChangeMainComplaint(e)})("OnChangeNote",function(e){return s.Lc(t),s.mc().onChangeNote(e)})("onPrint",function(e){return s.Lc(t),s.mc().onPrint(e)}),s.Xb(),s.Xb()}if(2&t){const t=s.mc();s.Fb(1),s.tc("IsLetterhead",t.IsLetterhead)("IsOnlyLanguage",!0)("SelectLanguage",t.Language)("IsMedicine",t.IsMedicine)("IsMainComplaint",t.IsMainComplaint)("IsNote",t.IsNote)("lstPrintDate",t.lstPrintDate)("SelectedStartDate",t.SelectedStartDate)("IsIPD",!0)("IsPrint",!0)}}const u=function(){return{standalone:!0}};function f(t,e){if(1&t){const t=s.Zb();s.Yb(0,"td"),s.Yb(1,"p-checkbox",14),s.ic("onChange",function(i){s.Lc(t);const n=e.$implicit;return s.mc(2).ShowNote(n.id,i)})("ngModelChange",function(t){return e.$implicit.code=t}),s.Xb(),s.Yb(2,"label",15),s.Uc(3),s.Xb(),s.Xb()}if(2&t){const t=e.$implicit;s.Fb(1),s.tc("ngModelOptions",s.yc(4,u))("ngModel",t.code)("binary",!0),s.Fb(2),s.Vc(t.name)}}function m(t,e){if(1&t&&(s.Yb(0,"div",6),s.Yb(1,"table",11),s.Yb(2,"tbody"),s.Yb(3,"tr"),s.Sc(4,f,4,5,"td",12),s.Xb(),s.Xb(),s.Xb(),s.Yb(5,"p",13),s.Uc(6),s.Xb(),s.Xb()),2&t){const t=s.mc();s.Fb(4),s.tc("ngForOf",t.stlstNoteList),s.Fb(2),s.Vc(t.SelectedNote)}}function D(t,e){if(1&t&&(s.Yb(0,"td",24),s.Yb(1,"strong"),s.Uc(2,"Main Complaints :"),s.Xb(),s.Tb(3,"br"),s.Tb(4,"div",25),s.Xb()),2&t){const t=s.mc(2);s.Fb(4),s.tc("innerHTML",t.PrintPrescriptionDTO.Diagnosis,s.Mc)}}function T(t,e){if(1&t&&(s.Yb(0,"td",26),s.Yb(1,"strong"),s.Uc(2,"Diagnosis :"),s.Xb(),s.Tb(3,"br"),s.Yb(4,"span",27),s.Uc(5),s.Xb(),s.Xb()),2&t){const t=s.mc(2);s.Fb(5),s.Vc(t.diseases)}}function Y(t,e){if(1&t&&(s.Yb(0,"td",28),s.Yb(1,"strong"),s.Uc(2,"Prescribed Pathology Test :"),s.Xb(),s.Tb(3,"br"),s.Tb(4,"div",29),s.Xb()),2&t){const t=s.mc(2);s.Fb(4),s.tc("innerHTML",t.PrintPrescriptionDTO.PrescPathTest,s.Mc)}}function X(t,e){if(1&t&&(s.Yb(0,"td",26),s.Yb(1,"strong"),s.Uc(2,"Prescribed Radiology Test :"),s.Xb(),s.Tb(3,"br"),s.Tb(4,"div",29),s.Xb()),2&t){const t=s.mc(2);s.Fb(4),s.tc("innerHTML",t.PrintPrescriptionDTO.PrescRadiolTest,s.Mc)}}function S(t,e){if(1&t&&(s.Yb(0,"tr"),s.Yb(1,"td",32),s.Uc(2),s.nc(3,"date"),s.Xb(),s.Yb(4,"td",33),s.Uc(5),s.Xb(),s.Yb(6,"td",33),s.Uc(7),s.Xb(),s.Yb(8,"td",33),s.Uc(9),s.Xb(),s.Yb(10,"td",33),s.Uc(11),s.Xb(),s.Yb(12,"td",33),s.Uc(13),s.Xb(),s.Yb(14,"td",33),s.Uc(15),s.Xb(),s.Yb(16,"td",33),s.Uc(17),s.Xb(),s.Yb(18,"td",33),s.Uc(19),s.Xb(),s.Yb(20,"td",33),s.Uc(21),s.Xb(),s.Yb(22,"td",33),s.Uc(23),s.Xb(),s.Xb()),2&t){const t=e.$implicit,i=s.mc(3);s.Fb(2),s.Wc(" ",s.pc(3,11,t.CaptureDate,i.customDateFormat.DEF_DATE_TIME),""),s.Fb(3),s.Vc(t.bp),s.Fb(2),s.Vc(t.pr),s.Fb(2),s.Vc(t.respiration),s.Fb(2),s.Vc(t.temp),s.Fb(2),s.Vc(t.height),s.Fb(2),s.Vc(t.weight),s.Fb(2),s.Vc(t.FBS),s.Fb(2),s.Vc(t.PPBS),s.Fb(2),s.Vc(t.RBS),s.Fb(2),s.Vc(t.BMI)}}function I(t,e){if(1&t&&(s.Yb(0,"div",22),s.Yb(1,"table",16),s.Yb(2,"thead",30),s.Yb(3,"tr"),s.Yb(4,"td",31),s.Uc(5,"Vital Data"),s.Xb(),s.Xb(),s.Yb(6,"tr"),s.Yb(7,"th",32),s.Yb(8,"strong"),s.Uc(9,"Date"),s.Xb(),s.Xb(),s.Yb(10,"th",33),s.Yb(11,"strong"),s.Uc(12,"BP"),s.Xb(),s.Tb(13,"br"),s.Yb(14,"span",34),s.Uc(15,"(mmHg)"),s.Xb(),s.Xb(),s.Yb(16,"th",33),s.Yb(17,"strong"),s.Uc(18,"Pulse Rate"),s.Xb(),s.Tb(19,"br"),s.Yb(20,"span",34),s.Uc(21,"(bpm)"),s.Xb(),s.Xb(),s.Yb(22,"th",33),s.Yb(23,"strong"),s.Uc(24,"Respiration"),s.Xb(),s.Tb(25,"br"),s.Yb(26,"span",34),s.Uc(27,"(bpm)"),s.Xb(),s.Xb(),s.Yb(28,"th",33),s.Yb(29,"strong"),s.Uc(30,"Temperature"),s.Xb(),s.Tb(31,"br"),s.Yb(32,"span",34),s.Uc(33,"(\xb0F)"),s.Xb(),s.Xb(),s.Yb(34,"th",33),s.Yb(35,"strong"),s.Uc(36,"Height"),s.Xb(),s.Tb(37,"br"),s.Yb(38,"span",34),s.Uc(39,"(cms.)"),s.Xb(),s.Xb(),s.Yb(40,"th",33),s.Yb(41,"strong"),s.Uc(42,"Weight"),s.Xb(),s.Tb(43,"br"),s.Yb(44,"span",34),s.Uc(45,"(kg.)"),s.Xb(),s.Xb(),s.Yb(46,"th",33),s.Yb(47,"strong"),s.Uc(48,"FBS"),s.Xb(),s.Tb(49,"br"),s.Yb(50,"span",34),s.Uc(51,"(mg/dl)"),s.Xb(),s.Xb(),s.Yb(52,"th",33),s.Yb(53,"strong"),s.Uc(54,"PPBS"),s.Xb(),s.Tb(55,"br"),s.Yb(56,"span",34),s.Uc(57,"(mg/dl)"),s.Xb(),s.Xb(),s.Yb(58,"th",33),s.Yb(59,"strong"),s.Uc(60,"RBS"),s.Xb(),s.Tb(61,"br"),s.Yb(62,"span",34),s.Uc(63,"(mg/dl)"),s.Xb(),s.Xb(),s.Yb(64,"th",33),s.Yb(65,"strong"),s.Uc(66,"BMI"),s.Xb(),s.Tb(67,"br"),s.Yb(68,"span",34),s.Uc(69,"(kg/m\xb2)"),s.Xb(),s.Xb(),s.Xb(),s.Xb(),s.Yb(70,"tbody"),s.Sc(71,S,24,14,"tr",12),s.Xb(),s.Xb(),s.Xb()),2&t){const t=s.mc(2);s.Fb(71),s.tc("ngForOf",t.PrintPrescriptionDTO.lstPrescriptionPrintVital)}}const O=function(t){return{width:t}};function M(t,e){if(1&t&&(s.Yb(0,"th",38),s.Tb(1,"span",39),s.Tb(2,"span",39),s.Xb()),2&t){const t=e.$implicit;s.tc("ngStyle",s.zc(3,O,"Date"==t.field?"10%":"auto")),s.Fb(1),s.tc("innerHTML",t.header,s.Mc),s.Fb(1),s.tc("innerHTML",""==t.OtherDetails||null==t.OtherDetails||null==t.OtherDetails?"":"<br>"+t.OtherDetails,s.Mc)}}const v=function(t){return{width:t,"word-wrap":"break-word"}};function F(t,e){if(1&t&&(s.Yb(0,"td",38),s.Uc(1),s.nc(2,"revreplaceSubstring"),s.Xb()),2&t){const t=e.$implicit,i=s.mc().$implicit;s.tc("ngStyle",s.zc(6,v,"Date"==t.fieldId?"10%":"auto")),s.Fb(1),s.Wc(" ","Date"==t.field||null==i[t.field]?i[t.field]:s.qc(2,2,"#"+i[t.field],"#.*?[^,]~",", ").slice(1)," ")}}function y(t,e){if(1&t&&(s.Yb(0,"tr"),s.Sc(1,F,3,8,"td",37),s.Xb()),2&t){const t=s.mc(3);s.Fb(1),s.tc("ngForOf",t.lstTreatHead)}}function w(t,e){if(1&t&&(s.Yb(0,"div",22),s.Yb(1,"table",35),s.Yb(2,"thead",30),s.Yb(3,"tr"),s.Yb(4,"td",36),s.Uc(5," Treatment"),s.Xb(),s.Xb(),s.Yb(6,"tr"),s.Sc(7,M,3,5,"th",37),s.Xb(),s.Xb(),s.Yb(8,"tbody"),s.Sc(9,y,2,1,"tr",12),s.Xb(),s.Xb(),s.Xb()),2&t){const t=s.mc(2);s.Fb(4),s.Gb("colspan",null==t.lstTreatHead?null:t.lstTreatHead.length),s.Fb(3),s.tc("ngForOf",t.lstTreatHead),s.Fb(2),s.tc("ngForOf",t.lstTreatmentList)}}function L(t,e){if(1&t&&(s.Yb(0,"tr"),s.Yb(1,"td",40),s.Yb(2,"strong"),s.Uc(3," Treatment Note : "),s.Xb(),s.Yb(4,"span"),s.Uc(5),s.Xb(),s.Xb(),s.Xb()),2&t){const t=s.mc(2);s.Fb(5),s.Vc(t.PrintPrescriptionDTO.TreatmentRemarks)}}function U(t,e){if(1&t&&(s.Yb(0,"tr"),s.Yb(1,"td",40),s.Yb(2,"strong"),s.Uc(3," Refer To : "),s.Yb(4,"span"),s.Uc(5),s.Xb(),s.Xb(),s.Xb(),s.Xb()),2&t){const t=s.mc(2);s.Fb(5),s.Vc(t.PrintPrescriptionDTO.ReferTreatment)}}function R(t,e){if(1&t&&(s.Yb(0,"th",38),s.Uc(1),s.Tb(2,"span",39),s.Xb()),2&t){const t=e.$implicit;s.tc("ngStyle",s.zc(3,O,"Date"==t.field?"10%":"11%")),s.Fb(1),s.Wc(" ",t.header," "),s.Fb(1),s.tc("innerHTML",""==t.OtherDetails||null==t.OtherDetails||null==t.OtherDetails?"":"<br>"+t.OtherDetails,s.Mc)}}function x(t,e){if(1&t&&(s.Yb(0,"td",38),s.Uc(1),s.nc(2,"revreplaceSubstring"),s.Xb()),2&t){const t=e.$implicit,i=s.mc().$implicit;s.tc("ngStyle",s.zc(6,v,"Date"==t.field?"10%":"11%")),s.Fb(1),s.Wc(" ","Date"==t.field||null==i[t.field]?i[t.field]:s.qc(2,2,"#"+i[t.field],"#.*?[^,]~",", ").slice(1)," ")}}function k(t,e){if(1&t&&(s.Yb(0,"tr"),s.Sc(1,x,3,8,"td",37),s.Xb()),2&t){const t=s.mc(3);s.Fb(1),s.tc("ngForOf",t.lstDietHead)}}function N(t,e){if(1&t&&(s.Yb(0,"tr"),s.Yb(1,"td",41),s.Yb(2,"strong"),s.Uc(3," Special Diet Instructions : "),s.Xb(),s.Yb(4,"span"),s.Uc(5),s.Xb(),s.Xb(),s.Xb()),2&t){const t=s.mc(3);s.Fb(1),s.Gb("colspan",null==t.lstDietHead?null:t.lstDietHead.length),s.Fb(4),s.Vc(t.PrintPrescriptionDTO.DietRemarks)}}function C(t,e){if(1&t&&(s.Yb(0,"div",22),s.Yb(1,"table",16),s.Yb(2,"thead",30),s.Yb(3,"tr"),s.Yb(4,"td",36),s.Uc(5," Diet"),s.Xb(),s.Xb(),s.Yb(6,"tr"),s.Sc(7,R,3,5,"th",37),s.Xb(),s.Xb(),s.Yb(8,"tbody"),s.Sc(9,k,2,1,"tr",12),s.Sc(10,N,6,2,"tr",1),s.Xb(),s.Xb(),s.Xb()),2&t){const t=s.mc(2);s.Fb(4),s.Gb("colspan",null==t.lstDietHead?null:t.lstDietHead.length),s.Fb(3),s.tc("ngForOf",t.lstDietHead),s.Fb(2),s.tc("ngForOf",t.lstDietList),s.Fb(1),s.tc("ngIf",null!=t.PrintPrescriptionDTO.DietRemarks&&null!=t.PrintPrescriptionDTO.DietRemarks&&""!=t.PrintPrescriptionDTO.DietRemarks)}}function H(t,e){1&t&&(s.Yb(0,"li",44),s.Uc(1,"Treatment Section: Shift- 1: (9:00AM / 2:30PM), Shift-2: (10:00Am\xa0/\xa03:30PM)"),s.Xb())}function B(t,e){if(1&t&&(s.Yb(0,"div",22),s.Yb(1,"div",42),s.Uc(2," Note"),s.Xb(),s.Yb(3,"ul"),s.Sc(4,H,2,0,"li",43),s.Yb(5,"li"),s.Uc(6,"Health Seeker must be reached treatment centre at given times. \u0938\u094d\u0935\u093e\u0938\u094d\u0925\u094d\u092f \u0938\u093e\u0927\u0915 \u0915\u094b \u0928\u093f\u0936\u094d\u091a\u093f\u0924 \u0938\u092e\u092f \u092a\u0930 \u0909\u092a\u091a\u093e\u0930 \u0915\u0947\u0902\u0926\u094d\u0930 \u092a\u0930 \u0905\u0935\u0936\u094d\u092f \u092a\u0939\u0941\u0902\u091a\u0928\u093e \u091a\u093e\u0939\u093f\u090f \u0964 "),s.Xb(),s.Yb(7,"li"),s.Uc(8,"Discharge Summary (Discharge Ticket) is mandatory for all the health seekers. All the health seekers must have to get discharge ticket from their concerned doctor, one day before from their discharge date (Date of Departure). You will not be check out from the room without the discharge ticket. \u0921\u093f\u0938\u094d\u091a\u093e\u0930\u094d\u091c \u0938\u092e\u0930\u0940 (\u0921\u093f\u0938\u094d\u091a\u093e\u0930\u094d\u091c \u091f\u093f\u0915\u091f) \u0938\u092d\u0940 \u0938\u094d\u0935\u093e\u0938\u094d\u0925\u094d\u092f \u0938\u093e\u0927\u0915\u094b \u0915\u0947 \u0932\u093f\u090f \u0905\u0928\u093f\u0935\u093e\u0930\u094d\u092f \u0939\u0948\u0964 \u0938\u092d\u0940 \u0938\u094d\u0935\u093e\u0938\u094d\u0925\u094d\u092f \u0938\u093e\u0927\u0915\u094b \u0915\u094b \u0921\u093f\u0938\u094d\u091a\u093e\u0930\u094d\u091c \u0915\u0940 \u0924\u093e\u0930\u0940\u0916 (\u092a\u094d\u0930\u0938\u094d\u0925\u093e\u0928 \u0915\u0930\u0928\u0947 \u0915\u0940 \u0921\u0947\u091f) \u0938\u0947 \u090f\u0915 \u0926\u093f\u0928 \u092a\u0939\u0932\u0947 \u0905\u092a\u0928\u0947 \u0938\u0902\u092c\u0902\u0927\u093f\u0924 \u091a\u093f\u0915\u093f\u0924\u094d\u0938\u0915 \u0938\u0947 \u0921\u093f\u0938\u094d\u091a\u093e\u0930\u094d\u091c \u091f\u093f\u0915\u091f \u092a\u094d\u0930\u093e\u092a\u094d\u0924 \u0915\u0930\u0928\u093e \u0939\u094b\u0917\u093e\u0964 \u0921\u093f\u0938\u094d\u091a\u093e\u0930\u094d\u091c \u091f\u093f\u0915\u091f \u0915\u0947 \u092c\u093f\u0928\u093e \u0906\u092a\u0915\u094b \u0915\u092e\u0930\u0947 \u0938\u0947 \u091a\u0947\u0915 \u0906\u0909\u091f \u0928\u0939\u0940\u0902 \u0915\u093f\u092f\u093e \u091c\u093e\u090f\u0917\u093e\u0964 "),s.Xb(),s.Yb(9,"li"),s.Uc(10,"It is compulsory to attend yog bhavan sessions both in morning(5.00AM to 7:30AM) and evening (6.00PM to 7.30PM). \u092f\u094b\u0917 \u092d\u0935\u0928 \u092e\u0947\u0902 \u0939\u094b\u0928\u0947 \u0935\u093e\u0932\u0940 \u092f\u094b\u0917 \u0925\u0947\u0930\u0947\u092a\u0940 \u091a\u093f\u0915\u093f\u0924\u094d\u0938\u093e \u092e\u0947\u0902 \u0926\u094b\u0928\u094b\u0902 \u0938\u092e\u092f (\u0938\u0941\u092c\u0939 5.00 \u0938\u0947 7:30 \u092c\u091c\u0947 \u090f\u0935\u0902 \u0936\u093e\u092e 6.00 \u0938\u0947 7.30 \u092c\u091c\u0947 \u0924\u0915) \u0909\u092a\u0938\u094d\u0925\u093f\u0924 \u0939\u094b\u0928\u093e \u0905\u0928\u093f\u0935\u093e\u0930\u094d\u092f \u0939\u0948\u0964"),s.Xb(),s.Yb(11,"li"),s.Uc(12,"Diet prescribed in the form of therapy depending upon individual Health Seeker\u2019s clinical condition should be followed strictly during their inpatient\u2019s stay without making any humble request to their concerned consultant doctor. \u091a\u093f\u0915\u093f\u0924\u094d\u0938\u093e \u0915\u0947 \u0930\u0942\u092a \u092e\u0947\u0902 \u0928\u093f\u0930\u094d\u0927\u093e\u0930\u093f\u0924 \u0906\u0939\u093e\u0930, \u092a\u094d\u0930\u0924\u094d\u092f\u0947\u0915 (\u0935\u094d\u092f\u0915\u094d\u0924\u093f\u0917\u0924) \u0938\u094d\u0935\u093e\u0938\u094d\u0925\u094d\u092f \u0938\u093e\u0927\u0915 \u0915\u0940 \u0928\u0948\u0926\u093e\u0928\u093f\u0915 \u0938\u094d\u0925\u093f\u0924\u093f \u092a\u0930 \u0928\u093f\u0930\u094d\u092d\u0930 \u0915\u0930\u0924\u093e \u0939\u0948, \u0907\u0938\u0932\u093f\u090f \u0905\u092a\u0928\u0947 \u0938\u0902\u092c\u0902\u0927\u093f\u0924 \u0938\u0932\u093e\u0939\u0915\u093e\u0930 \u0921\u0949\u0915\u094d\u091f\u0930 \u0938\u0947 \u0915\u094b\u0908 \u0935\u093f\u0928\u092e\u094d\u0930 \u0905\u0928\u0941\u0930\u094b\u0927 \u0915\u093f\u090f \u092c\u093f\u0928\u093e \u0938\u092d\u0940 \u092d\u0930\u094d\u0924\u0940 \u0938\u094d\u0935\u093e\u0938\u094d\u0925\u094d\u092f \u0938\u093e\u0927\u0915\u094b\u0902 \u0915\u094b \u0930\u0939\u0928\u0947 \u0915\u0947 \u0926\u094c\u0930\u093e\u0928 \u0907\u0938 \u0928\u093f\u0930\u094d\u0927\u093e\u0930\u093f\u0924 \u0906\u0939\u093e\u0930 \u0915\u093e \u0938\u0916\u094d\u0924\u0940 \u0938\u0947 \u092a\u093e\u0932\u0928 \u0915\u093f\u092f\u093e \u091c\u093e\u0928\u093e \u091a\u093e\u0939\u093f\u090f I "),s.Xb(),s.Xb(),s.Xb()),2&t){const t=s.mc(2);s.Fb(4),s.tc("ngIf","YGM"==(null==t.lsobjClinicMaster?null:t.lsobjClinicMaster.ShortCode))}}function V(t,e){if(1&t&&(s.Yb(0,"div",2),s.Yb(1,"div",6),s.Yb(2,"table",16),s.Yb(3,"tbody"),s.Yb(4,"tr",17),s.Sc(5,D,5,1,"td",18),s.Sc(6,T,6,1,"td",19),s.Sc(7,Y,5,1,"td",20),s.Sc(8,X,5,1,"td",19),s.Xb(),s.Xb(),s.Xb(),s.Xb(),s.Sc(9,I,72,1,"div",21),s.Sc(10,w,10,3,"div",21),s.Yb(11,"div",22),s.Yb(12,"table"),s.Yb(13,"tbody"),s.Sc(14,L,6,1,"tr",1),s.Sc(15,U,6,1,"tr",1),s.Yb(16,"tr"),s.Yb(17,"td",23),s.Yb(18,"strong"),s.Uc(19," Remark :"),s.Xb(),s.Xb(),s.Xb(),s.Xb(),s.Xb(),s.Xb(),s.Sc(20,C,11,4,"div",21),s.Sc(21,B,13,1,"div",21),s.Xb()),2&t){const t=s.mc();s.Fb(5),s.tc("ngIf",t.IsMainComplaint&&null!=t.PrintPrescriptionDTO.Diagnosis&&null!=t.PrintPrescriptionDTO.Diagnosis&&""!=t.PrintPrescriptionDTO.Diagnosis),s.Fb(1),s.tc("ngIf",null!=t.diseases&&null!=t.diseases&&""!=t.diseases),s.Fb(1),s.tc("ngIf",null!=t.PrintPrescriptionDTO.PrescPathTest&&null!=t.PrintPrescriptionDTO.PrescPathTest&&""!=t.PrintPrescriptionDTO.PrescPathTest),s.Fb(1),s.tc("ngIf",null!=t.PrintPrescriptionDTO.PrescRadiolTest&&null!=t.PrintPrescriptionDTO.PrescRadiolTest&&""!=t.PrintPrescriptionDTO.PrescRadiolTest),s.Fb(1),s.tc("ngIf",null!=t.PrintPrescriptionDTO.lstPrescriptionPrintVital&&null!=t.PrintPrescriptionDTO.lstPrescriptionPrintVital&&(null==t.PrintPrescriptionDTO.lstPrescriptionPrintVital?null:t.PrintPrescriptionDTO.lstPrescriptionPrintVital.length)>0),s.Fb(1),s.tc("ngIf",(null==t.lstTreatmentList?null:t.lstTreatmentList.length)>0&&("treatment"==t.IsMedicine||"all"==t.IsMedicine||"withoutmedicine"==t.IsMedicine)),s.Fb(4),s.tc("ngIf",null!=t.PrintPrescriptionDTO.TreatmentRemarks&&null!=t.PrintPrescriptionDTO.TreatmentRemarks&&""!=t.PrintPrescriptionDTO.TreatmentRemarks),s.Fb(1),s.tc("ngIf",null!=t.PrintPrescriptionDTO.ReferTreatment&&null!=t.PrintPrescriptionDTO.ReferTreatment&&""!=t.PrintPrescriptionDTO.ReferTreatment),s.Fb(5),s.tc("ngIf",(null==t.lstDietList?null:t.lstDietList.length)>0&&("diet"==t.IsMedicine||"all"==t.IsMedicine||"withoutmedicine"==t.IsMedicine)),s.Fb(1),s.tc("ngIf",t.IsNote)}}function A(t,e){1&t&&s.Tb(0,"div",51)}function G(t,e){if(1&t&&(s.Yb(0,"div",52),s.Tb(1,"app-print-header",3),s.Xb()),2&t){const t=s.mc(2);s.Fb(1),s.tc("IsPrescription",!0)("slotBookingId",t.slotBookingId)("IsLetterhead",t.IsLetterhead)}}function j(t,e){if(1&t&&(s.Yb(0,"tr"),s.Yb(1,"td",53),s.Yb(2,"strong"),s.Uc(3,"Main Complaints :"),s.Xb(),s.Tb(4,"br"),s.Tb(5,"div",25),s.Xb(),s.Xb()),2&t){const t=s.mc(2);s.Fb(5),s.tc("innerHTML",t.PrintPrescriptionDTO.Diagnosis,s.Mc)}}function z(t,e){if(1&t&&(s.Yb(0,"tr"),s.Yb(1,"td",53),s.Yb(2,"strong"),s.Uc(3,"Diagnosis :"),s.Xb(),s.Tb(4,"br"),s.Yb(5,"span",27),s.Uc(6),s.Xb(),s.Xb(),s.Xb()),2&t){const t=s.mc(2);s.Fb(6),s.Vc(t.diseases)}}function W(t,e){if(1&t&&(s.Yb(0,"tr"),s.Yb(1,"td",53),s.Yb(2,"strong"),s.Uc(3,"Prescribed Pathology Test :"),s.Xb(),s.Tb(4,"br"),s.Tb(5,"div",29),s.Xb(),s.Xb()),2&t){const t=s.mc(2);s.Fb(5),s.tc("innerHTML",t.PrintPrescriptionDTO.PrescPathTest,s.Mc)}}function _(t,e){if(1&t&&(s.Yb(0,"tr"),s.Yb(1,"td",53),s.Yb(2,"strong"),s.Uc(3,"Prescribed Radiology Test :"),s.Xb(),s.Tb(4,"br"),s.Tb(5,"div",29),s.Xb(),s.Xb()),2&t){const t=s.mc(2);s.Fb(5),s.tc("innerHTML",t.PrintPrescriptionDTO.PrescRadiolTest,s.Mc)}}function E(t,e){if(1&t&&(s.Yb(0,"tr"),s.Yb(1,"td",53),s.Yb(2,"strong"),s.Uc(3,"Remarks :"),s.Xb(),s.Tb(4,"br"),s.Tb(5,"div",29),s.Xb(),s.Xb()),2&t){const t=s.mc(2);s.Fb(5),s.tc("innerHTML",t.PrintPrescriptionDTO.DoctorRemarks,s.Mc)}}function J(t,e){if(1&t&&(s.Yb(0,"td",62),s.Yb(1,"Span"),s.Uc(2),s.Xb(),s.Xb()),2&t){const t=s.mc().$implicit;s.tc("rowSpan",t.rowspan),s.Fb(2),s.Wc("(",t.Rx,")")}}function q(t,e){if(1&t&&(s.Yb(0,"label"),s.Yb(1,"b"),s.Uc(2,"Notes:"),s.Xb(),s.Uc(3),s.Xb()),2&t){const t=s.mc(2).$implicit;s.Fb(3),s.Wc(" ",t.MedcineNote,"")}}function Q(t,e){if(1&t&&(s.Yb(0,"td",63),s.Uc(1),s.Tb(2,"br"),s.Sc(3,q,4,1,"label",1),s.Xb()),2&t){const t=s.mc().$implicit;s.Hb(t.GroupNumber>1&&t.rowgroup?"top-boarder-td":""),s.tc("rowSpan",t.rowspan),s.Fb(1),s.Wc(" ",t.MOADescription," "),s.Fb(2),s.tc("ngIf",t.MedcineNote&&""!=t.MedcineNote)}}function K(t,e){if(1&t&&(s.Yb(0,"tr"),s.Sc(1,J,3,2,"td",59),s.Yb(2,"td",60),s.Uc(3),s.Xb(),s.Yb(4,"td",57),s.Uc(5),s.Xb(),s.Sc(6,Q,4,6,"td",61),s.Xb()),2&t){const t=e.$implicit;s.Fb(1),s.tc("ngIf",t.rowgroup),s.Fb(1),s.Hb(t.GroupNumber>1&&t.rowgroup?"top-boarder-td":""),s.Fb(1),s.Wc(" ",t.MasterName,""),s.Fb(1),s.Hb(t.GroupNumber>1&&t.rowgroup?"top-boarder-td":""),s.Fb(1),s.Wc(" ",t.Qty,""),s.Fb(1),s.tc("ngIf",t.rowgroup)}}function Z(t,e){if(1&t&&(s.Yb(0,"div",22),s.Yb(1,"table",35),s.Yb(2,"thead",30),s.Yb(3,"tr"),s.Yb(4,"td",36),s.Uc(5," Medicine "),s.Xb(),s.Xb(),s.Yb(6,"tr"),s.Tb(7,"th",55),s.Yb(8,"th",56),s.Yb(9,"strong"),s.Uc(10,"Name"),s.Xb(),s.Xb(),s.Yb(11,"th",57),s.Yb(12,"strong"),s.Uc(13,"Qty"),s.Xb(),s.Xb(),s.Yb(14,"th",58),s.Yb(15,"strong"),s.Uc(16,"MOA"),s.Xb(),s.Xb(),s.Xb(),s.Xb(),s.Yb(17,"tbody"),s.Sc(18,K,7,10,"tr",12),s.Xb(),s.Xb(),s.Xb()),2&t){const t=s.mc(3);s.Fb(4),s.Gb("colspan",4),s.Fb(14),s.tc("ngForOf",t.PrintPrescriptionDTO.lstSuggestedPrintMedicine)}}function tt(t,e){if(1&t&&(s.Yb(0,"div",6),s.Yb(1,"table",64),s.Yb(2,"tr",65),s.Yb(3,"td",66),s.Yb(4,"span"),s.Yb(5,"strong"),s.Uc(6,"Med Remarks : "),s.Xb(),s.Tb(7,"span",39),s.Xb(),s.Xb(),s.Xb(),s.Xb(),s.Xb()),2&t){const t=s.mc(3);s.Fb(7),s.tc("innerHTML",t.PrintPrescriptionDTO.MedicineRemarks,s.Mc)}}function et(t,e){if(1&t&&(s.Yb(0,"div",54),s.Sc(1,Z,19,2,"div",21),s.Sc(2,tt,8,1,"div",4),s.Xb()),2&t){const t=s.mc(2);s.Fb(1),s.tc("ngIf",null!=t.PrintPrescriptionDTO.lstSuggestedPrintMedicine&&null!=t.PrintPrescriptionDTO.lstSuggestedPrintMedicine&&(null==t.PrintPrescriptionDTO.lstSuggestedPrintMedicine?null:t.PrintPrescriptionDTO.lstSuggestedPrintMedicine.length)>0),s.Fb(1),s.tc("ngIf",null!=t.PrintPrescriptionDTO.MedicineRemarks&&null!=t.PrintPrescriptionDTO.MedicineRemarks&&""!=t.PrintPrescriptionDTO.MedicineRemarks)}}function it(t,e){1&t&&s.Tb(0,"div",51)}function nt(t,e){if(1&t&&(s.Yb(0,"tr"),s.Yb(1,"td",73),s.Uc(2),s.Xb(),s.Yb(3,"td",74),s.Uc(4),s.Xb(),s.Yb(5,"td",71),s.Uc(6),s.Xb(),s.Xb()),2&t){const t=e.$implicit,i=e.index;s.Fb(2),s.Wc("(",i+1,")"),s.Fb(2),s.Wc(" ",t.MasterName,""),s.Fb(2),s.Xc("",t.Remarks," (",t.Timing,")")}}function rt(t,e){if(1&t&&(s.Yb(0,"div",22),s.Yb(1,"table",67),s.Yb(2,"thead",30),s.Yb(3,"tr"),s.Yb(4,"td",68),s.Uc(5," Yoga Therapy"),s.Xb(),s.Xb(),s.Yb(6,"tr",69),s.Tb(7,"th",55),s.Yb(8,"th",70),s.Yb(9,"strong"),s.Uc(10,"Yoga Name"),s.Xb(),s.Xb(),s.Yb(11,"th",71),s.Yb(12,"strong"),s.Uc(13,"Duration"),s.Xb(),s.Xb(),s.Xb(),s.Xb(),s.Yb(14,"tbody",72),s.Sc(15,nt,7,4,"tr",12),s.Xb(),s.Xb(),s.Xb()),2&t){const t=s.mc(3);s.Fb(15),s.tc("ngForOf",t.PrintPrescriptionDTO.lstSuggestedPrintYoga)}}function st(t,e){if(1&t&&(s.Yb(0,"div",22),s.Yb(1,"table",64),s.Yb(2,"tr",65),s.Yb(3,"td",66),s.Yb(4,"strong"),s.Uc(5,"Yoga Remarks : "),s.Xb(),s.Tb(6,"span",39),s.Xb(),s.Xb(),s.Xb(),s.Xb()),2&t){const t=s.mc(3);s.Fb(6),s.tc("innerHTML",t.PrintPrescriptionDTO.YogaRemarks,s.Mc)}}function ct(t,e){if(1&t&&(s.Yb(0,"div",54),s.Sc(1,rt,16,1,"div",21),s.Sc(2,st,7,1,"div",21),s.Xb()),2&t){const t=s.mc(2);s.Fb(1),s.tc("ngIf",null!=t.PrintPrescriptionDTO.lstSuggestedPrintYoga&&null!=t.PrintPrescriptionDTO.lstSuggestedPrintYoga&&(null==t.PrintPrescriptionDTO.lstSuggestedPrintYoga?null:t.PrintPrescriptionDTO.lstSuggestedPrintYoga.length)>0),s.Fb(1),s.tc("ngIf",null!=t.PrintPrescriptionDTO.YogaRemarks&&null!=t.PrintPrescriptionDTO.YogaRemarks&&""!=t.PrintPrescriptionDTO.YogaRemarks)}}function ot(t,e){if(1&t&&(s.Yb(0,"div",2),s.Sc(1,A,1,0,"div",45),s.Sc(2,G,2,3,"div",46),s.Yb(3,"div",47),s.Yb(4,"div",6),s.Yb(5,"table",48),s.Yb(6,"tbody"),s.Sc(7,j,6,1,"tr",1),s.Sc(8,z,7,1,"tr",1),s.Sc(9,W,6,1,"tr",1),s.Sc(10,_,6,1,"tr",1),s.Sc(11,E,6,1,"tr",1),s.Xb(),s.Xb(),s.Xb(),s.Xb(),s.Sc(12,et,3,2,"div",49),s.Sc(13,it,1,0,"div",45),s.Sc(14,ct,3,2,"div",49),s.Tb(15,"div",50),s.Xb()),2&t){const t=s.mc();s.Fb(1),s.tc("ngIf","all"==t.IsMedicine),s.Fb(1),s.tc("ngIf","all"==t.IsMedicine),s.Fb(5),s.tc("ngIf",t.IsMainComplaint&&null!=t.PrintPrescriptionDTO.Diagnosis&&null!=t.PrintPrescriptionDTO.Diagnosis&&""!=t.PrintPrescriptionDTO.Diagnosis),s.Fb(1),s.tc("ngIf",null!=t.diseases&&null!=t.diseases&&""!=t.diseases),s.Fb(1),s.tc("ngIf",null!=t.PrintPrescriptionDTO.PrescPathTest&&null!=t.PrintPrescriptionDTO.PrescPathTest&&""!=t.PrintPrescriptionDTO.PrescPathTest),s.Fb(1),s.tc("ngIf",null!=t.PrintPrescriptionDTO.PrescRadiolTest&&null!=t.PrintPrescriptionDTO.PrescRadiolTest&&""!=t.PrintPrescriptionDTO.PrescRadiolTest),s.Fb(1),s.tc("ngIf",null!=t.PrintPrescriptionDTO.DoctorRemarks&&null!=t.PrintPrescriptionDTO.DoctorRemarks&&""!=t.PrintPrescriptionDTO.DoctorRemarks),s.Fb(1),s.tc("ngIf","medicine"==t.IsMedicine||"all"==t.IsMedicine),s.Fb(1),s.tc("ngIf","all"==t.IsMedicine),s.Fb(1),s.tc("ngIf","yoga"==t.IsMedicine||"all"==t.IsMedicine)}}function lt(t,e){if(1&t){const t=s.Zb();s.Yb(0,"div"),s.Yb(1,"app-print-access-header",75),s.ic("onselectedLetterhead",function(e){return s.Lc(t),s.mc().onselectedLetterhead(e)})("onselectedMedicine",function(e){return s.Lc(t),s.mc().onselectedMedicine(e)})("OnselectedStartDate",function(e){return s.Lc(t),s.mc().OnselectedStartDate(e)})("onPrint",function(e){return s.Lc(t),s.mc().onPrint(e)}),s.Xb(),s.Xb()}if(2&t){const t=s.mc();s.Fb(1),s.tc("IsLetterhead",t.IsLetterhead)("IsMedicine",t.IsMedicine)("lstPrintDate",t.lstPrintDate)("SelectedStartDate",t.SelectedStartDate)("IsIPD",!0)("IsPrint",!0)}}let at=(()=>{class t extends r.a{constructor(t,e,i,r,s,c){var o;super(),this.cdRef=t,this._DoctorServices=e,this.datepipe=i,this.route=r,this._ConstantsService=s,this._UtilityService=c,this.lsobjClinicMaster=JSON.parse(localStorage.getItem("objClinicMaster"))||null,this.InputType=0,this.customDateFormat=n.h,this.treatmentTimeDetails=n.r,this.IsTreatmmentShift=!1,this.diseaseName="",this.tag="",this.slotBookingId=null,this.userId=null,this.diseases=null,this.PrintPrescriptionDTO={},this.IsLetterhead="false",this.IsMedicine="all",this.lstTreatHead=[],this.lstTreatmentList=[],this.lstDietHead=[],this.lstDietList=[],this.lstPrintDate=[],this.SelectedStartDate=null,this.IsMainComplaint=!0,this.IsNote=!0,this.stlstNoteList=[],this.selectedstlstNoteList=[],this.SelectedNote="",this.Language="English",this.IsTreatmmentShift=1==(null===(o=this.lsobjClinicMaster)||void 0===o?void 0:o.IsTreatmmentShift),this.stlstNoteList=[{id:"1",name:"Kit + Abdomen/Calf/Neck  \u0915\u093f\u091f + \u092a\u0947\u091f / \u092a\u093f\u0902\u0921\u0932\u0940 / \u0917\u0932\u093e",code:!0},{id:"2",name:"Kit + Abdomen/Calf  \u0915\u093f\u091f\xa0+\xa0\u092a\u0947\u091f\xa0/\xa0\u092a\u093f\u0902\u0921\u0932\u0940",code:!0}],this.selectedstlstNoteList=this.stlstNoteList}ngOnInit(){this.unsubscribe.add=this.route.queryParams.subscribe(t=>{this.userId=t.UserId,this.slotBookingId=t.SlotBookingId,this.tag=t.tag}),1==this.InputType&&(this.IsNote=!1),this.ResetPrescriptionDiseaseSelected(),this.GetPrintPrescriptionListBySlotId(this.tag)}ShowNote(t,e){this.ResetPrescriptionDiseaseSelected()}ResetPrescriptionDiseaseSelected(){this.SelectedNote="";var t=this.selectedstlstNoteList.filter(t=>1==t.code);if((null==t?void 0:t.length)>0){var e=1;null==t||t.map(i=>{this.SelectedNote=e==(null==t?void 0:t.length)?this.SelectedNote+i.name:this.SelectedNote+i.name+", ",e+=1}),this.cdRef.detectChanges()}}GetPrintPrescriptionListBySlotId(t){this._UtilityService.showSpinner(),this.unsubscribe.add=this._DoctorServices.GetPrintPrescriptionListBySlotId(this.slotBookingId,t,"Hindi"==this.Language).subscribe(t=>{var e,i,n,r,s,c,o,l,a,b,d,p,h,g,P,u;if(this._UtilityService.hideSpinner(),1==t.actionResult.success){var f=JSON.parse(t.actionResult.result);if(f=f||[],this.diseases="",this.PrintPrescriptionDTO=f,0==this.InputType&&null!=(null===(e=this.PrintPrescriptionDTO)||void 0===e?void 0:e.PeriodFrom)&&null!=(null===(i=this.PrintPrescriptionDTO)||void 0===i?void 0:i.PeriodFrom)&&null!=(null===(n=this.PrintPrescriptionDTO)||void 0===n?void 0:n.PeriodUpto)&&null!=(null===(r=this.PrintPrescriptionDTO)||void 0===r?void 0:r.PeriodUpto)&&(null==this.SelectedStartDate||null==this.SelectedStartDate)){var m=new Date(new Date(null===(s=this.PrintPrescriptionDTO)||void 0===s?void 0:s.PeriodFrom)),D=new Date(new Date(null===(c=this.PrintPrescriptionDTO)||void 0===c?void 0:c.PeriodUpto)),T=Math.floor((D-m)/864e5);for(let t=0;t<=T;t++){var Y=new Date(null===(o=this.PrintPrescriptionDTO)||void 0===o?void 0:o.PeriodFrom);Y.setDate(Y.getDate()+t),this.lstPrintDate.push({StartDate:new Date(Y)})}this.SelectedStartDate=new Date(new Date(null===(l=this.PrintPrescriptionDTO)||void 0===l?void 0:l.PeriodFrom)),this.datepipe.transform(new Date,"yyyy-MM-dd")<=this.datepipe.transform(null===(a=this.PrintPrescriptionDTO)||void 0===a?void 0:a.PeriodUpto,"yyyy-MM-dd")&&(this.SelectedStartDate=new Date(this.datepipe.transform(new Date,"yyyy-MM-dd")))}if(null!=this.PrintPrescriptionDTO.lstPrescriptionPrintDisease&&(null===(b=this.PrintPrescriptionDTO.lstPrescriptionPrintDisease)||void 0===b?void 0:b.length)>0&&(this.PrintPrescriptionDTO.lstPrescriptionPrintDisease.forEach(t=>{this.diseases+=t.DiseaseName+", "}),this.diseases=this.diseases.slice(0,-2)),null!=this.PrintPrescriptionDTO.lstSuggestedPrintMedicine&&null!=this.PrintPrescriptionDTO.lstSuggestedPrintMedicine){if(null!=this.SelectedStartDate&&null!=this.SelectedStartDate&&(null===(d=this.PrintPrescriptionDTO.lstSuggestedPrintMedicine)||void 0===d?void 0:d.length)>0)var X=1;for(var S=0;S<this.PrintPrescriptionDTO.lstSuggestedPrintMedicine.length;S++)this.PrintPrescriptionDTO.lstSuggestedPrintMedicine[S].rowgroup&&(this.PrintPrescriptionDTO.lstSuggestedPrintMedicine[S].GroupNumber=X,X+=1)}if((null===(p=t.actionResult.result3)||void 0===p?void 0:p.length)>0){var I=JSON.parse(t.actionResult.result3);this.lstDietList=I=I||[]}if(this.lstTreatmentList=[],(null===(h=t.actionResult.result2)||void 0===h?void 0:h.length)>0){var O=JSON.parse(t.actionResult.result2);this.lstTreatmentList=O=O||[],null!=this.SelectedStartDate&&null!=this.SelectedStartDate&&(null===(g=this.lstTreatmentList)||void 0===g?void 0:g.length)>0&&(this.lstTreatmentList=this.lstTreatmentList.filter(t=>new Date(t.Date.replace(/[/]/g,"-").split("-").reverse().join("-"))>=new Date(this.datepipe.transform(this.SelectedStartDate,"yyyy-MM-dd"))));var M=this.lstTreatmentList.filter(t=>null!=t[this.treatmentTimeDetails.Time9PM]);this.PrintPrescriptionDTO.lstTreatmentField&&(this.lstTreatHead=this.PrintPrescriptionDTO.lstTreatmentField,0==(null==M?void 0:M.length)&&(this.lstTreatHead=this.lstTreatHead.filter(t=>t.field!=this.treatmentTimeDetails.Time9PM)),this.IsTreatmmentShift||(this.lstTreatHead=this.lstTreatHead.filter(t=>"Shift"!=t.field)))}this.lstDietList=[],(null===(P=t.actionResult.result3)||void 0===P?void 0:P.length)>0&&(I=JSON.parse(t.actionResult.result3),this.lstDietList=I=I||[],null!=this.SelectedStartDate&&null!=this.SelectedStartDate&&(null===(u=this.lstDietList)||void 0===u?void 0:u.length)>0&&(this.lstDietList=this.lstDietList.filter(t=>new Date(t.Date.replace(/[/]/g,"-").split("-").reverse().join("-"))>=new Date(this.datepipe.transform(this.SelectedStartDate,"yyyy-MM-dd")))),this.PrintPrescriptionDTO.lstDietField&&(this.lstDietHead=this.PrintPrescriptionDTO.lstDietField,this.IsTreatmmentShift||(this.lstDietHead=this.lstDietHead.filter(t=>"Shift"!=t.field)))),this.calculateAge(),this.cdRef.detectChanges()}else this.cdRef.detectChanges()},t=>{this._UtilityService.hideSpinner(),this._UtilityService.showErrorAlert(t.message)})}calculateAge(){if(null!=this.PrintPrescriptionDTO.DateOfBirth){var t=new Date,e=new Date(this.PrintPrescriptionDTO.DateOfBirth),i=t.getFullYear()-e.getFullYear(),n=t.getMonth()-e.getMonth(),r=t.getDate()-e.getDate();n<=0&&(i--,n=12+n),t.getDate()<e.getDate()&&(n--,r=30+r),12==n&&(i+=1,n=0),this.PrintPrescriptionDTO.Age=i>0?i+" yrs":n+" month "+r+" day"}}onselectedLetterhead(t){this.IsLetterhead=t}onselectedLanguage(t){this.Language=t,this.GetPrintPrescriptionListBySlotId("IPD")}onselectedMedicine(t){this.IsMedicine=t}OnselectedStartDate(t){this.SelectedStartDate=t,this.GetPrintPrescriptionListBySlotId("IPD")}onChangeMainComplaint(t){this.IsMainComplaint=t}onChangeNote(t){this.IsNote=t}onPrint(t){t&&this.print()}print(){"medicine"==this.IsMedicine||"yoga"==this.IsMedicine?$("head").append("<style>@page { size: A4 !important; }</style>"):$("head").append("<style>@page { size: A4 landscape !important; }</style>"),$("title").html(this.PrintPrescriptionDTO.PaitentName+" "+this.PrintPrescriptionDTO.MRNo+" "+this.PrintPrescriptionDTO.PatientContactNumber+", "+("Male"===this.PrintPrescriptionDTO.Gender?"M":"Female"===this.PrintPrescriptionDTO.Gender?"F":this.PrintPrescriptionDTO.Gender)+", "+this.PrintPrescriptionDTO.Age+", DOA: "+this.datepipe.transform(this.PrintPrescriptionDTO.PeriodFrom,this.customDateFormat.DEF_DATE)+", "+this.PrintPrescriptionDTO.DoctorName);var t=window.location.href;history.replaceState(history.state,"","/"),window.print(),history.replaceState(history.state,"",t),$("title").html("Patanjali Wellness")}}return t.\u0275fac=function(e){return new(e||t)(s.Sb(s.h),s.Sb(c.a),s.Sb(o.f),s.Sb(l.a),s.Sb(n.f),s.Sb(a.a))},t.\u0275cmp=s.Mb({type:t,selectors:[["app-ipd-print-prescription"]],inputs:{InputType:"InputType",tag:"tag",IsMedicine:"IsMedicine"},features:[s.Cb],decls:17,vars:8,consts:[[1,"container","invoice-container"],[4,"ngIf"],[1,"wd100"],[3,"IsPrescription","slotBookingId","IsLetterhead"],["class","table-responsive",4,"ngIf"],["class","wd100",4,"ngIf"],[1,"table-responsive"],[1,"table",2,"border-color","none !important"],[1,"pt-10","text-right"],["rel","stylesheet","href","https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css"],[3,"IsLetterhead","IsOnlyLanguage","SelectLanguage","IsMedicine","IsMainComplaint","IsNote","lstPrintDate","SelectedStartDate","IsIPD","IsPrint","onselectedLetterhead","onselectedLanguage","onselectedMedicine","OnselectedStartDate","OnChangeMainComplaint","OnChangeNote","onPrint"],[1,"d-print-none","table","pdzerotable","mb-2","text-center"],[4,"ngFor","ngForOf"],[1,"bold","mb-2",2,"font-size","17px"],["inputId","binary",3,"ngModelOptions","ngModel","binary","onChange","ngModelChange"],["for","binary",1,"ml-2"],[1,"table","pdzerotable","mb-0","text-center"],[2,"text-align","left"],["class","wd25","style","text-align: left; padding: 0; padding-bottom: 10px !important;",4,"ngIf"],["class","wd25","style","text-align: left; padding: 0; padding-bottom: 10px !important; padding-right: 15px !important;",4,"ngIf"],["class","wd25","style","text-align: left; padding: 2px; padding-bottom: 10px !important; padding-right: 15px !important;",4,"ngIf"],["class","table-responsive mb-5",4,"ngIf"],[1,"table-responsive","mb-5"],[1,"text-left",2,"padding-bottom","40px"],[1,"wd25",2,"text-align","left","padding","0","padding-bottom","10px !important"],[2,"margin-bottom","0 !important","word-break","break-word",3,"innerHTML"],[1,"wd25",2,"text-align","left","padding","0","padding-bottom","10px !important","padding-right","15px !important"],[2,"word-break","break-word"],[1,"wd25",2,"text-align","left","padding","2px","padding-bottom","10px !important","padding-right","15px !important"],[2,"margin-bottom","0 !important",3,"innerHTML"],[1,"card-header"],["colspan","11",1,"t-head"],[2,"width","10%"],[2,"width","9%"],[1,"unitcolor"],[1,"table","mb-0","text-center"],[1,"t-head"],["style","border: 1px solid #000000;",3,"ngStyle",4,"ngFor","ngForOf"],[2,"border","1px solid #000000",3,"ngStyle"],[3,"innerHTML"],[1,"text-left",2,"padding-bottom","5px"],[1,"text-left",2,"height","50px","padding-top","10px"],[1,"text-center","t-head"],["class","bold",4,"ngIf"],[1,"bold"],["class","page-break",4,"ngIf"],["class","divhide",4,"ngIf"],[1,"wd25",2,"vertical-align","top","float","left"],[1,"table","pdzerotable","mb-0","text-center",2,"border-color","none !important"],["class","wd75","style","float: right;",4,"ngIf"],[1,"clearfix"],[1,"page-break"],[1,"divhide"],[2,"text-align","left","padding","0","padding-bottom","10px !important"],[1,"wd75",2,"float","right"],[2,"width","2%","text-align","center"],[2,"width","35%","text-align","left"],[2,"width","5%"],[2,"width","58%"],["style","width: 2%;text-align: center;vertical-align: top;",3,"rowSpan",4,"ngIf"],[2,"width","35%","text-align","left","vertical-align","top"],["style","width: 58%;text-align: left;border-left:1px solid #000000; padding-left: 10px !important;",3,"rowSpan","class",4,"ngIf"],[2,"width","2%","text-align","center","vertical-align","top",3,"rowSpan"],[2,"width","58%","text-align","left","border-left","1px solid #000000","padding-left","10px !important",3,"rowSpan"],[1,"table","pdzerotable",2,"border","none !important"],[2,"border","0 !important","margin-bottom","10px !important"],[2,"text-align","left","padding","0","width","100%","border","0"],[1,"table","pdzerotable","mb-10","text-center"],["colspan","4",1,"t-head"],[2,"border-bottom","2px solid #000000!important"],[2,"width","78%",";text-align","left"],[2,"width","20%"],[2,"border-top","none","border-color","#eaeaea"],[2,"width","2%",";text-align","center"],[2,"width","78%","text-align","left","vertical-align","top"],[3,"IsLetterhead","IsMedicine","lstPrintDate","SelectedStartDate","IsIPD","IsPrint","onselectedLetterhead","onselectedMedicine","OnselectedStartDate","onPrint"]],template:function(t,e){1&t&&(s.Yb(0,"article"),s.Yb(1,"div",0),s.Sc(2,P,2,10,"div",1),s.Yb(3,"div",2),s.Tb(4,"app-print-header",3),s.Sc(5,m,7,2,"div",4),s.Sc(6,V,22,10,"div",5),s.Sc(7,ot,16,10,"div",5),s.Yb(8,"div",2),s.Yb(9,"div",6),s.Yb(10,"table",7),s.Yb(11,"tr"),s.Yb(12,"td",8),s.Yb(13,"h5"),s.Uc(14,"Doctor\u2019s Signature/ \u091a\u093f\u0915\u093f\u0924\u094d\u0938\u0915 \u0915\u0947 \u0939\u0938\u094d\u0924\u093e\u0915\u094d\u0937\u0930"),s.Xb(),s.Xb(),s.Xb(),s.Xb(),s.Xb(),s.Xb(),s.Xb(),s.Sc(15,lt,2,6,"div",1),s.Xb(),s.Xb(),s.Tb(16,"link",9)),2&t&&(s.Fb(2),s.tc("ngIf",0==e.InputType),s.Fb(2),s.tc("IsPrescription",!0)("slotBookingId",e.slotBookingId)("IsLetterhead",e.IsLetterhead),s.Fb(1),s.tc("ngIf","YGM"==(null==e.lsobjClinicMaster?null:e.lsobjClinicMaster.ShortCode)),s.Fb(1),s.tc("ngIf","diet"==e.IsMedicine||"treatment"==e.IsMedicine||"all"==e.IsMedicine||"withoutmedicine"==e.IsMedicine),s.Fb(1),s.tc("ngIf",(null!=e.PrintPrescriptionDTO.lstSuggestedPrintMedicine&&null!=e.PrintPrescriptionDTO.lstSuggestedPrintMedicine&&(null==e.PrintPrescriptionDTO||null==e.PrintPrescriptionDTO.lstSuggestedPrintMedicine?null:e.PrintPrescriptionDTO.lstSuggestedPrintMedicine.length)>0||null!=e.PrintPrescriptionDTO.lstSuggestedPrintYoga&&null!=e.PrintPrescriptionDTO.lstSuggestedPrintYoga&&(null==e.PrintPrescriptionDTO||null==e.PrintPrescriptionDTO.lstSuggestedPrintYoga?null:e.PrintPrescriptionDTO.lstSuggestedPrintYoga.length)>0)&&("medicine"==e.IsMedicine||"all"==e.IsMedicine||"yoga"==e.IsMedicine)),s.Fb(8),s.tc("ngIf",0==e.InputType))},directives:[o.p,b.a,d.a,o.o,p.a,h.o,h.r,o.q],pipes:[o.f,g],styles:["","@page {\n        size[_ngcontent-%COMP%]:   A4[_ngcontent-%COMP%]   landscape[_ngcontent-%COMP%];\n    }"]}),t})()},coK0:function(t,e,i){"use strict";i.r(e),i.d(e,"IpdPrintPrescriptionModule",function(){return u});var n=i("ofXK"),r=i("tyNb"),s=i("E3nD"),c=i("fXoL");const o=[{path:"",component:s.a}];let l=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.Qb({type:t}),t.\u0275inj=c.Pb({imports:[[r.l.forChild(o)],r.l]}),t})();var a=i("3Pt+"),b=i("arFO"),d=i("QoE7"),p=i("LuMj"),h=i("9XlL"),g=i("ycwT"),P=i("Ji6n");let u=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.Qb({type:t}),t.\u0275inj=c.Pb({imports:[[n.c,l,a.i,b.b,p.b,d.a,h.a,g.a,P.b]]}),t})()}}]);