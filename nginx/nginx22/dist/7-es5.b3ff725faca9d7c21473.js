!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var s=0;s<t.length;s++){var n=t[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,s,n){return s&&t(e.prototype,s),n&&t(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{MHjV:function(t,n,i){"use strict";i.d(n,"a",function(){return U});var r=i("fXoL"),o=i("G+wY"),l=i("NLkC"),a=i("ofXK");function c(e,t){1&e&&(r.Yb(0,"th"),r.Uc(1,"Discount Amount"),r.Xb())}function d(e,t){if(1&e&&(r.Yb(0,"td"),r.Uc(1),r.Xb()),2&e){var s=r.mc().$implicit;r.Fb(1),r.Vc(s.DiscountAmount)}}function u(e,t){if(1&e&&(r.Yb(0,"tr"),r.Yb(1,"td"),r.Uc(2),r.Xb(),r.Yb(3,"td"),r.Uc(4),r.Xb(),r.Yb(5,"td"),r.Uc(6),r.Xb(),r.Yb(7,"td"),r.Uc(8),r.Xb(),r.Sc(9,d,2,1,"td",3),r.Yb(10,"td"),r.Uc(11),r.Xb(),r.Xb()),2&e){var s=t.$implicit,n=r.mc(2);r.Fb(2),r.Vc(null==s.Description?null:s.Description.split("~")[0]),r.Fb(2),r.Vc(s.MRP),r.Fb(2),r.Vc(s.Qty),r.Fb(2),r.Vc(s.GST),r.Fb(1),r.tc("ngIf","Frontdesk"==n.PayRequestFrom),r.Fb(2),r.Vc(s.PriceWithGST)}}function b(e,t){1&e&&(r.Yb(0,"td"),r.Uc(1,"\xa0"),r.Xb())}function m(e,t){if(1&e&&(r.Yb(0,"tr"),r.Yb(1,"td"),r.Uc(2,"Total Amount"),r.Xb(),r.Yb(3,"td"),r.Uc(4,"\xa0"),r.Xb(),r.Yb(5,"td"),r.Uc(6,"\xa0"),r.Xb(),r.Yb(7,"td"),r.Uc(8,"\xa0"),r.Xb(),r.Sc(9,b,2,0,"td",3),r.Yb(10,"td"),r.Uc(11),r.Xb(),r.Xb()),2&e){var s=r.mc(2);r.Fb(9),r.tc("ngIf","Frontdesk"==s.PayRequestFrom),r.Fb(2),r.Vc(s.TotalPaybleAmount)}}function y(e,t){1&e&&(r.Yb(0,"td"),r.Uc(1,"\xa0"),r.Xb())}function h(e,t){if(1&e&&(r.Yb(0,"tr"),r.Yb(1,"td"),r.Uc(2,"Bill Wise Discount %"),r.Xb(),r.Yb(3,"td"),r.Uc(4),r.Xb(),r.Yb(5,"td"),r.Uc(6,"\xa0"),r.Xb(),r.Sc(7,y,2,0,"td",3),r.Yb(8,"td"),r.Uc(9,"Amount"),r.Xb(),r.Yb(10,"td"),r.Uc(11),r.Xb(),r.Xb()),2&e){var s=r.mc(2);r.Fb(4),r.Vc(s.BillWiseDiscountPer),r.Fb(3),r.tc("ngIf","Frontdesk"==s.PayRequestFrom),r.Fb(4),r.Vc(s.BillwiseDiscountAmount)}}function R(e,t){1&e&&(r.Yb(0,"td"),r.Uc(1,"\xa0"),r.Xb())}function P(e,t){if(1&e&&(r.Yb(0,"tr"),r.Yb(1,"td"),r.Uc(2,"Credit Note Balance Used"),r.Xb(),r.Yb(3,"td"),r.Uc(4),r.Xb(),r.Yb(5,"td"),r.Uc(6,"\xa0"),r.Xb(),r.Sc(7,R,2,0,"td",3),r.Yb(8,"td"),r.Uc(9,"\xa0"),r.Xb(),r.Yb(10,"td"),r.Uc(11,"\xa0"),r.Xb(),r.Xb()),2&e){var s=r.mc(2);r.Fb(4),r.Vc(s.CreditNoteAmount),r.Fb(3),r.tc("ngIf","Frontdesk"==s.PayRequestFrom)}}function p(e,t){1&e&&(r.Yb(0,"td"),r.Uc(1,"\xa0"),r.Xb())}function f(e,t){1&e&&(r.Yb(0,"td"),r.Uc(1,"\xa0"),r.Xb())}function S(e,t){if(1&e&&(r.Yb(0,"tr"),r.Yb(1,"td"),r.Uc(2,"Receive Amount"),r.Xb(),r.Yb(3,"td"),r.Uc(4),r.Xb(),r.Yb(5,"td"),r.Uc(6,"\xa0"),r.Xb(),r.Yb(7,"td"),r.Uc(8,"\xa0"),r.Xb(),r.Sc(9,f,2,0,"td",3),r.Yb(10,"td"),r.Uc(11,"\xa0"),r.Xb(),r.Xb()),2&e){var s=r.mc(2);r.Fb(4),r.Vc(s.ReceiveAmont),r.Fb(5),r.tc("ngIf","Frontdesk"==s.PayRequestFrom)}}function W(e,t){if(1&e&&(r.Yb(0,"table",2),r.Yb(1,"thead"),r.Yb(2,"tr"),r.Yb(3,"th"),r.Uc(4,"Item Details"),r.Xb(),r.Yb(5,"th"),r.Uc(6,"Rate"),r.Xb(),r.Yb(7,"th"),r.Uc(8,"Qty"),r.Xb(),r.Yb(9,"th"),r.Uc(10,"GST"),r.Xb(),r.Sc(11,c,2,0,"th",3),r.Yb(12,"th"),r.Uc(13,"Net Amount"),r.Xb(),r.Xb(),r.Xb(),r.Yb(14,"tbody"),r.Sc(15,u,12,6,"tr",4),r.Sc(16,m,12,2,"tr",3),r.Sc(17,h,12,3,"tr",3),r.Sc(18,P,12,2,"tr",3),r.Yb(19,"tr"),r.Yb(20,"td"),r.Uc(21,"Net Payable"),r.Xb(),r.Yb(22,"td"),r.Uc(23),r.Xb(),r.Yb(24,"td"),r.Uc(25,"\xa0"),r.Xb(),r.Yb(26,"td"),r.Uc(27,"\xa0"),r.Xb(),r.Sc(28,p,2,0,"td",3),r.Yb(29,"td"),r.Uc(30,"\xa0"),r.Xb(),r.Xb(),r.Sc(31,S,12,2,"tr",3),r.Xb(),r.Xb()),2&e){var s=r.mc();r.Fb(11),r.tc("ngIf","Frontdesk"==s.PayRequestFrom),r.Fb(4),r.tc("ngForOf",s.ItemPriceRes),r.Fb(1),r.tc("ngIf","Frontdesk"==s.PayRequestFrom),r.Fb(1),r.tc("ngIf","Frontdesk"==s.PayRequestFrom),r.Fb(1),r.tc("ngIf",s.CreditNoteAmount>0),r.Fb(5),r.Vc(s.NetPaybleAmount),r.Fb(5),r.tc("ngIf","Frontdesk"==s.PayRequestFrom),r.Fb(3),r.tc("ngIf",s.IsPartialPayment)}}var U=function(){var t=function(){function t(s,n,i){e(this,t),this.cdRef=s,this._PatientServices=n,this._UtilityService=i,this.ReceiveAmont=0,this.TotalPaybleAmount=0,this.BillwiseDiscountAmount=0,this.NetPaybleAmount=0,this.WellnessWorldLineTransactionResponse={},this.Instruction={},this.WLOrderRes={},this.IsSelectedItem=!1,this.UserRes={},this.BillWiseDiscountPer=0,this.ReferredBy="",this.RequestedBy="",this.PayRequestFrom="Frontdesk",this.ActualNetPayble=0,this.IsPartialPayment=!1,this.CreditNoteNumber=null,this.CreditNoteAmount=0,this.GetPaymentStatusEmit=new r.o,this.NewOrderRes={},this.WellnessPaymentResDTO={}}return s(t,[{key:"ngOnInit",value:function(){}},{key:"ngOnChanges",value:function(e){var t=this;this.NewOrderRes=JSON.parse(JSON.stringify(this.WLOrderRes)),this.ItemPriceRes.map(function(e){t.TotalPaybleAmount=t.TotalPaybleAmount+e.PriceWithGST}),this.BillWiseDiscountPer>0?(this.BillwiseDiscountAmount=this.TotalPaybleAmount*this.BillWiseDiscountPer/100,this.NetPaybleAmount=this.TotalPaybleAmount-this.BillwiseDiscountAmount,this.NetPaybleAmount=this.NetPaybleAmount-(this.CreditNoteAmount>0?this.CreditNoteAmount:0)):(this.BillwiseDiscountAmount=0,this.NetPaybleAmount=this.TotalPaybleAmount,this.NetPaybleAmount=this.NetPaybleAmount-(this.CreditNoteAmount>0?this.CreditNoteAmount:0))}},{key:"initializePayment",value:function(){var e=this;$.pnCheckout({tarCall:!1,features:{showPGResponseMsg:!0,enableAbortResponse:!0,enableExpressPay:!0,enableNewWindowFlow:!0},consumerData:{deviceId:"WEBSH2",token:this.NewOrderRes.token,returnUrl:"",paymentMode:"all",responseHandler:function(t){var s,n,i,r,o,l,a,c,d;t&&t.paymentMethod&&t.paymentMethod.paymentTransaction&&t.paymentMethod.paymentTransaction.statusCode&&("0300"===t.paymentMethod.paymentTransaction.statusCode?(e.WellnessWorldLineTransactionResponse=t.paymentMethod.paymentTransaction,e.WellnessWorldLineTransactionResponse.merchantTransactionIdentifier=t.merchantTransactionIdentifier,e.WellnessWorldLineTransactionResponse.stringResponse=t.stringResponse,e.WellnessWorldLineTransactionResponse.SlotBookingId=null===(s=e.NewOrderRes)||void 0===s?void 0:s.SlotBookingId,e.WellnessWorldLineTransactionResponse.ClinicId=null===(n=e.NewOrderRes)||void 0===n?void 0:n.ClinicId,e.WellnessWorldLineTransactionResponse.UserId=null===(i=e.NewOrderRes)||void 0===i?void 0:i.UserId,e.WellnessPaymentResDTO.ModifiedBy=localStorage.getItem("userId"),e.WellnessPaymentResDTO.CreditNoteNumber=e.CreditNoteNumber,e.WellnessPaymentResDTO.CreditNoteAmount=e.CreditNoteAmount,1==e.IsSelectedItem?(e.WellnessPaymentResDTO.WellnessWorldLineTransactionResponse=e.WellnessWorldLineTransactionResponse,e.WellnessPaymentResDTO.ItemPriceRes=e.ItemPriceRes,e.WellnessPaymentResDTO.BillWiseDiscountPer=e.BillWiseDiscountPer,e.WellnessPaymentResDTO.ReferredBy=e.ReferredBy,e.WellnessPaymentResDTO.RequestedBy=e.RequestedBy,e.WellnessPaymentResDTO.NetPayble=e.nullToZeroConverter(e.NewOrderRes.amount),e.WellnessPaymentResDTO.PackageMapping=e.PackageMapping,e._UtilityService.showSpinner(),e._PatientServices.AddWorldLineTransactionResponseWellnessSelected(e.WellnessPaymentResDTO,e.SlotBookingIdSelected).subscribe(function(t){e._UtilityService.hideSpinner(),e.GetPaymentStatusEmit.emit("Success~"+t.actionResult.stringVal),e._UtilityService.showSuccessAlert(t.actionResult.errMsg)},function(t){e._UtilityService.hideSpinner(),e._UtilityService.showErrorAlert(t.message)})):(e.WellnessPaymentResDTO.WellnessWorldLineTransactionResponse=e.WellnessWorldLineTransactionResponse,e.WellnessPaymentResDTO.ItemPriceRes=e.ItemPriceRes,e.WellnessPaymentResDTO.BillWiseDiscountPer=e.BillWiseDiscountPer,e.WellnessPaymentResDTO.ReferredBy=e.ReferredBy,e.WellnessPaymentResDTO.RequestedBy=e.RequestedBy,e.WellnessPaymentResDTO.NetPayble=e.nullToZeroConverter(e.NewOrderRes.amount),e.WellnessPaymentResDTO.ActualNetPayble=e.nullToZeroConverter(e.ActualNetPayble),e.WellnessPaymentResDTO.PackageMapping=e.PackageMapping,e._UtilityService.showSpinner(),e._PatientServices.AddWorldLineTransactionResponseWellness(e.WellnessPaymentResDTO,e.SlotBookingIdSelected).subscribe(function(t){e._UtilityService.hideSpinner(),e.GetPaymentStatusEmit.emit("Success~"),e._UtilityService.showSuccessAlert(t.actionResult.errMsg)},function(t){e._UtilityService.hideSpinner(),e._UtilityService.showErrorAlert(t.message)}))):"0398"===t.paymentMethod.paymentTransaction.statusCode?(e.WellnessWorldLineTransactionResponse=t.paymentMethod.paymentTransaction,e.WellnessWorldLineTransactionResponse.merchantTransactionIdentifier=t.merchantTransactionIdentifier,e.WellnessWorldLineTransactionResponse.stringResponse=t.stringResponse,e.WellnessWorldLineTransactionResponse.SlotBookingId=null===(r=e.NewOrderRes)||void 0===r?void 0:r.SlotBookingId,e.WellnessWorldLineTransactionResponse.ClinicId=null===(o=e.NewOrderRes)||void 0===o?void 0:o.ClinicId,e.WellnessWorldLineTransactionResponse.UserId=null===(l=e.NewOrderRes)||void 0===l?void 0:l.UserId,e._UtilityService.showSpinner(),e._PatientServices.InsertUpdateWellnessWorldLineOrder(e.WellnessWorldLineTransactionResponse).subscribe(function(t){e._UtilityService.hideSpinner(),e._UtilityService.showSuccessAlert(t.actionResult.errMsg)},function(t){e._UtilityService.hideSpinner(),e._UtilityService.showErrorAlert(t.message)})):(e.WellnessWorldLineTransactionResponse=t.paymentMethod.paymentTransaction,e.WellnessWorldLineTransactionResponse.merchantTransactionIdentifier=t.merchantTransactionIdentifier,e.WellnessWorldLineTransactionResponse.stringResponse=t.stringResponse,e.WellnessWorldLineTransactionResponse.SlotBookingId=null===(a=e.NewOrderRes)||void 0===a?void 0:a.SlotBookingId,e.WellnessWorldLineTransactionResponse.ClinicId=null===(c=e.NewOrderRes)||void 0===c?void 0:c.ClinicId,e.WellnessWorldLineTransactionResponse.UserId=null===(d=e.NewOrderRes)||void 0===d?void 0:d.UserId,console.log("Payment Error:",e.WellnessWorldLineTransactionResponse),e._UtilityService.showSpinner(),e._PatientServices.InsertUpdateWellnessWorldLineOrder(e.WellnessWorldLineTransactionResponse).subscribe(function(s){e._UtilityService.hideSpinner(),e._UtilityService.showErrorAlert(t.paymentMethod.paymentTransaction.errorMessage)},function(t){e._UtilityService.hideSpinner(),e._UtilityService.showErrorAlert(t.message)})))},checkoutElement:"",merchantLogoUrl:"../../../../assets/images/om-logo.png",merchantId:this.NewOrderRes.merchantId,currency:"INR",consumerId:this.NewOrderRes.consumerId,consumerMobileNo:"",consumerEmailId:"",txnId:this.NewOrderRes.txnId,items:[{itemId:this.NewOrderRes.SchemeCode,amount:this.NewOrderRes.amount,comAmt:"0"}],customStyle:{PRIMARY_COLOR_CODE:"#2DB163",SECONDARY_COLOR_CODE:"#FFFFFF",BUTTON_COLOR_CODE_1:"#2DB163",BUTTON_COLOR_CODE_2:"#FFFFFF"},cartDescription:this.UserRes.MRNo+"~"+this.UserRes.FullName+"~"+this.UserRes.ContactNumber,debitStartDate:"07-06-2024",debitEndDate:"07-06-2054",maxAmount:this.NewOrderRes.amount,amountType:"F",frequency:"ADHO"}})}},{key:"nullToZeroConverter",value:function(e){return null==e||null==e||""==e||"Infinity"==e||"NaN"==e||isNaN(parseFloat(e))?0:parseFloat(e)}}]),t}();return t.\u0275fac=function(e){return new(e||t)(r.Sb(r.h),r.Sb(o.a),r.Sb(l.a))},t.\u0275cmp=r.Mb({type:t,selectors:[["app-worldline"]],inputs:{WLOrderRes:"WLOrderRes",SlotBookingIdSelected:"SlotBookingIdSelected",ItemPriceRes:"ItemPriceRes",IsSelectedItem:"IsSelectedItem",UserRes:"UserRes",BillWiseDiscountPer:"BillWiseDiscountPer",ReferredBy:"ReferredBy",RequestedBy:"RequestedBy",PayRequestFrom:"PayRequestFrom",ActualNetPayble:"ActualNetPayble",IsPartialPayment:"IsPartialPayment",CreditNoteNumber:"CreditNoteNumber",CreditNoteAmount:"CreditNoteAmount",PackageMapping:"PackageMapping"},outputs:{GetPaymentStatusEmit:"GetPaymentStatusEmit"},features:[r.Db],decls:4,vars:1,consts:[["class","table table-striped table-bordered",4,"ngIf"],["id","btnSubmit",1,"btn","btn-new-primary",3,"click"],[1,"table","table-striped","table-bordered"],[4,"ngIf"],[4,"ngFor","ngForOf"]],template:function(e,t){1&e&&(r.Sc(0,W,32,8,"table",0),r.Tb(1,"br"),r.Yb(2,"button",1),r.ic("click",function(){return t.initializePayment()}),r.Uc(3,"Pay"),r.Xb()),2&e&&r.tc("ngIf",(null==t.ItemPriceRes?null:t.ItemPriceRes.length)>0)},directives:[a.p,a.o],styles:[""]}),t}()},"Rtg/":function(t,n,i){"use strict";i.d(n,"a",function(){return T});var r,o=i("fXoL"),l=((r=function(){function t(){e(this,t)}return s(t,[{key:"nativeWindow",get:function(){return window}}]),t}()).\u0275fac=function(e){return new(e||r)},r.\u0275prov=o.Ob({token:r,factory:r.\u0275fac,providedIn:"root"}),r),a=i("G+wY"),c=i("NLkC"),d=i("ofXK");function u(e,t){1&e&&(o.Yb(0,"th"),o.Uc(1,"Discount Amount"),o.Xb())}function b(e,t){if(1&e&&(o.Yb(0,"td"),o.Uc(1),o.Xb()),2&e){var s=o.mc().$implicit;o.Fb(1),o.Vc(s.DiscountAmount)}}function m(e,t){if(1&e&&(o.Yb(0,"tr"),o.Yb(1,"td"),o.Uc(2),o.Xb(),o.Yb(3,"td"),o.Uc(4),o.Xb(),o.Yb(5,"td"),o.Uc(6),o.Xb(),o.Yb(7,"td"),o.Uc(8),o.Xb(),o.Sc(9,b,2,1,"td",3),o.Yb(10,"td"),o.Uc(11),o.Xb(),o.Xb()),2&e){var s=t.$implicit,n=o.mc(2);o.Fb(2),o.Vc(null==s.Description?null:s.Description.split("~")[0]),o.Fb(2),o.Vc(s.MRP),o.Fb(2),o.Vc(s.Qty),o.Fb(2),o.Vc(s.GST),o.Fb(1),o.tc("ngIf","Frontdesk"==n.PayRequestFrom),o.Fb(2),o.Vc(s.PriceWithGST)}}function y(e,t){1&e&&(o.Yb(0,"td"),o.Uc(1,"\xa0"),o.Xb())}function h(e,t){if(1&e&&(o.Yb(0,"tr"),o.Yb(1,"td"),o.Uc(2,"Total Amount"),o.Xb(),o.Yb(3,"td"),o.Uc(4,"\xa0"),o.Xb(),o.Yb(5,"td"),o.Uc(6,"\xa0"),o.Xb(),o.Yb(7,"td"),o.Uc(8,"\xa0"),o.Xb(),o.Sc(9,y,2,0,"td",3),o.Yb(10,"td"),o.Uc(11),o.Xb(),o.Xb()),2&e){var s=o.mc(2);o.Fb(9),o.tc("ngIf","Frontdesk"==s.PayRequestFrom),o.Fb(2),o.Vc(s.TotalPaybleAmount)}}function R(e,t){1&e&&(o.Yb(0,"td"),o.Uc(1,"\xa0"),o.Xb())}function P(e,t){if(1&e&&(o.Yb(0,"tr"),o.Yb(1,"td"),o.Uc(2,"Bill Wise Discount %"),o.Xb(),o.Yb(3,"td"),o.Uc(4),o.Xb(),o.Yb(5,"td"),o.Uc(6,"\xa0"),o.Xb(),o.Sc(7,R,2,0,"td",3),o.Yb(8,"td"),o.Uc(9,"Amount"),o.Xb(),o.Yb(10,"td"),o.Uc(11),o.Xb(),o.Xb()),2&e){var s=o.mc(2);o.Fb(4),o.Vc(s.BillWiseDiscountPer),o.Fb(3),o.tc("ngIf","Frontdesk"==s.PayRequestFrom),o.Fb(4),o.Vc(s.BillwiseDiscountAmount)}}function p(e,t){1&e&&(o.Yb(0,"td"),o.Uc(1,"\xa0"),o.Xb())}function f(e,t){if(1&e&&(o.Yb(0,"tr"),o.Yb(1,"td"),o.Uc(2,"Credit Note Balance Used"),o.Xb(),o.Yb(3,"td"),o.Uc(4),o.Xb(),o.Yb(5,"td"),o.Uc(6,"\xa0"),o.Xb(),o.Sc(7,p,2,0,"td",3),o.Yb(8,"td"),o.Uc(9,"\xa0"),o.Xb(),o.Yb(10,"td"),o.Uc(11,"\xa0"),o.Xb(),o.Xb()),2&e){var s=o.mc(2);o.Fb(4),o.Vc(s.CreditNoteAmount),o.Fb(3),o.tc("ngIf","Frontdesk"==s.PayRequestFrom)}}function S(e,t){1&e&&(o.Yb(0,"td"),o.Uc(1,"\xa0"),o.Xb())}function W(e,t){1&e&&(o.Yb(0,"td"),o.Uc(1,"\xa0"),o.Xb())}function U(e,t){if(1&e&&(o.Yb(0,"tr"),o.Yb(1,"td"),o.Uc(2,"Receive Amount"),o.Xb(),o.Yb(3,"td"),o.Uc(4),o.Xb(),o.Yb(5,"td"),o.Uc(6,"\xa0"),o.Xb(),o.Yb(7,"td"),o.Uc(8,"\xa0"),o.Xb(),o.Sc(9,W,2,0,"td",3),o.Yb(10,"td"),o.Uc(11,"\xa0"),o.Xb(),o.Xb()),2&e){var s=o.mc(2);o.Fb(4),o.Vc(s.ReceiveAmont),o.Fb(5),o.tc("ngIf","Frontdesk"==s.PayRequestFrom)}}function N(e,t){if(1&e&&(o.Yb(0,"table",2),o.Yb(1,"thead"),o.Yb(2,"tr"),o.Yb(3,"th"),o.Uc(4,"Item Details"),o.Xb(),o.Yb(5,"th"),o.Uc(6,"Rate"),o.Xb(),o.Yb(7,"th"),o.Uc(8,"Qty"),o.Xb(),o.Yb(9,"th"),o.Uc(10,"GST"),o.Xb(),o.Sc(11,u,2,0,"th",3),o.Yb(12,"th"),o.Uc(13,"Net Amount"),o.Xb(),o.Xb(),o.Xb(),o.Yb(14,"tbody"),o.Sc(15,m,12,6,"tr",4),o.Sc(16,h,12,2,"tr",3),o.Sc(17,P,12,3,"tr",3),o.Sc(18,f,12,2,"tr",3),o.Yb(19,"tr"),o.Yb(20,"td"),o.Uc(21,"Net Payable"),o.Xb(),o.Yb(22,"td"),o.Uc(23),o.Xb(),o.Yb(24,"td"),o.Uc(25,"\xa0"),o.Xb(),o.Yb(26,"td"),o.Uc(27,"\xa0"),o.Xb(),o.Sc(28,S,2,0,"td",3),o.Yb(29,"td"),o.Uc(30,"\xa0"),o.Xb(),o.Xb(),o.Sc(31,U,12,2,"tr",3),o.Xb(),o.Xb()),2&e){var s=o.mc();o.Fb(11),o.tc("ngIf","Frontdesk"==s.PayRequestFrom),o.Fb(4),o.tc("ngForOf",s.ItemPriceRes),o.Fb(1),o.tc("ngIf","Frontdesk"==s.PayRequestFrom),o.Fb(1),o.tc("ngIf","Frontdesk"==s.PayRequestFrom),o.Fb(1),o.tc("ngIf",s.CreditNoteAmount>0),o.Fb(5),o.Vc(s.NetPaybleAmount),o.Fb(5),o.tc("ngIf","Frontdesk"==s.PayRequestFrom),o.Fb(3),o.tc("ngIf",s.IsPartialPayment)}}var I,T=((I=function(){function t(s,n,i,r){e(this,t),this.winRef=s,this.cdRef=n,this._PatientServices=i,this._UtilityService=r,this.ReceiveAmont=0,this.TotalPaybleAmount=0,this.BillwiseDiscountAmount=0,this.NetPaybleAmount=0,this.WellnessRazorPaymentResponse={},this.OrderRes={},this.IsSelectedItem=!1,this.UserRes={},this.BillWiseDiscountPer=0,this.ReferredBy="",this.RequestedBy="",this.PayRequestFrom="Frontdesk",this.ActualNetPayble=0,this.IsPartialPayment=!1,this.CreditNoteNumber=null,this.CreditNoteAmount=0,this.GetPaymentStatusEmit=new o.o,this.NewOrderRes={},this.WellnessPaymentResDTO={}}return s(t,[{key:"ngOnInit",value:function(){}},{key:"ngOnChanges",value:function(e){var t=this;this.NewOrderRes=JSON.parse(JSON.stringify(this.OrderRes)),this.ItemPriceRes.map(function(e){t.TotalPaybleAmount=t.TotalPaybleAmount+e.PriceWithGST}),this.BillWiseDiscountPer>0?(this.BillwiseDiscountAmount=this.TotalPaybleAmount*this.BillWiseDiscountPer/100,this.NetPaybleAmount=this.TotalPaybleAmount-this.BillwiseDiscountAmount,this.NetPaybleAmount=this.NetPaybleAmount-(this.CreditNoteAmount>0?this.CreditNoteAmount:0)):(this.BillwiseDiscountAmount=0,this.NetPaybleAmount=this.TotalPaybleAmount,this.NetPaybleAmount=this.NetPaybleAmount-(this.CreditNoteAmount>0?this.CreditNoteAmount:0)),null!=this.NewOrderRes&&null!=this.NewOrderRes&&(this.ReceiveAmont=Math.round(parseFloat(this.NewOrderRes.amount)/100),this.rzp1=new this.winRef.nativeWindow.Razorpay({key:this.NewOrderRes.APIKey,amount:this.NewOrderRes.amount,currency:"INR",name:"wellness",description:"Wellness Payment",image:"https://example.com/your_logo",order_id:this.NewOrderRes.id,handler:function(e){var t=new CustomEvent("payment.success",{detail:e,bubbles:!0,cancelable:!0});window.dispatchEvent(t)},prefill:{name:this.UserRes.FirstName+" "+this.UserRes.LastName,email:this.UserRes.Email,contact:this.UserRes.ContactNumber},notes:{address:"Patanjali Wellness Pre Payment"},theme:{color:"#3399cc"},modal:{ondismiss:function(){this.NewOrderRes={},console.log("Checkout form closed")}}}),this.rzp1.on("payment.failed",function(e){this._UtilityService.showErrorAlert(e.error.description)})),this.cdRef.detectChanges()}},{key:"callrazor",value:function(){this.rzp1.open()}},{key:"onPaymentSuccess",value:function(e){var t=this;this.WellnessRazorPaymentResponse.id=e.detail.razorpay_payment_id,this.WellnessRazorPaymentResponse.status="created",this.WellnessRazorPaymentResponse.order_id=e.detail.razorpay_order_id,this.WellnessRazorPaymentResponse.international=!1,this.WellnessRazorPaymentResponse.amount_refunded=0,this.WellnessPaymentResDTO.ModifiedBy=localStorage.getItem("userId"),this.WellnessPaymentResDTO.CreditNoteNumber=this.CreditNoteNumber,this.WellnessPaymentResDTO.CreditNoteAmount=this.CreditNoteAmount,1==this.IsSelectedItem?(this.WellnessPaymentResDTO.WellnessRazorPaymentResponse=this.WellnessRazorPaymentResponse,this.WellnessPaymentResDTO.ItemPriceRes=this.ItemPriceRes,this.WellnessPaymentResDTO.BillWiseDiscountPer=this.BillWiseDiscountPer,this.WellnessPaymentResDTO.ReferredBy=this.ReferredBy,this.WellnessPaymentResDTO.RequestedBy=this.RequestedBy,this.WellnessPaymentResDTO.NetPayble=this.nullToZeroConverter(this.NewOrderRes.amount)/100,this.WellnessPaymentResDTO.PackageMapping=this.PackageMapping,this._UtilityService.showSpinner(),this._PatientServices.AddRazorPaymentResponseWellnessSelected(this.WellnessPaymentResDTO,this.SlotBookingIdSelected).subscribe(function(e){t._UtilityService.hideSpinner(),t.GetPaymentStatusEmit.emit("Success~"+e.actionResult.stringVal),t._UtilityService.showSuccessAlert(e.actionResult.errMsg)},function(e){t._UtilityService.hideSpinner(),t._UtilityService.showErrorAlert(e.message)})):(this.WellnessPaymentResDTO.WellnessRazorPaymentResponse=this.WellnessRazorPaymentResponse,this.WellnessPaymentResDTO.ItemPriceRes=this.ItemPriceRes,this.WellnessPaymentResDTO.BillWiseDiscountPer=this.BillWiseDiscountPer,this.WellnessPaymentResDTO.ReferredBy=this.ReferredBy,this.WellnessPaymentResDTO.RequestedBy=this.RequestedBy,this.WellnessPaymentResDTO.NetPayble=this.nullToZeroConverter(this.NewOrderRes.amount)/100,this.WellnessPaymentResDTO.ActualNetPayble=this.nullToZeroConverter(this.ActualNetPayble),this.WellnessPaymentResDTO.PackageMapping=this.PackageMapping,this._UtilityService.showSpinner(),this._PatientServices.AddRazorPaymentResponseWellness(this.WellnessPaymentResDTO,this.SlotBookingIdSelected).subscribe(function(e){t._UtilityService.hideSpinner(),t.GetPaymentStatusEmit.emit("Success~"),t._UtilityService.showSuccessAlert(e.actionResult.errMsg)},function(e){t._UtilityService.hideSpinner(),t._UtilityService.showErrorAlert(e.message)}))}},{key:"nullToZeroConverter",value:function(e){return null==e||null==e||""==e||"Infinity"==e||"NaN"==e||isNaN(parseFloat(e))?0:parseFloat(e)}}]),t}()).\u0275fac=function(e){return new(e||I)(o.Sb(l),o.Sb(o.h),o.Sb(a.a),o.Sb(c.a))},I.\u0275cmp=o.Mb({type:I,selectors:[["app-razorpay"]],hostBindings:function(e,t){1&e&&o.ic("payment.success",function(e){return t.onPaymentSuccess(e)},!1,o.Kc)},inputs:{OrderRes:"OrderRes",ItemPriceRes:"ItemPriceRes",SlotBookingIdSelected:"SlotBookingIdSelected",IsSelectedItem:"IsSelectedItem",UserRes:"UserRes",BillWiseDiscountPer:"BillWiseDiscountPer",ReferredBy:"ReferredBy",RequestedBy:"RequestedBy",PayRequestFrom:"PayRequestFrom",ActualNetPayble:"ActualNetPayble",IsPartialPayment:"IsPartialPayment",CreditNoteNumber:"CreditNoteNumber",CreditNoteAmount:"CreditNoteAmount",PackageMapping:"PackageMapping"},outputs:{GetPaymentStatusEmit:"GetPaymentStatusEmit"},features:[o.Eb([l]),o.Db],decls:4,vars:1,consts:[["class","table table-striped table-bordered",4,"ngIf"],["id","rzp-button1",1,"btn","btn-new-primary",3,"click"],[1,"table","table-striped","table-bordered"],[4,"ngIf"],[4,"ngFor","ngForOf"]],template:function(e,t){1&e&&(o.Sc(0,N,32,8,"table",0),o.Tb(1,"br"),o.Yb(2,"button",1),o.ic("click",function(){return t.callrazor()}),o.Uc(3,"Pay"),o.Xb()),2&e&&o.tc("ngIf",(null==t.ItemPriceRes?null:t.ItemPriceRes.length)>0)},directives:[d.p,d.o],styles:[""]}),I.\u0275prov=o.Ob({token:I,factory:I.\u0275fac}),I)}}])}();