(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[6],{37:function(e,t,c){e.exports={card:"Card_card__1CApO"}},38:function(e,t,c){e.exports={form:"QuoteForm_form__10wcH",control:"QuoteForm_control__1SG0D",actions:"QuoteForm_actions__qFNAm",loading:"QuoteForm_loading__3ZnWb"}},51:function(e,t,c){"use strict";c.r(t);var n=c(0),o=c.n(n),r=c(33),a=c(37),s=c.n(a),i=c(1),u=function(e){return Object(i.jsx)("div",{className:s.a.card,children:e.children})},l=c(13),d=c(38),j=c.n(d),b=function(e){var t=Object(n.useState)(!1),c=Object(r.a)(t,2),a=(c[0],c[1]),s=Object(n.useRef)(null),d=Object(n.useRef)(null);return Object(i.jsx)(o.a.Fragment,{children:Object(i.jsx)(u,{children:Object(i.jsxs)("form",{onFocus:function(){a(!0)},className:j.a.form,onSubmit:function(t){t.preventDefault();var c=s.current.value,n=d.current.value;e.onAddQuote({author:c,text:n})},children:[e.isLoading&&Object(i.jsx)("div",{className:j.a.loading,children:Object(i.jsx)(l.a,{})}),Object(i.jsxs)("div",{className:j.a.control,children:[Object(i.jsx)("label",{htmlFor:"author",children:"Author"}),Object(i.jsx)("input",{type:"text",id:"author",ref:s})]}),Object(i.jsxs)("div",{className:j.a.control,children:[Object(i.jsx)("label",{htmlFor:"text",children:"Text"}),Object(i.jsx)("textarea",{id:"text",rows:5,ref:d})]}),Object(i.jsx)("div",{className:j.a.actions,children:Object(i.jsx)("button",{onClick:function(){a(!1)},className:"btn",children:"Add Quote"})})]})})})},m=c(2),x=c(31),O=c(32);t.default=function(){var e=Object(x.a)(O.b),t=e.sendRequest,c=e.status,r=Object(m.g)();Object(n.useEffect)((function(){"completed"===c&&r.push("/quotes")}),[c,r]);return Object(i.jsx)(o.a.Fragment,{children:Object(i.jsx)(b,{isLoading:"pending"===c,onAddQuote:function(e){console.log(e),t(e)}})})}}}]);
//# sourceMappingURL=6.39ce3096.chunk.js.map