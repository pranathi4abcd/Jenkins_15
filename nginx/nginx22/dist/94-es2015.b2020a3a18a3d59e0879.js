(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{LVFk:function(t,i,e){"use strict";e.r(i),e.d(i,"PrescriptionConfigurationModule",function(){return w});var n=e("ofXK"),s=e("tyNb"),c=e("CwUn"),o=e("Nach"),r=e("fXoL"),l=e("dcBc"),a=e("NLkC"),b=e("rEr+"),u=e("7zfz"),d=e("7kUa"),p=e("jIHw"),f=e("3Pt+");function h(t,i){if(1&t){const t=r.Zb();r.Yb(0,"button",16),r.ic("click",function(){return r.Lc(t),r.mc(3).AddConfigDetails()}),r.Xb()}}function g(t,i){if(1&t){const t=r.Zb();r.Yb(0,"div",11),r.Sc(1,h,1,0,"button",12),r.Yb(2,"span",13),r.Tb(3,"i",14),r.Yb(4,"input",15),r.ic("input",function(i){return r.Lc(t),r.mc(),r.Ic(5).filterGlobal(i.target.value,"contains")}),r.Xb(),r.Xb(),r.Xb()}if(2&t){const t=r.mc(2);r.Fb(1),r.tc("ngIf",null==t.lstIAccessStr?null:t.lstIAccessStr.includes(t.ActionList.ReadWrite.toString()))}}function S(t,i){1&t&&(r.Yb(0,"tr"),r.Yb(1,"td"),r.Uc(2," No records found "),r.Xb(),r.Xb()),2&t&&(r.Fb(1),r.Gb("colspan",7))}function v(t,i){1&t&&(r.Yb(0,"tr"),r.Yb(1,"th",17),r.Uc(2,"MOA Type "),r.Tb(3,"p-sortIcon",18),r.Xb(),r.Yb(4,"th",19),r.Uc(5,"MOA Description "),r.Tb(6,"p-sortIcon",20),r.Xb(),r.Yb(7,"th"),r.Uc(8,"Status "),r.Xb(),r.Yb(9,"th"),r.Uc(10,"Action"),r.Xb(),r.Xb())}function m(t,i){if(1&t){const t=r.Zb();r.Yb(0,"tr"),r.Yb(1,"td"),r.Uc(2),r.Xb(),r.Yb(3,"td"),r.Uc(4),r.Xb(),r.Yb(5,"td"),r.Uc(6),r.Xb(),r.Yb(7,"td"),r.Yb(8,"a",21),r.ic("click",function(){r.Lc(t);const e=i.$implicit;return r.mc(2).LoadConfigDetailsById(e.ConfigId)}),r.Tb(9,"img",22),r.Xb(),r.Xb(),r.Xb()}if(2&t){const t=i.$implicit;r.Fb(2),r.Vc(t.MOAType),r.Fb(2),r.Vc(t.MOADescription),r.Fb(2),r.Vc(1==t.Status?"Active":"Inactive")}}const C=function(){return["MOAType","MOADescription"]};function M(t,i){if(1&t&&(r.Yb(0,"div",1),r.Yb(1,"div",2),r.Yb(2,"div",3),r.Yb(3,"div",4),r.Yb(4,"p-table",5,6),r.Sc(6,g,5,1,"ng-template",7),r.Sc(7,S,3,1,"ng-template",8),r.Sc(8,v,11,0,"ng-template",9),r.Sc(9,m,10,3,"ng-template",10),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Xb()),2&t){const t=r.mc();r.Fb(4),r.tc("value",t.lstPrescriptionConfiguration)("rowHover",!0)("globalFilterFields",r.yc(4,C))("scrollable",!0)}}function y(t,i){if(1&t&&(r.Yb(0,"option",38),r.Uc(1),r.Xb()),2&t){const t=i.$implicit;r.uc("value",t.InternalType),r.Fb(1),r.Wc(" ",t.InternalType,"")}}function A(t,i){if(1&t){const t=r.Zb();r.Yb(0,"button",39),r.ic("click",function(){return r.Lc(t),r.mc(2).SaveConfigDetails()}),r.Uc(1,"Submit"),r.Xb()}}function X(t,i){if(1&t){const t=r.Zb();r.Yb(0,"div",1),r.Yb(1,"div",23),r.Yb(2,"div",3),r.Yb(3,"div",4),r.Yb(4,"form",null,24),r.Yb(6,"div",1),r.Yb(7,"div",25),r.Yb(8,"label"),r.Uc(9,"MOA Type "),r.Yb(10,"span",26),r.Uc(11,"*"),r.Xb(),r.Xb(),r.Yb(12,"select",27),r.ic("ngModelChange",function(i){return r.Lc(t),r.mc().PrescriptionConfiguration.MOAType=i}),r.Sc(13,y,2,2,"option",28),r.Xb(),r.Xb(),r.Yb(14,"div",29),r.Yb(15,"label"),r.Uc(16,"MOA Description "),r.Yb(17,"span",26),r.Uc(18,"*"),r.Xb(),r.Xb(),r.Yb(19,"textarea",30),r.ic("ngModelChange",function(i){return r.Lc(t),r.mc().PrescriptionConfiguration.MOADescription=i}),r.Xb(),r.Xb(),r.Yb(20,"div",31),r.Yb(21,"label"),r.Uc(22,"Status "),r.Yb(23,"span",26),r.Uc(24,"*"),r.Xb(),r.Xb(),r.Yb(25,"select",32),r.ic("ngModelChange",function(i){return r.Lc(t),r.mc().PrescriptionConfiguration.Status=i}),r.Yb(26,"option",33),r.Uc(27,"Active"),r.Xb(),r.Yb(28,"option",34),r.Uc(29,"Inactive"),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Yb(30,"div",35),r.Sc(31,A,2,0,"button",36),r.Yb(32,"button",37),r.ic("click",function(){return r.Lc(t),r.mc().CloseModal()}),r.Uc(33,"Close"),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Xb()}if(2&t){const t=r.mc();r.Fb(12),r.tc("ngModel",t.PrescriptionConfiguration.MOAType),r.Fb(1),r.tc("ngForOf",t.lstMedicineType),r.Fb(6),r.tc("ngModel",t.PrescriptionConfiguration.MOADescription),r.Fb(6),r.tc("ngModel",t.PrescriptionConfiguration.Status),r.Fb(6),r.tc("ngIf",null==t.lstIAccessStr?null:t.lstIAccessStr.includes(t.ActionList.ReadWrite.toString()))}}const Y=[{path:"",component:(()=>{class t extends c.a{constructor(t,i,e,n,s){super(),this.cdRef=t,this.router=i,this._MasterServices=e,this._ConstantsService=n,this._UtilityService=s,this.userTypes=o.s,this.UserTypeCurre=localStorage.getItem("userTypeId"),this.Mode=null,this.lstPrescriptionConfiguration=[],this.PrescriptionConfiguration={},this.lstMedicineType=[],this.ActionList=o.a,this.lstIAccess=[],this.lstIAccessStr=[],this._ConstantsService.ActiveMenuName="Prescription Configuration Master",this.getPageLevelAccess()}getPageLevelAccess(){var t,i,e=this.router.url,n=JSON.parse(localStorage.getItem("UerRoleAccess"))||[];(null==n?void 0:n.find(t=>t.MenuItemURL===e))&&(this.lstIAccess=null===(t=n.find(t=>t.MenuItemURL===e))||void 0===t?void 0:t.ActionIAccess,(null===(i=this.lstIAccess)||void 0===i?void 0:i.length)>0&&this.lstIAccess.map(t=>{this.lstIAccessStr.push(t.ActionId.toString())}))}ngOnInit(){this.LoadMedicineType(),this.LoadPrescriptionConfiguration()}AddConfigDetails(){this.ResetConfigDetails(),this.Mode="Add"}ResetConfigDetails(){this.PrescriptionConfiguration={}}LoadMedicineType(){this._UtilityService.showSpinner(),this.unsubscribe.add=this._MasterServices.GetMedicineTypeList().subscribe(t=>{if(this._UtilityService.hideSpinner(),1==t.actionResult.success){var i=JSON.parse(t.actionResult.result);this.lstMedicineType=i=i||[],this.cdRef.detectChanges()}else this.lstMedicineType=[],this.cdRef.detectChanges()},t=>{this._UtilityService.hideSpinner()})}LoadConfigDetailsById(t){this.Mode="Edit",this._UtilityService.showSpinner(),this.unsubscribe.add=this._MasterServices.GetPrescriptionConfigurationMasterById(t).subscribe(t=>{if(this._UtilityService.hideSpinner(),1==t.actionResult.success){var i=JSON.parse(t.actionResult.result);this.PrescriptionConfiguration=i=i||[],this.cdRef.detectChanges()}else this.PrescriptionConfiguration={},this.cdRef.detectChanges()},t=>{this._UtilityService.hideSpinner()})}CloseModal(){this.Mode=null}SaveConfigDetails(){this.PrescriptionConfiguration.CreatedBy=localStorage.getItem("userId"),this.PrescriptionConfiguration.ModifiedBy=localStorage.getItem("userId"),this.PrescriptionConfiguration.CreatedOn=new Date,this.PrescriptionConfiguration.ModifiedOn=new Date,this._UtilityService.showSpinner(),this.unsubscribe.add=this._MasterServices.AddEditPrescriptionConfigurationMaster(this.PrescriptionConfiguration).subscribe(t=>{this._UtilityService.hideSpinner(),this.cdRef.detectChanges(),this._UtilityService.showSuccessAlert(t.actionResult.errMsg),1==t.actionResult.success&&(this.LoadPrescriptionConfiguration(),this.Mode=null)},t=>{this._UtilityService.hideSpinner(),this._UtilityService.showErrorAlert(t.message)})}LoadPrescriptionConfiguration(){this._UtilityService.showSpinner(),this.unsubscribe.add=this._MasterServices.GetPrescriptionConfigurationMaster().subscribe(t=>{if(this._UtilityService.hideSpinner(),1==t.actionResult.success){var i=JSON.parse(t.actionResult.result);this.lstPrescriptionConfiguration=i=i||[],this.cdRef.detectChanges()}else this.lstPrescriptionConfiguration=[],this.cdRef.detectChanges()},t=>{this._UtilityService.hideSpinner()})}}return t.\u0275fac=function(i){return new(i||t)(r.Sb(r.h),r.Sb(s.i),r.Sb(l.a),r.Sb(o.f),r.Sb(a.a))},t.\u0275cmp=r.Mb({type:t,selectors:[["app-prescription-configuration"]],features:[r.Cb],decls:2,vars:2,consts:[["class","row",4,"ngIf"],[1,"row"],[1,"col-md-12"],[1,"card"],[1,"card-body"],["responsiveLayout","scroll","styleClass","p-datatable-striped","scrollHeight","400px",3,"value","rowHover","globalFilterFields","scrollable"],["dt",""],["pTemplate","caption"],["pTemplate","emptymessage"],["pTemplate","header"],["pTemplate","body"],[1,"p-d-flex"],["pButton","","title","Add New Configuration","label","Add New","class","p-button-outlined","icon","pi pi-plus",3,"click",4,"ngIf"],[1,"p-input-icon-left","p-ml-auto"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search...",3,"input"],["pButton","","title","Add New Configuration","label","Add New","icon","pi pi-plus",1,"p-button-outlined",3,"click"],["pSortableColumn","MOAType"],["field","MOAType"],["pSortableColumn","MOADescription"],["field","MOADescription"],["ngbTooltip","View/Edit",3,"click"],["src","./assets/custom-icons/view.svg",1,"custom-ico","mr4",2,"width","24px !important"],[1,"col"],["myForm","ngForm"],[1,"col-md-4"],[1,"required"],["name","ddlMOAType","required","",1,"form-control",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"col-md-6"],["name","txtMOADescription","rows","4","cols","60","required","",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-md-2"],["name","ddlStatus",1,"form-control",3,"ngModel","ngModelChange"],["value","1"],["value","0"],[1,"row","justify-content-center"],["type","button","class","btn btn-new-primary mr-2",3,"click",4,"ngIf"],["type","button",1,"btn","btn-new-secondary",3,"click"],[3,"value"],["type","button",1,"btn","btn-new-primary","mr-2",3,"click"]],template:function(t,i){1&t&&(r.Sc(0,M,10,5,"div",0),r.Sc(1,X,34,5,"div",0)),2&t&&(r.tc("ngIf",null==i.Mode),r.Fb(1),r.tc("ngIf",null!=i.Mode))},directives:[n.p,b.c,u.i,d.a,p.b,b.b,b.a,f.z,f.p,f.q,f.x,f.w,f.o,f.r,n.o,f.b,f.s,f.A],styles:[""]}),t})()}];let I=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=r.Qb({type:t}),t.\u0275inj=r.Pb({imports:[[s.l.forChild(Y)],s.l]}),t})();var U=e("arFO");let w=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=r.Qb({type:t}),t.\u0275inj=r.Pb({imports:[[n.c,I,f.i,b.f,p.c,U.b,d.b]]}),t})()}}]);