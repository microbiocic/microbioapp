import{a as P,b as E,c as T}from"./chunk-YVY5OJQN.js";import{a as M,b as A,c as F,d as R,e as O,g as x}from"./chunk-3KEKTGMK.js";import{a as D}from"./chunk-4ZKZO4CB.js";import{a as b}from"./chunk-SN2NSAIS.js";import"./chunk-FBGW7GLQ.js";import{d as y,e as I}from"./chunk-4PBOS6ET.js";import{f as v,h as S}from"./chunk-P3J2DO34.js";import{Aa as l,Va as u,W as i,Wa as f,Xa as d,_ as r,bb as g,cb as h,da as c,e as p,gb as a,pb as C}from"./chunk-6U5VWFB5.js";var w=(e,n)=>{let t=i(P);return localStorage.getItem("token")?!0:(t.navigateTo("/auth"),!1)};var m=class e{userId=null;code=null;message="Confirmando tu correo electr\xF3nico...";authService=i(T);router=i(R);route=i(A);ngOnInit(){this.userId=this.route.snapshot.queryParamMap.get("userId"),this.code=this.route.snapshot.queryParamMap.get("code"),this.userId&&this.code?this.confirmEmail(this.userId,this.code):this.message="Error: Faltan par\xE1metros en la URL."}confirmEmail(n,t){this.authService.confirmEmail(n,t).subscribe(o=>{o.result?(this.message=o.message,setTimeout(()=>{this.router.navigate(["/auth"])},3e3)):(this.message="Ocurri\xF3 un error inesperado. "+o.errors[0],console.error(o))},o=>{console.error(o),this.message="Ocurri\xF3 un error inesperado."})}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=r({type:e,selectors:[["app-confirm-email"]],standalone:!0,features:[a],decls:3,vars:1,consts:[[1,"confirmation","row","wd-100"],[1,"color-secondary"]],template:function(t,o){t&1&&(u(0,"div",0)(1,"p",1),g(2),f()()),t&2&&(l(2),h(o.message))},styles:[".confirmation[_ngcontent-%COMP%]{height:100vh}.confirmation[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:3rem;font-weight:600}"]})};var G=[{path:"auth",title:"Inicia sesi\xF3n",loadComponent:()=>import("./chunk-VDACQEEI.js")},{path:"confirm-email",title:"Confirmar Correo",component:m},{path:"main",title:"P\xE1gina principal",loadComponent:()=>import("./chunk-42CYNRDS.js"),canActivate:[w],children:[{path:"home",title:"Colecci\xF3n Cient\xEDfica",loadComponent:()=>import("./chunk-LGNWXVUS.js").then(e=>e.HomeComponent)},{path:"summary",title:"Resumen T\xE9cnico",loadComponent:()=>import("./chunk-NRWVYIXQ.js").then(e=>e.SummaryComponent)},{path:"founding",title:"Financiamiento",loadComponent:()=>import("./chunk-NFRVOZFL.js").then(e=>e.FoundingComponent)},{path:"microorganism",title:"Base de datos de Microorganismos",loadComponent:()=>import("./chunk-NQJMHASH.js").then(e=>e.MicroorganismComponent)},{path:"gene",title:"Base de datos de Genes",loadComponent:()=>import("./chunk-RAEZHCK2.js").then(e=>e.GeneComponent)},{path:"",redirectTo:"home",pathMatch:"full"},{path:"**",redirectTo:"home"}]},{path:"",redirectTo:"main",pathMatch:"full"},{path:"**",redirectTo:"main"}];var L={providers:[C({eventCoalescing:!0}),O(G),{provide:v,useClass:S},y(I()),c(E.forRoot({config:{tokenGetter:()=>localStorage.getItem("token")}}))]};var s=class e{title="Colecci\xF3n Cient\xEDfica";microorganismService=i(D);geneService=i(b);languageService=i(x);ngOnInit(){return p(this,null,function*(){this.microorganismService.listMicroorganisms(),this.geneService.listGenes()})}setLanguage(n){return p(this,null,function*(){this.languageService.setLanguage(n)})}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=r({type:e,selectors:[["app-root"]],standalone:!0,features:[a],decls:1,vars:0,template:function(t,o){t&1&&d(0,"router-outlet")},dependencies:[F]})};M(s,L).catch(e=>console.error(e));
