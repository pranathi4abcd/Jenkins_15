(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{ogNr:function(t,e,s){"use strict";s.r(e),s.d(e,"TestMouthMasterModule",function(){return L});var i=s("ofXK"),c=s("tyNb"),o=s("Nach"),n=s("CwUn"),r=s("fXoL"),l=s("dcBc"),a=s("NLkC"),u=s("rEr+"),d=s("7zfz"),b=s("7kUa"),h=s("jIHw"),f=s("3Pt+");const M=["myForm"];function p(t,e){if(1&t){const t=r.Zb();r.Yb(0,"button",16),r.ic("click",function(){return r.Lc(t),r.mc(3).AddNewTestMouth()}),r.Xb()}}function m(t,e){if(1&t){const t=r.Zb();r.Yb(0,"div",11),r.Sc(1,p,1,0,"button",12),r.Yb(2,"span",13),r.Tb(3,"i",14),r.Yb(4,"input",15),r.ic("input",function(e){return r.Lc(t),r.mc(),r.Ic(5).filterGlobal(e.target.value,"contains")}),r.Xb(),r.Xb(),r.Xb()}if(2&t){const t=r.mc(2);r.Fb(1),r.tc("ngIf",null==t.lstIAccessStr?null:t.lstIAccessStr.includes(t.ActionList.ReadWrite.toString()))}}function v(t,e){if(1&t&&(r.Yb(0,"tr"),r.Yb(1,"td"),r.Uc(2," No records found "),r.Xb(),r.Xb()),2&t){const t=e.$implicit;r.Fb(1),r.Gb("colspan",null==t?null:t.length)}}function S(t,e){1&t&&(r.Yb(0,"tr"),r.Yb(1,"th"),r.Uc(2,"Taste Of Mouth Name"),r.Xb(),r.Yb(3,"th"),r.Uc(4,"Status"),r.Xb(),r.Yb(5,"th"),r.Uc(6,"Action"),r.Xb(),r.Xb())}function g(t,e){if(1&t){const t=r.Zb();r.Yb(0,"tr"),r.Yb(1,"td"),r.Uc(2),r.Xb(),r.Yb(3,"td"),r.Uc(4),r.Xb(),r.Yb(5,"td"),r.Yb(6,"a",17),r.ic("click",function(){r.Lc(t);const s=e.$implicit;return r.mc(2).LoadTestofMouthById(s.TestofMouthId)}),r.Tb(7,"img",18),r.Xb(),r.Xb(),r.Xb()}if(2&t){const t=e.$implicit;r.Fb(2),r.Vc(t.TestofMouthName),r.Fb(2),r.Vc(1==t.Status?"Active":"Inactive")}}const y=function(){return["TestofMouthName"]};function T(t,e){if(1&t&&(r.Yb(0,"div",1),r.Yb(1,"div",2),r.Yb(2,"div",3),r.Yb(3,"div",4),r.Yb(4,"p-table",5,6),r.Sc(6,m,5,1,"ng-template",7),r.Sc(7,v,3,1,"ng-template",8),r.Sc(8,S,7,0,"ng-template",9),r.Sc(9,g,8,2,"ng-template",10),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Xb()),2&t){const t=r.mc();r.Fb(4),r.tc("value",t.LstTestOfMouth)("rowHover",!0)("globalFilterFields",r.yc(4,y))("scrollable",!0)}}function X(t,e){if(1&t){const t=r.Zb();r.Yb(0,"button",32),r.ic("click",function(){return r.Lc(t),r.mc(2).SaveTestOfMouthHead()}),r.Uc(1,"Submit"),r.Xb()}if(2&t){r.mc();const t=r.Ic(5);r.tc("disabled",!t.form.valid)}}function U(t,e){if(1&t){const t=r.Zb();r.Yb(0,"div",1),r.Yb(1,"div",19),r.Yb(2,"div",3),r.Yb(3,"div",4),r.Yb(4,"form",null,20),r.Yb(6,"div",21),r.Yb(7,"div",22),r.Yb(8,"div",23),r.Yb(9,"label"),r.Uc(10,"Test of Mouth Name"),r.Xb(),r.Yb(11,"span",24),r.Uc(12,"*"),r.Xb(),r.Yb(13,"input",25),r.ic("ngModelChange",function(e){return r.Lc(t),r.mc().TestofMouthMasterModel.TestofMouthName=e}),r.Xb(),r.Xb(),r.Xb(),r.Yb(14,"div",22),r.Yb(15,"div",23),r.Yb(16,"label"),r.Uc(17,"Status"),r.Xb(),r.Yb(18,"span",24),r.Uc(19,"*"),r.Xb(),r.Yb(20,"select",26),r.ic("ngModelChange",function(e){return r.Lc(t),r.mc().TestofMouthMasterModel.Status=e}),r.Yb(21,"option",27),r.Uc(22,"Active"),r.Xb(),r.Yb(23,"option",28),r.Uc(24,"Inactive"),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Yb(25,"div",29),r.Sc(26,X,2,1,"button",30),r.Yb(27,"button",31),r.ic("click",function(){return r.Lc(t),r.mc().CloseModal()}),r.Uc(28,"Close"),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Xb()}if(2&t){const t=r.mc();r.Fb(13),r.tc("ngModel",t.TestofMouthMasterModel.TestofMouthName),r.Fb(7),r.tc("ngModel",t.TestofMouthMasterModel.Status),r.Fb(6),r.tc("ngIf",null==t.lstIAccessStr?null:t.lstIAccessStr.includes(t.ActionList.ReadWrite.toString()))}}const Y=[{path:"",component:(()=>{class t extends n.a{constructor(t,e,s,i,c){super(),this.cdRef=t,this.router=e,this._MasterServices=s,this._ConstantServices=i,this._UtilityService=c,this.UOMMode=null,this.TestofMouthMasterModel={},this.ActionList=o.a,this.lstIAccess=[],this.lstIAccessStr=[],this.getPageLevelAccess()}getPageLevelAccess(){var t,e,s=this.router.url,i=JSON.parse(localStorage.getItem("UerRoleAccess"))||[];(null==i?void 0:i.find(t=>t.MenuItemURL===s))&&(this.lstIAccess=null===(t=i.find(t=>t.MenuItemURL===s))||void 0===t?void 0:t.ActionIAccess,(null===(e=this.lstIAccess)||void 0===e?void 0:e.length)>0&&this.lstIAccess.map(t=>{this.lstIAccessStr.push(t.ActionId.toString())}))}ngOnInit(){this._ConstantServices.ActiveMenuName="Taste of Mouth Master",this.cdRef.detectChanges(),this.LoadTestMouthList()}SaveTestOfMouthHead(){this._UtilityService.showSpinner(),this.TestofMouthMasterModel.CreatedBy=localStorage.getItem("userId"),this.TestofMouthMasterModel.ModifiedBy=localStorage.getItem("userId"),this.unsubscribe.add=this._MasterServices.AddTestofMouthHeadMaster(this.TestofMouthMasterModel).subscribe(t=>{this._UtilityService.hideSpinner(),1==t.actionResult.success?(this._UtilityService.showSuccessAlert(t.actionResult.errMsg),this.LoadTestMouthList(),this.UOMMode=null):this._UtilityService.showWarningAlert(t.actionResult.errMsg)},t=>{this._UtilityService.hideSpinner(),this._UtilityService.showErrorAlert(t.message)})}ResetModel(){this.TestofMouthMasterModel={},this.TestofMouthMasterModel.Status=1}AddNewTestMouth(){this.ResetModel(),this.UOMMode="Add",this.cdRef.detectChanges(),this.myForm.resetForm()}LoadTestMouthList(){this._UtilityService.showSpinner(),this.unsubscribe.add=this._MasterServices.GetTestofMouthHeadMaster().subscribe(t=>{if(this._UtilityService.hideSpinner(),this.cdRef.detectChanges(),1==t.actionResult.success){var e=JSON.parse(t.actionResult.result);this.LstTestOfMouth=e=e||[],this.cdRef.detectChanges()}else this.LstTestOfMouth=null},t=>{this._UtilityService.hideSpinner(),this._UtilityService.showErrorAlert(t.message)})}LoadTestofMouthById(t){this._UtilityService.showSpinner(),this.UOMMode="Edit",this.unsubscribe.add=this._MasterServices.GetTestofMouthHeadMasterById(t).subscribe(t=>{if(this._UtilityService.hideSpinner(),this.cdRef.detectChanges(),1==t.actionResult.success){var e=JSON.parse(t.actionResult.result);this.TestofMouthMasterModel=e=e||[],this.cdRef.detectChanges()}},t=>{this._UtilityService.hideSpinner(),this._UtilityService.showErrorAlert(t.message)})}CloseModal(){this.UOMMode=null}}return t.\u0275fac=function(e){return new(e||t)(r.Sb(r.h),r.Sb(c.i),r.Sb(l.a),r.Sb(o.f),r.Sb(a.a))},t.\u0275cmp=r.Mb({type:t,selectors:[["app-test-mouth-master"]],viewQuery:function(t,e){if(1&t&&r.cd(M,1),2&t){let t;r.Hc(t=r.jc())&&(e.myForm=t.first)}},features:[r.Cb],decls:2,vars:2,consts:[["class","row mt25",4,"ngIf"],[1,"row","mt25"],[1,"col-md-12"],[1,"card"],[1,"card-body"],["responsiveLayout","scroll","styleClass","p-datatable-striped","scrollHeight","calc(100vh - 165px)",3,"value","rowHover","globalFilterFields","scrollable"],["dt",""],["pTemplate","caption"],["pTemplate","emptymessage"],["pTemplate","header"],["pTemplate","body"],[1,"p-d-flex"],["pButton","","title","New","label","Add New","class","p-button-outlined","icon","pi pi-plus",3,"click",4,"ngIf"],[1,"p-input-icon-left","p-ml-auto"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search...",3,"input"],["pButton","","title","New","label","Add New","icon","pi pi-plus",1,"p-button-outlined",3,"click"],["matTooltip","View/Edit",3,"click"],["src","./assets/custom-icons/view.svg",1,"custom-ico","mr4",2,"width","24px !important"],[1,"col"],["myForm","ngForm"],[1,"row"],[1,"col-md-4"],[1,"form-group"],[1,"required"],["type","text","required","","maxlength","30","name","txtUseTypeName",1,"form-control",3,"ngModel","ngModelChange"],["name","ddlStatus","required","",1,"form-control",3,"ngModel","ngModelChange"],["value","1"],["value","0"],[1,"row","justify-content-center"],["type","button","class","btn btn-new-primary mr-2",3,"disabled","click",4,"ngIf"],[1,"btn","btn-new-secondary",3,"click"],["type","button",1,"btn","btn-new-primary","mr-2",3,"disabled","click"]],template:function(t,e){1&t&&(r.Sc(0,T,10,5,"div",0),r.Sc(1,U,29,3,"div",0)),2&t&&(r.tc("ngIf",null==e.UOMMode),r.Fb(1),r.tc("ngIf",null!=e.UOMMode))},directives:[i.p,u.c,d.i,b.a,h.b,f.z,f.p,f.q,f.b,f.w,f.j,f.o,f.r,f.x,f.s,f.A],styles:[""]}),t})()}];let w=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Qb({type:t}),t.\u0275inj=r.Pb({imports:[[c.l.forChild(Y)],c.l]}),t})();var I=s("Q4Mo"),A=s("arFO");let L=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Qb({type:t}),t.\u0275inj=r.Pb({imports:[[i.c,w,f.i,f.v,u.f,h.c,I.b,A.b,b.b]]}),t})()}}]);