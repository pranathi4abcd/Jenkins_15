!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,i=r(e);if(t){var o=r(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return c(this,n)}}function c(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{bUOw:function(c,r,o){"use strict";o.r(r),o.d(r,"PatientRecordModule",function(){return ne});var s=o("ofXK"),d=o("tyNb"),a=o("CwUn"),l=o("fXoL"),u=o("G+wY"),p=o("Nach"),f=o("NLkC"),P=o("lVkt"),b=o("3Pt+"),h=o("tnQ1"),m=o("7DKO"),S=o("k7X6"),I=o("JyKC"),v=o("9w3n"),g=o("7/Fd"),y=o("E3nD"),R=o("G6EL");function F(e,t){1&e&&(l.Yb(0,"div"),l.Tb(1,"app-print-rogi-soochee-form",9),l.Xb()),2&e&&(l.Fb(1),l.tc("InputType",1))}function D(e,t){1&e&&l.Tb(0,"div",10)}function w(e,t){1&e&&(l.Yb(0,"div"),l.Tb(1,"app-print-ipd-admission-form",9),l.Xb()),2&e&&(l.Fb(1),l.tc("InputType",1))}function C(e,t){1&e&&l.Tb(0,"div",10)}function T(e,t){1&e&&(l.Yb(0,"div"),l.Tb(1,"app-opd-ipd-print-prescription",9),l.Xb()),2&e&&(l.Fb(1),l.tc("InputType",1))}function L(e,t){1&e&&l.Tb(0,"div",10)}function O(e,t){1&e&&(l.Yb(0,"div"),l.Tb(1,"app-print-ipd-registration-form",9),l.Xb()),2&e&&(l.Fb(1),l.tc("InputType",1))}function k(e,t){1&e&&l.Tb(0,"div",10)}function A(e,t){1&e&&(l.Yb(0,"div"),l.Tb(1,"app-consent-form",9),l.Xb()),2&e&&(l.Fb(1),l.tc("InputType",1))}function X(e,t){1&e&&l.Tb(0,"div",10)}function _(e,t){if(1&e){var n=l.Zb();l.Yb(0,"div"),l.Yb(1,"app-print-pain-assessment",11),l.ic("IsAnyRecord",function(e){return l.Lc(n),l.mc().IsAnyPainRecordFound(e)}),l.Xb(),l.Xb()}2&e&&(l.Fb(1),l.tc("InputType",1))}function M(e,t){1&e&&l.Tb(0,"div",10)}function Y(e,t){if(1&e&&(l.Yb(0,"div"),l.Tb(1,"app-ipd-print-prescription",12),l.Xb()),2&e){var n=l.mc();l.Fb(1),l.tc("InputType",1)("IsMedicine","withoutmedicine")("tag",n.tag)}}function U(e,t){1&e&&l.Tb(0,"div",10)}function j(e,t){if(1&e){var n=l.Zb();l.Yb(0,"div"),l.Yb(1,"app-patient-print-prescription",13),l.ic("IsDischargeWindowOpen",function(e){return l.Lc(n),l.mc().IsDischargeWindowOpen(e)}),l.Xb(),l.Xb()}2&e&&(l.Fb(1),l.tc("InputType",1))}var B,W,E,K=function(){return{width:"100%"}},x=[{path:"",component:(B=function(c){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}(a,c);var r,o,s,d=i(a);function a(t,n,i,c,r){var o;return e(this,a),(o=d.call(this)).route=t,o._PatientServices=n,o.cdRef=i,o._ConstantsService=c,o._UtilityService=r,o.slotBookingId=null,o.userId=null,o.tag=null,o.stlPrintRecordList=[],o.PrintRecordList=[],o.selectedIPDAdminssionForm=!0,o.selectedOPDPresc=!0,o.selectedCaseSheet=!0,o.selectedConsentForm=!0,o.selectedPainScale=!0,o.selectedIPDPresc=!0,o.selectedIDSPresc=!1,o.selectedRogiSoochee=!1,o.IdProofUrl="",o.stlPrintRecordList=[{name:"Rogi Soochee check list"},{name:"IPD Adm Form"},{name:"OPD Prescription"},{name:"Case Sheet"},{name:"Consent Form"},{name:"Pain Scale"},{name:"IPD Prescription"},{name:"Discharge Summary"}],o.stlPrintRecordList.map(function(e){return o.PrintRecordList.push(e.name)}),o.selectedIDSPresc||(o.PrintRecordList=o.PrintRecordList.filter(function(e){return"Discharge Summary"!=e})),o.selectedRogiSoochee||(o.PrintRecordList=o.PrintRecordList.filter(function(e){return"Rogi Soochee check list"!=e})),o}return r=a,(o=[{key:"ngOnInit",value:function(){var e=this;this.route.queryParams.subscribe(function(t){e.userId=t.UserId,e.slotBookingId=t.SlotBookingId,e.tag=t.tag})}},{key:"onChange",value:function(){this.selectedIPDAdminssionForm=!!this.PrintRecordList.includes("IPD Adm Form"),this.selectedOPDPresc=!!this.PrintRecordList.includes("OPD Prescription"),this.selectedCaseSheet=!!this.PrintRecordList.includes("Case Sheet"),this.selectedConsentForm=!!this.PrintRecordList.includes("Consent Form"),this.selectedPainScale=!!this.PrintRecordList.includes("Pain Scale"),this.selectedIPDPresc=!!this.PrintRecordList.includes("IPD Prescription"),this.selectedIDSPresc=!!this.PrintRecordList.includes("Discharge Summary"),this.selectedRogiSoochee=!!this.PrintRecordList.includes("Rogi Soochee check list")}},{key:"print",value:function(){var e=window.location.href;history.replaceState(history.state,"","/"),window.print(),history.replaceState(history.state,"",e),$("title").html("Patanjali Wellness")}},{key:"GetPatientRecord",value:function(){var e=this;this._UtilityService.showSpinner(),this.unsubscribe.add=this._PatientServices.GetPatientRecord(this.slotBookingId).subscribe(function(t){if(e._UtilityService.hideSpinner(),e.cdRef.detectChanges(),1==t.actionResult.success){var n=JSON.parse(t.actionResult.result);n=n||[],e.IdProofUrl=e._ConstantsService.BaseURIFileServer+"FolderIDProofImage/"+t.actionResult.stringVal,e.cdRef.detectChanges()}else e.cdRef.detectChanges()},function(t){e._UtilityService.hideSpinner(),e._UtilityService.showErrorAlert(t.message)})}},{key:"IsAnyPainRecordFound",value:function(e){var t=this;setTimeout(function(){t.selectedPainScale=e,t.selectedPainScale||(t.PrintRecordList=t.PrintRecordList.filter(function(e){return"Pain Scale"!=e}),t._UtilityService.showWarningAlert("Pain scale record not found."))},5e3)}},{key:"IsDischargeWindowOpen",value:function(e){var t=this;setTimeout(function(){t.selectedIDSPresc=!e,t.selectedIDSPresc||(t.PrintRecordList=t.PrintRecordList.filter(function(e){return"Discharge Summary"!=e}))},2e3)}}])&&t(r.prototype,o),s&&t(r,s),a}(a.a),B.\u0275fac=function(e){return new(e||B)(l.Sb(d.a),l.Sb(u.a),l.Sb(l.h),l.Sb(p.f),l.Sb(f.a))},B.\u0275cmp=l.Mb({type:B,selectors:[["app-patient-record"]],features:[l.Cb],decls:23,vars:20,consts:[[1,"container","d-print-none","print-bar"],[1,"row","m-0"],[1,"col-md-6"],["appendTo","body","optionLabel","name","optionValue","name","display","chip","placeholder","-Select-",3,"options","ngModel","ngModelChange","onChange"],[1,"col-auto"],[1,"btn","btn-success","btn-sm","text-white",2,"padding-top","8px","height","36px",3,"click"],[1,"fa","fa-print"],[4,"ngIf"],["style","page-break-after: always;",4,"ngIf"],[3,"InputType"],[2,"page-break-after","always"],[3,"InputType","IsAnyRecord"],[3,"InputType","IsMedicine","tag"],[3,"InputType","IsDischargeWindowOpen"]],template:function(e,t){1&e&&(l.Yb(0,"div",0),l.Yb(1,"div",1),l.Yb(2,"div",2),l.Yb(3,"p-multiSelect",3),l.ic("ngModelChange",function(e){return t.PrintRecordList=e})("onChange",function(){return t.onChange()}),l.Xb(),l.Xb(),l.Yb(4,"div",4),l.Yb(5,"a",5),l.ic("click",function(){return t.print()}),l.Tb(6,"i",6),l.Uc(7," Print"),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Sc(8,F,2,1,"div",7),l.Sc(9,D,1,0,"div",8),l.Sc(10,w,2,1,"div",7),l.Sc(11,C,1,0,"div",8),l.Sc(12,T,2,1,"div",7),l.Sc(13,L,1,0,"div",8),l.Sc(14,O,2,1,"div",7),l.Sc(15,k,1,0,"div",8),l.Sc(16,A,2,1,"div",7),l.Sc(17,X,1,0,"div",8),l.Sc(18,_,2,1,"div",7),l.Sc(19,M,1,0,"div",8),l.Sc(20,Y,2,3,"div",7),l.Sc(21,U,1,0,"div",8),l.Sc(22,j,2,1,"div",7)),2&e&&(l.Fb(3),l.Pc(l.yc(19,K)),l.tc("options",t.stlPrintRecordList)("ngModel",t.PrintRecordList),l.Fb(5),l.tc("ngIf",t.selectedRogiSoochee),l.Fb(1),l.tc("ngIf",t.selectedRogiSoochee),l.Fb(1),l.tc("ngIf",t.selectedIPDAdminssionForm),l.Fb(1),l.tc("ngIf",(t.selectedIPDAdminssionForm||t.selectedRogiSoochee)&&t.selectedOPDPresc),l.Fb(1),l.tc("ngIf",t.selectedOPDPresc),l.Fb(1),l.tc("ngIf",(t.selectedIPDAdminssionForm||t.selectedOPDPresc)&&t.selectedCaseSheet),l.Fb(1),l.tc("ngIf",t.selectedCaseSheet),l.Fb(1),l.tc("ngIf",(t.selectedIPDAdminssionForm||t.selectedOPDPresc||t.selectedCaseSheet)&&t.selectedConsentForm),l.Fb(1),l.tc("ngIf",t.selectedConsentForm),l.Fb(1),l.tc("ngIf",(t.selectedIPDAdminssionForm||t.selectedOPDPresc||t.selectedCaseSheet||t.selectedConsentForm)&&t.selectedPainScale),l.Fb(1),l.tc("ngIf",t.selectedPainScale),l.Fb(1),l.tc("ngIf",(t.selectedIPDAdminssionForm||t.selectedOPDPresc||t.selectedCaseSheet||t.selectedConsentForm||t.selectedPainScale)&&t.selectedIPDPresc),l.Fb(1),l.tc("ngIf",t.selectedIPDPresc),l.Fb(1),l.tc("ngIf",(t.selectedIPDAdminssionForm||t.selectedOPDPresc||t.selectedCaseSheet||t.selectedConsentForm||t.selectedPainScale||t.selectedIPDPresc)&&t.selectedIDSPresc),l.Fb(1),l.tc("ngIf",t.selectedIDSPresc))},directives:[P.a,b.o,b.r,s.p,h.a,m.a,S.a,I.a,v.a,g.a,y.a,R.a],styles:[""]}),B)}],G=((W=function t(){e(this,t)}).\u0275fac=function(e){return new(e||W)},W.\u0275mod=l.Qb({type:W}),W.\u0275inj=l.Pb({imports:[[d.l.forChild(x)],d.l]}),W),J=o("WrBB"),N=o("coK0"),V=o("SR41"),Q=o("VLwR"),Z=o("73c8"),q=o("S+7B"),z=o("KZHz"),H=o("uKaa"),ee=o("ycwT"),te=o("vi3p"),ne=((E=function t(){e(this,t)}).\u0275fac=function(e){return new(e||E)},E.\u0275mod=l.Qb({type:E}),E.\u0275inj=l.Pb({imports:[[s.c,G,J.OpdIpdPrintPrescriptionModule,N.IpdPrintPrescriptionModule,V.CombinedInvoicePrintModule,P.b,b.i,Q.PatientPrintPrescriptionModule,Z.PrintIpdAdmissionFormModule,q.ConsentFormModule,z.PrintIpdRegistrationFormModule,H.PrintPainAssessmentModule,ee.a,te.PrintRogiSoocheeFormModule]]}),E)}}])}();