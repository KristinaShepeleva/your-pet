"use strict";(self.webpackChunkyour_pet=self.webpackChunkyour_pet||[]).push([[973],{3410:function(e,r,i){i.d(r,{Z:function(){return m}});var n=i(1413),s=i(9439);function a(e,r){if(null==e)return{};var i,n,s=function(e,r){if(null==e)return{};var i,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],r.indexOf(i)>=0||(s[i]=e[i]);return s}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],r.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(s[i]=e[i])}return s}var t=i(5705),o="CustomInput_input__ObazE",l="CustomInput_inputError__agYzR",u="CustomInput_error__hrpIn",c=i(184),d=["submitCount","isValid"],m=function(e){var r=e.submitCount,i=e.isValid,m=a(e,d),_=(0,t.U$)(m),h=(0,s.Z)(_,2),p=h[0],g=h[1];return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("input",(0,n.Z)((0,n.Z)((0,n.Z)({},p),m),{},{className:!i&&r>0&&g.error?l:o})),!i&&r>0&&g.error&&(0,c.jsx)("div",{className:u,children:g.error})]})}},2973:function(e,r,i){i.r(r),i.d(r,{default:function(){return N}});var n=i(5705),s=i(1087),a="LoginForm_container__YDFcb",t="LoginForm_title__5FilZ",o="LoginForm_form__gPEx5",l="LoginForm_iconInput__+dr3j",u="LoginForm_eyeIcon__UzGhv",c="LoginForm_crossIcon__7B-yv",d="LoginForm_checkIcon__8JgC+",m="LoginForm_checkEmailIcon__SxnOy",_="LoginForm_btn__B2KLK",h="LoginForm_linkContainer__tVAZX",p="LoginForm_link__IJw1a",g=i(5996),f=i(3410),j=i(7185),v=i(9434),x=i(5147),b=i(184),Z={email:"",password:""},q=function(){var e=(0,v.I0)();return(0,b.jsxs)("div",{className:a,children:[(0,b.jsx)("h1",{className:t,children:"Login"}),(0,b.jsx)(n.J9,{initialValues:Z,validationSchema:g.dm,onSubmit:function(r,i){console.log(i),e((0,x.login)(r)),i.resetForm()},children:function(e){var r=e.isValid,i=e.submitCount;return(0,b.jsxs)(n.l0,{className:o,children:[(0,b.jsxs)("div",{children:[(0,b.jsxs)("div",{className:l,children:[(0,b.jsx)(f.Z,{type:"email",name:"email",placeholder:"Email",isValid:r,submitCount:i}),(0,b.jsx)(j.nQ,{className:m}),(0,b.jsx)(j.Hb,{className:c})]}),(0,b.jsxs)("div",{className:l,children:[(0,b.jsx)(f.Z,{type:"password",name:"password",placeholder:"Password",isValid:r,submitCount:i,style:{marginBottom:0}}),(0,b.jsx)(j.nQ,{className:d}),(0,b.jsx)(j.Hb,{className:c}),(0,b.jsx)(j.LA,{className:u})]})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("button",{type:"submit",className:_,children:"Login"}),(0,b.jsxs)("div",{className:h,children:["Don't have an account?",(0,b.jsx)(s.OL,{to:"/register",className:p,children:"Register"})]})]})]})}})]})},y=(i(2791),"LoginPage_loginPage__eZ30b"),N=function(){return(0,b.jsx)("div",{className:y,children:(0,b.jsx)(q,{})})}},5996:function(e,r,i){i.d(r,{IK:function(){return o},dm:function(){return t},gY:function(){return a}});var n=i(6727),s=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/,a=n.Ry().shape({username:n.Z_().min(2).max(16).required("Required"),email:n.Z_().email("Please enter a valid email").required("Required"),password:n.Z_().min(5).matches(s,"The password must have 1 uppercase letter, 1 lowercase letter and 1 number").required("Required"),confirmPassword:n.Z_().oneOf([n.iH("password"),null],"Password must match").required("Required")}),t=n.Ry().shape({email:n.Z_().email("Please enter a valid email").required("Required"),password:n.Z_().min(5).matches(s,"Not valid password").required("Required")}),o=n.Ry().shape({photo:n.Z_(),name:n.Z_().required("Required").matches(/^[a-z\u0430-\u044f\u0451]{2,16}$/i,"Enter a valid Name"),email:n.Z_().trim().required("Required").matches(/.+@.+\..+/i,"Enter a valid Email"),birthday:n.Z_().required("Required"),phone:n.Z_().required("Required"),city:n.Z_().required("Required")})}}]);
//# sourceMappingURL=973.75cd6784.chunk.js.map