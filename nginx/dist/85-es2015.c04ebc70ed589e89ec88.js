(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{"7AOd":function(e,t,i){"use strict";i.r(t),i.d(t,"EmailReceiverListModule",function(){return V});var s=i("ofXK"),c=i("tyNb"),n=i("Nach"),r=i("CwUn"),l=i("fXoL"),o=i("dcBc"),a=i("NLkC"),d=i("rEr+"),b=i("7zfz"),u=i("7kUa"),h=i("jIHw"),p=i("3Pt+"),m=i("AAHA");const f=["myForm"],g=["dt"],v=["filtr"];function S(e,t){if(1&e){const e=l.Zb();l.Yb(0,"button",20),l.ic("click",function(){return l.Lc(e),l.mc(3).AddNew()}),l.Xb()}}function U(e,t){if(1&e){const e=l.Zb();l.Yb(0,"div",12),l.Sc(1,S,1,0,"button",13),l.Yb(2,"span",14),l.Uc(3),l.Xb(),l.Yb(4,"span",15),l.Yb(5,"span",16),l.Tb(6,"i",17),l.Yb(7,"input",18,19),l.ic("input",function(t){return l.Lc(e),l.mc(),l.Ic(5).filterGlobal(t.target.value,"contains")}),l.Xb(),l.Xb(),l.Xb(),l.Xb()}if(2&e){const e=l.mc(2);l.Fb(1),l.tc("ngIf",null==e.lstIAccessStr?null:e.lstIAccessStr.includes(e.ActionList.ReadWrite.toString())),l.Fb(2),l.Wc(" ",(null==e.lstMaster?null:e.lstMaster.length)>0?"Total Records: "+e.filteredValuesLength:""," ")}}function y(e,t){if(1&e&&(l.Yb(0,"tr"),l.Yb(1,"td"),l.Uc(2," No records found "),l.Xb(),l.Xb()),2&e){const e=t.$implicit;l.Fb(1),l.Gb("colspan",null==e?null:e.length)}}function C(e,t){1&e&&l.Tb(0,"col",25)}function T(e,t){if(1&e&&(l.Yb(0,"colgroup"),l.Sc(1,C,1,0,"col",21),l.Tb(2,"col",22),l.Tb(3,"col",23),l.Tb(4,"col",23),l.Tb(5,"col",24),l.Xb()),2&e){const e=l.mc(2);l.Fb(1),l.tc("ngIf",e.UserTypeCurre===e.userTypes.SuperAdmin)}}function X(e,t){1&e&&(l.Yb(0,"th"),l.Uc(1,"Center"),l.Xb())}function Y(e,t){if(1&e&&(l.Yb(0,"tr"),l.Sc(1,X,2,0,"th",26),l.Yb(2,"th"),l.Uc(3,"Type"),l.Xb(),l.Yb(4,"th"),l.Uc(5,"To User"),l.Xb(),l.Yb(6,"th"),l.Uc(7,"CC User"),l.Xb(),l.Yb(8,"th"),l.Uc(9,"Status"),l.Xb(),l.Yb(10,"th"),l.Uc(11,"Action"),l.Xb(),l.Xb()),2&e){const e=l.mc(2);l.Fb(1),l.tc("ngIf",e.UserTypeCurre===e.userTypes.SuperAdmin)}}function I(e,t){if(1&e&&(l.Yb(0,"td"),l.Uc(1),l.Xb()),2&e){const e=l.mc().$implicit;l.Fb(1),l.Wc("",e.ClinicName," ")}}function M(e,t){if(1&e){const e=l.Zb();l.Yb(0,"tr"),l.Sc(1,I,2,1,"td",26),l.Yb(2,"td"),l.Uc(3),l.Xb(),l.Yb(4,"td"),l.Uc(5),l.Xb(),l.Yb(6,"td"),l.Uc(7),l.Xb(),l.Yb(8,"td"),l.Uc(9),l.Xb(),l.Yb(10,"td"),l.Yb(11,"a",27),l.ic("click",function(){l.Lc(e);const i=t.$implicit;return l.mc(2).LoadMasterById(i.ClinicId,i.DraftingType)}),l.Tb(12,"img",28),l.Xb(),l.Xb(),l.Xb()}if(2&e){const e=t.$implicit,i=l.mc(2);l.Fb(1),l.tc("ngIf",i.UserTypeCurre===i.userTypes.SuperAdmin),l.Fb(2),l.Vc(e.DraftingType),l.Fb(2),l.Vc(e.ToUser),l.Fb(2),l.Vc(e.CCUser),l.Fb(2),l.Vc(1==e.Status?"Active":"Inactive")}}const w=function(){return["ClinicName","DraftingType","ToUser","CCUser","Status"]};function A(e,t){if(1&e){const e=l.Zb();l.Yb(0,"div",1),l.Yb(1,"div",2),l.Yb(2,"div",3),l.Yb(3,"div",4),l.Yb(4,"p-table",5,6),l.ic("onFilter",function(t){l.Lc(e);const i=l.Ic(5);return l.mc().onFilter(t,i)}),l.Sc(6,U,9,2,"ng-template",7),l.Sc(7,y,3,1,"ng-template",8),l.Sc(8,T,6,1,"ng-template",9),l.Sc(9,Y,12,1,"ng-template",10),l.Sc(10,M,13,5,"ng-template",11),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Xb()}if(2&e){const e=l.mc();l.Fb(4),l.tc("value",e.lstMaster)("rowHover",!0)("globalFilterFields",l.yc(4,w))("scrollable",!0)}}function F(e,t){if(1&e){const e=l.Zb();l.Yb(0,"div",33),l.Yb(1,"app-center-dropdown",46),l.ic("onclinicSelect",function(t){return l.Lc(e),l.mc(2).onclinicSelect(t)}),l.Xb(),l.Xb()}if(2&e){const e=l.mc(2);l.Fb(1),l.tc("ClinicIdSelected",e.master.ClinicId)("mode",e.Mode)}}function L(e,t){if(1&e&&(l.Yb(0,"option",47),l.Uc(1),l.Xb()),2&e){const e=t.$implicit;l.uc("value",e.DraftingType),l.Fb(1),l.Wc(" ",e.DraftingType,"")}}function R(e,t){if(1&e){const e=l.Zb();l.Yb(0,"button",48),l.ic("click",function(){return l.Lc(e),l.mc(2).Save()}),l.Uc(1,"Submit"),l.Xb()}if(2&e){l.mc();const e=l.Ic(5);l.tc("disabled",!e.form.valid)}}function _(e,t){if(1&e){const e=l.Zb();l.Yb(0,"div",1),l.Yb(1,"div",29),l.Yb(2,"div",3),l.Yb(3,"div",4),l.Yb(4,"form",null,30),l.Yb(6,"div",31),l.Sc(7,F,2,2,"div",32),l.Yb(8,"div",33),l.Yb(9,"div",34),l.Yb(10,"label"),l.Uc(11,"Type"),l.Xb(),l.Yb(12,"span",35),l.Uc(13,"*"),l.Xb(),l.Yb(14,"select",36),l.ic("ngModelChange",function(t){return l.Lc(e),l.mc().master.DraftingType=t}),l.Sc(15,L,2,2,"option",37),l.Xb(),l.Xb(),l.Xb(),l.Yb(16,"div",33),l.Yb(17,"div",34),l.Yb(18,"label"),l.Uc(19,"To User"),l.Xb(),l.Yb(20,"input",38),l.ic("ngModelChange",function(t){return l.Lc(e),l.mc().master.ToUser=t}),l.Xb(),l.Xb(),l.Xb(),l.Yb(21,"div",33),l.Yb(22,"div",34),l.Yb(23,"label"),l.Uc(24,"CC User"),l.Xb(),l.Yb(25,"input",39),l.ic("ngModelChange",function(t){return l.Lc(e),l.mc().master.CCUser=t}),l.Xb(),l.Xb(),l.Xb(),l.Yb(26,"div",33),l.Yb(27,"div",34),l.Yb(28,"label"),l.Uc(29,"Status"),l.Xb(),l.Yb(30,"span",35),l.Uc(31,"*"),l.Xb(),l.Yb(32,"select",40),l.ic("ngModelChange",function(t){return l.Lc(e),l.mc().master.Status=t}),l.Yb(33,"option",41),l.Uc(34,"Active"),l.Xb(),l.Yb(35,"option",42),l.Uc(36,"Inactive"),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Yb(37,"div",43),l.Sc(38,R,2,1,"button",44),l.Yb(39,"button",45),l.ic("click",function(){return l.Lc(e),l.mc().CloseModal()}),l.Uc(40,"Close"),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Xb()}if(2&e){const e=l.mc();l.Fb(7),l.tc("ngIf",e.UserTypeCurre===e.userTypes.SuperAdmin),l.Fb(7),l.tc("ngModel",e.master.DraftingType)("disabled","Edit"==e.Mode),l.Fb(1),l.tc("ngForOf",e.lstDraftingType),l.Fb(5),l.tc("ngModel",e.master.ToUser),l.Fb(5),l.tc("ngModel",e.master.CCUser),l.Fb(7),l.tc("ngModel",e.master.Status),l.Fb(6),l.tc("ngIf",null==e.lstIAccessStr?null:e.lstIAccessStr.includes(e.ActionList.ReadWrite.toString()))}}const E=[{path:"",component:(()=>{class e extends r.a{constructor(e,t,i,s,c){super(),this.cdRef=e,this.router=t,this._MasterServices=i,this._ConstantServices=s,this._UtilityService=c,this.filteredValuesLength=0,this.Mode=null,this.ClinicIdSelected=localStorage.getItem("ClinicId"),this.UserTypeCurre=localStorage.getItem("userTypeId"),this.userTypes=n.s,this.lstDraftingType=[],this.lstMaster=[],this.master={},this.ActionList=n.a,this.lstIAccess=[],this.lstIAccessStr=[],this.getPageLevelAccess()}getPageLevelAccess(){var e,t,i=this.router.url,s=JSON.parse(localStorage.getItem("UerRoleAccess"))||[];(null==s?void 0:s.find(e=>e.MenuItemURL===i))&&(this.lstIAccess=null===(e=s.find(e=>e.MenuItemURL===i))||void 0===e?void 0:e.ActionIAccess,(null===(t=this.lstIAccess)||void 0===t?void 0:t.length)>0&&this.lstIAccess.map(e=>{this.lstIAccessStr.push(e.ActionId.toString())}))}ngOnInit(){this._ConstantServices.ActiveMenuName="Email Receiver List",this.LoadEmailReceiverList(),this.LoadEmailDraftingTypeMaster()}onclinicSelect(e){this.ClinicIdSelected=e,this.master.ClinicId=e}LoadEmailDraftingTypeMaster(){this._UtilityService.showSpinner(),this.unsubscribe.add=this._MasterServices.GetEmailDraftingTypeMaster().subscribe(e=>{if(this._UtilityService.hideSpinner(),this.cdRef.detectChanges(),1==e.actionResult.success){var t=JSON.parse(e.actionResult.result);this.lstDraftingType=t=t||[],this.cdRef.detectChanges()}else this.lstDraftingType=[]},e=>{this._UtilityService.hideSpinner(),this._UtilityService.showErrorAlert(e.message)})}LoadEmailReceiverList(){var e="";this.UserTypeCurre!==n.s.SuperAdmin&&(e=this.ClinicIdSelected),this._UtilityService.showSpinner(),this.unsubscribe.add=this._MasterServices.GetCommonEmailReceiverList(e,!1).subscribe(e=>{var t;if(this._UtilityService.hideSpinner(),this.cdRef.detectChanges(),1==e.actionResult.success){var i=JSON.parse(e.actionResult.result);this.lstMaster=i=i||[],void 0!==this.filtr&&(this.filtr.nativeElement.value="",this.dataTable.reset(),this.filteredValuesLength=null===(t=this.lstMaster)||void 0===t?void 0:t.length),this.cdRef.detectChanges()}else this.lstMaster=[]},e=>{this._UtilityService.hideSpinner(),this._UtilityService.showErrorAlert(e.message)})}LoadMasterById(e,t){this._UtilityService.showSpinner(),this.Mode="Edit",this.unsubscribe.add=this._MasterServices.GetCommonEmailReceiverListByIdandType(e,t,!1).subscribe(e=>{if(this._UtilityService.hideSpinner(),this.cdRef.detectChanges(),1==e.actionResult.success){var t=JSON.parse(e.actionResult.result);this.master=t=t||[],this.cdRef.detectChanges()}},e=>{this._UtilityService.hideSpinner(),this._UtilityService.showErrorAlert(e.message)})}Save(){if(this.UserTypeCurre!==n.s.SuperAdmin&&(this.master.ClinicId=this.ClinicIdSelected),null!=this.master.ClinicId&&null!=this.master.ClinicId&&""!=this.master.ClinicId)if(null!=this.master.ToUser&&null!=this.master.ToUser&&""!=this.master.ToUser||null!=this.master.CCUser&&null!=this.master.CCUser&&""!=this.master.CCUser){var e=!0;if(null!=this.master.ToUser&&null!=this.master.ToUser&&""!=this.master.ToUser){var t=this.master.ToUser.split(";");if(console.log(t),(null==t?void 0:t.length)>0&&t.forEach(t=>{this.validateEmail(t)||(e=!1)}),!e)return void this._UtilityService.showWarningAlert("Please enter valid To User")}if(null!=this.master.CCUser&&null!=this.master.CCUser&&""!=this.master.CCUser&&((null==(t=this.master.ToUser.split(","))?void 0:t.length)>0&&t.forEach(t=>{this.validateEmail(t)||(e=!1)}),!e))return void this._UtilityService.showWarningAlert("Please enter valid CC User");this._UtilityService.showSpinner(),this.unsubscribe.add=this._MasterServices.AddUpdateEmailReceiverList(this.master).subscribe(e=>{this._UtilityService.hideSpinner(),this.cdRef.detectChanges(),1==e.actionResult.success?(this._UtilityService.showSuccessAlert(e.actionResult.errMsg),this.LoadEmailReceiverList(),this.Mode=null):this._UtilityService.showWarningAlert(e.actionResult.errMsg)},e=>{this._UtilityService.hideSpinner(),this._UtilityService.showErrorAlert(e.message)})}else this._UtilityService.showWarningAlert("Please enter To or CC User");else this._UtilityService.showWarningAlert("Please select center")}AddNew(){this.ResetModel(),this.Mode="Add",this.cdRef.detectChanges(),this.myForm.resetForm()}ResetModel(){this.master={},this.master.Status=1}CloseModal(){this.Mode=null}onFilter(e,t){this.filteredValuesLength=e.filteredValue.length}}return e.\u0275fac=function(t){return new(t||e)(l.Sb(l.h),l.Sb(c.i),l.Sb(o.a),l.Sb(n.f),l.Sb(a.a))},e.\u0275cmp=l.Mb({type:e,selectors:[["app-email-receiver-list"]],viewQuery:function(e,t){if(1&e&&(l.cd(f,1),l.cd(g,1),l.cd(v,1)),2&e){let e;l.Hc(e=l.jc())&&(t.myForm=e.first),l.Hc(e=l.jc())&&(t.dataTable=e.first),l.Hc(e=l.jc())&&(t.filtr=e.first)}},features:[l.Cb],decls:2,vars:2,consts:[["class","row mt25",4,"ngIf"],[1,"row","mt25"],[1,"col-md-12"],[1,"card"],[1,"card-body"],["responsiveLayout","scroll","styleClass","p-datatable-striped","scrollHeight","calc(100vh - 165px)",3,"value","rowHover","globalFilterFields","scrollable","onFilter"],["dt",""],["pTemplate","caption"],["pTemplate","emptymessage"],["pTemplate","colgroup"],["pTemplate","header"],["pTemplate","body"],[1,"p-d-flex"],["pButton","","title","New","label","Add New","class","p-button-outlined","icon","pi pi-plus",3,"click",4,"ngIf"],[1,"pl-1","pt-3","mr-2","p-ml-left"],[1,"p-ml-auto"],[1,"p-input-icon-left"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search...",3,"input"],["filtr",""],["pButton","","title","New","label","Add New","icon","pi pi-plus",1,"p-button-outlined",3,"click"],["style","width:120px",4,"ngIf"],[2,"width","150px"],[2,"width","300px"],[2,"width","80px"],[2,"width","120px"],[4,"ngIf"],["ngbTooltip","View/Edit",3,"click"],["src","./assets/custom-icons/view.svg",1,"custom-ico","mr4",2,"width","24px !important"],[1,"col"],["myForm","ngForm"],[1,"row"],["class","col-md-3",4,"ngIf"],[1,"col-md-3"],[1,"form-group"],[1,"required"],["name","ddlType","required","",1,"form-control",3,"ngModel","disabled","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["type","text","name","ToUser",1,"form-control",3,"ngModel","ngModelChange"],["type","text","name","CCUser",1,"form-control",3,"ngModel","ngModelChange"],["name","Status","required","",1,"form-control",3,"ngModel","ngModelChange"],["value","1"],["value","0"],[1,"row","justify-content-center"],["type","button","class","btn btn-new-primary mr-2",3,"disabled","click",4,"ngIf"],[1,"btn","btn-new-secondary",3,"click"],[3,"ClinicIdSelected","mode","onclinicSelect"],[3,"value"],["type","button",1,"btn","btn-new-primary","mr-2",3,"disabled","click"]],template:function(e,t){1&e&&(l.Sc(0,A,11,5,"div",0),l.Sc(1,_,41,8,"div",0)),2&e&&(l.tc("ngIf",null==t.Mode),l.Fb(1),l.tc("ngIf",null!=t.Mode))},directives:[s.p,d.c,b.i,u.a,h.b,p.z,p.p,p.q,p.x,p.w,p.o,p.r,s.o,p.b,p.s,p.A,m.a],styles:[""]}),e})()}];let N=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.Qb({type:e}),e.\u0275inj=l.Pb({imports:[[c.l.forChild(E)],c.l]}),e})();var k=i("arFO"),x=i("Ks7X"),D=i("T2Aj");let V=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.Qb({type:e}),e.\u0275inj=l.Pb({imports:[[s.c,N,p.i,d.f,h.c,k.b,u.b,x.b,D.a]]}),e})()}}]);