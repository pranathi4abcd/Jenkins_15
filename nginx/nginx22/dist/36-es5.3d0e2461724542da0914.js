!function(){function e(t,n){return(e=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(t,n)}function t(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var a,c=i(e);if(t){var o=i(this).constructor;a=Reflect.construct(c,arguments,o)}else a=c.apply(this,arguments);return n(this,a)}}function n(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[36,53,54,55,56,57,58,59],{CwUn:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var i,a=function(){function e(){o(this,e),this.subs=[]}return r(e,[{key:"add",set:function(e){this.subs.push(e)}},{key:"dispose",value:function(){this.subs.forEach(function(e){return e.unsubscribe()})}}]),e}(),c=n("fXoL"),l=((i=function(){function e(){o(this,e),this.unsubscribe=new a}return r(e,[{key:"ngOnDestroy",value:function(){this.unsubscribe.dispose()}},{key:"NumberChangeEvent",value:function(e){e.target.value<parseInt(e.target.min)&&""!=e.target.min?e.target.value=e.target.min:e.target.value>parseInt(e.target.max)&&""!=e.target.max?e.target.value=e.target.max:e.target.value.length>e.target.maxLength&&"-1"!=e.target.maxLength&&(e.target.value=e.target.value.slice(0,e.target.maxLength))}},{key:"validateNumber",value:function(e){var t=e.keyCode;e.key.match(/[0-9]/g)&&![8,37,39,46].includes(t)||e.preventDefault()}},{key:"validateText",value:function(e){var t=e.keyCode;e.key.match(/[A-Za-z\s]/g)&&![8,37,39,46].includes(t)||e.preventDefault()}},{key:"validateFloat",value:function(e){var t=e.keyCode;if(t>31&&(t<48||t>57)&&46!=t)return!1;var n=e.target.value.length,i=e.target.value.indexOf(".");return!(i>0&&46==t||i>0&&n+1-i>3)}},{key:"validateTextNumeric",value:function(e){var t=e.keyCode;e.key.match(/[A-Za-z0-9\s]/g)&&![8,37,39,46].includes(t)||e.preventDefault()}},{key:"validateBP",value:function(e){var t=e.keyCode;if(t>31&&(t<48||t>57)&&47!=t)return!1;var n=e.target.value.length,i=e.target.value.indexOf("/");return!(47==t&&(n<2||n>3)||i>0&&47==t||i>0&&n+1-i>4)}},{key:"dateRangeValidation",value:function(e,t,n){return Math.floor((t-e)/864e5)<=n}},{key:"decodeHTMLEntities",value:function(e){return e.replace(/&([^;]+);/gm,function(e,t){return s[t]||e})}},{key:"validateEmail",value:function(e){return/\S+@\S+\.\S+/.test(e)}}]),e}()).\u0275fac=function(e){return new(e||i)},i.\u0275prov=c.Ob({token:i,factory:i.\u0275fac}),i),s={amp:"&",apos:"'","#x27":"'","#x2F":"/","#39":"'","#47":"/",lt:"<",gt:">",nbsp:" ",quot:'"'}},Ji6n:function(e,t,n){"use strict";n.d(t,"a",function(){return p}),n.d(t,"b",function(){return g});var i=n("fXoL"),c=n("ofXK"),l=n("3Pt+"),s=["cb"],b=function(e,t,n){return{"p-checkbox-label":!0,"p-checkbox-label-active":e,"p-disabled":t,"p-checkbox-label-focus":n}};function u(e,t){if(1&e){var n=i.Zb();i.Yb(0,"label",7),i.ic("click",function(e){i.Lc(n);var t=i.mc(),a=i.Ic(3);return t.onClick(e,a,!0)}),i.Uc(1),i.Xb()}if(2&e){var a=i.mc();i.Hb(a.labelStyleClass),i.tc("ngClass",i.Bc(5,b,a.checked,a.disabled,a.focused)),i.Gb("for",a.inputId),i.Fb(1),i.Vc(a.label)}}var d=function(e,t,n){return{"p-checkbox p-component":!0,"p-checkbox-checked":e,"p-checkbox-disabled":t,"p-checkbox-focused":n}},f=function(e,t,n){return{"p-highlight":e,"p-disabled":t,"p-focus":n}},h={provide:l.m,useExisting:Object(i.X)(function(){return p}),multi:!0},p=function(){var e=function(){function e(t){o(this,e),this.cd=t,this.checkboxIcon="pi pi-check",this.onChange=new i.o,this.onModelChange=function(){},this.onModelTouched=function(){},this.focused=!1,this.checked=!1}return r(e,[{key:"onClick",value:function(e,t,n){e.preventDefault(),this.disabled||this.readonly||(this.checked=!this.checked,this.updateModel(e),n&&t.focus())}},{key:"updateModel",value:function(e){this.binary?this.onModelChange(this.checked):(this.checked?this.addValue():this.removeValue(),this.onModelChange(this.model),this.formControl&&this.formControl.setValue(this.model)),this.onChange.emit({checked:this.checked,originalEvent:e})}},{key:"handleChange",value:function(e){this.readonly||(this.checked=e.target.checked,this.updateModel(e))}},{key:"isChecked",value:function(){return this.binary?this.model:this.model&&this.model.indexOf(this.value)>-1}},{key:"removeValue",value:function(){var e=this;this.model=this.model.filter(function(t){return t!==e.value})}},{key:"addValue",value:function(){this.model=this.model?[].concat(a(this.model),[this.value]):[this.value]}},{key:"onFocus",value:function(){this.focused=!0}},{key:"onBlur",value:function(){this.focused=!1,this.onModelTouched()}},{key:"focus",value:function(){this.inputViewChild.nativeElement.focus()}},{key:"writeValue",value:function(e){this.model=e,this.checked=this.isChecked(),this.cd.markForCheck()}},{key:"registerOnChange",value:function(e){this.onModelChange=e}},{key:"registerOnTouched",value:function(e){this.onModelTouched=e}},{key:"setDisabledState",value:function(e){this.disabled=e,this.cd.markForCheck()}}]),e}();return e.\u0275fac=function(t){return new(t||e)(i.Sb(i.h))},e.\u0275cmp=i.Mb({type:e,selectors:[["p-checkbox"]],viewQuery:function(e,t){var n;(1&e&&i.cd(s,1),2&e)&&(i.Hc(n=i.jc())&&(t.inputViewChild=n.first))},inputs:{checkboxIcon:"checkboxIcon",disabled:"disabled",value:"value",name:"name",binary:"binary",label:"label",ariaLabelledBy:"ariaLabelledBy",tabindex:"tabindex",inputId:"inputId",style:"style",styleClass:"styleClass",labelStyleClass:"labelStyleClass",formControl:"formControl",readonly:"readonly",required:"required"},outputs:{onChange:"onChange"},features:[i.Eb([h])],decls:7,vars:25,consts:[[3,"ngStyle","ngClass"],[1,"p-hidden-accessible"],["type","checkbox",3,"readonly","value","checked","disabled","focus","blur","change"],["cb",""],["role","checkbox",1,"p-checkbox-box",3,"ngClass","click"],[1,"p-checkbox-icon",3,"ngClass"],[3,"class","ngClass","click",4,"ngIf"],[3,"ngClass","click"]],template:function(e,t){if(1&e){var n=i.Zb();i.Yb(0,"div",0),i.Yb(1,"div",1),i.Yb(2,"input",2,3),i.ic("focus",function(){return t.onFocus()})("blur",function(){return t.onBlur()})("change",function(e){return t.handleChange(e)}),i.Xb(),i.Xb(),i.Yb(4,"div",4),i.ic("click",function(e){i.Lc(n);var a=i.Ic(3);return t.onClick(e,a,!0)}),i.Tb(5,"span",5),i.Xb(),i.Xb(),i.Sc(6,u,2,9,"label",6)}2&e&&(i.Hb(t.styleClass),i.tc("ngStyle",t.style)("ngClass",i.Bc(17,d,t.checked,t.disabled,t.focused)),i.Fb(2),i.tc("readonly",t.readonly)("value",t.value)("checked",t.checked)("disabled",t.disabled),i.Gb("id",t.inputId)("name",t.name)("tabindex",t.tabindex)("aria-labelledby",t.ariaLabelledBy)("required",t.required),i.Fb(2),i.tc("ngClass",i.Bc(21,f,t.checked,t.disabled,t.focused)),i.Gb("aria-checked",t.checked),i.Fb(1),i.tc("ngClass",t.checked?t.checkboxIcon:null),i.Fb(1),i.tc("ngIf",t.label))},directives:[c.q,c.n,c.p],styles:[".p-checkbox{-ms-user-select:none;-webkit-user-select:none;cursor:pointer;display:inline-flex;user-select:none;vertical-align:bottom}.p-checkbox-disabled{cursor:default!important;pointer-events:none}.p-checkbox-box{align-items:center;display:flex;justify-content:center}p-checkbox{align-items:center;display:inline-flex;vertical-align:bottom}.p-checkbox-label{line-height:1}"],encapsulation:2,changeDetection:0}),e}(),g=function(){var e=function e(){o(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.Qb({type:e}),e.\u0275inj=i.Pb({imports:[[c.c]]}),e}()},rnzT:function(n,i,a){"use strict";a.r(i),a.d(i,"CreditFormModule",function(){return P});var c=a("ofXK"),l=a("tyNb"),s=a("CwUn"),b=a("Nach"),u=a("fXoL"),d=a("G+wY"),f=a("NLkC"),h=a("Q8Cd"),p=a("sCq/");function g(e,t){if(1&e&&(u.Yb(0,"td",15),u.Yb(1,"b"),u.Uc(2,"Credit Application Number: "),u.Xb(),u.Yb(3,"span"),u.Uc(4),u.Xb(),u.Xb()),2&e){var n=u.mc();u.Fb(4),u.Vc(n.lstPatientDetails.DocumentNumber)}}function m(e,t){if(1&e&&(u.Yb(0,"tr"),u.Yb(1,"td",28),u.Yb(2,"strong"),u.Uc(3,"Mode"),u.Xb(),u.Xb(),u.Yb(4,"td",28),u.Uc(5),u.nc(6,"titlecase"),u.Xb(),u.Yb(7,"td",28),u.Yb(8,"strong"),u.Uc(9,"Receive/Refund Date"),u.Xb(),u.Xb(),u.Yb(10,"td",28),u.Uc(11),u.nc(12,"date"),u.Xb(),u.Yb(13,"td",28),u.Yb(14,"strong"),u.Uc(15,"Type"),u.Xb(),u.Xb(),u.Yb(16,"td",28),u.Uc(17),u.nc(18,"titlecase"),u.Xb(),u.Yb(19,"td",28),u.Yb(20,"strong"),u.Uc(21,"TransactionId"),u.Xb(),u.Xb(),u.Yb(22,"td",28),u.Uc(23),u.Xb(),u.Yb(24,"td",28),u.Yb(25,"strong"),u.Uc(26,"Amount"),u.Xb(),u.Xb(),u.Yb(27,"td",28),u.Uc(28),u.Xb(),u.Xb()),2&e){var n=t.$implicit,i=u.mc(2);u.Fb(5),u.Vc(u.oc(6,5,n.TrnMode)),u.Fb(6),u.Vc(u.pc(12,7,n.ReceivedDate,i.customDateFormat.DEF_DATE)),u.Fb(6),u.Vc(u.oc(18,10,n.InvType)),u.Fb(6),u.Wc(" ",n.TransactionId,""),u.Fb(5),u.Wc("",n.Amount," ")}}function v(e,t){if(1&e&&(u.Yb(0,"tr"),u.Yb(1,"td",24),u.Yb(2,"table",25),u.Yb(3,"thead"),u.Yb(4,"tr"),u.Yb(5,"th",26),u.Yb(6,"h4"),u.Uc(7,"Transaction Details"),u.Xb(),u.Xb(),u.Xb(),u.Xb(),u.Yb(8,"tbody"),u.Sc(9,m,29,12,"tr",27),u.Xb(),u.Xb(),u.Xb(),u.Xb()),2&e){var n=u.mc();u.Fb(9),u.tc("ngForOf",n.TenderInfo)}}function y(e,t){if(1&e&&(u.Yb(0,"td"),u.Yb(1,"b"),u.Uc(2,"Reference Tax Invoice Number: "),u.Xb(),u.Yb(3,"span"),u.Uc(4),u.Xb(),u.Xb()),2&e){var n=u.mc();u.Fb(4),u.Vc(n.lstPatientDetails.RefTaxInvNumber)}}function X(e,t){if(1&e&&(u.Yb(0,"td"),u.Yb(1,"b"),u.Uc(2,"Reference Tax Invoice Date: "),u.Xb(),u.Yb(3,"span"),u.Uc(4),u.nc(5,"date"),u.Xb(),u.Xb()),2&e){var n=u.mc();u.Fb(4),u.Vc(u.pc(5,1,n.lstPatientDetails.RefTaxInvoiceDate,n.customDateFormat.DEF_DATE))}}var k,Y,x,D=[{path:"",component:(k=function(n){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&e(t,n)}(a,n);var i=t(a);function a(e,t,n,c,l){var r;return o(this,a),(r=i.call(this))._PatientService=e,r._ConstantsService=t,r.route=n,r.cdRef=c,r._UtilityService=l,r.customDateFormat=b.h,r.ApplicationId=null,r.lstPatientDetails={},r.TenderInfo=[],r.slotBookingId=null,r.IsLetterhead="false",r}return r(a,[{key:"ngOnInit",value:function(){var e=this;this.unsubscribe.add=this.route.queryParams.subscribe(function(t){e.ApplicationId=t.ApplicationId,e.slotBookingId=t.SlotBookingId}),this.LoadTenderInfo(),this.LoadPatientDetailsList(),this.LoadTenderInfo()}},{key:"LoadPatientDetailsList",value:function(){var e=this;this._UtilityService.showSpinner(),this.unsubscribe.add=this._PatientService.GetPatientDetailsForRefund(this.ApplicationId).subscribe(function(t){if(e._UtilityService.hideSpinner(),1==t.actionResult.success){var n=JSON.parse(t.actionResult.result);e.lstPatientDetails=n=n||[],e.cdRef.detectChanges()}},function(t){e._UtilityService.hideSpinner(),e._UtilityService.showErrorAlert(t.message)})}},{key:"LoadTenderInfo",value:function(){var e=this;this.TenderInfo=[],this._UtilityService.showSpinner(),this.unsubscribe.add=this._PatientService.TransactionDetailsBySlot(this.slotBookingId).subscribe(function(t){if(e._UtilityService.hideSpinner(),1==t.actionResult.success){var n=JSON.parse(t.actionResult.result);e.TenderInfo=n=n||[],e.cdRef.detectChanges()}},function(t){e.TenderInfo=[],e._UtilityService.hideSpinner(),e._UtilityService.showErrorAlert(t.message)}),this.cdRef.detectChanges()}},{key:"onselectedLetterhead",value:function(e){this.IsLetterhead=e}}]),a}(s.a),k.\u0275fac=function(e){return new(e||k)(u.Sb(d.a),u.Sb(b.f),u.Sb(l.a),u.Sb(u.h),u.Sb(f.a))},k.\u0275cmp=u.Mb({type:k,selectors:[["app-credit-form"]],features:[u.Cb],decls:144,vars:35,consts:[[1,"container"],[3,"IsLetterhead","onselectedLetterhead"],[3,"IsBookingDetails","slotBookingId","IsLetterhead"],[1,"detail-box"],[2,"padding","0","margin","0","font-size","15px"],["cellpadding","4","cellspacing","0",2,"width","100%","padding","20px 10px","margin","0 auto","box-sizing","border-box"],["cellpadding","0","cellspacing","3",2,"width","100%","margin","0 auto","box-sizing","border-box","border","none","margin-top","20px","margin-bottom","10px"],["align","center",2,"width","100%"],[2,"border","1px solid #ededed","padding","8px 20px","border-radius","20px","background","#ffffff"],["align","right"],[2,"font-weight","600"],["colspan","2","align","left"],["cellpadding","4","cellspacing","0",2,"width","100%","padding","6px 10px","margin","0 auto","box-sizing","border-box"],["colspan","2",2,"font-weight","600"],["class","text-right",4,"ngIf"],[1,"text-right"],[4,"ngIf"],["colspan","2",2,"padding-top","10px","line-height","24px","text-align","center","font-size","20px","font-weight","600"],["colspan","2",2,"display","inline-block","padding-top","10px","line-height","24px","width","100%"],["colspan","2",2,"display","inline-block","padding-top","25px","line-height","24px","width","100%","font-weight","600"],["colspan","2",2,"display","inline-block","padding-top","10px","line-height","24px","width","100%","font-weight","600"],[2,"display","inline-block","padding-top","10px","line-height","24px","width","33%","font-weight","600"],[2,"display","inline-block","padding-top","10px","line-height","24px","width","33%","font-weight","600","text-align","center"],[2,"display","inline-block","padding-top","10px","line-height","24px","width","33%","font-weight","600","text-align","right"],["colspan","2"],["cellpadding","2","cellspacing","0",2,"width","100%","margin","0 auto","box-sizing","border-box","border","1px solid #d3d3d3","margin-top","10px"],["colspan","10",2,"padding","6px 10px","border-left","1px solid #d3d3d3","border-bottom","1px solid #d3d3d3","text-align","center"],[4,"ngFor","ngForOf"],[2,"padding","6px 10px","border-left","1px solid #d3d3d3","border-bottom","1px solid #d3d3d3"]],template:function(e,t){1&e&&(u.Yb(0,"div",0),u.Yb(1,"app-print-access-header",1),u.ic("onselectedLetterhead",function(e){return t.onselectedLetterhead(e)}),u.Xb(),u.Tb(2,"app-print-header",2),u.Yb(3,"div",3),u.Yb(4,"div",4),u.Yb(5,"table",5),u.Yb(6,"tbody"),u.Yb(7,"table",6),u.Yb(8,"tr"),u.Yb(9,"td",7),u.Yb(10,"span",8),u.Yb(11,"b"),u.Uc(12,"Credit Form"),u.Xb(),u.Xb(),u.Xb(),u.Xb(),u.Xb(),u.Yb(13,"tr"),u.Yb(14,"td",9),u.Yb(15,"span",10),u.Uc(16,"Date:"),u.Xb(),u.Uc(17),u.nc(18,"date"),u.Xb(),u.Xb(),u.Yb(19,"tr"),u.Yb(20,"td",11),u.Uc(21," To,"),u.Tb(22,"br"),u.Uc(23," Seva Pramukh "),u.Tb(24,"br"),u.Uc(25," Patanjali Wellness "),u.Tb(26,"br"),u.Uc(27),u.Xb(),u.Xb(),u.Xb(),u.Xb(),u.Yb(28,"table",12),u.Yb(29,"tbody"),u.Yb(30,"tr"),u.Yb(31,"td",13),u.Uc(32," I request you to please credit my money due to following reason. Details given below: "),u.Xb(),u.Xb(),u.Yb(33,"tr"),u.Yb(34,"td"),u.Yb(35,"b"),u.Uc(36,"Health Seekers Name: "),u.Xb(),u.Yb(37,"span"),u.Uc(38),u.Xb(),u.Xb(),u.Sc(39,g,5,1,"td",14),u.Xb(),u.Yb(40,"tr"),u.Yb(41,"td"),u.Yb(42,"b"),u.Uc(43,"Room No: "),u.Xb(),u.Yb(44,"span"),u.Uc(45),u.Xb(),u.Xb(),u.Yb(46,"td",15),u.Yb(47,"b"),u.Uc(48,"Address: "),u.Xb(),u.Yb(49,"span"),u.Uc(50),u.Xb(),u.Xb(),u.Xb(),u.Yb(51,"tr"),u.Yb(52,"td"),u.Yb(53,"b"),u.Uc(54,"Admission Date : "),u.Xb(),u.Yb(55,"span"),u.Uc(56),u.nc(57,"date"),u.Xb(),u.Xb(),u.Yb(58,"td",15),u.Yb(59,"b"),u.Uc(60,"Discharge Date : "),u.Xb(),u.Yb(61,"span"),u.Uc(62),u.nc(63,"date"),u.Xb(),u.Xb(),u.Xb(),u.Yb(64,"tr"),u.Yb(65,"td"),u.Yb(66,"b"),u.Uc(67,"Payment Date: "),u.Xb(),u.Yb(68,"span"),u.Uc(69),u.nc(70,"date"),u.Xb(),u.Xb(),u.Yb(71,"td",15),u.Yb(72,"b"),u.Uc(73,"Amount: "),u.Xb(),u.Yb(74,"span"),u.Uc(75),u.Xb(),u.Xb(),u.Xb(),u.Yb(76,"tr"),u.Yb(77,"td"),u.Yb(78,"b"),u.Uc(79,"Mobile Number: "),u.Xb(),u.Yb(80,"span"),u.Uc(81),u.Xb(),u.Xb(),u.Xb(),u.Sc(82,v,10,1,"tr",16),u.Yb(83,"tr"),u.Yb(84,"td",17),u.Tb(85,"br"),u.Uc(86,"By Office "),u.Xb(),u.Xb(),u.Yb(87,"tr"),u.Yb(88,"td"),u.Yb(89,"b"),u.Uc(90,"MR Number: "),u.Xb(),u.Yb(91,"span"),u.Uc(92),u.Xb(),u.Xb(),u.Yb(93,"td",15),u.Yb(94,"b"),u.Uc(95,"Booking Id: "),u.Xb(),u.Yb(96,"span"),u.Uc(97),u.Xb(),u.Xb(),u.Xb(),u.Yb(98,"tr"),u.Yb(99,"td"),u.Yb(100,"b"),u.Uc(101,"Credit Amount: "),u.Xb(),u.Yb(102,"span"),u.Uc(103),u.Xb(),u.Xb(),u.Yb(104,"td",15),u.Yb(105,"b"),u.Uc(106,"Purpose of Credit: "),u.Xb(),u.Yb(107,"span"),u.Uc(108),u.Xb(),u.Xb(),u.Xb(),u.Yb(109,"tr"),u.Sc(110,y,5,1,"td",16),u.Xb(),u.Yb(111,"tr"),u.Sc(112,X,6,4,"td",16),u.Tb(113,"td"),u.Xb(),u.Yb(114,"tr"),u.Yb(115,"td",18),u.Yb(116,"b"),u.Uc(117,"Credit Permitted By: "),u.Xb(),u.Yb(118,"span"),u.Uc(119),u.Xb(),u.Xb(),u.Xb(),u.Yb(120,"tr"),u.Yb(121,"td",19),u.Tb(122,"br"),u.Uc(123,"Need to Attach Documents: "),u.Xb(),u.Xb(),u.Yb(124,"tr"),u.Yb(125,"td",20),u.Tb(126,"br"),u.Uc(127,"Cancelled Cheque/Bank Statement/Payment Receipt:"),u.Xb(),u.Xb(),u.Xb(),u.Xb(),u.Yb(128,"table",12),u.Yb(129,"tbody"),u.Tb(130,"hr"),u.Yb(131,"tr"),u.Yb(132,"td",21),u.Uc(133,"Front Office Head "),u.Tb(134,"br"),u.Uc(135,"Signature "),u.Xb(),u.Yb(136,"td",22),u.Uc(137," Authorized "),u.Tb(138,"br"),u.Uc(139,"Signature "),u.Xb(),u.Yb(140,"td",23),u.Uc(141," Health Seekers "),u.Tb(142,"br"),u.Uc(143,"Signature "),u.Xb(),u.Xb(),u.Xb(),u.Xb(),u.Xb(),u.Xb(),u.Xb()),2&e&&(u.Fb(1),u.tc("IsLetterhead",t.IsLetterhead),u.Fb(1),u.tc("IsBookingDetails",!1)("slotBookingId",t.slotBookingId)("IsLetterhead",t.IsLetterhead),u.Fb(15),u.Wc(" ",u.pc(18,23,null==t.lstPatientDetails?null:t.lstPatientDetails.Date,t.customDateFormat.DEF_DATE),""),u.Fb(10),u.Wc(" ",null==t.lstPatientDetails?null:t.lstPatientDetails.ClinicName," "),u.Fb(11),u.Vc(null==t.lstPatientDetails?null:t.lstPatientDetails.PatientName),u.Fb(1),u.tc("ngIf",null!=(null==t.lstPatientDetails?null:t.lstPatientDetails.DocumentNumber)&&null!=(null==t.lstPatientDetails?null:t.lstPatientDetails.DocumentNumber)),u.Fb(6),u.Vc(null==t.lstPatientDetails?null:t.lstPatientDetails.RoomNumber),u.Fb(5),u.Vc(null==t.lstPatientDetails?null:t.lstPatientDetails.Address),u.Fb(6),u.Vc(u.pc(57,26,t.lstPatientDetails.ArrivalDate,t.customDateFormat.DEF_DATE)),u.Fb(6),u.Vc(u.pc(63,29,t.lstPatientDetails.DischargeDate,t.customDateFormat.DEF_DATE)),u.Fb(7),u.Vc(u.pc(70,32,null==t.lstPatientDetails?null:t.lstPatientDetails.PaymentDate,t.customDateFormat.DEF_DATE)),u.Fb(6),u.Vc(null==t.lstPatientDetails?null:t.lstPatientDetails.RequestedAmount),u.Fb(6),u.Vc(null==t.lstPatientDetails?null:t.lstPatientDetails.ContactNumber),u.Fb(1),u.tc("ngIf",(null==t.TenderInfo?null:t.TenderInfo.length)>0),u.Fb(10),u.Vc(t.lstPatientDetails.MRNo),u.Fb(5),u.Vc(t.lstPatientDetails.BookingNo),u.Fb(6),u.Vc(t.lstPatientDetails.CreditedAmount),u.Fb(5),u.Vc(t.lstPatientDetails.Purpose),u.Fb(2),u.tc("ngIf",null!=(null==t.lstPatientDetails?null:t.lstPatientDetails.RefTaxInvNumber)&&null!=(null==t.lstPatientDetails?null:t.lstPatientDetails.RefTaxInvNumber)),u.Fb(2),u.tc("ngIf",null!=(null==t.lstPatientDetails?null:t.lstPatientDetails.RefTaxInvoiceDate)&&null!=(null==t.lstPatientDetails?null:t.lstPatientDetails.RefTaxInvoiceDate)),u.Fb(7),u.Vc(t.lstPatientDetails.PermitedBy))},directives:[h.a,p.a,c.p,c.o],pipes:[c.f,c.y],styles:[""]}),k)}],U=((Y=function e(){o(this,e)}).\u0275fac=function(e){return new(e||Y)},Y.\u0275mod=u.Qb({type:Y}),Y.\u0275inj=u.Pb({imports:[[l.l.forChild(D)],l.l]}),Y),C=a("9XlL"),I=a("ycwT"),P=((x=function e(){o(this,e)}).\u0275fac=function(e){return new(e||x)},x.\u0275mod=u.Qb({type:x}),x.\u0275inj=u.Pb({imports:[[c.c,U,C.a,I.a]]}),x)}}])}();