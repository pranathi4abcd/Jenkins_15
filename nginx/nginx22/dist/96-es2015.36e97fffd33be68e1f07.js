(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{hmVl:function(e,t,i){"use strict";i.r(t),i.d(t,"PrescriptionTemplateMasterModule",function(){return C});var s=i("ofXK"),r=i("tyNb"),c=i("Nach"),n=i("CwUn"),l=i("fXoL"),o=i("dcBc"),a=i("NLkC"),p=i("rEr+"),d=i("7zfz"),b=i("7kUa"),m=i("jIHw"),u=i("3Pt+"),h=i("arFO");const T=["myForm"];function v(e,t){if(1&e){const e=l.Zb();l.Yb(0,"button",21),l.ic("click",function(){return l.Lc(e),l.mc(3).AddNew()}),l.Xb()}}function f(e,t){if(1&e){const e=l.Zb();l.Yb(0,"div",12),l.Yb(1,"span",13),l.Uc(2),l.Xb(),l.Sc(3,v,1,0,"button",14),l.Yb(4,"span",15),l.Yb(5,"a",16),l.ic("click",function(){return l.Lc(e),l.mc(2).ngOnChanges()}),l.Tb(6,"img",17),l.Xb(),l.Yb(7,"span",18),l.Tb(8,"i",19),l.Yb(9,"input",20),l.ic("input",function(t){return l.Lc(e),l.mc(),l.Ic(5).filterGlobal(t.target.value,"contains")}),l.Xb(),l.Xb(),l.Xb(),l.Xb()}if(2&e){const e=l.mc(2);l.Fb(2),l.Wc(" ",(null==e.lstPrescriptionTemplateMaster?null:e.lstPrescriptionTemplateMaster.length)>0?"Total Records: "+(null==e.lstPrescriptionTemplateMaster?null:e.lstPrescriptionTemplateMaster.length):""," "),l.Fb(1),l.tc("ngIf",null==e.lstIAccessStr?null:e.lstIAccessStr.includes(e.ActionList.ReadWrite.toString()))}}function M(e,t){1&e&&(l.Yb(0,"tr"),l.Yb(1,"td"),l.Uc(2," No records found "),l.Xb(),l.Xb()),2&e&&(l.Fb(1),l.Gb("colspan",6))}function g(e,t){1&e&&(l.Yb(0,"tr"),l.Yb(1,"th"),l.Uc(2,"S.No"),l.Xb(),l.Yb(3,"th"),l.Uc(4,"Type"),l.Xb(),l.Yb(5,"th"),l.Uc(6,"Time Details"),l.Xb(),l.Yb(7,"th"),l.Uc(8,"Item"),l.Xb(),l.Yb(9,"th"),l.Uc(10,"Status"),l.Xb(),l.Yb(11,"th"),l.Uc(12,"Action"),l.Xb(),l.Xb())}function S(e,t){if(1&e){const e=l.Zb();l.Yb(0,"tr"),l.Yb(1,"td"),l.Uc(2),l.Xb(),l.Yb(3,"td"),l.Uc(4),l.Xb(),l.Yb(5,"td"),l.Uc(6),l.Xb(),l.Yb(7,"td"),l.Uc(8),l.Xb(),l.Yb(9,"td"),l.Uc(10),l.Xb(),l.Yb(11,"td"),l.Yb(12,"a",22),l.ic("click",function(){l.Lc(e);const i=t.$implicit;return l.mc(2).LoadPrescriptionTemplateMasterById(i.PrescriptionTemplateMasterId)}),l.Tb(13,"img",23),l.Xb(),l.Xb(),l.Xb()}if(2&e){const e=t.$implicit,i=t.rowIndex;l.Fb(2),l.Vc(i+1),l.Fb(2),l.Vc(e.TimeType),l.Fb(2),l.Vc(e.TimeDetails),l.Fb(2),l.Vc(e.Item),l.Fb(2),l.Vc(1==e.Status?"Active":"Inactive")}}const y=function(){return["TimeDetails","TimeType","Sequence","Item"]};function P(e,t){if(1&e&&(l.Yb(0,"div",2),l.Yb(1,"div",3),l.Yb(2,"div",4),l.Yb(3,"div",5),l.Yb(4,"p-table",6,7),l.Sc(6,f,10,2,"ng-template",8),l.Sc(7,M,3,1,"ng-template",9),l.Sc(8,g,13,0,"ng-template",10),l.Sc(9,S,14,5,"ng-template",11),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Xb()),2&e){const e=l.mc();l.Fb(4),l.tc("value",e.lstPrescriptionTemplateMaster)("rowHover",!0)("globalFilterFields",l.yc(4,y))("scrollable",!0)}}function X(e,t){if(1&e){const e=l.Zb();l.Yb(0,"button",38),l.ic("click",function(){return l.Lc(e),l.mc(2).SavePrescriptionTemplateMaster()}),l.Uc(1,"Save"),l.Xb()}if(2&e){l.mc();const e=l.Ic(5);l.tc("disabled",!e.form.valid)}}const I=function(){return{width:"100%"}};function Y(e,t){if(1&e){const e=l.Zb();l.Yb(0,"div",24),l.Yb(1,"div",25),l.Yb(2,"div",4),l.Yb(3,"div",5),l.Yb(4,"form",null,26),l.Yb(6,"div",27),l.Yb(7,"div",28),l.Yb(8,"div",29),l.Yb(9,"label"),l.Uc(10,"Type"),l.Xb(),l.Yb(11,"span",30),l.Uc(12,"*"),l.Xb(),l.Yb(13,"p-dropdown",31),l.ic("ngModelChange",function(t){return l.Lc(e),l.mc().PrescriptionTemplateMaster.TimeType=t})("onChange",function(){return l.Lc(e),l.mc().OnChangeTimeType()}),l.Xb(),l.Xb(),l.Xb(),l.Yb(14,"div",28),l.Yb(15,"div",29),l.Yb(16,"label"),l.Uc(17,"Time Details"),l.Xb(),l.Yb(18,"span",30),l.Uc(19,"*"),l.Xb(),l.Yb(20,"p-dropdown",32),l.ic("ngModelChange",function(t){return l.Lc(e),l.mc().PrescriptionTemplateMaster.TimeId=t}),l.Xb(),l.Xb(),l.Xb(),l.Yb(21,"div",28),l.Yb(22,"div",29),l.Yb(23,"label"),l.Uc(24,"Item"),l.Xb(),l.Yb(25,"span",30),l.Uc(26,"*"),l.Xb(),l.Yb(27,"p-dropdown",33),l.ic("ngModelChange",function(t){return l.Lc(e),l.mc().PrescriptionTemplateMaster.MCODE=t}),l.Xb(),l.Xb(),l.Xb(),l.Yb(28,"div",28),l.Yb(29,"div",29),l.Yb(30,"label"),l.Uc(31,"Status"),l.Xb(),l.Yb(32,"span",30),l.Uc(33,"*"),l.Xb(),l.Yb(34,"p-dropdown",34),l.ic("ngModelChange",function(t){return l.Lc(e),l.mc().PrescriptionTemplateMaster.Status=t}),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Yb(35,"div",35),l.Sc(36,X,2,1,"button",36),l.Yb(37,"button",37),l.ic("click",function(){return l.Lc(e),l.mc().CloseModal()}),l.Uc(38,"Close"),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Xb()}if(2&e){const e=l.mc();l.Fb(13),l.Pc(l.yc(21,I)),l.tc("options",e.stlsttimetype)("ngModel",e.PrescriptionTemplateMaster.TimeType)("filter",!0),l.Fb(7),l.Pc(l.yc(22,I)),l.tc("options",e.lstPrescriptionTimeMaster)("ngModel",e.PrescriptionTemplateMaster.TimeId)("filter",!0),l.Fb(7),l.Pc(l.yc(23,I)),l.tc("options",e.lstPrescriptionItem)("ngModel",e.PrescriptionTemplateMaster.MCODE)("filter",!0),l.Fb(7),l.Pc(l.yc(24,I)),l.tc("options",e.stlststatus)("ngModel",e.PrescriptionTemplateMaster.Status)("filter",!0),l.Fb(2),l.tc("ngIf",null==e.lstIAccessStr?null:e.lstIAccessStr.includes(e.ActionList.ReadWrite.toString()))}}const U=[{path:"",component:(()=>{class e extends n.a{constructor(e,t,i,s,r){super(),this.cdRef=e,this.router=t,this._MasterServices=i,this._ConstantServices=s,this._UtilityService=r,this.dtOptions={},this.Mode=null,this.PrescriptionTemplateMaster={},this.lstPrescriptionTimeMaster=[],this.lstPrescriptionItem=[],this.stlsttimetype=[],this.stlststatus=[],this.ActionList=c.a,this.lstIAccess=[],this.lstIAccessStr=[],this.stlsttimetype=[{name:"Treatment",code:"Treatment"},{name:"Diet",code:"Diet"}],this.stlststatus=[{name:"Active",code:1},{name:"Inactive",code:0}],this.getPageLevelAccess()}getPageLevelAccess(){var e,t,i=this.router.url,s=JSON.parse(localStorage.getItem("UerRoleAccess"))||[];(null==s?void 0:s.find(e=>e.MenuItemURL===i))&&(this.lstIAccess=null===(e=s.find(e=>e.MenuItemURL===i))||void 0===e?void 0:e.ActionIAccess,(null===(t=this.lstIAccess)||void 0===t?void 0:t.length)>0&&this.lstIAccess.map(e=>{this.lstIAccessStr.push(e.ActionId.toString())}))}ngOnInit(){this._ConstantServices.ActiveMenuName="Prescription Template Master",this.cdRef.detectChanges(),this.GetPrescriptionTemplateMasterList()}ngOnChanges(){this.GetPrescriptionTemplateMasterList()}OnChangeTimeType(){var e,t,i;null!=(null===(e=this.PrescriptionTemplateMaster)||void 0===e?void 0:e.TimeType)&&null!=(null===(t=this.PrescriptionTemplateMaster)||void 0===t?void 0:t.TimeType)&&""!=(null===(i=this.PrescriptionTemplateMaster)||void 0===i?void 0:i.TimeType)?(this.GetPrescriptionTimeList(),this.GetPrescriptionTemplateItemByType()):(this.lstPrescriptionTimeMaster=[],this.lstPrescriptionItem=[])}GetPrescriptionTimeList(){var e;this._UtilityService.showSpinner(),this.unsubscribe.add=this._MasterServices.GetPrescriptionTimeMasterActive(null===(e=this.PrescriptionTemplateMaster)||void 0===e?void 0:e.TimeType).subscribe(e=>{if(this._UtilityService.hideSpinner(),this.cdRef.detectChanges(),1==e.actionResult.success){var t=JSON.parse(e.actionResult.result);this.lstPrescriptionTimeMaster=t=t||[],this.cdRef.detectChanges()}else this.lstPrescriptionTimeMaster=[],this.cdRef.detectChanges()},e=>{this._UtilityService.hideSpinner(),this._UtilityService.showErrorAlert(e.message)})}GetPrescriptionTemplateItemByType(){var e;this._UtilityService.showSpinner(),this.unsubscribe.add=this._MasterServices.GetPrescriptionTemplateItemByType(null===(e=this.PrescriptionTemplateMaster)||void 0===e?void 0:e.TimeType).subscribe(e=>{if(this._UtilityService.hideSpinner(),this.cdRef.detectChanges(),1==e.actionResult.success){var t=JSON.parse(e.actionResult.result);this.lstPrescriptionItem=t=t||[],this.cdRef.detectChanges()}else this.lstPrescriptionItem=[],this.cdRef.detectChanges()},e=>{this._UtilityService.hideSpinner(),this._UtilityService.showErrorAlert(e.message)})}GetPrescriptionTemplateMasterList(){this._UtilityService.showSpinner(),this.unsubscribe.add=this._MasterServices.GetPrescriptionTemplateMaster().subscribe(e=>{if(this._UtilityService.hideSpinner(),this.cdRef.detectChanges(),1==e.actionResult.success){var t=JSON.parse(e.actionResult.result);this.lstPrescriptionTemplateMaster=t=t||[],this.cdRef.detectChanges()}else this.lstPrescriptionTemplateMaster=[],this.cdRef.detectChanges()},e=>{this._UtilityService.hideSpinner(),this._UtilityService.showErrorAlert(e.message)})}LoadPrescriptionTemplateMasterById(e){this._UtilityService.showSpinner(),this.unsubscribe.add=this._MasterServices.GetPrescriptionTemplateMasterById(e).subscribe(e=>{if(this._UtilityService.hideSpinner(),this.cdRef.detectChanges(),1==e.actionResult.success){var t=JSON.parse(e.actionResult.result);this.PrescriptionTemplateMaster=t=t||[],this.Mode="update",this.OnChangeTimeType(),this.cdRef.detectChanges()}else this.PrescriptionTemplateMaster={}},e=>{this._UtilityService.hideSpinner(),this._UtilityService.showErrorAlert(e.message)})}SavePrescriptionTemplateMaster(){this.PrescriptionTemplateMaster.CreatedBy=localStorage.getItem("userId"),this.PrescriptionTemplateMaster.ModifiedBy=localStorage.getItem("userId"),this._UtilityService.showSpinner(),this.unsubscribe.add=this._MasterServices.AddUpdatePrescriptionTemplateMaster(this.PrescriptionTemplateMaster).subscribe(e=>{this._UtilityService.hideSpinner(),1==e.actionResult.success?(this._UtilityService.showSuccessAlert(e.actionResult.errMsg),this.GetPrescriptionTemplateMasterList(),this.Mode=null):this._UtilityService.showWarningAlert(e.actionResult.errMsg),this.cdRef.detectChanges()},e=>{this._UtilityService.hideSpinner(),this._UtilityService.showErrorAlert(e.message)})}AddNew(){this.ResetModel(),this.Mode="Add",this.cdRef.detectChanges(),this.myForm.resetForm()}ResetModel(){this.lstPrescriptionTimeMaster=[],this.lstPrescriptionItem=[],this.PrescriptionTemplateMaster={},this.PrescriptionTemplateMaster.PrescriptionTemplateMasterId=null,this.PrescriptionTemplateMaster.Status=1}CloseModal(){this.Mode=null}}return e.\u0275fac=function(t){return new(t||e)(l.Sb(l.h),l.Sb(r.i),l.Sb(o.a),l.Sb(c.f),l.Sb(a.a))},e.\u0275cmp=l.Mb({type:e,selectors:[["app-prescription-template-master"]],viewQuery:function(e,t){if(1&e&&l.cd(T,1),2&e){let e;l.Hc(e=l.jc())&&(t.myForm=e.first)}},features:[l.Cb,l.Db],decls:2,vars:2,consts:[["class","row mt25",4,"ngIf"],["class","row mb-8",4,"ngIf"],[1,"row","mt25"],[1,"col-md-12"],[1,"card"],[1,"card-body"],["responsiveLayout","scroll","scrollHeight","500px",3,"value","rowHover","globalFilterFields","scrollable"],["dt",""],["pTemplate","caption"],["pTemplate","emptymessage"],["pTemplate","header"],["pTemplate","body"],[1,"p-d-flex"],[1,"p-ml-left","mr-3"],["pButton","","title","New","label","Add New","class","p-button-outlined","icon","pi pi-plus",3,"click",4,"ngIf"],[1,"p-ml-auto"],["matTooltip","Refresh",3,"click"],["src","./assets/custom-icons/refresh.svg",1,"custom-ico","mr4"],[1,"p-input-icon-left","p-ml-auto"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search...",3,"input"],["pButton","","title","New","label","Add New","icon","pi pi-plus",1,"p-button-outlined",3,"click"],["matTooltip","View/Edit",3,"click"],["src","./assets/custom-icons/view.svg",1,"custom-ico","mr4",2,"width","24px !important"],[1,"row","mb-8"],[1,"col"],["myForm","ngForm"],[1,"row","m-0"],[1,"col-md-4"],[1,"form-group"],[1,"required"],["required","true","name","ddlType","optionLabel","name","optionValue","code","placeholder","Please Select Type",3,"options","ngModel","filter","ngModelChange","onChange"],["required","true","name","ddlTime","optionLabel","TimeDetails","optionValue","TimeId","placeholder","Please Select Time Details",3,"options","ngModel","filter","ngModelChange"],["required","true","name","ddlItem","optionLabel","NAME","optionValue","MCODE","placeholder","Please Select Item",3,"options","ngModel","filter","ngModelChange"],["required","true","name","ddlStatus","optionLabel","name","optionValue","code","placeholder","Please Select Status",3,"options","ngModel","filter","ngModelChange"],[1,"row","justify-content-center"],["type","button","type","button","class","btn btn-new-primary mr-2",3,"disabled","click",4,"ngIf"],[1,"btn","btn-new-secondary",3,"click"],["type","button","type","button",1,"btn","btn-new-primary","mr-2",3,"disabled","click"]],template:function(e,t){1&e&&(l.Sc(0,P,10,5,"div",0),l.Sc(1,Y,39,25,"div",1)),2&e&&(l.tc("ngIf",null==t.Mode),l.Fb(1),l.tc("ngIf",null!=t.Mode))},directives:[s.p,p.c,d.i,b.a,m.b,u.z,u.p,u.q,h.a,u.w,u.o,u.r],styles:[""]}),e})()}];let w=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.Qb({type:e}),e.\u0275inj=l.Pb({imports:[[r.l.forChild(U)],r.l]}),e})(),C=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.Qb({type:e}),e.\u0275inj=l.Pb({imports:[[s.c,w,u.i,p.f,m.c,h.b,b.b]]}),e})()}}]);