(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{LclV:function(t,e,c){"use strict";c.r(e),c.d(e,"ClinicWiseDoctorModule",function(){return x});var i=c("ofXK"),l=c("tyNb"),n=c("CwUn"),s=c("Nach"),r=c("fXoL"),o=c("dcBc"),b=c("PtJb"),a=c("NLkC"),d=c("rEr+"),u=c("7zfz"),p=c("AAHA"),h=c("7kUa"),m=c("jIHw");function f(t,e){if(1&t){const t=r.Zb();r.Yb(0,"div",13),r.Yb(1,"div",14),r.Yb(2,"label",15),r.Uc(3,"Center "),r.Xb(),r.Yb(4,"span",16),r.Uc(5,"*"),r.Xb(),r.Xb(),r.Yb(6,"div",17),r.Yb(7,"app-center-dropdown",18),r.ic("onclinicSelect",function(e){return r.Lc(t),r.mc().onclinicSelect(e)}),r.Xb(),r.Xb(),r.Xb()}2&t&&(r.Fb(7),r.tc("mode","get")("isCenterLabel",!1)("centerplaceholder","All")("isCenterShowClear",!0))}function S(t,e){if(1&t){const t=r.Zb();r.Yb(0,"button",27),r.ic("click",function(){return r.Lc(t),r.mc(2).exportToItemExcel()}),r.Xb()}}function g(t,e){if(1&t){const t=r.Zb();r.Yb(0,"div",19),r.Yb(1,"span",20),r.Uc(2),r.Xb(),r.Yb(3,"span",21),r.Sc(4,S,1,0,"button",22),r.Yb(5,"span",23),r.Tb(6,"i",24),r.Yb(7,"input",25,26),r.ic("input",function(e){return r.Lc(t),r.mc(),r.Ic(8).filterGlobal(e.target.value,"contains")}),r.Xb(),r.Xb(),r.Xb(),r.Xb()}if(2&t){const t=r.mc();r.Fb(2),r.Wc(" ",(null==t.lstDoctorMster?null:t.lstDoctorMster.length)>0?"Total Records: "+t.filteredValuesLength:""," "),r.Fb(2),r.tc("ngIf",(null==t.lstIAccessStr?null:t.lstIAccessStr.includes(t.ActionList.Download.toString()))&&(null==t.lstDoctorMster?null:t.lstDoctorMster.length)>0)}}function v(t,e){if(1&t&&(r.Yb(0,"tr"),r.Yb(1,"td"),r.Uc(2," No records found "),r.Xb(),r.Xb()),2&t){const t=e.$implicit;r.Fb(1),r.Gb("colspan",null==t?null:t.length)}}function I(t,e){1&t&&r.Tb(0,"col",34)}function C(t,e){if(1&t&&(r.Yb(0,"colgroup"),r.Tb(1,"col",28),r.Sc(2,I,1,0,"col",29),r.Tb(3,"col",30),r.Tb(4,"col",30),r.Tb(5,"col",31),r.Tb(6,"col",32),r.Tb(7,"col",33),r.Xb()),2&t){const t=r.mc();r.Fb(2),r.tc("ngIf",t.UserTypeCurre===t.userTypes.SuperAdmin)}}function X(t,e){1&t&&(r.Yb(0,"th"),r.Uc(1,"Center"),r.Xb())}function Y(t,e){if(1&t&&(r.Yb(0,"tr"),r.Yb(1,"th"),r.Uc(2,"S.No"),r.Xb(),r.Sc(3,X,2,0,"th",35),r.Yb(4,"th"),r.Uc(5,"Doctor Name"),r.Xb(),r.Yb(6,"th"),r.Uc(7,"Department Name"),r.Xb(),r.Yb(8,"th"),r.Uc(9,"Contact No"),r.Xb(),r.Yb(10,"th"),r.Uc(11,"Email Address"),r.Xb(),r.Yb(12,"th"),r.Uc(13,"Status"),r.Xb(),r.Xb()),2&t){const t=r.mc();r.Fb(3),r.tc("ngIf",t.UserTypeCurre===t.userTypes.SuperAdmin)}}function w(t,e){if(1&t&&(r.Yb(0,"td"),r.Uc(1),r.Xb()),2&t){const t=r.mc().$implicit;r.Fb(1),r.Vc(t.ClinicName)}}function U(t,e){if(1&t&&(r.Yb(0,"tr"),r.Yb(1,"td"),r.Uc(2),r.Xb(),r.Sc(3,w,2,1,"td",35),r.Yb(4,"td"),r.Uc(5),r.Xb(),r.Yb(6,"td"),r.Uc(7),r.Xb(),r.Yb(8,"td"),r.Uc(9),r.Xb(),r.Yb(10,"td"),r.Uc(11),r.Xb(),r.Yb(12,"td"),r.Uc(13),r.Xb(),r.Xb()),2&t){const t=e.$implicit,c=e.rowIndex,i=r.mc();r.Fb(2),r.Vc(c+1),r.Fb(1),r.tc("ngIf",i.UserTypeCurre===i.userTypes.SuperAdmin),r.Fb(2),r.Vc(t.DoctorName),r.Fb(2),r.Vc(t.DepartmentName),r.Fb(2),r.Vc(t.ContactNumber),r.Fb(2),r.Vc(t.Email),r.Fb(2),r.Vc(1==t.Status?"Active":"Inactive")}}const y=function(){return["DoctorName","ClinicName","DepartmentName"]},A=[{path:"",component:(()=>{class t extends n.a{constructor(t,e,c,i,l,n){super(),this.cdRef=t,this.router=e,this._ConstantServices=c,this._MasterServices=i,this._ReportServices=l,this._UtilityService=n,this.ClinicIdSelected=null,this.lstDoctorMster=[],this.filteredValuesLength=0,this.UserTypeCurre=localStorage.getItem("userTypeId"),this.userTypes=s.s,this.ActionList=s.a,this.lstIAccess=[],this.lstIAccessStr=[],this.getPageLevelAccess()}getPageLevelAccess(){var t,e,c=this.getUrlWithoutParams(),i=JSON.parse(localStorage.getItem("UerRoleAccess"))||[];(null==i?void 0:i.find(t=>t.MenuItemURL===c))&&(this.lstIAccess=null===(t=i.find(t=>t.MenuItemURL===c))||void 0===t?void 0:t.ActionIAccess,(null===(e=this.lstIAccess)||void 0===e?void 0:e.length)>0&&this.lstIAccess.map(t=>{this.lstIAccessStr.push(t.ActionId.toString())}))}getUrlWithoutParams(){let t=this.router.parseUrl(this.router.url);return t.queryParams={},t.fragment=null,t.toString()}ngOnInit(){this._ConstantServices.ActiveMenuName="Clinic Wise Doctor",s.s.SuperAdmin!==localStorage.getItem("userTypeId")&&(this.ClinicIdSelected=localStorage.getItem("ClinicId")),this.GetAllDoctorListByClinic()}onclinicSelect(t){this.ClinicIdSelected=t,this.GetAllDoctorListByClinic()}GetAllDoctorListByClinic(){null!=this.ClinicIdSelected&&null!=this.ClinicIdSelected&&""!=this.ClinicIdSelected||(this.ClinicIdSelected=""),this._UtilityService.showSpinner(),this.unsubscribe.add=this._ReportServices.GetAllDoctorListByClinic(this.ClinicIdSelected).subscribe(t=>{var e;if(this._UtilityService.hideSpinner(),1==t.actionResult.success){var c=JSON.parse(t.actionResult.result);this.lstDoctorMster=c=c||[],this.filteredValuesLength=null===(e=this.lstDoctorMster)||void 0===e?void 0:e.length,this.cdRef.detectChanges()}else this.lstDoctorMster=[],this.cdRef.detectChanges()},t=>{this._UtilityService.hideSpinner(),this._UtilityService.showErrorAlert(t.message)})}onFilter(t,e){this.filteredValuesLength=t.filteredValue.length}exportToItemExcel(){let t={reportname:"ClinicWiseDoctorReport",filename:"ClinicWiseDoctorReport"};t.clinicId=this.ClinicIdSelected,t.first="0",t.rows="10",t.IsSkipPaging=!0,this._MasterServices.downloadReport(t)}}return t.\u0275fac=function(e){return new(e||t)(r.Sb(r.h),r.Sb(l.i),r.Sb(s.f),r.Sb(o.a),r.Sb(b.a),r.Sb(a.a))},t.\u0275cmp=r.Mb({type:t,selectors:[["app-clinic-wise-doctor"]],features:[r.Cb],decls:14,vars:6,consts:[[1,"row","mt25"],[1,"col-md-12"],[1,"card"],[1,"card-body"],["class","row mb-2",4,"ngIf"],[1,"row"],["scrollHeight","calc(100vh - 250px)","responsiveLayout","scroll",3,"value","rowHover","globalFilterFields","scrollable","onFilter"],["dt",""],["pTemplate","caption"],["pTemplate","emptymessage"],["pTemplate","colgroup"],["pTemplate","header"],["pTemplate","body"],[1,"row","mb-2"],[1,"col","col-md-1","col-12","mt-2"],["for",""],[1,"required"],[1,"col","col-md-3","col-12"],[3,"mode","isCenterLabel","centerplaceholder","isCenterShowClear","onclinicSelect"],[1,"p-d-flex"],[1,"p-ml-left"],[1,"p-ml-auto"],["pButton","","title","Export Data","label"," ","class","p-button-outlined mr-2","icon","pi pi-download",3,"click",4,"ngIf"],[1,"p-input-icon-left"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search...",3,"input"],["filtr",""],["pButton","","title","Export Data","label"," ","icon","pi pi-download",1,"p-button-outlined","mr-2",3,"click"],[2,"width","60px"],["style","width:240px",4,"ngIf"],[2,"width","150px"],[2,"width","120px"],[2,"width","180px"],[2,"width","80px"],[2,"width","240px"],[4,"ngIf"]],template:function(t,e){if(1&t){const t=r.Zb();r.Yb(0,"div",0),r.Yb(1,"div",1),r.Yb(2,"div",2),r.Yb(3,"div",3),r.Sc(4,f,8,4,"div",4),r.Yb(5,"div",5),r.Yb(6,"div",1),r.Yb(7,"p-table",6,7),r.ic("onFilter",function(c){r.Lc(t);const i=r.Ic(8);return e.onFilter(c,i)}),r.Sc(9,g,9,2,"ng-template",8),r.Sc(10,v,3,1,"ng-template",9),r.Sc(11,C,8,1,"ng-template",10),r.Sc(12,Y,14,1,"ng-template",11),r.Sc(13,U,14,7,"ng-template",12),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Xb()}2&t&&(r.Fb(4),r.tc("ngIf",e.UserTypeCurre===e.userTypes.SuperAdmin),r.Fb(3),r.tc("value",e.lstDoctorMster)("rowHover",!0)("globalFilterFields",r.yc(5,y))("scrollable",!0))},directives:[i.p,d.c,u.i,p.a,h.a,m.b],styles:[""]}),t})()}];let T=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Qb({type:t}),t.\u0275inj=r.Pb({imports:[[l.l.forChild(A)],l.l]}),t})();var D=c("3Pt+"),F=c("arFO"),L=c("T2Aj");let x=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Qb({type:t}),t.\u0275inj=r.Pb({imports:[[i.c,T,D.i,d.f,m.c,F.b,h.b,L.a]]}),t})()}}]);