"use strict";(self.webpackChunkyour_pet=self.webpackChunkyour_pet||[]).push([[980],{4543:function(e,a,r){r.d(a,{Z:function(){return i}});var t="Container_container__VVOCq",n=r(184);var i=function(e){var a=e.children;return(0,n.jsx)("div",{className:t,children:a})}},5980:function(e,a,r){r.r(a),r.d(a,{default:function(){return Z}});var t=r(4543),n=r(9439),i=r(5705),s=r(3939),l=r(4717),o=r(2791),u=r(5996),d="UserInput_label__rwL-4",c="UserInput_labelText__dLSSN",m="UserInput_input__LhhAa",h=r(184),p=function(e){var a=e.text,r=e.name,t=e.type,n=e.isActive,i=e.onChange,s=e.value,l=e.error,o=e.helperText;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("label",{className:d,children:[(0,h.jsxs)("span",{className:c,children:[a,":"]}),(0,h.jsx)("input",{className:m,name:r,type:t,disabled:n,onChange:i,value:s})]}),l?(0,h.jsx)("div",{children:o}):null]})},v="UserForm_wrapper__Fxcb1",x="UserForm_EditCloseBt__xpCnf",_="UserForm_icon__Uhvd8",j="UserForm_boxAvatar__IUBDV",b="UserForm_imgAvatar__nTcBs",y="UserForm_editAvatarBt__PdeD1",f="UserForm_editAvatarIcon__nD2Xr",C="UserForm_labelInputFale__a1CEk",g="UserForm_inputFile__CHbjf",U="UserForm_formGroup__H4Oti",R=r(9434),q=r(2218),F=function(){var e=(0,R.I0)();return(0,h.jsxs)("button",{type:"button",onClick:function(){return e((0,q.logout)())},children:[(0,h.jsx)(s.R0,{})," Logout"]})},N=function(){var e=(0,l.a)().user,a=(0,o.useState)(null),r=(0,n.Z)(a,2),t=r[0],d=r[1],c=(0,o.useState)(!0),m=(0,n.Z)(c,2),R=m[0],q=m[1],N=(0,o.useState)(!1),Z=(0,n.Z)(N,2),L=Z[0],w=Z[1];console.log(L);var A=(0,i.TA)({initialValues:{avatarURL:"",name:e.name,email:e.email,birthday:"2018-04-28",phone:"+3809745353530",city:"Kyiv"},onSubmit:function(e,a){var r=new FormData;r.append("avatarURL",e.avatarURL),r.append("name",e.name),r.append("email",e.email),r.append("birthday",e.birthday),r.append("phone",e.phone),r.append("city",e.city),q(!R),w(!1),a.resetForm()},validationSchema:u.IK});return(0,h.jsxs)("div",{className:v,children:[(0,h.jsxs)("form",{onSubmit:A.handleSubmit,children:[(0,h.jsx)("div",{className:j,children:t?(0,h.jsx)("img",{className:b,src:URL.createObjectURL(t),alt:"avatar"}):null!==e&&void 0!==e&&e.avatarURL?(0,h.jsx)("img",{className:b,src:e.avatarURL,alt:"avatar"}):(0,h.jsx)("div",{children:(0,h.jsx)(s.BM,{})})}),!R&&L&&(0,h.jsxs)("div",{children:[(0,h.jsxs)("button",{type:"button",style:{color:"blue"},onClick:function(){return w(!1)},children:[" ",(0,h.jsx)(s.nQ,{})]}),(0,h.jsx)("span",{children:"Confirm"}),(0,h.jsxs)("button",{type:"button",onClick:function(){w(!1),A.setFieldValue("avatarURL",""),d(null)},children:[" ",(0,h.jsx)(s.fZ,{})]})]}),(0,h.jsxs)("label",{className:C,children:[!R&&!L&&(0,h.jsxs)("button",{className:y,type:"button",onClick:function(){return w(!0)},children:[(0,h.jsx)(s.xm,{className:f})," Edit photo"]}),(0,h.jsx)("input",{className:g,name:"avatarURL",type:"file",disabled:R,onChange:function(e){A.setFieldValue("avatarURL",e),d(e.target.files[0])},accept:"image/*,.png,.jpg,.gif,.web"})]}),(0,h.jsxs)("div",{className:U,children:[(0,h.jsx)(p,{text:"Name",name:"name",type:"text",isActive:R,onChange:A.handleChange,value:A.values.name,error:A.touched.name&&A.errors.name,helperText:A.errors.name}),(0,h.jsx)(p,{text:"Email",name:"email",type:"email",isActive:R,onChange:A.handleChange,value:A.values.email,error:A.touched.email&&A.errors.email,helperText:A.errors.email}),(0,h.jsx)(p,{text:"Birthday",name:"birthday",type:"date",isActive:R,onChange:A.handleChange,value:A.values.birthday,error:A.touched.birthday&&A.errors.birthday,helperText:A.errors.birthday}),(0,h.jsx)(p,{text:"Phone",name:"phone",type:"tel",isActive:R,onChange:A.handleChange,value:A.values.phone,error:A.touched.phone&&A.errors.phone,helperText:A.errors.phone}),(0,h.jsx)(p,{text:"City",name:"city",type:"text",isActive:R,onChange:A.handleChange,value:A.values.city,error:A.touched.city&&A.errors.city,helperText:A.errors.city})]}),!R&&(0,h.jsx)("button",{type:"submit",children:"Save"})]}),R?(0,h.jsx)("button",{className:x,type:"button",onClick:function(){return q(!R)},children:(0,h.jsx)(s.dY,{})}):(0,h.jsx)("button",{className:x,type:"reset",onClick:function(){A.resetForm(),q(!R),d(null),w(!1)},children:(0,h.jsx)(s.Hb,{className:_})}),(0,h.jsx)(F,{})]})},Z=function(){return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(t.Z,{children:[(0,h.jsx)("h2",{children:"UserPage"}),(0,h.jsx)(N,{})]})})}},5996:function(e,a,r){r.d(a,{IK:function(){return o},dm:function(){return l},gY:function(){return s}});var t=r(6727),n=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,16}$/,i=/.+@.+\..+/i,s=t.Ry().shape({username:t.Z_().min(2).max(16).required("Required"),email:t.Z_().email(i,"Please enter a valid email").required("Required"),password:t.Z_().matches(n,"The password must have 1 uppercase letter, 1 lowercase letter and 1 number").required("Required"),confirmPassword:t.Z_().oneOf([t.iH("password"),null],"Password must match").required("Required")}),l=t.Ry().shape({email:t.Z_().email("Please enter a valid email").required("Required"),password:t.Z_().matches(n,"Not valid password").required("Required")}),o=t.Ry().shape({avatarURL:t.nK(),name:t.Z_().required("Required").matches(/^[a-z\u0430-\u044f\u0451]{2,16}$/i,"Enter a valid Name"),email:t.Z_().trim().required("Required").matches(i,"Enter a valid Email"),birthday:t.Z_().required("Required"),phone:t.Z_().required("Required"),city:t.Z_().required("Required")})}}]);
//# sourceMappingURL=980.6265d5f6.chunk.js.map