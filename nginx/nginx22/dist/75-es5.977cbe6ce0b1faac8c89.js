!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var i=0;i<t.length;i++){var c=t[i];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var i,c=r(e);if(t){var o=r(this).constructor;i=Reflect.construct(c,arguments,o)}else i=c.apply(this,arguments);return n(this,i)}}function n(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{XbgQ:function(n,r,o){"use strict";o.r(r),o.d(r,"BlockMasterModule",function(){return Z});var l=o("ofXK"),s=o("tyNb"),a=o("CwUn"),u=o("Nach"),b=o("fXoL"),d=o("dcBc"),f=o("7zAq"),p=o("NLkC"),v=o("rEr+"),m=o("7zfz"),h=o("7kUa"),S=o("jIHw"),y=o("3Pt+"),g=o("arFO"),M=o("AAHA"),I=["myForm"],w=["dt"],X=["filtr"];function k(e,t){if(1&e){var i=b.Zb();b.Yb(0,"button",19),b.ic("click",function(){return b.Lc(i),b.mc(3).AddNewBlock()}),b.Xb()}}function Y(e,t){if(1&e){var i=b.Zb();b.Yb(0,"div",11),b.Sc(1,k,1,0,"button",12),b.Yb(2,"span",13),b.Uc(3),b.Xb(),b.Yb(4,"span",14),b.Yb(5,"span",15),b.Tb(6,"i",16),b.Yb(7,"input",17,18),b.ic("input",function(e){return b.Lc(i),b.mc(),b.Ic(5).filterGlobal(e.target.value,"contains")}),b.Xb(),b.Xb(),b.Xb(),b.Xb()}if(2&e){var c=b.mc(2);b.Fb(1),b.tc("ngIf",null==c.lstIAccessStr?null:c.lstIAccessStr.includes(c.ActionList.ReadWrite.toString())),b.Fb(2),b.Wc(" ",(null==c.lstMaster?null:c.lstMaster.length)>0?"Total Records: "+c.filteredValuesLength:""," ")}}function A(e,t){if(1&e&&(b.Yb(0,"tr"),b.Yb(1,"td"),b.Uc(2," No records found "),b.Xb(),b.Xb()),2&e){var i=t.$implicit;b.Fb(1),b.Gb("colspan",null==i?null:i.length)}}function C(e,t){1&e&&(b.Yb(0,"th"),b.Uc(1,"Clinic Name"),b.Xb())}function U(e,t){if(1&e&&(b.Yb(0,"tr"),b.Sc(1,C,2,0,"th",20),b.Yb(2,"th"),b.Uc(3,"Block Name"),b.Xb(),b.Yb(4,"th"),b.Uc(5,"Status"),b.Xb(),b.Yb(6,"th"),b.Uc(7,"Action"),b.Xb(),b.Xb()),2&e){var i=b.mc(2);b.Fb(1),b.tc("ngIf",i.UserTypeCurre===i.userTypes.SuperAdmin)}}function j(e,t){if(1&e&&(b.Yb(0,"td"),b.Uc(1),b.Xb()),2&e){var i=b.mc().$implicit;b.Fb(1),b.Vc(i.ClinicName)}}function R(e,t){if(1&e){var i=b.Zb();b.Yb(0,"tr"),b.Sc(1,j,2,1,"td",20),b.Yb(2,"td"),b.Uc(3),b.Xb(),b.Yb(4,"td"),b.Uc(5),b.Xb(),b.Yb(6,"td"),b.Yb(7,"a",21),b.ic("click",function(){b.Lc(i);var e=t.$implicit;return b.mc(2).GetBlockMasterDetailsById(e.BlockMasterId)}),b.Tb(8,"img",22),b.Xb(),b.Xb(),b.Xb()}if(2&e){var c=t.$implicit,n=b.mc(2);b.Fb(1),b.tc("ngIf",n.UserTypeCurre===n.userTypes.SuperAdmin),b.Fb(2),b.Vc(c.BlockName),b.Fb(2),b.Vc(1==c.Status?"Active":"Inactive")}}var B=function(){return["ClinicName","BlockName"]};function F(e,t){if(1&e){var i=b.Zb();b.Yb(0,"div",1),b.Yb(1,"div",2),b.Yb(2,"div",3),b.Yb(3,"div",4),b.Yb(4,"p-table",5,6),b.ic("onFilter",function(e){b.Lc(i);var t=b.Ic(5);return b.mc().onFilter(e,t)}),b.Sc(6,Y,9,2,"ng-template",7),b.Sc(7,A,3,1,"ng-template",8),b.Sc(8,U,8,1,"ng-template",9),b.Sc(9,R,9,3,"ng-template",10),b.Xb(),b.Xb(),b.Xb(),b.Xb(),b.Xb()}if(2&e){var c=b.mc();b.Fb(4),b.tc("value",c.lstMaster)("rowHover",!0)("globalFilterFields",b.yc(4,B))("scrollable",!0)}}function _(e,t){if(1&e){var i=b.Zb();b.Yb(0,"div",27),b.Yb(1,"app-center-dropdown",35),b.ic("onclinicSelect",function(e){return b.Lc(i),b.mc(2).onclinicSelect(e)}),b.Xb(),b.Xb()}if(2&e){var c=b.mc(2);b.Fb(1),b.tc("ClinicIdSelected",c.objMaster.ClinicId)("mode",c.Mode)}}function L(e,t){if(1&e){var i=b.Zb();b.Yb(0,"button",36),b.ic("click",function(){return b.Lc(i),b.mc(2).Save()}),b.Uc(1,"Submit"),b.Xb()}if(2&e){b.mc();var c=b.Ic(5);b.tc("disabled",!c.form.valid)}}var T=function(){return{width:"100%"}};function N(e,t){if(1&e){var i=b.Zb();b.Yb(0,"div",1),b.Yb(1,"div",23),b.Yb(2,"div",3),b.Yb(3,"div",4),b.Yb(4,"form",null,24),b.Yb(6,"div",25),b.Sc(7,_,2,2,"div",26),b.Yb(8,"div",27),b.Yb(9,"div",28),b.Yb(10,"label"),b.Uc(11,"Block Name"),b.Xb(),b.Yb(12,"span",29),b.Uc(13,"*"),b.Xb(),b.Yb(14,"input",30),b.ic("ngModelChange",function(e){return b.Lc(i),b.mc().objMaster.BlockName=e}),b.Xb(),b.Xb(),b.Xb(),b.Yb(15,"div",27),b.Yb(16,"div",28),b.Yb(17,"label"),b.Uc(18,"Status"),b.Xb(),b.Yb(19,"span",29),b.Uc(20,"*"),b.Xb(),b.Yb(21,"p-dropdown",31),b.ic("ngModelChange",function(e){return b.Lc(i),b.mc().objMaster.Status=e}),b.Xb(),b.Xb(),b.Xb(),b.Xb(),b.Yb(22,"div",32),b.Sc(23,L,2,1,"button",33),b.Yb(24,"button",34),b.ic("click",function(){return b.Lc(i),b.mc().CloseModal()}),b.Uc(25,"Close"),b.Xb(),b.Xb(),b.Xb(),b.Xb(),b.Xb(),b.Xb(),b.Xb()}if(2&e){var c=b.mc();b.Fb(7),b.tc("ngIf",c.UserTypeCurre===c.userTypes.SuperAdmin),b.Fb(7),b.tc("ngModel",c.objMaster.BlockName),b.Fb(7),b.Pc(b.yc(8,T)),b.tc("options",c.stlststatus)("ngModel",c.objMaster.Status)("filter",!0),b.Fb(2),b.tc("ngIf",null==c.lstIAccessStr?null:c.lstIAccessStr.includes(c.ActionList.ReadWrite.toString()))}}var O,P,V,x=[{path:"",component:(O=function(n){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(a,n);var r,o,l,s=c(a);function a(t,i,c,n,r,o){var l;return e(this,a),(l=s.call(this)).cdRef=t,l.router=i,l._ConstantServices=c,l._MasterServices=n,l._RoomServices=r,l._UtilityService=o,l.ClinicSelected=localStorage.getItem("ClinicId"),l.UserTypeCurre=localStorage.getItem("userTypeId"),l.userTypes=u.s,l.filteredValuesLength=0,l.Mode=null,l.objMaster={},l.stlststatus=[],l.ActionList=u.a,l.lstIAccess=[],l.lstIAccessStr=[],l.stlststatus=[{name:"Active",code:1},{name:"Inactive",code:0}],l.getPageLevelAccess(),l}return r=a,(o=[{key:"getPageLevelAccess",value:function(){var e,t,i=this,c=this.router.url,n=JSON.parse(localStorage.getItem("UerRoleAccess"))||[];(null==n?void 0:n.find(function(e){return e.MenuItemURL===c}))&&(this.lstIAccess=null===(e=n.find(function(e){return e.MenuItemURL===c}))||void 0===e?void 0:e.ActionIAccess,(null===(t=this.lstIAccess)||void 0===t?void 0:t.length)>0&&this.lstIAccess.map(function(e){i.lstIAccessStr.push(e.ActionId.toString())}))}},{key:"ngOnInit",value:function(){this._ConstantServices.ActiveMenuName="Block Master",this.GetBlockMaster()}},{key:"onclinicSelect",value:function(e){this.ClinicIdSelected=e,this.objMaster.ClinicId=e}},{key:"GetBlockMaster",value:function(){var e=this,t="";this.UserTypeCurre!==u.s.SuperAdmin&&(t=this.ClinicSelected),this._UtilityService.showSpinner(),this.unsubscribe.add=this._RoomServices.GetBlockMasterList(t,!1).subscribe(function(t){var i;if(e._UtilityService.hideSpinner(),e.cdRef.detectChanges(),1==t.actionResult.success){var c=JSON.parse(t.actionResult.result);e.lstMaster=c=c||[],void 0!==e.filtr&&(e.filtr.nativeElement.value="",e.dataTable.reset(),e.filteredValuesLength=null===(i=e.lstMaster)||void 0===i?void 0:i.length),e.cdRef.detectChanges()}else e.lstMaster=[]})}},{key:"GetBlockMasterDetailsById",value:function(e){var t=this;this._UtilityService.showSpinner(),this.Mode="Edit",this.unsubscribe.add=this._RoomServices.GetBlockMasterDetailsById(e).subscribe(function(e){if(t._UtilityService.hideSpinner(),1==e.actionResult.success){var i=JSON.parse(e.actionResult.result);t.objMaster=i=i||[],t.cdRef.detectChanges()}else t.objMaster={},t.objMaster.Status=1},function(e){t._UtilityService.hideSpinner(),t._UtilityService.showErrorAlert(e.message)})}},{key:"AddNewBlock",value:function(){this.ResetModel(),this.Mode="Add",this.cdRef.detectChanges(),this.myForm.resetForm()}},{key:"ResetModel",value:function(){this.objMaster={},this.objMaster.Status=1}},{key:"Save",value:function(){var e=this;this.UserTypeCurre!==u.s.SuperAdmin&&(this.objMaster.ClinicId=this.ClinicSelected),this.objMaster.CreatedBy=localStorage.getItem("userId"),this.objMaster.ModifiedBy=localStorage.getItem("userId"),null!=this.objMaster.ClinicId&&null!=this.objMaster.ClinicId&&""!=this.objMaster.ClinicId?(this._UtilityService.showSpinner(),this.unsubscribe.add=this._RoomServices.AddUpdateBlockMaster(this.objMaster).subscribe(function(t){e._UtilityService.hideSpinner(),e.cdRef.detectChanges(),1==t.actionResult.success?(e._UtilityService.showSuccessAlert(t.actionResult.errMsg),e.GetBlockMaster(),e.Mode=null):e._UtilityService.showWarningAlert(t.actionResult.errMsg)},function(t){e._UtilityService.hideSpinner(),e._UtilityService.showErrorAlert(t.message)})):this._UtilityService.showWarningAlert("Please select center")}},{key:"CloseModal",value:function(){this.Mode=null}},{key:"onFilter",value:function(e,t){this.filteredValuesLength=e.filteredValue.length}}])&&t(r.prototype,o),l&&t(r,l),a}(a.a),O.\u0275fac=function(e){return new(e||O)(b.Sb(b.h),b.Sb(s.i),b.Sb(u.f),b.Sb(d.a),b.Sb(f.a),b.Sb(p.a))},O.\u0275cmp=b.Mb({type:O,selectors:[["app-block-master"]],viewQuery:function(e,t){var i;1&e&&(b.cd(I,1),b.cd(w,1),b.cd(X,1)),2&e&&(b.Hc(i=b.jc())&&(t.myForm=i.first),b.Hc(i=b.jc())&&(t.dataTable=i.first),b.Hc(i=b.jc())&&(t.filtr=i.first))},features:[b.Cb],decls:2,vars:2,consts:[["class","row mt25",4,"ngIf"],[1,"row","mt25"],[1,"col-md-12"],[1,"card"],[1,"card-body"],["responsiveLayout","scroll","styleClass","p-datatable-striped","scrollHeight","calc(100vh - 165px)",3,"value","rowHover","globalFilterFields","scrollable","onFilter"],["dt",""],["pTemplate","caption"],["pTemplate","emptymessage"],["pTemplate","header"],["pTemplate","body"],[1,"p-d-flex"],["pButton","","title","New","label","Add New","class","p-button-outlined","icon","pi pi-plus",3,"click",4,"ngIf"],[1,"p-ml-left","pt-3","pl-2"],[1,"p-ml-auto"],[1,"p-input-icon-left"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search...",3,"input"],["filtr",""],["pButton","","title","New","label","Add New","icon","pi pi-plus",1,"p-button-outlined",3,"click"],[4,"ngIf"],["matTooltip","View/Edit",3,"click"],["src","./assets/custom-icons/view.svg",1,"custom-ico","mr4",2,"width","24px !important"],[1,"col"],["myForm","ngForm"],[1,"row"],["class","col-md-4",4,"ngIf"],[1,"col-md-4"],[1,"form-group"],[1,"required"],["type","text","required","","name","txtBlockName",1,"form-control",3,"ngModel","ngModelChange"],["required","true","name","ddlStatus","optionLabel","name","optionValue","code","placeholder","-Select-",3,"options","ngModel","filter","ngModelChange"],[1,"row","justify-content-center"],["type","button","class","btn btn-new-primary mr-2",3,"disabled","click",4,"ngIf"],[1,"btn","btn-new-secondary",3,"click"],[3,"ClinicIdSelected","mode","onclinicSelect"],["type","button",1,"btn","btn-new-primary","mr-2",3,"disabled","click"]],template:function(e,t){1&e&&(b.Sc(0,F,10,5,"div",0),b.Sc(1,N,26,9,"div",0)),2&e&&(b.tc("ngIf",null==t.Mode),b.Fb(1),b.tc("ngIf",null!=t.Mode))},directives:[l.p,v.c,m.i,h.a,S.b,y.z,y.p,y.q,y.b,y.w,y.o,y.r,g.a,M.a],styles:[""]}),O)}],E=((P=function t(){e(this,t)}).\u0275fac=function(e){return new(e||P)},P.\u0275mod=b.Qb({type:P}),P.\u0275inj=b.Pb({imports:[[s.l.forChild(x)],s.l]}),P),G=o("Q4Mo"),H=o("T2Aj"),Z=((V=function t(){e(this,t)}).\u0275fac=function(e){return new(e||V)},V.\u0275mod=b.Qb({type:V}),V.\u0275inj=b.Pb({imports:[[l.c,E,y.i,y.v,v.f,S.c,G.b,g.b,h.b,H.a]]}),V)}}])}();