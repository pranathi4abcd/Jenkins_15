(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{XbgQ:function(t,e,i){"use strict";i.r(e),i.d(e,"BlockMasterModule",function(){return V});var s=i("ofXK"),c=i("tyNb"),n=i("CwUn"),l=i("Nach"),r=i("fXoL"),o=i("dcBc"),a=i("7zAq"),b=i("NLkC"),d=i("rEr+"),u=i("7zfz"),h=i("7kUa"),p=i("jIHw"),m=i("3Pt+"),f=i("arFO"),S=i("AAHA");const v=["myForm"],g=["dt"],M=["filtr"];function I(t,e){if(1&t){const t=r.Zb();r.Yb(0,"button",19),r.ic("click",function(){return r.Lc(t),r.mc(3).AddNewBlock()}),r.Xb()}}function y(t,e){if(1&t){const t=r.Zb();r.Yb(0,"div",11),r.Sc(1,I,1,0,"button",12),r.Yb(2,"span",13),r.Uc(3),r.Xb(),r.Yb(4,"span",14),r.Yb(5,"span",15),r.Tb(6,"i",16),r.Yb(7,"input",17,18),r.ic("input",function(e){return r.Lc(t),r.mc(),r.Ic(5).filterGlobal(e.target.value,"contains")}),r.Xb(),r.Xb(),r.Xb(),r.Xb()}if(2&t){const t=r.mc(2);r.Fb(1),r.tc("ngIf",null==t.lstIAccessStr?null:t.lstIAccessStr.includes(t.ActionList.ReadWrite.toString())),r.Fb(2),r.Wc(" ",(null==t.lstMaster?null:t.lstMaster.length)>0?"Total Records: "+t.filteredValuesLength:""," ")}}function X(t,e){if(1&t&&(r.Yb(0,"tr"),r.Yb(1,"td"),r.Uc(2," No records found "),r.Xb(),r.Xb()),2&t){const t=e.$implicit;r.Fb(1),r.Gb("colspan",null==t?null:t.length)}}function Y(t,e){1&t&&(r.Yb(0,"th"),r.Uc(1,"Clinic Name"),r.Xb())}function A(t,e){if(1&t&&(r.Yb(0,"tr"),r.Sc(1,Y,2,0,"th",20),r.Yb(2,"th"),r.Uc(3,"Block Name"),r.Xb(),r.Yb(4,"th"),r.Uc(5,"Status"),r.Xb(),r.Yb(6,"th"),r.Uc(7,"Action"),r.Xb(),r.Xb()),2&t){const t=r.mc(2);r.Fb(1),r.tc("ngIf",t.UserTypeCurre===t.userTypes.SuperAdmin)}}function w(t,e){if(1&t&&(r.Yb(0,"td"),r.Uc(1),r.Xb()),2&t){const t=r.mc().$implicit;r.Fb(1),r.Vc(t.ClinicName)}}function C(t,e){if(1&t){const t=r.Zb();r.Yb(0,"tr"),r.Sc(1,w,2,1,"td",20),r.Yb(2,"td"),r.Uc(3),r.Xb(),r.Yb(4,"td"),r.Uc(5),r.Xb(),r.Yb(6,"td"),r.Yb(7,"a",21),r.ic("click",function(){r.Lc(t);const i=e.$implicit;return r.mc(2).GetBlockMasterDetailsById(i.BlockMasterId)}),r.Tb(8,"img",22),r.Xb(),r.Xb(),r.Xb()}if(2&t){const t=e.$implicit,i=r.mc(2);r.Fb(1),r.tc("ngIf",i.UserTypeCurre===i.userTypes.SuperAdmin),r.Fb(2),r.Vc(t.BlockName),r.Fb(2),r.Vc(1==t.Status?"Active":"Inactive")}}const U=function(){return["ClinicName","BlockName"]};function k(t,e){if(1&t){const t=r.Zb();r.Yb(0,"div",1),r.Yb(1,"div",2),r.Yb(2,"div",3),r.Yb(3,"div",4),r.Yb(4,"p-table",5,6),r.ic("onFilter",function(e){r.Lc(t);const i=r.Ic(5);return r.mc().onFilter(e,i)}),r.Sc(6,y,9,2,"ng-template",7),r.Sc(7,X,3,1,"ng-template",8),r.Sc(8,A,8,1,"ng-template",9),r.Sc(9,C,9,3,"ng-template",10),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Xb()}if(2&t){const t=r.mc();r.Fb(4),r.tc("value",t.lstMaster)("rowHover",!0)("globalFilterFields",r.yc(4,U))("scrollable",!0)}}function F(t,e){if(1&t){const t=r.Zb();r.Yb(0,"div",27),r.Yb(1,"app-center-dropdown",35),r.ic("onclinicSelect",function(e){return r.Lc(t),r.mc(2).onclinicSelect(e)}),r.Xb(),r.Xb()}if(2&t){const t=r.mc(2);r.Fb(1),r.tc("ClinicIdSelected",t.objMaster.ClinicId)("mode",t.Mode)}}function B(t,e){if(1&t){const t=r.Zb();r.Yb(0,"button",36),r.ic("click",function(){return r.Lc(t),r.mc(2).Save()}),r.Uc(1,"Submit"),r.Xb()}if(2&t){r.mc();const t=r.Ic(5);r.tc("disabled",!t.form.valid)}}const j=function(){return{width:"100%"}};function L(t,e){if(1&t){const t=r.Zb();r.Yb(0,"div",1),r.Yb(1,"div",23),r.Yb(2,"div",3),r.Yb(3,"div",4),r.Yb(4,"form",null,24),r.Yb(6,"div",25),r.Sc(7,F,2,2,"div",26),r.Yb(8,"div",27),r.Yb(9,"div",28),r.Yb(10,"label"),r.Uc(11,"Block Name"),r.Xb(),r.Yb(12,"span",29),r.Uc(13,"*"),r.Xb(),r.Yb(14,"input",30),r.ic("ngModelChange",function(e){return r.Lc(t),r.mc().objMaster.BlockName=e}),r.Xb(),r.Xb(),r.Xb(),r.Yb(15,"div",27),r.Yb(16,"div",28),r.Yb(17,"label"),r.Uc(18,"Status"),r.Xb(),r.Yb(19,"span",29),r.Uc(20,"*"),r.Xb(),r.Yb(21,"p-dropdown",31),r.ic("ngModelChange",function(e){return r.Lc(t),r.mc().objMaster.Status=e}),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Yb(22,"div",32),r.Sc(23,B,2,1,"button",33),r.Yb(24,"button",34),r.ic("click",function(){return r.Lc(t),r.mc().CloseModal()}),r.Uc(25,"Close"),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Xb()}if(2&t){const t=r.mc();r.Fb(7),r.tc("ngIf",t.UserTypeCurre===t.userTypes.SuperAdmin),r.Fb(7),r.tc("ngModel",t.objMaster.BlockName),r.Fb(7),r.Pc(r.yc(8,j)),r.tc("options",t.stlststatus)("ngModel",t.objMaster.Status)("filter",!0),r.Fb(2),r.tc("ngIf",null==t.lstIAccessStr?null:t.lstIAccessStr.includes(t.ActionList.ReadWrite.toString()))}}const R=[{path:"",component:(()=>{class t extends n.a{constructor(t,e,i,s,c,n){super(),this.cdRef=t,this.router=e,this._ConstantServices=i,this._MasterServices=s,this._RoomServices=c,this._UtilityService=n,this.ClinicSelected=localStorage.getItem("ClinicId"),this.UserTypeCurre=localStorage.getItem("userTypeId"),this.userTypes=l.s,this.filteredValuesLength=0,this.Mode=null,this.objMaster={},this.stlststatus=[],this.ActionList=l.a,this.lstIAccess=[],this.lstIAccessStr=[],this.stlststatus=[{name:"Active",code:1},{name:"Inactive",code:0}],this.getPageLevelAccess()}getPageLevelAccess(){var t,e,i=this.router.url,s=JSON.parse(localStorage.getItem("UerRoleAccess"))||[];(null==s?void 0:s.find(t=>t.MenuItemURL===i))&&(this.lstIAccess=null===(t=s.find(t=>t.MenuItemURL===i))||void 0===t?void 0:t.ActionIAccess,(null===(e=this.lstIAccess)||void 0===e?void 0:e.length)>0&&this.lstIAccess.map(t=>{this.lstIAccessStr.push(t.ActionId.toString())}))}ngOnInit(){this._ConstantServices.ActiveMenuName="Block Master",this.GetBlockMaster()}onclinicSelect(t){this.ClinicIdSelected=t,this.objMaster.ClinicId=t}GetBlockMaster(){var t="";this.UserTypeCurre!==l.s.SuperAdmin&&(t=this.ClinicSelected),this._UtilityService.showSpinner(),this.unsubscribe.add=this._RoomServices.GetBlockMasterList(t,!1).subscribe(t=>{var e;if(this._UtilityService.hideSpinner(),this.cdRef.detectChanges(),1==t.actionResult.success){var i=JSON.parse(t.actionResult.result);this.lstMaster=i=i||[],void 0!==this.filtr&&(this.filtr.nativeElement.value="",this.dataTable.reset(),this.filteredValuesLength=null===(e=this.lstMaster)||void 0===e?void 0:e.length),this.cdRef.detectChanges()}else this.lstMaster=[]})}GetBlockMasterDetailsById(t){this._UtilityService.showSpinner(),this.Mode="Edit",this.unsubscribe.add=this._RoomServices.GetBlockMasterDetailsById(t).subscribe(t=>{if(this._UtilityService.hideSpinner(),1==t.actionResult.success){var e=JSON.parse(t.actionResult.result);this.objMaster=e=e||[],this.cdRef.detectChanges()}else this.objMaster={},this.objMaster.Status=1},t=>{this._UtilityService.hideSpinner(),this._UtilityService.showErrorAlert(t.message)})}AddNewBlock(){this.ResetModel(),this.Mode="Add",this.cdRef.detectChanges(),this.myForm.resetForm()}ResetModel(){this.objMaster={},this.objMaster.Status=1}Save(){this.UserTypeCurre!==l.s.SuperAdmin&&(this.objMaster.ClinicId=this.ClinicSelected),this.objMaster.CreatedBy=localStorage.getItem("userId"),this.objMaster.ModifiedBy=localStorage.getItem("userId"),null!=this.objMaster.ClinicId&&null!=this.objMaster.ClinicId&&""!=this.objMaster.ClinicId?(this._UtilityService.showSpinner(),this.unsubscribe.add=this._RoomServices.AddUpdateBlockMaster(this.objMaster).subscribe(t=>{this._UtilityService.hideSpinner(),this.cdRef.detectChanges(),1==t.actionResult.success?(this._UtilityService.showSuccessAlert(t.actionResult.errMsg),this.GetBlockMaster(),this.Mode=null):this._UtilityService.showWarningAlert(t.actionResult.errMsg)},t=>{this._UtilityService.hideSpinner(),this._UtilityService.showErrorAlert(t.message)})):this._UtilityService.showWarningAlert("Please select center")}CloseModal(){this.Mode=null}onFilter(t,e){this.filteredValuesLength=t.filteredValue.length}}return t.\u0275fac=function(e){return new(e||t)(r.Sb(r.h),r.Sb(c.i),r.Sb(l.f),r.Sb(o.a),r.Sb(a.a),r.Sb(b.a))},t.\u0275cmp=r.Mb({type:t,selectors:[["app-block-master"]],viewQuery:function(t,e){if(1&t&&(r.cd(v,1),r.cd(g,1),r.cd(M,1)),2&t){let t;r.Hc(t=r.jc())&&(e.myForm=t.first),r.Hc(t=r.jc())&&(e.dataTable=t.first),r.Hc(t=r.jc())&&(e.filtr=t.first)}},features:[r.Cb],decls:2,vars:2,consts:[["class","row mt25",4,"ngIf"],[1,"row","mt25"],[1,"col-md-12"],[1,"card"],[1,"card-body"],["responsiveLayout","scroll","styleClass","p-datatable-striped","scrollHeight","calc(100vh - 165px)",3,"value","rowHover","globalFilterFields","scrollable","onFilter"],["dt",""],["pTemplate","caption"],["pTemplate","emptymessage"],["pTemplate","header"],["pTemplate","body"],[1,"p-d-flex"],["pButton","","title","New","label","Add New","class","p-button-outlined","icon","pi pi-plus",3,"click",4,"ngIf"],[1,"p-ml-left","pt-3","pl-2"],[1,"p-ml-auto"],[1,"p-input-icon-left"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search...",3,"input"],["filtr",""],["pButton","","title","New","label","Add New","icon","pi pi-plus",1,"p-button-outlined",3,"click"],[4,"ngIf"],["matTooltip","View/Edit",3,"click"],["src","./assets/custom-icons/view.svg",1,"custom-ico","mr4",2,"width","24px !important"],[1,"col"],["myForm","ngForm"],[1,"row"],["class","col-md-4",4,"ngIf"],[1,"col-md-4"],[1,"form-group"],[1,"required"],["type","text","required","","name","txtBlockName",1,"form-control",3,"ngModel","ngModelChange"],["required","true","name","ddlStatus","optionLabel","name","optionValue","code","placeholder","-Select-",3,"options","ngModel","filter","ngModelChange"],[1,"row","justify-content-center"],["type","button","class","btn btn-new-primary mr-2",3,"disabled","click",4,"ngIf"],[1,"btn","btn-new-secondary",3,"click"],[3,"ClinicIdSelected","mode","onclinicSelect"],["type","button",1,"btn","btn-new-primary","mr-2",3,"disabled","click"]],template:function(t,e){1&t&&(r.Sc(0,k,10,5,"div",0),r.Sc(1,L,26,9,"div",0)),2&t&&(r.tc("ngIf",null==e.Mode),r.Fb(1),r.tc("ngIf",null!=e.Mode))},directives:[s.p,d.c,u.i,h.a,p.b,m.z,m.p,m.q,m.b,m.w,m.o,m.r,f.a,S.a],styles:[""]}),t})()}];let N=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Qb({type:t}),t.\u0275inj=r.Pb({imports:[[c.l.forChild(R)],c.l]}),t})();var T=i("Q4Mo"),_=i("T2Aj");let V=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Qb({type:t}),t.\u0275inj=r.Pb({imports:[[s.c,N,m.i,m.v,d.f,p.c,T.b,f.b,h.b,_.a]]}),t})()}}]);