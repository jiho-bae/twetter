(this.webpackJsonptwetter=this.webpackJsonptwetter||[]).push([[0],{36:function(e,t,n){"use strict";(function(e){var a=n(11),r=n.n(a),c=n(18),s=n(10),i=n(7),u=n(2),o=n(13),l=n(21),j=n(1);t.a=function(t){var n=t.twettObj,a=t.isOwner,d=Object(u.useState)(!1),b=Object(s.a)(d,2),p=b[0],f=b[1],O=Object(u.useState)(n.text),h=Object(s.a)(O,2),x=h[0],m=h[1],v=function(){var t=Object(c.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.confirm("Are you sure you want to delete this twett?")){t.next=6;break}return t.next=4,i.b.doc("twetts/".concat(n.id)).delete();case 4:return t.next=6,i.d.refFromURL(n.savedFileUrl).delete();case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),g=function(){return f((function(e){return!e}))},y=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,i.b.doc("twetts/".concat(n.id)).update({text:x});case 3:f(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsx)("div",{className:"twett",children:p?Object(j.jsx)(j.Fragment,{children:a&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("form",{onSubmit:y,className:"container twettEdit",children:[Object(j.jsx)("input",{type:"text",placeholder:"Edit your twett",value:x,required:!0,onChange:function(e){var t=e.target.value;m(t)}}),Object(j.jsx)("input",{type:"submit",value:"Update Twett",className:"formBtn"})]}),Object(j.jsx)("span",{onClick:g,className:"formBtn cancelBtn",children:"Cancel"})]})}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h4",{children:n&&n.text}),n.savedFileUrl&&Object(j.jsx)("img",{src:n.savedFileUrl}),a&&Object(j.jsxs)("div",{class:"twett__actions",children:[Object(j.jsx)("span",{onClick:v,children:Object(j.jsx)(o.a,{icon:l.d})}),Object(j.jsx)("span",{onClick:g,children:Object(j.jsx)(o.a,{icon:l.a})})]})]})})}}).call(this,n(20))},56:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(35),c=n.n(r),s=n(10),i=n(23),u=n(6),o=n(11),l=n.n(o),j=n(18),d=n(7),b=n(1),p=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),i=Object(s.a)(c,2),u=i[0],o=i[1],p=Object(a.useState)(!0),f=Object(s.a)(p,2),O=f[0],h=f[1],x=Object(a.useState)(),m=Object(s.a)(x,2),v=m[0],g=m[1],y=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?r(a):o(a)},w=function(){var e=Object(j.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!O){e.next=8;break}return e.next=5,d.a.createUserWithEmailAndPassword(n,u);case 5:a=e.sent,e.next=11;break;case 8:return e.next=10,d.a.signInWithEmailAndPassword(n,u);case 10:a=e.sent;case 11:console.log(a),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),g(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("form",{onSubmit:w,className:"container",children:[Object(b.jsx)("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:n,onChange:y,className:"authInput"}),Object(b.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:u,onChange:y,className:"authInput"}),Object(b.jsx)("input",{type:"submit",className:"authInput authSubmit",value:O?"Create Account":"Log In"}),v&&Object(b.jsx)("span",{className:"authError",children:v})]}),Object(b.jsx)("span",{onClick:function(){return h((function(e){return!e}))},className:"authSwitch",children:O?"Sign In":"Create Account"})]})},f=n(13),O=n(24),h=function(){var e=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?a=new d.c.auth.GoogleAuthProvider:"github"===n&&(a=new d.c.auth.GithubAuthProvider),e.next=4,d.a.signInWithPopup(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"authContainer",children:[Object(b.jsx)(f.a,{icon:O.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(b.jsx)(p,{}),Object(b.jsxs)("div",{className:"authBtns",children:[Object(b.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Continue with Google ",Object(b.jsx)(f.a,{icon:O.b})]}),Object(b.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["Continue with Github ",Object(b.jsx)(f.a,{icon:O.a})]})]})]})},x=n(39),m=n(36),v=n(37),g=n(21),y=function(e){var t=e.userObj,n=Object(a.useState)(""),r=Object(s.a)(n,2),c=r[0],i=r[1],u=Object(a.useState)(""),o=Object(s.a)(u,2),p=o[0],O=o[1],h=function(){var e=Object(j.a)(l.a.mark((function e(n){var a,r,s,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==c){e.next=2;break}return e.abrupt("return");case 2:if(n.preventDefault(),a="",""===p){e.next=12;break}return r=d.d.ref().child("".concat(t.uid,"/").concat(Object(v.v4)())),e.next=8,r.putString(p,"data_url");case 8:return s=e.sent,e.next=11,s.ref.getDownloadURL();case 11:a=e.sent;case 12:return u={text:c,createdAt:Date.now(),creatorId:t.uid,savedFileUrl:a},e.next=15,d.b.collection("twetts").add(u);case 15:i(""),O("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("form",{onSubmit:h,className:"factoryForm",children:[Object(b.jsxs)("div",{className:"factoryInput__container",children:[Object(b.jsx)("input",{className:"factoryInput__input",value:c,onChange:function(e){var t=e.target.value;i(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(b.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(b.jsxs)("label",{for:"attach-file",className:"factoryInput__label",children:[Object(b.jsx)("span",{children:"Add photos"}),Object(b.jsx)(f.a,{icon:g.b})]}),Object(b.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;O(t)},n.readAsDataURL(t)},style:{opacity:0}}),p&&Object(b.jsxs)("div",{className:"factoryForm__fileUrl",children:[Object(b.jsx)("img",{src:p,style:{backgroundImage:p}}),Object(b.jsxs)("div",{className:"factoryForm__clear",onClick:function(){return O("")},children:[Object(b.jsx)("span",{children:"Remove"}),Object(b.jsx)(f.a,{icon:g.c})]})]})]})},w=function(e){var t=e.userObj,n=Object(a.useState)(""),r=Object(s.a)(n,2),c=r[0],i=r[1];return Object(a.useEffect)((function(){d.b.collection("twetts").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(x.a)({id:e.id},e.data())}));i(t)}))}),[]),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(y,{userObj:t}),Object(b.jsx)("div",{style:{marginTop:30},children:c&&c.map((function(e){return Object(b.jsx)(m.a,{twettObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},N=function(e){var t=e.refreshUser,n=e.userObj,r=Object(a.useState)(n.displayName),c=Object(s.a)(r,2),i=c[0],o=c[1],p=Object(u.g)(),f=function(){var e=Object(j.a)(l.a.mark((function e(a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),n.displayName===i){e.next=5;break}return e.next=4,n.updateProfile({displayName:i});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("form",{onSubmit:f,className:"profileForm",children:[Object(b.jsx)("input",{onChange:function(e){var t=e.target.value;o(t)},type:"text",autoFocus:!0,placeholder:"Display name",value:i,className:"formInput"}),Object(b.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})," "]}),Object(b.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){d.a.signOut(),p.push("/"),t()},children:"Log Out"})]})},k=function(e){var t=e.userObj;return Object(b.jsx)("nav",{children:Object(b.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(b.jsx)("li",{children:Object(b.jsx)(i.b,{to:"/",style:{marginRight:10},children:Object(b.jsx)(f.a,{icon:O.c,color:"#04AAFF",size:"2x"})})}),Object(b.jsx)("li",{children:Object(b.jsxs)(i.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(b.jsx)(f.a,{icon:g.e,color:"#04AAFF",size:"2x"}),Object(b.jsx)("span",{style:{marginTop:10},children:t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile"})]})})]})})},C=function(e){var t=e.refreshUser,n=e.isLoggedIn,a=e.userObj;return Object(b.jsxs)(i.a,{children:[n&&Object(b.jsx)(k,{userObj:a}),Object(b.jsx)(u.d,{children:n?Object(b.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(b.jsx)(u.b,{exact:!0,path:"/",children:Object(b.jsx)(w,{userObj:a})}),Object(b.jsx)(u.b,{exact:!0,path:"/profile",children:Object(b.jsx)(N,{userObj:a,refreshUser:t})}),Object(b.jsx)(u.a,{fro:"*",to:"/"})]}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(u.b,{exact:!0,path:"/",children:Object(b.jsx)(h,{})}),Object(b.jsx)(u.a,{fro:"*",to:"/"})]})})]})};var I=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(null),i=Object(s.a)(c,2),u=i[0],o=i[1];return Object(a.useEffect)((function(){d.a.onAuthStateChanged((function(e){o(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null),r(!0)}))}),[]),Object(b.jsx)(b.Fragment,{children:n?Object(b.jsx)(C,{isLoggedIn:Boolean(u),userObj:u,refreshUser:function(){var e=d.a.currentUser;o({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})}}):"Initializing..."})};n(56);c.a.render(Object(b.jsx)(I,{}),document.getElementById("root"))},7:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"d",(function(){return i}));var a=n(25);n(45),n(58),n(59);a.a.initializeApp({apiKey:"AIzaSyDklyMIHVFs7WHRCuLf5UlBCAT9iA6uArQ",authDomain:"twetter-4da9d.firebaseapp.com",projectId:"twetter-4da9d",storageBucket:"twetter-4da9d.appspot.com",messagingSenderId:"145280703275",appId:"1:145280703275:web:dd687bcc359d28a03dc36e"});var r=a.a,c=a.a.auth(),s=a.a.firestore(),i=a.a.storage()}},[[57,1,2]]]);
//# sourceMappingURL=main.90e17e74.chunk.js.map