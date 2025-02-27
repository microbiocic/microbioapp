import{d as I}from"./chunk-3KEKTGMK.js";import{a as p,b as P}from"./chunk-PJZ2M27N.js";import{b as y,c as E}from"./chunk-4PBOS6ET.js";import{d as k}from"./chunk-P3J2DO34.js";import{$ as T,Ga as f,Q as a,R,T as D,V as u,W as c,e as d,o as h,s as b,u as g,x as S}from"./chunk-6U5VWFB5.js";var m=class r{goToRouteSignal=f("/auth");goToRoute=this.goToRouteSignal.asReadonly();router=c(I);navigateTo(i){this.router.navigateByUrl(i)}storeData(i,e){!i||!e||localStorage.setItem(i,JSON.stringify(e))}removeData(i){localStorage.removeItem(i)}getData(i){let e=localStorage.getItem(i);return e?JSON.parse(e):null}static \u0275fac=function(e){return new(e||r)};static \u0275prov=a({token:r,factory:r.\u0275fac,providedIn:"root"})};var w=new D("JWT_OPTIONS"),v=(()=>{class r{constructor(e=null){this.tokenGetter=e&&e.tokenGetter||function(){}}urlBase64Decode(e){let t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:{t+="==";break}case 3:{t+="=";break}default:throw new Error("Illegal base64url string!")}return this.b64DecodeUnicode(t)}b64decode(e){let t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",o="";if(e=String(e).replace(/=+$/,""),e.length%4===1)throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");for(let s=0,l,n,O=0;n=e.charAt(O++);~n&&(l=s%4?l*64+n:n,s++%4)?o+=String.fromCharCode(255&l>>(-2*s&6)):0)n=t.indexOf(n);return o}b64DecodeUnicode(e){return decodeURIComponent(Array.prototype.map.call(this.b64decode(e),t=>"%"+("00"+t.charCodeAt(0).toString(16)).slice(-2)).join(""))}decodeToken(e=this.tokenGetter()){return e instanceof Promise?e.then(t=>this._decodeToken(t)):this._decodeToken(e)}_decodeToken(e){if(!e||e==="")return null;let t=e.split(".");if(t.length!==3)throw new Error("The inspected token doesn't appear to be a JWT. Check to make sure it has three parts and see https://jwt.io for more.");let o=this.urlBase64Decode(t[1]);if(!o)throw new Error("Cannot decode the token.");return JSON.parse(o)}getTokenExpirationDate(e=this.tokenGetter()){return e instanceof Promise?e.then(t=>this._getTokenExpirationDate(t)):this._getTokenExpirationDate(e)}_getTokenExpirationDate(e){let t;if(t=this.decodeToken(e),!t||!t.hasOwnProperty("exp"))return null;let o=new Date(0);return o.setUTCSeconds(t.exp),o}isTokenExpired(e=this.tokenGetter(),t){return e instanceof Promise?e.then(o=>this._isTokenExpired(o,t)):this._isTokenExpired(e,t)}_isTokenExpired(e,t){if(!e||e==="")return!0;let o=this.getTokenExpirationDate(e);return t=t||0,o===null?!1:!(o.valueOf()>new Date().valueOf()+t*1e3)}getAuthScheme(e,t){return typeof e=="function"?e(t):e}}return r.\u0275fac=function(e){return new(e||r)(u(w))},r.\u0275prov=a({token:r,factory:r.\u0275fac}),r})(),j=r=>r instanceof Promise?S(()=>r):h(r),A=(()=>{class r{constructor(e,t,o){this.jwtHelper=t,this.document=o,this.standardPorts=["80","443"],this.tokenGetter=e.tokenGetter,this.headerName=e.headerName||"Authorization",this.authScheme=e.authScheme||e.authScheme===""?e.authScheme:"Bearer ",this.allowedDomains=e.allowedDomains||[],this.disallowedRoutes=e.disallowedRoutes||[],this.throwNoTokenError=e.throwNoTokenError||!1,this.skipWhenExpired=e.skipWhenExpired}isAllowedDomain(e){let t=new URL(e.url,this.document.location.origin);if(t.host===this.document.location.host)return!0;let o=`${t.hostname}${t.port&&!this.standardPorts.includes(t.port)?":"+t.port:""}`;return this.allowedDomains.findIndex(s=>typeof s=="string"?s===o:s instanceof RegExp?s.test(o):!1)>-1}isDisallowedRoute(e){let t=new URL(e.url,this.document.location.origin);return this.disallowedRoutes.findIndex(o=>{if(typeof o=="string"){let s=new URL(o,this.document.location.origin);return s.hostname===t.hostname&&s.pathname===t.pathname}return o instanceof RegExp?o.test(e.url):!1})>-1}handleInterception(e,t,o){let s=this.jwtHelper.getAuthScheme(this.authScheme,t);if(!e&&this.throwNoTokenError)throw new Error("Could not get token from tokenGetter function.");let l=h(!1);return this.skipWhenExpired&&(l=e?j(this.jwtHelper.isTokenExpired(e)):h(!0)),e?l.pipe(b(n=>n&&this.skipWhenExpired?t.clone():t.clone({setHeaders:{[this.headerName]:`${s}${e}`}})),g(n=>o.handle(n))):o.handle(t)}intercept(e,t){if(!this.isAllowedDomain(e)||this.isDisallowedRoute(e))return t.handle(e);let o=this.tokenGetter(e);return j(o).pipe(g(s=>this.handleInterception(s,e,t)))}}return r.\u0275fac=function(e){return new(e||r)(u(w),u(v),u(k))},r.\u0275prov=a({token:r,factory:r.\u0275fac}),r})(),z=(()=>{class r{constructor(e){if(e)throw new Error("JwtModule is already loaded. It should only be imported in your application's main module.")}static forRoot(e){return{ngModule:r,providers:[{provide:E,useClass:A,multi:!0},e.jwtOptionsProvider||{provide:w,useValue:e.config},v]}}}return r.\u0275fac=function(e){return new(e||r)(u(r,12))},r.\u0275mod=T({type:r}),r.\u0275inj=R({}),r})();var H=class r{apiAuth=p.apiAuth;apiUrl=p.apiUrl;apiRegister=p.apiRegister;apiForgot=p.apiForgotPassword;apiRecovery=p.apiRecoveryPassword;http=c(y);utilsService=c(m);alertService=c(P);jwtHelper=c(v);isAuthenticated=f(!1);login(i){return d(this,null,function*(){try{let e=yield this.http.post(this.apiAuth,i).toPromise();if(e?.result){let t=e.token;if(t){let o=this.jwtHelper.decodeToken(t);this.utilsService.storeData("token",t),this.utilsService.storeData("userRole",o.Role),this.isAuthenticated.set(!0),this.utilsService.navigateTo("/dashboard"),this.alertService.successful("\xA1Inicio de sesi\xF3n exitoso!")}}else this.alertService.error("Hubo un problema: "+e?.errors)}catch(e){this.alertService.error("Hubo un problema: "+e)}})}register(i){return d(this,null,function*(){try{let e=yield this.http.post(this.apiRegister,i).toPromise();e?.result?this.alertService.successful("Usuario creado con \xE9xito. Revise su correo electronico para confirmar la contrase\xF1a"):this.alertService.error("Hubo un problema: "+e?.errors)}catch(e){this.alertService.error("Hubo un problema: "+e),console.log(e)}})}forgotPassword(i){return d(this,null,function*(){let e={email:i};try{let t=yield this.http.post(this.apiForgot,e).toPromise();t?.result?(this.utilsService.storeData("userData",{email:i,token:t.token}),this.alertService.successful("\xA1Contrase\xF1a recuperada con \xE9xito!")):this.alertService.error("Hubo un problema: "+t?.errors)}catch(t){this.alertService.error("Hubo un problema: "+t)}})}recoveryPassword(i){return d(this,null,function*(){try{let e=yield this.http.post(this.apiRecovery,i).toPromise();e?.result?(this.utilsService.removeData("userData"),this.alertService.successful("\xA1Contrase\xF1a recuperada con \xE9xito!")):this.alertService.error("Hubo un problema: "+e?.errors)}catch(e){this.alertService.error("Hubo un problema: "+e)}})}confirmEmail(i,e){return this.http.post(`${this.apiUrl}Authentication/ConfirmEmail`,{userId:i,code:e})}logout(){this.utilsService.removeData("token"),this.utilsService.removeData("userRole"),this.isAuthenticated.set(!1),this.utilsService.navigateTo("/auth"),this.alertService.successful("Se cerr\xF3 la sesi\xF3n de usuario")}static \u0275fac=function(e){return new(e||r)};static \u0275prov=a({token:r,factory:r.\u0275fac,providedIn:"root"})};export{m as a,z as b,H as c};
