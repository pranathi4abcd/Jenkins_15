!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}function i(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{GFy8:function(i,c,a){"use strict";a.r(c),a.d(c,"RefferPatientAnotherCenterModule",function(){return V});var o=a("ofXK"),l=a("tyNb"),s=a("CwUn"),d=a("Nach"),u=a("fXoL"),f=a("dcBc"),b=a("ReGW"),p=a("NLkC"),h=a("eO1q"),y=a("3Pt+"),m=a("rEr+"),g=a("7zfz"),v=a("AAHA"),S=a("7kUa"),R=a("jIHw"),w=["calendar"],I=["dt"],Y=["filtr"];function X(e,t){if(1&e){var n=u.Zb();u.Yb(0,"div",6),u.Yb(1,"app-center-dropdown",20),u.ic("onclinicSelect",function(e){return u.Lc(n),u.mc().onclinicSelect(e)}),u.Xb(),u.Xb()}2&e&&(u.Fb(1),u.tc("mode","get"))}function F(e,t){if(1&e){var n=u.Zb();u.Yb(0,"button",29),u.ic("click",function(){return u.Lc(n),u.mc(2).exportToItemExcel()}),u.Xb()}}function T(e,t){if(1&e){var n=u.Zb();u.Yb(0,"div",21),u.Yb(1,"span",22),u.Uc(2),u.Xb(),u.Yb(3,"span",23),u.Sc(4,F,1,0,"button",24),u.Yb(5,"span",25),u.Tb(6,"i",26),u.Yb(7,"input",27,28),u.ic("input",function(e){return u.Lc(n),u.mc(),u.Ic(18).filterGlobal(e.target.value,"contains")}),u.Xb(),u.Xb(),u.Xb(),u.Xb()}if(2&e){var r=u.mc();u.Fb(2),u.Wc(" ",(null==r.lstRefferedList?null:r.lstRefferedList.length)>0?"Total Records: "+r.filteredValuesLength:""," "),u.Fb(2),u.tc("ngIf",null==r.lstIAccessStr?null:r.lstIAccessStr.includes(r.ActionList.Download.toString()))}}function U(e,t){1&e&&(u.Yb(0,"tr"),u.Yb(1,"td"),u.Uc(2," No records found "),u.Xb(),u.Xb()),2&e&&(u.Fb(1),u.Gb("colspan",19))}function D(e,t){1&e&&(u.Yb(0,"colgroup"),u.Tb(1,"col",30),u.Tb(2,"col",31),u.Tb(3,"col",32),u.Tb(4,"col",32),u.Tb(5,"col",33),u.Tb(6,"col",34),u.Tb(7,"col",34),u.Tb(8,"col",35),u.Xb())}function M(e,t){1&e&&(u.Yb(0,"tr"),u.Yb(1,"th"),u.Uc(2,"Name"),u.Xb(),u.Yb(3,"th"),u.Uc(4,"MR No"),u.Xb(),u.Yb(5,"th"),u.Uc(6,"Contact Number"),u.Xb(),u.Yb(7,"th"),u.Uc(8,"Email Id"),u.Xb(),u.Yb(9,"th"),u.Uc(10,"Referred By"),u.Xb(),u.Yb(11,"th"),u.Uc(12,"Referred On"),u.Xb(),u.Yb(13,"th"),u.Uc(14,"Referred From "),u.Xb(),u.Yb(15,"th"),u.Uc(16,"Referred Reason"),u.Xb(),u.Xb())}function L(e,t){if(1&e&&(u.Yb(0,"tr"),u.Yb(1,"td"),u.Uc(2),u.Xb(),u.Yb(3,"td"),u.Uc(4),u.Xb(),u.Yb(5,"td"),u.Uc(6),u.Xb(),u.Yb(7,"td"),u.Uc(8),u.Xb(),u.Yb(9,"td"),u.Uc(10),u.Xb(),u.Yb(11,"td"),u.Uc(12),u.nc(13,"date"),u.nc(14,"date"),u.Xb(),u.Yb(15,"td"),u.Uc(16),u.Xb(),u.Yb(17,"td"),u.Uc(18),u.Xb(),u.Xb()),2&e){var n=t.$implicit,r=u.mc();u.Fb(2),u.Vc(n.PatientName),u.Fb(2),u.Vc(n.MRNo),u.Fb(2),u.Vc(n.ContactNumber),u.Fb(2),u.Vc(n.Email),u.Fb(2),u.Vc(n.ReferredBy),u.Fb(2),u.Vc("0001"==u.pc(13,8,n.ReferredOn,"yyyy")?"":u.pc(14,11,n.ReferredOn,r.customDateFormat.DEF_DATE)),u.Fb(4),u.Vc(n.ReferredFrom),u.Fb(2),u.Vc(n.ReferredReason)}}var C,A,P,_=function(){return{standalone:!0}},O=function(){return["PatientName","MRNo","ContactNumber","Email","RefferedBy","RefferedReason","RefferedFrom"]},x=[{path:"",component:(C=function(i){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}(s,i);var c,a,o,l=r(s);function s(t,n,r,i,c,a,o){var u;return e(this,s),(u=l.call(this)).cdRef=t,u.router=n,u._ConstantServices=r,u._MasterServices=i,u._doctorService=c,u._UtilityService=a,u.datepipe=o,u.customDateFormat=d.h,u.userTypes=d.s,u.UserTypeCurre=localStorage.getItem("userTypeId"),u.lstRefferedList=[],u.rangeDates=[],u.filteredValuesLength=0,u.MaxYear=(new Date).getFullYear()+2,u.ActionList=d.a,u.lstIAccess=[],u.lstIAccessStr=[],u.rangeDates=[new Date,new Date],u.getPageLevelAccess(),u}return c=s,(a=[{key:"getPageLevelAccess",value:function(){var e,t,n=this,r=this.getUrlWithoutParams(),i=JSON.parse(localStorage.getItem("UerRoleAccess"))||[];(null==i?void 0:i.find(function(e){return e.MenuItemURL===r}))&&(this.lstIAccess=null===(e=i.find(function(e){return e.MenuItemURL===r}))||void 0===e?void 0:e.ActionIAccess,(null===(t=this.lstIAccess)||void 0===t?void 0:t.length)>0&&this.lstIAccess.map(function(e){n.lstIAccessStr.push(e.ActionId.toString())}))}},{key:"getUrlWithoutParams",value:function(){var e=this.router.parseUrl(this.router.url);return e.queryParams={},e.fragment=null,e.toString()}},{key:"ngOnInit",value:function(){this._ConstantServices.ActiveMenuName="Reffered Patient Report",this.cdRef.detectChanges(),d.s.SuperAdmin!==localStorage.getItem("userTypeId")&&(this.ClinicIdSelected=localStorage.getItem("ClinicId"),this.LoadReferredReportList())}},{key:"onclinicSelect",value:function(e){this.ClinicIdSelected=e,this.LoadReferredReportList()}},{key:"dateRangeChange",value:function(){this.rangeDates[0]&&this.rangeDates[1]&&(void 0!==this.calendar&&(this.calendar.overlayVisible=!1),this.LoadReferredReportList())}},{key:"LoadReferredReportList",value:function(){var e=this;if(""!=this.ClinicIdSelected&&null!=this.ClinicIdSelected&&null!=this.ClinicIdSelected){null!=this.rangeDates[0]&&null!=this.rangeDates[0]&&(this.dFrom=this.datepipe.transform(this.rangeDates[0],"yyyy-MM-dd")),null!=this.rangeDates[1]&&null!=this.rangeDates[1]&&(this.dTo=this.datepipe.transform(this.rangeDates[1],"yyyy-MM-dd"));var t={};t.clinicId=this.ClinicIdSelected,t.dFrom=new Date(this.datepipe.transform(this.dFrom,"yyyy-MM-dd")),t.dTo=new Date(this.datepipe.transform(this.dTo,"yyyy-MM-dd")),this._UtilityService.showSpinner(),this.unsubscribe.add=this._doctorService.GetReferredDetailsByClinic(t).subscribe(function(t){var n;if(e._UtilityService.hideSpinner(),e.cdRef.detectChanges(),1==t.actionResult.success){var r=JSON.parse(t.actionResult.result);e.lstRefferedList=r=r||[],e.filtr.nativeElement.value="",e.dataTable.reset(),e.filteredValuesLength=null===(n=e.lstRefferedList)||void 0===n?void 0:n.length}else e.lstRefferedList=[],e.filteredValuesLength=0,e.cdRef.detectChanges()},function(t){e._UtilityService.hideSpinner(),e._UtilityService.showErrorAlert(t.message)})}else this._UtilityService.showWarningAlert("Please select center")}},{key:"onFilter",value:function(e,t){this.filteredValuesLength=e.filteredValue.length}},{key:"exportToItemExcel",value:function(){if(""!=this.ClinicIdSelected&&null!=this.ClinicIdSelected&&null!=this.ClinicIdSelected){null!=this.rangeDates[0]&&null!=this.rangeDates[0]&&(this.dFrom=this.datepipe.transform(this.rangeDates[0],"yyyy-MM-dd")),null!=this.rangeDates[1]&&null!=this.rangeDates[1]&&(this.dTo=this.datepipe.transform(this.rangeDates[1],"yyyy-MM-dd"));var e={reportname:"ReferredPatientList",filename:"ReferredPatientList"};e.clinicId=this.ClinicIdSelected,e.dFrom=new Date(this.datepipe.transform(this.dFrom,"yyyy-MM-dd")),e.dTo=new Date(this.datepipe.transform(this.dTo,"yyyy-MM-dd")),this._MasterServices.downloadReport(e)}else this._UtilityService.showWarningAlert("Please select center")}}])&&t(c.prototype,a),o&&t(c,o),s}(s.a),C.\u0275fac=function(e){return new(e||C)(u.Sb(u.h),u.Sb(l.i),u.Sb(d.f),u.Sb(f.a),u.Sb(b.a),u.Sb(p.a),u.Sb(o.f))},C.\u0275cmp=u.Mb({type:C,selectors:[["app-referr-patient-another-center"]],viewQuery:function(e,t){var n;1&e&&(u.cd(w,1),u.cd(I,1),u.cd(Y,1)),2&e&&(u.Hc(n=u.jc())&&(t.calendar=n.first),u.Hc(n=u.jc())&&(t.dataTable=n.first),u.Hc(n=u.jc())&&(t.filtr=n.first))},features:[u.Cb],decls:24,vars:16,consts:[[1,"row","mt25"],[1,"col-md-12"],[1,"card"],[1,"card-body"],[1,"row","mb-2"],["class","col-md-3",4,"ngIf"],[1,"col-md-3"],[1,"form-group"],["for",""],[1,"required"],["selectionMode","range","inputId","icon","name","rangeDates",3,"monthNavigator","yearNavigator","yearRange","ngModel","ngModelOptions","showIcon","dateFormat","readonlyInput","ngModelChange","onSelect"],["calendar",""],[1,"row"],["scrollHeight","calc(100vh - 275px)","responsiveLayout","scroll",3,"value","rowHover","globalFilterFields","scrollable","onFilter"],["dt",""],["pTemplate","caption"],["pTemplate","emptymessage"],["pTemplate","colgroup"],["pTemplate","header"],["pTemplate","body"],[3,"mode","onclinicSelect"],[1,"p-d-flex"],[1,"p-ml-left"],[1,"p-ml-auto"],["pButton","","title","Export Data","label"," ","class","p-button-outlined mr-2","icon","pi pi-download",3,"click",4,"ngIf"],[1,"p-input-icon-left"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search...",3,"input"],["filtr",""],["pButton","","title","Export Data","label"," ","icon","pi pi-download",1,"p-button-outlined","mr-2",3,"click"],[2,"width","135px"],[2,"width","125px"],[2,"width","95px"],[2,"width","130px"],[2,"width","100px"],[2,"width","200px"]],template:function(e,t){if(1&e){var n=u.Zb();u.Yb(0,"div",0),u.Yb(1,"div",1),u.Yb(2,"div",2),u.Yb(3,"div",3),u.Yb(4,"div",4),u.Sc(5,X,2,1,"div",5),u.Yb(6,"div",6),u.Yb(7,"div",7),u.Yb(8,"label",8),u.Uc(9,"From / To"),u.Yb(10,"span",9),u.Uc(11,"*"),u.Xb(),u.Xb(),u.Yb(12,"div"),u.Yb(13,"p-calendar",10,11),u.ic("ngModelChange",function(e){return t.rangeDates=e})("onSelect",function(){return t.dateRangeChange()}),u.Xb(),u.Xb(),u.Xb(),u.Xb(),u.Xb(),u.Yb(15,"div",12),u.Yb(16,"div",1),u.Yb(17,"p-table",13,14),u.ic("onFilter",function(e){u.Lc(n);var r=u.Ic(18);return t.onFilter(e,r)}),u.Sc(19,T,9,2,"ng-template",15),u.Sc(20,U,3,1,"ng-template",16),u.Sc(21,D,9,0,"ng-template",17),u.Sc(22,M,17,0,"ng-template",18),u.Sc(23,L,19,14,"ng-template",19),u.Xb(),u.Xb(),u.Xb(),u.Xb(),u.Xb(),u.Xb(),u.Xb()}2&e&&(u.Fb(5),u.tc("ngIf",t.UserTypeCurre===t.userTypes.SuperAdmin),u.Fb(8),u.wc("yearRange","",t.customDateFormat.MinYear,":",t.MaxYear,""),u.tc("monthNavigator",!0)("yearNavigator",!0)("ngModel",t.rangeDates)("ngModelOptions",u.yc(14,_))("showIcon",!0)("dateFormat",t.customDateFormat.CalendarFormat)("readonlyInput",!0),u.Fb(4),u.tc("value",t.lstRefferedList)("rowHover",!0)("globalFilterFields",u.yc(15,O))("scrollable",!0))},directives:[o.p,h.a,y.o,y.r,m.c,g.i,v.a,S.a,R.b],pipes:[o.f],styles:[""]}),C)}],N=((A=function t(){e(this,t)}).\u0275fac=function(e){return new(e||A)},A.\u0275mod=u.Qb({type:A}),A.\u0275inj=u.Pb({imports:[[l.l.forChild(x)],l.l]}),A),k=a("arFO"),E=a("T2Aj"),V=((P=function t(){e(this,t)}).\u0275fac=function(e){return new(e||P)},P.\u0275mod=u.Qb({type:P}),P.\u0275inj=u.Pb({imports:[[o.c,N,y.i,m.f,R.c,k.b,S.b,h.b,E.a]]}),P)}}])}();