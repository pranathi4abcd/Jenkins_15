(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{"5K4H":function(t,e,i){"use strict";i.r(e),i.d(e,"YearlyBookingDetailsStatewiseReportModule",function(){return G});var n=i("ofXK"),c=i("tyNb"),o=i("CwUn"),s=i("Nach"),r=i("fXoL"),l=i("dcBc"),a=i("PtJb"),d=i("NLkC"),b=i("arFO"),u=i("3Pt+"),p=i("7zfz"),h=i("rEr+"),S=i("AAHA"),f=i("jIHw");function g(t,e){if(1&t){const t=r.Zb();r.Yb(0,"div",24),r.Yb(1,"app-center-dropdown",25),r.ic("onclinicSelect",function(e){return r.Lc(t),r.mc().onclinicSelect(e)}),r.Xb(),r.Xb()}2&t&&(r.Fb(1),r.tc("mode","get"))}function y(t,e){1&t&&r.Uc(0),2&t&&r.Wc(" ",e.$implicit.name," ")}function m(t,e){if(1&t){const t=r.Zb();r.Yb(0,"button",29),r.ic("click",function(){return r.Lc(t),r.mc(2).exportToItemExcel()}),r.Xb()}}function C(t,e){if(1&t&&(r.Yb(0,"div",26),r.Yb(1,"span",27),r.Sc(2,m,1,0,"button",28),r.Xb(),r.Xb()),2&t){const t=r.mc();r.Fb(2),r.tc("ngIf",(null==t.lstIAccessStr?null:t.lstIAccessStr.includes(t.ActionList.Download.toString()))&&(null==t.lstReport?null:t.lstReport.length)>0)}}function I(t,e){if(1&t&&(r.Yb(0,"tr"),r.Yb(1,"td"),r.Uc(2," No records found "),r.Xb(),r.Xb()),2&t){const t=e.$implicit;r.Fb(1),r.Gb("colspan",null==t?null:t.length)}}function v(t,e){1&t&&r.Tb(0,"col",32)}function Y(t,e){if(1&t&&(r.Yb(0,"colgroup"),r.Sc(1,v,1,0,"col",31),r.Xb()),2&t){const t=r.mc(2);r.Fb(1),r.tc("ngForOf",t.lstReportField)}}function X(t,e){1&t&&(r.Yb(0,"colgroup"),r.Tb(1,"col",33),r.Tb(2,"col",33),r.Xb())}function w(t,e){if(1&t&&(r.Sc(0,Y,2,1,"colgroup",30),r.Sc(1,X,3,0,"colgroup",30)),2&t){const t=r.mc();r.tc("ngIf","606d3703bfc80f59b4cbc6bb"==t.CountryIdSelected||"All"==t.CountryIdSelected||"Overseas"==t.CountryIdSelected),r.Fb(1),r.tc("ngIf","606d3703bfc80f59b4cbc6bb"!=t.CountryIdSelected&&"All"!=t.CountryIdSelected&&"Overseas"!=t.CountryIdSelected)}}function U(t,e){if(1&t&&(r.Yb(0,"th"),r.Uc(1),r.Xb()),2&t){const t=e.$implicit;r.Fb(1),r.Wc(" ",t.header," ")}}function R(t,e){if(1&t&&(r.Yb(0,"tr"),r.Sc(1,U,2,1,"th",34),r.Xb()),2&t){const t=r.mc(2);r.Fb(1),r.tc("ngForOf",t.lstReportField)}}function A(t,e){1&t&&(r.Yb(0,"tr"),r.Yb(1,"th"),r.Uc(2,"Month"),r.Xb(),r.Yb(3,"th"),r.Uc(4,"Total"),r.Xb(),r.Xb())}function F(t,e){if(1&t&&(r.Sc(0,R,2,1,"tr",30),r.Sc(1,A,5,0,"tr",30)),2&t){const t=r.mc();r.tc("ngIf","606d3703bfc80f59b4cbc6bb"==t.CountryIdSelected||"All"==t.CountryIdSelected||"Overseas"==t.CountryIdSelected),r.Fb(1),r.tc("ngIf","606d3703bfc80f59b4cbc6bb"!=t.CountryIdSelected&&"All"!=t.CountryIdSelected&&"Overseas"!=t.CountryIdSelected)}}function M(t,e){if(1&t&&(r.Yb(0,"td",36),r.Uc(1),r.Xb()),2&t){const t=e.$implicit,i=r.mc(2).$implicit;r.Fb(1),r.Wc(" ",null==i[t.field]?"0":i[t.field]," ")}}function k(t,e){if(1&t&&(r.Yb(0,"tr"),r.Sc(1,M,2,1,"td",35),r.Xb()),2&t){const t=r.mc().columns;r.Fb(1),r.tc("ngForOf",t)}}function B(t,e){if(1&t&&(r.Yb(0,"tr"),r.Yb(1,"td"),r.Uc(2),r.Xb(),r.Yb(3,"td"),r.Uc(4),r.Xb(),r.Xb()),2&t){const t=r.mc().$implicit;r.Fb(2),r.Vc(t.Month),r.Fb(2),r.Vc(t.Total)}}function L(t,e){if(1&t&&(r.Sc(0,k,2,1,"tr",30),r.Sc(1,B,5,2,"tr",30)),2&t){const t=r.mc();r.tc("ngIf","606d3703bfc80f59b4cbc6bb"==t.CountryIdSelected||"All"==t.CountryIdSelected||"Overseas"==t.CountryIdSelected),r.Fb(1),r.tc("ngIf","606d3703bfc80f59b4cbc6bb"!=t.CountryIdSelected&&"All"!=t.CountryIdSelected&&"Overseas"!=t.CountryIdSelected)}}function O(t,e){if(1&t&&(r.Yb(0,"tr"),r.Yb(1,"td"),r.Uc(2,"Total"),r.Xb(),r.Yb(3,"td"),r.Uc(4),r.Xb(),r.Xb()),2&t){const t=r.mc(2);r.Fb(4),r.Vc(t.totalBooking)}}function T(t,e){if(1&t&&r.Sc(0,O,5,1,"tr",30),2&t){const t=r.mc();r.tc("ngIf","606d3703bfc80f59b4cbc6bb"!=t.CountryIdSelected&&"All"!=t.CountryIdSelected&&"Overseas"!=t.CountryIdSelected)}}const _=function(){return{width:"100%"}},D=function(){return{standalone:!0}},W=[{path:"",component:(()=>{class t extends o.a{constructor(t,e,i,n,c,o){super(),this.cdRef=t,this.router=e,this._ConstantServices=i,this._MasterServices=n,this._ReportServices=c,this._UtilityService=o,this.UserTypeCurre=localStorage.getItem("userTypeId"),this.stlstYear=[],this.ClinicIdSelected=null,this.CountryIdSelected="All",this.lstCountryMaster=[],this.userTypes=s.s,this.lstReport=[],this.lstReportField=[],this.filteredValuesLength=0,this.ActionList=s.a,this.lstIAccess=[],this.lstIAccessStr=[],this._ConstantServices.ActiveMenuName="Geo Wise Booking Report";for(var r=2022,l=(new Date).getFullYear()+1;l>=r;)this.stlstYear.push({name:r,code:r}),r+=1;this.year=(new Date).getFullYear(),this.getPageLevelAccess()}getPageLevelAccess(){var t,e,i=this.getUrlWithoutParams(),n=JSON.parse(localStorage.getItem("UerRoleAccess"))||[];(null==n?void 0:n.find(t=>t.MenuItemURL===i))&&(this.lstIAccess=null===(t=n.find(t=>t.MenuItemURL===i))||void 0===t?void 0:t.ActionIAccess,(null===(e=this.lstIAccess)||void 0===e?void 0:e.length)>0&&this.lstIAccess.map(t=>{this.lstIAccessStr.push(t.ActionId.toString())}))}getUrlWithoutParams(){let t=this.router.parseUrl(this.router.url);return t.queryParams={},t.fragment=null,t.toString()}ngOnInit(){s.s.SuperAdmin!==localStorage.getItem("userTypeId")&&(this.ClinicIdSelected=localStorage.getItem("ClinicId"),this.LoadYearlyBookingDetailsStateWise()),this.GetBookingCountryListByYear()}onclinicSelect(t){this.ClinicIdSelected=t,this.GetBookingCountryListByYear(),this.LoadYearlyBookingDetailsStateWise()}GetBookingCountryListByYear(){this._UtilityService.showSpinner(),this.unsubscribe.add=this._ReportServices.GetBookingCountryListByYear(this.ClinicIdSelected,this.year).subscribe(t=>{if(this._UtilityService.hideSpinner(),1==t.actionResult.success){var e=JSON.parse(t.actionResult.result);this.lstCountryMaster=e=e||[],this.lstCountryMaster.unshift({name:"Overseas",CountryId:"Overseas"}),this.lstCountryMaster.unshift({name:"All",CountryId:"All"}),this.cdRef.detectChanges()}else this.lstCountryMaster=[],this.cdRef.detectChanges()},t=>{this._UtilityService.hideSpinner(),this._UtilityService.showErrorAlert(t.message)})}LoadCountryMaster(){this._UtilityService.showSpinner(),this.unsubscribe.add=this._MasterServices.GetCountryMaster().subscribe(t=>{if(this._UtilityService.hideSpinner(),1==t.actionResult.success){var e=JSON.parse(t.actionResult.result);this.lstCountryMaster=e=e||[],this.cdRef.detectChanges()}else this.lstCountryMaster=[],this.cdRef.detectChanges()},t=>{this._UtilityService.hideSpinner(),this._UtilityService.showErrorAlert(t.message)})}LoadYearlyBookingDetailsStateWise(){this.totalBooking=null,this._UtilityService.showSpinner(),this.unsubscribe.add=this._ReportServices.GetYearlyBookingDetailsStateWise(this.ClinicIdSelected,this.year,this.CountryIdSelected).subscribe(t=>{if(this._UtilityService.hideSpinner(),1==t.actionResult.success){var e=JSON.parse(t.actionResult.result);this.lstReport=e=e||[],"606d3703bfc80f59b4cbc6bb"!=this.CountryIdSelected&&(this.totalBooking=this.lstReport.map(t=>t.Total).reduce(function(t,e){return t+e})),this.cdRef.detectChanges()}1==t.actionResult.success?(e=JSON.parse(t.actionResult.result2),this.lstReportField=e=e||[],this.cdRef.detectChanges()):(this.lstReport=[],this.cdRef.detectChanges())},t=>{this._UtilityService.hideSpinner(),this._UtilityService.showErrorAlert(t.message)})}exportToItemExcel(){let t={reportname:"YearlyBookingDetailsStateWise",filename:"YearlyBookingDetailsStateWise"};t.clinicId=this.ClinicIdSelected,t.year=this.year,t.countryId=this.CountryIdSelected,this._MasterServices.downloadReport(t)}}return t.\u0275fac=function(e){return new(e||t)(r.Sb(r.h),r.Sb(c.i),r.Sb(s.f),r.Sb(l.a),r.Sb(a.a),r.Sb(d.a))},t.\u0275cmp=r.Mb({type:t,selectors:[["app-yearly-booking-details-statewise-report"]],features:[r.Cb],decls:35,vars:20,consts:[[1,"row","mt25"],[1,"col-md-12"],[1,"card"],[1,"card-body"],[1,"row","mb-2"],["class","col-md-3",4,"ngIf"],[1,"col-md-2"],[1,"form-group"],["for",""],[1,"required"],["optionLabel","name","optionValue","code",3,"options","ngModel","ngModelOptions","ngModelChange","onChange"],["optionLabel","name","optionValue","CountryId","placeholder","Please Select Country",3,"options","ngModel","ngModelOptions","filter","ngModelChange","onChange"],["pTemplate","item"],[1,"col-md-2","mt-7"],["type","button","matTooltip","Search",1,"btn","btn-new-primary",3,"click"],[1,"row"],["scrollHeight","calc(100vh - 250px)","responsiveLayout","scroll",3,"columns","value","rowHover","scrollable"],["dt",""],["pTemplate","caption"],["pTemplate","emptymessage"],["pTemplate","colgroup"],["pTemplate","header"],["pTemplate","body"],["pTemplate","footer"],[1,"col-md-3"],[3,"mode","onclinicSelect"],[1,"p-d-flex"],[1,"p-ml-auto"],["pButton","","title","Export Data","label"," ","class","p-button-outlined mr-2","icon","pi pi-download",3,"click",4,"ngIf"],["pButton","","title","Export Data","label"," ","icon","pi pi-download",1,"p-button-outlined","mr-2",3,"click"],[4,"ngIf"],["style","width:140px",4,"ngFor","ngForOf"],[2,"width","140px"],[2,"width","80px"],[4,"ngFor","ngForOf"],["style","word-wrap: break-word;",4,"ngFor","ngForOf"],[2,"word-wrap","break-word"]],template:function(t,e){1&t&&(r.Yb(0,"div",0),r.Yb(1,"div",1),r.Yb(2,"div",2),r.Yb(3,"div",3),r.Yb(4,"div",4),r.Sc(5,g,2,1,"div",5),r.Yb(6,"div",6),r.Yb(7,"div",7),r.Yb(8,"label",8),r.Uc(9,"Select Year "),r.Yb(10,"span",9),r.Uc(11,"*"),r.Xb(),r.Xb(),r.Yb(12,"p-dropdown",10),r.ic("ngModelChange",function(t){return e.year=t})("onChange",function(){return e.GetBookingCountryListByYear(),e.LoadYearlyBookingDetailsStateWise()}),r.Xb(),r.Xb(),r.Xb(),r.Yb(13,"div",6),r.Yb(14,"div",7),r.Yb(15,"label",8),r.Uc(16,"Select Country "),r.Yb(17,"span",9),r.Uc(18,"*"),r.Xb(),r.Xb(),r.Yb(19,"p-dropdown",11),r.ic("ngModelChange",function(t){return e.CountryIdSelected=t})("onChange",function(){return e.LoadYearlyBookingDetailsStateWise()}),r.Sc(20,y,1,1,"ng-template",12),r.Xb(),r.Xb(),r.Xb(),r.Yb(21,"div",13),r.Yb(22,"div",7),r.Yb(23,"button",14),r.ic("click",function(){return e.LoadYearlyBookingDetailsStateWise()}),r.Uc(24," Search "),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Yb(25,"div",15),r.Yb(26,"div",1),r.Yb(27,"p-table",16,17),r.Sc(29,C,3,1,"ng-template",18),r.Sc(30,I,3,1,"ng-template",19),r.Sc(31,w,2,2,"ng-template",20),r.Sc(32,F,2,2,"ng-template",21),r.Sc(33,L,2,2,"ng-template",22),r.Sc(34,T,1,1,"ng-template",23),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Xb()),2&t&&(r.Fb(5),r.tc("ngIf",e.UserTypeCurre===e.userTypes.SuperAdmin),r.Fb(7),r.Pc(r.yc(16,_)),r.tc("options",e.stlstYear)("ngModel",e.year)("ngModelOptions",r.yc(17,D)),r.Fb(7),r.Pc(r.yc(18,_)),r.tc("options",e.lstCountryMaster)("ngModel",e.CountryIdSelected)("ngModelOptions",r.yc(19,D))("filter",!0),r.Fb(8),r.tc("columns",e.lstReportField)("value",e.lstReport)("rowHover",!0)("scrollable",!0))},directives:[n.p,b.a,u.o,u.r,p.i,h.c,S.a,f.b,n.o],styles:[""]}),t})()}];let x=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Qb({type:t}),t.\u0275inj=r.Pb({imports:[[c.l.forChild(W)],c.l]}),t})();var P=i("7kUa"),N=i("T2Aj");let G=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Qb({type:t}),t.\u0275inj=r.Pb({imports:[[n.c,x,u.i,h.f,f.c,b.b,P.b,N.a]]}),t})()}}]);