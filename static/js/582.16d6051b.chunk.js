"use strict";(self.webpackChunkyour_pet=self.webpackChunkyour_pet||[]).push([[582],{3410:function(e,r,s){s.d(r,{Z:function(){return d}});var n=s(1413),i=s(9439);function a(e,r){if(null==e)return{};var s,n,i=function(e,r){if(null==e)return{};var s,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)s=a[n],r.indexOf(s)>=0||(i[s]=e[s]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)s=a[n],r.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(i[s]=e[s])}return i}var t=s(5705),o="CustomInput_input__ObazE",c="CustomInput_inputError__agYzR",u="CustomInput_error__hrpIn",l=s(184),m=["submitCount","isValid"],d=function(e){var r=e.submitCount,s=e.isValid,d=a(e,m),p=(0,t.U$)(d),_=(0,i.Z)(p,2),h=_[0],f=_[1];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("input",(0,n.Z)((0,n.Z)((0,n.Z)({},h),d),{},{className:!s&&r>0&&f.error?c:o})),!s&&r>0&&f.error&&(0,l.jsx)("div",{className:u,children:f.error})]})}},5582:function(e,r,s){s.r(r),s.d(r,{default:function(){return x}});var n=s(5861),i=s(7757),a=s.n(i),t=s(5705),o=s(1087),c={container:"RegisterForm_container__w0Atp",title:"RegisterForm_title__EvDyW",form:"RegisterForm_form__Tv43W",iconInput:"RegisterForm_iconInput__n83p7",eyeIcon:"RegisterForm_eyeIcon__PZ59+",crossIcon:"RegisterForm_crossIcon__ggC75",checkIcon:"RegisterForm_checkIcon__jvji-",checkEmailIcon:"RegisterForm_checkEmailIcon__meM9n",btn:"RegisterForm_btn__bgTuW",linkContainer:"RegisterForm_linkContainer__Sxc8O",link:"RegisterForm_link__xu2eW"},u=s(5996),l=s(3410),m=s(7185),d=s(9434),p=s(5147),_=s(184),h={username:"",email:"",password:"",confirmPassword:""},f=function(){var e=(0,d.I0)(),r=function(){var r=(0,n.Z)(a().mark((function r(s,n){var i;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:i={name:s.username,email:s.email,password:s.password},e((0,p.createUser)(i)),n.resetForm();case 3:case"end":return r.stop()}}),r)})));return function(e,s){return r.apply(this,arguments)}}();return(0,_.jsxs)("div",{className:c.container,children:[(0,_.jsx)("h1",{className:c.title,children:"Registration"}),(0,_.jsx)(t.J9,{initialValues:h,validationSchema:u.gY,onSubmit:r,className:c.formik,children:function(e){var r=e.isValid,s=e.submitCount;return(0,_.jsxs)(t.l0,{className:c.form,children:[(0,_.jsx)(l.Z,{type:"name",name:"username",placeholder:"Name",isValid:r,submitCount:s}),(0,_.jsxs)("div",{className:c.iconInput,children:[(0,_.jsx)(l.Z,{type:"email",name:"email",placeholder:"Email",isValid:r,submitCount:s}),(0,_.jsx)(m.nQ,{className:c.checkEmailIcon}),(0,_.jsx)(m.Hb,{className:c.crossIcon})]}),(0,_.jsxs)("div",{className:c.iconInput,children:[(0,_.jsx)(l.Z,{type:"password",name:"password",placeholder:"Password",isValid:r,submitCount:s}),(0,_.jsx)(m.nQ,{className:c.checkIcon}),(0,_.jsx)(m.Hb,{className:c.crossIcon}),(0,_.jsx)(m.LA,{className:c.eyeIcon})]}),(0,_.jsxs)("div",{className:c.iconInput,children:[(0,_.jsx)(l.Z,{type:"password",name:"confirmPassword",placeholder:"Confirm password",isValid:r,submitCount:s,style:{marginBottom:0}}),(0,_.jsx)(m.nQ,{className:c.checkIcon}),(0,_.jsx)(m.Hb,{className:c.crossIcon}),(0,_.jsx)(m.LA,{className:c.eyeIcon})]}),(0,_.jsx)("button",{className:c.btn,type:"submit",children:"Registration"})]})}}),(0,_.jsxs)("div",{className:c.linkContainer,children:["Already have an account?",(0,_.jsx)(o.OL,{to:"/login",className:c.link,children:"Login"})]})]})},j="RegisterPage_registerPage__pk1kr",x=function(){return(0,_.jsx)("div",{className:j,children:(0,_.jsx)(f,{})})}},5996:function(e,r,s){s.d(r,{IK:function(){return o},dm:function(){return t},gY:function(){return a}});var n=s(6727),i=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/,a=n.Ry().shape({username:n.Z_().min(2).max(16).required("Required"),email:n.Z_().email("Please enter a valid email").required("Required"),password:n.Z_().min(5).matches(i,"The password must have 1 uppercase letter, 1 lowercase letter and 1 number").required("Required"),confirmPassword:n.Z_().oneOf([n.iH("password"),null],"Password must match").required("Required")}),t=n.Ry().shape({email:n.Z_().email("Please enter a valid email").required("Required"),password:n.Z_().min(5).matches(i,"Not valid password").required("Required")}),o=n.Ry().shape({photo:n.Z_(),name:n.Z_().required("Required").matches(/^[a-z\u0430-\u044f\u0451]{2,16}$/i,"Enter a valid Name"),email:n.Z_().trim().required("Required").matches(/.+@.+\..+/i,"Enter a valid Email"),birthday:n.Z_().required("Required"),phone:n.Z_().required("Required"),city:n.Z_().required("Required")})}}]);
//# sourceMappingURL=582.16d6051b.chunk.js.map