!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var i,o=n(e);if(t){var a=n(this).constructor;i=Reflect.construct(o,arguments,a)}else i=o.apply(this,arguments);return c(this,i)}}function c(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{"mA+j":function(c,n,a){"use strict";a.r(n),a.d(n,"LeaveApprovalModule",function(){return B});var r=a("ofXK"),p=a("tyNb"),l=a("Nach"),s=a("CwUn"),v=a("fXoL"),b=a("ReGW"),u=a("NLkC"),d=a("rEr+"),f=a("7zfz"),m=a("7kUa"),A=a("3Pt+"),h=a("eO1q");function L(e,t){if(1&e){var i=v.Zb();v.Yb(0,"div",13),v.Yb(1,"span",14),v.Tb(2,"i",15),v.Yb(3,"input",16),v.ic("input",function(e){return v.Lc(i),v.mc(),v.Ic(5).filterGlobal(e.target.value,"contains")}),v.Xb(),v.Xb(),v.Xb()}}function S(e,t){if(1&e&&(v.Yb(0,"tr"),v.Yb(1,"td"),v.Uc(2," No records found "),v.Xb(),v.Xb()),2&e){var i=t.$implicit;v.Fb(1),v.Gb("colspan",null==i?null:i.length)}}function y(e,t){1&e&&(v.Yb(0,"colgroup"),v.Tb(1,"col",17),v.Tb(2,"col",18),v.Tb(3,"col",19),v.Tb(4,"col",19),v.Tb(5,"col",19),v.Tb(6,"col",19),v.Tb(7,"col",20),v.Tb(8,"col",21),v.Xb())}function g(e,t){1&e&&(v.Yb(0,"tr"),v.Yb(1,"th"),v.Uc(2,"Action"),v.Xb(),v.Yb(3,"th"),v.Uc(4,"Applied By"),v.Xb(),v.Yb(5,"th"),v.Uc(6,"Leave From"),v.Xb(),v.Yb(7,"th"),v.Uc(8,"Leave Upto"),v.Xb(),v.Yb(9,"th"),v.Uc(10,"Applied On"),v.Xb(),v.Yb(11,"th"),v.Uc(12,"Approved On"),v.Xb(),v.Yb(13,"th"),v.Uc(14,"Approved By"),v.Xb(),v.Yb(15,"th"),v.Uc(16,"Application Status"),v.Xb(),v.Xb())}function U(e,t){if(1&e){var i=v.Zb();v.Yb(0,"a",26),v.ic("click",function(){v.Lc(i);var e=v.mc().$implicit;return v.mc(2).ApproveApplication(e.LeaveId)}),v.Tb(1,"img",27),v.Xb()}}function D(e,t){if(1&e){var i=v.Zb();v.Yb(0,"a",28),v.ic("click",function(){v.Lc(i);var e=v.mc().$implicit;return v.mc(2).RejectApplication(e.LeaveId)}),v.Tb(1,"img",29),v.Xb()}}function X(e,t){if(1&e){var i=v.Zb();v.Yb(0,"tr"),v.Yb(1,"td"),v.Sc(2,U,2,0,"a",22),v.Yb(3,"a",23),v.ic("click",function(){v.Lc(i);var e=t.$implicit;return v.mc(2).LoadApplicationId(e.LeaveId)}),v.Tb(4,"img",24),v.Xb(),v.Sc(5,D,2,0,"a",25),v.Xb(),v.Yb(6,"td"),v.Uc(7),v.Xb(),v.Yb(8,"td"),v.Uc(9),v.nc(10,"date"),v.Xb(),v.Yb(11,"td"),v.Uc(12),v.nc(13,"date"),v.Xb(),v.Yb(14,"td"),v.Uc(15),v.nc(16,"date"),v.Xb(),v.Yb(17,"td"),v.Uc(18),v.nc(19,"date"),v.Xb(),v.Yb(20,"td"),v.Uc(21),v.Xb(),v.Yb(22,"td"),v.Yb(23,"span"),v.Uc(24),v.Xb(),v.Xb(),v.Xb()}if(2&e){var o=t.$implicit,c=v.mc(2);v.Fb(2),v.tc("ngIf","Pending"==o.ApprovalStatus),v.Fb(3),v.tc("ngIf","Pending"==o.ApprovalStatus),v.Fb(2),v.Vc(o.AppliedBy),v.Fb(2),v.Vc(v.pc(10,12,o.LeaveFrom,c.customDateFormat.DEF_DATE)),v.Fb(3),v.Vc(v.pc(13,15,o.LeaveUpto,c.customDateFormat.DEF_DATE)),v.Fb(3),v.Vc(v.pc(16,18,o.AppliedOn,c.customDateFormat.DEF_DATE)),v.Fb(3),v.Vc(v.pc(19,21,o.ApprovedOn,c.customDateFormat.DEF_DATE)),v.Fb(3),v.Vc(o.ApprovedBy),v.Fb(2),v.Hb(o.ApprovalStatus),v.Fb(1),v.Vc(o.ApprovalStatus)}}var w=function(){return["AppliedBy","LeaveFrom","LeaveUpto","AppliedOn","ApprovedOn","ApprovedByName","ApprovalStatus"]};function Y(e,t){if(1&e&&(v.Yb(0,"div",2),v.Yb(1,"div",3),v.Yb(2,"div",4),v.Yb(3,"div",5),v.Yb(4,"p-table",6,7),v.Sc(6,L,4,0,"ng-template",8),v.Sc(7,S,3,1,"ng-template",9),v.Sc(8,y,9,0,"ng-template",10),v.Sc(9,g,17,0,"ng-template",11),v.Sc(10,X,25,24,"ng-template",12),v.Xb(),v.Xb(),v.Xb(),v.Xb(),v.Xb()),2&e){var i=v.mc();v.Fb(4),v.tc("value",i.LstDoctorLeaveApplication)("rowHover",!0)("globalFilterFields",v.yc(4,w))("scrollable",!0)}}function F(e,t){if(1&e){var i=v.Zb();v.Yb(0,"div",41),v.Yb(1,"label"),v.Uc(2,"Cancel/Reject Reason"),v.Xb(),v.Yb(3,"span",37),v.Uc(4,"*"),v.Xb(),v.Yb(5,"textarea",47),v.ic("ngModelChange",function(e){return v.Lc(i),v.mc(2).DoctorLeaveApplication.CancelReason=e}),v.Xb(),v.Xb()}if(2&e){var o=v.mc(2);v.Fb(5),v.tc("ngModel",o.DoctorLeaveApplication.CancelReason)}}function R(e,t){if(1&e){var i=v.Zb();v.Yb(0,"button",48),v.ic("click",function(){return v.Lc(i),v.mc(2).ApproveApplicationSubmit()}),v.Uc(1,"Approve"),v.Xb()}if(2&e){v.mc();var o=v.Ic(5);v.tc("disabled",!o.form.valid)}}function _(e,t){if(1&e){var i=v.Zb();v.Yb(0,"button",48),v.ic("click",function(){return v.Lc(i),v.mc(2).RejectApplicationSubmit()}),v.Uc(1,"Reject Application"),v.Xb()}if(2&e){v.mc();var o=v.Ic(5);v.tc("disabled",!o.form.valid)}}var I=function(){return{standalone:!0}};function C(e,t){if(1&e){var i=v.Zb();v.Yb(0,"div",30),v.Yb(1,"div",31),v.Yb(2,"div",32),v.Yb(3,"div",3),v.Yb(4,"form",33,34),v.Yb(6,"div",4),v.Yb(7,"div",35),v.Yb(8,"div",36),v.Yb(9,"label"),v.Uc(10,"Leave From"),v.Xb(),v.Yb(11,"span",37),v.Uc(12,"*"),v.Xb(),v.Yb(13,"div"),v.Yb(14,"p-calendar",38,39),v.ic("ngModelChange",function(e){return v.Lc(i),v.mc().DoctorLeaveApplication.LeaveFrom=e}),v.Xb(),v.Xb(),v.Xb(),v.Xb(),v.Yb(16,"div",35),v.Yb(17,"div",36),v.Yb(18,"label"),v.Uc(19,"Leave Upto"),v.Xb(),v.Yb(20,"span",37),v.Uc(21,"*"),v.Xb(),v.Yb(22,"div"),v.Yb(23,"p-calendar",38,40),v.ic("ngModelChange",function(e){return v.Lc(i),v.mc().DoctorLeaveApplication.LeaveUpto=e}),v.Xb(),v.Xb(),v.Xb(),v.Xb(),v.Yb(25,"div",41),v.Yb(26,"label"),v.Uc(27,"Reason"),v.Xb(),v.Yb(28,"span",37),v.Uc(29,"*"),v.Xb(),v.Yb(30,"textarea",42),v.ic("ngModelChange",function(e){return v.Lc(i),v.mc().DoctorLeaveApplication.LeaveReason=e}),v.Xb(),v.Xb(),v.Sc(31,F,6,1,"div",43),v.Xb(),v.Yb(32,"div",44),v.Sc(33,R,2,1,"button",45),v.Sc(34,_,2,1,"button",45),v.Yb(35,"button",46),v.ic("click",function(){return v.Lc(i),v.mc().CloseModal()}),v.Uc(36,"Close"),v.Xb(),v.Xb(),v.Xb(),v.Xb(),v.Xb(),v.Xb(),v.Xb()}if(2&e){var o=v.mc();v.Fb(14),v.tc("ngModel",o.DoctorLeaveApplication.LeaveFrom)("ngModelOptions",v.yc(14,I))("showIcon",!0)("dateFormat",o.customDateFormat.CalendarFormat)("readonlyInput",!1),v.Fb(9),v.tc("ngModel",o.DoctorLeaveApplication.LeaveUpto)("ngModelOptions",v.yc(15,I))("showIcon",!0)("dateFormat",o.customDateFormat.CalendarFormat)("readonlyInput",!1),v.Fb(7),v.tc("ngModel",o.DoctorLeaveApplication.LeaveReason),v.Fb(1),v.tc("ngIf","Reject"==o.LeaveMode&&"Rejected"!=o.DoctorLeaveApplication.ApprovalStatus),v.Fb(2),v.tc("ngIf",o.isApproved),v.Fb(1),v.tc("ngIf","Reject"==o.LeaveMode&&"Rejected"!=o.DoctorLeaveApplication.ApprovalStatus)}}var M,T,O,j=[{path:"",component:(M=function(c){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(s,c);var n,a,r,p=o(s);function s(t,i,o,c){var n;return e(this,s),(n=p.call(this)).cdRef=t,n._DoctorServices=i,n._ConstantServices=o,n._UtilityService=c,n.ClinicCurre=localStorage.getItem("ClinicId"),n.UserTypeCurre=localStorage.getItem("userTypeId"),n.UserTypes=l.s,n.customDateFormat=l.h,n.isApproved=!1,n.LeaveMode=null,n.LstDoctorLeaveApplication=[],n.DoctorLeaveApplication={},n}return n=s,(a=[{key:"ngOnInit",value:function(){this._ConstantServices.ActiveMenuName="Leave Approval",this.LoadApplicationList()}},{key:"ApproveApplication",value:function(e){var t=this;this.LoadApplicationId(e),null!=this.DoctorLeaveApplication.LeaveId&&(this._UtilityService.showSpinner(),this.DoctorLeaveApplication.ApprovedOn=new Date,this.DoctorLeaveApplication.ApprovedBy=localStorage.getItem("userId"),this.DoctorLeaveApplication.ApprovalStatus="Approved",this.cdRef.detectChanges(),this._DoctorServices.AddEditLeaveApplication(this.DoctorLeaveApplication).subscribe(function(e){t._UtilityService.hideSpinner(),t._UtilityService.showSuccessAlert(e.actionResult.errMsg),1==e.actionResult.success&&(t.LoadApplicationList(),t.LeaveMode=null)},function(e){t._UtilityService.hideSpinner(),t._UtilityService.showErrorAlert(e.message)}))}},{key:"AddNewLeave",value:function(){this.DoctorLeaveApplication={},this.LeaveMode="Add",this.DoctorLeaveApplication.ApprovalStatus="Pending",this.cdRef.detectChanges()}},{key:"RejectApplication",value:function(e){var t=this;this._UtilityService.showSpinner(),this._DoctorServices.GetLeaveApplicationByApplicationId(e).subscribe(function(e){if(t._UtilityService.hideSpinner(),1==e.actionResult.success){var i=JSON.parse(e.actionResult.result);t.DoctorLeaveApplication=i=i||[],t.LeaveMode="Reject",t.cdRef.detectChanges()}},function(e){t._UtilityService.hideSpinner(),t._UtilityService.showErrorAlert(e.message)})}},{key:"RejectApplicationSubmit",value:function(){var e=this;null!=this.DoctorLeaveApplication.CancelReason?(this._UtilityService.showSpinner(),this.DoctorLeaveApplication.ApprovedOn=new Date,this.DoctorLeaveApplication.ApprovedBy=localStorage.getItem("userId"),this.DoctorLeaveApplication.ApprovalStatus="Rejected",this.isApproved=!1,this.cdRef.detectChanges(),this._DoctorServices.AddEditLeaveApplication(this.DoctorLeaveApplication).subscribe(function(t){e._UtilityService.hideSpinner(),e._UtilityService.showSuccessAlert(t.actionResult.errMsg),1==t.actionResult.success&&(e.LoadApplicationList(),e.LeaveMode=null)},function(t){e._UtilityService.hideSpinner(),e._UtilityService.showErrorAlert(t.message)})):this._UtilityService.showWarningAlert("Please provide Reject Reason")}},{key:"CloseModal",value:function(){this.LeaveMode=null,this.isApproved=!1}},{key:"LoadApplicationList",value:function(){var e=this,t="";this.UserTypeCurre!=l.s.SuperAdmin&&(t=localStorage.getItem("ClinicId")),this._UtilityService.showSpinner(),this._DoctorServices.GetLeaveApplicationByClinicId(t).subscribe(function(t){if(e._UtilityService.hideSpinner(),1==t.actionResult.success){var i=JSON.parse(t.actionResult.result);e.LstDoctorLeaveApplication=i=i||[],e.LeaveMode=null,e.cdRef.detectChanges()}},function(t){e._UtilityService.hideSpinner(),e._UtilityService.showErrorAlert(t.message)})}},{key:"LoadApplicationId",value:function(e){var t=this;this._UtilityService.showSpinner(),this.isApproved=!1,this._DoctorServices.GetLeaveApplicationByApplicationId(e).subscribe(function(e){if(t._UtilityService.hideSpinner(),1==e.actionResult.success){var i=JSON.parse(e.actionResult.result);t.DoctorLeaveApplication=i=i||[],t.DoctorLeaveApplication.LeaveFrom=new Date(t.DoctorLeaveApplication.LeaveFrom),t.DoctorLeaveApplication.LeaveUpto=new Date(t.DoctorLeaveApplication.LeaveUpto),"Pending"!=t.DoctorLeaveApplication.ApprovalStatus&&"Rejected"!=t.DoctorLeaveApplication.ApprovalStatus||(t.isApproved=!0),t.LeaveMode="Edit",t.cdRef.detectChanges()}},function(e){t._UtilityService.hideSpinner(),t._UtilityService.showErrorAlert(e.message)})}},{key:"ApproveApplicationSubmit",value:function(){var e=this;this.DoctorLeaveApplication.ApprovedOn=new Date,this.DoctorLeaveApplication.ApprovedBy=localStorage.getItem("userId"),this.DoctorLeaveApplication.ApprovalStatus="Approved",this._UtilityService.showSpinner(),this._DoctorServices.AddEditLeaveApplication(this.DoctorLeaveApplication).subscribe(function(t){e._UtilityService.hideSpinner(),e._UtilityService.showSuccessAlert(t.actionResult.errMsg),1==t.actionResult.success&&(e.LoadApplicationList(),e.LeaveMode=null)},function(t){e._UtilityService.hideSpinner(),e._UtilityService.showErrorAlert(t.message)})}}])&&t(n.prototype,a),r&&t(n,r),s}(s.a),M.\u0275fac=function(e){return new(e||M)(v.Sb(v.h),v.Sb(b.a),v.Sb(l.f),v.Sb(u.a))},M.\u0275cmp=v.Mb({type:M,selectors:[["app-leave-approval"]],features:[v.Cb],decls:2,vars:2,consts:[["class","card mt25 mb10",4,"ngIf"],["class","row mt25",4,"ngIf"],[1,"card","mt25","mb10"],[1,"card-body"],[1,"row"],[1,"col-md-12"],["responsiveLayout","scroll","styleClass","p-datatable-striped","scrollHeight","calc(100vh - 165px)",3,"value","rowHover","globalFilterFields","scrollable"],["dt",""],["pTemplate","caption"],["pTemplate","emptymessage"],["pTemplate","colgroup"],["pTemplate","header"],["pTemplate","body"],[1,"p-d-flex"],[1,"p-input-icon-left","p-ml-auto"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search...",3,"input"],[2,"width","60px"],[2,"width","150px"],[2,"width","100px"],[2,"width","130px"],[2,"width","110px"],["matTooltip","Approve Application",3,"click",4,"ngIf"],["matTooltip","View/Edit",3,"click"],["src","./assets/custom-icons/view.svg",1,"custom-ico","mr4",2,"width","24px !important"],["matTooltip","Reject Application",3,"click",4,"ngIf"],["matTooltip","Approve Application",3,"click"],["src","./assets/custom-icons/yes.svg",1,"custom-ico","mr4"],["matTooltip","Reject Application",3,"click"],["src","./assets/custom-icons/no.svg",1,"custom-ico"],[1,"row","mt25"],[1,"col"],[1,"card"],[1,"form-label"],["myForm","ngForm"],[1,"col-md-auto"],[1,"form-group"],[1,"required"],["disabled","true","inputId","icon",3,"ngModel","ngModelOptions","showIcon","dateFormat","readonlyInput","ngModelChange"],["LeaveFrom",""],["LeaveUpto",""],[1,"col-md-6"],["rows","1","name","txtReason","readonly","",1,"form-control",3,"ngModel","ngModelChange"],["class","col-md-6",4,"ngIf"],[1,"row","justify-content-center"],["type","button","type","button","class","btn btn-new-primary mr-2",3,"disabled","click",4,"ngIf"],[1,"btn","btn-new-secondary",3,"click"],["rows","2","name","txtCancelReason",1,"form-control",3,"ngModel","ngModelChange"],["type","button","type","button",1,"btn","btn-new-primary","mr-2",3,"disabled","click"]],template:function(e,t){1&e&&(v.Sc(0,Y,11,5,"div",0),v.Sc(1,C,37,16,"div",1)),2&e&&(v.tc("ngIf",null==t.LeaveMode),v.Fb(1),v.tc("ngIf",null!=t.LeaveMode))},directives:[r.p,d.c,f.i,m.a,A.z,A.p,A.q,h.a,A.o,A.r,A.b],pipes:[r.f],styles:[""]}),M)}],k=((T=function t(){e(this,t)}).\u0275fac=function(e){return new(e||T)},T.\u0275mod=v.Qb({type:T}),T.\u0275inj=v.Pb({imports:[[p.l.forChild(j)],p.l]}),T),E=a("jIHw"),x=a("arFO"),B=((O=function t(){e(this,t)}).\u0275fac=function(e){return new(e||O)},O.\u0275mod=v.Qb({type:O}),O.\u0275inj=v.Pb({imports:[[r.c,k,A.i,d.f,E.c,x.b,m.b,h.b]]}),O)}}])}();