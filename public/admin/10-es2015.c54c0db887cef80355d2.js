(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{aZ8X:function(e,t,n){"use strict";n.r(t);var r=n("vTDv"),a=n("tyNb"),i=n("fXoL");let s=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["banners"]],decls:1,vars:0,template:function(e,t){1&e&&i["\u0275\u0275element"](0,"router-outlet")},directives:[a.h],encapsulation:2}),e})();var o=n("YPVp"),l=n("CdOr"),d=n("9oMj"),c=n("aceb"),m=n("RS3s"),p=n("sYmb");let u=(()=>{class e extends o.a{constructor(e,t,n){super(t),this.client=e,this.coreService=t,this.route=n,this.columns=[{key:"title",translation_key:"BANNER.FIELDS.TITLE.LABEL",column:{title:"",type:"string"}},{key:"meta",translation_key:"BANNER.FIELDS.META_SCOPE.LABEL",column:{title:"",type:"string",filter:!1,valuePrepareFunction:e=>e.scope}}],this.editPageUrl="pages/banners/edit",this.actionSettings={actions:{columnTitle:"Action",position:"right",add:!1}}}ngOnInit(){super.ngOnInit(this.client.getBaseEndpoint())}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](d.a),i["\u0275\u0275directiveInject"](l.a),i["\u0275\u0275directiveInject"](a.a))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["list"]],features:[i["\u0275\u0275InheritDefinitionFeature"]],decls:6,vars:6,consts:[["nbSpinnerStatus","danger",3,"nbSpinner"],[3,"settings","source","delete","edit"]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"nb-card"),i["\u0275\u0275elementStart"](1,"nb-card-header"),i["\u0275\u0275text"](2),i["\u0275\u0275pipe"](3,"translate"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](4,"nb-card-body",0),i["\u0275\u0275elementStart"](5,"ng2-smart-table",1),i["\u0275\u0275listener"]("delete",(function(e){return t.onDeleteConfirm(e)}))("edit",(function(e){return t.edit(e)})),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e&&(i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate1"](" ",i["\u0275\u0275pipeBind1"](3,4,"BANNER.LABELS.LIST")," "),i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("nbSpinner",t.loading),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("settings",t.settings)("source",t.source))},directives:[c.o,c.q,c.n,c.bb,m.b],pipes:[p.c],styles:[".nb-theme-corporate   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translateZ(0)}"]}),e})();var b=n("lJxs");n("HxAg");class g{}class h{constructor(){this.meta={scope:"ecommerce"},this.sort_order="1"}}class v{}var f=n("QNOW"),S=n("8C9V"),E=n("3Pt+"),I=n("ofXK"),y=n("c4y/");function x(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"div",9),i["\u0275\u0275elementStart"](1,"label"),i["\u0275\u0275text"](2),i["\u0275\u0275pipe"](3,"translate"),i["\u0275\u0275elementStart"](4,"span",18),i["\u0275\u0275text"](5),i["\u0275\u0275pipe"](6,"languageTitle"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](7,"input",19),i["\u0275\u0275elementEnd"]()),2&e){const e=t.index,n=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate1"]("",i["\u0275\u0275pipeBind1"](3,3,"BANNER.FIELDS.TITLE.LABEL")," "),i["\u0275\u0275advance"](3),i["\u0275\u0275textInterpolate"](i["\u0275\u0275pipeBind1"](6,5,n.languages[e])),i["\u0275\u0275advance"](2),i["\u0275\u0275propertyInterpolate"]("formControlName",e)}}function B(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"label",20),i["\u0275\u0275text"](1),i["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate"](e)}}function C(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"label",20),i["\u0275\u0275text"](1),i["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate"](e)}}function w(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"a",21),i["\u0275\u0275text"](1),i["\u0275\u0275elementEnd"]()),2&e){const e=i["\u0275\u0275nextContext"]();i["\u0275\u0275property"]("href",null==e.banner?null:null==e.banner.mediaurls?null:null==e.banner.mediaurls.images[0]?null:e.banner.mediaurls.images[0].default,i["\u0275\u0275sanitizeUrl"]),i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate"](null==e.banner?null:null==e.banner.mediaurls?null:null==e.banner.mediaurls.images[0]?null:e.banner.mediaurls.images[0].default)}}function O(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"label",20),i["\u0275\u0275text"](1),i["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate"](e)}}let _=(()=>{class e{constructor(e,t,n,r){this.client=e,this.coreService=t,this.route=n,this.formBuilder=r,this.banner=new g,this.bannerRequest=new h,this.bannerError=new v,this.showProgress=!1,this.showProgressButton=!1,this.parentBanners=[],this.editId=null,this.languages=[],this.languages=t.translationService.languages}ngOnInit(){this.titleGroupForm=this.coreService.translationService.buildFormGroup(null),this.getEditData()}ngAfterViewInit(){}getEditData(){let e=this.route.snapshot.paramMap.get("id");e&&(this.editId=e,this.getDataById(e).subscribe())}getDataById(e){return this.showProgress=!0,this.client.show(e).pipe(Object(b.a)(e=>(this.showProgress=!1,this.banner=e,this.titleGroupForm=this.coreService.translationService.buildFormGroup(this.banner.title_translations),this.bannerRequest.sort_order=this.banner.sort_order,this.bannerRequest.meta=this.banner.meta,e)))}saveBanner(){this.metaeditorComponent.updatedMetaProperty(),this.showProgressButton=!0;const e=new FormData;e.append("title_translations",this.coreService.translationService.buildRequestParam(this.titleGroupForm)),e.append("sort_order",this.bannerRequest.sort_order),e.append("meta",JSON.stringify(this.bannerRequest.meta)),this.bannerRequest.image&&e.append("image",this.bannerRequest.image),(this.editId?this.client.update(this.editId,e):this.client.store(e)).subscribe(e=>{this.showProgressButton=!1,this.coreService.toastService.showToast(f.b.SUCCESS,"Saved","Saved successfully!"),this.back()},e=>{var t,n,r;if(this.showProgressButton=!1,this.coreService.toastService.showToast(f.b.DANGER,"Failed",e.error.message),e.error.errors){let a=e.error.errors;this.bannerError.title_translations=null===(t=a)||void 0===t?void 0:t.title_translations,this.bannerError.image=null===(n=a)||void 0===n?void 0:n.image,this.bannerError.sort_order=null===(r=a)||void 0===r?void 0:r.sort_order}})}back(){this.coreService.location.back()}getTitleItems(){return this.titleGroupForm.get("items")}onImageChanged(e){this.bannerRequest.image=e.target.files[0]}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](d.a),i["\u0275\u0275directiveInject"](l.a),i["\u0275\u0275directiveInject"](a.a),i["\u0275\u0275directiveInject"](E.d))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["save"]],viewQuery:function(e,t){var n;1&e&&i["\u0275\u0275viewQuery"](S.a,!0),2&e&&i["\u0275\u0275queryRefresh"](n=i["\u0275\u0275loadQuery"]())&&(t.metaeditorComponent=n.first)},decls:42,vars:30,consts:[[1,"row"],[1,"col-md-12"],["nbSpinnerStatus","danger",3,"nbSpinner"],[3,"ngSubmit"],["form","ngForm"],[3,"formGroup"],["formArrayName","items"],["class","form-group",4,"ngFor","ngForOf"],["class","error text-danger",4,"ngFor","ngForOf"],[1,"form-group"],["type","number","nbInput","","fullWidth","","placeholder","Sort Order","name","sort_order","required","",3,"ngModel","ngModelChange"],["sort_order","ngModel"],[1,"error","text-danger",3,"hidden"],["type","file","nbInput","","fullWidth","",3,"change"],["target","_blank",3,"href",4,"ngIf"],[3,"meta","metaChange"],["type","submit","nbButton","","status","success","size","medium","nbSpinnerStatus","success","nbSpinnerSize","small",3,"disabled","nbSpinner"],["type","button","nbButton","","status","danger","size","medium",3,"click"],[1,"language-label"],["type","text","nbInput","","fullWidth","","required","",3,"formControlName"],[1,"error","text-danger"],["target","_blank",3,"href"]],template:function(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"div",0),i["\u0275\u0275elementStart"](1,"div",1),i["\u0275\u0275elementStart"](2,"nb-card"),i["\u0275\u0275elementStart"](3,"nb-card-body",2),i["\u0275\u0275elementStart"](4,"form",3,4),i["\u0275\u0275listener"]("ngSubmit",(function(){return t.saveBanner()})),i["\u0275\u0275elementStart"](6,"div",0),i["\u0275\u0275elementStart"](7,"div",1),i["\u0275\u0275elementStart"](8,"nb-card"),i["\u0275\u0275elementStart"](9,"nb-card-header"),i["\u0275\u0275text"](10),i["\u0275\u0275pipe"](11,"translate"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](12,"nb-card-body"),i["\u0275\u0275elementStart"](13,"div",5),i["\u0275\u0275elementStart"](14,"div",6),i["\u0275\u0275template"](15,x,8,7,"div",7),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275template"](16,B,2,1,"label",8),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](17,"div",9),i["\u0275\u0275elementStart"](18,"label"),i["\u0275\u0275text"](19),i["\u0275\u0275pipe"](20,"translate"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](21,"input",10,11),i["\u0275\u0275listener"]("ngModelChange",(function(e){return t.bannerRequest.sort_order=e})),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](23,"label",12),i["\u0275\u0275text"](24),i["\u0275\u0275pipe"](25,"translate"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275template"](26,C,2,1,"label",8),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](27,"div",9),i["\u0275\u0275elementStart"](28,"label"),i["\u0275\u0275text"](29),i["\u0275\u0275pipe"](30,"translate"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](31,"input",13),i["\u0275\u0275listener"]("change",(function(e){return t.onImageChanged(e)})),i["\u0275\u0275elementEnd"](),i["\u0275\u0275template"](32,w,2,2,"a",14),i["\u0275\u0275template"](33,O,2,1,"label",8),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](34,"ngx-metaeditor",15),i["\u0275\u0275listener"]("metaChange",(function(e){return t.bannerRequest.meta=e})),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](35,"button",16),i["\u0275\u0275text"](36),i["\u0275\u0275pipe"](37,"translate"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](38," \xa0 "),i["\u0275\u0275elementStart"](39,"button",17),i["\u0275\u0275listener"]("click",(function(){return t.back()})),i["\u0275\u0275text"](40),i["\u0275\u0275pipe"](41,"translate"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e){const e=i["\u0275\u0275reference"](5),n=i["\u0275\u0275reference"](22);i["\u0275\u0275advance"](3),i["\u0275\u0275property"]("nbSpinner",t.showProgress),i["\u0275\u0275advance"](7),i["\u0275\u0275textInterpolate"](i["\u0275\u0275pipeBind1"](11,18,"BANNER.FIELDS.TITLE.HEADER")),i["\u0275\u0275advance"](3),i["\u0275\u0275property"]("formGroup",t.titleGroupForm),i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("ngForOf",t.getTitleItems().controls),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngForOf",t.bannerError.title_translations),i["\u0275\u0275advance"](3),i["\u0275\u0275textInterpolate"](i["\u0275\u0275pipeBind1"](20,20,"BANNER.FIELDS.SORT_ORDER.LABEL")),i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("ngModel",t.bannerRequest.sort_order),i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("hidden",n.valid||n.pristine),i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate1"](" ",i["\u0275\u0275pipeBind1"](25,22,"BANNER.FIELDS.SORT_ORDER.VALIDATION")," "),i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("ngForOf",t.bannerError.sort_order),i["\u0275\u0275advance"](3),i["\u0275\u0275textInterpolate"](i["\u0275\u0275pipeBind1"](30,24,"BANNER.FIELDS.IMAGE.LABEL")),i["\u0275\u0275advance"](3),i["\u0275\u0275property"]("ngIf",(null==t.banner?null:null==t.banner.mediaurls?null:null==t.banner.mediaurls.images?null:t.banner.mediaurls.images.length)>0),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngForOf",t.bannerError.image),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("meta",t.bannerRequest.meta),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("disabled",!e.form.valid||t.showProgressButton)("nbSpinner",t.showProgressButton),i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate1"](" ",i["\u0275\u0275pipeBind1"](37,26,"COMMON.SAVE")," "),i["\u0275\u0275advance"](4),i["\u0275\u0275textInterpolate1"](" ",i["\u0275\u0275pipeBind1"](41,28,"COMMON.BACK")," ")}},directives:[c.o,c.n,c.bb,E.B,E.q,E.r,c.q,E.h,E.c,I.l,E.u,c.D,E.b,E.x,E.p,E.s,I.m,S.a,c.l,E.g],pipes:[p.c,y.a],encapsulation:2}),e})();const R=[{path:"",component:s,children:[{path:"add",component:_},{path:"list",component:u},{path:"edit/:id",component:_}]}];let N=(()=>{class e{}return e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.g.forChild(R)],a.g]}),e})();n.d(t,"BannersModule",(function(){return F}));let F=(()=>{class e{}return e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.a,N]]}),e})()}}]);