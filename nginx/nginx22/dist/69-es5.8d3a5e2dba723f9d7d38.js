!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var i,o=c(e);if(t){var a=c(this).constructor;i=Reflect.construct(o,arguments,a)}else i=o.apply(this,arguments);return n(this,i)}}function n(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{zBgB:function(n,c,a){"use strict";a.r(c),a.d(c,"LeaveApplicationModule",function(){return P});var r=a("ofXK"),l=a("tyNb"),p=a("Nach"),s=a("CwUn"),u=a("fXoL"),b=a("ReGW"),d=a("NLkC"),v=a("rEr+"),f=a("7zfz"),m=a("jIHw"),h=a("7kUa"),L=a("3Pt+"),y=a("eO1q");function A(e,t){if(1&e){var i=u.Zb();u.Yb(0,"div",12),u.Yb(1,"button",13),u.ic("click",function(){return u.Lc(i),u.mc(2).AddNewLeave()}),u.Xb(),u.Yb(2,"span",14),u.Tb(3,"i",15),u.Yb(4,"input",16),u.ic("input",function(e){return u.Lc(i),u.mc(),u.Ic(5).filterGlobal(e.target.value,"contains")}),u.Xb(),u.Xb(),u.Xb()}}function g(e,t){if(1&e&&(u.Yb(0,"tr"),u.Yb(1,"td"),u.Uc(2," No records found "),u.Xb(),u.Xb()),2&e){var i=t.$implicit;u.Fb(1),u.Gb("colspan",null==i?null:i.length)}}function S(e,t){1&e&&(u.Yb(0,"colgroup"),u.Tb(1,"col",17),u.Tb(2,"col",17),u.Tb(3,"col",17),u.Tb(4,"col",18),u.Tb(5,"col",18),u.Tb(6,"col",18),u.Tb(7,"col",19),u.Xb())}function D(e,t){1&e&&(u.Yb(0,"tr"),u.Yb(1,"th"),u.Uc(2,"Action"),u.Xb(),u.Yb(3,"th"),u.Uc(4,"Leave From"),u.Xb(),u.Yb(5,"th"),u.Uc(6,"Leave Upto"),u.Xb(),u.Yb(7,"th"),u.Uc(8,"Applied On"),u.Xb(),u.Yb(9,"th"),u.Uc(10,"Approved On"),u.Xb(),u.Yb(11,"th"),u.Uc(12,"Approved By"),u.Xb(),u.Yb(13,"th"),u.Uc(14,"Application Status"),u.Xb(),u.Xb())}function w(e,t){if(1&e){var i=u.Zb();u.Yb(0,"a",23),u.ic("click",function(){u.Lc(i);var e=u.mc().$implicit;return u.mc(2).CancelApplication(e.LeaveId)}),u.Tb(1,"img",24),u.Xb()}}function U(e,t){if(1&e){var i=u.Zb();u.Yb(0,"tr"),u.Yb(1,"td"),u.Yb(2,"a",20),u.ic("click",function(){u.Lc(i);var e=t.$implicit;return u.mc(2).LoadApplicationId(e.LeaveId)}),u.Tb(3,"img",21),u.Xb(),u.Sc(4,w,2,0,"a",22),u.Xb(),u.Yb(5,"td"),u.Uc(6),u.nc(7,"date"),u.Xb(),u.Yb(8,"td"),u.Uc(9),u.nc(10,"date"),u.Xb(),u.Yb(11,"td"),u.Uc(12),u.nc(13,"date"),u.Xb(),u.Yb(14,"td"),u.Uc(15),u.nc(16,"date"),u.Xb(),u.Yb(17,"td"),u.Uc(18),u.Xb(),u.Yb(19,"td"),u.Uc(20),u.Xb(),u.Xb()}if(2&e){var o=t.$implicit,n=u.mc(2);u.Fb(4),u.tc("ngIf","Pending"==o.ApprovalStatus),u.Fb(2),u.Vc(u.pc(7,7,o.LeaveFrom,n.customDateFormat.DEF_DATE)),u.Fb(3),u.Vc(u.pc(10,10,o.LeaveUpto,n.customDateFormat.DEF_DATE)),u.Fb(3),u.Vc(u.pc(13,13,o.AppliedOn,n.customDateFormat.DEF_DATE)),u.Fb(3),u.Vc(u.pc(16,16,o.ApprovedOn,n.customDateFormat.DEF_DATE)),u.Fb(3),u.Vc(o.ApprovedByName),u.Fb(2),u.Vc(o.ApprovalStatus)}}var X=function(){return["LeaveFrom","LeaveUpto","AppliedOn","ApprovedOn","ApprovedByName","ApprovalStatus"]};function Y(e,t){if(1&e&&(u.Yb(0,"div",1),u.Yb(1,"div",2),u.Yb(2,"div",3),u.Yb(3,"div",4),u.Yb(4,"p-table",5,6),u.Sc(6,A,5,0,"ng-template",7),u.Sc(7,g,3,1,"ng-template",8),u.Sc(8,S,8,0,"ng-template",9),u.Sc(9,D,15,0,"ng-template",10),u.Sc(10,U,21,19,"ng-template",11),u.Xb(),u.Xb(),u.Xb(),u.Xb(),u.Xb()),2&e){var i=u.mc();u.Fb(4),u.tc("value",i.LstDoctorLeaveApplication)("rowHover",!0)("globalFilterFields",u.yc(4,X))("scrollable",!0)}}function F(e,t){if(1&e){var i=u.Zb();u.Yb(0,"div",34),u.Yb(1,"label"),u.Uc(2,"Cancel Reason"),u.Xb(),u.Yb(3,"span",30),u.Uc(4,"*"),u.Xb(),u.Yb(5,"textarea",41),u.ic("ngModelChange",function(e){return u.Lc(i),u.mc(2).DoctorLeaveApplication.CancelReason=e}),u.Xb(),u.Xb()}if(2&e){var o=u.mc(2);u.Fb(5),u.tc("ngModel",o.DoctorLeaveApplication.CancelReason)}}function C(e,t){if(1&e){var i=u.Zb();u.Yb(0,"button",42),u.ic("click",function(){return u.Lc(i),u.mc(2).SaveApplication()}),u.Uc(1,"Save"),u.Xb()}if(2&e){u.mc();var o=u.Ic(5);u.tc("disabled",!o.form.valid)}}function _(e,t){if(1&e){var i=u.Zb();u.Yb(0,"button",43),u.ic("click",function(){return u.Lc(i),u.mc(2).CancelApplicationSubmit()}),u.Uc(1,"Cancel Application"),u.Xb()}if(2&e){u.mc();var o=u.Ic(5);u.tc("disabled",!o.form.valid)}}var I=function(){return{standalone:!0}};function M(e,t){if(1&e){var i=u.Zb();u.Yb(0,"div",1),u.Yb(1,"div",25),u.Yb(2,"div",3),u.Yb(3,"div",4),u.Yb(4,"form",null,26),u.Yb(6,"div",27),u.Yb(7,"div",28),u.Yb(8,"div",29),u.Yb(9,"label"),u.Uc(10,"Leave From"),u.Xb(),u.Yb(11,"span",30),u.Uc(12,"*"),u.Xb(),u.Yb(13,"div"),u.Yb(14,"p-calendar",31,32),u.ic("ngModelChange",function(e){return u.Lc(i),u.mc().DoctorLeaveApplication.LeaveFrom=e})("onClose",function(){return u.Lc(i),u.mc().calculateDiff()}),u.Xb(),u.Xb(),u.Xb(),u.Xb(),u.Yb(16,"div",28),u.Yb(17,"div",29),u.Yb(18,"label"),u.Uc(19,"Leave Upto"),u.Xb(),u.Yb(20,"span",30),u.Uc(21,"*"),u.Xb(),u.Yb(22,"div"),u.Yb(23,"p-calendar",31,33),u.ic("ngModelChange",function(e){return u.Lc(i),u.mc().DoctorLeaveApplication.LeaveUpto=e})("onClose",function(){return u.Lc(i),u.mc().calculateDiff()}),u.Xb(),u.Xb(),u.Xb(),u.Xb(),u.Yb(25,"div",34),u.Yb(26,"div",29),u.Yb(27,"label"),u.Uc(28,"Reason"),u.Xb(),u.Yb(29,"span",30),u.Uc(30,"*"),u.Xb(),u.Yb(31,"textarea",35),u.ic("ngModelChange",function(e){return u.Lc(i),u.mc().DoctorLeaveApplication.LeaveReason=e}),u.Xb(),u.Xb(),u.Xb(),u.Sc(32,F,6,1,"div",36),u.Xb(),u.Yb(33,"div",37),u.Sc(34,C,2,1,"button",38),u.Sc(35,_,2,1,"button",39),u.Yb(36,"button",40),u.ic("click",function(){return u.Lc(i),u.mc().CloseModal()}),u.Uc(37,"Close"),u.Xb(),u.Xb(),u.Xb(),u.Xb(),u.Xb(),u.Xb(),u.Xb()}if(2&e){var o=u.mc();u.Fb(14),u.tc("minDate",o.today)("ngModel",o.DoctorLeaveApplication.LeaveFrom)("ngModelOptions",u.yc(16,I))("showIcon",!0)("dateFormat",o.customDateFormat.CalendarFormat)("readonlyInput",!1),u.Fb(9),u.tc("minDate",o.maxUpto)("ngModel",o.DoctorLeaveApplication.LeaveUpto)("ngModelOptions",u.yc(17,I))("showIcon",!0)("dateFormat",o.customDateFormat.CalendarFormat)("readonlyInput",!1),u.Fb(8),u.tc("ngModel",o.DoctorLeaveApplication.LeaveReason),u.Fb(1),u.tc("ngIf","Cancel"==o.LeaveMode),u.Fb(2),u.tc("ngIf","Cancel"!=o.LeaveMode&&"Pending"===o.DoctorLeaveApplication.ApprovalStatus),u.Fb(1),u.tc("ngIf","Cancel"==o.LeaveMode&&"Pending"===o.DoctorLeaveApplication.ApprovalStatus)}}var R,k,O,T=[{path:"",component:(R=function(n){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(s,n);var c,a,r,l=o(s);function s(t,i,o,n){var c;return e(this,s),(c=l.call(this)).cdRef=t,c._ConstantServices=i,c._DoctorServices=o,c._UtilityService=n,c.customDateFormat=p.h,c.LeaveMode=null,c.LstDoctorLeaveApplication=[],c.DoctorLeaveApplication={},c.today=new Date,c.maxFrom=new Date,c.maxUpto=new Date,c}return c=s,(a=[{key:"ngOnInit",value:function(){this._ConstantServices.ActiveMenuName="Leave Application",this.LoadApplicationList()}},{key:"LoadApplicationList",value:function(){var e=this;this._UtilityService.showSpinner(),this.unsubscribe.add=this._DoctorServices.GetLeaveApplicationByUserId(localStorage.getItem("userId")).subscribe(function(t){if(e._UtilityService.hideSpinner(),1==t.actionResult.success){e._UtilityService.hideSpinner();var i=JSON.parse(t.actionResult.result);e.LstDoctorLeaveApplication=i=i||[],e.LeaveMode=null,e.cdRef.detectChanges()}},function(t){e._UtilityService.hideSpinner(),e._UtilityService.showErrorAlert(t.message)})}},{key:"LoadApplicationId",value:function(e){var t=this;this._UtilityService.showSpinner(),this.unsubscribe.add=this._DoctorServices.GetLeaveApplicationByApplicationId(e).subscribe(function(e){if(t._UtilityService.hideSpinner(),1==e.actionResult.success){var i=JSON.parse(e.actionResult.result);t.DoctorLeaveApplication=i=i||[],t.DoctorLeaveApplication.LeaveFrom=new Date(t.DoctorLeaveApplication.LeaveFrom),t.DoctorLeaveApplication.LeaveUpto=new Date(t.DoctorLeaveApplication.LeaveUpto),t.LeaveMode="Edit",t.cdRef.detectChanges()}},function(e){t._UtilityService.hideSpinner(),t._UtilityService.showErrorAlert(e.message)})}},{key:"AddNewLeave",value:function(){this.DoctorLeaveApplication={},this.LeaveMode="Add",this.DoctorLeaveApplication.ApprovalStatus="Pending",this.cdRef.detectChanges()}},{key:"SaveApplication",value:function(){var e=this;this.DoctorLeaveApplication.DoctorId=localStorage.getItem("userId"),this.DoctorLeaveApplication.ClinicId=localStorage.getItem("ClinicId"),this.DoctorLeaveApplication.AppliedOn=new Date,this.DoctorLeaveApplication.AppliedBy=localStorage.getItem("userId"),this._UtilityService.showSpinner(),this.unsubscribe.add=this._DoctorServices.AddEditLeaveApplication(this.DoctorLeaveApplication).subscribe(function(t){e._UtilityService.hideSpinner(),1==t.actionResult.success?(e._UtilityService.showSuccessAlert(t.actionResult.errMsg),e.LoadApplicationList(),e.LeaveMode=null):e._UtilityService.showWarningAlert(t.actionResult.errMsg)},function(t){e._UtilityService.hideSpinner(),e._UtilityService.showErrorAlert(t.message)})}},{key:"CancelApplication",value:function(e){var t=this;this._UtilityService.showSpinner(),this.unsubscribe.add=this._DoctorServices.GetLeaveApplicationByApplicationId(e).subscribe(function(e){if(t._UtilityService.hideSpinner(),1==e.actionResult.success){var i=JSON.parse(e.actionResult.result);t.DoctorLeaveApplication=i=i||[],t.LeaveMode="Cancel",t.cdRef.detectChanges()}},function(e){t._UtilityService.hideSpinner(),t._UtilityService.showErrorAlert(e.message)})}},{key:"CancelApplicationSubmit",value:function(){var e=this;null!=this.DoctorLeaveApplication.CancelReason?(this._UtilityService.showSpinner(),this.DoctorLeaveApplication.ApprovedOn=new Date,this.DoctorLeaveApplication.ApprovedBy=localStorage.getItem("userId"),this.DoctorLeaveApplication.ApprovalStatus="Cancelled",this.cdRef.detectChanges(),this.unsubscribe.add=this._DoctorServices.AddEditLeaveApplication(this.DoctorLeaveApplication).subscribe(function(t){e._UtilityService.hideSpinner(),e._UtilityService.showSuccessAlert(t.actionResult.errMsg),1==t.actionResult.success&&(e.LoadApplicationList(),e.LeaveMode=null)},function(t){e._UtilityService.hideSpinner(),e._UtilityService.showErrorAlert(t.message)})):this._UtilityService.showWarningAlert("Please provide Cancel Reason")}},{key:"CloseModal",value:function(){this.LeaveMode=null}},{key:"calculateDiff",value:function(){var e=this.DoctorLeaveApplication.LeaveFrom,t=this.DoctorLeaveApplication.LeaveUpto;if(null!=e&&null!=e&&(this.maxUpto=this.today),null!=e&&null!=e&&null!=t&&null!=t){e>t&&(e=t,this.DoctorLeaveApplication.LeaveFrom=t);var i=Math.floor((t-e)/864e5);this.noofdays=i+1,this.cdRef.detectChanges()}}}])&&t(c.prototype,a),r&&t(c,r),s}(s.a),R.\u0275fac=function(e){return new(e||R)(u.Sb(u.h),u.Sb(p.f),u.Sb(b.a),u.Sb(d.a))},R.\u0275cmp=u.Mb({type:R,selectors:[["app-leave-application"]],features:[u.Cb],decls:2,vars:2,consts:[["class","row mt25 mb10",4,"ngIf"],[1,"row","mt25","mb10"],[1,"col-md-12"],[1,"card"],[1,"card-body"],["responsiveLayout","scroll","styleClass","p-datatable-striped","scrollHeight","calc(100vh - 165px)",3,"value","rowHover","globalFilterFields","scrollable"],["dt",""],["pTemplate","caption"],["pTemplate","emptymessage"],["pTemplate","colgroup"],["pTemplate","header"],["pTemplate","body"],[1,"p-d-flex"],["pButton","","title","New","label","Add New","icon","pi pi-plus",1,"p-button-outlined",3,"click"],[1,"p-input-icon-left","p-ml-auto"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search...",3,"input"],[2,"width","80px"],[2,"width","105px"],[2,"width","120px"],["matTooltip","View/Edit",3,"click"],["src","./assets/custom-icons/view.svg",1,"custom-ico","mr4",2,"width","24px !important"],["matTooltip","Cancel",3,"click",4,"ngIf"],["matTooltip","Cancel",3,"click"],["src","./assets/custom-icons/no.svg",1,"custom-ico",2,"width","24px !important"],[1,"col"],["myForm","ngForm"],[1,"row"],[1,"col-md-auto"],[1,"form-group"],[1,"required"],["inputId","icon",3,"minDate","ngModel","ngModelOptions","showIcon","dateFormat","readonlyInput","ngModelChange","onClose"],["LeaveFrom",""],["LeaveUpto",""],[1,"col-md-6"],["rows","2","required","","name","txtReason",1,"form-control","text-area-input",3,"ngModel","ngModelChange"],["class","col-md-6",4,"ngIf"],[1,"row","justify-content-center"],["type","button","type","button","class","btn btn-new-primary mr-2",3,"disabled","click",4,"ngIf"],["type","button","type","button","class","btn  btn-new-primary mr-3",3,"disabled","click",4,"ngIf"],[1,"btn","btn-new-secondary",3,"click"],["rows","2","name","txtCancelReason",1,"form-control",3,"ngModel","ngModelChange"],["type","button","type","button",1,"btn","btn-new-primary","mr-2",3,"disabled","click"],["type","button","type","button",1,"btn","btn-new-primary","mr-3",3,"disabled","click"]],template:function(e,t){1&e&&(u.Sc(0,Y,11,5,"div",0),u.Sc(1,M,38,18,"div",0)),2&e&&(u.tc("ngIf",null==t.LeaveMode),u.Fb(1),u.tc("ngIf",null!=t.LeaveMode))},directives:[r.p,v.c,f.i,m.b,h.a,L.z,L.p,L.q,y.a,L.o,L.r,L.b,L.w],pipes:[r.f],styles:[""]}),R)}],E=((k=function t(){e(this,t)}).\u0275fac=function(e){return new(e||k)},k.\u0275mod=u.Qb({type:k}),k.\u0275inj=u.Pb({imports:[[l.l.forChild(T)],l.l]}),k),x=a("Q4Mo"),N=a("arFO"),P=((O=function t(){e(this,t)}).\u0275fac=function(e){return new(e||O)},O.\u0275mod=u.Qb({type:O}),O.\u0275inj=u.Pb({imports:[[r.c,E,L.i,L.v,v.f,m.c,x.b,N.b,h.b,y.b]]}),O)}}])}();