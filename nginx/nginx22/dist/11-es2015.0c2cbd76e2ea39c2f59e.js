(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"9oqr":function(t,e,i){"use strict";i.d(e,"a",function(){return d});var n=i("fXoL"),s=i("Nach"),o=i("CwUn"),l=i("G+wY"),c=i("NLkC"),r=i("NCSE");const a=["fileInput"];let d=(()=>{class t extends o.a{constructor(t,e){super(),this._PatientServices=t,this._UtilityService=e,this.clinicId=null,this.FormType=1,this.SlotBookingId=null,this.IsMultiple=!1,this.FileLimit=1,this.MaxFileSize=1024e3,this.UploadMode=null,this.FileSuccess=new n.o,this.SelectedFile=[],this.userTypes=s.s,this.ClinicIdSelected=null}ngOnInit(){}onSelectFile(t){this.SelectedFile=[];for(let e of t.files)this.SelectedFile.push(e)}ResetSelectedFile(){this.SelectedFile=[]}UploadFile(t){var e;this.SelectedFile=[];for(let n of t.files)this.SelectedFile.push(n);const i=new FormData;if((null===(e=this.SelectedFile)||void 0===e?void 0:e.length)>0){for(let e of this.SelectedFile)i.append("files[]",e);s.s.SuperAdmin!==localStorage.getItem("userTypeId")&&(this.ClinicIdSelected=localStorage.getItem("ClinicId"));let t={};t.FormType=this.FormType,t.ClinicId="null"==this.ClinicIdSelected||null==this.ClinicIdSelected||null==this.ClinicIdSelected||""==this.ClinicIdSelected?this.clinicId:this.ClinicIdSelected,t.SlotBookingId=this.SlotBookingId,t.UploadedBy=localStorage.getItem("userId"),t.UploadMode=this.UploadMode,i.append("data",JSON.stringify(t)),this._UtilityService.showSpinner(),this.unsubscribe.add=this._PatientServices.AddFileByFormType(i).subscribe(t=>{this._UtilityService.hideSpinner(),this.FileSuccess.emit(t.actionResult.errMsg),this.SelectedFile=[]},t=>{this._UtilityService.hideSpinner()})}}}return t.\u0275fac=function(e){return new(e||t)(n.Sb(l.a),n.Sb(c.a))},t.\u0275cmp=n.Mb({type:t,selectors:[["app-file-upload"]],viewQuery:function(t,e){if(1&t&&n.cd(a,1),2&t){let t;n.Hc(t=n.jc())&&(e.fileInput=t.first)}},inputs:{clinicId:"clinicId",FormType:"FormType",SlotBookingId:"SlotBookingId",IsMultiple:"IsMultiple",FileLimit:"FileLimit",MaxFileSize:"MaxFileSize",UploadMode:"UploadMode"},outputs:{FileSuccess:"FileSuccess"},features:[n.Cb],decls:1,vars:3,consts:[["name","myfileBankDepositSlip[]","accept",".JPEG,.JPG,.PNG,.PDF","customUpload","true",3,"maxFileSize","multiple","fileLimit","onClear","onRemove","uploadHandler"]],template:function(t,e){1&t&&(n.Yb(0,"p-fileUpload",0),n.ic("onClear",function(){return e.ResetSelectedFile()})("onRemove",function(){return e.ResetSelectedFile()})("uploadHandler",function(t){return e.UploadFile(t)}),n.Xb()),2&t&&n.tc("maxFileSize",e.MaxFileSize)("multiple",e.IsMultiple)("fileLimit",e.FileLimit)},directives:[r.a],styles:[""]}),t})()},B16f:function(t,e,i){"use strict";i.d(e,"a",function(){return _}),i.d(e,"b",function(){return R});var n=i("fXoL"),s=i("ofXK"),o=i("YyRF"),l=i("tyNb"),c=i("Q4Mo"),r=i("R0Ic");const a=function(t){return{"p-hidden":t}};function d(t,e){if(1&t&&n.Tb(0,"li",4),2&t){const t=n.mc().$implicit;n.tc("ngClass",n.zc(1,a,!1===t.visible))}}function u(t,e){if(1&t&&n.Tb(0,"span",14),2&t){const t=n.mc(3).$implicit;n.tc("ngClass",t.icon)}}function p(t,e){if(1&t&&(n.Yb(0,"span",15),n.Uc(1),n.Xb()),2&t){const t=n.mc(3).$implicit;n.Fb(1),n.Vc(t.label)}}function h(t,e){if(1&t&&n.Tb(0,"span",16),2&t){const t=n.mc(3).$implicit;n.tc("innerHTML",t.label,n.Mc)}}function m(t,e){1&t&&n.Tb(0,"span",17)}const b=function(t){return{"p-menuitem-link":!0,"p-disabled":t}};function f(t,e){if(1&t){const t=n.Zb();n.Yb(0,"a",9),n.ic("keydown",function(e){n.Lc(t);const i=n.mc(2).$implicit;return n.mc().onItemKeyDown(e,i)})("click",function(e){n.Lc(t);const i=n.mc(2).$implicit;return n.mc().onItemClick(e,i)})("mouseenter",function(e){n.Lc(t);const i=n.mc(2).$implicit;return n.mc().onItemMouseEnter(e,i)}),n.Sc(1,u,1,1,"span",10),n.Sc(2,p,2,1,"span",11),n.Sc(3,h,1,1,"ng-template",null,12,n.Tc),n.Sc(5,m,1,0,"span",13),n.Xb()}if(2&t){const t=n.Ic(4),e=n.mc(2).$implicit,i=n.mc();n.Hb(e.styleClass),n.tc("ngClass",n.zc(16,b,e.disabled))("ngStyle",e.style),n.Gb("href",e.url,n.Nc)("data-automationid",e.automationId)("target",e.target)("title",e.title)("id",e.id)("tabindex",e.disabled?null:"0")("aria-haspopup",null!=i.item.items)("aria-expanded",i.item===i.activeItem),n.Fb(1),n.tc("ngIf",e.icon),n.Fb(1),n.tc("ngIf",!1!==e.escape)("ngIfElse",t),n.Fb(3),n.tc("ngIf",e.items)}}function v(t,e){if(1&t&&n.Tb(0,"span",14),2&t){const t=n.mc(3).$implicit;n.tc("ngClass",t.icon)}}function S(t,e){if(1&t&&(n.Yb(0,"span",15),n.Uc(1),n.Xb()),2&t){const t=n.mc(3).$implicit;n.Fb(1),n.Vc(t.label)}}function g(t,e){if(1&t&&n.Tb(0,"span",16),2&t){const t=n.mc(3).$implicit;n.tc("innerHTML",t.label,n.Mc)}}function y(t,e){1&t&&n.Tb(0,"span",17)}const I=function(){return{exact:!1}};function D(t,e){if(1&t){const t=n.Zb();n.Yb(0,"a",18),n.ic("keydown",function(e){n.Lc(t);const i=n.mc(2).$implicit;return n.mc().onItemKeyDown(e,i)})("click",function(e){n.Lc(t);const i=n.mc(2).$implicit;return n.mc().onItemClick(e,i)})("mouseenter",function(e){n.Lc(t);const i=n.mc(2).$implicit;return n.mc().onItemMouseEnter(e,i)}),n.Sc(1,v,1,1,"span",10),n.Sc(2,S,2,1,"span",11),n.Sc(3,g,1,1,"ng-template",null,19,n.Tc),n.Sc(5,y,1,0,"span",13),n.Xb()}if(2&t){const t=n.Ic(4),e=n.mc(2).$implicit;n.Hb(e.styleClass),n.tc("routerLink",e.routerLink)("queryParams",e.queryParams)("routerLinkActive","p-menuitem-link-active")("routerLinkActiveOptions",e.routerLinkActiveOptions||n.yc(23,I))("ngClass",n.zc(24,b,e.disabled))("ngStyle",e.style)("fragment",e.fragment)("queryParamsHandling",e.queryParamsHandling)("preserveFragment",e.preserveFragment)("skipLocationChange",e.skipLocationChange)("replaceUrl",e.replaceUrl)("state",e.state),n.Gb("data-automationid",e.automationId)("target",e.target)("title",e.title)("id",e.id)("tabindex",e.disabled?null:"0"),n.Fb(1),n.tc("ngIf",e.icon),n.Fb(1),n.tc("ngIf",!1!==e.escape)("ngIfElse",t),n.Fb(3),n.tc("ngIf",e.items)}}function k(t,e){if(1&t){const t=n.Zb();n.Yb(0,"p-tieredMenuSub",20),n.ic("keydownItem",function(e){return n.Lc(t),n.mc(3).onChildItemKeyDown(e)})("leafClick",function(){return n.Lc(t),n.mc(3).onLeafClick()}),n.Xb()}if(2&t){const t=n.mc(2).$implicit,e=n.mc();n.tc("parentActive",t===e.activeItem)("item",t)("mobileActive",e.mobileActive)("autoDisplay",e.autoDisplay)("popup",e.popup)}}const F=function(t,e){return{"p-menuitem":!0,"p-menuitem-active":t,"p-hidden":e}};function C(t,e){if(1&t&&(n.Yb(0,"li",0,5),n.Sc(2,f,6,18,"a",6),n.Sc(3,D,6,26,"a",7),n.Sc(4,k,1,5,"p-tieredMenuSub",8),n.Xb()),2&t){const t=n.mc().$implicit,e=n.mc();n.tc("ngClass",n.Ac(4,F,t===e.activeItem,!1===t.visible)),n.Fb(2),n.tc("ngIf",!t.routerLink),n.Fb(1),n.tc("ngIf",t.routerLink),n.Fb(1),n.tc("ngIf",t.items)}}function T(t,e){if(1&t&&(n.Sc(0,d,1,3,"li",2),n.Sc(1,C,5,7,"li",3)),2&t){const t=e.$implicit;n.tc("ngIf",t.separator),n.Fb(1),n.tc("ngIf",!t.separator)}}const L=function(t){return{"p-submenu-list":t}},w=function(t){return{"p-tieredmenu p-component":!0,"p-tieredmenu-overlay":t}},U=function(t,e){return{showTransitionParams:t,hideTransitionParams:e}},A=function(t){return{value:"visible",params:t}};function X(t,e){if(1&t){const t=n.Zb();n.Yb(0,"div",1),n.ic("@overlayAnimation.start",function(e){return n.Lc(t),n.mc().onOverlayAnimationStart(e)})("click",function(){return n.Lc(t),n.mc().preventDocumentDefault=!0}),n.Yb(1,"p-tieredMenuSub",2),n.ic("leafClick",function(){return n.Lc(t),n.mc().onLeafClick()}),n.Xb(),n.Xb()}if(2&t){const t=n.mc();n.Hb(t.styleClass),n.tc("ngClass",n.zc(12,w,t.popup))("ngStyle",t.style)("@overlayAnimation",n.zc(17,A,n.Ac(14,U,t.showTransitionOptions,t.hideTransitionOptions)))("@.disabled",!0!==t.popup),n.Fb(1),n.tc("item",t.model)("parentActive",t.parentActive)("baseZIndex",t.baseZIndex)("autoZIndex",t.autoZIndex)("autoDisplay",t.autoDisplay)("popup",t.popup)}}let Y=(()=>{class t{constructor(t,e,i){this.el=t,this.renderer=e,this.cd=i,this.autoZIndex=!0,this.baseZIndex=0,this.leafClick=new n.o,this.keydownItem=new n.o,this.menuHoverActive=!1}get parentActive(){return this._parentActive}set parentActive(t){this.root||(this._parentActive=t,t||(this.activeItem=null))}onItemClick(t,e){e.disabled?t.preventDefault():(e.url||e.routerLink||t.preventDefault(),e.command&&e.command({originalEvent:t,item:e}),e.items&&(this.activeItem&&e===this.activeItem?(this.activeItem=null,this.unbindDocumentClickListener()):(this.activeItem=e,this.root&&this.bindDocumentClickListener())),e.items||this.onLeafClick())}onItemMouseEnter(t,e){e.disabled||this.mobileActive?t.preventDefault():this.root?(this.activeItem||this.autoDisplay||this.popup)&&(this.activeItem=e,this.bindDocumentClickListener()):(this.activeItem=e,this.bindDocumentClickListener())}onLeafClick(){this.activeItem=null,this.root&&this.unbindDocumentClickListener(),this.leafClick.emit()}onItemKeyDown(t,e){let i=t.currentTarget.parentElement;switch(t.key){case"ArrowDown":var n=this.findNextItem(i);n&&n.children[0].focus(),t.preventDefault();break;case"ArrowUp":var s=this.findPrevItem(i);s&&s.children[0].focus(),t.preventDefault();break;case"ArrowRight":e.items&&(this.activeItem=e,this.root&&this.bindDocumentClickListener(),setTimeout(()=>{i.children[1].children[0].children[0].children[0].focus()},50)),t.preventDefault()}this.keydownItem.emit({originalEvent:t,element:i})}findNextItem(t){let e=t.nextElementSibling;return e?o.b.hasClass(e,"p-disabled")||!o.b.hasClass(e,"p-menuitem")?this.findNextItem(e):e:null}findPrevItem(t){let e=t.previousElementSibling;return e?o.b.hasClass(e,"p-disabled")||!o.b.hasClass(e,"p-menuitem")?this.findPrevItem(e):e:null}onChildItemKeyDown(t){"ArrowLeft"===t.originalEvent.key&&(this.activeItem=null,this.root&&this.unbindDocumentClickListener(),t.element.parentElement.parentElement.parentElement.children[0].focus())}bindDocumentClickListener(){this.documentClickListener||(this.documentClickListener=t=>{this.el&&!this.el.nativeElement.contains(t.target)&&(this.activeItem=null,this.cd.markForCheck(),this.unbindDocumentClickListener())},document.addEventListener("click",this.documentClickListener))}unbindDocumentClickListener(){this.documentClickListener&&(document.removeEventListener("click",this.documentClickListener),this.documentClickListener=null)}ngOnDestroy(){this.unbindDocumentClickListener()}}return t.\u0275fac=function(e){return new(e||t)(n.Sb(n.m),n.Sb(n.H),n.Sb(n.h))},t.\u0275cmp=n.Mb({type:t,selectors:[["p-tieredMenuSub"]],inputs:{autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",parentActive:"parentActive",item:"item",root:"root",autoDisplay:"autoDisplay",mobileActive:"mobileActive",popup:"popup"},outputs:{leafClick:"leafClick",keydownItem:"keydownItem"},decls:2,vars:4,consts:[[3,"ngClass"],["ngFor","",3,"ngForOf"],["class","p-menu-separator",3,"ngClass",4,"ngIf"],[3,"ngClass",4,"ngIf"],[1,"p-menu-separator",3,"ngClass"],["listItem",""],["pRipple","",3,"ngClass","ngStyle","class","keydown","click","mouseenter",4,"ngIf"],["role","menuitem","pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","ngClass","ngStyle","class","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","keydown","click","mouseenter",4,"ngIf"],[3,"parentActive","item","mobileActive","autoDisplay","popup","keydownItem","leafClick",4,"ngIf"],["pRipple","",3,"ngClass","ngStyle","keydown","click","mouseenter"],["class","p-menuitem-icon",3,"ngClass",4,"ngIf"],["class","p-menuitem-text",4,"ngIf","ngIfElse"],["htmlLabel",""],["class","p-submenu-icon pi pi-angle-right",4,"ngIf"],[1,"p-menuitem-icon",3,"ngClass"],[1,"p-menuitem-text"],[1,"p-menuitem-text",3,"innerHTML"],[1,"p-submenu-icon","pi","pi-angle-right"],["role","menuitem","pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","ngClass","ngStyle","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","keydown","click","mouseenter"],["htmlRouteLabel",""],[3,"parentActive","item","mobileActive","autoDisplay","popup","keydownItem","leafClick"]],template:function(t,e){1&t&&(n.Yb(0,"ul",0),n.Sc(1,T,2,2,"ng-template",1),n.Xb()),2&t&&(n.tc("ngClass",n.zc(2,L,!e.root)),n.Fb(1),n.tc("ngForOf",e.root?e.item:e.item.items))},directives:[s.n,s.o,s.p,c.a,s.q,l.k,l.j,t],encapsulation:2}),t})(),_=(()=>{class t{constructor(t,e,i){this.el=t,this.renderer=e,this.cd=i,this.autoZIndex=!0,this.baseZIndex=0,this.showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)",this.hideTransitionOptions=".1s linear"}toggle(t){this.visible?this.hide():this.show(t),this.preventDocumentDefault=!0}show(t){this.target=t.currentTarget,this.visible=!0,this.parentActive=!0,this.preventDocumentDefault=!0,this.cd.markForCheck()}onOverlayAnimationStart(t){switch(t.toState){case"visible":this.popup&&(this.container=t.element,this.moveOnTop(),this.appendOverlay(),o.b.absolutePosition(this.container,this.target),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener());break;case"void":this.onOverlayHide()}}appendOverlay(){this.appendTo&&("body"===this.appendTo?document.body.appendChild(this.container):o.b.appendChild(this.container,this.appendTo))}restoreOverlayAppend(){this.container&&this.appendTo&&this.el.nativeElement.appendChild(this.container)}moveOnTop(){this.autoZIndex&&(this.container.style.zIndex=String(this.baseZIndex+ ++o.b.zindex))}hide(){this.visible=!1,this.parentActive=!1,this.cd.markForCheck()}onWindowResize(){this.hide()}onLeafClick(){this.popup&&this.hide(),this.unbindDocumentClickListener()}bindDocumentClickListener(){this.documentClickListener||(this.documentClickListener=this.renderer.listen(this.el?this.el.nativeElement.ownerDocument:"document","click",()=>{!this.preventDocumentDefault&&this.popup&&this.hide(),this.preventDocumentDefault=!1}))}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentResizeListener(){this.documentResizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.documentResizeListener)}unbindDocumentResizeListener(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new o.a(this.target,()=>{this.visible&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}onOverlayHide(){this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.preventDocumentDefault=!1,this.target=null}ngOnDestroy(){this.popup&&(this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.restoreOverlayAppend(),this.onOverlayHide())}}return t.\u0275fac=function(e){return new(e||t)(n.Sb(n.m),n.Sb(n.H),n.Sb(n.h))},t.\u0275cmp=n.Mb({type:t,selectors:[["p-tieredMenu"]],inputs:{autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",model:"model",popup:"popup",style:"style",styleClass:"styleClass",appendTo:"appendTo",autoDisplay:"autoDisplay"},decls:1,vars:1,consts:[[3,"ngClass","class","ngStyle","click",4,"ngIf"],[3,"ngClass","ngStyle","click"],["root","root",3,"item","parentActive","baseZIndex","autoZIndex","autoDisplay","popup","leafClick"]],template:function(t,e){1&t&&n.Sc(0,X,2,19,"div",0),2&t&&n.tc("ngIf",!e.popup||e.visible)},directives:[s.p,s.n,s.q,Y],styles:[".p-tieredmenu-overlay{position:absolute}.p-tieredmenu ul{list-style:none;margin:0;padding:0}.p-tieredmenu .p-submenu-list{display:none;min-width:100%;position:absolute;z-index:1}.p-tieredmenu .p-menuitem-link{align-items:center;cursor:pointer;display:flex;overflow:hidden;position:relative;text-decoration:none}.p-tieredmenu .p-menuitem-text{line-height:1}.p-tieredmenu .p-menuitem{position:relative}.p-tieredmenu .p-menuitem-link .p-submenu-icon{margin-left:auto}.p-tieredmenu .p-menuitem-active>p-tieredmenusub>.p-submenu-list{display:block;left:100%;top:0}"],encapsulation:2,data:{animation:[Object(r.m)("overlayAnimation",[Object(r.l)(":enter",[Object(r.k)({opacity:0,transform:"scaleY(0.8)"}),Object(r.e)("{{showTransitionParams}}")]),Object(r.l)(":leave",[Object(r.e)("{{hideTransitionParams}}",Object(r.k)({opacity:0}))])])]},changeDetection:0}),t})(),R=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.Qb({type:t}),t.\u0275inj=n.Pb({imports:[[s.c,l.l,c.b],l.l]}),t})()},"Bj//":function(t,e,i){"use strict";i.d(e,"a",function(){return g});var n=i("CwUn"),s=i("Nach"),o=i("fXoL"),l=i("NLkC"),c=i("ReGW"),r=i("ofXK"),a=i("rEr+"),d=i("7zfz"),u=i("7kUa");function p(t,e){if(1&t&&(o.Yb(0,"span"),o.Tb(1,"br"),o.Yb(2,"strong"),o.Uc(3,"DOD:"),o.Xb(),o.Uc(4),o.nc(5,"date"),o.Xb()),2&t){const t=o.mc();o.Fb(4),o.Wc(" ",o.pc(5,1,t.slotDetails.PeriodUpto,t.customDateFormat.DEF_DATE),"")}}function h(t,e){if(1&t){const t=o.Zb();o.Yb(0,"div",11),o.Tb(1,"span",12),o.Yb(2,"span",13),o.Yb(3,"span",14),o.Tb(4,"i",15),o.Yb(5,"input",16),o.ic("input",function(e){return o.Lc(t),o.mc(),o.Ic(22).filterGlobal(e.target.value,"contains")}),o.Xb(),o.Xb(),o.Xb(),o.Xb()}}function m(t,e){if(1&t&&(o.Yb(0,"tr"),o.Yb(1,"td"),o.Uc(2," No records found "),o.Xb(),o.Xb()),2&t){const t=e.$implicit;o.Fb(1),o.Gb("colspan",null==t?null:t.length)}}function b(t,e){1&t&&(o.Yb(0,"colgroup"),o.Tb(1,"col",17),o.Tb(2,"col",18),o.Tb(3,"col",19),o.Tb(4,"col",18),o.Tb(5,"col",18),o.Xb())}function f(t,e){1&t&&(o.Yb(0,"tr"),o.Yb(1,"th"),o.Uc(2,"S.No"),o.Xb(),o.Yb(3,"th"),o.Uc(4,"Type"),o.Xb(),o.Yb(5,"th"),o.Uc(6,"Action By"),o.Xb(),o.Yb(7,"th"),o.Uc(8,"Created On"),o.Xb(),o.Yb(9,"th"),o.Uc(10,"Modified On"),o.Xb(),o.Xb())}function v(t,e){if(1&t&&(o.Yb(0,"tr"),o.Yb(1,"td"),o.Uc(2),o.Xb(),o.Yb(3,"td"),o.Uc(4),o.Xb(),o.Yb(5,"td"),o.Uc(6),o.Xb(),o.Yb(7,"td"),o.Uc(8),o.nc(9,"date"),o.Xb(),o.Yb(10,"td"),o.Uc(11),o.nc(12,"date"),o.Xb(),o.Xb()),2&t){const t=e.$implicit,i=e.rowIndex,n=o.mc();o.Fb(2),o.Vc(i+1),o.Fb(2),o.Vc(t.BookingType),o.Fb(2),o.Vc(t.ActionBy),o.Fb(2),o.Vc(o.pc(9,5,t.CreatedOn,n.customDateFormat.DEF_DATE_TIME)),o.Fb(3),o.Vc(o.pc(12,8,t.ModifiedOn,n.customDateFormat.DEF_DATE_TIME))}}const S=function(){return["BookingType","ActionBy"]};let g=(()=>{class t extends n.a{constructor(t,e,i){super(),this.cdRef=t,this._UtilityService=e,this._DoctorServices=i,this.slotBookingId=null,this.customDateFormat=s.h,this.slotDetails={},this.lstDetails=[]}ngOnInit(){}ngOnChanges(t){this.GetPatientRemarks()}GetPatientRemarks(){null!=this.slotBookingId&&null!=this.slotBookingId&&""!=this.slotBookingId?(this._UtilityService.showSpinner(),this.unsubscribe.add=this._DoctorServices.GetPrescriptionSaveDetailsBySlotId(this.slotBookingId).subscribe(t=>{var e;if(this._UtilityService.hideSpinner(),1==t.actionResult.success){var i=JSON.parse(t.actionResult.result);if(this.slotDetails=i=i||[],(null===(e=t.actionResult.result2)||void 0===e?void 0:e.length)>0){var n=JSON.parse(t.actionResult.result2);this.lstDetails=n=n||[]}}else this._UtilityService.showWarningAlert(t.actionResult.errMsg),this.lstDetails=[];this.cdRef.detectChanges()},t=>{this._UtilityService.hideSpinner(),this._UtilityService.showErrorAlert(t.message)})):this._UtilityService.showWarningAlert("No record found")}}return t.\u0275fac=function(e){return new(e||t)(o.Sb(o.h),o.Sb(l.a),o.Sb(c.a))},t.\u0275cmp=o.Mb({type:t,selectors:[["app-prescription-save-details"]],inputs:{slotBookingId:"slotBookingId"},features:[o.Cb,o.Db],decls:28,vars:15,consts:[[1,"row","mt-5"],[1,"col-md-6","text-left"],[1,"col-md-6","text-right"],[4,"ngIf"],["responsiveLayout","scroll","styleClass","p-datatable-striped","scrollHeight","250px",3,"value","rowHover","globalFilterFields","scrollable"],["dt",""],["pTemplate","caption"],["pTemplate","emptymessage"],["pTemplate","colgroup"],["pTemplate","header"],["pTemplate","body"],[1,"p-d-flex"],[1,"p-ml-left"],[1,"p-ml-auto"],[1,"p-input-icon-left"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search...",3,"input"],[2,"width","60px"],[2,"width","100px"],[2,"width","340px"]],template:function(t,e){1&t&&(o.Yb(0,"div",0),o.Yb(1,"div",1),o.Yb(2,"address"),o.Yb(3,"strong"),o.Uc(4," Booking No:"),o.Xb(),o.Uc(5),o.Tb(6,"br"),o.Yb(7,"strong"),o.Uc(8," Patient:"),o.Xb(),o.Uc(9),o.Xb(),o.Xb(),o.Yb(10,"div",2),o.Yb(11,"address"),o.Yb(12,"strong"),o.Uc(13," MR No:"),o.Xb(),o.Uc(14),o.Tb(15,"br"),o.Yb(16,"strong"),o.Uc(17,"DOA:"),o.Xb(),o.Uc(18),o.nc(19,"date"),o.Sc(20,p,6,4,"span",3),o.Xb(),o.Xb(),o.Xb(),o.Yb(21,"p-table",4,5),o.Sc(23,h,6,0,"ng-template",6),o.Sc(24,m,3,1,"ng-template",7),o.Sc(25,b,6,0,"ng-template",8),o.Sc(26,f,11,0,"ng-template",9),o.Sc(27,v,13,11,"ng-template",10),o.Xb()),2&t&&(o.Fb(5),o.Wc(" ",e.slotDetails.BookingNumber,""),o.Fb(4),o.Yc(" ",e.slotDetails.FullName," (",e.slotDetails.ContactNumber,"), ","Male"===e.slotDetails.Gender?"M":"Female"===e.slotDetails.Gender?"F":e.slotDetails.Gender," "),o.Fb(5),o.Wc(" ",e.slotDetails.MRNo,""),o.Fb(4),o.Wc(" ",o.pc(19,11,e.slotDetails.PeriodFrom,e.customDateFormat.DEF_DATE)," "),o.Fb(2),o.tc("ngIf","IPD"==e.slotDetails.BookingType),o.Fb(1),o.tc("value",e.lstDetails)("rowHover",!0)("globalFilterFields",o.yc(14,S))("scrollable",!0))},directives:[r.p,a.c,d.i,u.a],pipes:[r.f],styles:[""]}),t})()},Jg0Z:function(t,e,i){"use strict";i.d(e,"a",function(){return d});var n=i("ofXK"),s=i("tyNb"),o=i("Ty8P"),l=i("fXoL");const c=[{path:"",component:o.a}];let r=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.Qb({type:t}),t.\u0275inj=l.Pb({imports:[[s.l.forChild(c)],s.l]}),t})();var a=i("rEr+");let d=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.Qb({type:t}),t.\u0275inj=l.Pb({imports:[[n.c,r,a.f]]}),t})()},Om0Y:function(t,e,i){"use strict";i.d(e,"a",function(){return h});var n=i("ofXK"),s=i("tyNb"),o=i("Bj//"),l=i("fXoL");const c=[{path:"",component:o.a}];let r=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.Qb({type:t}),t.\u0275inj=l.Pb({imports:[[s.l.forChild(c)],s.l]}),t})();var a=i("3Pt+"),d=i("rEr+"),u=i("jIHw"),p=i("7kUa");let h=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.Qb({type:t}),t.\u0275inj=l.Pb({imports:[[n.c,r,a.i,d.f,u.c,p.b]]}),t})()},"Ql+Z":function(t,e,i){"use strict";i.d(e,"a",function(){return p});var n=i("ofXK"),s=i("tyNb"),o=i("mcUO"),l=i("fXoL");const c=[{path:"",component:o.a}];let r=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.Qb({type:t}),t.\u0275inj=l.Pb({imports:[[s.l.forChild(c)],s.l]}),t})();var a=i("3Pt+"),d=i("lVkt"),u=i("LuMj");let p=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.Qb({type:t}),t.\u0275inj=l.Pb({imports:[[n.c,r,a.i,d.b,u.b]]}),t})()},Ty8P:function(t,e,i){"use strict";i.d(e,"a",function(){return f});var n=i("CwUn"),s=i("Nach"),o=i("fXoL"),l=i("G+wY"),c=i("NLkC"),r=i("rEr+"),a=i("7zfz"),d=i("ofXK");function u(t,e){if(1&t&&(o.Yb(0,"tr"),o.Yb(1,"td"),o.Uc(2," No records found "),o.Xb(),o.Xb()),2&t){const t=e.$implicit;o.Fb(1),o.Gb("colspan",null==t?null:t.length)}}function p(t,e){1&t&&(o.Yb(0,"tr"),o.Yb(1,"th"),o.Uc(2,"S.No"),o.Xb(),o.Yb(3,"th"),o.Uc(4,"File Name"),o.Xb(),o.Yb(5,"th"),o.Uc(6,"UploadedBy"),o.Xb(),o.Yb(7,"th"),o.Uc(8,"UploadedOn"),o.Xb(),o.Yb(9,"th"),o.Uc(10,"Action"),o.Xb(),o.Xb())}function h(t,e){1&t&&(o.Yb(0,"colgroup"),o.Tb(1,"col",7),o.Tb(2,"col",8),o.Tb(3,"col",8),o.Tb(4,"col",9),o.Tb(5,"col",9),o.Xb())}function m(t,e){if(1&t){const t=o.Zb();o.Yb(0,"i",12),o.ic("click",function(){o.Lc(t);const e=o.mc().$implicit;return o.mc().DeleteFileByFormTypeId(e.FileUploadDetailsId,e.FileName)}),o.Xb()}}function b(t,e){if(1&t){const t=o.Zb();o.Yb(0,"tr"),o.Yb(1,"td"),o.Uc(2),o.Xb(),o.Yb(3,"td"),o.Uc(4),o.Xb(),o.Yb(5,"td"),o.Uc(6),o.Xb(),o.Yb(7,"td"),o.Uc(8),o.nc(9,"date"),o.Xb(),o.Yb(10,"td"),o.Yb(11,"i",10),o.ic("click",function(){o.Lc(t);const i=e.$implicit;return o.mc().DownloadFile(i.FileName)}),o.Xb(),o.Sc(12,m,1,0,"i",11),o.Xb(),o.Xb()}if(2&t){const t=e.$implicit,i=e.rowIndex,n=o.mc();o.Fb(2),o.Vc(i+1),o.Fb(2),o.Vc(t.ActualFileName),o.Fb(2),o.Vc(t.UploadedBy),o.Fb(2),o.Vc(o.pc(9,5,t.UploadedOn,n.customDateFormat.DEF_DATE_TIME)),o.Fb(4),o.tc("ngIf",n.IsDeleteFile)}}let f=(()=>{class t extends n.a{constructor(t,e,i,n){super(),this._ConstantsService=t,this._PatientServices=e,this._UtilityService=i,this.cdRef=n,this.customDateFormat=s.h,this.SlotBookingId=null,this.FormType=0,this.IsDeleteFile=!1,this.lstFiles=[]}ngOnInit(){this.LoadFilesByFormType()}LoadFilesByFormType(){this.lstFiles=[];var t=this.SlotBookingId,e=this.FormType;this._UtilityService.showSpinner(),this.unsubscribe.add=this._PatientServices.GetFileByFormType(t,e).subscribe(t=>{if(this._UtilityService.hideSpinner(),this.cdRef.detectChanges(),1==t.actionResult.success){var e=JSON.parse(t.actionResult.result);this.lstFiles=e=e||[]}else this._UtilityService.showWarningAlert(t.actionResult.errMsg),this.lstFiles=[];this.cdRef.detectChanges()},t=>{this._UtilityService.hideSpinner(),this._UtilityService.showErrorAlert(t.message)}),this.cdRef.detectChanges()}DownloadFile(t){null!=t&&window.open(this._ConstantsService.BaseURIFileServer+"/FoldeFileUploadDetails/"+t)}DeleteFileByFormTypeId(t,e){this._UtilityService.showSpinner(),this.unsubscribe.add=this._PatientServices.DeleteFileByFormTypeId(t,e).subscribe(t=>{this._UtilityService.hideSpinner(),this.cdRef.detectChanges(),1==t.actionResult.success?(this._UtilityService.showSuccessAlert(t.actionResult.errMsg),this.LoadFilesByFormType()):this._UtilityService.showWarningAlert(t.actionResult.errMsg),this.cdRef.detectChanges()},t=>{this._UtilityService.hideSpinner(),this._UtilityService.showErrorAlert(t.message)}),this.cdRef.detectChanges()}}return t.\u0275fac=function(e){return new(e||t)(o.Sb(s.f),o.Sb(l.a),o.Sb(c.a),o.Sb(o.h))},t.\u0275cmp=o.Mb({type:t,selectors:[["app-file-download"]],inputs:{SlotBookingId:"SlotBookingId",FormType:"FormType",IsDeleteFile:"IsDeleteFile"},features:[o.Cb],decls:7,vars:3,consts:[[1,"row"],[1,"col-md-12"],["responsiveLayout","scroll","scrollHeight","250px",3,"value","rowHover","scrollable"],["pTemplate","emptymessage"],["pTemplate","header"],["pTemplate","colgroup"],["pTemplate","body"],[2,"width","90px"],[2,"width","130px"],[2,"width","120px"],[1,"pi","pi-download","mr-2",3,"click"],["class","pi pi-times-circle",3,"click",4,"ngIf"],[1,"pi","pi-times-circle",3,"click"]],template:function(t,e){1&t&&(o.Yb(0,"div",0),o.Yb(1,"div",1),o.Yb(2,"p-table",2),o.Sc(3,u,3,1,"ng-template",3),o.Sc(4,p,11,0,"ng-template",4),o.Sc(5,h,6,0,"ng-template",5),o.Sc(6,b,13,8,"ng-template",6),o.Xb(),o.Xb(),o.Xb()),2&t&&(o.Fb(2),o.tc("value",e.lstFiles)("rowHover",!0)("scrollable",!0))},directives:[r.c,a.i,d.p],pipes:[d.f],styles:[""]}),t})()},"V/Gj":function(t,e,i){"use strict";i.d(e,"a",function(){return d});var n=i("ofXK"),s=i("tyNb"),o=i("9oqr"),l=i("fXoL");const c=[{path:"",component:o.a}];let r=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.Qb({type:t}),t.\u0275inj=l.Pb({imports:[[s.l.forChild(c)],s.l]}),t})();var a=i("NCSE");let d=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.Qb({type:t}),t.\u0275inj=l.Pb({imports:[[n.c,r,a.b]]}),t})()},mcUO:function(t,e,i){"use strict";i.d(e,"a",function(){return S});var n=i("fXoL"),s=i("CwUn"),o=i("Nach"),l=i("ReGW"),c=i("NLkC"),r=i("ofXK"),a=i("lVkt"),d=i("3Pt+"),u=i("LuMj");const p=function(){return{width:"100%"}};function h(t,e){if(1&t){const t=n.Zb();n.Yb(0,"div",8),n.Yb(1,"p-multiSelect",9,10),n.ic("ngModelChange",function(e){return n.Lc(t),n.mc().lstSelectedDoctor=e})("onChange",function(e){return n.Lc(t),n.mc().setTooltipAllotDr(e)}),n.Xb(),n.Xb()}if(2&t){const t=n.mc();n.Fb(1),n.Pc(n.yc(8,p)),n.tc("display",t.displayValue)("maxSelectedLabels",9)("selectionLimit",t.selectionLimit)("tooltip",t.selectedDrToolTip)("options",t.lstAvailableDoctor)("ngModel",t.lstSelectedDoctor)}}function m(t,e){1&t&&n.Tb(0,"hr")}function b(t,e){1&t&&(n.Yb(0,"h5"),n.Uc(1,"Current Token Alloted to Doctor"),n.Xb())}function f(t,e){if(1&t){const t=n.Zb();n.Yb(0,"div",13),n.Yb(1,"p-radioButton",14),n.ic("ngModelChange",function(e){return n.Lc(t),n.mc(2).SelectedTokenDoctor=e}),n.Xb(),n.Uc(2),n.Xb()}if(2&t){const t=e.$implicit,i=e.index,s=n.mc(2);n.Fb(1),n.uc("value",t.DoctorId),n.vc("inputId","tokenDoctor_",i+1,""),n.tc("ngModel",s.SelectedTokenDoctor),n.Fb(1),n.Wc(" ",t.DoctorName," ")}}function v(t,e){if(1&t&&(n.Yb(0,"div",0),n.Yb(1,"div",11),n.Yb(2,"div",5),n.Sc(3,f,3,4,"div",12),n.Xb(),n.Xb(),n.Xb()),2&t){const t=n.mc();n.Fb(3),n.tc("ngForOf",t.lstSelectedDoctor)}}let S=(()=>{class t extends s.a{constructor(t,e,i,s){super(),this._ConstantsService=t,this._DoctorServices=e,this._UtilityService=i,this.cdRef=s,this.userTypes=o.s,this.loginUserId=localStorage.getItem("userId"),this.userTypeId=localStorage.getItem("userTypeId"),this.departmentId=localStorage.getItem("departmentId"),this.slotBookingId=null,this.clinicId=null,this.selectionLimit=9,this.department="other",this.dentistId=null,this.physioId=null,this.AllotSuccess=new n.o,this.selectedDrToolTip="Dr Not alloted.",this.displayValue=this.userTypeId==this.userTypes.Doctor?"comma":"chip",this.lstAvailableDoctor=[],this.lstSelectedDoctor=[],this.lstAlotedToken=[],this.SelectedTokenDoctor=null,this.IsDentist=!1,this.IsPhysio=!1,this.IsDentist=!1,this.IsPhysio=!1,this.dentalDepartmentId=this._ConstantsService.DentalDepartmentId,this.physioDepartmentId=this._ConstantsService.PhysioDepartmentId,this.dentalDepartmentId==this.departmentId?(this.IsDentist=!0,this.department=this.departmentId,this.selectionLimit=1):this.physioDepartmentId==this.departmentId&&(this.IsPhysio=!0,this.department=this.departmentId,this.selectionLimit=1)}ngOnInit(){}ngOnChanges(t){this.LoadDoctorListByClinic()}LoadDoctorListByClinic(){this.lstSelectedDoctor=[],this._UtilityService.showSpinner(),this.unsubscribe.add=this._DoctorServices.GetAvailableDoctor(this.slotBookingId,this.clinicId,this.department).subscribe(t=>{if(this._UtilityService.hideSpinner(),this.cdRef.detectChanges(),1==t.actionResult.success){var e=JSON.parse(t.actionResult.result);if(this.lstAvailableDoctor=e=e||[],this.IsDentist&&""!=this.dentistId&&null!=this.dentistId&&null!=this.dentistId)(i=[]).push(this.dentistId),this.lstSelectedDoctor=i;else if(this.IsPhysio&&""!=this.physioId&&null!=this.physioId&&null!=this.physioId){var i;(i=[]).push(this.physioId),this.lstSelectedDoctor=i}else this.IsDentist||this.IsPhysio||this.LoadSelectedDoctor(this.slotBookingId);this.cdRef.detectChanges()}else this._UtilityService.showWarningAlert(t.actionResult.errMsg),this.lstAvailableDoctor=[],this.cdRef.detectChanges()},t=>{this._UtilityService.hideSpinner(),this._UtilityService.showErrorAlert(t.message)})}LoadSelectedDoctor(t){this.lstAlotedToken=[],this._UtilityService.showSpinner(),this.unsubscribe.add=this._DoctorServices.GetAlotedDoctorBySlotBookingId(t).subscribe(t=>{if(this._UtilityService.hideSpinner(),1==t.actionResult.success){var e=JSON.parse(t.actionResult.result),i=[];if((e=e||[]).forEach(t=>{i.push(t.DoctorId)}),this.lstSelectedDoctor=i,this.selectedDrToolTip="",this.userTypeId==this.userTypes.Doctor&&(this.lstSelectedDoctor=i,this.lstAvailableDoctor.forEach((t,i)=>{let n=e.find(e=>e.DoctorId===t.DoctorId);null!=n&&null!=n&&(t.isDisabled=!0,this.selectedDrToolTip+=t.DoctorName+", ")})),this.selectedDrToolTip=this.selectedDrToolTip.slice(0,-2),!t.actionResult.result2){var n=JSON.parse(t.actionResult.result2);this.lstAlotedToken=n=n||[],this.SelectedTokenDoctor=this.lstAlotedToken[0].DoctorId}this.cdRef.detectChanges()}else this.lstAlotedToken=[],this.lstSelectedDoctor=[],this.cdRef.detectChanges()},t=>{this._UtilityService.hideSpinner(),this._UtilityService.showErrorAlert(t.message)})}setTooltipAllotDr(t){this.selectedDrToolTip="",this.lstAvailableDoctor.forEach((e,i)=>{let n=t.value.find(t=>t===e.DoctorId);null!=n&&null!=n&&(this.selectedDrToolTip+=e.DoctorName+", ")}),this.selectedDrToolTip=this.selectedDrToolTip.slice(0,-2)}SubmitAlotDoctor(){var t,e,i;if((null===(t=this.lstAlotedToken)||void 0===t?void 0:t.length)>0&&null!=this.SelectedTokenDoctor){var n=this.lstSelectedDoctor.find(t=>t.DoctorId==this.SelectedTokenDoctor);if(n<0||null==n||null==n)return void this._UtilityService.showWarningAlert("Must need to allot Current Token to Any Doctor")}for(var s=[],o=0;o<(null===(e=this.lstSelectedDoctor)||void 0===e?void 0:e.length);o++)s.push({id:this.lstSelectedDoctor[o]});this._UtilityService.showSpinner(),this.unsubscribe.add=this._DoctorServices.AlotDoctorManually(s,this.slotBookingId,this.loginUserId,this.SelectedTokenDoctor,null===(i=this.lstAlotedToken[0])||void 0===i?void 0:i.ConsultWaitingRoomId).subscribe(t=>{if(this._UtilityService.hideSpinner(),t.actionResult.success){let e={};e.Message=t.actionResult.errMsg,e.lstSelectedDoctor=this.lstSelectedDoctor,e.IsDentist=!1,this.AllotSuccess.emit(e)}else this._UtilityService.showWarningAlert(t.actionResult.errMsg)},t=>{this._UtilityService.hideSpinner(),this._UtilityService.showErrorAlert(t.message)})}AllotDentist(){var t;0==(null===(t=this.lstSelectedDoctor)||void 0===t?void 0:t.length)?this._UtilityService.showWarningAlert("Please select doctor"):(this._UtilityService.showSpinner(),this.unsubscribe.add=this._DoctorServices.AllotDentist(this.lstSelectedDoctor[0],this.slotBookingId,localStorage.getItem("userId")).subscribe(t=>{if(this._UtilityService.hideSpinner(),t.actionResult.success){let e={};e.Message=t.actionResult.errMsg,e.lstSelectedDoctor=this.lstSelectedDoctor,e.IsDentist=!1,this.AllotSuccess.emit(e)}else this._UtilityService.showWarningAlert(t.actionResult.errMsg)},t=>{this._UtilityService.hideSpinner(),this._UtilityService.showErrorAlert(t.message)}))}AllotPhysio(){var t;0==(null===(t=this.lstSelectedDoctor)||void 0===t?void 0:t.length)?this._UtilityService.showWarningAlert("Please select doctor"):(this._UtilityService.showSpinner(),this.unsubscribe.add=this._DoctorServices.AllotPhysio(this.lstSelectedDoctor[0],this.slotBookingId,localStorage.getItem("userId")).subscribe(t=>{if(this._UtilityService.hideSpinner(),t.actionResult.success){let e={};e.Message=t.actionResult.errMsg,e.lstSelectedDoctor=this.lstSelectedDoctor,e.IsPhysio=!1,this.AllotSuccess.emit(e)}else this._UtilityService.showWarningAlert(t.actionResult.errMsg)},t=>{this._UtilityService.hideSpinner(),this._UtilityService.showErrorAlert(t.message)}))}}return t.\u0275fac=function(e){return new(e||t)(n.Sb(o.f),n.Sb(l.a),n.Sb(c.a),n.Sb(n.h))},t.\u0275cmp=n.Mb({type:t,selectors:[["app-allot-doctor"]],inputs:{slotBookingId:"slotBookingId",clinicId:"clinicId",selectionLimit:"selectionLimit",department:"department",dentistId:"dentistId",physioId:"physioId"},outputs:{AllotSuccess:"AllotSuccess"},features:[n.Cb,n.Db],decls:11,vars:4,consts:[[1,"row","mb-3"],[1,"col-md-3","mt-3","bold"],["class","col-md-9",4,"ngIf"],[4,"ngIf"],["class","row mb-3",4,"ngIf"],[1,"row"],[1,"col-md-12","text-center"],["type","button",1,"btn","btn-new-primary","mr-2",3,"click"],[1,"col-md-9"],["appendTo","body","tooltipPosition","top","optionDisabled","isDisabled","optionLabel","DoctorName","optionValue","DoctorId","placeholder","Select doctor",3,"display","maxSelectedLabels","selectionLimit","tooltip","options","ngModel","ngModelChange","onChange"],["multiselect",""],[1,"col-md-12"],["class","col col-md-4 col-12  mb-2",4,"ngFor","ngForOf"],[1,"col","col-md-4","col-12","mb-2"],["name","rdDoctorAlotToken",3,"value","ngModel","inputId","ngModelChange"]],template:function(t,e){1&t&&(n.Yb(0,"div",0),n.Yb(1,"div",1),n.Uc(2,"Select doctor"),n.Xb(),n.Sc(3,h,3,9,"div",2),n.Xb(),n.Sc(4,m,1,0,"hr",3),n.Sc(5,b,2,0,"h5",3),n.Sc(6,v,4,1,"div",4),n.Yb(7,"div",5),n.Yb(8,"div",6),n.Yb(9,"button",7),n.ic("click",function(){return e.IsDentist?e.AllotDentist():e.IsPhysio?e.AllotPhysio():e.SubmitAlotDoctor()}),n.Uc(10,"Submit"),n.Xb(),n.Xb(),n.Xb()),2&t&&(n.Fb(3),n.tc("ngIf",(null==e.lstAvailableDoctor?null:e.lstAvailableDoctor.length)>0),n.Fb(1),n.tc("ngIf",(null==e.lstAlotedToken?null:e.lstAlotedToken.length)>0),n.Fb(1),n.tc("ngIf",!e.IsDentist),n.Fb(1),n.tc("ngIf",(null==e.lstAlotedToken?null:e.lstAlotedToken.length)>0))},directives:[r.p,a.a,d.o,d.r,r.o,u.a],styles:[""]}),t})()}}]);