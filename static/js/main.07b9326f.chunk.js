(this["webpackJsonpsemantic-gdocs"]=this["webpackJsonpsemantic-gdocs"]||[]).push([[0],{108:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),c=n(19),o=n.n(c),s=n(134),r=n(139),l=n(120),u=Object(l.a)({config:{initialColorMode:"dark",useSystemColorMode:!1},styles:{global:{html:{height:"100%"},body:{height:"100%"},"#root":{height:"100%"}}}}),h=n(126),p=n(121),d=n(125),j=n(140),b=n(122),g=n(123),m=n(124),x=n(3),O=function(){return Object(x.jsx)(p.a,{children:Object(x.jsxs)(j.b,{align:"stretch",spacing:3,children:[Object(x.jsx)(b.a,{as:"h2",size:"lg",pt:4,children:"Convert exported Google Docs HTML to clean, semantic HTML"}),Object(x.jsx)(g.a,{children:"Google Docs can export a document as HTML. But if you want to import that HTML somewhere else, you'll have problems because Docs exports HTML in a way other tools may not understand. This site cleans up the Google Docs export, and gives you clean, semantic HTML that you can import into rich text editors."}),Object(x.jsxs)(g.a,{children:["In Google Docs, go to"," ",Object(x.jsxs)(m.a,{children:["File ",">"," Download As ",">"," Webpage"]}),". Then make sure to un-zip the downloaded zip file. Next, just grab the HTML file, drag it into this site, and drop it on the big button. The ",Object(x.jsx)(g.a,{as:"strong",children:" Clean Output "})," box should now show your cleaned-up HTML code! Just click the copy button to put it in your clipboard. That's all there is to it! Note that you may see some funny characters - but it should render fine."]}),Object(x.jsxs)(g.a,{children:["If you want to copy/paste in HTML, that works too! Just make sure to get everything, especially the ",Object(x.jsx)(m.a,{children:"<head>"})," tag, then paste it all in the",Object(x.jsx)(g.a,{as:"strong",children:" Import "}),"box."]})]})})},f=n(92),y=n(127),v=n(129),w=n(130),k=function(){var e=Object(f.c)(),t=e.colorMode,n=e.toggleColorMode;return Object(x.jsx)(p.a,{as:"nav",paddingY:3,background:"purple.800",children:Object(x.jsx)(d.a,{maxW:"container.xl",children:Object(x.jsxs)(h.a,{justify:"space-between",align:"center",children:[Object(x.jsx)(b.a,{size:"sm",color:"white",children:"Google Docs HTML Cleaner"}),Object(x.jsx)(y.a,{icon:"light"===t?Object(x.jsx)(v.a,{}):Object(x.jsx)(w.a,{}),"aria-label":"light"===t?"Light Mode":"Dark Mode",onClick:function(){return n()}})]})})})},T=n(131),C=function(){return Object(x.jsx)(p.a,{as:"footer",paddingY:3,background:"purple.800",color:"white",children:Object(x.jsx)(d.a,{maxW:"container.xl",children:Object(x.jsxs)(h.a,{justify:"space-between",align:"center",children:[Object(x.jsx)(T.a,{href:"https://twitter.com/WowItsWillWow",isExternal:!0,children:"Made by Will Ockelmann-Wagner"}),Object(x.jsx)(T.a,{href:"https://github.com/will-wow/semantic-gdocs/issues",isExternal:!0,children:"Issues?"})]})})})},D=n(23),M=n(5),S=n(136),L=n(132),H=n(135),E=n(137),I=n(138),W=n(88),F=n(35),$=n(56),z=n(38),Y=n.n(z),B=n(79),R=/<style[^>]*>.*<\/style>/g,A=/<p><\/p>/g,G=/<div><\/div>/g,P=/<br\s*\/?>/g,J=new(function(){function e(){var t=this;Object(F.a)(this,e),this.inputText="",this.$iframe=Y()('<iframe id="input-zone" style="display: none" />'),this.styleTags=[],this.$input=Y()('<div id="input"></div>'),this.wrapElementWithStyle=function(e,t,n,i){e.css(t)===n&&e.wrap(i)},this.getOutputText=function(e){var n=t.$input.html().replace(/<span[^>]*>/g,"").replace(/<\/span>/g,"");return e||(n=t.removeLineBreaks(n)),t.cleanHtmlOutput(n)},this.removeLineBreaks=function(e){return e.replace(A,"").replace(G,"").replace(P,"")},this.processInput=function(e,n){if(t.inputText=e,!t.inputText)return"";t.pullStyleTagsIntoDom(),t.stripHeadTag(),t.putInputOntoDom(),t.makeElementsSemantic();var i=t.getOutputText(n);return t.cleanUp(),i},Y()(document.body).append(this.$iframe),this.body.append(this.$input)}return Object($.a)(e,[{key:"body",get:function(){return this.$iframe.contents().find("body")}},{key:"tearDown",value:function(){this.$iframe.remove()}},{key:"pullStyleTagsIntoDom",value:function(){var e=this,t=this.inputText.match(R);t&&(t.forEach((function(t){var n=Y()(t);e.body.append(n)})),this.inputText=this.inputText.replace(R,""))}},{key:"stripHeadTag",value:function(){this.inputText=this.inputText.replace("<!DOCTYPE html>","").replace("<html>","").replace("</html>","").replace(/<head[^>]*>.*<\/head>/g,"").replace(/<body[^>]*>/,"").replace("</body>","")}},{key:"putInputOntoDom",value:function(){this.$input.html(this.inputText)}},{key:"makeElementSemantic",value:function(e){this.wrapElementWithStyle(e,"font-style","italic","<em></em>"),this.wrapElementWithStyle(e,"font-weight","bold","<strong></strong>"),this.wrapElementWithStyle(e,"font-weight","700","<strong></strong>"),this.wrapElementWithStyle(e,"text-decoration","line-through","<s></s>"),this.wrapElementWithStyle(e,"text-decoration","underline","<u></u>")}},{key:"makeElementsSemantic",value:function(){var e=this;this.$input.find("*").each((function(t,n){var i=Y()(n);e.makeElementSemantic(i),i.removeAttr("class")}))}},{key:"cleanHtmlOutput",value:function(e){return Object(B.html_beautify)(e)}},{key:"cleanUp",value:function(){this.body.find("style").remove(),this.$input.html("")}}]),e}()),N=n(89),U=n(87),_=function(e){var t=e.children,n=void 0===t?"":t,a=e.whenDragging,c=void 0===a?"":a,o=e.noDrag,s=void 0!==o&&o,r=e.noClick,l=void 0!==r&&r,u=e.onChange,h=Object(N.a)(e,["children","whenDragging","noDrag","noClick","onChange"]),p=Object(i.useCallback)((function(e){e.forEach((function(e){var t=new FileReader;t.onload=function(){u(t.result)},t.readAsText(e)}))}),[u]),d=Object(U.a)({onDrop:p,maxFiles:1,accept:".html",noDrag:s,noClick:l}),j=d.getRootProps,b=d.getInputProps,g=d.isDragActive;return Object(x.jsxs)("div",Object(D.a)(Object(D.a)({},j()),{},{children:[Object(x.jsx)("input",Object(D.a)({},b())),Object(x.jsx)(W.a,Object(D.a)(Object(D.a)({},h),{},{children:g?c:n}))]}))},q=function(){var e=Object(i.useState)(""),t=Object(M.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)(""),o=Object(M.a)(c,2),s=o[0],r=o[1],l=Object(i.useState)(!0),u=Object(M.a)(l,2),d=u[0],b=u[1],g=Object(i.useRef)(null),m=Object(S.a)();Object(i.useEffect)((function(){var e=function(e,t){return J.processInput(e,t)}(n,!d);r(e)}),[n,d]);var O=function(e){"input"===e.target.name?a(e.target.value):r(e.target.value)};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(p.a,{pb:3,children:Object(x.jsx)(_,{colorScheme:"purple",variant:"outline",whenDragging:"Drop your HTML file here!",isFullWidth:!0,onChange:a,children:"Drag HTML files here, or click to open a file picker"})}),Object(x.jsxs)(L.a,{as:"section",templateColumns:"repeat(2, 1fr)",gap:3,children:[Object(x.jsxs)(p.a,{children:[Object(x.jsxs)(h.a,{justify:"space-between",align:"center",pb:2,children:[Object(x.jsx)(K,{children:"Import"}),Object(x.jsx)(V,{disabled:!n,onClick:function(){return a("")},children:"Clear"})]}),Object(x.jsx)(Q,{name:"input",placeholder:"You can paste HTML here.",value:n,onChange:O})]}),Object(x.jsxs)(p.a,{children:[Object(x.jsxs)(h.a,{justify:"space-between",align:"center",pb:2,children:[Object(x.jsxs)(j.a,{children:[Object(x.jsx)(K,{children:"Clean Output"}),Object(x.jsx)(H.a,{label:"If checked, remove any extra line breaks between paragraphs.",hasArrow:!0,placement:"top-start",children:Object(x.jsx)("span",{tabIndex:0,children:Object(x.jsx)(E.a,{colorScheme:"purple",isChecked:d,onChange:function(e){b(e.target.checked)},children:"Remove Line Breaks"})})})]}),Object(x.jsx)(V,{disabled:!s,onClick:function(){X(g.current),m({title:"Output Copied!",description:"You can now paste it wherever.",status:"success",duration:2e3,isClosable:!0})},children:"Copy"})]}),Object(x.jsx)(Q,{placeholder:"Your clean HTML will show up here.",name:"output",value:s,onChange:O,ref:g})]})]})]})},K=function(e){return Object(x.jsx)(b.a,Object(D.a)({as:"h2",size:"md"},e))},Q=Object(i.forwardRef)((function(e,t){return Object(x.jsx)(I.a,Object(D.a)({minHeight:"200px",fontFamily:"mono",fontSize:"sm",ref:t},e))})),V=function(e){return Object(x.jsx)(W.a,Object(D.a)({colorScheme:"purple",size:"xs",name:"output"},e))},X=function(e){e&&(e.select(),e.setSelectionRange(0,99999),document.execCommand("copy"))},Z=function(){return Object(x.jsxs)(h.a,{height:"100%",direction:"column",justify:"space-between",children:[Object(x.jsx)(k,{}),Object(x.jsx)(p.a,{className:"body",flex:1,overflow:"auto",children:Object(x.jsxs)(d.a,{maxW:"container.xl",height:"100%",display:"flex",paddingY:3,flexDirection:"column",justifyContent:"space-between",children:[Object(x.jsx)(p.a,{flex:1,children:Object(x.jsx)(O,{})}),Object(x.jsx)(q,{})]})}),Object(x.jsx)(C,{})]})},ee=function(){return Object(x.jsx)(r.a,{theme:u,children:Object(x.jsx)(Z,{})})},te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,141)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),i(e),a(e),c(e),o(e)}))};o.a.render(Object(x.jsxs)(a.a.StrictMode,{children:[Object(x.jsx)(s.a,{initialColorMode:u.config.initialColorMode}),Object(x.jsx)(ee,{})]}),document.getElementById("root")),te()}},[[108,1,2]]]);
//# sourceMappingURL=main.07b9326f.chunk.js.map