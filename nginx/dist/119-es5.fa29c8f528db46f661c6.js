!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,i=r(e);if(t){var l=r(this).constructor;n=Reflect.construct(i,arguments,l)}else n=i.apply(this,arguments);return o(this,n)}}function o(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{laZh:function(o,r,l){"use strict";l.r(r),l.d(r,"DiseaseMonitoringDetailsModule",function(){return k});var c=l("ofXK"),a=l("tyNb"),s=l("CwUn"),u=l("Nach"),b=l("fXoL"),p=l("dcBc"),d=l("PtJb"),f=l("NLkC"),h=l("arFO"),m=l("3Pt+"),g=l("rEr+"),S=l("7zfz"),v=l("AAHA"),y=l("jIHw");function Y(e,t){if(1&e){var n=b.Zb();b.Yb(0,"div",23),b.Yb(1,"app-center-dropdown",24),b.ic("onclinicSelect",function(e){return b.Lc(n),b.mc().onclinicSelect(e)}),b.Xb(),b.Xb()}2&e&&(b.Fb(1),b.tc("mode","get"))}function w(e,t){if(1&e){var n=b.Zb();b.Yb(0,"button",33),b.ic("click",function(){return b.Lc(n),b.mc(2).exportToItemExcel()}),b.Xb()}}function X(e,t){if(1&e){var n=b.Zb();b.Yb(0,"div",25),b.Yb(1,"span",26),b.Yb(2,"span",27),b.Tb(3,"i",28),b.Yb(4,"input",29),b.ic("ngModelChange",function(e){return b.Lc(n),b.mc().SearchDiseaseVal=e})("change",function(){return b.Lc(n),b.mc().LoadDiseaseMonitoringDetails(0,10)}),b.Xb(),b.Yb(5,"span",30),b.ic("click",function(){return b.Lc(n),b.mc().LoadDiseaseMonitoringDetails(0,10)}),b.Uc(6," filter_alt "),b.Xb(),b.Xb(),b.Xb(),b.Yb(7,"span",31),b.Uc(8),b.Sc(9,w,1,0,"button",32),b.Xb(),b.Xb()}if(2&e){var i=b.mc();b.Fb(4),b.tc("ngModel",i.SearchDiseaseVal),b.Fb(1),b.Hb(null==i.SearchDiseaseVal||null==i.SearchDiseaseVal||""==i.SearchDiseaseVal?"material-icons ColumnfilterGlobalFilter":"material-icons ColumnfilterIconGlobalFilterColorDefult"),b.Fb(3),b.Wc(" ",(null==i.lstReport?null:i.lstReport.length)>0?"Total Records: "+i.TotalRecords+" "+i.maleFemaleCount:""," "),b.Fb(1),b.tc("ngIf",(null==i.lstIAccessStr?null:i.lstIAccessStr.includes(i.ActionList.Download.toString()))&&(null==i.lstReport?null:i.lstReport.length)>0)}}function I(e,t){1&e&&(b.Yb(0,"tr"),b.Yb(1,"td"),b.Uc(2," No records found "),b.Xb(),b.Xb()),2&e&&(b.Fb(1),b.Gb("colspan",4))}function M(e,t){1&e&&(b.Yb(0,"colgroup"),b.Tb(1,"col",34),b.Tb(2,"col",35),b.Tb(3,"col",35),b.Tb(4,"col",35),b.Xb())}function C(e,t){1&e&&(b.Yb(0,"tr"),b.Yb(1,"th"),b.Uc(2,"Disease Name"),b.Xb(),b.Yb(3,"th"),b.Uc(4,"Male Count"),b.Xb(),b.Yb(5,"th"),b.Uc(6,"Female Count"),b.Xb(),b.Yb(7,"th"),b.Uc(8,"All Count"),b.Xb(),b.Xb())}function D(e,t){if(1&e&&(b.Yb(0,"tr"),b.Yb(1,"td"),b.Uc(2),b.Xb(),b.Yb(3,"td"),b.Uc(4),b.Xb(),b.Yb(5,"td"),b.Uc(6),b.Xb(),b.Yb(7,"td"),b.Uc(8),b.Xb(),b.Xb()),2&e){var n=t.$implicit;b.Fb(2),b.Vc(n.DiseaseName),b.Fb(2),b.Vc(n.MaleCount),b.Fb(2),b.Vc(n.FemaleCount),b.Fb(2),b.Vc(n.AllCount)}}var R,U,L,T=function(){return{width:"100%"}},A=function(){return{standalone:!0}},F=[{path:"",component:(R=function(o){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}(s,o);var r,l,c,a=i(s);function s(t,n,i,o,r,l){var c;e(this,s),(c=a.call(this)).cdRef=t,c.router=n,c._ConstantServices=i,c._MasterServices=o,c._ReportServices=r,c._UtilityService=l,c.UserTypeCurre=localStorage.getItem("userTypeId"),c.stlstYear=[],c.stlstMonth=[],c.ClinicIdSelected=null,c.userTypes=u.s,c.first=0,c.rows=0,c.filteredValuesLength=0,c.SearchDiseaseVal=null,c.maleFemaleCount="",c.ActionList=u.a,c.lstIAccess=[],c.lstIAccessStr=[],c._ConstantServices.ActiveMenuName="Disease Monitoring Details";for(var b=2022,p=(new Date).getFullYear()+2;p>=b;)c.stlstYear.push({name:b,code:b}),b+=1;return c.stlstMonth=[],c.stlstMonth=JSON.parse(JSON.stringify(c._ReportServices.Month)),c.stlstMonth.unshift({Name:"All",Value:0}),c.year=(new Date).getFullYear(),c.month=(new Date).getMonth()+1,c.getPageLevelAccess(),c}return r=s,(l=[{key:"getPageLevelAccess",value:function(){var e,t,n=this,i=this.getUrlWithoutParams(),o=JSON.parse(localStorage.getItem("UerRoleAccess"))||[];(null==o?void 0:o.find(function(e){return e.MenuItemURL===i}))&&(this.lstIAccess=null===(e=o.find(function(e){return e.MenuItemURL===i}))||void 0===e?void 0:e.ActionIAccess,(null===(t=this.lstIAccess)||void 0===t?void 0:t.length)>0&&this.lstIAccess.map(function(e){n.lstIAccessStr.push(e.ActionId.toString())}))}},{key:"getUrlWithoutParams",value:function(){var e=this.router.parseUrl(this.router.url);return e.queryParams={},e.fragment=null,e.toString()}},{key:"ngOnInit",value:function(){u.s.SuperAdmin!==localStorage.getItem("userTypeId")&&(this.ClinicIdSelected=localStorage.getItem("ClinicId"),this.LoadDiseaseMonitoringDetails(0,10))}},{key:"onclinicSelect",value:function(e){this.ClinicIdSelected=e}},{key:"loadPatientList",value:function(e){this.lstReport&&this.LoadDiseaseMonitoringDetails(e.first,e.rows)}},{key:"LoadDiseaseMonitoringDetails",value:function(e,t){var n=this;if(null!=this.ClinicIdSelected&&null!=this.ClinicIdSelected&&""!=this.ClinicIdSelected){this.first=parseInt(e),this.rows=parseInt(t);var i={};i.clinicId=this.ClinicIdSelected,i.SearchText=null==this.SearchDiseaseVal||null==this.SearchDiseaseVal||""==this.SearchDiseaseVal?"":this.SearchDiseaseVal.trim(),i.first=e.toString(),i.rows=t.toString(),i.IsSkipPaging=!1,i.year=this.year,i.month=this.month,this._UtilityService.showSpinner(),this.unsubscribe.add=this._ReportServices.GetDiseaseMonitoringDetails(i).subscribe(function(e){if(n._UtilityService.hideSpinner(),n.cdRef.detectChanges(),1==e.actionResult.success){var t=JSON.parse(e.actionResult.result);n.lstReport=t=t||[],n.TotalRecords=JSON.parse(e.actionResult.result2),n.maleFemaleCount=e.actionResult.stringVal,n.cdRef.detectChanges()}else n.TotalRecords=0,n.lstReport=[],n.cdRef.detectChanges()},function(e){n._UtilityService.hideSpinner(),n._UtilityService.showErrorAlert(e.message)})}else this._UtilityService.showWarningAlert("Please select center")}},{key:"exportToItemExcel",value:function(){var e={reportname:"DiseaseMonitoringDetails",filename:"DiseaseMonitoringDetails"};e.clinicId=this.ClinicIdSelected,e.first="0",e.rows="10",e.year=this.year,e.month=this.month,e.isExcel=!0,e.IsSkipPaging=!0,this._MasterServices.downloadReport(e)}}])&&t(r.prototype,l),c&&t(r,c),s}(s.a),R.\u0275fac=function(e){return new(e||R)(b.Sb(b.h),b.Sb(a.i),b.Sb(u.f),b.Sb(p.a),b.Sb(d.a),b.Sb(f.a))},R.\u0275cmp=b.Mb({type:R,selectors:[["app-disease-monitoring-details"]],features:[b.Cb],decls:35,vars:24,consts:[[1,"row","mt25"],[1,"col-md-12"],[1,"card"],[1,"card-body"],[1,"row","mb-2"],["class","col-md-3",4,"ngIf"],[1,"col-md-2"],[1,"form-group"],["for",""],[1,"required"],["optionLabel","name","optionValue","code",3,"options","ngModel","ngModelOptions","ngModelChange"],["optionLabel","Name","optionValue","Value",3,"options","ngModel","ngModelOptions","ngModelChange"],[1,"col-md-2","mt-7"],["type","button","matTooltip","Search",1,"btn","btn-new-primary",3,"click"],[1,"row"],[1,"filter-box","mt-3"],["scrollHeight","calc(100vh - 300px)","responsiveLayout","scroll",1,"ColumnFilterTable",3,"value","lazy","rowHover","lazyLoadOnInit","scrollable","paginator","rows","totalRecords","first","onLazyLoad","firstChange"],["dt",""],["pTemplate","caption"],["pTemplate","emptymessage"],["pTemplate","colgroup"],["pTemplate","header"],["pTemplate","body"],[1,"col-md-3"],[3,"mode","onclinicSelect"],[1,"p-d-flex"],[1,"p-ml-left"],[1,"p-input-icon-left"],[1,"pi","pi-search"],["type","text","name","txtInputSearchDisease","placeholder","Search...",1,"form-control","psearchfilter",3,"ngModel","value","ngModelChange","change"],["matTooltip","Filter",3,"click"],[1,"p-ml-auto"],["pButton","","title","Export Data","label"," ","class","p-button-outlined ml-2 mr-2","icon","pi pi-download",3,"click",4,"ngIf"],["pButton","","title","Export Data","label"," ","icon","pi pi-download",1,"p-button-outlined","ml-2","mr-2",3,"click"],[2,"width","180px"],[2,"width","80px"]],template:function(e,t){1&e&&(b.Yb(0,"div",0),b.Yb(1,"div",1),b.Yb(2,"div",2),b.Yb(3,"div",3),b.Yb(4,"div",4),b.Sc(5,Y,2,1,"div",5),b.Yb(6,"div",6),b.Yb(7,"div",7),b.Yb(8,"label",8),b.Uc(9,"Select Year "),b.Yb(10,"span",9),b.Uc(11,"*"),b.Xb(),b.Xb(),b.Yb(12,"p-dropdown",10),b.ic("ngModelChange",function(e){return t.year=e}),b.Xb(),b.Xb(),b.Xb(),b.Yb(13,"div",6),b.Yb(14,"div",7),b.Yb(15,"label",8),b.Uc(16,"Select Month"),b.Yb(17,"span",9),b.Uc(18,"*"),b.Xb(),b.Xb(),b.Yb(19,"p-dropdown",11),b.ic("ngModelChange",function(e){return t.month=e}),b.Xb(),b.Xb(),b.Xb(),b.Yb(20,"div",12),b.Yb(21,"div",7),b.Yb(22,"button",13),b.ic("click",function(){return t.LoadDiseaseMonitoringDetails(0,10)}),b.Uc(23," Search "),b.Xb(),b.Xb(),b.Xb(),b.Xb(),b.Yb(24,"div",14),b.Yb(25,"div",1),b.Yb(26,"div",15),b.Yb(27,"p-table",16,17),b.ic("onLazyLoad",function(e){return t.loadPatientList(e)})("firstChange",function(e){return t.first=e}),b.Sc(29,X,10,6,"ng-template",18),b.Sc(30,I,3,1,"ng-template",19),b.Sc(31,M,5,0,"ng-template",20),b.Uc(32," --\x3e --\x3e "),b.Sc(33,C,9,0,"ng-template",21),b.Sc(34,D,9,4,"ng-template",22),b.Xb(),b.Xb(),b.Xb(),b.Xb(),b.Xb(),b.Xb(),b.Xb(),b.Xb()),2&e&&(b.Fb(5),b.tc("ngIf",t.UserTypeCurre===t.userTypes.SuperAdmin),b.Fb(7),b.Pc(b.yc(20,T)),b.tc("options",t.stlstYear)("ngModel",t.year)("ngModelOptions",b.yc(21,A)),b.Fb(7),b.Pc(b.yc(22,T)),b.tc("options",t.stlstMonth)("ngModel",t.month)("ngModelOptions",b.yc(23,A)),b.Fb(8),b.tc("value",t.lstReport)("lazy",!0)("rowHover",!0)("lazyLoadOnInit",!1)("scrollable",!0)("paginator",!0)("rows",10)("totalRecords",t.TotalRecords)("first",t.first))},directives:[c.p,h.a,m.o,m.r,g.c,S.i,v.a,m.b,y.b],styles:[""]}),R)}],O=((U=function t(){e(this,t)}).\u0275fac=function(e){return new(e||U)},U.\u0275mod=b.Qb({type:U}),U.\u0275inj=b.Pb({imports:[[a.l.forChild(F)],a.l]}),U),P=l("7kUa"),_=l("T2Aj"),k=((L=function t(){e(this,t)}).\u0275fac=function(e){return new(e||L)},L.\u0275mod=b.Qb({type:L}),L.\u0275inj=b.Pb({imports:[[c.c,O,m.i,g.f,y.c,h.b,P.b,_.a]]}),L)}}])}();