(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{"4boh":function(e,t,n){"use strict";n.r(t),n.d(t,"MenuItemMasterModule",function(){return V});var i=n("ofXK"),s=n("tyNb"),r=n("CwUn"),c=n("Nach"),l=n("fXoL"),u=n("dcBc"),o=n("NLkC"),a=n("rEr+"),d=n("7zfz"),b=n("7kUa"),M=n("jIHw"),m=n("3Pt+"),h=n("lVkt"),p=n("arFO");const I=["myForm"],v=["dt"],f=["filtr"];function g(e,t){if(1&e){const e=l.Zb();l.Yb(0,"button",20),l.ic("click",function(){return l.Lc(e),l.mc(3).AddNewMenuItemType()}),l.Xb()}}function S(e,t){if(1&e){const e=l.Zb();l.Yb(0,"button",21),l.ic("click",function(){return l.Lc(e),l.mc(3).exportToItemExcel()}),l.Xb()}}function y(e,t){if(1&e){const e=l.Zb();l.Yb(0,"div",11),l.Yb(1,"span",12),l.Sc(2,g,1,0,"button",13),l.Uc(3),l.Xb(),l.Yb(4,"span",14),l.Sc(5,S,1,0,"button",15),l.Yb(6,"span",16),l.Tb(7,"i",17),l.Yb(8,"input",18,19),l.ic("input",function(t){return l.Lc(e),l.mc(),l.Ic(5).filterGlobal(t.target.value,"contains")}),l.Xb(),l.Xb(),l.Xb(),l.Xb()}if(2&e){const e=l.mc(2);l.Fb(2),l.tc("ngIf",null==e.lstIAccessStr?null:e.lstIAccessStr.includes(e.ActionList.ReadWrite.toString())),l.Fb(1),l.Wc(" ",(null==e.lstMenuItemMaster?null:e.lstMenuItemMaster.length)>0?"Total Records: "+e.filteredValuesLength:""," "),l.Fb(2),l.tc("ngIf",null==e.lstIAccessStr?null:e.lstIAccessStr.includes(e.ActionList.Download.toString()))}}function U(e,t){if(1&e&&(l.Yb(0,"tr"),l.Yb(1,"td"),l.Uc(2," No records found "),l.Xb(),l.Xb()),2&e){const e=t.$implicit;l.Fb(1),l.Gb("colspan",null==e?null:e.length)}}function Y(e,t){1&e&&(l.Yb(0,"tr"),l.Yb(1,"th"),l.Uc(2,"Module Name"),l.Xb(),l.Yb(3,"th"),l.Uc(4,"Menu Name"),l.Xb(),l.Yb(5,"th"),l.Uc(6,"Menu URL"),l.Xb(),l.Yb(7,"th"),l.Uc(8,"Parent Menu"),l.Xb(),l.Yb(9,"th"),l.Uc(10,"Order No."),l.Xb(),l.Yb(11,"th"),l.Uc(12,"Status"),l.Xb(),l.Yb(13,"th"),l.Uc(14,"Action"),l.Xb(),l.Xb())}function X(e,t){if(1&e){const e=l.Zb();l.Yb(0,"tr"),l.Yb(1,"td"),l.Uc(2),l.Xb(),l.Yb(3,"td"),l.Uc(4),l.Xb(),l.Yb(5,"td"),l.Uc(6),l.Xb(),l.Yb(7,"td"),l.Uc(8),l.Xb(),l.Yb(9,"td"),l.Uc(10),l.Xb(),l.Yb(11,"td"),l.Uc(12),l.Xb(),l.Yb(13,"td"),l.Yb(14,"a",22),l.ic("click",function(){l.Lc(e);const n=t.$implicit;return l.mc(2).LoadMenuItemMasterById(n.MenuItemId)}),l.Tb(15,"img",23),l.Xb(),l.Xb(),l.Xb()}if(2&e){const e=t.$implicit;l.Fb(2),l.Vc(e.ModuleName),l.Fb(2),l.Vc(e.MenuItemName),l.Fb(2),l.Vc(e.MenuItemURL),l.Fb(2),l.Vc(e.ParentMenuName),l.Fb(2),l.Vc(e.MenuOrder),l.Fb(2),l.Vc(1==e.Status?"Active":"Inactive")}}const L=function(){return["MenuItemName","MenuItemURL","ParentMenuName","ModuleName"]};function w(e,t){if(1&e){const e=l.Zb();l.Yb(0,"div",1),l.Yb(1,"div",2),l.Yb(2,"div",3),l.Yb(3,"div",4),l.Yb(4,"p-table",5,6),l.ic("onFilter",function(t){l.Lc(e);const n=l.Ic(5);return l.mc().onFilter(t,n)}),l.Sc(6,y,10,3,"ng-template",7),l.Sc(7,U,3,1,"ng-template",8),l.Sc(8,Y,15,0,"ng-template",9),l.Sc(9,X,16,6,"ng-template",10),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Xb()}if(2&e){const e=l.mc();l.Fb(4),l.tc("value",e.lstMenuItemMaster)("rowHover",!0)("globalFilterFields",l.yc(4,L))("scrollable",!0)}}function N(e,t){1&e&&(l.Yb(0,"div"),l.Uc(1,"Menu Name is required."),l.Xb())}function T(e,t){if(1&e&&(l.Yb(0,"div",49),l.Sc(1,N,2,0,"div",50),l.Xb()),2&e){l.mc();const e=l.Ic(21);l.Fb(1),l.tc("ngIf",e.errors.required)}}function A(e,t){1&e&&(l.Yb(0,"div"),l.Uc(1,"Menu Name is required."),l.Xb())}function C(e,t){if(1&e&&(l.Yb(0,"div",49),l.Sc(1,A,2,0,"div",50),l.Xb()),2&e){l.mc();const e=l.Ic(35);l.Fb(1),l.tc("ngIf",e.errors.required)}}function R(e,t){if(1&e){const e=l.Zb();l.Yb(0,"button",51),l.ic("click",function(){return l.Lc(e),l.mc(2).SaveMenuItemMaster()}),l.Uc(1,"Submit"),l.Xb()}if(2&e){l.mc();const e=l.Ic(5);l.tc("disabled",!e.form.valid)}}const F=function(){return{width:"100%"}};function _(e,t){if(1&e){const e=l.Zb();l.Yb(0,"div",1),l.Yb(1,"div",24),l.Yb(2,"div",3),l.Yb(3,"div",4),l.Yb(4,"form",null,25),l.Yb(6,"div",26),l.Yb(7,"div",27),l.Yb(8,"label"),l.Uc(9,"Module Name "),l.Yb(10,"span",28),l.Uc(11,"*"),l.Xb(),l.Xb(),l.Yb(12,"p-multiSelect",29,30),l.ic("ngModelChange",function(t){return l.Lc(e),l.mc().selectedUserType=t}),l.Xb(),l.Xb(),l.Yb(14,"div",27),l.Yb(15,"div",31),l.Yb(16,"label"),l.Uc(17,"Menu Name "),l.Xb(),l.Yb(18,"span",28),l.Uc(19,"*"),l.Xb(),l.Yb(20,"input",32,33),l.ic("ngModelChange",function(t){return l.Lc(e),l.mc().MenuItemMaster.MenuItemName=t}),l.Xb(),l.Sc(22,T,2,1,"div",34),l.Xb(),l.Xb(),l.Yb(23,"div",27),l.Yb(24,"div",31),l.Yb(25,"label"),l.Uc(26,"Menu URL"),l.Xb(),l.Yb(27,"input",35),l.ic("ngModelChange",function(t){return l.Lc(e),l.mc().MenuItemMaster.MenuItemURL=t}),l.Xb(),l.Xb(),l.Xb(),l.Yb(28,"div",27),l.Yb(29,"div",31),l.Yb(30,"label"),l.Uc(31,"SubMenu"),l.Xb(),l.Yb(32,"span",28),l.Uc(33,"*"),l.Xb(),l.Yb(34,"select",36,37),l.ic("ngModelChange",function(t){return l.Lc(e),l.mc().MenuItemMaster.SubMenu=t}),l.Yb(36,"option",38),l.Uc(37,"Y"),l.Xb(),l.Yb(38,"option",39),l.Uc(39,"N"),l.Xb(),l.Xb(),l.Sc(40,C,2,1,"div",34),l.Xb(),l.Xb(),l.Yb(41,"div",27),l.Yb(42,"div",31),l.Yb(43,"label"),l.Uc(44,"Parent Menu"),l.Xb(),l.Yb(45,"p-dropdown",40),l.ic("ngModelChange",function(t){return l.Lc(e),l.mc().MenuItemMaster.ParentMenuId=t}),l.Xb(),l.Xb(),l.Xb(),l.Yb(46,"div",27),l.Yb(47,"div",31),l.Yb(48,"label"),l.Uc(49,"Icon"),l.Xb(),l.Yb(50,"input",41),l.ic("ngModelChange",function(t){return l.Lc(e),l.mc().MenuItemMaster.IconName=t}),l.Xb(),l.Xb(),l.Xb(),l.Yb(51,"div",27),l.Yb(52,"div",31),l.Yb(53,"label"),l.Uc(54,"Order No."),l.Xb(),l.Yb(55,"span",28),l.Uc(56,"*"),l.Xb(),l.Yb(57,"input",42),l.ic("ngModelChange",function(t){return l.Lc(e),l.mc().MenuItemMaster.MenuOrder=t}),l.Xb(),l.Xb(),l.Xb(),l.Yb(58,"div",27),l.Yb(59,"div",31),l.Yb(60,"label"),l.Uc(61,"Status"),l.Xb(),l.Yb(62,"span",28),l.Uc(63,"*"),l.Xb(),l.Yb(64,"select",43),l.ic("ngModelChange",function(t){return l.Lc(e),l.mc().MenuItemMaster.Status=t}),l.Yb(65,"option",44),l.Uc(66,"Active"),l.Xb(),l.Yb(67,"option",45),l.Uc(68,"Inactive"),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Yb(69,"div",46),l.Sc(70,R,2,1,"button",47),l.Yb(71,"button",48),l.ic("click",function(){return l.Lc(e),l.mc().CloseModal()}),l.Uc(72,"Close"),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Xb()}if(2&e){const e=l.Ic(21),t=l.Ic(35),n=l.mc();l.Fb(12),l.Pc(l.yc(20,F)),l.tc("required",!0)("options",n.lstUserTypeMaster)("ngModel",n.selectedUserType),l.Fb(8),l.tc("ngModel",n.MenuItemMaster.MenuItemName),l.Fb(2),l.tc("ngIf",e.errors&&(e.touched||e.dirty)),l.Fb(5),l.tc("ngModel",n.MenuItemMaster.MenuItemURL),l.Fb(7),l.tc("ngModel",n.MenuItemMaster.SubMenu),l.Fb(6),l.tc("ngIf",t.errors&&(t.touched||t.dirty)),l.Fb(5),l.Pc(l.yc(21,F)),l.tc("options",n.lstParentMenuItemMaster)("ngModel",n.MenuItemMaster.ParentMenuId)("disabled","Y"!=n.MenuItemMaster.SubMenu)("filter",!0),l.Fb(5),l.tc("ngModel",n.MenuItemMaster.IconName),l.Fb(7),l.tc("ngModel",n.MenuItemMaster.MenuOrder),l.Fb(7),l.tc("ngModel",n.MenuItemMaster.Status),l.Fb(6),l.tc("ngIf",null==n.lstIAccessStr?null:n.lstIAccessStr.includes(n.ActionList.ReadWrite.toString()))}}const P=[{path:"",component:(()=>{class e extends r.a{constructor(e,t,n,i,s){super(),this.cdRef=e,this.router=t,this._ConstantServices=n,this._MasterServices=i,this._UtilityService=s,this.userTypes=c.s,this.UserTypeCurre=localStorage.getItem("userTypeId"),this.MenuItemMode=null,this.MenuItemMasterByModule=[],this.lstMenuItemMaster=[],this.lstParentMenuItemMaster=[],this.lstUserTypeMaster=[],this.MenuItemMaster={},this.filteredValuesLength=0,this.selectedUserType=[],this.ActionList=c.a,this.lstIAccess=[],this.lstIAccessStr=[],this._ConstantServices.ActiveMenuName="Menu Master",this.getPageLevelAccess()}getPageLevelAccess(){var e,t,n=this.router.url,i=JSON.parse(localStorage.getItem("UerRoleAccess"))||[];(null==i?void 0:i.find(e=>e.MenuItemURL===n))&&(this.lstIAccess=null===(e=i.find(e=>e.MenuItemURL===n))||void 0===e?void 0:e.ActionIAccess,(null===(t=this.lstIAccess)||void 0===t?void 0:t.length)>0&&this.lstIAccess.map(e=>{this.lstIAccessStr.push(e.ActionId.toString())}))}ngOnInit(){this.LoadMenuItemList(),this.LoadUserTypeMasterList(),console.log(this.MenuItemMaster.ModuleId)}LoadMenuItemList(){this._UtilityService.showSpinner(),this.unsubscribe.add=this._MasterServices.GetMenuItemMaster(this.UserTypeCurre==this.userTypes.SuperAdmin?"":this.UserTypeCurre,!1).subscribe(e=>{var t;if(this._UtilityService.hideSpinner(),this.cdRef.detectChanges(),1==e.actionResult.success){var n=JSON.parse(e.actionResult.result);this.lstMenuItemMaster=n=n||[],this.lstParentMenuItemMaster=n,void 0!==this.filtr&&(this.filtr.nativeElement.value="",this.dataTable.reset(),this.filteredValuesLength=null===(t=this.lstMenuItemMaster)||void 0===t?void 0:t.length),this.cdRef.detectChanges()}else this.lstMenuItemMaster=[],this.lstParentMenuItemMaster=[]},e=>{this._UtilityService.hideSpinner(),this._UtilityService.showErrorAlert(e.message)})}LoadUserTypeMasterList(){this.selectedUserType=[],this._UtilityService.showSpinner(),this.unsubscribe.add=this._MasterServices.GetUserTypeMaster(this.UserTypeCurre).subscribe(e=>{if(this._UtilityService.hideSpinner(),this.cdRef.detectChanges(),1==e.actionResult.success){var t=JSON.parse(e.actionResult.result);this.lstUserTypeMaster=t=t||[],this.cdRef.detectChanges()}else this.lstUserTypeMaster=[]},e=>{this._UtilityService.hideSpinner(),this._UtilityService.showErrorAlert(e.message)})}LoadMenuItemMasterByModuleId(){this._UtilityService.showSpinner(),this.unsubscribe.add=this._MasterServices.GetMenuItemMasterByModuleId(this.MenuItemMaster.ModuleId).subscribe(e=>{if(this._UtilityService.hideSpinner(),this.cdRef.detectChanges(),1==e.actionResult.success){var t=JSON.parse(e.actionResult.result);this.MenuItemMasterByModule=t=t||[],this.cdRef.detectChanges()}else this.MenuItemMasterByModule=[]},e=>{this._UtilityService.hideSpinner(),this._UtilityService.showErrorAlert(e.message)})}LoadMenuItemMasterById(e){this._UtilityService.showSpinner(),this.MenuItemMode="Edit",this.unsubscribe.add=this._MasterServices.GetMenuItemMasterById(e).subscribe(t=>{var n,i;if(this._UtilityService.hideSpinner(),this.cdRef.detectChanges(),1==t.actionResult.success){var s=JSON.parse(t.actionResult.result);if(this.MenuItemMaster=s=s||[],null!=t.actionResult.result2&&null!=t.actionResult.result2&&(null===(n=t.actionResult.result2)||void 0===n?void 0:n.length)>0){var r=JSON.parse(t.actionResult.result2);r=r||[];for(var c=[],l=0;l<(null==r?void 0:r.length);l++)c.push(null===(i=r[l])||void 0===i?void 0:i.UserTypeId);this.selectedUserType=c}this.lstParentMenuItemMaster=JSON.parse(JSON.stringify(this.lstMenuItemMaster.filter(t=>t.MenuItemId!=e)))}},e=>{this._UtilityService.hideSpinner(),this._UtilityService.showErrorAlert(e.message)})}SaveMenuItemMaster(){var e,t,n,i,s;if("Y"!=(null===(e=this.MenuItemMaster)||void 0===e?void 0:e.SubMenu)||null!=(null===(t=this.MenuItemMaster)||void 0===t?void 0:t.ParentMenuId)&&null!=(null===(n=this.MenuItemMaster)||void 0===n?void 0:n.ParentMenuId)&&""!=(null===(i=this.MenuItemMaster)||void 0===i?void 0:i.ParentMenuId)){for(var r=[],c=0;c<(null===(s=this.selectedUserType)||void 0===s?void 0:s.length);c++)r.push({id:this.selectedUserType[c]});this.MenuItemMaster.lstUserTypeId=r,"N"==this.MenuItemMaster.SubMenu&&(this.MenuItemMaster.ParentMenuId=null),this._UtilityService.showSpinner(),this.unsubscribe.add=this._MasterServices.AddUpdateMenuItemMaster(this.MenuItemMaster).subscribe(e=>{this._UtilityService.hideSpinner(),1==e.actionResult.success?(this._UtilityService.showSuccessAlert(e.actionResult.errMsg),this.LoadMenuItemList(),this.MenuItemMode=null):this._UtilityService.showWarningAlert(e.actionResult.errMsg)},e=>{this._UtilityService.hideSpinner(),this.cdRef.detectChanges()})}else this._UtilityService.showWarningAlert("Please select parent menu")}AddNewMenuItemType(){this.ResetModel(),this.MenuItemMode="Add",this.cdRef.detectChanges(),this.myForm.resetForm()}ResetModel(){this.MenuItemMaster={},this.MenuItemMaster.Status=1}CloseModal(){this.MenuItemMode=null}onFilter(e,t){this.filteredValuesLength=e.filteredValue.length}exportToItemExcel(){let e={reportname:"MenuItem",filename:"MenuItem"};e.createdBy=this.UserTypeCurre==this.userTypes.SuperAdmin?"":this.UserTypeCurre,this._MasterServices.downloadReport(e)}}return e.\u0275fac=function(t){return new(t||e)(l.Sb(l.h),l.Sb(s.i),l.Sb(c.f),l.Sb(u.a),l.Sb(o.a))},e.\u0275cmp=l.Mb({type:e,selectors:[["app-menu-item-master"]],viewQuery:function(e,t){if(1&e&&(l.cd(I,1),l.cd(v,1),l.cd(f,1)),2&e){let e;l.Hc(e=l.jc())&&(t.myForm=e.first),l.Hc(e=l.jc())&&(t.dataTable=e.first),l.Hc(e=l.jc())&&(t.filtr=e.first)}},features:[l.Cb],decls:2,vars:2,consts:[["class","row mt25",4,"ngIf"],[1,"row","mt25"],[1,"col-md-12"],[1,"card"],[1,"card-body"],["responsiveLayout","scroll","styleClass","p-datatable-striped","scrollHeight","calc(100vh - 165px)",3,"value","rowHover","globalFilterFields","scrollable","onFilter"],["dt",""],["pTemplate","caption"],["pTemplate","emptymessage"],["pTemplate","header"],["pTemplate","body"],[1,"p-d-flex"],[1,"p-ml-left"],["pButton","","title","New","label","Add New","class","p-button-outlined mr-2","icon","pi pi-plus",3,"click",4,"ngIf"],[1,"p-ml-auto"],["pButton","","title","Export Data","label"," ","class","p-button-outlined mr-2","icon","pi pi-download",3,"click",4,"ngIf"],[1,"p-input-icon-left"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search...",3,"input"],["filtr",""],["pButton","","title","New","label","Add New","icon","pi pi-plus",1,"p-button-outlined","mr-2",3,"click"],["pButton","","title","Export Data","label"," ","icon","pi pi-download",1,"p-button-outlined","mr-2",3,"click"],["matTooltip","View/Edit",3,"click"],["src","./assets/custom-icons/view.svg",1,"custom-ico","mr4",2,"width","24px !important"],[1,"col"],["myForm","ngForm"],[1,"row"],[1,"col-md-4"],[1,"required"],["name","ddlUserType","display","chip","optionLabel","UserTypeName","optionValue","UserTypeId","placeholder","Please Select User Type",3,"required","options","ngModel","ngModelChange"],["usertyperef","ngModel"],[1,"form-group"],["type","text","required","","name","MenuItemName",1,"form-control",3,"ngModel","ngModelChange"],["menuname","ngModel"],["class","alert alert-danger",4,"ngIf"],["type","text","name","MenuItemURL",1,"form-control",3,"ngModel","ngModelChange"],["name","ddlSubMenu","required","",1,"form-control",3,"ngModel","ngModelChange"],["submenu","ngModel"],["value","Y"],["value","N"],["name","ddlParentMenuName","optionLabel","MenuItemName","optionValue","MenuItemId","placeholder","Please Select Parent Menu",3,"options","ngModel","disabled","filter","ngModelChange"],["type","text","name","IconName",1,"form-control",3,"ngModel","ngModelChange"],["oninput","if(this.value.length>this.maxLength) this.value=this.value.slice(0,this.maxLength);","type","number","name","MenuOrder","required","","maxlength"," 3",1,"form-control",3,"ngModel","ngModelChange"],["name","ddlStatus","required","",1,"form-control",3,"ngModel","ngModelChange"],["value","1"],["value","0"],[1,"row","justify-content-center"],["type","button","class","btn btn-new-primary mr-2",3,"disabled","click",4,"ngIf"],[1,"btn","btn-new-secondary",3,"click"],[1,"alert","alert-danger"],[4,"ngIf"],["type","button",1,"btn","btn-new-primary","mr-2",3,"disabled","click"]],template:function(e,t){1&e&&(l.Sc(0,w,10,5,"div",0),l.Sc(1,_,73,22,"div",0)),2&e&&(l.tc("ngIf",null==t.MenuItemMode),l.Fb(1),l.tc("ngIf",null!=t.MenuItemMode))},directives:[i.p,a.c,d.i,b.a,M.b,m.z,m.p,m.q,h.a,m.w,m.o,m.r,m.b,m.x,m.s,m.A,p.a,m.t,m.j],styles:[""]}),e})()}];let x=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.Qb({type:e}),e.\u0275inj=l.Pb({imports:[[s.l.forChild(P)],s.l]}),e})();var k=n("Q4Mo"),O=n("Ks7X");let V=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.Qb({type:e}),e.\u0275inj=l.Pb({imports:[[i.c,x,m.i,m.v,a.f,M.c,k.b,p.b,b.b,O.b,h.b]]}),e})()}}]);