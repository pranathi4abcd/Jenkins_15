!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function n(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var i,n=o(t);if(e){var r=o(this).constructor;i=Reflect.construct(n,arguments,r)}else i=n.apply(this,arguments);return c(this,i)}}function c(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{wLNc:function(c,o,r){"use strict";r.r(o),r.d(o,"SystemicExaminationMasterModule",function(){return N});var a=r("ofXK"),s=r("tyNb"),l=r("Nach"),u=r("CwUn"),b=r("fXoL"),d=r("dcBc"),m=r("NLkC"),f=r("rEr+"),p=r("7zfz"),v=r("7kUa"),y=r("jIHw"),S=r("3Pt+"),h=["myForm"];function M(t,e){if(1&t){var i=b.Zb();b.Yb(0,"button",16),b.ic("click",function(){return b.Lc(i),b.mc(3).AddNewSystemicExamination()}),b.Xb()}}function g(t,e){if(1&t){var i=b.Zb();b.Yb(0,"div",11),b.Sc(1,M,1,0,"button",12),b.Yb(2,"span",13),b.Tb(3,"i",14),b.Yb(4,"input",15),b.ic("input",function(t){return b.Lc(i),b.mc(),b.Ic(5).filterGlobal(t.target.value,"contains")}),b.Xb(),b.Xb(),b.Xb()}if(2&t){var n=b.mc(2);b.Fb(1),b.tc("ngIf",null==n.lstIAccessStr?null:n.lstIAccessStr.includes(n.ActionList.ReadWrite.toString()))}}function w(t,e){if(1&t&&(b.Yb(0,"tr"),b.Yb(1,"td"),b.Uc(2," No records found "),b.Xb(),b.Xb()),2&t){var i=e.$implicit;b.Fb(1),b.Gb("colspan",null==i?null:i.length)}}function x(t,e){1&t&&(b.Yb(0,"tr"),b.Yb(1,"th"),b.Uc(2,"Systemic Examination Name"),b.Xb(),b.Yb(3,"th"),b.Uc(4,"Status"),b.Xb(),b.Yb(5,"th"),b.Uc(6,"Action"),b.Xb(),b.Xb())}function E(t,e){if(1&t){var i=b.Zb();b.Yb(0,"tr"),b.Yb(1,"td"),b.Uc(2),b.Xb(),b.Yb(3,"td"),b.Uc(4),b.Xb(),b.Yb(5,"td"),b.Yb(6,"a",17),b.ic("click",function(){b.Lc(i);var t=e.$implicit;return b.mc(2).LoadLstSystemicExaminationById(t.SysExId)}),b.Tb(7,"img",18),b.Xb(),b.Xb(),b.Xb()}if(2&t){var n=e.$implicit;b.Fb(2),b.Vc(n.ExaminationName),b.Fb(2),b.Vc(1==n.Status?"Active":"Inactive")}}var X=function(){return["ExaminationName"]};function U(t,e){if(1&t&&(b.Yb(0,"div",1),b.Yb(1,"div",2),b.Yb(2,"div",3),b.Yb(3,"div",4),b.Yb(4,"p-table",5,6),b.Sc(6,g,5,1,"ng-template",7),b.Sc(7,w,3,1,"ng-template",8),b.Sc(8,x,7,0,"ng-template",9),b.Sc(9,E,8,2,"ng-template",10),b.Xb(),b.Xb(),b.Xb(),b.Xb(),b.Xb()),2&t){var i=b.mc();b.Fb(4),b.tc("value",i.LstSystemicExamination)("rowHover",!0)("globalFilterFields",b.yc(4,X))("scrollable",!0)}}function Y(t,e){if(1&t){var i=b.Zb();b.Yb(0,"button",32),b.ic("click",function(){return b.Lc(i),b.mc(2).SaveSystemicExaminationHead()}),b.Uc(1,"Submit"),b.Xb()}if(2&t){b.mc();var n=b.Ic(5);b.tc("disabled",!n.form.valid)}}function I(t,e){if(1&t){var i=b.Zb();b.Yb(0,"div",1),b.Yb(1,"div",19),b.Yb(2,"div",3),b.Yb(3,"div",4),b.Yb(4,"form",null,20),b.Yb(6,"div",21),b.Yb(7,"div",22),b.Yb(8,"div",23),b.Yb(9,"label"),b.Uc(10,"Systemic Examination Name"),b.Xb(),b.Yb(11,"span",24),b.Uc(12,"*"),b.Xb(),b.Yb(13,"input",25),b.ic("ngModelChange",function(t){return b.Lc(i),b.mc().SystemicExaminationMasterModel.ExaminationName=t}),b.Xb(),b.Xb(),b.Xb(),b.Yb(14,"div",22),b.Yb(15,"div",23),b.Yb(16,"label"),b.Uc(17,"Status"),b.Xb(),b.Yb(18,"span",24),b.Uc(19,"*"),b.Xb(),b.Yb(20,"select",26),b.ic("ngModelChange",function(t){return b.Lc(i),b.mc().SystemicExaminationMasterModel.Status=t}),b.Yb(21,"option",27),b.Uc(22,"Active"),b.Xb(),b.Yb(23,"option",28),b.Uc(24,"Inactive"),b.Xb(),b.Xb(),b.Xb(),b.Xb(),b.Xb(),b.Yb(25,"div",29),b.Sc(26,Y,2,1,"button",30),b.Yb(27,"button",31),b.ic("click",function(){return b.Lc(i),b.mc().CloseModal()}),b.Uc(28,"Close"),b.Xb(),b.Xb(),b.Xb(),b.Xb(),b.Xb(),b.Xb(),b.Xb()}if(2&t){var n=b.mc();b.Fb(13),b.tc("ngModel",n.SystemicExaminationMasterModel.ExaminationName),b.Fb(7),b.tc("ngModel",n.SystemicExaminationMasterModel.Status),b.Fb(6),b.tc("ngIf",null==n.lstIAccessStr?null:n.lstIAccessStr.includes(n.ActionList.ReadWrite.toString()))}}var A,L,_,R=[{path:"",component:(A=function(c){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(u,c);var o,r,a,s=n(u);function u(e,i,n,c,o){var r;return t(this,u),(r=s.call(this)).cdRef=e,r.router=i,r._MasterServices=n,r._ConstantServices=c,r._UtilityService=o,r.UOMMode=null,r.SystemicExaminationMasterModel={},r.ActionList=l.a,r.lstIAccess=[],r.lstIAccessStr=[],r.getPageLevelAccess(),r}return o=u,(r=[{key:"getPageLevelAccess",value:function(){var t,e,i=this,n=this.router.url,c=JSON.parse(localStorage.getItem("UerRoleAccess"))||[];(null==c?void 0:c.find(function(t){return t.MenuItemURL===n}))&&(this.lstIAccess=null===(t=c.find(function(t){return t.MenuItemURL===n}))||void 0===t?void 0:t.ActionIAccess,(null===(e=this.lstIAccess)||void 0===e?void 0:e.length)>0&&this.lstIAccess.map(function(t){i.lstIAccessStr.push(t.ActionId.toString())}))}},{key:"ngOnInit",value:function(){this._ConstantServices.ActiveMenuName="Systemic ExaminationMaster Master",this.cdRef.detectChanges(),this.LoadSystemicExaminationList()}},{key:"SaveSystemicExaminationHead",value:function(){var t=this;this._UtilityService.showSpinner(),this.SystemicExaminationMasterModel.CreatedBy=localStorage.getItem("userId"),this.SystemicExaminationMasterModel.ModifiedBy=localStorage.getItem("userId"),this.unsubscribe.add=this._MasterServices.AddSystemicExaminationHeadMaster(this.SystemicExaminationMasterModel).subscribe(function(e){t._UtilityService.hideSpinner(),1==e.actionResult.success?(t._UtilityService.showSuccessAlert(e.actionResult.errMsg),t.LoadSystemicExaminationList(),t.UOMMode=null):t._UtilityService.showWarningAlert(e.actionResult.errMsg)},function(e){t._UtilityService.hideSpinner(),t._UtilityService.showErrorAlert(e.message)})}},{key:"ResetModel",value:function(){this.SystemicExaminationMasterModel={},this.SystemicExaminationMasterModel.Status=1}},{key:"AddNewSystemicExamination",value:function(){this.ResetModel(),this.UOMMode="Add",this.cdRef.detectChanges(),this.myForm.resetForm()}},{key:"LoadSystemicExaminationList",value:function(){var t=this;this._UtilityService.showSpinner(),this.unsubscribe.add=this._MasterServices.GetSystemicExaminationHeadMaster().subscribe(function(e){if(t._UtilityService.hideSpinner(),t.cdRef.detectChanges(),1==e.actionResult.success){var i=JSON.parse(e.actionResult.result);t.LstSystemicExamination=i=i||[],t.cdRef.detectChanges()}else t.LstSystemicExamination=null},function(e){t._UtilityService.hideSpinner(),t._UtilityService.showErrorAlert(e.message)})}},{key:"LoadLstSystemicExaminationById",value:function(t){var e=this;this._UtilityService.showSpinner(),this.UOMMode="Edit",this.unsubscribe.add=this._MasterServices.GetSystemicExaminationHeadMasterById(t).subscribe(function(t){if(e._UtilityService.hideSpinner(),e.cdRef.detectChanges(),1==t.actionResult.success){var i=JSON.parse(t.actionResult.result);e.SystemicExaminationMasterModel=i=i||[],e.cdRef.detectChanges()}},function(t){e._UtilityService.hideSpinner(),e._UtilityService.showErrorAlert(t.message)})}},{key:"CloseModal",value:function(){this.UOMMode=null}}])&&e(o.prototype,r),a&&e(o,a),u}(u.a),A.\u0275fac=function(t){return new(t||A)(b.Sb(b.h),b.Sb(s.i),b.Sb(d.a),b.Sb(l.f),b.Sb(m.a))},A.\u0275cmp=b.Mb({type:A,selectors:[["app-systemic-examination-master"]],viewQuery:function(t,e){var i;1&t&&b.cd(h,1),2&t&&b.Hc(i=b.jc())&&(e.myForm=i.first)},features:[b.Cb],decls:2,vars:2,consts:[["class","row mt25",4,"ngIf"],[1,"row","mt25"],[1,"col-md-12"],[1,"card"],[1,"card-body"],["responsiveLayout","scroll","styleClass","p-datatable-striped","scrollHeight","calc(100vh - 165px)",3,"value","rowHover","globalFilterFields","scrollable"],["dt",""],["pTemplate","caption"],["pTemplate","emptymessage"],["pTemplate","header"],["pTemplate","body"],[1,"p-d-flex"],["pButton","","title","New","label","Add New","class","p-button-outlined","icon","pi pi-plus",3,"click",4,"ngIf"],[1,"p-input-icon-left","p-ml-auto"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search...",3,"input"],["pButton","","title","New","label","Add New","icon","pi pi-plus",1,"p-button-outlined",3,"click"],["matTooltip","View/Edit",3,"click"],["src","./assets/custom-icons/view.svg",1,"custom-ico","mr4",2,"width","24px !important"],[1,"col"],["myForm","ngForm"],[1,"row"],[1,"col-md-4"],[1,"form-group"],[1,"required"],["type","text","required","","maxlength","30","name","txtExaminationName",1,"form-control",3,"ngModel","ngModelChange"],["name","ddlStatus","required","",1,"form-control",3,"ngModel","ngModelChange"],["value","1"],["value","0"],[1,"row","justify-content-center"],["type","button","class","btn btn-new-primary mr-2",3,"disabled","click",4,"ngIf"],[1,"btn","btn-new-secondary",3,"click"],["type","button",1,"btn","btn-new-primary","mr-2",3,"disabled","click"]],template:function(t,e){1&t&&(b.Sc(0,U,10,5,"div",0),b.Sc(1,I,29,3,"div",0)),2&t&&(b.tc("ngIf",null==e.UOMMode),b.Fb(1),b.tc("ngIf",null!=e.UOMMode))},directives:[a.p,f.c,p.i,v.a,y.b,S.z,S.p,S.q,S.b,S.w,S.j,S.o,S.r,S.x,S.s,S.A],styles:[""]}),A)}],k=((L=function e(){t(this,e)}).\u0275fac=function(t){return new(t||L)},L.\u0275mod=b.Qb({type:L}),L.\u0275inj=b.Pb({imports:[[s.l.forChild(R)],s.l]}),L),O=r("Q4Mo"),C=r("arFO"),N=((_=function e(){t(this,e)}).\u0275fac=function(t){return new(t||_)},_.\u0275mod=b.Qb({type:_}),_.\u0275inj=b.Pb({imports:[[a.c,k,S.i,S.v,f.f,y.c,O.b,C.b,v.b]]}),_)}}])}();