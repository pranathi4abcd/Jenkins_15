(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{reGt:function(e,t,i){"use strict";i.r(t),i.d(t,"PrescriptionTimeMasterModule",function(){return x});var s=i("ofXK"),n=i("tyNb"),c=i("XNiG"),l=i("Nach"),r=i("CwUn"),o=i("fXoL"),a=i("dcBc"),b=i("NLkC"),d=i("rEr+"),u=i("7zfz"),h=i("7kUa"),p=i("jIHw"),m=i("3Pt+"),f=i("arFO");const g=["myForm"];function S(e,t){if(1&e){const e=o.Zb();o.Yb(0,"button",21),o.ic("click",function(){return o.Lc(e),o.mc(3).AddNew()}),o.Xb()}}function v(e,t){if(1&e){const e=o.Zb();o.Yb(0,"div",12),o.Yb(1,"span",13),o.Uc(2),o.Xb(),o.Sc(3,S,1,0,"button",14),o.Yb(4,"span",15),o.Yb(5,"a",16),o.ic("click",function(){return o.Lc(e),o.mc(2).GetPrescriptionTimeList()}),o.Tb(6,"img",17),o.Xb(),o.Yb(7,"span",18),o.Tb(8,"i",19),o.Yb(9,"input",20),o.ic("input",function(t){return o.Lc(e),o.mc(),o.Ic(5).filterGlobal(t.target.value,"contains")}),o.Xb(),o.Xb(),o.Xb(),o.Xb()}if(2&e){const e=o.mc(2);o.Fb(2),o.Wc(" ",(null==e.lstMaster?null:e.lstMaster.length)>0?"Total Records: "+(null==e.lstMaster?null:e.lstMaster.length):""," "),o.Fb(1),o.tc("ngIf",null==e.lstIAccessStr?null:e.lstIAccessStr.includes(e.ActionList.ReadWrite.toString()))}}function C(e,t){1&e&&(o.Yb(0,"tr"),o.Yb(1,"td"),o.Uc(2," No records found "),o.Xb(),o.Xb()),2&e&&(o.Fb(1),o.Gb("colspan",6))}function M(e,t){1&e&&(o.Yb(0,"tr"),o.Yb(1,"th"),o.Uc(2,"S.No"),o.Xb(),o.Yb(3,"th"),o.Uc(4,"Type"),o.Xb(),o.Yb(5,"th"),o.Uc(6,"Time Details"),o.Xb(),o.Yb(7,"th"),o.Uc(8,"Other Details"),o.Xb(),o.Yb(9,"th"),o.Uc(10,"Shift"),o.Xb(),o.Yb(11,"th"),o.Uc(12,"Sequence"),o.Xb(),o.Yb(13,"th"),o.Uc(14,"Status"),o.Xb(),o.Yb(15,"th"),o.Uc(16,"Action"),o.Xb(),o.Xb())}function X(e,t){if(1&e){const e=o.Zb();o.Yb(0,"tr"),o.Yb(1,"td"),o.Uc(2),o.Xb(),o.Yb(3,"td"),o.Uc(4),o.Xb(),o.Yb(5,"td"),o.Uc(6),o.Xb(),o.Yb(7,"td"),o.Uc(8),o.Xb(),o.Yb(9,"td"),o.Uc(10),o.Xb(),o.Yb(11,"td"),o.Uc(12),o.Xb(),o.Yb(13,"td"),o.Uc(14),o.Xb(),o.Yb(15,"td"),o.Yb(16,"a",22),o.ic("click",function(){o.Lc(e);const i=t.$implicit;return o.mc(2).LoadPrescriptionTimeDetasilsById(i.TimeId)}),o.Tb(17,"img",23),o.Xb(),o.Xb(),o.Xb()}if(2&e){const e=t.$implicit,i=t.rowIndex;o.Fb(2),o.Vc(i+1),o.Fb(2),o.Vc(e.TimeType),o.Fb(2),o.Vc(e.TimeDetails),o.Fb(2),o.Vc(e.OtherDetails),o.Fb(2),o.Vc(e.Shift),o.Fb(2),o.Vc(e.Sequence),o.Fb(2),o.Vc(1==e.Status?"Active":"Inactive")}}const Y=function(){return["TimeDetails","TimeType","Sequence"]};function w(e,t){if(1&e&&(o.Yb(0,"div",2),o.Yb(1,"div",3),o.Yb(2,"div",4),o.Yb(3,"div",5),o.Yb(4,"p-table",6,7),o.Sc(6,v,10,2,"ng-template",8),o.Sc(7,C,3,1,"ng-template",9),o.Sc(8,M,17,0,"ng-template",10),o.Sc(9,X,18,7,"ng-template",11),o.Xb(),o.Xb(),o.Xb(),o.Xb(),o.Xb()),2&e){const e=o.mc();o.Fb(4),o.tc("value",e.lstMaster)("rowHover",!0)("globalFilterFields",o.yc(4,Y))("scrollable",!0)}}function y(e,t){1&e&&(o.Yb(0,"tr"),o.Yb(1,"th",43),o.Uc(2,"Center"),o.Xb(),o.Yb(3,"th",43),o.Uc(4,"Time Details"),o.Xb(),o.Yb(5,"th",43),o.Uc(6,"Other Details"),o.Xb(),o.Yb(7,"th",44),o.Uc(8,"Action"),o.Xb(),o.Xb())}function D(e,t){if(1&e){const e=o.Zb();o.Yb(0,"a",48),o.ic("click",function(){o.Lc(e);const t=o.mc().rowIndex,i=o.mc(2);return i.RemoveCounterDetails(i.lstCenterDetails[t].Sequence)}),o.Tb(1,"i",52),o.Xb()}}function T(e,t){if(1&e){const e=o.Zb();o.Yb(0,"a",53),o.ic("click",function(){o.Lc(e);const t=o.mc().rowIndex,i=o.mc(2);return i.ResetCounterDetails(i.lstCenterDetails[t].Sequence)}),o.Tb(1,"i",54),o.Xb()}}const I=function(){return{width:"100%"}},U=function(){return{standalone:!0}};function R(e,t){if(1&e){const e=o.Zb();o.Yb(0,"tr"),o.Yb(1,"td",43),o.Yb(2,"p-dropdown",45),o.ic("ngModelChange",function(i){o.Lc(e);const s=t.rowIndex;return o.mc(2).lstCenterDetails[s].ClinicId=i}),o.Xb(),o.Xb(),o.Yb(3,"td",43),o.Yb(4,"input",46),o.ic("ngModelChange",function(i){o.Lc(e);const s=t.rowIndex;return o.mc(2).lstCenterDetails[s].TimeDetails=i}),o.Xb(),o.Xb(),o.Yb(5,"td",43),o.Yb(6,"input",46),o.ic("ngModelChange",function(i){o.Lc(e);const s=t.rowIndex;return o.mc(2).lstCenterDetails[s].OtherDetails=i}),o.Xb(),o.Xb(),o.Yb(7,"td",47),o.Yb(8,"a",48),o.ic("click",function(){return o.Lc(e),o.mc(2).AddCounterDetails()}),o.Tb(9,"i",49),o.Xb(),o.Sc(10,D,2,0,"a",50),o.Sc(11,T,2,0,"a",51),o.Xb(),o.Xb()}if(2&e){const e=t.rowIndex,i=o.mc(2);o.Fb(2),o.Pc(o.yc(13,I)),o.tc("options",i.lstClinicMaster)("ngModel",i.lstCenterDetails[e].ClinicId)("ngModelOptions",o.yc(14,U))("filter",!0)("showClear",!0),o.Fb(2),o.vc("name","TimeDetails_",i.lstCenterDetails[e].Sequence,""),o.tc("ngModel",i.lstCenterDetails[e].TimeDetails),o.Fb(2),o.vc("name","OtherDetails_",i.lstCenterDetails[e].Sequence,""),o.tc("ngModel",i.lstCenterDetails[e].OtherDetails),o.Fb(4),o.tc("ngIf",1!==i.lstCenterDetails[e].Sequence),o.Fb(1),o.tc("ngIf",null!=i.lstCenterDetails[e].CounterName)}}function A(e,t){if(1&e){const e=o.Zb();o.Yb(0,"button",55),o.ic("click",function(){return o.Lc(e),o.mc(2).SavePrescriptionTime()}),o.Uc(1,"Save"),o.Xb()}if(2&e){o.mc();const e=o.Ic(5);o.tc("disabled",!e.form.valid)}}function L(e,t){if(1&e){const e=o.Zb();o.Yb(0,"div",24),o.Yb(1,"div",25),o.Yb(2,"div",4),o.Yb(3,"div",5),o.Yb(4,"form",null,26),o.Yb(6,"div",27),o.Yb(7,"div",28),o.Yb(8,"div",29),o.Yb(9,"label"),o.Uc(10,"Type"),o.Xb(),o.Yb(11,"span",30),o.Uc(12,"*"),o.Xb(),o.Yb(13,"p-dropdown",31),o.ic("ngModelChange",function(t){return o.Lc(e),o.mc().objMaster.TimeType=t}),o.Xb(),o.Xb(),o.Xb(),o.Yb(14,"div",28),o.Yb(15,"div",29),o.Yb(16,"label"),o.Uc(17,"Time Details"),o.Xb(),o.Yb(18,"span",30),o.Uc(19,"*"),o.Xb(),o.Yb(20,"input",32),o.ic("ngModelChange",function(t){return o.Lc(e),o.mc().objMaster.TimeDetails=t}),o.Xb(),o.Xb(),o.Xb(),o.Yb(21,"div",28),o.Yb(22,"div",29),o.Yb(23,"label"),o.Uc(24,"Other Details"),o.Xb(),o.Yb(25,"input",33),o.ic("ngModelChange",function(t){return o.Lc(e),o.mc().objMaster.OtherDetails=t}),o.Xb(),o.Xb(),o.Xb(),o.Yb(26,"div",28),o.Yb(27,"div",29),o.Yb(28,"label"),o.Uc(29,"Shift"),o.Xb(),o.Yb(30,"p-dropdown",34),o.ic("ngModelChange",function(t){return o.Lc(e),o.mc().objMaster.Shift=t}),o.Xb(),o.Xb(),o.Xb(),o.Yb(31,"div",28),o.Yb(32,"div",29),o.Yb(33,"label"),o.Uc(34,"Sequence"),o.Xb(),o.Yb(35,"span",30),o.Uc(36,"*"),o.Xb(),o.Yb(37,"input",35),o.ic("ngModelChange",function(t){return o.Lc(e),o.mc().objMaster.Sequence=t}),o.Xb(),o.Xb(),o.Xb(),o.Yb(38,"div",28),o.Yb(39,"div",29),o.Yb(40,"label"),o.Uc(41,"Status"),o.Xb(),o.Yb(42,"span",30),o.Uc(43,"*"),o.Xb(),o.Yb(44,"p-dropdown",36),o.ic("ngModelChange",function(t){return o.Lc(e),o.mc().objMaster.Status=t}),o.Xb(),o.Xb(),o.Xb(),o.Yb(45,"div",37),o.Yb(46,"div",3),o.Yb(47,"p-table",38,39),o.Sc(49,y,9,0,"ng-template",10),o.Sc(50,R,12,15,"ng-template",11),o.Xb(),o.Xb(),o.Xb(),o.Xb(),o.Yb(51,"div",40),o.Sc(52,A,2,1,"button",41),o.Yb(53,"button",42),o.ic("click",function(){return o.Lc(e),o.mc().CloseModal()}),o.Uc(54,"Close"),o.Xb(),o.Xb(),o.Xb(),o.Xb(),o.Xb(),o.Xb(),o.Xb()}if(2&e){const e=o.mc();o.Fb(13),o.Pc(o.yc(23,I)),o.tc("options",e.stlsttimetype)("ngModel",e.objMaster.TimeType)("filter",!0)("disabled","update"==e.Mode),o.Fb(7),o.tc("ngModel",e.objMaster.TimeDetails),o.Fb(5),o.tc("ngModel",e.objMaster.OtherDetails),o.Fb(5),o.Pc(o.yc(24,I)),o.tc("options",e.Shift)("ngModel",e.objMaster.Shift)("filter",!0),o.Fb(7),o.tc("ngModel",e.objMaster.Sequence),o.Fb(7),o.Pc(o.yc(25,I)),o.tc("options",e.stlststatus)("ngModel",e.objMaster.Status)("filter",!0),o.Fb(3),o.tc("value",e.lstCenterDetails)("rowHover",!0)("scrollable",!0),o.Fb(5),o.tc("ngIf",null==e.lstIAccessStr?null:e.lstIAccessStr.includes(e.ActionList.ReadWrite.toString()))}}const F=[{path:"",component:(()=>{class e extends r.a{constructor(e,t,i,s,n){super(),this.cdRef=e,this.router=t,this._MasterServices=i,this._ConstantServices=s,this._UtilityService=n,this.dtOptions={},this.dtTrigger=new c.a,this.Mode=null,this.objMaster={},this.lstMaster=[],this.extraCounterRowCounter=0,this.lstCenterDetails=[],this.lstClinicMaster=[],this.ActionList=l.a,this.lstIAccess=[],this.lstIAccessStr=[],this._ConstantServices.ActiveMenuName="Prescription Time Master",this.stlsttimetype=[{name:"Treatment",code:"Treatment"},{name:"Diet",code:"Diet"}],this.Shift=[{name:"Shift 1",code:"Shift1"},{name:"Shift 2",code:"Shift2"}],this.stlststatus=[{name:"Active",code:1},{name:"Inactive",code:0}],this.getPageLevelAccess()}getPageLevelAccess(){var e,t,i=this.router.url,s=JSON.parse(localStorage.getItem("UerRoleAccess"))||[];(null==s?void 0:s.find(e=>e.MenuItemURL===i))&&(this.lstIAccess=null===(e=s.find(e=>e.MenuItemURL===i))||void 0===e?void 0:e.ActionIAccess,(null===(t=this.lstIAccess)||void 0===t?void 0:t.length)>0&&this.lstIAccess.map(e=>{this.lstIAccessStr.push(e.ActionId.toString())}))}ngOnInit(){this.GetPrescriptionTimeList(),this.LoadClinicMaster()}LoadClinicMaster(){this._UtilityService.showSpinner(),this.unsubscribe.add=this._MasterServices.GetClinicMaster(!0).subscribe(e=>{if(this._UtilityService.hideSpinner(),1==e.actionResult.success){var t=JSON.parse(e.actionResult.result);this.lstClinicMaster=t=t||[],this.cdRef.detectChanges()}else this._UtilityService.showWarningAlert(e.actionResult.errMsg),this.lstClinicMaster=[],this.cdRef.detectChanges()},e=>{this._UtilityService.hideSpinner(),this._UtilityService.showErrorAlert(e.message)})}GetPrescriptionTimeList(){this._UtilityService.showSpinner(),this.unsubscribe.add=this._MasterServices.GetPrescriptionTimeMaster().subscribe(e=>{if(this._UtilityService.hideSpinner(),this.cdRef.detectChanges(),1==e.actionResult.success){var t=JSON.parse(e.actionResult.result);this.lstMaster=t=t||[],this.cdRef.detectChanges(),this.dtTrigger.next()}else this.lstMaster=[],this.cdRef.detectChanges()},e=>{this._UtilityService.hideSpinner(),this._UtilityService.showErrorAlert(e.message)})}LoadPrescriptionTimeDetasilsById(e){this._UtilityService.showSpinner(),this.Mode="update",this.unsubscribe.add=this._MasterServices.GetPrescriptionTimeMasterById(e).subscribe(e=>{var t,i;if(this._UtilityService.hideSpinner(),1==e.actionResult.success){var s=JSON.parse(e.actionResult.result);this.objMaster=s=s||[];var n=[];this.extraCounterRowCounter=0,null===(i=null===(t=this.objMaster)||void 0===t?void 0:t.lstCenterTimeDetails)||void 0===i||i.forEach(e=>{this.extraCounterRowCounter=this.extraCounterRowCounter+1,n.push({ClinicId:e.ClinicId,TimeDetails:e.TimeDetails,OtherDetails:e.OtherDetails,Sequence:this.extraCounterRowCounter})}),(null==n?void 0:n.length)>0?this.lstCenterDetails=n:this.clear(),this.cdRef.detectChanges()}else this.objMaster={}},e=>{this._UtilityService.hideSpinner(),this._UtilityService.showErrorAlert(e.message)})}SavePrescriptionTime(){this.objMaster.lstCenterTimeDetails=[];var e,t=[];this.lstCenterDetails.forEach(e=>{""!=e.ClinicId&&null!=e.ClinicId&&""!=e.TimeDetails&&null!=e.TimeDetails&&0!=e.Sequence&&t.push({ClinicId:e.ClinicId,TimeDetails:e.TimeDetails,OtherDetails:e.OtherDetails})}),e=t.reduce((e,t)=>(e[t.ClinicId]=(e[t.ClinicId]||0)+1,e),{}),Object.values(e).some(e=>e>1)?this._UtilityService.showWarningAlert("Center name should not duplicate."):(this.objMaster.lstCenterTimeDetails=t,this.objMaster.CreatedBy=localStorage.getItem("userId"),this.objMaster.ModifiedBy=localStorage.getItem("userId"),this._UtilityService.showSpinner(),this.unsubscribe.add=this._MasterServices.AddUpdatePrescriptionTimeMaster(this.objMaster).subscribe(e=>{this._UtilityService.hideSpinner(),1==e.actionResult.success?(this._UtilityService.showSuccessAlert(e.actionResult.errMsg),this.GetPrescriptionTimeList(),this.Mode=null):this._UtilityService.showWarningAlert(e.actionResult.errMsg),this.cdRef.detectChanges()},e=>{this._UtilityService.hideSpinner(),this._UtilityService.showErrorAlert(e.message)}))}AddNew(){this.Mode="Add",this.ResetModel(),this.myForm.resetForm(),this.clear()}ResetModel(){this.objMaster={},this.objMaster.TimeId=null,this.objMaster.Status=1}CloseModal(){this.Mode=null,this.clear()}clear(){this.lstCenterDetails=[],this.extraCounterRowCounter=0,this.AddCounterDetails()}AddCounterDetails(){this.extraCounterRowCounter=this.extraCounterRowCounter+1,this.lstCenterDetails.push({Sequence:this.extraCounterRowCounter,ClinicId:null,TimeDetails:null,OtherDetails:null})}RemoveCounterDetails(e){1!=e&&(this.lstCenterDetails=this.lstCenterDetails.filter(t=>t.Sequence!==e))}ResetCounterDetails(e){this.lstCenterDetails[e-1].ClinicId=null,this.lstCenterDetails[e-1].TimeDetails=null,this.lstCenterDetails[e-1].OtherDetails=null}}return e.\u0275fac=function(t){return new(t||e)(o.Sb(o.h),o.Sb(n.i),o.Sb(a.a),o.Sb(l.f),o.Sb(b.a))},e.\u0275cmp=o.Mb({type:e,selectors:[["app-prescription-time-master"]],viewQuery:function(e,t){if(1&e&&o.cd(g,1),2&e){let e;o.Hc(e=o.jc())&&(t.myForm=e.first)}},features:[o.Cb],decls:2,vars:2,consts:[["class","row mt25",4,"ngIf"],["class","row mb-8",4,"ngIf"],[1,"row","mt25"],[1,"col-md-12"],[1,"card"],[1,"card-body"],["responsiveLayout","scroll","scrollHeight","500px",3,"value","rowHover","globalFilterFields","scrollable"],["dt",""],["pTemplate","caption"],["pTemplate","emptymessage"],["pTemplate","header"],["pTemplate","body"],[1,"p-d-flex"],[1,"p-ml-left","mr-3"],["pButton","","title","New","label","Add New","class","p-button-outlined","icon","pi pi-plus","style","display: none;",3,"click",4,"ngIf"],[1,"p-ml-auto"],["matTooltip","Refresh",3,"click"],["src","./assets/custom-icons/refresh.svg",1,"custom-ico","mr4"],[1,"p-input-icon-left","p-ml-auto"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search...",3,"input"],["pButton","","title","New","label","Add New","icon","pi pi-plus",1,"p-button-outlined",2,"display","none",3,"click"],["matTooltip","View/Edit",3,"click"],["src","./assets/custom-icons/view.svg",1,"custom-ico","mr4",2,"width","24px !important"],[1,"row","mb-8"],[1,"col"],["myForm","ngForm"],[1,"row","m-0"],[1,"col-md-4"],[1,"form-group"],[1,"required"],["required","true","name","ddlType","optionLabel","name","optionValue","code","placeholder","Please Select Type",3,"options","ngModel","filter","disabled","ngModelChange"],["type","text","required","","name","txtPrescriptionTimeDetails",1,"form-control",3,"ngModel","ngModelChange"],["type","text","name","txtPrescriptionOtherDetails",1,"form-control",3,"ngModel","ngModelChange"],["name","ddlShift","optionLabel","name","optionValue","code","placeholder","Please Select Shift",3,"options","ngModel","filter","ngModelChange"],["type","number","required","","name","txtSequence",1,"form-control",3,"ngModel","ngModelChange"],["required","true","name","ddlStatus","optionLabel","name","optionValue","code","placeholder","Please Select Status",3,"options","ngModel","filter","ngModelChange"],[1,"row","mt-2","mb-2"],["responsiveLayout","scroll","scrollHeight","250px",1,"ColumnFilterTable",3,"value","rowHover","scrollable"],["dt1",""],[1,"row","justify-content-center"],["type","button","type","button","class","btn btn-new-primary mr-2",3,"disabled","click",4,"ngIf"],[1,"btn","btn-new-secondary",3,"click"],[2,"width","25%"],[2,"width","15%","text-align","center"],["appendTo","body","optionLabel","ClinicName","optionValue","ClinicId","placeholder","-Select-",3,"options","ngModel","ngModelOptions","filter","showClear","ngModelChange"],["pInputText","","type","text",1,"form-control",3,"name","ngModel","ngModelChange"],[2,"width","25%","text-align","center"],["href","javascript: void(0);",1,"add-btn","mr-2",3,"click"],[1,"fa","fa-plus"],["class","add-btn mr-2","href","javascript: void(0);",3,"click",4,"ngIf"],["class","add-btn","title","Reset","href","javascript: void(0);",3,"click",4,"ngIf"],[1,"fa","fa-minus"],["title","Reset","href","javascript: void(0);",1,"add-btn",3,"click"],[1,"fa","fa-refresh"],["type","button","type","button",1,"btn","btn-new-primary","mr-2",3,"disabled","click"]],template:function(e,t){1&e&&(o.Sc(0,w,10,5,"div",0),o.Sc(1,L,55,26,"div",1)),2&e&&(o.tc("ngIf",null==t.Mode),o.Fb(1),o.tc("ngIf",null!=t.Mode))},directives:[s.p,d.c,u.i,h.a,p.b,m.z,m.p,m.q,f.a,m.w,m.o,m.r,m.b,m.t],styles:[""]}),e})()}];let j=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.Qb({type:e}),e.\u0275inj=o.Pb({imports:[[n.l.forChild(F)],n.l]}),e})(),x=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.Qb({type:e}),e.\u0275inj=o.Pb({imports:[[s.c,j,m.i,d.f,p.c,f.b,h.b]]}),e})()}}]);