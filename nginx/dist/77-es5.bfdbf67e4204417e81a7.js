!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function n(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var i,n=c(e);if(t){var o=c(this).constructor;i=Reflect.construct(n,arguments,o)}else i=n.apply(this,arguments);return r(this,i)}}function r(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{oGe7:function(r,c,o){"use strict";o.r(c),o.d(c,"AuthorizedMasterModule",function(){return W});var s=o("ofXK"),l=o("tyNb"),u=o("Nach"),a=o("CwUn"),d=o("fXoL"),b=o("dcBc"),f=o("NLkC"),p=o("rEr+"),h=o("7zfz"),v=o("7kUa"),m=o("jIHw"),S=o("3Pt+"),y=o("AAHA"),g=["myForm"],A=["dt"],M=["filtr"];function I(e,t){if(1&e){var i=d.Zb();d.Yb(0,"button",20),d.ic("click",function(){return d.Lc(i),d.mc(3).AddNew()}),d.Xb()}}function w(e,t){if(1&e){var i=d.Zb();d.Yb(0,"div",12),d.Sc(1,I,1,0,"button",13),d.Yb(2,"span",14),d.Uc(3),d.Xb(),d.Yb(4,"span",15),d.Yb(5,"span",16),d.Tb(6,"i",17),d.Yb(7,"input",18,19),d.ic("input",function(e){return d.Lc(i),d.mc(),d.Ic(5).filterGlobal(e.target.value,"contains")}),d.Xb(),d.Xb(),d.Xb(),d.Xb()}if(2&e){var n=d.mc(2);d.Fb(1),d.tc("ngIf",null==n.lstIAccessStr?null:n.lstIAccessStr.includes(n.ActionList.ReadWrite.toString())),d.Fb(2),d.Wc(" ",(null==n.lstAuthorizedMaster?null:n.lstAuthorizedMaster.length)>0?"Total Records: "+n.filteredValuesLength:""," ")}}function X(e,t){if(1&e&&(d.Yb(0,"tr"),d.Yb(1,"td"),d.Uc(2," No records found "),d.Xb(),d.Xb()),2&e){var i=t.$implicit;d.Fb(1),d.Gb("colspan",null==i?null:i.length)}}function Y(e,t){1&e&&d.Tb(0,"col",22)}function U(e,t){if(1&e&&(d.Yb(0,"colgroup"),d.Sc(1,Y,1,0,"col",21),d.Tb(2,"col",22),d.Tb(3,"col",22),d.Tb(4,"col",22),d.Xb()),2&e){var i=d.mc(2);d.Fb(1),d.tc("ngIf",i.UserTypeCurre===i.userTypes.SuperAdmin)}}function C(e,t){1&e&&(d.Yb(0,"th"),d.Uc(1,"Center"),d.Xb())}function z(e,t){if(1&e&&(d.Yb(0,"tr"),d.Sc(1,C,2,0,"th",23),d.Yb(2,"th"),d.Uc(3,"Name"),d.Xb(),d.Yb(4,"th"),d.Uc(5,"Status"),d.Xb(),d.Yb(6,"th"),d.Uc(7,"Action"),d.Xb(),d.Xb()),2&e){var i=d.mc(2);d.Fb(1),d.tc("ngIf",i.UserTypeCurre===i.userTypes.SuperAdmin)}}function T(e,t){if(1&e&&(d.Yb(0,"td"),d.Uc(1),d.Xb()),2&e){var i=d.mc().$implicit;d.Fb(1),d.Wc("",i.ClinicName," ")}}function F(e,t){if(1&e){var i=d.Zb();d.Yb(0,"tr"),d.Sc(1,T,2,1,"td",23),d.Yb(2,"td"),d.Uc(3),d.Xb(),d.Yb(4,"td"),d.Uc(5),d.Xb(),d.Yb(6,"td"),d.Yb(7,"a",24),d.ic("click",function(){d.Lc(i);var e=t.$implicit;return d.mc(2).LoadAuthorizedMasterById(e.AuthorizedMasterId)}),d.Tb(8,"img",25),d.Xb(),d.Xb(),d.Xb()}if(2&e){var n=t.$implicit,r=d.mc(2);d.Fb(1),d.tc("ngIf",r.UserTypeCurre===r.userTypes.SuperAdmin),d.Fb(2),d.Vc(n.Name),d.Fb(2),d.Vc(1==n.Status?"Active":"Inactive")}}var _=function(){return["ClinicName","Name","Status"]};function L(e,t){if(1&e){var i=d.Zb();d.Yb(0,"div",1),d.Yb(1,"div",2),d.Yb(2,"div",3),d.Yb(3,"div",4),d.Yb(4,"p-table",5,6),d.ic("onFilter",function(e){d.Lc(i);var t=d.Ic(5);return d.mc().onFilter(e,t)}),d.Sc(6,w,9,2,"ng-template",7),d.Sc(7,X,3,1,"ng-template",8),d.Sc(8,U,5,1,"ng-template",9),d.Sc(9,z,8,1,"ng-template",10),d.Sc(10,F,9,3,"ng-template",11),d.Xb(),d.Xb(),d.Xb(),d.Xb(),d.Xb()}if(2&e){var n=d.mc();d.Fb(4),d.tc("value",n.lstAuthorizedMaster)("rowHover",!0)("globalFilterFields",d.yc(4,_))("scrollable",!0)}}function R(e,t){if(1&e){var i=d.Zb();d.Yb(0,"div",30),d.Yb(1,"app-center-dropdown",40),d.ic("onclinicSelect",function(e){return d.Lc(i),d.mc(2).onclinicSelect(e)}),d.Xb(),d.Xb()}if(2&e){var n=d.mc(2);d.Fb(1),d.tc("ClinicIdSelected",n.AuthorizedMaster.ClinicId)("mode",n.Mode)}}function k(e,t){if(1&e){var i=d.Zb();d.Yb(0,"button",41),d.ic("click",function(){return d.Lc(i),d.mc(2).SaveAuthorizedMaster()}),d.Uc(1,"Submit"),d.Xb()}if(2&e){d.mc();var n=d.Ic(5);d.tc("disabled",!n.form.valid)}}function N(e,t){if(1&e){var i=d.Zb();d.Yb(0,"div",1),d.Yb(1,"div",26),d.Yb(2,"div",3),d.Yb(3,"div",4),d.Yb(4,"form",null,27),d.Yb(6,"div",28),d.Sc(7,R,2,2,"div",29),d.Yb(8,"div",30),d.Yb(9,"div",31),d.Yb(10,"label"),d.Uc(11,"Name"),d.Xb(),d.Yb(12,"span",32),d.Uc(13,"*"),d.Xb(),d.Yb(14,"input",33),d.ic("ngModelChange",function(e){return d.Lc(i),d.mc().AuthorizedMaster.Name=e}),d.Xb(),d.Xb(),d.Xb(),d.Yb(15,"div",30),d.Yb(16,"div",31),d.Yb(17,"label"),d.Uc(18,"Status"),d.Xb(),d.Yb(19,"span",32),d.Uc(20,"*"),d.Xb(),d.Yb(21,"select",34),d.ic("ngModelChange",function(e){return d.Lc(i),d.mc().AuthorizedMaster.Status=e}),d.Yb(22,"option",35),d.Uc(23,"Active"),d.Xb(),d.Yb(24,"option",36),d.Uc(25,"Inactive"),d.Xb(),d.Xb(),d.Xb(),d.Xb(),d.Xb(),d.Yb(26,"div",37),d.Sc(27,k,2,1,"button",38),d.Yb(28,"button",39),d.ic("click",function(){return d.Lc(i),d.mc().CloseModal()}),d.Uc(29,"Close"),d.Xb(),d.Xb(),d.Xb(),d.Xb(),d.Xb(),d.Xb(),d.Xb()}if(2&e){var n=d.mc();d.Fb(7),d.tc("ngIf",n.UserTypeCurre===n.userTypes.SuperAdmin),d.Fb(7),d.tc("ngModel",n.AuthorizedMaster.Name),d.Fb(7),d.tc("ngModel",n.AuthorizedMaster.Status),d.Fb(6),d.tc("ngIf",null==n.lstIAccessStr?null:n.lstIAccessStr.includes(n.ActionList.ReadWrite.toString()))}}var O,j,P,x=[{path:"",component:(O=function(r){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(a,r);var c,o,s,l=n(a);function a(t,i,n,r,c){var o;return e(this,a),(o=l.call(this)).cdRef=t,o.router=i,o._MasterServices=n,o._ConstantServices=r,o._UtilityService=c,o.filteredValuesLength=0,o.Mode=null,o.AuthorizedMaster={},o.ClinicIdSelected=localStorage.getItem("ClinicId"),o.UserTypeCurre=localStorage.getItem("userTypeId"),o.userTypes=u.s,o.ActionList=u.a,o.lstIAccess=[],o.lstIAccessStr=[],o.getPageLevelAccess(),o}return c=a,(o=[{key:"getPageLevelAccess",value:function(){var e,t,i=this,n=this.router.url,r=JSON.parse(localStorage.getItem("UerRoleAccess"))||[];(null==r?void 0:r.find(function(e){return e.MenuItemURL===n}))&&(this.lstIAccess=null===(e=r.find(function(e){return e.MenuItemURL===n}))||void 0===e?void 0:e.ActionIAccess,(null===(t=this.lstIAccess)||void 0===t?void 0:t.length)>0&&this.lstIAccess.map(function(e){i.lstIAccessStr.push(e.ActionId.toString())}))}},{key:"ngOnInit",value:function(){this._ConstantServices.ActiveMenuName="Authorized Master",this.LoadAuthorizedMaster()}},{key:"onclinicSelect",value:function(e){this.ClinicIdSelected=e,this.AuthorizedMaster.ClinicId=e}},{key:"LoadAuthorizedMaster",value:function(){var e=this,t="";this.UserTypeCurre!==u.s.SuperAdmin&&(t=this.ClinicIdSelected),this._UtilityService.showSpinner(),this.unsubscribe.add=this._MasterServices.GetAuthorizedMaster(t,!1).subscribe(function(t){var i;if(e._UtilityService.hideSpinner(),e.cdRef.detectChanges(),1==t.actionResult.success){var n=JSON.parse(t.actionResult.result);e.lstAuthorizedMaster=n=n||[],void 0!==e.filtr&&(e.filtr.nativeElement.value="",e.dataTable.reset(),e.filteredValuesLength=null===(i=e.lstAuthorizedMaster)||void 0===i?void 0:i.length),e.cdRef.detectChanges()}else e.lstAuthorizedMaster=[]},function(t){e._UtilityService.hideSpinner(),e._UtilityService.showErrorAlert(t.message)})}},{key:"LoadAuthorizedMasterById",value:function(e){var t=this;this._UtilityService.showSpinner(),this.Mode="Edit",this.unsubscribe.add=this._MasterServices.GetAuthorizedMasterById(e).subscribe(function(e){if(t._UtilityService.hideSpinner(),t.cdRef.detectChanges(),1==e.actionResult.success){var i=JSON.parse(e.actionResult.result);t.AuthorizedMaster=i=i||[],t.cdRef.detectChanges()}},function(e){t._UtilityService.hideSpinner(),t._UtilityService.showErrorAlert(e.message)})}},{key:"SaveAuthorizedMaster",value:function(){var e=this;this.UserTypeCurre!==u.s.SuperAdmin&&(this.AuthorizedMaster.ClinicId=this.ClinicIdSelected),null!=this.AuthorizedMaster.ClinicId&&null!=this.AuthorizedMaster.ClinicId&&""!=this.AuthorizedMaster.ClinicId?(this._UtilityService.showSpinner(),this.unsubscribe.add=this._MasterServices.AddUpdateAuthorizedMaster(this.AuthorizedMaster).subscribe(function(t){e._UtilityService.hideSpinner(),e.cdRef.detectChanges(),1==t.actionResult.success?(e._UtilityService.showSuccessAlert(t.actionResult.errMsg),e.LoadAuthorizedMaster(),e.Mode=null):e._UtilityService.showWarningAlert(t.actionResult.errMsg)},function(t){e._UtilityService.hideSpinner(),e._UtilityService.showErrorAlert(t.message)})):this._UtilityService.showWarningAlert("Please select center")}},{key:"AddNew",value:function(){this.ResetModel(),this.Mode="Add",this.cdRef.detectChanges(),this.myForm.resetForm()}},{key:"ResetModel",value:function(){this.AuthorizedMaster={},this.AuthorizedMaster.Status=1}},{key:"CloseModal",value:function(){this.Mode=null}},{key:"onFilter",value:function(e,t){this.filteredValuesLength=e.filteredValue.length}}])&&t(c.prototype,o),s&&t(c,s),a}(a.a),O.\u0275fac=function(e){return new(e||O)(d.Sb(d.h),d.Sb(l.i),d.Sb(b.a),d.Sb(u.f),d.Sb(f.a))},O.\u0275cmp=d.Mb({type:O,selectors:[["app-authorized-master"]],viewQuery:function(e,t){var i;1&e&&(d.cd(g,1),d.cd(A,1),d.cd(M,1)),2&e&&(d.Hc(i=d.jc())&&(t.myForm=i.first),d.Hc(i=d.jc())&&(t.dataTable=i.first),d.Hc(i=d.jc())&&(t.filtr=i.first))},features:[d.Cb],decls:2,vars:2,consts:[["class","row mt25",4,"ngIf"],[1,"row","mt25"],[1,"col-md-12"],[1,"card"],[1,"card-body"],["responsiveLayout","scroll","styleClass","p-datatable-striped","scrollHeight","calc(100vh - 165px)",3,"value","rowHover","globalFilterFields","scrollable","onFilter"],["dt",""],["pTemplate","caption"],["pTemplate","emptymessage"],["pTemplate","colgroup"],["pTemplate","header"],["pTemplate","body"],[1,"p-d-flex"],["pButton","","title","New","label","Add New","class","p-button-outlined","icon","pi pi-plus",3,"click",4,"ngIf"],[1,"pl-1","pt-3","mr-2","p-ml-left"],[1,"p-ml-auto"],[1,"p-input-icon-left"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search...",3,"input"],["filtr",""],["pButton","","title","New","label","Add New","icon","pi pi-plus",1,"p-button-outlined",3,"click"],["style","width:250px",4,"ngIf"],[2,"width","250px"],[4,"ngIf"],["ngbTooltip","View/Edit",3,"click"],["src","./assets/custom-icons/view.svg",1,"custom-ico","mr4",2,"width","24px !important"],[1,"col"],["myForm","ngForm"],[1,"row"],["class","col-md-3",4,"ngIf"],[1,"col-md-3"],[1,"form-group"],[1,"required"],["type","text","required","","name","ContactDetails",1,"form-control",3,"ngModel","ngModelChange"],["name","Status","required","",1,"form-control",3,"ngModel","ngModelChange"],["value","1"],["value","0"],[1,"row","justify-content-center"],["type","button","class","btn btn-new-primary mr-2",3,"disabled","click",4,"ngIf"],[1,"btn","btn-new-secondary",3,"click"],[3,"ClinicIdSelected","mode","onclinicSelect"],["type","button",1,"btn","btn-new-primary","mr-2",3,"disabled","click"]],template:function(e,t){1&e&&(d.Sc(0,L,11,5,"div",0),d.Sc(1,N,30,4,"div",0)),2&e&&(d.tc("ngIf",null==t.Mode),d.Fb(1),d.tc("ngIf",null!=t.Mode))},directives:[s.p,p.c,h.i,v.a,m.b,S.z,S.p,S.q,S.b,S.w,S.o,S.r,S.x,S.s,S.A,y.a],styles:[""]}),O)}],E=((j=function t(){e(this,t)}).\u0275fac=function(e){return new(e||j)},j.\u0275mod=d.Qb({type:j}),j.\u0275inj=d.Pb({imports:[[l.l.forChild(x)],l.l]}),j),B=o("Q4Mo"),H=o("arFO"),V=o("Ks7X"),Z=o("T2Aj"),W=((P=function t(){e(this,t)}).\u0275fac=function(e){return new(e||P)},P.\u0275mod=d.Qb({type:P}),P.\u0275inj=d.Pb({imports:[[s.c,E,S.i,S.v,p.f,m.c,B.b,H.b,v.b,V.b,Z.a]]}),P)}}])}();