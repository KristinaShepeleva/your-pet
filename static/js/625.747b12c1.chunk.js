"use strict";(self.webpackChunkyour_pet=self.webpackChunkyour_pet||[]).push([[625],{7175:function(e,t,a){a.d(t,{Z:function(){return f}});var s=a(9439),n=a(2791),r="AddPetButton_addBtn__AoQ+6",i="AddPetButton_addIcon__Vfr9I",l="AddPetButton_addIconBig__9nvy3",o="AddPetButton_textBtn__aiVq1",c=a(3566),d=a(4717),m=a(945),u="AtentionModal_atention__pNrop",h="AtentionModal_titleAtention__DVqEE",_="AtentionModal_textAtention__oDK3O",x="AtentionModal_btnContainer__geSGn",p="AtentionModal_btnLogIn__6bgng",j="AtentionModal_linkIcon__ph9+U",v="AtentionModal_btnRegister__B1O13",b=a(1087),g=a(184),y=function(){return(0,g.jsxs)("div",{className:u,children:[(0,g.jsx)("h2",{className:h,children:"Attention!"}),(0,g.jsx)("p",{className:_,children:"We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not already have an account, you must register to access these features."}),(0,g.jsxs)("div",{className:x,children:[(0,g.jsx)(b.rU,{to:"/login",children:(0,g.jsxs)("button",{type:"button",className:p,children:["Log IN",(0,g.jsx)(c.ZO,{className:j})]})}),(0,g.jsx)(b.rU,{to:"/register",children:(0,g.jsx)("button",{className:v,children:"Registration"})})]})]})},f=function(){var e=(0,n.useState)(!1),t=(0,s.Z)(e,2),a=t[0],u=t[1],h=(0,d.a)().isLoggedIn,_=function(){u(!a)};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("button",{onClick:_,className:r,type:"button",children:[(0,g.jsx)(c.qJ,{className:i}),(0,g.jsx)(c.l5,{className:l}),(0,g.jsx)("p",{className:o,children:"Add Pet"})]}),a&&!h&&(0,g.jsx)(m.Z,{toggleModal:_,children:(0,g.jsx)(y,{})})]})}},4543:function(e,t,a){a.d(t,{Z:function(){return r}});var s="Container_container__VVOCq",n=a(184);var r=function(e){var t=e.children;return(0,n.jsx)("div",{className:s,children:t})}},8625:function(e,t,a){a.r(t),a.d(t,{default:function(){return ie}});var s=a(9439),n=a(4543),r=a(3566),i="CongratsModal_containet__P1iqK",l="CongratsModal_title__EuaPE",o="CongratsModal_text__vQUPB",c="CongratsModal_btn__lfqy3",d="CongratsModal_icon__Kg4zq",m=a(184),u=function(e){var t=e.toggleModal;return(0,m.jsxs)("div",{className:i,children:[(0,m.jsx)("h2",{className:l,children:"Congrats"}),(0,m.jsx)("p",{className:o,children:"Youre registration is success"}),(0,m.jsxs)("button",{type:"button",onClick:t,className:c,children:["Go to profile",(0,m.jsx)(r.ZO,{className:d})]})]})},h=a(945),_=a(7175),x={wrapper:"PetsItem_wrapper__tZBfR",thumb:"PetsItem_thumb__Rfl9F",image:"PetsItem_image__kBEK2",box:"PetsItem_box__l5lTR",bt:"PetsItem_bt__tASnA",icon:"PetsItem_icon__nyFcT",text:"PetsItem_text__ikYvH",title:"PetsItem_title__KFklz"},p=function(e){e.petId;var t=e.petName,a=e.birthday,s=e.breed,n=e.comments,i=e.image;return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("li",{className:x.wrapper,children:[(0,m.jsx)("div",{className:x.thumb,children:(0,m.jsx)("img",{className:x.image,src:i,alt:"pet"})}),(0,m.jsxs)("ul",{className:x.box,children:[(0,m.jsx)("li",{className:x.boxNameDeleteIcon,children:(0,m.jsxs)("p",{className:x.text,children:[(0,m.jsx)("span",{className:x.title,children:"Name:"})," ",t]})}),(0,m.jsxs)("li",{children:[" ",(0,m.jsxs)("p",{className:x.text,children:[(0,m.jsx)("span",{className:x.title,children:"Date of birth:"})," ",a]})," "]}),(0,m.jsxs)("li",{children:[(0,m.jsxs)("p",{className:x.text,children:[(0,m.jsx)("span",{className:x.title,children:"Type:"})," ",s]})," "]}),(0,m.jsxs)("li",{children:[" ",(0,m.jsxs)("p",{className:x.text,children:[(0,m.jsx)("span",{className:x.title,children:"Comments:"})," ",n]})," "]})]}),(0,m.jsx)("button",{className:x.bt,type:"button",children:(0,m.jsx)(r.pJ,{className:x.icon})})]})})},j=function(e){var t=e.text;return(0,m.jsx)("p",{children:t})},v=a(9723),b=[{petId:"497349tyh",name:"Bruno",birthday:"00.00.0000",breed:"Spitz",comments:"Something about pet",image:v,public_id:"47gh49tyh"},{petId:"485nhfvi9t",name:"Bruno",birthday:"00.00.0000",breed:"Spitz",comments:"Jack is aJack is a handsome BasenjiJack is a handsome BasenjiJack is a handsome BasenjiJack is a handsome BasenjiJack is a handsome BasenjiJack is a handsome BasenjiJack is a handsome BasenjiJack is a handsome Basenji handsome Basenji with short, shiny red fur and perky ears. He's an active and intelligent dog that loves to explore and play. Jack is independent and strong-willed, but also affectionate and loyal to his family. He's a curious and energetic companion that brings joy and adventure to his family's life.",image:v,public_id:"47g129tyh"}],g=function(){return(0,m.jsx)(m.Fragment,{children:0===b.length?(0,m.jsx)(j,{text:'You don`t have any pets. You can add them. Click on the button "Add pet"'}):(0,m.jsx)("ul",{children:b.map((function(e){var t=e.petId,a=e.name,s=e.birthday,n=e.breed,r=e.comments,i=e.image;return(0,m.jsx)(p,{id:t,petName:a,birthday:s,breed:n,comments:r,image:i},t)}))})})},y="PetsData_wrapper__vJJPe",f="PetsData_box__-DA8o",N="PetsData_title__c2IAB",C=function(){return(0,m.jsxs)("div",{className:y,children:[(0,m.jsxs)("div",{className:f,children:[" ",(0,m.jsx)("h2",{className:N,children:"My pets:"}),(0,m.jsx)(_.Z,{})]}),(0,m.jsx)(g,{})]})},U=a(5705),F=a(4717),A=a(2791),B=a(5996),I="UserInput_label__rwL-4",k="UserInput_labelText__dLSSN",q="UserInput_input__LhhAa",R="UserInput_errorText__9FXQY",Z=function(e){var t=e.text,a=e.name,s=e.type,n=e.isActive,r=e.onChange,i=e.value,l=e.error,o=e.helperText;return(0,m.jsxs)("div",{children:[(0,m.jsxs)("label",{className:I,children:[(0,m.jsxs)("span",{className:k,children:[t,":"]}),(0,m.jsx)("input",{className:q,name:a,type:s,disabled:n,onChange:r,value:i})]}),l?(0,m.jsx)("span",{className:R,children:o}):null]})},P="UserForm_wrapper__Fxcb1",w="UserForm_EditCloseBt__xpCnf",M="UserForm_iconPhoto__grX6T",L="UserForm_boxAvatar__IUBDV",S="UserForm_formActiv__HfsZ0",D="UserForm_imgAvatar__nTcBs",T="UserForm_editAvatarBt__PdeD1",J="UserForm_editAvatarIcon__nD2Xr",E="UserForm_confirmBtBox__T7Wv-",H="UserForm_textConfirm__1DJ7o",K="UserForm_confirmBt__pb05u",V="UserForm_labelInputFale__a1CEk",z="UserForm_inputFile__CHbjf",O="UserForm_formGroup__H4Oti",Y="UserForm_saveBtBox__W5mzf",Q="UserForm_saveBt__Ay9Br",W="LogoutUser_bt__3iWY1",G=a(5532),X=a(2218),$=a(9434),ee=function(){var e=(0,$.I0)(),t=(0,A.useState)(!1),a=(0,s.Z)(t,2),n=a[0],i=a[1],l=function(){i(!n)};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("button",{className:W,type:"button",onClick:l,children:[(0,m.jsx)(r.R0,{style:{stroke:"#54ADFF"}})," Logout"]}),n&&(0,m.jsx)(h.Z,{toggleModal:l,children:(0,m.jsx)(G.Z,{toggleLogoutModal:l,logout:function(){e((0,X.logout)())}})})]})},te=function(){var e=(0,F.a)().user,t=(0,A.useState)(null),a=(0,s.Z)(t,2),n=a[0],i=a[1],l=(0,A.useState)(!0),o=(0,s.Z)(l,2),c=o[0],d=o[1],u=(0,A.useState)(!1),h=(0,s.Z)(u,2),_=h[0],x=h[1],p=(0,$.I0)(),j=(0,U.TA)({initialValues:{avatarURL:"",name:e.name,email:e.email,birthday:"2018-04-28",phone:"+3809745353530",city:"Kyiv"},onSubmit:function(e,t){var a=new FormData;a.append("avatarURL",e.avatarURL),a.append("name",e.name),a.append("email",e.email),a.append("birthday",e.birthday),a.append("phone",e.phone),a.append("city",e.city),d(!c),x(!1),console.log(e),p((0,X.updateUser)(e)),t.resetForm()},validationSchema:B.IK});return(0,m.jsxs)("div",{className:P,children:[(0,m.jsxs)("form",{onSubmit:j.handleSubmit,children:[(0,m.jsx)("div",{className:c?L:"".concat(L," ").concat(S),children:n?(0,m.jsx)("img",{className:D,src:URL.createObjectURL(n),alt:"avatar"}):null!==e&&void 0!==e&&e.avatarURL?(0,m.jsx)("img",{className:D,src:e.avatarURL,alt:"avatar"}):(0,m.jsx)(r.BM,{})}),!c&&_&&(0,m.jsxs)("div",{className:E,children:[(0,m.jsxs)("button",{className:K,type:"button",onClick:function(){return x(!1)},children:[" ",(0,m.jsx)(r.nQ,{style:{stroke:"#54ADFF"}})]}),(0,m.jsx)("span",{className:H,children:"Confirm"}),(0,m.jsxs)("button",{className:K,type:"button",onClick:function(){x(!1),j.setFieldValue("avatarURL",""),i(null)},children:[" ",(0,m.jsx)(r.Hb,{style:{stroke:"#F43F5E"}})]})]}),(0,m.jsxs)("label",{className:V,children:[!c&&!_&&(0,m.jsxs)("button",{className:T,type:"button",onClick:function(){return x(!0)},children:[(0,m.jsx)(r.xm,{className:J})," Edit photo"]}),(0,m.jsx)("input",{className:z,name:"avatarURL",type:"file",disabled:c,onChange:function(e){j.setFieldValue("avatarURL",e),i(e.target.files[0])},accept:"image/*,.png,.jpg,.gif,.web"})]}),(0,m.jsxs)("div",{className:O,children:[(0,m.jsx)(Z,{text:"Name",name:"name",type:"text",isActive:c,onChange:j.handleChange,value:j.values.name,error:j.touched.name&&j.errors.name,helperText:j.errors.name}),(0,m.jsx)(Z,{text:"Email",name:"email",type:"email",isActive:c,onChange:j.handleChange,value:j.values.email,error:j.touched.email&&j.errors.email,helperText:j.errors.email}),(0,m.jsx)(Z,{text:"Birthday",name:"birthday",type:"date",isActive:c,onChange:j.handleChange,value:j.values.birthday,error:j.touched.birthday&&j.errors.birthday,helperText:j.errors.birthday}),(0,m.jsx)(Z,{text:"Phone",name:"phone",type:"tel",isActive:c,onChange:j.handleChange,value:j.values.phone,error:j.touched.phone&&j.errors.phone,helperText:j.errors.phone}),(0,m.jsx)(Z,{text:"City",name:"city",type:"text",isActive:c,onChange:j.handleChange,value:j.values.city,error:j.touched.city&&j.errors.city,helperText:j.errors.city})]}),!c&&(0,m.jsx)("div",{className:Y,children:(0,m.jsx)("button",{className:Q,type:"submit",children:"Save"})})]}),c?(0,m.jsx)("button",{className:w,type:"button",onClick:function(){return d(!c)},children:(0,m.jsx)(r.dY,{})}):(0,m.jsx)("button",{className:w,type:"reset",onClick:function(){j.resetForm(),d(!c),i(null),x(!1)},children:(0,m.jsx)(r.Hb,{className:M})}),c&&(0,m.jsx)(ee,{})]})},ae={title:"UserData_title__qB2+m"},se=function(){return(0,m.jsxs)("div",{className:ae.box,children:[(0,m.jsx)("h2",{className:ae.title,children:"My information:"}),(0,m.jsx)(te,{})]})},ne=a(4289),re="UserPage_box__E7q34",ie=function(){var e=(0,$.v9)(ne.xN),t=(0,A.useState)(!0),a=(0,s.Z)(t,2),r=a[0],i=a[1],l=(0,A.useState)(e),o=(0,s.Z)(l,2),c=o[0],d=o[1];console.log(e,"new");var _=function(){d(!c),i(!r)};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(n.Z,{children:(0,m.jsxs)("div",{className:re,children:[(0,m.jsx)(se,{}),(0,m.jsx)(C,{})]})}),c&&(0,m.jsx)(h.Z,{toggleModal:_,children:(0,m.jsx)(u,{toggleModal:_})})]})}},5996:function(e,t,a){a.d(t,{IK:function(){return o},dm:function(){return l},gY:function(){return i}});var s=a(6727),n=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,16}$/,r=/.+@.+\..+/i,i=s.Ry().shape({username:s.Z_().min(2).max(16).required("Required"),email:s.Z_().email(r,"Please enter a valid email").required("Required"),password:s.Z_().matches(n,"The password must have 1 uppercase letter, 1 lowercase letter and 1 number").required("Required"),confirmPassword:s.Z_().oneOf([s.iH("password"),null],"Password must match").required("Required")}),l=s.Ry().shape({email:s.Z_().email("Please enter a valid email").required("Required"),password:s.Z_().matches(n,"Not valid password").required("Required")}),o=s.Ry().shape({avatarURL:s.nK(),name:s.Z_().required("Required").matches(/^[a-z\u0430-\u044f\u0451]{2,16}$/i,"Enter a valid Name"),email:s.Z_().trim().required("Required").matches(r,"Enter a valid Email"),birthday:s.Z_().required("Required"),phone:s.Z_().required("Required"),city:s.Z_().required("Required")})},9723:function(e,t,a){e.exports=a.p+"static/media/404-dsc-1x.e3d28be18b648a4932e8.png"}}]);
//# sourceMappingURL=625.747b12c1.chunk.js.map