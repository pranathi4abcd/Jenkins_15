(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{QQvb:function(t,e,i){"use strict";i.r(e),i.d(e,"TherapyDashboardModule",function(){return S});var n=i("ofXK"),o=i("tyNb"),c=i("iVOs"),l=i("fXoL");const r=[{path:"",component:c.a}];let a=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.Qb({type:t}),t.\u0275inj=l.Pb({imports:[[o.l.forChild(r)],o.l]}),t})();var s=i("3Pt+"),d=i("rEr+"),b=i("jIHw"),h=i("arFO"),p=i("7kUa"),u=i("eO1q"),m=i("Ks7X"),g=i("LuMj"),f=i("lVkt"),y=i("T2Aj");let S=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.Qb({type:t}),t.\u0275inj=l.Pb({imports:[[n.c,a,s.i,d.f,b.c,h.b,p.b,u.b,m.b,g.b,f.b,y.a]]}),t})()},iVOs:function(t,e,i){"use strict";i.d(e,"a",function(){return it});var n=i("Nach"),o=i("CwUn"),c=i("fXoL"),l=i("tyNb"),r=i("A1d6"),a=i("ReGW"),s=i("ofXK"),d=i("dcBc"),b=i("NLkC"),h=i("arFO"),p=i("3Pt+"),u=i("lVkt"),m=i("LuMj"),g=i("rEr+"),f=i("7zfz"),y=i("AAHA"),S=i("eO1q"),C=i("7kUa"),T=i("jIHw");const v=["dt"],I=["filtr"],P=["calendar"];function w(t,e){if(1&t){const t=c.Zb();c.Yb(0,"div",5),c.Yb(1,"div",29),c.Yb(2,"label",30),c.Uc(3,"Center "),c.Yb(4,"span",8),c.Uc(5,"*"),c.Xb(),c.Xb(),c.Xb(),c.Yb(6,"div",31),c.Yb(7,"app-center-dropdown",32),c.ic("onclinicSelect",function(e){return c.Lc(t),c.mc().onclinicSelect(e)}),c.Xb(),c.Xb(),c.Xb()}2&t&&(c.Fb(7),c.tc("isCenterLabel",!1)("mode","get"))}function D(t,e){if(1&t){const t=c.Zb();c.Yb(0,"div",6),c.Yb(1,"label",14),c.Uc(2,"OPD Type"),c.Xb(),c.Yb(3,"div",15),c.Yb(4,"p-radioButton",33),c.ic("ngModelChange",function(e){return c.Lc(t),c.mc().OPDType=e})("onClick",function(){return c.Lc(t),c.mc().ShowTherapyList()}),c.Xb(),c.Yb(5,"label",17),c.Uc(6,"Billing"),c.Xb(),c.Yb(7,"p-radioButton",34),c.ic("ngModelChange",function(e){return c.Lc(t),c.mc().OPDType=e})("onClick",function(){return c.Lc(t),c.mc().ShowTherapyList()}),c.Xb(),c.Yb(8,"label",17),c.Uc(9,"Prescription"),c.Xb(),c.Xb(),c.Xb()}if(2&t){const t=c.mc();c.Fb(4),c.tc("ngModel",t.OPDType),c.Fb(3),c.tc("ngModel",t.OPDType)}}const X=function(){return{width:"100%"}};function Y(t,e){if(1&t){const t=c.Zb();c.Yb(0,"div",6),c.Yb(1,"div",35),c.Yb(2,"label"),c.Uc(3,"Time Period"),c.Xb(),c.Yb(4,"span",8),c.Uc(5,"*"),c.Xb(),c.Yb(6,"p-multiSelect",36),c.ic("ngModelChange",function(e){return c.Lc(t),c.mc().TimeId=e})("onChange",function(e){return c.Lc(t),c.mc().onChangeItems(e.value)}),c.Xb(),c.Xb(),c.Xb()}if(2&t){const t=c.mc();c.Fb(6),c.Pc(c.yc(4,X)),c.tc("options",t.lstPrescriptionTimeMaster)("ngModel",t.TimeId)}}function M(t,e){if(1&t){const t=c.Zb();c.Yb(0,"div",6),c.Yb(1,"div",35),c.Yb(2,"label"),c.Uc(3,"Patient Condition"),c.Xb(),c.Yb(4,"p-multiSelect",37),c.ic("ngModelChange",function(e){return c.Lc(t),c.mc().lstPatientConditionItems=e})("onChange",function(e){return c.Lc(t),c.mc().onChangeCondition(e.value)}),c.Xb(),c.Xb(),c.Xb()}if(2&t){const t=c.mc();c.Fb(4),c.Pc(c.yc(4,X)),c.tc("options",t.stlstpatientcondition)("ngModel",t.lstPatientConditionItems)}}const F=function(){return{standalone:!0}};function U(t,e){if(1&t){const t=c.Zb();c.Yb(0,"div",38),c.Yb(1,"label",39),c.Uc(2,"From / To"),c.Xb(),c.Yb(3,"span",8),c.Uc(4,"*"),c.Xb(),c.Yb(5,"div",35),c.Yb(6,"p-calendar",40,41),c.ic("ngModelChange",function(e){return c.Lc(t),c.mc().rangeDates=e})("onSelect",function(){return c.Lc(t),c.mc().dateRangeChange()}),c.Xb(),c.Xb(),c.Xb()}if(2&t){const t=c.mc();c.Fb(6),c.wc("yearRange","",t.customDateFormat.MinYear,":",t.MaxYear,""),c.tc("monthNavigator",!0)("yearNavigator",!0)("ngModel",t.rangeDates)("ngModelOptions",c.yc(9,F))("showIcon",!0)("dateFormat",t.customDateFormat.CalendarFormat)("readonlyInput",!0)}}function L(t,e){if(1&t){const t=c.Zb();c.Yb(0,"div",38),c.Yb(1,"div",35),c.Yb(2,"label",42),c.Uc(3,"Admission Date"),c.Yb(4,"span",8),c.Uc(5,"*"),c.Xb(),c.Xb(),c.Yb(6,"div"),c.Yb(7,"p-calendar",43,41),c.ic("onSelect",function(){return c.Lc(t),c.mc().admDateChange()})("ngModelChange",function(e){return c.Lc(t),c.mc().selectAdmDate=e}),c.Xb(),c.Xb(),c.Xb(),c.Xb()}if(2&t){const t=c.mc();c.Fb(7),c.wc("yearRange","",t.customDateFormat.MinYear,":",t.MaxYear,""),c.tc("monthNavigator",!0)("yearNavigator",!0)("ngModel",t.selectAdmDate)("ngModelOptions",c.yc(9,F))("showIcon",!0)("dateFormat",t.customDateFormat.CalendarFormat)("readonlyInput",!1)}}function k(t,e){if(1&t){const t=c.Zb();c.Yb(0,"button",55),c.ic("click",function(){return c.Lc(t),c.mc(2).exportToItemExcel("")}),c.Xb()}}function A(t,e){if(1&t){const t=c.Zb();c.Yb(0,"button",56),c.ic("click",function(){return c.Lc(t),c.mc(2).exportToItemExcel("all")}),c.Xb()}}function x(t,e){if(1&t){const t=c.Zb();c.Yb(0,"button",57),c.ic("click",function(){return c.Lc(t),c.mc(2).exportToItemExcel("allCount")}),c.Xb()}}function N(t,e){if(1&t){const t=c.Zb();c.Yb(0,"button",58),c.ic("click",function(){return c.Lc(t),c.mc(2).exportToItemExcel("timeSlotWise")}),c.Xb()}}function R(t,e){if(1&t){const t=c.Zb();c.Yb(0,"div",44),c.Yb(1,"span",45),c.Uc(2),c.Xb(),c.Yb(3,"span",46),c.Sc(4,k,1,0,"button",47),c.Sc(5,A,1,0,"button",48),c.Sc(6,x,1,0,"button",49),c.Sc(7,N,1,0,"button",50),c.Yb(8,"span",51),c.Tb(9,"i",52),c.Yb(10,"input",53,54),c.ic("input",function(e){return c.Lc(t),c.mc(),c.Ic(45).filterGlobal(e.target.value,"contains")}),c.Xb(),c.Xb(),c.Xb(),c.Xb()}if(2&t){const t=c.mc();c.Fb(2),c.Wc(" ",(null==t.LstTreatmentClinicSchedulePrescription?null:t.LstTreatmentClinicSchedulePrescription.length)>0?"Total Treatment: "+t.filteredValuesLength+", All Patient - "+t.allPatientCount+", M - "+t.malePatientCount+", F - "+t.femalePatientCount:""," "),c.Fb(2),c.tc("ngIf",(null==t.lstIAccessStr?null:t.lstIAccessStr.includes(t.ActionList.Download.toString()))&&(null==t.LstTreatmentClinicSchedulePrescription?null:t.LstTreatmentClinicSchedulePrescription.length)>0),c.Fb(1),c.tc("ngIf",(null==t.lstIAccessStr?null:t.lstIAccessStr.includes(t.ActionList.Download.toString()))&&(null==t.LstTreatmentClinicSchedulePrescription?null:t.LstTreatmentClinicSchedulePrescription.length)>0),c.Fb(1),c.tc("ngIf",(null==t.lstIAccessStr?null:t.lstIAccessStr.includes(t.ActionList.Download.toString()))&&(null==t.LstTreatmentClinicSchedulePrescription?null:t.LstTreatmentClinicSchedulePrescription.length)>0),c.Fb(1),c.tc("ngIf",(null==t.lstIAccessStr?null:t.lstIAccessStr.includes(t.ActionList.Download.toString()))&&(null==t.LstTreatmentClinicSchedulePrescription?null:t.LstTreatmentClinicSchedulePrescription.length)>0)}}function G(t,e){if(1&t&&(c.Yb(0,"tr"),c.Yb(1,"td"),c.Uc(2," No records found "),c.Xb(),c.Xb()),2&t){const t=c.mc();c.Fb(1),c.Gb("colspan","OPD"!=t.bookingtype?12:9)}}function B(t,e){1&t&&c.Tb(0,"col",59)}function O(t,e){1&t&&c.Tb(0,"col",59)}function V(t,e){1&t&&c.Tb(0,"col",59)}function _(t,e){1&t&&c.Tb(0,"col",67)}function E(t,e){if(1&t&&(c.Yb(0,"colgroup"),c.Tb(1,"col",59),c.Tb(2,"col",60),c.Tb(3,"col",61),c.Tb(4,"col",62),c.Tb(5,"col",61),c.Tb(6,"col",61),c.Tb(7,"col",63),c.Sc(8,B,1,0,"col",64),c.Sc(9,O,1,0,"col",64),c.Sc(10,V,1,0,"col",64),c.Tb(11,"col",65),c.Sc(12,_,1,0,"col",66),c.Tb(13,"col",62),c.Xb()),2&t){const t=c.mc();c.Fb(8),c.tc("ngIf","IPD"==t.bookingtype),c.Fb(1),c.tc("ngIf","IPD"==t.bookingtype),c.Fb(1),c.tc("ngIf","IPD"==t.bookingtype),c.Fb(2),c.tc("ngIf","IPD"==t.bookingtype)}}function H(t,e){1&t&&(c.Yb(0,"th"),c.Uc(1,"Time Period"),c.Xb())}function W(t,e){1&t&&(c.Yb(0,"th"),c.Uc(1,"Cond."),c.Xb())}function Z(t,e){1&t&&(c.Yb(0,"th"),c.Uc(1,"Adm. Date"),c.Xb())}function z(t,e){1&t&&(c.Yb(0,"th"),c.Uc(1,"Remarks"),c.Xb())}function j(t,e){if(1&t&&(c.Yb(0,"tr"),c.Yb(1,"th"),c.Uc(2,"Name"),c.Xb(),c.Yb(3,"th"),c.Uc(4,"MR No"),c.Xb(),c.Yb(5,"th"),c.Uc(6,"Contact No"),c.Xb(),c.Yb(7,"th"),c.Uc(8,"Gender"),c.Xb(),c.Yb(9,"th"),c.Uc(10,"Category"),c.Xb(),c.Yb(11,"th"),c.Uc(12,"Treatment Name"),c.Xb(),c.Yb(13,"th"),c.Uc(14),c.Xb(),c.Sc(15,H,2,0,"th",68),c.Sc(16,W,2,0,"th",68),c.Sc(17,Z,2,0,"th",68),c.Yb(18,"th"),c.Uc(19,"Status"),c.Xb(),c.Sc(20,z,2,0,"th",68),c.Yb(21,"th"),c.Uc(22,"Action"),c.Xb(),c.Xb()),2&t){const t=c.mc();c.Fb(14),c.Vc("IPD"==t.bookingtype||"OPD"==t.bookingtype&&"Prescription"==t.OPDType?"Presc. Date":"Purchase Date"),c.Fb(1),c.tc("ngIf","IPD"==t.bookingtype),c.Fb(1),c.tc("ngIf","IPD"===t.bookingtype),c.Fb(1),c.tc("ngIf","IPD"===t.bookingtype),c.Fb(3),c.tc("ngIf","IPD"==t.bookingtype)}}function J(t,e){if(1&t&&(c.Yb(0,"tr"),c.Yb(1,"td",71),c.Yb(2,"span"),c.Uc(3),c.Xb(),c.Xb(),c.Xb()),2&t){const t=c.mc().$implicit,e=c.mc();c.Fb(1),c.Gb("colspan","OPD"!=e.bookingtype?12:9),c.Fb(2),c.Vc(t.PatientName)}}function $(t,e){if(1&t&&(c.Yb(0,"td"),c.Uc(1),c.Xb()),2&t){const t=c.mc().$implicit;c.Fb(1),c.Vc(t.TimeDetails)}}function Q(t,e){if(1&t&&(c.Yb(0,"td"),c.Uc(1),c.Xb()),2&t){const t=c.mc().$implicit;c.Fb(1),c.Vc(t.PatientConditionCode)}}function q(t,e){if(1&t&&(c.Yb(0,"td"),c.Uc(1),c.Xb()),2&t){const t=c.mc().$implicit;c.Fb(1),c.Vc(t.Remarks)}}function K(t,e){if(1&t){const t=c.Zb();c.Yb(0,"button",72),c.ic("click",function(){c.Lc(t);const e=c.mc().$implicit;return c.mc().DoneAppointment(e.Id)}),c.Tb(1,"i",73),c.Xb()}}function tt(t,e){if(1&t&&(c.Sc(0,J,4,2,"tr",68),c.Yb(1,"tr",69),c.Yb(2,"td"),c.Uc(3),c.Xb(),c.Yb(4,"td"),c.Uc(5),c.Xb(),c.Yb(6,"td"),c.Uc(7),c.Xb(),c.Yb(8,"td"),c.Uc(9),c.Xb(),c.Yb(10,"td"),c.Uc(11),c.Xb(),c.Yb(12,"td"),c.Uc(13),c.Xb(),c.Yb(14,"td"),c.Uc(15),c.nc(16,"date"),c.Xb(),c.Sc(17,$,2,1,"td",68),c.Sc(18,Q,2,1,"td",68),c.Yb(19,"td"),c.Uc(20),c.Xb(),c.Yb(21,"td"),c.Uc(22),c.Xb(),c.Sc(23,q,2,1,"td",68),c.Yb(24,"td"),c.Sc(25,K,2,0,"button",70),c.Xb(),c.Xb()),2&t){const t=e.$implicit,i=e.rowIndex,n=c.mc();c.tc("ngIf",(null==n.rowGroupMetadata[t.UserId]?null:n.rowGroupMetadata[t.UserId].index)==i),c.Fb(3),c.Vc(t.PatientName),c.Fb(2),c.Vc(t.MRNo),c.Fb(2),c.Vc(t.ContactNumber),c.Fb(2),c.Vc(t.Gender),c.Fb(2),c.Vc(t.HCategoryName),c.Fb(2),c.Vc(t.TreatmentName),c.Fb(2),c.Vc(c.pc(16,14,t.PrescriptionDate,n.customDateFormat.DEF_DATE)),c.Fb(2),c.tc("ngIf","IPD"==n.bookingtype),c.Fb(1),c.tc("ngIf","IPD"==n.bookingtype),c.Fb(2),c.Vc(t.AdmDate),c.Fb(2),c.Vc(t.StatusText),c.Fb(1),c.tc("ngIf","IPD"==n.bookingtype),c.Fb(2),c.tc("ngIf",(null==n.lstIAccessStr?null:n.lstIAccessStr.includes(n.ActionList.ReadWrite.toString()))&&1==t.Status&&t.IsValidDate&&n.UserTypeCurre===n.userTypes.Therapist)}}const et=function(){return["BookingNumber","MRNo","ContactNumber","PatientName","Gender","HCategoryName","TreatmentName","Remarks","TimeDetails","StatusText"]};let it=(()=>{class t extends o.a{constructor(t,e,i,o,c,l,r,a){super(),this.cdRef=t,this.router=e,this._ClinicServices=i,this._DoctorServices=o,this.datepipe=c,this._ConstantServices=l,this._MasterServices=r,this._UtilityService=a,this.UserTypeCurre=localStorage.getItem("userTypeId"),this.userTypes=n.s,this.customDateFormat=n.h,this.ClinicIdSelected=null,this.rangeDates=[],this.MaxYear=(new Date).getFullYear()+2,this.FromDtSelected=null,this.UptoDtSelected=null,this.LstTreatmentClinicSchedulePrescription=[],this.lstTreatmentCategory=[],this.lstPrescriptionTimeMaster=[],this.LstTretScPresCommon=[],this.TimeId=[],this.SelectedTreatCategory=[],this.GenderSelcted="All",this.filteredValuesLength=0,this.allPatientCount=0,this.malePatientCount=0,this.femalePatientCount=0,this.bookingtype="IPD",this.OPDType="Billing",this.filterBy="TreatPeriod",this.stlstpatientcondition=[],this.lstPatientConditionItems=[],this.ActionList=n.a,this.lstIAccess=[],this.lstIAccessStr=[],this._ConstantServices.ActiveMenuName="Therapy Monitoring List",this.rangeDates=[new Date,new Date],this.selectAdmDate=new Date,this.stlstbookingtype=[{name:"IPD",code:"IPD"},{name:"OPD",code:"OPD"}],this.stlstfilterby=[{name:"Treat. Period",code:"TreatPeriod"},{name:"Adm. Date",code:"AdmDate"}],this.stlstpatientcondition=[{PatientCondition:"Critical Patient",PatientConditionCode:"CP"},{PatientCondition:"Wheel Chair Patient",PatientConditionCode:"WCP"},{PatientCondition:"Need Assistance",PatientConditionCode:"NA"},{PatientCondition:"Detoxification",PatientConditionCode:"DETOX"}]}ngAfterViewChecked(){var t;0==(null===(t=this.lstIAccess)||void 0===t?void 0:t.length)&&this.getPageLevelAccess()}getPageLevelAccess(){var t,e,i=this.getUrlWithoutParams();"/common-dashboard"==i&&(i="/therapy-dashboard");var n=JSON.parse(localStorage.getItem("UerRoleAccess"))||[];(null==n?void 0:n.find(t=>t.MenuItemURL===i))&&(this.lstIAccess=null===(t=n.find(t=>t.MenuItemURL===i))||void 0===t?void 0:t.ActionIAccess,(null===(e=this.lstIAccess)||void 0===e?void 0:e.length)>0&&this.lstIAccess.map(t=>{this.lstIAccessStr.push(t.ActionId.toString())}))}getUrlWithoutParams(){let t=this.router.parseUrl(this.router.url);return t.queryParams={},t.fragment=null,t.toString()}ngOnInit(){this.LoadTreatmentCategory(),this.GetPrescriptionTimeList(),n.s.SuperAdmin!==localStorage.getItem("userTypeId")&&(this.ClinicIdSelected=localStorage.getItem("ClinicId"),this.ShowTherapyList())}onclinicSelect(t){this.ClinicIdSelected=t,this.ShowTherapyList()}LoadTreatmentCategory(){this._UtilityService.showSpinner(),this.unsubscribe.add=this._DoctorServices.GetTreatmentCategory().subscribe(t=>{var e;if(this._UtilityService.hideSpinner(),1==t.actionResult.success){var i=JSON.parse(t.actionResult.result);if(this.lstTreatmentCategory=i=i||[],this.lstTreatmentCategory.length>0)for(var n=0;n<(null===(e=this.lstTreatmentCategory)||void 0===e?void 0:e.length);n++)this.SelectedTreatCategory=this.SelectedTreatCategory.concat(this.lstTreatmentCategory[n].HCategoryName);this.cdRef.detectChanges()}},t=>{this._UtilityService.hideSpinner(),this._UtilityService.showErrorAlert(t.message)})}GetPrescriptionTimeList(){this._UtilityService.showSpinner(),this.unsubscribe.add=this._MasterServices.GetPrescriptionTimeMasterActive("Treatment").subscribe(t=>{var e;if(this._UtilityService.hideSpinner(),this.cdRef.detectChanges(),1==t.actionResult.success){var i=JSON.parse(t.actionResult.result);if(this.lstPrescriptionTimeMaster=i=i||[],this.lstPrescriptionTimeMaster=this.lstPrescriptionTimeMaster.filter(t=>!(t.TimeId==n.r.Time2||t.TimeId==n.r.Time3)),this.lstPrescriptionTimeMaster.length>0)for(var o=0;o<(null===(e=this.lstPrescriptionTimeMaster)||void 0===e?void 0:e.length);o++)this.TimeId=this.TimeId.concat(this.lstPrescriptionTimeMaster[o].TimeId);this.cdRef.detectChanges()}else this.lstPrescriptionTimeMaster=[],this.cdRef.detectChanges()},t=>{this._UtilityService.hideSpinner(),this._UtilityService.showErrorAlert(t.message)})}tabClick(t){t.index>=0&&this.updateRowGroupMetaData(this.LstTretScPresCommon[t.index].TreatList)}onChangeCategory(t){this.SelectedTreatCategory=t,this.ShowTherapyList()}onChangeItems(t){this.TimeId=t,this.ShowTherapyList()}onChangeCondition(t){this.lstPatientConditionItems=t,this.ShowTherapyList()}onChangeFilterBy(t){this.ShowTherapyList()}ShowTherapyList(){var t,e,i;if(""==this.ClinicIdSelected||null==this.ClinicIdSelected||null==this.ClinicIdSelected)return void this._UtilityService.showWarningAlert("Please select center");this.LstTreatmentClinicSchedulePrescription=[],this.LstTretScPresCommon=[];let n={};n.clinicId=this.ClinicIdSelected,n.bookingType=this.bookingtype,n.filterByDate=this.filterBy,n.dFrom=new Date(this.datepipe.transform(this.rangeDates[0],"yyyy-MM-dd")),n.dTo=new Date(this.datepipe.transform(this.rangeDates[1],"yyyy-MM-dd")),n.TranDate=new Date(this.datepipe.transform(this.selectAdmDate,"yyyy-MM-dd")),n.gender=this.GenderSelcted,n.prescriptionType=this.OPDType;for(var o=[],c=0;c<(null===(t=this.SelectedTreatCategory)||void 0===t?void 0:t.length);c++)o.push({id:this.SelectedTreatCategory[c]});var l=[];for(c=0;c<(null===(e=this.TimeId)||void 0===e?void 0:e.length);c++)l.push({id:this.TimeId[c]});var r=[];for(c=0;c<(null===(i=this.lstPatientConditionItems)||void 0===i?void 0:i.length);c++)r.push({id:this.lstPatientConditionItems[c]});n.lstCommonId2=o,n.lstCommonId=l,n.lstCommonId3=r,this.cdRef.detectChanges(),this._UtilityService.showSpinner(),this.unsubscribe.add=this._ClinicServices.GetTreatmentScheduleForTherapy(n).subscribe(t=>{if(this._UtilityService.hideSpinner(),this.cdRef.detectChanges(),1==t.actionResult.success){var e=JSON.parse(t.actionResult.result);this.LstTreatmentClinicSchedulePrescription=e=e||[],this.updateRowGroupMetaData(this.LstTreatmentClinicSchedulePrescription)}else this.LstTreatmentClinicSchedulePrescription=[],this.cdRef.detectChanges()},t=>{this._UtilityService.hideSpinner(),this._UtilityService.showErrorAlert(t.message)})}updateRowGroupMetaData(t=[]){if(this.rowGroupMetadata={},t)for(let e=0;e<t.length;e++){let i=t[e].UserId;0==e?this.rowGroupMetadata[i]={index:0,size:1}:i===t[e-1].UserId?this.rowGroupMetadata[i].size++:this.rowGroupMetadata[i]={index:e,size:1}}void 0!==this.filtr&&(this.filtr.nativeElement.value="",this.dataTable.reset(),this.filteredValuesLength=null==t?void 0:t.length,this.allPatientCount=new Set(t.map(t=>t.BookingNumber)).size,this.malePatientCount=new Set(t.filter(t=>"Male"===t.Gender).map(t=>t.BookingNumber)).size,this.femalePatientCount=new Set(t.filter(t=>"Female"===t.Gender).map(t=>t.BookingNumber)).size),this.cdRef.detectChanges()}dateRangeChange(){this.rangeDates[0]&&this.rangeDates[1]&&(void 0!==this.calendar&&(this.calendar.overlayVisible=!1),this.ShowTherapyList())}admDateChange(){this.selectAdmDate&&(void 0!==this.calendar&&(this.calendar.overlayVisible=!1),this.ShowTherapyList())}DoneAppointment(t){this._UtilityService.showSpinner(),this.unsubscribe.add=this._ClinicServices.UpdateTreatmentScheduleMonitoring(t,this.bookingtype,this.OPDType).subscribe(t=>{this._UtilityService.hideSpinner(),this._UtilityService.showSuccessAlert(t.actionResult.errMsg),1==t.actionResult.success&&this.ShowTherapyList()},t=>{this._UtilityService.hideSpinner(),this._UtilityService.showErrorAlert(t.message)})}exportToItemExcel(t){var e,i;let n={reportname:"therapydashboard",filename:"therapydashboard"};n.clinicId=this.ClinicIdSelected,n.bookingtype=this.bookingtype,n.filterByDate=this.filterBy,n.dFrom=new Date(this.datepipe.transform(this.rangeDates[0],"yyyy-MM-dd")),n.dTo=new Date(this.datepipe.transform(this.rangeDates[1],"yyyy-MM-dd")),n.TranDate=new Date(this.datepipe.transform(this.selectAdmDate,"yyyy-MM-dd")),n.gender=this.GenderSelcted,n.prescriptionType=this.OPDType,n.reportType=t;for(var o=[],c=0;c<(null===(e=this.lstPatientConditionItems)||void 0===e?void 0:e.length);c++)o.push({id:this.lstPatientConditionItems[c]});var l=[];for(c=0;c<(null===(i=this.TimeId)||void 0===i?void 0:i.length);c++)l.push({id:this.TimeId[c]});n.lstCommonId3=o,n.lstCommonId2=[],n.lstCommonId=l,this._MasterServices.downloadReport(n)}onFilter(t,e){this.filteredValuesLength=t.filteredValue.length,this.allPatientCount=new Set(t.filteredValue.map(t=>t.BookingNumber)).size,this.malePatientCount=new Set(t.filteredValue.filter(t=>"Male"===t.Gender).map(t=>t.BookingNumber)).size,this.femalePatientCount=new Set(t.filteredValue.filter(t=>"Female"===t.Gender).map(t=>t.BookingNumber)).size}}return t.\u0275fac=function(e){return new(e||t)(c.Sb(c.h),c.Sb(l.i),c.Sb(r.a),c.Sb(a.a),c.Sb(s.f),c.Sb(n.f),c.Sb(d.a),c.Sb(b.a))},t.\u0275cmp=c.Mb({type:t,selectors:[["app-therapy-dashboard"]],viewQuery:function(t,e){if(1&t&&(c.cd(v,1),c.cd(I,1),c.cd(P,1)),2&t){let t;c.Hc(t=c.jc())&&(e.dataTable=t.first),c.Hc(t=c.jc())&&(e.filtr=t.first),c.Hc(t=c.jc())&&(e.calendar=t.first)}},features:[c.Cb],decls:51,vars:37,consts:[[1,"row","mt25"],[1,"col-md-12"],[1,"card"],[1,"card-body"],["class","row mb-2",4,"ngIf"],[1,"row","mb-2"],[1,"col-md-2"],["for",""],[1,"required"],["optionLabel","name","optionValue","code",3,"options","ngModel","ngModelOptions","ngModelChange","onChange"],["class","col-md-2",4,"ngIf"],[1,"col-md-3"],["appendTo","body","optionLabel","HCategoryName","optionValue","HCategoryName",3,"options","ngModel","overlayVisible","ngModelChange","onChange"],["class","col-md-auto",4,"ngIf"],[1,"bold"],[1,"field-radiobutton","mb5"],["name","rbGenderSelcted","value","All",3,"ngModel","ngModelChange","onClick"],[1,"pl-1","mr-2","radiolabel"],["name","rbGenderSelcted","value","Male",3,"ngModel","ngModelChange","onClick"],["name","rbGenderSelcted","value","Female",3,"ngModel","ngModelChange","onClick"],[1,"pl-1","radiolabel"],[1,"row"],["responsiveLayout","scroll","dataKey","UserId","styleClass","p-datatable-striped","scrollHeight","calc(100vh - 250px)",3,"value","rowHover","globalFilterFields","scrollable","rows","virtualScroll","virtualRowHeight","onFilter"],["dt",""],["pTemplate","caption"],["pTemplate","emptymessage"],["pTemplate","colgroup"],["pTemplate","header"],["pTemplate","body"],[1,"col","col-md-1","pr-0"],["for","",1,"pt-2"],[1,"col","col-md-3"],[3,"isCenterLabel","mode","onclinicSelect"],["name","rbOPDTypeSelcted","value","Billing",3,"ngModel","ngModelChange","onClick"],["name","rbOPDTypeSelcted","value","Prescription",3,"ngModel","ngModelChange","onClick"],[1,"form-group"],["appendTo","body","optionLabel","TimeDetails","optionValue","TimeId",3,"options","ngModel","ngModelChange","onChange"],["appendTo","body","optionLabel","PatientCondition","optionValue","PatientConditionCode",3,"options","ngModel","ngModelChange","onChange"],[1,"col-md-auto"],["for","",2,"font-weight","bold !important"],["selectionMode","range","inputId","icon","name","rangeDates",3,"monthNavigator","yearNavigator","yearRange","ngModel","ngModelOptions","showIcon","dateFormat","readonlyInput","ngModelChange","onSelect"],["calendar",""],[1,"mr-2"],["inputId","icon",3,"monthNavigator","yearNavigator","yearRange","ngModel","ngModelOptions","showIcon","dateFormat","readonlyInput","onSelect","ngModelChange"],[1,"p-d-flex"],[1,"p-ml-left"],[1,"p-ml-auto"],["pButton","","title","Export Data","label"," ","class","p-button-outlined mr-2","icon","pi pi-download",3,"click",4,"ngIf"],["pButton","","title","Export All Data","label"," ","class","p-button-outlined mr-2","icon","pi pi-download",3,"click",4,"ngIf"],["pButton","","title","Export With Data Count","label"," ","class","p-button-outlined mr-2","icon","pi pi-download",3,"click",4,"ngIf"],["pButton","","title","Export Time-slot Wise","label"," ","class","p-button-outlined mr-2","icon","pi pi-download",3,"click",4,"ngIf"],[1,"p-input-icon-left","p-ml-auto"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search...",3,"input"],["filtr",""],["pButton","","title","Export Data","label"," ","icon","pi pi-download",1,"p-button-outlined","mr-2",3,"click"],["pButton","","title","Export All Data","label"," ","icon","pi pi-download",1,"p-button-outlined","mr-2",3,"click"],["pButton","","title","Export With Data Count","label"," ","icon","pi pi-download",1,"p-button-outlined","mr-2",3,"click"],["pButton","","title","Export Time-slot Wise","label"," ","icon","pi pi-download",1,"p-button-outlined","mr-2",3,"click"],[2,"width","130px"],[2,"width","125px"],[2,"width","120px"],[2,"width","60px"],[2,"width","105px"],["style","width:130px",4,"ngIf"],[2,"width","70px"],["style","width:80px",4,"ngIf"],[2,"width","80px"],[4,"ngIf"],[2,"height","34px"],["matTooltip","Appointment Done","class","btn btn-new-primary",3,"click",4,"ngIf"],[2,"background-color","#ebedf3","font-weight","bold","height","34px"],["matTooltip","Appointment Done",1,"btn","btn-new-primary",3,"click"],[1,"pi","pi-check",2,"color","white"]],template:function(t,e){if(1&t){const t=c.Zb();c.Yb(0,"div",0),c.Yb(1,"div",1),c.Yb(2,"div",2),c.Yb(3,"div",3),c.Sc(4,w,8,2,"div",4),c.Yb(5,"div",5),c.Yb(6,"div",6),c.Yb(7,"label",7),c.Uc(8,"Booking Type "),c.Yb(9,"span",8),c.Uc(10,"*"),c.Xb(),c.Xb(),c.Yb(11,"p-dropdown",9),c.ic("ngModelChange",function(t){return e.bookingtype=t})("onChange",function(){return e.ShowTherapyList()}),c.Xb(),c.Xb(),c.Sc(12,D,10,2,"div",10),c.Yb(13,"div",11),c.Yb(14,"label"),c.Uc(15,"Treatment Category"),c.Xb(),c.Yb(16,"span",8),c.Uc(17,"*"),c.Xb(),c.Yb(18,"p-multiSelect",12),c.ic("ngModelChange",function(t){return e.SelectedTreatCategory=t})("onChange",function(t){return e.onChangeCategory(t.value)}),c.Xb(),c.Xb(),c.Sc(19,Y,7,5,"div",10),c.Sc(20,M,5,5,"div",10),c.Yb(21,"div",6),c.Yb(22,"label",7),c.Uc(23,"Filter By"),c.Yb(24,"span",8),c.Uc(25,"*"),c.Xb(),c.Xb(),c.Yb(26,"p-dropdown",9),c.ic("ngModelChange",function(t){return e.filterBy=t})("onChange",function(t){return e.onChangeFilterBy(t.value)}),c.Xb(),c.Xb(),c.Sc(27,U,8,10,"div",13),c.Sc(28,L,9,10,"div",13),c.Yb(29,"div",6),c.Yb(30,"label",14),c.Uc(31,"Gender"),c.Xb(),c.Yb(32,"div",15),c.Yb(33,"p-radioButton",16),c.ic("ngModelChange",function(t){return e.GenderSelcted=t})("onClick",function(){return e.ShowTherapyList()}),c.Xb(),c.Yb(34,"label",17),c.Uc(35,"All"),c.Xb(),c.Yb(36,"p-radioButton",18),c.ic("ngModelChange",function(t){return e.GenderSelcted=t})("onClick",function(){return e.ShowTherapyList()}),c.Xb(),c.Yb(37,"label",17),c.Uc(38,"Male"),c.Xb(),c.Yb(39,"p-radioButton",19),c.ic("ngModelChange",function(t){return e.GenderSelcted=t})("onClick",function(){return e.ShowTherapyList()}),c.Xb(),c.Yb(40,"label",20),c.Uc(41,"Female"),c.Xb(),c.Xb(),c.Xb(),c.Xb(),c.Yb(42,"div",21),c.Yb(43,"div",1),c.Yb(44,"p-table",22,23),c.ic("onFilter",function(i){c.Lc(t);const n=c.Ic(45);return e.onFilter(i,n)}),c.Sc(46,R,12,5,"ng-template",24),c.Sc(47,G,3,1,"ng-template",25),c.Sc(48,E,14,4,"ng-template",26),c.Sc(49,j,23,5,"ng-template",27),c.Sc(50,tt,26,17,"ng-template",28),c.Xb(),c.Xb(),c.Xb(),c.Xb(),c.Xb(),c.Xb(),c.Xb()}2&t&&(c.Fb(4),c.tc("ngIf",e.UserTypeCurre===e.userTypes.SuperAdmin),c.Fb(7),c.Pc(c.yc(31,X)),c.tc("options",e.stlstbookingtype)("ngModel",e.bookingtype)("ngModelOptions",c.yc(32,F)),c.Fb(1),c.tc("ngIf","OPD"==e.bookingtype),c.Fb(6),c.Pc(c.yc(33,X)),c.tc("options",e.lstTreatmentCategory)("ngModel",e.SelectedTreatCategory)("overlayVisible",!1),c.Fb(1),c.tc("ngIf","IPD"==e.bookingtype),c.Fb(1),c.tc("ngIf","IPD"==e.bookingtype),c.Fb(6),c.Pc(c.yc(34,X)),c.tc("options",e.stlstfilterby)("ngModel",e.filterBy)("ngModelOptions",c.yc(35,F)),c.Fb(1),c.tc("ngIf","TreatPeriod"==e.filterBy),c.Fb(1),c.tc("ngIf","AdmDate"==e.filterBy),c.Fb(5),c.tc("ngModel",e.GenderSelcted),c.Fb(3),c.tc("ngModel",e.GenderSelcted),c.Fb(3),c.tc("ngModel",e.GenderSelcted),c.Fb(5),c.tc("value",e.LstTreatmentClinicSchedulePrescription)("rowHover",!0)("globalFilterFields",c.yc(36,et))("scrollable",!0)("rows",15)("virtualScroll",!0)("virtualRowHeight",34))},directives:[s.p,h.a,p.o,p.r,u.a,m.a,g.c,f.i,y.a,S.a,C.a,T.b],pipes:[s.f],styles:[""]}),t})()}}]);