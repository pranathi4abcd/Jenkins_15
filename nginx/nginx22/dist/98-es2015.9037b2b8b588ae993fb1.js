(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{no5T:function(t,e,i){"use strict";i.r(e),i.d(e,"RawItemMasterModule",function(){return B});var s=i("ofXK"),c=i("tyNb"),n=i("Nach"),l=i("CwUn"),r=i("fXoL"),o=i("dcBc"),a=i("NLkC"),d=i("rEr+"),b=i("7zfz"),u=i("7kUa"),p=i("jIHw"),m=i("3Pt+"),h=i("arFO"),f=i("AAHA");const S=["myForm"],g=["dt"],M=["filtr"];function v(t,e){if(1&t){const t=r.Zb();r.Yb(0,"button",20),r.ic("click",function(){return r.Lc(t),r.mc(3).AddNewRawMaster()}),r.Xb()}}function I(t,e){if(1&t){const t=r.Zb();r.Yb(0,"button",21),r.ic("click",function(){return r.Lc(t),r.mc(3).exportToItemExcel()}),r.Xb()}}function w(t,e){if(1&t){const t=r.Zb();r.Yb(0,"div",11),r.Sc(1,v,1,0,"button",12),r.Yb(2,"span",13),r.Uc(3),r.Xb(),r.Yb(4,"span",14),r.Sc(5,I,1,0,"button",15),r.Yb(6,"span",16),r.Tb(7,"i",17),r.Yb(8,"input",18,19),r.ic("input",function(e){return r.Lc(t),r.mc(),r.Ic(5).filterGlobal(e.target.value,"contains")}),r.Xb(),r.Xb(),r.Xb(),r.Xb()}if(2&t){const t=r.mc(2);r.Fb(1),r.tc("ngIf",null==t.lstIAccessStr?null:t.lstIAccessStr.includes(t.ActionList.ReadWrite.toString())),r.Fb(2),r.Wc(" ",(null==t.lstMaster?null:t.lstMaster.length)>0?"Total Records: "+t.filteredValuesLength:""," "),r.Fb(2),r.tc("ngIf",null==t.lstIAccessStr?null:t.lstIAccessStr.includes(t.ActionList.Download.toString()))}}function y(t,e){if(1&t&&(r.Yb(0,"tr"),r.Yb(1,"td"),r.Uc(2," No records found "),r.Xb(),r.Xb()),2&t){const t=e.$implicit;r.Fb(1),r.Gb("colspan",null==t?null:t.length)}}function X(t,e){1&t&&(r.Yb(0,"th"),r.Uc(1,"Clinic Name"),r.Xb())}function U(t,e){if(1&t&&(r.Yb(0,"tr"),r.Sc(1,X,2,0,"th",22),r.Yb(2,"th"),r.Uc(3,"Item Name"),r.Xb(),r.Yb(4,"th"),r.Uc(5,"Unit"),r.Xb(),r.Yb(6,"th"),r.Uc(7,"Status"),r.Xb(),r.Yb(8,"th"),r.Uc(9,"Action"),r.Xb(),r.Xb()),2&t){const t=r.mc(2);r.Fb(1),r.tc("ngIf",t.UserTypeCurre===t.userTypes.SuperAdmin)}}function Y(t,e){if(1&t&&(r.Yb(0,"td"),r.Uc(1),r.Xb()),2&t){const t=r.mc().$implicit;r.Fb(1),r.Vc(t.ClinicName)}}function C(t,e){if(1&t){const t=r.Zb();r.Yb(0,"tr"),r.Sc(1,Y,2,1,"td",22),r.Yb(2,"td"),r.Uc(3),r.Xb(),r.Yb(4,"td"),r.Uc(5),r.Xb(),r.Yb(6,"td"),r.Uc(7),r.Xb(),r.Yb(8,"td"),r.Yb(9,"a",23),r.ic("click",function(){r.Lc(t);const i=e.$implicit;return r.mc(2).GetRawMasterDetailsById(i.RawItemMasterId)}),r.Tb(10,"img",24),r.Xb(),r.Xb(),r.Xb()}if(2&t){const t=e.$implicit,i=r.mc(2);r.Fb(1),r.tc("ngIf",i.UserTypeCurre===i.userTypes.SuperAdmin),r.Fb(2),r.Vc(t.ItemName),r.Fb(2),r.Vc(t.UOMS),r.Fb(2),r.Vc(1==t.Status?"Active":"Inactive")}}const A=function(){return["ItemName","ClinicName"]};function R(t,e){if(1&t){const t=r.Zb();r.Yb(0,"div",1),r.Yb(1,"div",2),r.Yb(2,"div",3),r.Yb(3,"div",4),r.Yb(4,"p-table",5,6),r.ic("onFilter",function(e){r.Lc(t);const i=r.Ic(5);return r.mc().onFilter(e,i)}),r.Sc(6,w,10,3,"ng-template",7),r.Sc(7,y,3,1,"ng-template",8),r.Sc(8,U,10,1,"ng-template",9),r.Sc(9,C,11,4,"ng-template",10),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Xb()}if(2&t){const t=r.mc();r.Fb(4),r.tc("value",t.lstMaster)("rowHover",!0)("globalFilterFields",r.yc(4,A))("scrollable",!0)}}function L(t,e){if(1&t){const t=r.Zb();r.Yb(0,"div",29),r.Yb(1,"app-center-dropdown",38),r.ic("onclinicSelect",function(e){return r.Lc(t),r.mc(2).onclinicSelect(e)}),r.Xb(),r.Xb()}if(2&t){const t=r.mc(2);r.Fb(1),r.tc("ClinicIdSelected",t.objMaster.ClinicId)("mode",t.Mode)}}function F(t,e){if(1&t){const t=r.Zb();r.Yb(0,"button",39),r.ic("click",function(){return r.Lc(t),r.mc(2).Save()}),r.Uc(1,"Submit"),r.Xb()}if(2&t){r.mc();const t=r.Ic(5);r.tc("disabled",!t.form.valid)}}const j=function(){return{width:"100%"}};function T(t,e){if(1&t){const t=r.Zb();r.Yb(0,"div",1),r.Yb(1,"div",25),r.Yb(2,"div",3),r.Yb(3,"div",4),r.Yb(4,"form",null,26),r.Yb(6,"div",27),r.Sc(7,L,2,2,"div",28),r.Yb(8,"div",29),r.Yb(9,"div",30),r.Yb(10,"label"),r.Uc(11,"Item Name"),r.Xb(),r.Yb(12,"span",31),r.Uc(13,"*"),r.Xb(),r.Yb(14,"input",32),r.ic("ngModelChange",function(e){return r.Lc(t),r.mc().objMaster.ItemName=e}),r.Xb(),r.Xb(),r.Xb(),r.Yb(15,"div",29),r.Yb(16,"div",30),r.Yb(17,"label"),r.Uc(18,"Select Unit"),r.Xb(),r.Yb(19,"p-dropdown",33),r.ic("ngModelChange",function(e){return r.Lc(t),r.mc().objMaster.UOMS=e}),r.Xb(),r.Xb(),r.Xb(),r.Yb(20,"div",29),r.Yb(21,"div",30),r.Yb(22,"label"),r.Uc(23,"Status"),r.Xb(),r.Yb(24,"span",31),r.Uc(25,"*"),r.Xb(),r.Yb(26,"p-dropdown",34),r.ic("ngModelChange",function(e){return r.Lc(t),r.mc().objMaster.Status=e}),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Yb(27,"div",35),r.Sc(28,F,2,1,"button",36),r.Yb(29,"button",37),r.ic("click",function(){return r.Lc(t),r.mc().CloseModal()}),r.Uc(30,"Close"),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Xb()}if(2&t){const t=r.mc();r.Fb(7),r.tc("ngIf",t.UserTypeCurre===t.userTypes.SuperAdmin),r.Fb(7),r.tc("ngModel",t.objMaster.ItemName),r.Fb(5),r.Pc(r.yc(13,j)),r.tc("options",t.UMList)("ngModel",t.objMaster.UOMS)("filter",!0),r.Fb(7),r.Pc(r.yc(14,j)),r.tc("options",t.stlststatus)("ngModel",t.objMaster.Status)("filter",!0),r.Fb(2),r.tc("ngIf",null==t.lstIAccessStr?null:t.lstIAccessStr.includes(t.ActionList.ReadWrite.toString()))}}const k=[{path:"",component:(()=>{class t extends l.a{constructor(t,e,i,s,c){super(),this.router=t,this._MasterServices=e,this._ConstantServices=i,this._UtilityService=s,this.cdRef=c,this.ClinicIdSelected=localStorage.getItem("ClinicId"),this.UserTypeCurre=localStorage.getItem("userTypeId"),this.userTypes=n.s,this.filteredValuesLength=0,this.Mode=null,this.objMaster={},this.stlststatus=[],this.ActionList=n.a,this.lstIAccess=[],this.lstIAccessStr=[],this.UMList=[{name:"PCS",code:"PCS"},{name:"kg",code:"kg"},{name:"gm",code:"gm"},{name:"mg",code:"mg"},{name:"ltr",code:"ltr"},{name:"ml",code:"ml"}],this.stlststatus=[{name:"Active",code:1},{name:"Inactive",code:0}],this.getPageLevelAccess()}getPageLevelAccess(){var t,e,i=this.router.url,s=JSON.parse(localStorage.getItem("UerRoleAccess"))||[];(null==s?void 0:s.find(t=>t.MenuItemURL===i))&&(this.lstIAccess=null===(t=s.find(t=>t.MenuItemURL===i))||void 0===t?void 0:t.ActionIAccess,(null===(e=this.lstIAccess)||void 0===e?void 0:e.length)>0&&this.lstIAccess.map(t=>{this.lstIAccessStr.push(t.ActionId.toString())}))}ngOnInit(){this._ConstantServices.ActiveMenuName="Raw Item Master",this.GetRawkMasterList()}onclinicSelect(t){this.ClinicIdSelected=t,this.objMaster.ClinicId=t}GetRawkMasterList(){var t="";this.UserTypeCurre!==n.s.SuperAdmin&&(t=this.ClinicIdSelected),this._UtilityService.showSpinner(),this.unsubscribe.add=this._MasterServices.GetRawItemMasterList(t,!1).subscribe(t=>{var e;if(this._UtilityService.hideSpinner(),this.cdRef.detectChanges(),1==t.actionResult.success){var i=JSON.parse(t.actionResult.result);this.lstMaster=i=i||[],void 0!==this.filtr&&(this.filtr.nativeElement.value="",this.dataTable.reset(),this.filteredValuesLength=null===(e=this.lstMaster)||void 0===e?void 0:e.length),this.cdRef.detectChanges()}else this.lstMaster=null})}AddNewRawMaster(){this.ResetModel(),this.Mode="Add",this.cdRef.detectChanges(),this.myForm.resetForm()}GetRawMasterDetailsById(t){this._UtilityService.showSpinner(),this.Mode="Edit",this.unsubscribe.add=this._MasterServices.GetRawMasterDetailsById(t).subscribe(t=>{if(this._UtilityService.hideSpinner(),1==t.actionResult.success){var e=JSON.parse(t.actionResult.result);this.objMaster=e=e||[],this.cdRef.detectChanges()}else this.objMaster={},this.objMaster.Status=1},t=>{this._UtilityService.hideSpinner(),this._UtilityService.showErrorAlert(t.message)})}Save(){this.objMaster.CreatedBy=localStorage.getItem("userId"),this.objMaster.ModifiedBy=localStorage.getItem("userId"),this.UserTypeCurre!==n.s.SuperAdmin&&(this.objMaster.ClinicId=this.ClinicIdSelected),null!=this.objMaster.ClinicId&&null!=this.objMaster.ClinicId&&""!=this.objMaster.ClinicId?(this._UtilityService.showSpinner(),this.unsubscribe.add=this._MasterServices.AddUpdateRawItemkMaster(this.objMaster).subscribe(t=>{this._UtilityService.hideSpinner(),this.cdRef.detectChanges(),1==t.actionResult.success?(this._UtilityService.showSuccessAlert(t.actionResult.errMsg),this.GetRawkMasterList(),this.Mode=null):this._UtilityService.showWarningAlert(t.actionResult.errMsg)},t=>{this._UtilityService.hideSpinner(),this._UtilityService.showErrorAlert(t.message)})):this._UtilityService.showWarningAlert("Please select center")}ResetModel(){this.objMaster={},this.objMaster.Status=1}CloseModal(){this.Mode=null}onFilter(t,e){this.filteredValuesLength=t.filteredValue.length}exportToItemExcel(){let t={reportname:"RawItem",filename:"RawItem"};this.UserTypeCurre!==n.s.SuperAdmin?t.ClinicId=this.ClinicIdSelected:t.clinicId="",this._MasterServices.downloadReport(t)}}return t.\u0275fac=function(e){return new(e||t)(r.Sb(c.i),r.Sb(o.a),r.Sb(n.f),r.Sb(a.a),r.Sb(r.h))},t.\u0275cmp=r.Mb({type:t,selectors:[["app-raw-item-master"]],viewQuery:function(t,e){if(1&t&&(r.cd(S,1),r.cd(g,1),r.cd(M,1)),2&t){let t;r.Hc(t=r.jc())&&(e.myForm=t.first),r.Hc(t=r.jc())&&(e.dataTable=t.first),r.Hc(t=r.jc())&&(e.filtr=t.first)}},features:[r.Cb],decls:2,vars:2,consts:[["class","row mt25",4,"ngIf"],[1,"row","mt25"],[1,"col-md-12"],[1,"card"],[1,"card-body"],["responsiveLayout","scroll","styleClass","p-datatable-striped","scrollHeight","calc(100vh - 165px)",3,"value","rowHover","globalFilterFields","scrollable","onFilter"],["dt",""],["pTemplate","caption"],["pTemplate","emptymessage"],["pTemplate","header"],["pTemplate","body"],[1,"p-d-flex"],["pButton","","title","New","label","Add New","class","p-button-outlined mr-2","icon","pi pi-plus",3,"click",4,"ngIf"],[1,"p-ml-left","pt-3"],[1,"p-ml-auto"],["pButton","","title","Export Data","label"," ","class","p-button-outlined mr-2","icon","pi pi-download",3,"click",4,"ngIf"],[1,"p-input-icon-left"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search...",3,"input"],["filtr",""],["pButton","","title","New","label","Add New","icon","pi pi-plus",1,"p-button-outlined","mr-2",3,"click"],["pButton","","title","Export Data","label"," ","icon","pi pi-download",1,"p-button-outlined","mr-2",3,"click"],[4,"ngIf"],["matTooltip","View/Edit",3,"click"],["src","./assets/custom-icons/view.svg",1,"custom-ico","mr4",2,"width","24px !important"],[1,"col"],["myForm","ngForm"],[1,"row"],["class","col-md-3",4,"ngIf"],[1,"col-md-3"],[1,"form-group"],[1,"required"],["type","text","required","","name","txtBlockName",1,"form-control",3,"ngModel","ngModelChange"],["name","ddlUnit","optionLabel","name","optionValue","name","placeholder","Select Unit",3,"options","ngModel","filter","ngModelChange"],["required","true","name","ddlStatus","optionLabel","name","optionValue","code","placeholder","-Select-",3,"options","ngModel","filter","ngModelChange"],[1,"row","justify-content-center"],["type","button","class","btn btn-new-primary mr-2",3,"disabled","click",4,"ngIf"],[1,"btn","btn-new-secondary",3,"click"],[3,"ClinicIdSelected","mode","onclinicSelect"],["type","button",1,"btn","btn-new-primary","mr-2",3,"disabled","click"]],template:function(t,e){1&t&&(r.Sc(0,R,10,5,"div",0),r.Sc(1,T,31,15,"div",0)),2&t&&(r.tc("ngIf",null==e.Mode),r.Fb(1),r.tc("ngIf",null!=e.Mode))},directives:[s.p,d.c,b.i,u.a,p.b,m.z,m.p,m.q,m.b,m.w,m.o,m.r,h.a,f.a],styles:[""]}),t})()}];let N=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Qb({type:t}),t.\u0275inj=r.Pb({imports:[[c.l.forChild(k)],c.l]}),t})();var _=i("Q4Mo"),x=i("Ks7X"),V=i("T2Aj");let B=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Qb({type:t}),t.\u0275inj=r.Pb({imports:[[s.c,N,m.i,m.v,d.f,p.c,_.b,h.b,u.b,x.b,V.a]]}),t})()}}]);