!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function n(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var i,n=r(e);if(t){var s=r(this).constructor;i=Reflect.construct(n,arguments,s)}else i=n.apply(this,arguments);return o(this,i)}}function o(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{rKr6:function(o,r,s){"use strict";s.r(r),s.d(r,"DownloadReportsModule",function(){return K});var a=s("ofXK"),l=s("tyNb"),c=s("CwUn"),d=s("Nach"),p=s("fXoL"),h=s("dcBc"),m=s("ReGW"),u=s("NLkC"),b=s("PtJb"),f=s("rEr+"),g=s("7zfz"),y=s("AAHA"),S=s("arFO"),v=s("3Pt+"),C=s("eO1q"),I=s("V5BG"),R=s("7kUa"),D=s("jIHw"),M=["dt"],P=["filtr"],w=["calendar"];function Y(e,t){if(1&e){var i=p.Zb();p.Yb(0,"div",7),p.Yb(1,"div",17),p.Yb(2,"app-center-dropdown",18),p.ic("onselectedClinic",function(e){return p.Lc(i),p.mc().onselectedClinic(e)}),p.Xb(),p.Xb(),p.Xb()}if(2&e){var n=p.mc();p.Fb(2),p.tc("ClinicIdSelected",n.ClinicIdSelected)("isCenterAll",n.isCenterAll)("mode","get")}}var x=function(){return{width:"100%"}},X=function(){return{standalone:!0}};function T(e,t){if(1&e){var i=p.Zb();p.Yb(0,"div",19),p.Yb(1,"div",17),p.Yb(2,"label",20),p.Uc(3,"Select Year "),p.Xb(),p.Yb(4,"p-dropdown",21),p.ic("ngModelChange",function(e){return p.Lc(i),p.mc().year=e}),p.Xb(),p.Xb(),p.Xb()}if(2&e){var n=p.mc();p.Fb(4),p.Pc(p.yc(5,x)),p.tc("options",n.stlstYear)("ngModel",n.year)("ngModelOptions",p.yc(6,X))}}function k(e,t){if(1&e){var i=p.Zb();p.Yb(0,"div",19),p.Yb(1,"div",17),p.Yb(2,"label",20),p.Uc(3,"Select Category "),p.Xb(),p.Yb(4,"p-dropdown",22),p.ic("ngModelChange",function(e){return p.Lc(i),p.mc().selectedItemCatg=e}),p.Xb(),p.Xb(),p.Xb()}if(2&e){var n=p.mc();p.Fb(4),p.Pc(p.yc(5,x)),p.tc("options",n.lstCategoryMaster)("ngModel",n.selectedItemCatg)("ngModelOptions",p.yc(6,X))}}function N(e,t){if(1&e){var i=p.Zb();p.Yb(0,"div",19),p.Yb(1,"div",23),p.Yb(2,"label",20),p.Uc(3,"Booking Type "),p.Yb(4,"span",24),p.Uc(5,"*"),p.Xb(),p.Xb(),p.Yb(6,"p-dropdown",21),p.ic("ngModelChange",function(e){return p.Lc(i),p.mc().bookingtype=e}),p.Xb(),p.Xb(),p.Xb()}if(2&e){var n=p.mc();p.Fb(6),p.Pc(p.yc(5,x)),p.tc("options",n.stlstbookingtype)("ngModel",n.bookingtype)("ngModelOptions",p.yc(6,X))}}function F(e,t){if(1&e){var i=p.Zb();p.Yb(0,"div",19),p.Yb(1,"div",23),p.Yb(2,"label",20),p.Uc(3,"Booking Status"),p.Yb(4,"span",24),p.Uc(5,"*"),p.Xb(),p.Xb(),p.Yb(6,"p-dropdown",21),p.ic("ngModelChange",function(e){return p.Lc(i),p.mc().SerachStatusbooking=e}),p.Xb(),p.Xb(),p.Xb()}if(2&e){var n=p.mc();p.Fb(6),p.Pc(p.yc(5,x)),p.tc("options",n.stlstbookingstatus)("ngModel",n.SerachStatusbooking)("ngModelOptions",p.yc(6,X))}}function U(e,t){if(1&e){var i=p.Zb();p.Yb(0,"div",19),p.Yb(1,"div",23),p.Yb(2,"label",20),p.Uc(3,"Patient Condition"),p.Yb(4,"span",24),p.Uc(5,"*"),p.Xb(),p.Xb(),p.Yb(6,"p-dropdown",25),p.ic("ngModelChange",function(e){return p.Lc(i),p.mc().SelectedPatientCondition=e}),p.Xb(),p.Xb(),p.Xb()}if(2&e){var n=p.mc();p.Fb(6),p.Pc(p.yc(5,x)),p.tc("options",n.stlstpatientcondition)("ngModel",n.SelectedPatientCondition)("ngModelOptions",p.yc(6,X))}}function E(e,t){if(1&e){var i=p.Zb();p.Yb(0,"div",7),p.Yb(1,"div",17),p.Yb(2,"label",26),p.Uc(3,"Select Date"),p.Yb(4,"span",24),p.Uc(5,"*"),p.Xb(),p.Xb(),p.Yb(6,"div"),p.Yb(7,"p-calendar",27,28),p.ic("ngModelChange",function(e){return p.Lc(i),p.mc().selectToday=e}),p.Xb(),p.Xb(),p.Xb(),p.Xb()}if(2&e){var n=p.mc();p.Fb(7),p.wc("yearRange","",n.customDateFormat.MinYear,":",n.maxYear,""),p.tc("monthNavigator",!0)("yearNavigator",!0)("maxDate",n.today)("ngModel",n.selectToday)("ngModelOptions",p.yc(10,X))("showIcon",!0)("dateFormat",n.customDateFormat.CalendarFormat)("readonlyInput",!1)}}function L(e,t){if(1&e){var i=p.Zb();p.Yb(0,"div",19),p.Yb(1,"div",23),p.Yb(2,"label",20),p.Uc(3,"Departament "),p.Xb(),p.Yb(4,"p-dropdown",29),p.ic("ngModelChange",function(e){return p.Lc(i),p.mc().DepartmentSelected=e}),p.Xb(),p.Xb(),p.Xb()}if(2&e){var n=p.mc();p.Fb(4),p.Pc(p.yc(5,x)),p.tc("options",n.lstDeptItem)("ngModel",n.DepartmentSelected)("filter",!0)}}function _(e,t){if(1&e){var i=p.Zb();p.Yb(0,"div",19),p.Yb(1,"div",23),p.Yb(2,"label",20),p.Uc(3,"Doctor "),p.Xb(),p.Yb(4,"p-dropdown",30),p.ic("ngModelChange",function(e){return p.Lc(i),p.mc().DoctorId=e}),p.Xb(),p.Xb(),p.Xb()}if(2&e){var n=p.mc();p.Fb(4),p.Pc(p.yc(5,x)),p.tc("options",n.lstDoctorMster)("ngModel",n.DoctorId)("filter",!0)}}function A(e,t){if(1&e){var i=p.Zb();p.Yb(0,"div",17),p.Yb(1,"label",20),p.Uc(2,"From / To"),p.Yb(3,"span",24),p.Uc(4,"*"),p.Xb(),p.Xb(),p.Yb(5,"div"),p.Yb(6,"p-calendar",31,28),p.ic("ngModelChange",function(e){return p.Lc(i),p.mc().rangeDates=e})("onSelect",function(){return p.Lc(i),p.mc().dateRangeChange()}),p.Xb(),p.Xb(),p.Xb()}if(2&e){var n=p.mc();p.Fb(6),p.wc("yearRange","",n.customDateFormat.MinYear,":",n.maxYear,""),p.tc("monthNavigator",!0)("yearNavigator",!0)("maxDate",n.today)("ngModel",n.rangeDates)("ngModelOptions",p.yc(10,X))("showIcon",!0)("dateFormat",n.customDateFormat.CalendarFormat)("readonlyInput",!0)}}function O(e,t){if(1&e){var i=p.Zb();p.Yb(0,"div",1),p.Yb(1,"div",17),p.Yb(2,"label",20),p.Uc(3,"Select Disease"),p.Yb(4,"span",24),p.Uc(5,"*"),p.Xb(),p.Xb(),p.Yb(6,"div"),p.Yb(7,"p-autoComplete",32),p.ic("ngModelChange",function(e){return p.Lc(i),p.mc().selectedDisease=e})("completeMethod",function(e){return p.Lc(i),p.mc().SearchDiseaseMaster(e)}),p.Xb(),p.Xb(),p.Xb(),p.Xb()}if(2&e){var n=p.mc();p.Fb(7),p.tc("ngModel",n.selectedDisease)("suggestions",n.results)("minLength",3)("forceSelection",!0)("multiple",!0)}}function W(e,t){if(1&e){var i=p.Zb();p.Yb(0,"div",33),p.Yb(1,"span",34),p.Uc(2),p.Xb(),p.Yb(3,"span",35),p.Yb(4,"span",36),p.Tb(5,"i",37),p.Yb(6,"input",38,39),p.ic("input",function(e){return p.Lc(i),p.mc(),p.Ic(20).filterGlobal(e.target.value,"contains")}),p.Xb(),p.Xb(),p.Xb(),p.Xb()}if(2&e){var n=p.mc();p.Fb(2),p.Wc(" ",(null==n.reportList?null:n.reportList.length)>0?"Total Records: "+n.filteredValuesLength:""," ")}}function B(e,t){if(1&e&&(p.Yb(0,"tr"),p.Yb(1,"td"),p.Uc(2," No records found "),p.Xb(),p.Xb()),2&e){var i=t.$implicit;p.Fb(1),p.Gb("colspan",null==i?null:i.length)}}function V(e,t){1&e&&(p.Yb(0,"tr"),p.Yb(1,"th"),p.Uc(2,"S.No"),p.Xb(),p.Yb(3,"th"),p.Uc(4,"Report Name"),p.Xb(),p.Yb(5,"th"),p.Uc(6,"Action"),p.Xb(),p.Xb())}function Z(e,t){if(1&e){var i=p.Zb();p.Yb(0,"button",42),p.ic("click",function(e){p.Lc(i);var t=p.mc().$implicit,n=p.mc();return e.stopPropagation(),n.DownloadReport(t.filename)}),p.Xb()}}function j(e,t){if(1&e){var i=p.Zb();p.Yb(0,"tr",40),p.ic("click",function(){p.Lc(i);var e=t.$implicit,n=t.rowIndex;return p.mc().onRowSelect(e,n)}),p.Yb(1,"td"),p.Uc(2),p.Xb(),p.Yb(3,"td"),p.Uc(4),p.Xb(),p.Yb(5,"td"),p.Sc(6,Z,1,0,"button",41),p.Xb(),p.Xb()}if(2&e){var n=t.$implicit,o=t.rowIndex;p.Fb(1),p.Hb(n.isSelected?"SelectedRowClass":""),p.Fb(1),p.Vc(o+1),p.Fb(1),p.Hb(n.isSelected?"SelectedRowClass":""),p.Fb(1),p.Vc(n.displayfilename),p.Fb(1),p.Hb(n.isSelected?"SelectedRowClass":""),p.Fb(1),p.tc("ngIf",n.isSelected)}}var G,H,J,$=function(){return["displayfilename"]},q=[{path:"",component:(G=function(o){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(c,o);var r,s,a,l=n(c);function c(t,i,n,o,r,s,a){var p;e(this,c),(p=l.call(this))._MasterServices=t,p._DoctorServices=i,p.cdRef=n,p._ConstantServices=o,p._UtilityService=r,p._ReportService=s,p.datepipe=a,p.UserTypeCurre=localStorage.getItem("userTypeId"),p.userTypes=d.s,p.clinicType=null,p.ClinicIdSelected=null,p.today=new Date,p.rangeDates=[],p.maxYear=(new Date).getFullYear(),p.customDateFormat=d.h,p.filteredValuesLength=0,p.reportList=[],p.selectedReport=[],p.stlstYear=[],p.selectedReportName=null,p.selectedItemCatg="Treatment",p.lstCategoryMaster=[],p.Isdisabled=!1,p.bookingtype=null,p.bookingStatus=d.d,p.SerachStatusbooking=6,p.SelectedPatientCondition="CP",p.stlstpatientcondition=[],p.results=[],p.lstDoctorMster=[],p.DoctorId="",p.isCenterAll=!1,p.domainName=null,p.lstDeptItem=[],p.DepartmentSelected=null,p._ConstantServices.ActiveMenuName="Download Reports",p.stlstbookingtype=JSON.parse(localStorage.getItem("IsChikitsalaya"))?[{name:"OPD",code:"OPD"}]:[{name:"IPD",code:"IPD"},{name:"OPD",code:"OPD"}],p.stlstbookingstatus=[{name:p.bookingStatus[p.bookingStatus.Admitted],code:p.bookingStatus.Admitted},{name:p.bookingStatus[p.bookingStatus.Discharged],code:p.bookingStatus.Discharged}],p.stlstpatientcondition=[{PatientCondition:"All",PatientConditionCode:"All"},{PatientCondition:"Critical Patient",PatientConditionCode:"CP"},{PatientCondition:"Wheel Chair Patient",PatientConditionCode:"WCP"},{PatientCondition:"Need Assistance",PatientConditionCode:"NA"},{PatientCondition:"Detoxification",PatientConditionCode:"DETOX"}];for(var h=2022,m=(new Date).getFullYear()+2;m>=h;)p.stlstYear.push({name:h,code:h}),h+=1;return p.year=(new Date).getFullYear(),p.maxYear=p.today.getFullYear(),p}return r=c,(s=[{key:"ngOnInit",value:function(){d.s.SuperAdmin!==localStorage.getItem("userTypeId")&&(this.ClinicIdSelected=localStorage.getItem("ClinicId")),this.GetItemCatgMaster(),this.selectToday=new Date,this.rangeDates=[new Date,new Date],this.GetDownloadReportMaster(),this.LoadAllDepartmentItem()}},{key:"dateRangeChange",value:function(){this.rangeDates[0]&&this.rangeDates[1]&&void 0!==this.calendar&&(this.calendar.overlayVisible=!1)}},{key:"onselectedClinic",value:function(e){this.ClinicIdSelected=e.ClinicId,this.domainName=e.DomainName,"DoctorConsultationPatientDetailsReport"===this.selectedReportName&&null!=this.ClinicIdSelected&&null!=this.ClinicIdSelected&&""!=this.ClinicIdSelected&&this.LoadAllDoctorListByClinic()}},{key:"GetItemCatgMaster",value:function(){var e=this;this._UtilityService.showSpinner(),this.unsubscribe.add=this._MasterServices.GetItemCatgMaster().subscribe(function(t){if(e._UtilityService.hideSpinner(),1==t.actionResult.success){var i=JSON.parse(t.actionResult.result);e.lstCategoryMaster=i=i||[],e.cdRef.detectChanges()}else e.lstCategoryMaster=[],e.cdRef.detectChanges()},function(t){e._UtilityService.hideSpinner(),e._UtilityService.showErrorAlert(t.message)})}},{key:"GetDownloadReportMaster",value:function(){var e=this;this._UtilityService.showSpinner(),this.unsubscribe.add=this._ReportService.GetDownloadReportMaster(!0,localStorage.getItem("userId")).subscribe(function(t){var i;if(e._UtilityService.hideSpinner(),1==t.actionResult.success){var n=JSON.parse(t.actionResult.result);e.reportList=n=n||[],void 0!==e.filtr&&(e.filtr.nativeElement.value="",e.dataTable.reset(),e.filteredValuesLength=null===(i=e.reportList)||void 0===i?void 0:i.length),e.cdRef.detectChanges()}else e.reportList=[],e.cdRef.detectChanges()},function(t){e._UtilityService.hideSpinner(),e._UtilityService.showErrorAlert(t.message)})}},{key:"DownloadReport",value:function(e){var t;if(this.selectedReport=this.reportList.filter(function(t){return t.filename==e}),this.selectedReportName=this.selectedReport[0].reportname,"BookingAgainstRegistration"==this.selectedReport[0].reportname){if(null==this.ClinicIdSelected||null==this.ClinicIdSelected||""==this.ClinicIdSelected)return void this._UtilityService.showWarningAlert("Please select center");var i={};i.reportname=this.selectedReport[0].reportname,i.filename=this.selectedReport[0].filename,i.clinicId=this.ClinicIdSelected,i.bookingType="IPD",i.year=this.year,this.exportToItemExcel(i)}else if("ExportDomainWiseItemPrice"==this.selectedReport[0].reportname){if(null==this.ClinicIdSelected||null==this.ClinicIdSelected)return void this._UtilityService.showWarningAlert("Please select center");var n={};n.reportname=this.selectedReport[0].reportname,n.filename=this.selectedReport[0].filename,n.DomainName=""===this.ClinicIdSelected?"0":this.domainName,n.Category=this.selectedItemCatg,n.year=this.year,this.exportToItemExcel(n)}else if("ExportPatientPrescriptionReport"==this.selectedReport[0].reportname){if(null==this.ClinicIdSelected||null==this.ClinicIdSelected||""==this.ClinicIdSelected)return void this._UtilityService.showWarningAlert("Please select center");if(!this.dateRangeValidation(this.rangeDates[0],this.rangeDates[1],30))return void this._UtilityService.showWarningAlert("Date range should be maximum 30 days");var o={};o.reportname=this.selectedReport[0].reportname,o.filename=this.selectedReport[0].filename,o.clinicId=this.ClinicIdSelected,o.dFrom=this.datepipe.transform(this.rangeDates[0],"yyyy-MM-dd"),o.dTo=this.datepipe.transform(this.rangeDates[1],"yyyy-MM-dd"),o.bookingType="IPD",this.exportToItemExcel(o)}else if("ExportPatientDietMedicineReportByDate"==this.selectedReport[0].reportname){if(null==this.ClinicIdSelected||null==this.ClinicIdSelected||""==this.ClinicIdSelected)return void this._UtilityService.showWarningAlert("Please select center");var r={};r.reportname=this.selectedReport[0].reportname,r.filename=this.selectedReport[0].filename,r.clinicId=this.ClinicIdSelected,r.dFrom=this.datepipe.transform(this.selectToday,"yyyy-MM-dd"),r.Category=this.SelectedPatientCondition,r.bookingType="IPD",this.exportToItemExcel(r)}else if("ExportPatientPathologyReportByDate"==this.selectedReport[0].reportname){if(null==this.ClinicIdSelected||null==this.ClinicIdSelected||""==this.ClinicIdSelected)return void this._UtilityService.showWarningAlert("Please select center");var s={};s.reportname=this.selectedReport[0].reportname,s.filename=this.selectedReport[0].filename,s.clinicId=this.ClinicIdSelected,s.dFrom=this.datepipe.transform(this.rangeDates[0],"yyyy-MM-dd"),s.dTo=this.datepipe.transform(this.rangeDates[1],"yyyy-MM-dd"),s.bookingType=this.bookingtype,this.exportToItemExcel(s)}else if("ExportTreatmentListByType"==this.selectedReport[0].reportname){if(null==this.ClinicIdSelected||null==this.ClinicIdSelected||""==this.ClinicIdSelected)return void this._UtilityService.showWarningAlert("Please select center");var a={};a.reportname=this.selectedReport[0].reportname,a.filename=this.selectedReport[0].filename,a.clinicId=this.ClinicIdSelected,a.bookingType=this.bookingtype,this.exportToItemExcel(a)}else if("ExportMembershipReportByDate"==this.selectedReport[0].reportname){var l={};l.reportname=this.selectedReport[0].reportname,l.filename=this.selectedReport[0].filename,l.dFrom=this.datepipe.transform(this.rangeDates[0],"yyyy-MM-dd"),l.dTo=this.datepipe.transform(this.rangeDates[1],"yyyy-MM-dd"),this.exportToItemExcel(l)}else if("ExportPatientConditionReport"==this.selectedReport[0].reportname){if(null==this.ClinicIdSelected||null==this.ClinicIdSelected||""==this.ClinicIdSelected||"0"==this.ClinicIdSelected)return void this._UtilityService.showWarningAlert("Please select center");var c={};c.reportname=this.selectedReport[0].reportname,c.filename=this.selectedReport[0].filename,c.clinicId=this.ClinicIdSelected,c.dFrom=this.datepipe.transform(this.rangeDates[0],"yyyy-MM-dd"),c.dTo=this.datepipe.transform(this.rangeDates[1],"yyyy-MM-dd"),c.bookingStatus=this.SerachStatusbooking,c.Category=this.SelectedPatientCondition,this.exportToItemExcel(c)}else if("ExportMyReferredPatients"==this.selectedReport[0].reportname){if(null==this.ClinicIdSelected||null==this.ClinicIdSelected||""==this.ClinicIdSelected)return void this._UtilityService.showWarningAlert("Please select center");var p={};p.reportname=this.selectedReport[0].reportname,p.filename=this.selectedReport[0].filename,p.userTypeId=this.UserTypeCurre,p.clinicId=this.ClinicIdSelected,p.doctorId=1==JSON.parse(localStorage.getItem("IsChikitsalaya"))?localStorage.getItem("userId"):null,p.dFrom=this.datepipe.transform(this.rangeDates[0],"yyyy-MM-dd"),p.dTo=this.datepipe.transform(this.rangeDates[1],"yyyy-MM-dd"),this.exportToItemExcel(p)}else if("ExportDiseaseWiseReport"==this.selectedReport[0].reportname){if(null==this.ClinicIdSelected||null==this.ClinicIdSelected||""==this.ClinicIdSelected)return void this._UtilityService.showWarningAlert("Please select center");if(0==this.selectedDisease.length)return void this._UtilityService.showWarningAlert("Please Select Disease");for(var h=[],m=0;m<(null===(t=this.selectedDisease)||void 0===t?void 0:t.length);m++)h.push({id:this.selectedDisease[m].DiseaseId});var u={};u.reportname=this.selectedReport[0].reportname,u.filename=this.selectedReport[0].filename,u.clinicId=this.ClinicIdSelected,u.bookingType=this.bookingtype,u.bookingStatus=this.SerachStatusbooking,u.lstCommonId=h,u.dFrom=this.datepipe.transform(this.rangeDates[0],"yyyy-MM-dd"),u.dTo=this.datepipe.transform(this.rangeDates[1],"yyyy-MM-dd"),this.exportToItemExcel(u)}else if("DoctorConsultationPatientDetailsReport"==this.selectedReport[0].reportname){if(null==this.ClinicIdSelected||null==this.ClinicIdSelected||""==this.ClinicIdSelected||"0"==this.ClinicIdSelected)return void this._UtilityService.showWarningAlert("Please select center");d.s.Doctor===localStorage.getItem("userTypeId")&&(this.DoctorId=localStorage.getItem("userId"));var b={};b.reportname=this.selectedReport[0].reportname,b.filename=this.selectedReport[0].filename,b.clinicId=this.ClinicIdSelected,b.doctorId=this.DoctorId,b.dFrom=new Date(this.datepipe.transform(this.rangeDates[0],"yyyy-MM-dd")),b.dTo=new Date(this.datepipe.transform(this.rangeDates[1],"yyyy-MM-dd")),this._MasterServices.downloadReport(b)}else if("ExportReferToDentistReport"==this.selectedReport[0].reportname){if(null==this.ClinicIdSelected||null==this.ClinicIdSelected||""==this.ClinicIdSelected||"0"==this.ClinicIdSelected)return void this._UtilityService.showWarningAlert("Please select center");var f={};f.reportname=this.selectedReport[0].reportname,f.filename=this.selectedReport[0].filename,f.clinicId=this.ClinicIdSelected,f.dFrom=this.datepipe.transform(this.rangeDates[0],"yyyy-MM-dd"),f.dTo=this.datepipe.transform(this.rangeDates[1],"yyyy-MM-dd"),this.exportToItemExcel(f)}else if("DepartmentWiseItemReport"==this.selectedReport[0].reportname){if(null==this.ClinicIdSelected||null==this.ClinicIdSelected||""==this.ClinicIdSelected||"0"==this.ClinicIdSelected)return void this._UtilityService.showWarningAlert("Please select center");var g={};g.reportname=this.selectedReport[0].reportname,g.filename=this.selectedReport[0].filename,g.clinicId=this.ClinicIdSelected,g.Category=this.DepartmentSelected,g.dFrom=this.datepipe.transform(this.rangeDates[0],"yyyy-MM-dd"),g.dTo=this.datepipe.transform(this.rangeDates[1],"yyyy-MM-dd"),this.exportToItemExcel(g)}}},{key:"onRowSelect",value:function(e,t){this.today=new Date,this.selectToday=new Date,this.rangeDates=[new Date,new Date],this.isCenterAll=!1,this.reportList.map(function(e){e.isSelected=!1}),this.reportList[t].isSelected=!0,this.selectedReportName=e.reportname,this.selectedDisease=[],"ExportPatientPrescriptionReport"!=this.selectedReportName&&"ExportPatientDietMedicineReportByDate"!=this.selectedReportName||(this.today=new Date,this.today.setMonth(this.today.getMonth()+1)),this.stlstbookingstatus="ExportDiseaseWiseReport"===this.selectedReportName?[{name:"All",code:0},{name:this.bookingStatus[this.bookingStatus.Admitted],code:this.bookingStatus.Admitted},{name:this.bookingStatus[this.bookingStatus.Discharged],code:this.bookingStatus.Discharged}]:[{name:this.bookingStatus[this.bookingStatus.Admitted],code:this.bookingStatus.Admitted},{name:this.bookingStatus[this.bookingStatus.Discharged],code:this.bookingStatus.Discharged}],"ExportDomainWiseItemPrice"===this.selectedReportName?(this.isCenterAll=!0,this.ClinicIdSelected=""):"ExportPatientPathologyReportByDate"===this.selectedReportName||"ExportTreatmentListByType"===this.selectedReportName||"ExportDiseaseWiseReport"===this.selectedReportName?this.bookingtype="IPD":"DoctorConsultationPatientDetailsReport"===this.selectedReportName?null!=this.ClinicIdSelected&&null!=this.ClinicIdSelected&&""!=this.ClinicIdSelected&&this.LoadAllDoctorListByClinic():this.ClinicIdSelected=d.s.SuperAdmin!==localStorage.getItem("userTypeId")?localStorage.getItem("ClinicId"):null,this.cdRef.detectChanges()}},{key:"SearchDiseaseMaster",value:function(e){var t=this;this.unsubscribe.add=this._MasterServices.SearchDiseaseMaster(e.query).subscribe(function(e){if(t._UtilityService.hideSpinner(),t.cdRef.detectChanges(),1==e.actionResult.success){var i=JSON.parse(e.actionResult.result);t.results=i=i||[],t.cdRef.detectChanges()}else t.results=[]})}},{key:"LoadAllDoctorListByClinic",value:function(){var e=this;this._UtilityService.showSpinner(),this._DoctorServices.GetDoctorListByClinicId(this.ClinicIdSelected).subscribe(function(t){if(e._UtilityService.hideSpinner(),1==t.actionResult.success){var i=JSON.parse(t.actionResult.result);e.lstDoctorMster=i=i||[],e.lstDoctorMster.unshift({UserId:"",FullName:"All"}),e.DoctorId="",e.cdRef.detectChanges()}else e.lstDoctorMster=[],e.cdRef.detectChanges()},function(t){e._UtilityService.hideSpinner(),e._UtilityService.showErrorAlert(t.message)})}},{key:"LoadAllDepartmentItem",value:function(){var e=this;this.lstDeptItem=[],this._UtilityService.showSpinner(),this._MasterServices.GetDepartmentMasterItem().subscribe(function(t){if(e._UtilityService.hideSpinner(),1==t.actionResult.success){var i=JSON.parse(t.actionResult.result);e.lstDeptItem=i=i||[],e.cdRef.detectChanges()}else e.lstDeptItem=[],e.cdRef.detectChanges()},function(t){e._UtilityService.hideSpinner(),e._UtilityService.showErrorAlert(t.message)})}},{key:"onFilter",value:function(e,t){this.filteredValuesLength=e.filteredValue.length}},{key:"exportToItemExcel",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._MasterServices.downloadReport(e)}}])&&t(r.prototype,s),a&&t(r,a),c}(c.a),G.\u0275fac=function(e){return new(e||G)(p.Sb(h.a),p.Sb(m.a),p.Sb(p.h),p.Sb(d.f),p.Sb(u.a),p.Sb(b.a),p.Sb(a.f))},G.\u0275cmp=p.Mb({type:G,selectors:[["app-download-reports"]],viewQuery:function(e,t){var i;1&e&&(p.cd(M,1),p.cd(P,1),p.cd(w,1)),2&e&&(p.Hc(i=p.jc())&&(t.dataTable=i.first),p.Hc(i=p.jc())&&(t.filtr=i.first),p.Hc(i=p.jc())&&(t.calendar=i.first))},features:[p.Cb],decls:25,vars:16,consts:[[1,"row","mt25"],[1,"col-md-12"],[1,"card"],[1,"card-body"],[1,"row","mb-2","m-0"],["class","col-md-3",4,"ngIf"],["class","col-md-2",4,"ngIf"],[1,"col-md-3"],["class","form-group",4,"ngIf"],["class","col-md-12",4,"ngIf"],[1,"row"],["responsiveLayout","scroll","styleClass","p-datatable-striped","scrollHeight","calc(100vh - 165px)",3,"value","rowHover","globalFilterFields","scrollable","onFilter"],["dt",""],["pTemplate","caption"],["pTemplate","emptymessage"],["pTemplate","header"],["pTemplate","body"],[1,"form-group"],[3,"ClinicIdSelected","isCenterAll","mode","onselectedClinic"],[1,"col-md-2"],["for",""],["optionLabel","name","optionValue","code",3,"options","ngModel","ngModelOptions","ngModelChange"],["optionLabel","CategoryName","optionValue","CategoryName",3,"options","ngModel","ngModelOptions","ngModelChange"],[1,"form-group","mb-0"],[1,"required"],["optionLabel","PatientCondition","optionValue","PatientConditionCode",3,"options","ngModel","ngModelOptions","ngModelChange"],[1,"mr-2"],["inputId","icon",3,"monthNavigator","yearNavigator","yearRange","maxDate","ngModel","ngModelOptions","showIcon","dateFormat","readonlyInput","ngModelChange"],["calendar",""],["name","ddllstDeptItem","appendTo","body","optionLabel","Department","optionValue","Department","placeholder","Select Depertment",3,"options","ngModel","filter","ngModelChange"],["name","ddlDoctorList","appendTo","body","optionLabel","FullName","optionValue","UserId","placeholder","Select Doctor",3,"options","ngModel","filter","ngModelChange"],["selectionMode","range","inputId","icon","name","rangeDates",3,"monthNavigator","yearNavigator","yearRange","maxDate","ngModel","ngModelOptions","showIcon","dateFormat","readonlyInput","ngModelChange","onSelect"],["appendTo","body","field","DiseaseName",3,"ngModel","suggestions","minLength","forceSelection","multiple","ngModelChange","completeMethod"],[1,"p-d-flex"],[1,"p-ml-left"],[1,"p-ml-auto"],[1,"p-input-icon-left"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search...",3,"input"],["filtr",""],[3,"click"],["pButton","","matTooltip","Export Report","label"," ","class"," mr-2","icon","pi pi-download",3,"click",4,"ngIf"],["pButton","","matTooltip","Export Report","label"," ","icon","pi pi-download",1,"mr-2",3,"click"]],template:function(e,t){if(1&e){var i=p.Zb();p.Yb(0,"div",0),p.Yb(1,"div",1),p.Yb(2,"div",2),p.Yb(3,"div",3),p.Yb(4,"div",4),p.Sc(5,Y,3,3,"div",5),p.Sc(6,T,5,7,"div",6),p.Sc(7,k,5,7,"div",6),p.Sc(8,N,7,7,"div",6),p.Sc(9,F,7,7,"div",6),p.Sc(10,U,7,7,"div",6),p.Sc(11,E,9,11,"div",5),p.Sc(12,L,5,6,"div",6),p.Sc(13,_,5,6,"div",6),p.Yb(14,"div",7),p.Sc(15,A,8,11,"div",8),p.Xb(),p.Sc(16,O,8,5,"div",9),p.Xb(),p.Yb(17,"div",10),p.Yb(18,"div",1),p.Yb(19,"p-table",11,12),p.ic("onFilter",function(e){p.Lc(i);var n=p.Ic(20);return t.onFilter(e,n)}),p.Sc(21,W,8,1,"ng-template",13),p.Sc(22,B,3,1,"ng-template",14),p.Sc(23,V,7,0,"ng-template",15),p.Sc(24,j,7,12,"ng-template",16),p.Xb(),p.Xb(),p.Xb(),p.Xb(),p.Xb(),p.Xb(),p.Xb()}2&e&&(p.Fb(5),p.tc("ngIf",t.UserTypeCurre===t.userTypes.SuperAdmin||"ExportDomainWiseItemPrice"===t.selectedReportName),p.Fb(1),p.tc("ngIf","BookingAgainstRegistration"===t.selectedReportName),p.Fb(1),p.tc("ngIf","ExportDomainWiseItemPrice"===t.selectedReportName),p.Fb(1),p.tc("ngIf","ExportPatientPathologyReportByDate"===t.selectedReportName||"ExportTreatmentListByType"===t.selectedReportName||"ExportDiseaseWiseReport"===t.selectedReportName),p.Fb(1),p.tc("ngIf",("ExportPatientConditionReport"===t.selectedReportName||"ExportDiseaseWiseReport"===t.selectedReportName)&&"IPD"==t.bookingtype),p.Fb(1),p.tc("ngIf","ExportPatientConditionReport"===t.selectedReportName||"ExportPatientDietMedicineReportByDate"===t.selectedReportName),p.Fb(1),p.tc("ngIf","ExportPatientDietMedicineReportByDate"===t.selectedReportName),p.Fb(1),p.tc("ngIf","DepartmentWiseItemReport"===t.selectedReportName),p.Fb(1),p.tc("ngIf",t.UserTypeCurre!=t.userTypes.Doctor&&"DoctorConsultationPatientDetailsReport"===t.selectedReportName),p.Fb(2),p.tc("ngIf","ExportPatientPrescriptionReport"===t.selectedReportName||"ExportPatientPathologyReportByDate"===t.selectedReportName||"ExportMembershipReportByDate"===t.selectedReportName||"ExportPatientConditionReport"===t.selectedReportName||"ExportMyReferredPatients"===t.selectedReportName||"ExportDiseaseWiseReport"===t.selectedReportName||"DoctorConsultationPatientDetailsReport"===t.selectedReportName||"ExportReferToDentistReport"===t.selectedReportName||"DepartmentWiseItemReport"===t.selectedReportName),p.Fb(1),p.tc("ngIf","ExportDiseaseWiseReport"===t.selectedReportName),p.Fb(3),p.tc("value",t.reportList)("rowHover",!0)("globalFilterFields",p.yc(15,$))("scrollable",!0))},directives:[a.p,f.c,g.i,y.a,S.a,v.o,v.r,C.a,I.a,R.a,D.b],styles:[".SelectedRowClass[_ngcontent-%COMP%]{background-color:#d3d3d3;color:#000;font-weight:700}"]}),G)}],Q=((H=function t(){e(this,t)}).\u0275fac=function(e){return new(e||H)},H.\u0275mod=p.Qb({type:H}),H.\u0275inj=p.Pb({imports:[[l.l.forChild(q)],l.l]}),H),z=s("T2Aj"),K=((J=function t(){e(this,t)}).\u0275fac=function(e){return new(e||J)},J.\u0275mod=p.Qb({type:J}),J.\u0275inj=p.Pb({imports:[[a.c,Q,v.i,f.f,D.c,S.b,R.b,C.b,I.b,z.a]]}),J)}}])}();