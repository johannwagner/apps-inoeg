"use strict";(self.webpackChunk_kiebitz_apps_ffm=self.webpackChunk_kiebitz_apps_ffm||[]).push([[2916],{"./node_modules/@carbon/icons-react/es/Icon-a8cbe70a.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{I:()=>Icon,_:()=>Icon_a8cbe70a_objectWithoutProperties,a:()=>_extends});var _excluded=["width","height","viewBox"],_excluded2=["tabindex"],defaultAttributes={focusable:"false",preserveAspectRatio:"xMidYMid meet"};function getAttributes(){var _ref=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},width=_ref.width,height=_ref.height,_ref$viewBox=_ref.viewBox,viewBox=void 0===_ref$viewBox?"0 0 ".concat(width," ").concat(height):_ref$viewBox,attributes=_objectWithoutProperties(_ref,_excluded),tabindex=attributes.tabindex,rest=_objectWithoutProperties(attributes,_excluded2),iconAttributes=_objectSpread2(_objectSpread2(_objectSpread2({},defaultAttributes),rest),{},{width,height,viewBox});return iconAttributes["aria-label"]||iconAttributes["aria-labelledby"]||iconAttributes.title?(iconAttributes.role="img",null!=tabindex&&(iconAttributes.focusable="true",iconAttributes.tabindex=tabindex)):iconAttributes["aria-hidden"]=!0,iconAttributes}var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),react=__webpack_require__("./node_modules/react/index.js");function Icon_a8cbe70a_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function Icon_a8cbe70a_objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?Icon_a8cbe70a_ownKeys(Object(source),!0).forEach((function(key){Icon_a8cbe70a_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):Icon_a8cbe70a_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function Icon_a8cbe70a_defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function Icon_a8cbe70a_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function Icon_a8cbe70a_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Icon_a8cbe70a_excluded=["className","children","tabIndex"],Icon_a8cbe70a_excluded2=["tabindex"],Icon=react.forwardRef((function Icon(_ref,ref){var className=_ref.className,children=_ref.children,tabIndex=_ref.tabIndex,_getAttributes=getAttributes(Icon_a8cbe70a_objectSpread2(Icon_a8cbe70a_objectSpread2({},Icon_a8cbe70a_objectWithoutProperties(_ref,Icon_a8cbe70a_excluded)),{},{tabindex:tabIndex})),tabindex=_getAttributes.tabindex,props=Icon_a8cbe70a_objectWithoutProperties(_getAttributes,Icon_a8cbe70a_excluded2);return className&&(props.className=className),null!=tabindex&&(props.tabIndex=tabindex),ref&&(props.ref=ref),react.createElement("svg",props,children)}));Icon.displayName="Icon",Icon.propTypes={"aria-hidden":prop_types_default().string,"aria-label":prop_types_default().string,"aria-labelledby":prop_types_default().string,children:prop_types_default().node,className:prop_types_default().string,height:prop_types_default().oneOfType([prop_types_default().number,prop_types_default().string]),preserveAspectRatio:prop_types_default().string,tabIndex:prop_types_default().string,viewBox:prop_types_default().string,width:prop_types_default().oneOfType([prop_types_default().number,prop_types_default().string]),xmlns:prop_types_default().string},Icon.defaultProps={xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid meet"}},"./src/apps/common/ProviderCard.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default});var apps_data__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/apps/data.ts"),_ProviderCard__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/apps/common/ProviderCard.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={component:_ProviderCard__WEBPACK_IMPORTED_MODULE_1__.F};const Default=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ProviderCard__WEBPACK_IMPORTED_MODULE_1__.F,{provider:apps_data__WEBPACK_IMPORTED_MODULE_0__.a[0]});Default.displayName="Default",Default.parameters={storySource:{source:"() => <ProviderCard provider={providers[0]} />"},...Default.parameters}},"./src/apps/common/ProviderCard.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>ProviderCard});var _carbon_icons_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@carbon/icons-react/es/__generated__/bucket-0.js"),clsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),ui__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/ui/index.ts")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ProviderCard=_ref=>{let{provider,className}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.Z)("flex justify-between p-4 rounded-2xl border-2 border-black","hover:border-highlight hover:shadow-provider",className),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ui__WEBPACK_IMPORTED_MODULE_1__.Dx,{variant:"h3",children:provider.name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("address",{children:[provider.street,", ",provider.zipCode," ",provider.city]})]}),provider.accessible&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_carbon_icons_react__WEBPACK_IMPORTED_MODULE_4__.JUI,{})]},provider.id)};ProviderCard.displayName="ProviderCard";try{ProviderCard.displayName="ProviderCard",ProviderCard.__docgenInfo={description:"",displayName:"ProviderCard",props:{provider:{defaultValue:null,description:"",name:"provider",required:!0,type:{name:"PublicProvider"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/apps/common/ProviderCard.tsx#ProviderCard"]={docgenInfo:ProviderCard.__docgenInfo,name:"ProviderCard",path:"src/apps/common/ProviderCard.tsx#ProviderCard"})}catch(__react_docgen_typescript_loader_error){}}}]);