(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{"8Oib":function(t,e,i){"use strict";i.r(e),i.d(e,"EmergencyContactMasterModule",function(){return V});var c=i("ofXK"),s=i("tyNb"),n=i("Nach"),r=i("CwUn"),l=i("fXoL"),o=i("dcBc"),a=i("NLkC"),b=i("rEr+"),d=i("7zfz"),u=i("7kUa"),h=i("jIHw"),p=i("3Pt+"),m=i("arFO"),f=i("AAHA");const g=["myForm"],S=["dt"],v=["filtr"];function y(t,e){if(1&t){const t=l.Zb();l.Yb(0,"button",20),l.ic("click",function(){return l.Lc(t),l.mc(3).AddNewEmergencyContact()}),l.Xb()}}function M(t,e){if(1&t){const t=l.Zb();l.Yb(0,"div",12),l.Sc(1,y,1,0,"button",13),l.Yb(2,"span",14),l.Uc(3),l.Xb(),l.Yb(4,"span",15),l.Yb(5,"span",16),l.Tb(6,"i",17),l.Yb(7,"input",18,19),l.ic("input",function(e){return l.Lc(t),l.mc(),l.Ic(5).filterGlobal(e.target.value,"contains")}),l.Xb(),l.Xb(),l.Xb(),l.Xb()}if(2&t){const t=l.mc(2);l.Fb(1),l.tc("ngIf",null==t.lstIAccessStr?null:t.lstIAccessStr.includes(t.ActionList.ReadWrite.toString())),l.Fb(2),l.Wc(" ",(null==t.lstMaster?null:t.lstMaster.length)>0?"Total Records: "+t.filteredValuesLength:""," ")}}function C(t,e){if(1&t&&(l.Yb(0,"tr"),l.Yb(1,"td"),l.Uc(2," No records found "),l.Xb(),l.Xb()),2&t){const t=e.$implicit;l.Fb(1),l.Gb("colspan",null==t?null:t.length)}}function X(t,e){1&t&&l.Tb(0,"col",24)}function Y(t,e){if(1&t&&(l.Yb(0,"colgroup"),l.Sc(1,X,1,0,"col",21),l.Tb(2,"col",22),l.Tb(3,"col",23),l.Tb(4,"col",24),l.Tb(5,"col",23),l.Tb(6,"col",23),l.Xb()),2&t){const t=l.mc(2);l.Fb(1),l.tc("ngIf",t.UserTypeCurre===t.userTypes.SuperAdmin)}}function I(t,e){1&t&&(l.Yb(0,"th"),l.Uc(1,"Center"),l.Xb())}function U(t,e){if(1&t&&(l.Yb(0,"tr"),l.Sc(1,I,2,0,"th",25),l.Yb(2,"th"),l.Uc(3,"Contact Details"),l.Xb(),l.Yb(4,"th"),l.Uc(5,"Type"),l.Xb(),l.Yb(6,"th"),l.Uc(7,"Order Number"),l.Xb(),l.Yb(8,"th"),l.Uc(9,"Status"),l.Xb(),l.Yb(10,"th"),l.Uc(11,"Action"),l.Xb(),l.Xb()),2&t){const t=l.mc(2);l.Fb(1),l.tc("ngIf",t.UserTypeCurre===t.userTypes.SuperAdmin)}}function w(t,e){if(1&t&&(l.Yb(0,"td"),l.Uc(1),l.Xb()),2&t){const t=l.mc().$implicit;l.Fb(1),l.Wc("",t.ClinicName," ")}}function A(t,e){if(1&t){const t=l.Zb();l.Yb(0,"tr"),l.Sc(1,w,2,1,"td",25),l.Yb(2,"td"),l.Uc(3),l.Xb(),l.Yb(4,"td"),l.Uc(5),l.Xb(),l.Yb(6,"td"),l.Uc(7),l.Xb(),l.Yb(8,"td"),l.Uc(9),l.Xb(),l.Yb(10,"td"),l.Yb(11,"a",26),l.ic("click",function(){l.Lc(t);const i=e.$implicit;return l.mc(2).LoadEmergencyContactMasterById(i.EmergencyContactMasterId)}),l.Tb(12,"img",27),l.Xb(),l.Xb(),l.Xb()}if(2&t){const t=e.$implicit,i=l.mc(2);l.Fb(1),l.tc("ngIf",i.UserTypeCurre===i.userTypes.SuperAdmin),l.Fb(2),l.Vc(t.ContactDetails),l.Fb(2),l.Vc(t.Type),l.Fb(2),l.Vc(t.OrderNo),l.Fb(2),l.Vc(1==t.Status?"Active":"Inactive")}}const T=function(){return["ClinicName","ContactDetails","OrderNo","Status"]};function L(t,e){if(1&t){const t=l.Zb();l.Yb(0,"div",1),l.Yb(1,"div",2),l.Yb(2,"div",3),l.Yb(3,"div",4),l.Yb(4,"p-table",5,6),l.ic("onFilter",function(e){l.Lc(t);const i=l.Ic(5);return l.mc().onFilter(e,i)}),l.Sc(6,M,9,2,"ng-template",7),l.Sc(7,C,3,1,"ng-template",8),l.Sc(8,Y,7,1,"ng-template",9),l.Sc(9,U,12,1,"ng-template",10),l.Sc(10,A,13,5,"ng-template",11),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Xb()}if(2&t){const t=l.mc();l.Fb(4),l.tc("value",t.lstMaster)("rowHover",!0)("globalFilterFields",l.yc(4,T))("scrollable",!0)}}function F(t,e){if(1&t){const t=l.Zb();l.Yb(0,"div",36),l.Yb(1,"app-center-dropdown",43),l.ic("onclinicSelect",function(e){return l.Lc(t),l.mc(2).onclinicSelect(e)}),l.Xb(),l.Xb()}if(2&t){const t=l.mc(2);l.Fb(1),l.tc("ClinicIdSelected",t.objMaster.ClinicId)("mode",t.Mode)}}function j(t,e){if(1&t){const t=l.Zb();l.Yb(0,"button",44),l.ic("click",function(){return l.Lc(t),l.mc(2).Save()}),l.Uc(1,"Submit"),l.Xb()}if(2&t){l.mc();const t=l.Ic(5);l.tc("disabled",!t.form.valid)}}const N=function(){return{width:"100%"}};function R(t,e){if(1&t){const t=l.Zb();l.Yb(0,"div",1),l.Yb(1,"div",28),l.Yb(2,"div",3),l.Yb(3,"div",4),l.Yb(4,"form",null,29),l.Yb(6,"div",30),l.Sc(7,F,2,2,"div",31),l.Yb(8,"div",32),l.Yb(9,"div",33),l.Yb(10,"label"),l.Uc(11,"Contact Detail"),l.Xb(),l.Yb(12,"span",34),l.Uc(13,"*"),l.Xb(),l.Yb(14,"input",35),l.ic("ngModelChange",function(e){return l.Lc(t),l.mc().objMaster.ContactDetails=e}),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Yb(15,"div",30),l.Yb(16,"div",36),l.Yb(17,"div",33),l.Yb(18,"label"),l.Uc(19,"Type"),l.Xb(),l.Yb(20,"p-dropdown",37),l.ic("ngModelChange",function(e){return l.Lc(t),l.mc().objMaster.Type=e}),l.Xb(),l.Xb(),l.Xb(),l.Yb(21,"div",36),l.Yb(22,"div",33),l.Yb(23,"label"),l.Uc(24,"Order Number"),l.Xb(),l.Yb(25,"span",34),l.Uc(26,"*"),l.Xb(),l.Yb(27,"input",38),l.ic("ngModelChange",function(e){return l.Lc(t),l.mc().objMaster.OrderNo=e}),l.Xb(),l.Xb(),l.Xb(),l.Yb(28,"div",36),l.Yb(29,"div",33),l.Yb(30,"label"),l.Uc(31,"Status"),l.Xb(),l.Yb(32,"span",34),l.Uc(33,"*"),l.Xb(),l.Yb(34,"p-dropdown",39),l.ic("ngModelChange",function(e){return l.Lc(t),l.mc().objMaster.Status=e}),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Yb(35,"div",40),l.Sc(36,j,2,1,"button",41),l.Yb(37,"button",42),l.ic("click",function(){return l.Lc(t),l.mc().CloseModal()}),l.Uc(38,"Close"),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Xb()}if(2&t){const t=l.mc();l.Fb(7),l.tc("ngIf",t.UserTypeCurre===t.userTypes.SuperAdmin),l.Fb(7),l.tc("ngModel",t.objMaster.ContactDetails),l.Fb(6),l.Pc(l.yc(14,N)),l.tc("options",t.stlstType)("ngModel",t.objMaster.Type)("filter",!0),l.Fb(7),l.tc("ngModel",t.objMaster.OrderNo),l.Fb(7),l.Pc(l.yc(15,N)),l.tc("options",t.stlststatus)("ngModel",t.objMaster.Status)("filter",!0),l.Fb(2),l.tc("ngIf",null==t.lstIAccessStr?null:t.lstIAccessStr.includes(t.ActionList.ReadWrite.toString()))}}const _=[{path:"",component:(()=>{class t extends r.a{constructor(t,e,i,c,s){super(),this.cdRef=t,this.router=e,this._MasterServices=i,this._ConstantServices=c,this._UtilityService=s,this.filteredValuesLength=0,this.Mode=null,this.lstMaster=[],this.objMaster={},this.ClinicIdSelected=localStorage.getItem("ClinicId"),this.UserTypeCurre=localStorage.getItem("userTypeId"),this.userTypes=n.s,this.stlststatus=[],this.stlstType=[],this.ActionList=n.a,this.lstIAccess=[],this.lstIAccessStr=[],this.stlststatus=[{name:"Active",code:1},{name:"Inactive",code:0}],this.stlstType=[{name:"OPD",code:"OPD"}],this.getPageLevelAccess()}getPageLevelAccess(){var t,e,i=this.router.url,c=JSON.parse(localStorage.getItem("UerRoleAccess"))||[];(null==c?void 0:c.find(t=>t.MenuItemURL===i))&&(this.lstIAccess=null===(t=c.find(t=>t.MenuItemURL===i))||void 0===t?void 0:t.ActionIAccess,(null===(e=this.lstIAccess)||void 0===e?void 0:e.length)>0&&this.lstIAccess.map(t=>{this.lstIAccessStr.push(t.ActionId.toString())}))}ngOnInit(){this._ConstantServices.ActiveMenuName="Emergency Contact Master",this.LoadEmergencyContactList()}onclinicSelect(t){this.ClinicIdSelected=t,this.objMaster.ClinicId=t}LoadEmergencyContactList(){var t="";this.UserTypeCurre!==n.s.SuperAdmin&&(t=this.ClinicIdSelected),this._UtilityService.showSpinner(),this.unsubscribe.add=this._MasterServices.GetEmergencyContactMaster(t,!1).subscribe(t=>{var e;if(this._UtilityService.hideSpinner(),this.cdRef.detectChanges(),1==t.actionResult.success){var i=JSON.parse(t.actionResult.result);this.lstMaster=i=i||[],void 0!==this.filtr&&(this.filtr.nativeElement.value="",this.dataTable.reset(),this.filteredValuesLength=null===(e=this.lstMaster)||void 0===e?void 0:e.length),this.cdRef.detectChanges()}else this.lstMaster=[]},t=>{this._UtilityService.hideSpinner(),this._UtilityService.showErrorAlert(t.message)})}LoadEmergencyContactMasterById(t){this._UtilityService.showSpinner(),this.Mode="Edit",this.unsubscribe.add=this._MasterServices.GetEmergencyContactMasterById(t).subscribe(t=>{if(this._UtilityService.hideSpinner(),this.cdRef.detectChanges(),1==t.actionResult.success){var e=JSON.parse(t.actionResult.result);this.objMaster=e=e||[],this.cdRef.detectChanges()}},t=>{this._UtilityService.hideSpinner(),this._UtilityService.showErrorAlert(t.message)})}Save(){this.UserTypeCurre!==n.s.SuperAdmin&&(this.objMaster.ClinicId=this.ClinicIdSelected),null!=this.objMaster.ClinicId&&null!=this.objMaster.ClinicId&&""!=this.objMaster.ClinicId?(this._UtilityService.showSpinner(),this.unsubscribe.add=this._MasterServices.AddUpdateEmergencyContactMaster(this.objMaster).subscribe(t=>{this._UtilityService.hideSpinner(),this.cdRef.detectChanges(),1==t.actionResult.success?(this._UtilityService.showSuccessAlert(t.actionResult.errMsg),this.LoadEmergencyContactList(),this.Mode=null):this._UtilityService.showWarningAlert(t.actionResult.errMsg)},t=>{this._UtilityService.hideSpinner(),this._UtilityService.showErrorAlert(t.message)})):this._UtilityService.showWarningAlert("Please select center")}AddNewEmergencyContact(){this.ResetModel(),this.Mode="Add",this.cdRef.detectChanges(),this.myForm.resetForm()}ResetModel(){this.objMaster={},this.objMaster.Status=1}CloseModal(){this.Mode=null}onFilter(t,e){this.filteredValuesLength=t.filteredValue.length}}return t.\u0275fac=function(e){return new(e||t)(l.Sb(l.h),l.Sb(s.i),l.Sb(o.a),l.Sb(n.f),l.Sb(a.a))},t.\u0275cmp=l.Mb({type:t,selectors:[["app-emergency-contact-master"]],viewQuery:function(t,e){if(1&t&&(l.cd(g,1),l.cd(S,1),l.cd(v,1)),2&t){let t;l.Hc(t=l.jc())&&(e.myForm=t.first),l.Hc(t=l.jc())&&(e.dataTable=t.first),l.Hc(t=l.jc())&&(e.filtr=t.first)}},features:[l.Cb],decls:2,vars:2,consts:[["class","row mt25",4,"ngIf"],[1,"row","mt25"],[1,"col-md-12"],[1,"card"],[1,"card-body"],["responsiveLayout","scroll","styleClass","p-datatable-striped","scrollHeight","calc(100vh - 165px)",3,"value","rowHover","globalFilterFields","scrollable","onFilter"],["dt",""],["pTemplate","caption"],["pTemplate","emptymessage"],["pTemplate","colgroup"],["pTemplate","header"],["pTemplate","body"],[1,"p-d-flex"],["pButton","","title","New","label","Add New","class","p-button-outlined","icon","pi pi-plus",3,"click",4,"ngIf"],[1,"pl-1","pt-3","mr-2","p-ml-left"],[1,"p-ml-auto"],[1,"p-input-icon-left"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search...",3,"input"],["filtr",""],["pButton","","title","New","label","Add New","icon","pi pi-plus",1,"p-button-outlined",3,"click"],["style","width:120px",4,"ngIf"],[2,"width","480px"],[2,"width","80px"],[2,"width","120px"],[4,"ngIf"],["ngbTooltip","View/Edit",3,"click"],["src","./assets/custom-icons/view.svg",1,"custom-ico","mr4",2,"width","24px !important"],[1,"col"],["myForm","ngForm"],[1,"row"],["class","col-md-3",4,"ngIf"],[1,"col-md-9"],[1,"form-group"],[1,"required"],["type","text","required","","name","ContactDetails",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-md-3"],["name","ddlType","optionLabel","name","optionValue","code","placeholder","-Select-",3,"options","ngModel","filter","ngModelChange"],["oninput","if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);","type","number","required","","name","OrderNo","maxlength","3",1,"form-control",3,"ngModel","ngModelChange"],["required","true","name","ddlStatus","optionLabel","name","optionValue","code","placeholder","-Select-",3,"options","ngModel","filter","ngModelChange"],[1,"row","justify-content-center"],["type","button","class","btn btn-new-primary mr-2",3,"disabled","click",4,"ngIf"],[1,"btn","btn-new-secondary",3,"click"],[3,"ClinicIdSelected","mode","onclinicSelect"],["type","button",1,"btn","btn-new-primary","mr-2",3,"disabled","click"]],template:function(t,e){1&t&&(l.Sc(0,L,11,5,"div",0),l.Sc(1,R,39,16,"div",0)),2&t&&(l.tc("ngIf",null==e.Mode),l.Fb(1),l.tc("ngIf",null!=e.Mode))},directives:[c.p,b.c,d.i,u.a,h.b,p.z,p.p,p.q,p.b,p.w,p.o,p.r,m.a,p.t,p.j,f.a],styles:[""]}),t})()}];let E=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.Qb({type:t}),t.\u0275inj=l.Pb({imports:[[s.l.forChild(_)],s.l]}),t})();var O=i("Q4Mo"),k=i("Ks7X"),x=i("T2Aj");let V=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.Qb({type:t}),t.\u0275inj=l.Pb({imports:[[c.c,E,p.i,p.v,b.f,h.c,O.b,m.b,u.b,k.b,x.a]]}),t})()}}]);