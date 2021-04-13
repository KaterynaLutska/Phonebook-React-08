(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{33:function(t,e,n){},38:function(t,e,n){},39:function(t,e,n){},63:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=(n(33),n(34),n(13)),o=n.n(r),s=n(8),i=n(9),u=n(11),b=n(10),l=(n(38),n(39),n(1)),j=function(t){var e=t.children;return Object(l.jsx)("div",{className:"Container",children:e})},d=n(4),h=n(6),f=n(12),m=n.n(f),O=n(2),p=Object(O.b)("contacts/fetchContactsRequest"),g=Object(O.b)("contacts/fetchContactsSuccess"),v=Object(O.b)("contacts/fetchContactsError"),x=Object(O.b)("contacts/addContactsRequest"),C=Object(O.b)("contacts/addContactsSuccess"),y=Object(O.b)("contacts/addContactsError"),N=Object(O.b)("contacts/deleteContactsRequest"),k=Object(O.b)("contacts/deleteContactsSuccess"),A=Object(O.b)("contacts/deleteContactsError"),S=Object(O.b)("phonebook/FILTER");m.a.defaults.baseURL="http://localhost:4040";var w,F,L=function(){return function(t){t(p()),m.a.get("/contacts").then((function(e){var n=e.data;return t(g(n))})).catch((function(e){return t(v(e))}))}},q=function(t){return function(e){e(x()),m.a.post("/contacts",t).then((function(t){var n=t.data;e(C(n))})).catch((function(t){return e(y(t))}))}},z=function(t){return function(e){e(N()),m.a.delete("/contacts/".concat(t)).then((function(){e(k(t))})).catch((function(t){return e(A(t))}))}},D=n(14),E=function(t){return t.contacts.items},R=function(t){return t.contacts.filter},I={contactsArray:E,getFilter:R,getVisibleContacts:Object(D.a)([E,R],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}))},T=n(16),J=n(3),M=Object(O.c)([],(w={},Object(d.a)(w,g,(function(t,e){return e.payload})),Object(d.a)(w,C,(function(t,e){var n=e.payload;return[].concat(Object(T.a)(t),[n])})),Object(d.a)(w,k,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),w)),Z=Object(O.c)("",Object(d.a)({},S,(function(t,e){return e.payload}))),B=Object(O.c)(!1,(F={},Object(d.a)(F,p,(function(){return!0})),Object(d.a)(F,g,(function(){return!1})),Object(d.a)(F,v,(function(){return!1})),Object(d.a)(F,x,(function(){return!0})),Object(d.a)(F,C,(function(){return!1})),Object(d.a)(F,y,(function(){return!1})),Object(d.a)(F,N,(function(){return!0})),Object(d.a)(F,k,(function(){return!1})),Object(d.a)(F,A,(function(){return!1})),F)),V=Object(O.c)(null,{}),P=Object(J.c)({items:M,loading:B,filter:Z,error:V}),U=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:"",message:""},t.handleChange=function(e){var n=e.currentTarget,c=n.name,a=n.value;t.setState(Object(d.a)({},c,a))},t.handleSubmit=function(e){e.preventDefault();var n,c=t.props.contacts,a=t.state,r=a.name,o=a.number,s=a.message;return t.reset(),c.find((function(t){return t.name.toLowerCase()===r.toLowerCase()}))?alert("".concat(r," is already in contacts")):c.some((function(t){return t.number===o}))?alert("Number ".concat(o," is already in contacts")):(n={name:r,number:o,message:s},t.props.onSubmit(n))},t.reset=function(){t.setState({name:"",number:"",message:""})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number,c=t.message;return Object(l.jsx)("div",{className:"phonebook",children:Object(l.jsxs)("form",{onSubmit:this.handleSubmit,className:"phonebook-form",children:[Object(l.jsxs)("div",{className:"phonebook-input-fielsds",children:[Object(l.jsx)("label",{htmlFor:this.nameInputId,className:"phonebook-label",children:Object(l.jsx)("input",{className:"phonebook-input",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",value:e,title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",placeholder:"name",onChange:this.handleChange,required:!0})}),Object(l.jsx)("label",{className:"phonebook-label",children:Object(l.jsx)("input",{className:"phonebook-input",type:"tel",name:"number",value:n,pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",placeholder:"number",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",onChange:this.handleChange,required:!0})})]}),Object(l.jsxs)("div",{className:"msg",children:[Object(l.jsx)("textarea",{placeholder:"more information",className:"textarea",name:"message",value:c,onChange:this.handleChange}),Object(l.jsx)("button",{type:"submit",className:"btn",children:"Add contact"})]})]})})}}]),n}(c.Component),$=Object(h.b)((function(t){return{contacts:I.contactsArray(t)}}),(function(t){return{onSubmit:function(e){return t(q(e))}}}))(U),G=n(15),H=n.n(G),K=function(t){var e=t.filter,n=t.changeFilter;return Object(l.jsx)("div",{className:"filter",children:Object(l.jsx)("label",{children:Object(l.jsx)("input",{className:"filter-input",type:"text",value:e,placeholder:"find contacts by name...",onChange:n})})})},Q=Object(h.b)((function(t){return{filter:I.getFilter(t)}}),(function(t){return{changeFilter:function(e){return t(S(e.target.value))}}}))(K);K.protoType={filter:H.a.string,changeFilter:H.a.func};var W=function(t){var e=t.contacts,n=t.onDelete;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("ul",{className:"contact-list",children:e.map((function(t){return Object(l.jsxs)("li",{className:"contact-item",children:[t.name+":",Object(l.jsx)("span",{className:"contact-span",children:t.number}),Object(l.jsx)("p",{className:"contact-message",children:t.message}),Object(l.jsx)("button",{onClick:function(){return n(t.id)},className:"btn",children:"Delete"})]},t.id)}))})})},X=Object(h.b)((function(t){return{contacts:I.getVisibleContacts(t)}}),(function(t){return{onDelete:function(e){return t(z(e))}}}))(W),Y=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){var t=this.props.items;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"Phonebook"}),Object(l.jsx)($,{}),t.length>0&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h2",{children:"Contacts"}),Object(l.jsx)(Q,{}),Object(l.jsx)(X,{})]})]})}}]),n}(c.Component),_=Object(h.b)((function(t){return{items:I.contactsArray(t)}}),(function(t){return{fetchContacts:function(){return t(L())}}}))(Y),tt=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(j,{children:Object(l.jsx)(_,{})})})}}]),n}(c.Component),et=n(31),nt=n.n(et),ct=n(7),at=[].concat(Object(T.a)(Object(O.d)({serializableCheck:{ignoredActions:[ct.a,ct.f,ct.b,ct.c,ct.d,ct.e]}})),[nt.a]),rt=Object(O.a)({reducer:{contacts:P},middleware:at,devTools:!1});o.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(h.a,{store:rt,children:Object(l.jsx)(tt,{})})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.fc24893b.chunk.js.map