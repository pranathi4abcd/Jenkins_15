(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{laZh:function(t,e,i){"use strict";i.r(e),i.d(e,"DiseaseMonitoringDetailsModule",function(){return R});var s=i("ofXK"),n=i("tyNb"),l=i("CwUn"),o=i("Nach"),c=i("fXoL"),r=i("dcBc"),a=i("PtJb"),b=i("NLkC"),d=i("arFO"),h=i("3Pt+"),u=i("rEr+"),p=i("7zfz"),m=i("AAHA"),g=i("jIHw");function f(t,e){if(1&t){const t=c.Zb();c.Yb(0,"div",23),c.Yb(1,"app-center-dropdown",24),c.ic("onclinicSelect",function(e){return c.Lc(t),c.mc().onclinicSelect(e)}),c.Xb(),c.Xb()}2&t&&(c.Fb(1),c.tc("mode","get"))}function S(t,e){if(1&t){const t=c.Zb();c.Yb(0,"button",33),c.ic("click",function(){return c.Lc(t),c.mc(2).exportToItemExcel()}),c.Xb()}}function v(t,e){if(1&t){const t=c.Zb();c.Yb(0,"div",25),c.Yb(1,"span",26),c.Yb(2,"span",27),c.Tb(3,"i",28),c.Yb(4,"input",29),c.ic("ngModelChange",function(e){return c.Lc(t),c.mc().SearchDiseaseVal=e})("change",function(){return c.Lc(t),c.mc().LoadDiseaseMonitoringDetails(0,10)}),c.Xb(),c.Yb(5,"span",30),c.ic("click",function(){return c.Lc(t),c.mc().LoadDiseaseMonitoringDetails(0,10)}),c.Uc(6," filter_alt "),c.Xb(),c.Xb(),c.Xb(),c.Yb(7,"span",31),c.Uc(8),c.Sc(9,S,1,0,"button",32),c.Xb(),c.Xb()}if(2&t){const t=c.mc();c.Fb(4),c.tc("ngModel",t.SearchDiseaseVal),c.Fb(1),c.Hb(null==t.SearchDiseaseVal||null==t.SearchDiseaseVal||""==t.SearchDiseaseVal?"material-icons ColumnfilterGlobalFilter":"material-icons ColumnfilterIconGlobalFilterColorDefult"),c.Fb(3),c.Wc(" ",(null==t.lstReport?null:t.lstReport.length)>0?"Total Records: "+t.TotalRecords+" "+t.maleFemaleCount:""," "),c.Fb(1),c.tc("ngIf",(null==t.lstIAccessStr?null:t.lstIAccessStr.includes(t.ActionList.Download.toString()))&&(null==t.lstReport?null:t.lstReport.length)>0)}}function Y(t,e){1&t&&(c.Yb(0,"tr"),c.Yb(1,"td"),c.Uc(2," No records found "),c.Xb(),c.Xb()),2&t&&(c.Fb(1),c.Gb("colspan",4))}function X(t,e){1&t&&(c.Yb(0,"colgroup"),c.Tb(1,"col",34),c.Tb(2,"col",35),c.Tb(3,"col",35),c.Tb(4,"col",35),c.Xb())}function I(t,e){1&t&&(c.Yb(0,"tr"),c.Yb(1,"th"),c.Uc(2,"Disease Name"),c.Xb(),c.Yb(3,"th"),c.Uc(4,"Male Count"),c.Xb(),c.Yb(5,"th"),c.Uc(6,"Female Count"),c.Xb(),c.Yb(7,"th"),c.Uc(8,"All Count"),c.Xb(),c.Xb())}function M(t,e){if(1&t&&(c.Yb(0,"tr"),c.Yb(1,"td"),c.Uc(2),c.Xb(),c.Yb(3,"td"),c.Uc(4),c.Xb(),c.Yb(5,"td"),c.Uc(6),c.Xb(),c.Yb(7,"td"),c.Uc(8),c.Xb(),c.Xb()),2&t){const t=e.$implicit;c.Fb(2),c.Vc(t.DiseaseName),c.Fb(2),c.Vc(t.MaleCount),c.Fb(2),c.Vc(t.FemaleCount),c.Fb(2),c.Vc(t.AllCount)}}const y=function(){return{width:"100%"}},D=function(){return{standalone:!0}},C=[{path:"",component:(()=>{class t extends l.a{constructor(t,e,i,s,n,l){super(),this.cdRef=t,this.router=e,this._ConstantServices=i,this._MasterServices=s,this._ReportServices=n,this._UtilityService=l,this.UserTypeCurre=localStorage.getItem("userTypeId"),this.stlstYear=[],this.stlstMonth=[],this.ClinicIdSelected=null,this.userTypes=o.s,this.first=0,this.rows=0,this.filteredValuesLength=0,this.SearchDiseaseVal=null,this.maleFemaleCount="",this.ActionList=o.a,this.lstIAccess=[],this.lstIAccessStr=[],this._ConstantServices.ActiveMenuName="Disease Monitoring Details";for(var c=2022,r=(new Date).getFullYear()+2;r>=c;)this.stlstYear.push({name:c,code:c}),c+=1;this.stlstMonth=[],this.stlstMonth=JSON.parse(JSON.stringify(this._ReportServices.Month)),this.stlstMonth.unshift({Name:"All",Value:0}),this.year=(new Date).getFullYear(),this.month=(new Date).getMonth()+1,this.getPageLevelAccess()}getPageLevelAccess(){var t,e,i=this.getUrlWithoutParams(),s=JSON.parse(localStorage.getItem("UerRoleAccess"))||[];(null==s?void 0:s.find(t=>t.MenuItemURL===i))&&(this.lstIAccess=null===(t=s.find(t=>t.MenuItemURL===i))||void 0===t?void 0:t.ActionIAccess,(null===(e=this.lstIAccess)||void 0===e?void 0:e.length)>0&&this.lstIAccess.map(t=>{this.lstIAccessStr.push(t.ActionId.toString())}))}getUrlWithoutParams(){let t=this.router.parseUrl(this.router.url);return t.queryParams={},t.fragment=null,t.toString()}ngOnInit(){o.s.SuperAdmin!==localStorage.getItem("userTypeId")&&(this.ClinicIdSelected=localStorage.getItem("ClinicId"),this.LoadDiseaseMonitoringDetails(0,10))}onclinicSelect(t){this.ClinicIdSelected=t}loadPatientList(t){this.lstReport&&this.LoadDiseaseMonitoringDetails(t.first,t.rows)}LoadDiseaseMonitoringDetails(t,e){if(null==this.ClinicIdSelected||null==this.ClinicIdSelected||""==this.ClinicIdSelected)return void this._UtilityService.showWarningAlert("Please select center");this.first=parseInt(t),this.rows=parseInt(e);let i={};i.clinicId=this.ClinicIdSelected,i.SearchText=null==this.SearchDiseaseVal||null==this.SearchDiseaseVal||""==this.SearchDiseaseVal?"":this.SearchDiseaseVal.trim(),i.first=t.toString(),i.rows=e.toString(),i.IsSkipPaging=!1,i.year=this.year,i.month=this.month,this._UtilityService.showSpinner(),this.unsubscribe.add=this._ReportServices.GetDiseaseMonitoringDetails(i).subscribe(t=>{if(this._UtilityService.hideSpinner(),this.cdRef.detectChanges(),1==t.actionResult.success){var e=JSON.parse(t.actionResult.result);this.lstReport=e=e||[],this.TotalRecords=JSON.parse(t.actionResult.result2),this.maleFemaleCount=t.actionResult.stringVal,this.cdRef.detectChanges()}else this.TotalRecords=0,this.lstReport=[],this.cdRef.detectChanges()},t=>{this._UtilityService.hideSpinner(),this._UtilityService.showErrorAlert(t.message)})}exportToItemExcel(){let t={reportname:"DiseaseMonitoringDetails",filename:"DiseaseMonitoringDetails"};t.clinicId=this.ClinicIdSelected,t.first="0",t.rows="10",t.year=this.year,t.month=this.month,t.isExcel=!0,t.IsSkipPaging=!0,this._MasterServices.downloadReport(t)}}return t.\u0275fac=function(e){return new(e||t)(c.Sb(c.h),c.Sb(n.i),c.Sb(o.f),c.Sb(r.a),c.Sb(a.a),c.Sb(b.a))},t.\u0275cmp=c.Mb({type:t,selectors:[["app-disease-monitoring-details"]],features:[c.Cb],decls:35,vars:24,consts:[[1,"row","mt25"],[1,"col-md-12"],[1,"card"],[1,"card-body"],[1,"row","mb-2"],["class","col-md-3",4,"ngIf"],[1,"col-md-2"],[1,"form-group"],["for",""],[1,"required"],["optionLabel","name","optionValue","code",3,"options","ngModel","ngModelOptions","ngModelChange"],["optionLabel","Name","optionValue","Value",3,"options","ngModel","ngModelOptions","ngModelChange"],[1,"col-md-2","mt-7"],["type","button","matTooltip","Search",1,"btn","btn-new-primary",3,"click"],[1,"row"],[1,"filter-box","mt-3"],["scrollHeight","calc(100vh - 300px)","responsiveLayout","scroll",1,"ColumnFilterTable",3,"value","lazy","rowHover","lazyLoadOnInit","scrollable","paginator","rows","totalRecords","first","onLazyLoad","firstChange"],["dt",""],["pTemplate","caption"],["pTemplate","emptymessage"],["pTemplate","colgroup"],["pTemplate","header"],["pTemplate","body"],[1,"col-md-3"],[3,"mode","onclinicSelect"],[1,"p-d-flex"],[1,"p-ml-left"],[1,"p-input-icon-left"],[1,"pi","pi-search"],["type","text","name","txtInputSearchDisease","placeholder","Search...",1,"form-control","psearchfilter",3,"ngModel","value","ngModelChange","change"],["matTooltip","Filter",3,"click"],[1,"p-ml-auto"],["pButton","","title","Export Data","label"," ","class","p-button-outlined ml-2 mr-2","icon","pi pi-download",3,"click",4,"ngIf"],["pButton","","title","Export Data","label"," ","icon","pi pi-download",1,"p-button-outlined","ml-2","mr-2",3,"click"],[2,"width","180px"],[2,"width","80px"]],template:function(t,e){1&t&&(c.Yb(0,"div",0),c.Yb(1,"div",1),c.Yb(2,"div",2),c.Yb(3,"div",3),c.Yb(4,"div",4),c.Sc(5,f,2,1,"div",5),c.Yb(6,"div",6),c.Yb(7,"div",7),c.Yb(8,"label",8),c.Uc(9,"Select Year "),c.Yb(10,"span",9),c.Uc(11,"*"),c.Xb(),c.Xb(),c.Yb(12,"p-dropdown",10),c.ic("ngModelChange",function(t){return e.year=t}),c.Xb(),c.Xb(),c.Xb(),c.Yb(13,"div",6),c.Yb(14,"div",7),c.Yb(15,"label",8),c.Uc(16,"Select Month"),c.Yb(17,"span",9),c.Uc(18,"*"),c.Xb(),c.Xb(),c.Yb(19,"p-dropdown",11),c.ic("ngModelChange",function(t){return e.month=t}),c.Xb(),c.Xb(),c.Xb(),c.Yb(20,"div",12),c.Yb(21,"div",7),c.Yb(22,"button",13),c.ic("click",function(){return e.LoadDiseaseMonitoringDetails(0,10)}),c.Uc(23," Search "),c.Xb(),c.Xb(),c.Xb(),c.Xb(),c.Yb(24,"div",14),c.Yb(25,"div",1),c.Yb(26,"div",15),c.Yb(27,"p-table",16,17),c.ic("onLazyLoad",function(t){return e.loadPatientList(t)})("firstChange",function(t){return e.first=t}),c.Sc(29,v,10,6,"ng-template",18),c.Sc(30,Y,3,1,"ng-template",19),c.Sc(31,X,5,0,"ng-template",20),c.Uc(32," --\x3e --\x3e "),c.Sc(33,I,9,0,"ng-template",21),c.Sc(34,M,9,4,"ng-template",22),c.Xb(),c.Xb(),c.Xb(),c.Xb(),c.Xb(),c.Xb(),c.Xb(),c.Xb()),2&t&&(c.Fb(5),c.tc("ngIf",e.UserTypeCurre===e.userTypes.SuperAdmin),c.Fb(7),c.Pc(c.yc(20,y)),c.tc("options",e.stlstYear)("ngModel",e.year)("ngModelOptions",c.yc(21,D)),c.Fb(7),c.Pc(c.yc(22,y)),c.tc("options",e.stlstMonth)("ngModel",e.month)("ngModelOptions",c.yc(23,D)),c.Fb(8),c.tc("value",e.lstReport)("lazy",!0)("rowHover",!0)("lazyLoadOnInit",!1)("scrollable",!0)("paginator",!0)("rows",10)("totalRecords",e.TotalRecords)("first",e.first))},directives:[s.p,d.a,h.o,h.r,u.c,p.i,m.a,h.b,g.b],styles:[""]}),t})()}];let w=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.Qb({type:t}),t.\u0275inj=c.Pb({imports:[[n.l.forChild(C)],n.l]}),t})();var U=i("7kUa"),L=i("T2Aj");let R=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.Qb({type:t}),t.\u0275inj=c.Pb({imports:[[s.c,w,h.i,u.f,g.c,d.b,U.b,L.a]]}),t})()}}]);