(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{sZCj:function(t,e,i){"use strict";i.r(e),i.d(e,"DepartmentMasterModule",function(){return N});var s=i("ofXK"),n=i("tyNb"),c=i("Nach"),r=i("CwUn"),o=i("fXoL"),l=i("dcBc"),a=i("NLkC"),b=i("jhN1"),d=i("rEr+"),u=i("7zfz"),p=i("7kUa"),m=i("jIHw"),h=i("3Pt+"),f=i("arFO");const S=["myForm"];function v(t,e){if(1&t){const t=o.Zb();o.Yb(0,"button",18),o.ic("click",function(){return o.Lc(t),o.mc(3).AddNewDepartmentType()}),o.Xb()}}function g(t,e){if(1&t){const t=o.Zb();o.Yb(0,"button",19),o.ic("click",function(){return o.Lc(t),o.mc(3).exportToItemExcel()}),o.Xb()}}function M(t,e){if(1&t){const t=o.Zb();o.Yb(0,"div",11),o.Sc(1,v,1,0,"button",12),o.Yb(2,"span",13),o.Sc(3,g,1,0,"button",14),o.Yb(4,"span",15),o.Tb(5,"i",16),o.Yb(6,"input",17),o.ic("input",function(e){return o.Lc(t),o.mc(),o.Ic(5).filterGlobal(e.target.value,"contains")}),o.Xb(),o.Xb(),o.Xb(),o.Xb()}if(2&t){const t=o.mc(2);o.Fb(1),o.tc("ngIf",null==t.lstIAccessStr?null:t.lstIAccessStr.includes(t.ActionList.ReadWrite.toString())),o.Fb(2),o.tc("ngIf",null==t.lstIAccessStr?null:t.lstIAccessStr.includes(t.ActionList.Download.toString()))}}function X(t,e){if(1&t&&(o.Yb(0,"tr"),o.Yb(1,"td"),o.Uc(2," No records found "),o.Xb(),o.Xb()),2&t){const t=e.$implicit;o.Fb(1),o.Gb("colspan",null==t?null:t.length)}}function y(t,e){1&t&&(o.Yb(0,"tr"),o.Yb(1,"th"),o.Uc(2,"Department Name"),o.Xb(),o.Yb(3,"th"),o.Uc(4,"Short Code"),o.Xb(),o.Yb(5,"th"),o.Uc(6,"Status"),o.Xb(),o.Yb(7,"th"),o.Uc(8,"Action"),o.Xb(),o.Xb())}function Y(t,e){if(1&t){const t=o.Zb();o.Yb(0,"tr"),o.Yb(1,"td"),o.Uc(2),o.Xb(),o.Yb(3,"td"),o.Uc(4),o.Xb(),o.Yb(5,"td"),o.Uc(6),o.Xb(),o.Yb(7,"td"),o.Yb(8,"a",20),o.ic("click",function(){o.Lc(t);const i=e.$implicit;return o.mc(2).LoadDepartmentMasterById(i.DepartmentId)}),o.Tb(9,"img",21),o.Xb(),o.Xb(),o.Xb()}if(2&t){const t=e.$implicit;o.Fb(2),o.Vc(t.DepartmentName),o.Fb(2),o.Vc(t.DepartmentShortCode),o.Fb(2),o.Vc(1==t.Status?"Active":"Inactive")}}const w=function(){return["DepartmentName","DepartmentShortCode","Status","Action"]};function U(t,e){if(1&t&&(o.Yb(0,"div",1),o.Yb(1,"div",2),o.Yb(2,"div",3),o.Yb(3,"div",4),o.Yb(4,"p-table",5,6),o.Sc(6,M,7,2,"ng-template",7),o.Sc(7,X,3,1,"ng-template",8),o.Sc(8,y,9,0,"ng-template",9),o.Sc(9,Y,10,3,"ng-template",10),o.Xb(),o.Xb(),o.Xb(),o.Xb(),o.Xb()),2&t){const t=o.mc();o.Fb(4),o.tc("value",t.lstMaster)("rowHover",!0)("globalFilterFields",o.yc(4,w))("scrollable",!0)}}function I(t,e){if(1&t){const t=o.Zb();o.Yb(0,"button",34),o.ic("click",function(){return o.Lc(t),o.mc(2).Save()}),o.Uc(1,"Submit"),o.Xb()}if(2&t){o.mc();const t=o.Ic(5);o.tc("disabled",!t.form.valid)}}const A=function(){return{width:"100%"}};function C(t,e){if(1&t){const t=o.Zb();o.Yb(0,"div",1),o.Yb(1,"div",22),o.Yb(2,"div",3),o.Yb(3,"div",4),o.Yb(4,"form",null,23),o.Yb(6,"div",24),o.Yb(7,"div",25),o.Yb(8,"div",26),o.Yb(9,"label"),o.Uc(10,"Department Name"),o.Xb(),o.Yb(11,"span",27),o.Uc(12,"*"),o.Xb(),o.Yb(13,"input",28),o.ic("ngModelChange",function(e){return o.Lc(t),o.mc().objMaster.DepartmentName=e}),o.Xb(),o.Xb(),o.Xb(),o.Yb(14,"div",25),o.Yb(15,"div",26),o.Yb(16,"label"),o.Uc(17,"Short Code"),o.Xb(),o.Yb(18,"span",27),o.Uc(19,"*"),o.Xb(),o.Yb(20,"input",29),o.ic("ngModelChange",function(e){return o.Lc(t),o.mc().objMaster.DepartmentShortCode=e}),o.Xb(),o.Xb(),o.Xb(),o.Yb(21,"div",25),o.Yb(22,"div",26),o.Yb(23,"label"),o.Uc(24,"Status"),o.Xb(),o.Yb(25,"span",27),o.Uc(26,"*"),o.Xb(),o.Yb(27,"p-dropdown",30),o.ic("ngModelChange",function(e){return o.Lc(t),o.mc().objMaster.Status=e}),o.Xb(),o.Xb(),o.Xb(),o.Xb(),o.Yb(28,"div",31),o.Sc(29,I,2,1,"button",32),o.Yb(30,"button",33),o.ic("click",function(){return o.Lc(t),o.mc().CloseModal()}),o.Uc(31,"Close"),o.Xb(),o.Xb(),o.Xb(),o.Xb(),o.Xb(),o.Xb(),o.Xb()}if(2&t){const t=o.mc();o.Fb(13),o.tc("ngModel",t.objMaster.DepartmentName),o.Fb(7),o.tc("ngModel",t.objMaster.DepartmentShortCode),o.Fb(7),o.Pc(o.yc(8,A)),o.tc("options",t.stlststatus)("ngModel",t.objMaster.Status)("filter",!0),o.Fb(2),o.tc("ngIf",null==t.lstIAccessStr?null:t.lstIAccessStr.includes(t.ActionList.ReadWrite.toString()))}}const L=[{path:"",component:(()=>{class t extends r.a{constructor(t,e,i,s,n,r){super(),this.cdRef=t,this.router=e,this._MasterServices=i,this._ConstantServices=s,this._UtilityService=n,this.sanitizer=r,this.UOMMode=null,this.objMaster={},this.stlststatus=[],this.ActionList=c.a,this.lstIAccess=[],this.lstIAccessStr=[],this.stlststatus=[{name:"Active",code:1},{name:"Inactive",code:0}],this.getPageLevelAccess()}getPageLevelAccess(){var t,e,i=this.router.url,s=JSON.parse(localStorage.getItem("UerRoleAccess"))||[];(null==s?void 0:s.find(t=>t.MenuItemURL===i))&&(this.lstIAccess=null===(t=s.find(t=>t.MenuItemURL===i))||void 0===t?void 0:t.ActionIAccess,(null===(e=this.lstIAccess)||void 0===e?void 0:e.length)>0&&this.lstIAccess.map(t=>{this.lstIAccessStr.push(t.ActionId.toString())}))}ngOnInit(){this._ConstantServices.ActiveMenuName="Department Master",this.cdRef.detectChanges(),this.LoadDepartmentList()}LoadDepartmentList(){this._UtilityService.showSpinner(),this.unsubscribe.add=this._MasterServices.GetDepartmentMaster(!1).subscribe(t=>{if(this._UtilityService.hideSpinner(),this.cdRef.detectChanges(),1==t.actionResult.success){var e=JSON.parse(t.actionResult.result);this.lstMaster=e=e||[],this.cdRef.detectChanges()}else this.lstMaster=null},t=>{this._UtilityService.hideSpinner(),this._UtilityService.showErrorAlert(t.message)})}AddNewDepartmentType(){this.ResetModel(),this.UOMMode="Add",this.cdRef.detectChanges(),this.myForm.resetForm()}ResetModel(){this.objMaster={},this.objMaster.Status=1}LoadDepartmentMasterById(t){this._UtilityService.showSpinner(),this.UOMMode="Edit",this.unsubscribe.add=this._MasterServices.GetDepartmentMasterById(t).subscribe(t=>{if(this._UtilityService.hideSpinner(),this.cdRef.detectChanges(),1==t.actionResult.success){var e=JSON.parse(t.actionResult.result);this.objMaster=e=e||[],this.cdRef.detectChanges()}},t=>{this._UtilityService.hideSpinner(),this._UtilityService.showErrorAlert(t.message)})}Save(){this._UtilityService.showSpinner(),this.objMaster.CreatedBy=localStorage.getItem("userId"),this.objMaster.ModifiedBy=localStorage.getItem("userId"),this.unsubscribe.add=this._MasterServices.AddUpdateDepartmentMaster(this.objMaster).subscribe(t=>{this._UtilityService.hideSpinner(),1==t.actionResult.success?(this._UtilityService.showSuccessAlert(t.actionResult.errMsg),this.LoadDepartmentList(),this.UOMMode=null):this._UtilityService.showWarningAlert(t.actionResult.errMsg)},t=>{this._UtilityService.hideSpinner(),this._UtilityService.showErrorAlert(t.message)})}CloseModal(){this.UOMMode=null}exportToItemExcel(){this._MasterServices.downloadReport({reportname:"department",filename:"department"})}}return t.\u0275fac=function(e){return new(e||t)(o.Sb(o.h),o.Sb(n.i),o.Sb(l.a),o.Sb(c.f),o.Sb(a.a),o.Sb(b.b))},t.\u0275cmp=o.Mb({type:t,selectors:[["app-department-master"]],viewQuery:function(t,e){if(1&t&&o.cd(S,1),2&t){let t;o.Hc(t=o.jc())&&(e.myForm=t.first)}},features:[o.Cb],decls:2,vars:2,consts:[["class","row mt25",4,"ngIf"],[1,"row","mt25"],[1,"col-md-12"],[1,"card"],[1,"card-body"],["responsiveLayout","scroll","styleClass","p-datatable-striped","scrollHeight","calc(100vh - 165px)",3,"value","rowHover","globalFilterFields","scrollable"],["dt",""],["pTemplate","caption"],["pTemplate","emptymessage"],["pTemplate","header"],["pTemplate","body"],[1,"p-d-flex"],["pButton","","title","New","label","Add New","class","p-button-outlined","icon","pi pi-plus",3,"click",4,"ngIf"],[1,"p-ml-auto"],["pButton","","title","Export Data","label"," ","class","p-button-outlined mr-2","icon","pi pi-download",3,"click",4,"ngIf"],[1,"p-input-icon-left"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search...",3,"input"],["pButton","","title","New","label","Add New","icon","pi pi-plus",1,"p-button-outlined",3,"click"],["pButton","","title","Export Data","label"," ","icon","pi pi-download",1,"p-button-outlined","mr-2",3,"click"],["matTooltip","View/Edit",3,"click"],["src","./assets/custom-icons/view.svg",1,"custom-ico","mr4",2,"width","24px !important"],[1,"col"],["myForm","ngForm"],[1,"row"],[1,"col-md-4"],[1,"form-group"],[1,"required"],["type","text","required","","name","txtDepartmentName",1,"form-control",3,"ngModel","ngModelChange"],["type","text","required","","name","txtDepartmentShortCode",1,"form-control",3,"ngModel","ngModelChange"],["required","true","name","ddlStatus","optionLabel","name","optionValue","code","placeholder","-Select-",3,"options","ngModel","filter","ngModelChange"],[1,"row","justify-content-center"],["type","button","class","btn btn-new-primary mr-2",3,"disabled","click",4,"ngIf"],[1,"btn","btn-new-secondary",3,"click"],["type","button",1,"btn","btn-new-primary","mr-2",3,"disabled","click"]],template:function(t,e){1&t&&(o.Sc(0,U,10,5,"div",0),o.Sc(1,C,32,9,"div",0)),2&t&&(o.tc("ngIf",null==e.UOMMode),o.Fb(1),o.tc("ngIf",null!=e.UOMMode))},directives:[s.p,d.c,u.i,p.a,m.b,h.z,h.p,h.q,h.b,h.w,h.o,h.r,f.a],styles:[""]}),t.\u0275prov=o.Ob({token:t,factory:t.\u0275fac}),t})()}];let D=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.Qb({type:t}),t.\u0275inj=o.Pb({imports:[[n.l.forChild(L)],n.l]}),t})();var F=i("Q4Mo");let N=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.Qb({type:t}),t.\u0275inj=o.Pb({imports:[[s.c,D,h.i,h.v,d.f,m.c,F.b,f.b,p.b]]}),t})()}}]);