!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function n(t,e){return(n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var n,o=r(t);if(e){var i=r(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return c(this,n)}}function c(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{mwxg:function(c,r,i){"use strict";i.r(r),i.d(r,"DoctorConsultStatusModule",function(){return j});var l=i("ofXK"),u=i("tyNb"),s=i("CwUn"),a=i("Nach"),b=i("fXoL"),p=i("dcBc"),f=i("ReGW"),d=i("NLkC"),h=i("rEr+"),m=i("7zfz"),S=i("AAHA"),v=i("jIHw"),g=i("7kUa");function y(t,e){1&t&&(b.Yb(0,"div",16),b.Yb(1,"label",17),b.Uc(2,"Center "),b.Xb(),b.Yb(3,"span",18),b.Uc(4,"*"),b.Xb(),b.Xb())}function C(t,e){if(1&t){var n=b.Zb();b.Yb(0,"div",19),b.Yb(1,"app-center-dropdown",20),b.ic("onclinicSelect",function(t){return b.Lc(n),b.mc().onclinicSelect(t)}),b.Xb(),b.Xb()}2&t&&(b.Fb(1),b.tc("isCenterLabel",!1)("mode","get"))}function I(t,e){if(1&t){var n=b.Zb();b.Yb(0,"div",21),b.Yb(1,"button",22),b.ic("click",function(){return b.Lc(n),b.mc().LoadDoctorConsultStatus()}),b.Uc(2," Search "),b.Xb(),b.Xb()}}function w(t,e){if(1&t){var n=b.Zb();b.Yb(0,"button",32),b.ic("click",function(){return b.Lc(n),b.mc(2).exportToItemExcel()}),b.Xb()}}function X(t,e){if(1&t){var n=b.Zb();b.Yb(0,"div",23),b.Yb(1,"span",24),b.Uc(2),b.Xb(),b.Yb(3,"span",25),b.Sc(4,w,1,0,"button",26),b.Yb(5,"button",27),b.ic("click",function(){return b.Lc(n),b.mc().ngOnChanges()}),b.Xb(),b.Yb(6,"span",28),b.Tb(7,"i",29),b.Yb(8,"input",30,31),b.ic("input",function(t){return b.Lc(n),b.mc(),b.Ic(11).filterGlobal(t.target.value,"contains")}),b.Xb(),b.Xb(),b.Xb(),b.Xb()}if(2&t){var o=b.mc();b.Fb(2),b.Wc(" ",(null==o.lstDoctorConSultReport?null:o.lstDoctorConSultReport.length)>0?"Total Records: "+o.filteredValuesLength:""," "),b.Fb(2),b.tc("ngIf",(null==o.lstIAccessStr?null:o.lstIAccessStr.includes(o.ActionList.Download.toString()))&&(null==o.lstDoctorConSultReport?null:o.lstDoctorConSultReport.length)>0)}}function Y(t,e){1&t&&(b.Yb(0,"tr"),b.Yb(1,"td"),b.Uc(2," No records found "),b.Xb(),b.Xb()),2&t&&(b.Fb(1),b.Gb("colspan",9))}function T(t,e){1&t&&(b.Yb(0,"colgroup"),b.Tb(1,"col",33),b.Tb(2,"col",34),b.Tb(3,"col",34),b.Tb(4,"col",35),b.Xb())}function R(t,e){1&t&&(b.Yb(0,"tr"),b.Yb(1,"th"),b.Uc(2,"Doctor Name"),b.Xb(),b.Yb(3,"th"),b.Uc(4,"Total"),b.Xb(),b.Yb(5,"th"),b.Uc(6,"Completed"),b.Xb(),b.Yb(7,"th"),b.Uc(8,"Pending"),b.Xb(),b.Xb())}function U(t,e){if(1&t&&(b.Yb(0,"tr"),b.Yb(1,"td"),b.Uc(2),b.Xb(),b.Yb(3,"td"),b.Uc(4),b.Xb(),b.Yb(5,"td"),b.Uc(6),b.Xb(),b.Yb(7,"td"),b.Uc(8),b.Xb(),b.Xb()),2&t){var n=e.$implicit;b.Fb(2),b.Vc(n.DoctorName),b.Fb(2),b.Vc(n.TotalCount),b.Fb(2),b.Vc(n.CompleteCount),b.Fb(2),b.Vc(n.PendingCount)}}var D,A,L,k=function(){return["DoctorName","TotalCount","CompleteCount","PendingCount"]},F=[{path:"",component:(D=function(c){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}(s,c);var r,i,l,u=o(s);function s(e,n,o,c,r,i){var l;return t(this,s),(l=u.call(this)).cdRef=e,l.router=n,l._ConstantServices=o,l._MasterServices=c,l._DoctorService=r,l._UtilityService=i,l.UserTypeCurre=localStorage.getItem("userTypeId"),l.userTypes=a.s,l.ClinicIdSelected=null,l.lstDoctorConSultReport=[],l.filteredValuesLength=0,l.totalRecord=0,l.ActionList=a.a,l.lstIAccess=[],l.lstIAccessStr=[],l.getPageLevelAccess(),l}return r=s,(i=[{key:"getPageLevelAccess",value:function(){var t,e,n=this,o=this.getUrlWithoutParams(),c=JSON.parse(localStorage.getItem("UerRoleAccess"))||[];(null==c?void 0:c.find(function(t){return t.MenuItemURL===o}))&&(this.lstIAccess=null===(t=c.find(function(t){return t.MenuItemURL===o}))||void 0===t?void 0:t.ActionIAccess,(null===(e=this.lstIAccess)||void 0===e?void 0:e.length)>0&&this.lstIAccess.map(function(t){n.lstIAccessStr.push(t.ActionId.toString())}))}},{key:"getUrlWithoutParams",value:function(){var t=this.router.parseUrl(this.router.url);return t.queryParams={},t.fragment=null,t.toString()}},{key:"ngOnInit",value:function(){this._ConstantServices.ActiveMenuName="Doctor Consult Status",a.s.SuperAdmin!==localStorage.getItem("userTypeId")&&(this.ClinicIdSelected=localStorage.getItem("ClinicId"),this.LoadDoctorConsultStatus())}},{key:"ngOnChanges",value:function(){a.s.SuperAdmin!==localStorage.getItem("userTypeId")&&(this.ClinicIdSelected=localStorage.getItem("ClinicId"),this.LoadDoctorConsultStatus())}},{key:"onclinicSelect",value:function(t){this.ClinicIdSelected=t,this.LoadDoctorConsultStatus()}},{key:"LoadDoctorConsultStatus",value:function(){var t=this;this._UtilityService.showSpinner(),this.unsubscribe.add=this._DoctorService.GetDoctorConsultTokenStatus(this.ClinicIdSelected).subscribe(function(e){var n;if(t._UtilityService.hideSpinner(),t.cdRef.detectChanges(),1==e.actionResult.success){var o=JSON.parse(e.actionResult.result);t.lstDoctorConSultReport=o=o||[],t.filteredValuesLength=null===(n=t.lstDoctorConSultReport)||void 0===n?void 0:n.length,t.cdRef.detectChanges()}else t.lstDoctorConSultReport=[],t.cdRef.detectChanges()},function(e){t._UtilityService.hideSpinner(),t._UtilityService.showErrorAlert(e.message)})}},{key:"exportToItemExcel",value:function(){var t={reportname:"DoctorConsultStatus",filename:"DoctorConsultStatus"};t.clinicId=this.ClinicIdSelected,this._MasterServices.downloadReport(t)}},{key:"onFilter",value:function(t,e){this.filteredValuesLength=t.filteredValue.length;var n=t.filteredValue.map(function(t){return t.RoomNumber.split(",")}),o=[];n.forEach(function(t){return t.forEach(function(t){return o.push(t)})}),this.totalRecord=new Set(o).size}}])&&e(r.prototype,i),l&&e(r,l),s}(s.a),D.\u0275fac=function(t){return new(t||D)(b.Sb(b.h),b.Sb(u.i),b.Sb(a.f),b.Sb(p.a),b.Sb(f.a),b.Sb(d.a))},D.\u0275cmp=b.Mb({type:D,selectors:[["app-doctor-consult-status"]],features:[b.Cb,b.Db],decls:17,vars:8,consts:[[1,"row","mt25"],[1,"col-md-12"],[1,"card"],[1,"card-body"],[1,"row","mb-2"],["class","col col-md-1 col-12 mt-2",4,"ngIf"],["class","col col-md-3 col-12",4,"ngIf"],["class","col col-md-1",4,"ngIf"],[1,"row"],["scrollHeight","calc(100vh - 275px)","responsiveLayout","scroll",3,"value","rowHover","globalFilterFields","scrollable","onFilter"],["dt",""],["pTemplate","caption"],["pTemplate","emptymessage"],["pTemplate","colgroup"],["pTemplate","header"],["pTemplate","body"],[1,"col","col-md-1","col-12","mt-2"],["for",""],[1,"required"],[1,"col","col-md-3","col-12"],[3,"isCenterLabel","mode","onclinicSelect"],[1,"col","col-md-1"],["type","button","matTooltip","Search",1,"btn","btn-new-primary",3,"click"],[1,"p-d-flex"],[1,"p-ml-left"],[1,"p-ml-auto"],["pButton","","title","Export Data","label"," ","class","p-button-outlined mr-2","icon","pi pi-download",3,"click",4,"ngIf"],["pButton","","matTooltip","Refresh","label"," ","icon","pi pi-refresh",1,"p-button-outlined","mr-2",3,"click"],[1,"p-input-icon-left"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search...",3,"input"],["filtr",""],["pButton","","title","Export Data","label"," ","icon","pi pi-download",1,"p-button-outlined","mr-2",3,"click"],[2,"width","130px"],[2,"width","135px"],[2,"width","125px"]],template:function(t,e){if(1&t){var n=b.Zb();b.Yb(0,"div",0),b.Yb(1,"div",1),b.Yb(2,"div",2),b.Yb(3,"div",3),b.Yb(4,"div",4),b.Sc(5,y,5,0,"div",5),b.Sc(6,C,2,2,"div",6),b.Sc(7,I,3,0,"div",7),b.Xb(),b.Yb(8,"div",8),b.Yb(9,"div",1),b.Yb(10,"p-table",9,10),b.ic("onFilter",function(t){b.Lc(n);var o=b.Ic(11);return e.onFilter(t,o)}),b.Sc(12,X,10,2,"ng-template",11),b.Sc(13,Y,3,1,"ng-template",12),b.Sc(14,T,5,0,"ng-template",13),b.Sc(15,R,9,0,"ng-template",14),b.Sc(16,U,9,4,"ng-template",15),b.Xb(),b.Xb(),b.Xb(),b.Xb(),b.Xb(),b.Xb(),b.Xb()}2&t&&(b.Fb(5),b.tc("ngIf",e.UserTypeCurre===e.userTypes.SuperAdmin),b.Fb(1),b.tc("ngIf",e.UserTypeCurre===e.userTypes.SuperAdmin),b.Fb(1),b.tc("ngIf",e.UserTypeCurre===e.userTypes.SuperAdmin),b.Fb(3),b.tc("value",e.lstDoctorConSultReport)("rowHover",!0)("globalFilterFields",b.yc(7,k))("scrollable",!0))},directives:[l.p,h.c,m.i,S.a,v.b,g.a],styles:[""]}),D)}],_=((A=function e(){t(this,e)}).\u0275fac=function(t){return new(t||A)},A.\u0275mod=b.Qb({type:A}),A.\u0275inj=b.Pb({imports:[[u.l.forChild(F)],u.l]}),A),O=i("3Pt+"),P=i("arFO"),x=i("T2Aj"),j=((L=function e(){t(this,e)}).\u0275fac=function(t){return new(t||L)},L.\u0275mod=b.Qb({type:L}),L.\u0275inj=b.Pb({imports:[[l.c,_,O.i,h.f,v.c,P.b,g.b,x.a]]}),L)}}])}();