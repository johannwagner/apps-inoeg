"use strict";(self.webpackChunk_kiebitz_apps_ffm=self.webpackChunk_kiebitz_apps_ffm||[]).push([[1449],{"./src/ui/Field.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default});__webpack_require__("./node_modules/react/index.js");var _Field__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/ui/Field.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={component:_Field__WEBPACK_IMPORTED_MODULE_1__.g,args:{name:"field",children:"Field"}};const Default=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Field__WEBPACK_IMPORTED_MODULE_1__.g,{...args});Default.displayName="Default",Default.parameters={storySource:{source:"(args) => (\n    <Field {...args} />\n)"},...Default.parameters}},"./src/ui/Error.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>Error});var clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const Error=_ref=>{let{children,className,...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("field-error",className),...props,children})};Error.displayName="Error";try{Error.displayName="Error",Error.__docgenInfo={description:"",displayName:"Error",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/Error.tsx#Error"]={docgenInfo:Error.__docgenInfo,name:"Error",path:"src/ui/Error.tsx#Error"})}catch(__react_docgen_typescript_loader_error){}},"./src/ui/Field.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>Field});var clsx__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react_hook_form__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs")),_Error__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/ui/Error.tsx"),_Label__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/ui/Label.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Field=_ref=>{var _formContext$formStat,_formContext$formStat2,_formContext$formStat3;let{children,name,className,label,description,id,inline,required,as,...props}=_ref;const Element=as||"div",formContext=(0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.Gc)(),error=!!formContext&&(null===(_formContext$formStat=formContext.formState)||void 0===_formContext$formStat||null===(_formContext$formStat2=_formContext$formStat.errors)||void 0===_formContext$formStat2||null===(_formContext$formStat3=_formContext$formStat2[name])||void 0===_formContext$formStat3?void 0:_formContext$formStat3.message);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(Element,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_5__.Z)("field",{"field-inline":inline},className),...props,children:[label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Label__WEBPACK_IMPORTED_MODULE_3__._,{id,required,children:label}),children,error&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Error__WEBPACK_IMPORTED_MODULE_2__.j,{children:error}),!error&&description&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"hint",children:description})]})};Field.displayName="Field";try{Field.displayName="Field",Field.__docgenInfo={description:"",displayName:"Field",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},inline:{defaultValue:null,description:"",name:"inline",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"p"'},{value:'"div"'},{value:'"label"'},{value:'"span"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/Field.tsx#Field"]={docgenInfo:Field.__docgenInfo,name:"Field",path:"src/ui/Field.tsx#Field"})}catch(__react_docgen_typescript_loader_error){}},"./src/ui/Label.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>Label});var clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const Label=_ref=>{let{children,id,className,required,...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("label",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("label",className),htmlFor:id,...props,children:[children," ",required?"(*)":null]})};Label.displayName="Label";try{Label.displayName="Label",Label.__docgenInfo={description:"",displayName:"Label",props:{required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/Label.tsx#Label"]={docgenInfo:Label.__docgenInfo,name:"Label",path:"src/ui/Label.tsx#Label"})}catch(__react_docgen_typescript_loader_error){}}}]);