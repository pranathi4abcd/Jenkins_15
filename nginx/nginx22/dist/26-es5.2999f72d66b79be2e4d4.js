!function(){function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return t(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,i=a(e);if(t){var o=a(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return l(this,n)}}function l(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"Let+":function(t,a,r){"use strict";r.r(a),r.d(a,"PatientBillingReportModule",function(){return oe});var s=r("ofXK"),d=r("tyNb"),b=r("Nach"),u=r("CwUn"),p=r("aeiD"),h=r("fXoL"),y=r("dcBc"),f=r("PtJb"),g=r("G+wY"),m=r("NLkC"),v=r("arFO"),T=r("3Pt+"),I=r("eO1q"),S=r("rEr+"),Y=r("7zfz"),U=r("/RsI"),X=r("AAHA"),D=r("7kUa"),w=r("jIHw"),M=r("btFH"),P=["dt"],C=["filtr"],R=["calendar"];function F(e,t){if(1&e){var n=h.Zb();h.Yb(0,"div",31),h.Yb(1,"app-center-dropdown",32),h.ic("onselectedClinic",function(e){return h.Lc(n),h.mc().onselectedClinic(e)}),h.Xb(),h.Xb()}2&e&&(h.Fb(1),h.tc("mode","get"))}var B=function(){return{width:"100%"}},A=function(){return{standalone:!0}};function k(e,t){if(1&e){var n=h.Zb();h.Yb(0,"p-dropdown",11),h.ic("ngModelChange",function(e){return h.Lc(n),h.mc(2).bookingtype=e})("onChange",function(){return h.Lc(n),h.mc(2).OnChangeBookingType()}),h.Xb()}if(2&e){var i=h.mc(2);h.Pc(h.yc(5,B)),h.tc("options",i.stlstbookingtype)("ngModel",i.bookingtype)("ngModelOptions",h.yc(6,A))}}function L(e,t){if(1&e&&(h.Yb(0,"div",7),h.Yb(1,"div",8),h.Yb(2,"label",9),h.Uc(3,"Booking Type "),h.Yb(4,"span",10),h.Uc(5,"*"),h.Xb(),h.Xb(),h.Sc(6,k,1,7,"p-dropdown",33),h.Xb(),h.Xb()),2&e){var n=h.mc();h.Fb(6),h.tc("ngIf","BOTH"==(null==n.clinicType?null:n.clinicType.toUpperCase()))}}function O(e,t){if(1&e){var n=h.Zb();h.Yb(0,"button",43),h.ic("click",function(){return h.Lc(n),h.mc(2).LoadPatientBillingReportList()}),h.Xb()}}function N(e,t){if(1&e){var n=h.Zb();h.Yb(0,"button",44),h.ic("click",function(){return h.Lc(n),h.mc(2).exportToItemExcel()}),h.Xb()}}function x(e,t){if(1&e){var n=h.Zb();h.Yb(0,"div",34),h.Yb(1,"span",35),h.Uc(2),h.Xb(),h.Yb(3,"span",36),h.Sc(4,O,1,0,"button",37),h.Sc(5,N,1,0,"button",38),h.Yb(6,"span",39),h.Tb(7,"i",40),h.Yb(8,"input",41,42),h.ic("input",function(e){return h.Lc(n),h.mc(),h.Ic(50).filterGlobal(e.target.value,"contains")}),h.Xb(),h.Xb(),h.Xb(),h.Xb()}if(2&e){var i=h.mc();h.Fb(2),h.Wc(" ",(null==i.lstPatientBillingReport?null:i.lstPatientBillingReport.length)>0?"Total Records: "+i.filteredValuesLength:""," "),h.Fb(2),h.tc("ngIf",(null==i.lstPatientBillingReport?null:i.lstPatientBillingReport.length)>0),h.Fb(1),h.tc("ngIf",(null==i.lstIAccessStr?null:i.lstIAccessStr.includes(i.ActionList.Download.toString()))&&(null==i.lstPatientBillingReport?null:i.lstPatientBillingReport.length)>0)}}function V(e,t){1&e&&(h.Yb(0,"tr"),h.Yb(1,"td"),h.Uc(2," No records found "),h.Xb(),h.Xb()),2&e&&(h.Fb(1),h.Gb("colspan",15))}function _(e,t){1&e&&h.Tb(0,"col",50)}function E(e,t){if(1&e&&(h.Yb(0,"colgroup"),h.Sc(1,_,1,0,"col",45),h.Tb(2,"col",46),h.Tb(3,"col",46),h.Tb(4,"col",47),h.Tb(5,"col",48),h.Tb(6,"col",48),h.Tb(7,"col",49),h.Tb(8,"col",50),h.Tb(9,"col",49),h.Tb(10,"col",49),h.Tb(11,"col",49),h.Tb(12,"col",49),h.Tb(13,"col",51),h.Tb(14,"col",52),h.Tb(15,"col",53),h.Tb(16,"col",49),h.Tb(17,"col",49),h.Tb(18,"col",54),h.Tb(19,"col",54),h.Tb(20,"col",54),h.Tb(21,"col",54),h.Tb(22,"col",49),h.Tb(23,"col",49),h.Tb(24,"col",49),h.Tb(25,"col",49),h.Tb(26,"col",49),h.Xb()),2&e){var n=h.mc();h.Fb(1),h.tc("ngIf","OPD"!=n.bookingtype)}}function j(e,t){1&e&&(h.Yb(0,"th"),h.Uc(1,"Group Number"),h.Xb())}function G(e,t){if(1&e&&(h.Yb(0,"tr"),h.Sc(1,j,2,0,"th",30),h.Yb(2,"th"),h.Uc(3,"Booking Number"),h.Xb(),h.Yb(4,"th"),h.Uc(5,"Name"),h.Xb(),h.Yb(6,"th"),h.Uc(7,"MR No"),h.Xb(),h.Yb(8,"th"),h.Uc(9,"Adm. Date"),h.Xb(),h.Yb(10,"th"),h.Uc(11,"Dis. Date"),h.Xb(),h.Yb(12,"th"),h.Uc(13,"No. of Days"),h.Xb(),h.Yb(14,"th"),h.Uc(15,"Status"),h.Xb(),h.Yb(16,"th"),h.Uc(17,"Amount"),h.Xb(),h.Yb(18,"th"),h.Uc(19,"Discount"),h.Xb(),h.Yb(20,"th"),h.Uc(21,"Room Rent"),h.Xb(),h.Yb(22,"th"),h.Uc(23,"Treatment / Other Charges"),h.Xb(),h.Yb(24,"th",55),h.Uc(25,"Amnt Tran Date "),h.Tb(26,"p-sortIcon",56),h.Xb(),h.Yb(27,"th",57),h.Uc(28,"Rec Date "),h.Tb(29,"p-sortIcon",58),h.Xb(),h.Yb(30,"th"),h.Uc(31,"Mode"),h.Xb(),h.Yb(32,"th"),h.Uc(33,"Transaction Id"),h.Xb(),h.Yb(34,"th"),h.Uc(35,"State"),h.Xb(),h.Yb(36,"th"),h.Uc(37,"Rec Voucher Number"),h.Xb(),h.Yb(38,"th"),h.Uc(39,"Final Tax Inv Number"),h.Xb(),h.Yb(40,"th"),h.Uc(41,"Ref Tax Inv Number"),h.Xb(),h.Yb(42,"th"),h.Uc(43,"Invoice Date"),h.Xb(),h.Yb(44,"th"),h.Uc(45,"Remarks"),h.Xb(),h.Yb(46,"th"),h.Uc(47,"Requested By"),h.Xb(),h.Yb(48,"th"),h.Uc(49,"Authorized By"),h.Xb(),h.Yb(50,"th"),h.Uc(51,"Updated By"),h.Xb(),h.Yb(52,"th"),h.Uc(53,"Action"),h.Xb(),h.Xb()),2&e){var n=h.mc();h.Fb(1),h.tc("ngIf","OPD"!=n.bookingtype)}}function H(e,t){if(1&e&&(h.Yb(0,"td"),h.Uc(1),h.Xb()),2&e){var n=h.mc().$implicit;h.Fb(1),h.Vc(n.GroupNumber)}}function W(e,t){if(1&e){var n=h.Zb();h.Yb(0,"tr"),h.Sc(1,H,2,1,"td",30),h.Yb(2,"td"),h.Uc(3),h.Xb(),h.Yb(4,"td"),h.Uc(5),h.Xb(),h.Yb(6,"td"),h.Uc(7),h.Xb(),h.Yb(8,"td"),h.Uc(9),h.nc(10,"date"),h.nc(11,"date"),h.Xb(),h.Yb(12,"td"),h.Uc(13),h.nc(14,"date"),h.nc(15,"date"),h.Xb(),h.Yb(16,"td"),h.Uc(17),h.Xb(),h.Yb(18,"td"),h.Yb(19,"span"),h.Uc(20),h.Xb(),h.Xb(),h.Yb(21,"td"),h.Yb(22,"span",59),h.Uc(23),h.nc(24,"currency"),h.Xb(),h.Xb(),h.Yb(25,"td"),h.Yb(26,"span",59),h.Uc(27),h.nc(28,"currency"),h.Xb(),h.Xb(),h.Yb(29,"td"),h.Yb(30,"span",59),h.Uc(31),h.nc(32,"currency"),h.Xb(),h.Xb(),h.Yb(33,"td"),h.Yb(34,"span",59),h.Uc(35),h.nc(36,"currency"),h.Xb(),h.Xb(),h.Yb(37,"td"),h.Uc(38),h.nc(39,"date"),h.nc(40,"date"),h.Xb(),h.Yb(41,"td"),h.Uc(42),h.nc(43,"date"),h.nc(44,"date"),h.Xb(),h.Yb(45,"td"),h.Uc(46),h.Xb(),h.Yb(47,"td"),h.Uc(48),h.Xb(),h.Yb(49,"td"),h.Uc(50),h.Xb(),h.Yb(51,"td"),h.Uc(52),h.Xb(),h.Yb(53,"td"),h.Uc(54),h.Xb(),h.Yb(55,"td"),h.Uc(56),h.Xb(),h.Yb(57,"td"),h.Uc(58),h.nc(59,"date"),h.nc(60,"date"),h.Xb(),h.Yb(61,"td"),h.Uc(62),h.Xb(),h.Yb(63,"td"),h.Uc(64),h.Xb(),h.Yb(65,"td"),h.Uc(66),h.Xb(),h.Yb(67,"td"),h.Uc(68),h.Xb(),h.Yb(69,"td"),h.Yb(70,"button",60),h.ic("click",function(){h.Lc(n);var e=t.$implicit;return h.mc().ShowInvoiceList(e.SlotBookingId)}),h.Tb(71,"i",61),h.Uc(72,"Voucher List"),h.Xb(),h.Xb(),h.Xb()}if(2&e){var i=t.$implicit,o=h.mc();h.Fb(1),h.tc("ngIf","OPD"!=o.bookingtype),h.Fb(2),h.Vc(i.BookingNumber),h.Fb(2),h.Vc(i.Name),h.Fb(2),h.Vc(i.MRNo),h.Fb(2),h.Vc("0001"==h.pc(10,28,i.PeriodFrom,"yyyy")?"":h.pc(11,31,i.PeriodFrom,o.customDateFormat.DEF_DATE)),h.Fb(4),h.Vc("0001"==h.pc(14,34,i.PeriodUpto,"yyyy")?"":h.pc(15,37,i.PeriodUpto,o.customDateFormat.DEF_DATE)),h.Fb(4),h.Vc(i.NoofDays),h.Fb(2),h.Hb(i.BookingStatus),h.Fb(1),h.Vc(i.BookingStatus),h.Fb(3),h.Vc(h.pc(24,40,i.TransactionAmount,"INR")),h.Fb(4),h.Vc(h.pc(28,43,i.DiscountAmount,"INR")),h.Fb(4),h.Vc(h.pc(32,46,i.RoomRentAmount,"INR")),h.Fb(4),h.Vc(h.pc(36,49,i.OtherTreatAmount,"INR")),h.Fb(3),h.Vc("0001"==h.pc(39,52,i.TransactionDate,"yyyy")?"":h.pc(40,55,i.TransactionDate,o.customDateFormat.DEF_DATE_TIME_AMPM)),h.Fb(4),h.Vc("0001"==h.pc(43,58,i.ReceivedDate,"yyyy")?"":h.pc(44,61,i.ReceivedDate,o.customDateFormat.DEF_DATE)),h.Fb(4),h.Vc(i.PaymentType),h.Fb(2),h.Vc(i.TransactionId),h.Fb(2),h.Vc(i.StateName),h.Fb(2),h.Vc(i.InvoiceNumber),h.Fb(2),h.Vc(i.DebitVoucherNumber),h.Fb(2),h.Vc(i.RefTaxInvNumber),h.Fb(2),h.Vc("0001"==h.pc(59,64,i.DebitVoucherDate,"yyyy")?"":h.pc(60,67,i.DebitVoucherDate,o.customDateFormat.DEF_DATE)),h.Fb(4),h.Vc(i.Remarks),h.Fb(2),h.Vc(i.RequestedBy),h.Fb(2),h.Vc(i.ReferredBy),h.Fb(2),h.Vc(i.UpdatedBy)}}function z(e,t){if(1&e&&(h.Yb(0,"tr"),h.Yb(1,"td"),h.Uc(2,"Total"),h.Xb(),h.Yb(3,"td",62),h.Yb(4,"span",59),h.Uc(5),h.nc(6,"currency"),h.Xb(),h.Xb(),h.Xb()),2&e){var n=h.mc();h.Fb(1),h.Gb("colspan","OPD"!=n.bookingtype?8:7),h.Fb(4),h.Vc(h.pc(6,2,n.totalAmount,"INR"))}}function J(e,t){if(1&e&&(h.Yb(0,"div"),h.Tb(1,"app-individual-invoice-list",63),h.Xb()),2&e){var n=h.mc();h.Fb(1),h.tc("slotBookingId",n.SlotBookingIdSelectedId)}}var Z,q,$,Q=function(){return["GroupNumber","BookingNumber","MRNo","Name","PaymentType","BookingStatus","TransactionAmount","TransactionId","StateName","InvoiceNumber","Remarks","ReferredBy","DebitVoucherNumber","UpdatedBy"]},K=function(){return{width:"90vw"}},ee=[{path:"",component:(Z=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}(u,t);var a,r,s,d=c(u);function u(t,i,o,c,a,r,s,h){var y,f,g;if(n(this,u),(y=d.call(this)).cdRef=t,y.router=i,y._ConstantServices=o,y._MasterServices=c,y._ReportServices=a,y._PatientServices=r,y._UtilityService=s,y.datepipe=h,y.lsobjClinicMaster=JSON.parse(localStorage.getItem("objClinicMaster"))||null,y.customDateFormat=b.h,y.UserTypeCurre=localStorage.getItem("userTypeId"),y.clinicType=null,y.ClinicIdSelected=null,y.userTypes=b.s,y.bookingtype=null,y.today=new Date,y.maxYear=(new Date).getFullYear(),y.rangeDates=[],y.Isdisabled=!1,y.searchtxt=null,y.filterByDate=null,y.totalAmount=0,y.filteredValuesLength=0,y.voucherType=null,y.stlstvouchertype=[],y.lstPayMode=p.a,y.selectedPaymodeCodes=null,y.lstUpdatedBy=[],y.selectedUpdatedBy=null,y.SlotBookingIdSelectedId=null,y.ShowInvoiceListModel=!1,y.ActionList=b.a,y.lstIAccess=[],y.lstIAccessStr=[],y.lstOnlinePayModAccess=[],y.stlstbookingtype=[{name:"ALL",code:"BOTH"},{name:"IPD",code:"IPD"},{name:"OPD",code:"OPD"}],y.stlstvouchertype=[{name:"Refund+Receive",code:"0"},{name:"Refund+Receive+Cancell",code:"1"},{name:"Receive",code:"PaymentReceive"},{name:"Refund",code:"RefundPayment"},{name:"Cancel",code:"Cancell"},{name:"Credit Note",code:"CreditNote"}],y.stlstfiltertype=[{name:"Amnt Tran Date",code:"TD"},{name:"Rec Voucher Date",code:"SD"},{name:"Invoice Date",code:"ID"}],y.rangeDates=[new Date,new Date],y.filterByDate="TD",y.voucherType="0",y.lstOnlinePayModAccess=(null===(f=y.lsobjClinicMaster)||void 0===f?void 0:f.lstOnlinePaymentModes)||[],y.lstPayMode=p.a.filter(function(e){return"ATONLN"!==e.ACID&&"ATWLONLN"!==e.ACID}),(null===(g=y.lstOnlinePayModAccess)||void 0===g?void 0:g.length)>0)if(y.lstOnlinePayModAccess.some(function(e){return"ATONLN"===e||"ATWLONLN"===e}))y.lstPayMode=[{TenderName:"Online",ACID:"ONLINE",disabled:!1}].concat(e(y.lstPayMode));else{var m=p.a.filter(function(e){return y.lstOnlinePayModAccess.includes(e.ACID)});y.lstPayMode=[].concat(e(m),e(y.lstPayMode))}return l(y)}return a=u,(r=[{key:"ngOnInit",value:function(){var e;this._ConstantServices.ActiveMenuName="Patient Billing Report",this.cdRef.detectChanges(),b.s.SuperAdmin!==localStorage.getItem("userTypeId")&&(this.ClinicIdSelected=localStorage.getItem("ClinicId"),this.clinicType=null===(e=this.lsobjClinicMaster)||void 0===e?void 0:e.ClinicType,this.bookingtype=this.clinicType,this.LoadUserList(),this.LoadPatientBillingReportList())}},{key:"ngAfterViewChecked",value:function(){var e;0==(null===(e=this.lstIAccess)||void 0===e?void 0:e.length)&&this.getPageLevelAccess()}},{key:"getPageLevelAccess",value:function(){var e,t,n=this,i=this.getUrlWithoutParams();"/common-dashboard"==i&&(i="/report/patient-billing-report");var o=JSON.parse(localStorage.getItem("UerRoleAccess"))||[];(null==o?void 0:o.find(function(e){return e.MenuItemURL===i}))&&(this.lstIAccess=null===(e=o.find(function(e){return e.MenuItemURL===i}))||void 0===e?void 0:e.ActionIAccess,(null===(t=this.lstIAccess)||void 0===t?void 0:t.length)>0&&this.lstIAccess.map(function(e){n.lstIAccessStr.push(e.ActionId.toString())}))}},{key:"getUrlWithoutParams",value:function(){var e=this.router.parseUrl(this.router.url);return e.queryParams={},e.fragment=null,e.toString()}},{key:"onselectedClinic",value:function(e){b.s.SuperAdmin===localStorage.getItem("userTypeId")&&(this.ClinicIdSelected=e.ClinicId,this.clinicType=null==e?void 0:e.ClinicType,this.bookingtype=this.clinicType),this.LoadPatientBillingReportList()}},{key:"OnChangeBookingType",value:function(){this.LoadPatientBillingReportList()}},{key:"OnChangeFilterType",value:function(){this.LoadPatientBillingReportList()}},{key:"LoadUserList",value:function(){var e=this;""!=this.ClinicIdSelected&&null!=this.ClinicIdSelected&&null!=this.ClinicIdSelected?(this._UtilityService.showSpinner(),this.unsubscribe.add=this._MasterServices.GetUserMaster(this.ClinicIdSelected,!0).subscribe({next:function(t){if(e._UtilityService.hideSpinner(),1==t.actionResult.success){var n=JSON.parse(t.actionResult.result);e.lstUpdatedBy=n=n||[]}else e.lstUpdatedBy=[]},error:function(t){e._UtilityService.hideSpinner(),e._UtilityService.showErrorAlert(t.Message)}})):this._UtilityService.showWarningAlert("Please select Clinic")}},{key:"LoadPatientBillingReportList",value:function(){var e,t=this;if(this.totalAmount=0,""!=this.ClinicIdSelected&&null!=this.ClinicIdSelected&&null!=this.ClinicIdSelected)if(""!=this.bookingtype&&null!=this.bookingtype&&null!=this.bookingtype){""!=(null===(e=this.searchtxt)||void 0===e?void 0:e.trim())&&null!=this.searchtxt&&null!=this.searchtxt||(this.searchtxt=""),null!=this.rangeDates[0]&&null!=this.rangeDates[0]&&(this.rangeDates[0]=new Date(this.datepipe.transform(this.rangeDates[0],"yyyy-MM-dd"))),null!=this.rangeDates[1]&&null!=this.rangeDates[1]&&(this.rangeDates[1]=new Date(this.datepipe.transform(this.rangeDates[1],"yyyy-MM-dd")));var n={};n.clinicId=this.ClinicIdSelected,n.dFrom=new Date(this.datepipe.transform(this.rangeDates[0],"yyyy-MM-dd")),n.dTo=new Date(this.datepipe.transform(this.rangeDates[1],"yyyy-MM-dd")),n.bookingtype=this.bookingtype,n.filterByDate=this.filterByDate,n.voucherType=this.voucherType,n.PayMode=this.selectedPaymodeCodes,n.UpdatedBy=this.selectedUpdatedBy,this._UtilityService.showSpinner(),this.unsubscribe.add=this._ReportServices.GetPatientBillingReport(n).subscribe(function(e){var n;if(t._UtilityService.hideSpinner(),t.cdRef.detectChanges(),1==e.actionResult.success){var i=JSON.parse(e.actionResult.result);t.lstPatientBillingReport=i=i||[],t.filtr.nativeElement.value="",t.dataTable.reset(),t.filteredValuesLength=null===(n=t.lstPatientBillingReport)||void 0===n?void 0:n.length,t.totalAmount=t.lstPatientBillingReport.map(function(e){return e.TransactionAmount}).reduce(function(e,t){return e+t}),t.cdRef.detectChanges()}else t.lstPatientBillingReport=[],t.totalAmount=0,t.rowGroupMetadata={},t.cdRef.detectChanges()},function(e){t._UtilityService.hideSpinner(),t._UtilityService.showErrorAlert(e.message)})}else this._UtilityService.showWarningAlert("Please select Booking Type");else this._UtilityService.showWarningAlert("Please select center")}},{key:"updateRowGroupMetaData",value:function(){if(this.rowGroupMetadata={},this.lstPatientBillingReport)for(var e=0;e<this.lstPatientBillingReport.length;e++){var t=this.lstPatientBillingReport[e].GroupNumber;0==e?this.rowGroupMetadata[t]={index:0,size:1}:t===this.lstPatientBillingReport[e-1].GroupNumber?this.rowGroupMetadata[t].size++:this.rowGroupMetadata[t]={index:e,size:1}}this.cdRef.detectChanges()}},{key:"dateRangeChange",value:function(){this.rangeDates[0]&&this.rangeDates[1]&&(void 0!==this.calendar&&(this.calendar.overlayVisible=!1),this.LoadPatientBillingReportList())}},{key:"ShowInvoiceList",value:function(e){this.SlotBookingIdSelectedId=e,this.ShowInvoiceListModel=!0}},{key:"DownloadAllInvoicePDF",value:function(){""!=this.ClinicIdSelected&&null!=this.ClinicIdSelected&&null!=this.ClinicIdSelected?""!=this.bookingtype&&null!=this.bookingtype&&null!=this.bookingtype?(this._UtilityService.showSpinner(),this.unsubscribe.add=this._PatientServices.GetAllInvoicePDF(this.datepipe.transform(this.rangeDates[0],"yyyy-MM-dd"),this.datepipe.transform(this.rangeDates[1],"yyyy-MM-dd"),this.ClinicIdSelected,this.bookingtype).subscribe(function(e){var t=e.type,n=[];n.push(e);var i=document.createElement("a");i.href=window.URL.createObjectURL(new Blob(n,{type:t})),i.setAttribute("download","TaxInvoice.pdf"),document.body.appendChild(i),i.click()}),this._UtilityService.hideSpinner()):this._UtilityService.showWarningAlert("Please select Booking Type"):this._UtilityService.showWarningAlert("Please select center")}},{key:"onFilter",value:function(e,t){this.filteredValuesLength=e.filteredValue.length,0==this.filteredValuesLength&&(this.totalAmount=0),this.totalAmount=e.filteredValue.map(function(e){return e.TransactionAmount}).reduce(function(e,t){return e+t})}},{key:"exportToItemExcel",value:function(){var e={reportname:"PatientBillingReport",filename:"PatientBillingReport"};e.clinicId=this.ClinicIdSelected,e.dFrom=new Date(this.datepipe.transform(this.rangeDates[0],"yyyy-MM-dd")),e.dTo=new Date(this.datepipe.transform(this.rangeDates[1],"yyyy-MM-dd")),e.bookingtype=this.bookingtype,e.filterByDate=this.filterByDate,e.voucherType=this.voucherType,e.PayMode=this.selectedPaymodeCodes,e.UpdatedBy=this.selectedUpdatedBy,e.isExcel=!0,this._MasterServices.downloadReport(e)}}])&&i(a.prototype,r),s&&i(a,s),u}(u.a),Z.\u0275fac=function(e){return new(e||Z)(h.Sb(h.h),h.Sb(d.i),h.Sb(b.f),h.Sb(y.a),h.Sb(f.a),h.Sb(g.a),h.Sb(m.a),h.Sb(s.f))},Z.\u0275cmp=h.Mb({type:Z,selectors:[["app-patient-billing-report"]],viewQuery:function(e,t){var n;1&e&&(h.cd(P,1),h.cd(C,1),h.cd(R,1)),2&e&&(h.Hc(n=h.jc())&&(t.dataTable=n.first),h.Hc(n=h.jc())&&(t.filtr=n.first),h.Hc(n=h.jc())&&(t.calendar=n.first))},features:[h.Cb],decls:59,vars:56,consts:[[1,"row","mt25"],[1,"col-md-12"],[1,"card"],[1,"card-body"],[1,"row","mb-2"],["class","col-md-1",4,"ngIf"],["class","col-md-2",4,"ngIf"],[1,"col-md-2"],[1,"form-group"],["for",""],[1,"required"],["optionLabel","name","optionValue","code",3,"options","ngModel","ngModelOptions","ngModelChange","onChange"],[1,"col-auto"],["selectionMode","range","inputId","icon","name","rangeDates",3,"monthNavigator","yearNavigator","yearRange","maxDate","disabled","ngModel","ngModelOptions","showIcon","dateFormat","readonlyInput","ngModelChange","onSelect"],["calendar",""],["optionLabel","TenderName","optionValue","TenderName","placeholder","-All-",3,"showClear","options","ngModel","ngModelOptions","ngModelChange","onChange"],["for","",1,"form-label","bold"],["optionLabel","Name","optionValue","UserId","placeholder","-All-",3,"showClear","options","ngModel","ngModelOptions","filter","ngModelChange","onChange"],[1,"col-auto","mt-6","mt10"],["type","button","matTooltip","Download Invoices","icon","pi pi-download",1,"btn","btn-new-primary",3,"click"],[1,"row"],["scrollHeight","calc(100vh - 275px)","responsiveLayout","scroll",3,"value","rowHover","globalFilterFields","scrollable","onFilter"],["dt",""],["pTemplate","caption"],["pTemplate","emptymessage"],["pTemplate","colgroup"],["pTemplate","header"],["pTemplate","body"],["pTemplate","footer"],["header","Voucher List",3,"modal","visible","visibleChange"],[4,"ngIf"],[1,"col-md-1"],[3,"mode","onselectedClinic"],["optionLabel","name","optionValue","code",3,"options","ngModel","ngModelOptions","style","ngModelChange","onChange",4,"ngIf"],[1,"p-d-flex"],[1,"p-ml-left"],[1,"p-ml-auto"],["pButton","","matTooltip","Refresh","label"," ","class","p-button-outlined mr-2","icon","pi pi-refresh",3,"click",4,"ngIf"],["pButton","","title","Export Data","label"," ","class","p-button-outlined mr-2","icon","pi pi-download",3,"click",4,"ngIf"],[1,"p-input-icon-left"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search...",3,"input"],["filtr",""],["pButton","","matTooltip","Refresh","label"," ","icon","pi pi-refresh",1,"p-button-outlined","mr-2",3,"click"],["pButton","","title","Export Data","label"," ","icon","pi pi-download",1,"p-button-outlined","mr-2",3,"click"],["style","width:130px",4,"ngIf"],[2,"width","135px"],[2,"width","125px"],[2,"width","95px"],[2,"width","100px"],[2,"width","130px"],[2,"width","160px"],[2,"width","140px"],[2,"width","80px"],[2,"width","120px"],["pSortableColumn","TransactionDate"],["field","TransactionDate"],["pSortableColumn","ReceivedDate"],["field","ReceivedDate"],[1,"price"],["type","button",1,"btn","mr4",2,"width","95px","padding","3px 6px","font-size","12px","border-radius","20px","background","#FF9041","color","#fff",3,"click"],[1,"pi","pi-book",2,"font-size","12px","color","#fff","padding-right","3px"],["colspan","11"],[3,"slotBookingId"]],template:function(e,t){if(1&e){var n=h.Zb();h.Yb(0,"div",0),h.Yb(1,"div",1),h.Yb(2,"div",2),h.Yb(3,"div",3),h.Yb(4,"div",4),h.Sc(5,F,2,1,"div",5),h.Sc(6,L,7,1,"div",6),h.Yb(7,"div",7),h.Yb(8,"div",8),h.Yb(9,"label",9),h.Uc(10,"Filter By "),h.Yb(11,"span",10),h.Uc(12,"*"),h.Xb(),h.Xb(),h.Yb(13,"p-dropdown",11),h.ic("ngModelChange",function(e){return t.filterByDate=e})("onChange",function(){return t.OnChangeFilterType()}),h.Xb(),h.Xb(),h.Xb(),h.Yb(14,"div",12),h.Yb(15,"div",8),h.Yb(16,"label",9),h.Uc(17,"From / To"),h.Yb(18,"span",10),h.Uc(19,"*"),h.Xb(),h.Xb(),h.Yb(20,"div"),h.Yb(21,"p-calendar",13,14),h.ic("ngModelChange",function(e){return t.rangeDates=e})("onSelect",function(){return t.dateRangeChange()}),h.Xb(),h.Xb(),h.Xb(),h.Xb(),h.Yb(23,"div",7),h.Yb(24,"div",8),h.Yb(25,"label",9),h.Uc(26,"Transaction Type "),h.Yb(27,"span",10),h.Uc(28,"*"),h.Xb(),h.Xb(),h.Yb(29,"p-dropdown",11),h.ic("ngModelChange",function(e){return t.voucherType=e})("onChange",function(){return t.LoadPatientBillingReportList()}),h.Xb(),h.Xb(),h.Xb(),h.Yb(30,"div",12),h.Yb(31,"div",8),h.Yb(32,"label",9),h.Uc(33,"Pay Mode "),h.Yb(34,"span",10),h.Uc(35,"*"),h.Xb(),h.Xb(),h.Yb(36,"p-dropdown",15),h.ic("ngModelChange",function(e){return t.selectedPaymodeCodes=e})("onChange",function(){return t.LoadPatientBillingReportList()}),h.Xb(),h.Xb(),h.Xb(),h.Yb(37,"div",7),h.Yb(38,"div",8),h.Yb(39,"label",16),h.Uc(40,"Updated By "),h.Yb(41,"span",10),h.Uc(42,"*"),h.Xb(),h.Xb(),h.Yb(43,"p-dropdown",17),h.ic("ngModelChange",function(e){return t.selectedUpdatedBy=e})("onChange",function(){return t.LoadPatientBillingReportList()}),h.Xb(),h.Xb(),h.Xb(),h.Yb(44,"div",18),h.Yb(45,"button",19),h.ic("click",function(){return t.DownloadAllInvoicePDF()}),h.Uc(46,"Download Invoices "),h.Xb(),h.Xb(),h.Xb(),h.Yb(47,"div",20),h.Yb(48,"div",1),h.Yb(49,"p-table",21,22),h.ic("onFilter",function(e){h.Lc(n);var i=h.Ic(50);return t.onFilter(e,i)}),h.Sc(51,x,10,3,"ng-template",23),h.Sc(52,V,3,1,"ng-template",24),h.Sc(53,E,27,1,"ng-template",25),h.Sc(54,G,54,1,"ng-template",26),h.Sc(55,W,73,70,"ng-template",27),h.Sc(56,z,7,5,"ng-template",28),h.Xb(),h.Xb(),h.Xb(),h.Xb(),h.Xb(),h.Xb(),h.Xb(),h.Yb(57,"p-dialog",29),h.ic("visibleChange",function(e){return t.ShowInvoiceListModel=e}),h.Sc(58,J,2,1,"div",30),h.Xb()}2&e&&(h.Fb(5),h.tc("ngIf",t.UserTypeCurre===t.userTypes.SuperAdmin),h.Fb(1),h.tc("ngIf","BOTH"==(null==t.clinicType?null:t.clinicType.toUpperCase())),h.Fb(7),h.Pc(h.yc(45,B)),h.tc("options",t.stlstfiltertype)("ngModel",t.filterByDate)("ngModelOptions",h.yc(46,A)),h.Fb(8),h.wc("yearRange","",t.customDateFormat.MinYear,":",t.maxYear,""),h.tc("monthNavigator",!0)("yearNavigator",!0)("maxDate",t.today)("disabled",t.Isdisabled)("ngModel",t.rangeDates)("ngModelOptions",h.yc(47,A))("showIcon",!0)("dateFormat",t.customDateFormat.CalendarFormat)("readonlyInput",!0),h.Fb(8),h.Pc(h.yc(48,B)),h.tc("options",t.stlstvouchertype)("ngModel",t.voucherType)("ngModelOptions",h.yc(49,A)),h.Fb(7),h.Pc(h.yc(50,B)),h.tc("showClear",!0)("options",t.lstPayMode)("ngModel",t.selectedPaymodeCodes)("ngModelOptions",h.yc(51,A)),h.Fb(7),h.Pc(h.yc(52,B)),h.tc("showClear",!0)("options",t.lstUpdatedBy)("ngModel",t.selectedUpdatedBy)("ngModelOptions",h.yc(53,A))("filter",!0),h.Fb(6),h.tc("value",t.lstPatientBillingReport)("rowHover",!0)("globalFilterFields",h.yc(54,Q))("scrollable",!0),h.Fb(8),h.Pc(h.yc(55,K)),h.tc("modal",!0)("visible",t.ShowInvoiceListModel),h.Fb(1),h.tc("ngIf",t.ShowInvoiceListModel))},directives:[s.p,v.a,T.o,T.r,I.a,S.c,Y.i,U.a,X.a,D.a,w.b,S.b,S.a,M.a],pipes:[s.f,s.d],styles:["#container[_ngcontent-%COMP%]{text-align:center}#bloc1[_ngcontent-%COMP%], #bloc2[_ngcontent-%COMP%]{display:inline}"]}),Z.\u0275prov=h.Ob({token:Z,factory:Z.\u0275fac}),Z)}],te=((q=function e(){n(this,e)}).\u0275fac=function(e){return new(e||q)},q.\u0275mod=h.Qb({type:q}),q.\u0275inj=h.Pb({imports:[[d.l.forChild(ee)],d.l]}),q),ne=r("kcK2"),ie=r("T2Aj"),oe=(($=function e(){n(this,e)}).\u0275fac=function(e){return new(e||$)},$.\u0275mod=h.Qb({type:$}),$.\u0275inj=h.Pb({imports:[[s.c,te,T.i,S.f,w.c,v.b,D.b,I.b,U.b,ne.a,ie.a]]}),$)}}])}();