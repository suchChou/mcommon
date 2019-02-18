!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Mcommon=t()}(this,function(){"use strict";var e={name:"MForm",props:{formData:{type:Object,default:function(){return{}}},noWrap:Boolean,labelWidth:{type:String,default:"100px"},columns:Array,size:String},watch:{formData:function(e,t){var n=this;e!==t&&this.$nextTick(function(e){return n.clearValidate()})}},methods:{validate:function(e){if(this.$refs.ruleForm)return this.$refs.ruleForm.validate(e)},resetFields:function(){if(this.$refs.ruleForm)return this.$refs.ruleForm.resetFields()},validateField:function(e,t){if(this.$refs.ruleForm)return this.$refs.ruleForm.validateField(e,t)},clearValidate:function(e){if(this.$refs.ruleForm)return this.$refs.ruleForm.clearValidate(e)},currentObj:function(e,t){this.$emit("currentObj",e,t)},inputChange:function(e,t){this.$emit("inputChange",e,t)},inputEnter:function(e){this.$emit("inputEnter",e)},selectList:function(e,t){this.$emit("selectList",e,t)},setFormSize:function(){var e=this;setTimeout(function(){var t=e.$el.getClientRects()[0]||{},n=t.width,r=t.height,o=t.top,i=t.bottom,l=t.left,a=t.right,u=t.x,s=t.y;e.formSize={width:n,height:r,top:o,bottom:i,left:l,right:a,x:u,y:s},e.isMobile=n<800},100)}},data:function(){return{formSize:{},isMobile:!1}},mounted:function(){var e=this;window.addEventListener("resize",this.setFormSize),this.$once("hook:beforeDestroy",function(){window.removeEventListener("resize",e.setFormSize)}),this.setFormSize()}},t=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",e._b({ref:"ruleForm",staticClass:"m-form",attrs:{model:e.formData,"label-width":e.labelWidth}},"el-form",e.$attrs,!1),[e._l(e.columns,function(t){return n("el-col",{key:t.prop,attrs:{span:e.isMobile&&!e.noWrap?22:t.span||11}},[n("el-form-item",e._b({attrs:{"label-width":t.label?t.labelWidth||e.labelWidth:"10px"}},"el-form-item",t,!1),[n("div",{staticClass:"mform-item"},[e._t(t.prop,[t.slots&&t.slots.left?n("render-item",{attrs:{row:e.formData,column:t,renderItem:t.slots.left}}):e._e(),e._v(" "),n("m-item",{attrs:{column:t,row:e.formData}},["input"===t.el&&t.append&&t.appendCustom?n("template",{slot:t.prop+"_append"},[e._t(t.prop+"_append")],2):e._e()],2),e._v(" "),t.slots&&t.slots.right?n("render-item",{attrs:{row:e.formData,column:t,renderItem:t.slots.right}}):e._e()],{column:t})],2)])],1)}),e._v(" "),e._t("default")],2)};t._withStripped=!0;var n,r,o,i,l,a=(n={render:t,staticRenderFns:[]},o=void 0,i=!1,(l=("function"==typeof(r=e)?r.options:r)||{}).__file="/Users/hanyukai/work/githuab/mComponent/src/components/MForm.vue",l.render||(l.render=n.render,l.staticRenderFns=n.staticRenderFns,l._compiled=!0,i&&(l.functional=!0)),l._scopeId=o,l),u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c={shortcuts:[{text:"今天",onClick:function(e){var t=new Date,n=new Date;e.$emit("pick",[n,t])}},{text:"昨天",onClick:function(e){var t=new Date;t.setTime(t.getTime()-864e5),e.$emit("pick",[t,t])}},{text:"最近一周",onClick:function(e){var t=new Date,n=new Date;n.setTime(n.getTime()-6048e5),e.$emit("pick",[n,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,n=new Date;n.setTime(n.getTime()-2592e6),e.$emit("pick",[n,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,n=new Date;n.setTime(n.getTime()-7776e6),e.$emit("pick",[n,t])}},{text:"最近六个月",onClick:function(e){var t=new Date,n=new Date;n.setTime(n.getTime()-15552e6),e.$emit("pick",[n,t])}},{text:"最近一年",onClick:function(e){var t=new Date,n=new Date;n.setTime(n.getTime()-31536e6),e.$emit("pick",[n,t])}}]},m={name:"MItem",props:{index:{type:Number,default:0},column:{type:Object,required:!0},row:{type:Object,required:!0}},inheritAttrs:!1,data:function(){return{isForce:!1}},computed:{componentType:function(){var e=this.column.el;return e?"mSelect"===e||"MSelect"===e?"m-select":e.startsWith("el-")?e:"el-"+e:null},defaultTime:function(){return this.column.defaultTime?this.column.defaultTime:"daterange"===this.column.type||"datetimerange"===this.column.type?["00:00:00","23:59:59"]:"00:00:00"},valueKey:function(){return this.column.valueKey?this.column.valueKey:{label:"label",value:"value"}},modelComputed:{get:function(){var e=null;try{e=this.getStrFunction("this.row."+this.column.prop)}catch(e){this.setRowKey(null)}return"currency"===this.column.type&&e?this.isForce?e:this.currency(e,this.column.currency,this.column.decimals):e},set:function(e){if(this.column.rules){(Array.isArray(this.column.rules)?this.column.rules.some(function(e){return"number"===e.type}):"number"===this.column.rules.type)&&!isNaN(e)&&(e=Number(e))}"currency"===this.column.type&&(e=isNaN(e)?0:Number(e));try{void 0===this.getStrFunction("this.row."+this.column.prop)?this.setRowKey(e):this.getStrFunction("this.row."+this.column.prop+" = value")}catch(t){this.setRowKey(e)}}}},watch:{"column.type":"formatValue","column.multiple":"formatValue"},methods:{getStrFunction:function(e){return e=e.replace(/(\.\d)/g,"[$1]").replace(/\.\[/g,"["),new Function("return "+e).call(this)},setRowKey:function(e){if(this.column.prop&&this.row){var t=this.column.prop.replace(/\[(\w+)\]/g,".$1").replace(/^\./,"").split("."),n=t.shift(),r=t.length-1;if(r>=0){var o=this.row[n]||{},i=t.reduce(function(t,n,i){return i===r?(t[n]=e,o):(t[n]||(t[n]={}),t[n])},o);this.$set(this.row,n,JSON.parse(JSON.stringify(i)))}else this.$set(this.row,n,e)}},formatValue:function(){if("date-picker"===this.column.el||"mSelect"===this.column.el){var e=this.row[this.column.prop];"daterange"===this.column.type||"datetimerange"===this.column.type||this.column.multiple?e?Array.isArray(e)||(this.row[this.column.prop]=e.split(",")):this.row[this.column.prop]=[]:Array.isArray(e)&&(this.row[this.column.prop]=e[0]?e[0]:null)}},getParams:function(e){var t={};if(e.params&&"object"===u(e.params))for(var n in e.params){var r=void 0;try{r=this.getStrFunction("this.row."+e.params[n])}catch(e){}t[n]=void 0!==r?r:e.params[n]}return t},getpickerOptions:function(e,t){if("daterange"===e&&!1!==t)return c},currentObj:function(e,t){this.column.listeners&&this.column.listeners.currentObj||this.$emit("currentObj",e,t)},currency:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"¥",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2;if(e=parseFloat(e),!isFinite(e)||!e&&0!==e)return"";t=null!=t?t:"",n=null!=n?n:2;var r=Math.abs(e).toFixed(n),o=n?r.slice(0,-1-n):r,i=o.length%3,l=i>0?o.slice(0,i)+(o.length>3?",":""):"",a=n?r.slice(-1-n):"";return(e<0?"-":"")+t+l+o.slice(i).replace(/(\d{3})(?=\d)/g,"$1,")+a}}},p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return"el-input"===e.componentType?n("el-input",e._g(e._b({attrs:{placeholder:void 0!=e.column.placeholder?e.column.placeholder:e.column.label},on:{blur:function(t){e.isForce=!1},focus:function(t){e.isForce=!0}},model:{value:e.modelComputed,callback:function(t){e.modelComputed="string"==typeof t?t.trim():t},expression:"modelComputed"}},"el-input",e.column,!1),e.column.listeners),[e.column.append?n("div",{class:e.column.appendClass,attrs:{slot:"append"},slot:"append"},[e._t(e.column.prop+"_append",[n("div",{on:{click:e.column.listeners.btnClick}},[n("i",{class:e.column.appendIcon}),e._v(" "+e._s(e.column.appendText)+"\n      ")])])],2):e._e()]):"el-select"===e.componentType?n("el-select",e._g(e._b({attrs:{filterable:"",placeholder:void 0!=e.column.placeholder?e.column.placeholder:e.column.label},model:{value:e.modelComputed,callback:function(t){e.modelComputed=t},expression:"modelComputed"}},"el-select",e.column,!1),e.column.listeners),e._l(e.column.list,function(t){return n("el-option",{key:e.column.props?t[e.column.props.value]:t.Value,attrs:{label:e.column.Text?t[e.column.Text]:t.Text,value:e.column.bindObj?t:t.Value}})})):"el-date-picker"===e.componentType?n("el-date-picker",e._g(e._b({attrs:{"default-time":e.defaultTime,placeholder:void 0!=e.column.placeholder?e.column.placeholder:e.column.label,"picker-options":e.column.pickerOptions||e.getpickerOptions(e.column.type,e.column.isNeedFast)},model:{value:e.modelComputed,callback:function(t){e.modelComputed=t},expression:"modelComputed"}},"el-date-picker",e.column,!1),e.column.listeners)):"el-input-number"===e.componentType?n("el-input-number",e._g(e._b({model:{value:e.modelComputed,callback:function(t){e.modelComputed=t},expression:"modelComputed"}},"el-input-number",e.column,!1),e.column.listeners)):"el-checkbox"===e.componentType?n("el-checkbox",e._g(e._b({model:{value:e.modelComputed,callback:function(t){e.modelComputed=t},expression:"modelComputed"}},"el-checkbox",e.column,!1),e.column.listeners),[e._v("\n  "+e._s(e.column.Text)+"\n")]):"el-checkbox-group"===e.componentType?n("el-checkbox-group",e._g(e._b({model:{value:e.modelComputed,callback:function(t){e.modelComputed=t},expression:"modelComputed"}},"el-checkbox-group",e.column,!1),e.column.listeners),e._l(e.column.list,function(t){return n("el-checkbox",e._b({key:t[e.valueKey.label],attrs:{label:e.column.props?t[e.column.props.value]:t[e.valueKey.value]}},"el-checkbox",e.column,!1),[e._v("\n    "+e._s(e.column.props?t[e.column.props.label]:t[e.valueKey.label])+"\n  ")])})):"el-radio"===e.componentType?n("el-radio-group",e._g(e._b({model:{value:e.modelComputed,callback:function(t){e.modelComputed=t},expression:"modelComputed"}},"el-radio-group",e.column,!1),e.column.listeners),e._l(e.column.list,function(t){return n("el-radio",e._b({key:t[e.valueKey.label],attrs:{label:e.column.props?t[e.column.props.value]:t[e.valueKey.value]}},"el-radio",e.column,!1),[e._v("\n    "+e._s(e.column.props?t[e.column.props.label]:t[e.valueKey.label])+"\n  ")])})):"el-cascader"===e.componentType?n("el-cascader",e._g(e._b({attrs:{filterable:"",placeholder:void 0!=e.column.placeholder?e.column.placeholder:e.column.label},model:{value:e.modelComputed,callback:function(t){e.modelComputed=t},expression:"modelComputed"}},"el-cascader",e.column,!1),e.column.listeners)):"el-switch"===e.componentType?n("el-switch",e._g(e._b({model:{value:e.modelComputed,callback:function(t){e.modelComputed=t},expression:"modelComputed"}},"el-switch",e.column,!1),e.column.listeners)):"m-select"===e.componentType?n("m-select",e._g(e._b({attrs:{params:e.getParams(e.column)},model:{value:e.modelComputed,callback:function(t){e.modelComputed=t},expression:"modelComputed"}},"m-select",e.column,!1),e.column.listeners)):n("render-item",{attrs:{row:e.row,value:e.modelComputed,column:e.column,renderItem:e.column.render,format:e.column.format,index:e.index}})};p._withStripped=!0;var d=function(e,t,n,r,o,i,l,a){var u=("function"==typeof n?n.options:n)||{};return u.__file="/Users/hanyukai/work/githuab/mComponent/src/components/MItem.vue",u.render||(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0,o&&(u.functional=!0)),u._scopeId=r,u}({render:p,staticRenderFns:[]},0,m,void 0,!1),f={name:"MSelect",props:{params:{type:Object,default:function(){return{}}},filterable:{type:Boolean,default:!0},clearable:{type:Boolean,default:!0},valueKey:{type:Object,default:function(){return{label:"label",value:"value"}}},nullRequest:Boolean,value:{type:[String,Boolean,Number,Array],default:""},dataList:Array,isDefault:Boolean,multiple:Boolean,showMsg:Boolean,getList:Function},inheritAttrs:!1,data:function(){return{list:[],currentValue:"",loading:!1,selectObj:{}}},watch:{params:{handler:function(e,t){e&&(t?Object.keys(e).some(function(n){return e[n]!==t[n]})&&(this.multiple?this.currentValue=[]:this.currentValue=null,this.pageInit()):this.pageInit())},deep:!0},value:function(e){this.setCurrentValue()},currentValue:function(e){this.$emit("input",e),this.getCurrentObj()},dataList:function(e){this.list=e},list:function(e){var t=this;this.isDefault&&e.length&&(this.currentValue||(this.currentValue=e[0][this.valueKey.value]));var n=e.filter(function(e){return e.checked});!n.length||this.currentValue||Array.isArray(this.currentValue)&&this.currentValue.length||(this.multiple?this.currentValue=n.map(function(e){return e[t.valueKey.value]}):this.currentValue=n[0][this.valueKey.value],this.getCurrentObj())}},created:function(){this.setCurrentValue(),this.dataList?this.list=this.dataList||[]:(this.dataList&&this.currentValue&&this.getCurrentObj(),this.params&&this.pageInit())},methods:{setCurrentValue:function(){this.multiple?Array.isArray(this.value)?this.currentValue=this.value:"string"==typeof this.value&&this.value?this.currentValue=this.value.split(","):this.currentValue=[]:this.currentValue=this.value},pageInit:function(){var e=this,t=Object.keys(this.params);if(t.length&&(t.some(function(t){return null===e.params[t]})&&!this.nullRequest))return;this.getData()},getCurrentObj:function(){var e=this;if(this.list.length){var t=null,n=this.valueKey.value;this.multiple?(t=[],this.currentValue.forEach(function(r){var o=e.list.find(function(e){return e[n]===r});o&&t.push(o)})):t=this.currentValue&&this.list.find(function(t){return t[n]===e.currentValue})||{},this.selectObj=t,this.$emit("currentObj",t)}},remoteMethod:function(e){void 0!==this.$attrs.remote&&!1!==this.$attrs.remote&&null!==this.$attrs.remote&&this.getData({keyWord:e})},getData:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.getList&&(this.loading=!0,this.getList(s({},this.params,t),this.showMsg).then(function(t){var n=Array.isArray(t)?t:t.data||[];if(n.length&&!e.multiple){if(e.currentValue)n.some(function(t){return t[e.valueKey.value]===e.currentValue})||(e.currentValue="");!e.currentValue&&e.isDefault&&(e.currentValue=n[0][e.valueKey.value])}e.list=n,e.getCurrentObj(),e.$emit("selectList",e.list),e.loading=!1}).catch(function(t){return e.loading=!1,Promise.reject(t)}))}}},h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-select",e._g(e._b({staticClass:"m-select",attrs:{loading:e.loading,"loading-text":"加载中",filterable:e.filterable,clearable:e.clearable,"remote-method":e.remoteMethod,multiple:e.multiple},on:{clear:e.remoteMethod},model:{value:e.currentValue,callback:function(t){e.currentValue=t},expression:"currentValue"}},"el-select",e.$attrs,!1),e.$listeners),e._l(e.list,function(t){return n("el-option",{key:t[e.valueKey.value],attrs:{label:t[e.valueKey.label],value:t[e.valueKey.value],disabled:t.disabled}})}))};h._withStripped=!0;var g=function(e,t,n,r,o,i,l,a){var u=("function"==typeof n?n.options:n)||{};return u.__file="/Users/hanyukai/work/githuab/mComponent/src/components/MSelect.vue",u.render||(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0,o&&(u.functional=!0)),u._scopeId=r,u}({render:h,staticRenderFns:[]},0,f,void 0,!1),v=function(e){var t=navigator.userAgent;return"ie"===e?!!(t.indexOf("compatible")>-1&&t.indexOf("MSIE")>-1)&&(new RegExp("MSIE (\\d+\\.\\d+);").test(t),parseFloat(RegExp.$1)):t.indexOf(e)>-1},b=function(e,t,n){var r=n.separator,o=n.quoted,i=t.map(function(e){return o?'"'+(e="string"==typeof e?e.replace(/"/g,'"'):e)+'"':e});e.push(i.join(r))},y={separator:",",quoted:!1},w={_isIE11:function(){var e=0,t=/MSIE (\d+\.\d+);/.test(navigator.userAgent),n=!!navigator.userAgent.match(/Trident\/7.0/),r=navigator.userAgent.indexOf("rv:11.0");return t&&(e=Number(RegExp.$1)),-1!==navigator.appVersion.indexOf("MSIE 10")&&(e=10),n&&-1!==r&&(e=11),11===e},_isEdge:function(){return/Edge/.test(navigator.userAgent)},_getDownloadUrl:function(e){if(window.Blob&&window.URL&&window.URL.createObjectURL){var t=new window.Blob(["\ufeff"+e],{type:"text/csv"});return URL.createObjectURL(t)}return"data:attachment/csv;charset=utf-8,\ufeff"+encodeURIComponent(e)},download:function(e,t){if(v("ie")&&v("ie")<10){var n=window.top.open("about:blank","_blank");n.document.charset="utf-8",n.document.write(t),n.document.close(),n.document.execCommand("SaveAs",e),n.close()}else if(10===v("ie")||this._isIE11()||this._isEdge()){var r=new Blob(["\ufeff"+t],{type:"text/csv"});navigator.msSaveBlob(r,e)}else{var o=document.createElement("a");o.download=e,o.href=this._getDownloadUrl(t),document.body.appendChild(o),o.click(),document.body.removeChild(o)}},format:function(e,t,n){var r=n.noHeader,o=void 0!==r&&r,i=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(n,["noHeader"]);i=Object.assign({},y,i);var l=void 0,a=[],u=[];return e?(l=e.map(function(e){return"string"==typeof e?e:(o||u.push(void 0!==e.label?e.label:e.key),e.key)}),u.length>0&&b(a,u,i)):(l=[],t.forEach(function(e){Array.isArray(e)||(l=l.concat(Object.keys(e)))}),l.length>0&&(l=l.filter(function(e,t,n){return n.indexOf(e)===t}),o||b(a,l,i))),Array.isArray(t)&&t.forEach(function(e){Array.isArray(e)||(e=l.map(function(t){return void 0!==e[t]?e[t]:""})),b(a,e,i)}),a.join("\r\n")}},_={name:"MTable",props:{tableData:{type:Array,default:function(){return[]}},isTree:Boolean,buttonWidth:[String,Number],buttonAlign:{type:String,default:"center"},buttonFixed:{type:String,default:"right"},buttonLabel:{type:String,default:"操作"},reserveSelection:Boolean,layout:{type:String,default:"total,sizes,prev, pager, next, jumper"},showNum:{type:Boolean,default:!0},selectable:{type:Function},numFiexd:Boolean,showPage:{type:Boolean,default:!0},forced:Boolean,showsummary:{type:Boolean,default:!1},summarymethod:{type:Function},border:{type:Boolean,default:!0},stripe:{type:Boolean,default:!1},numTitle:{type:String,default:"序号"},total:Number,selection:{type:Boolean,default:!1},expand:Boolean,columns:{type:Array,default:function(){return[]}},page:{type:Object,default:function(){return{pageNum:1,pageSize:15}}},pageSizes:{type:Array,default:function(){return[15,30,45,60]}}},inheritAttrs:!1,data:function(){return{treeData:this.formatTreeData(this.tableData)}},computed:{cTotal:function(){var e=this.total||this.page&&this.page.total;return e||(this.isTree?this.treeData.length:this.tableData.length)},list:function(){var e=this;if(this.isTree)return this.treeData;var t=this.total||this.page&&this.page.total;return this.showPage||!t?this.tableData:this.tableData.filter(function(t,n){return n>=(e.page.pageNum-1)*e.page.pageSize&&n<e.page.pageNum*e.page.pageSize})},summaryProps:function(){return this.columns.filter(function(e){return e.isSummary}).map(function(e){return e.prop})},isShowSummary:function(){return this.columns.some(function(e){return e.isSummary})}},watch:{tableData:function(){var e=this.total||this.page.total;!e&&isNaN(e)&&(this.page.pageNum=1),this.isTree&&(this.treeData=this.formatTreeData(this.tableData))}},methods:{formatTreeData:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return e.forEach(function(e){if(e.treeLevel=n,r.push(e),e.children&&e.children.length){var o=t.$attrs.rowKey||t.$attrs["row-key"];if(t.treeData&&t.treeData.length&&o){var i=t.treeData.find(function(t){return t[o]===e[o]})||{expandAll:!1};e.expandAll=i.expandAll}void 0===e.expandAll&&(e.expandAll=!1),!0===e.expandAll&&t.formatTreeData(e.children,n+1,r)}}),r},expandClick:function(e){e.row.expandAll=!e.row.expandAll,this.treeData=this.formatTreeData(this.tableData)},toggleRowExpansion:function(){var e;(e=this.$refs.commontable).toggleRowExpansion.apply(e,arguments)},exportCsv:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.filename?-1===e.filename.indexOf(".csv")&&(e.filename+=".csv"):e.filename="table.csv";var t=[],n=[];e.columns&&e.data?(t=e.columns,n=e.data):(t=this.columns,"original"in e||(e.original=!0),n=e.original?this.tableData:this.list);var r=w.format(t,n,e);e.callback?e.callback(r):w.download(e.filename,r)},getKey:function(e){return this.forced?(e||"")+Math.random()*Date.now():e},getColumns:function(e,t){var n=null;return e.listeners&&(n=Object.keys(e.listeners).reduce(function(n,r){return s({},n,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},r,e.listeners[r].bind(null,t)))},{})),s({},e,{disabled:e.disabled||t.row.disabled,readonly:e.readonly||t.row.readonly,listeners:n})},summaryDefault:function(e){var t=this,n=e.columns,r=e.data,o=[];return n.forEach(function(e,n){if(0!==n){if(!(t.summaryProps.indexOf(e.property)<0)){var i=r.map(function(t){return Number(t[e.property])});i.every(function(e){return isNaN(e)})||(o[n]=i.reduce(function(e,t){var n=Number(t);return isNaN(n)?e:e+t},0)),o[n]=parseFloat(o[n]||0).toFixed(2),"currency"===e.className&&o[n]&&(o[n]=(o[n]+"").replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g,"$&,")),"Percentage"===e.className&&o[n]&&(o[n]=o[n]+"%")}}else o[n]="合计"}),o},handleSizeChange:function(e){this.page.pageSize=e,this.$emit("pageChange",this.page)},handleCurrentChange:function(e){this.page.pageNum=e,this.$emit("pageChange",this.page)},toggleRowSelection:function(e,t){var n=this;this.$nextTick(function(){e.forEach(function(e){n.$refs.commontable.toggleRowSelection(e,t)})})},clearSelection:function(){this.$refs.commontable.clearSelection()},handleSelectionChange:function(e){this.$listeners["selection-change"]||this.$emit("selectionChange",e)},sortChange:function(e){this.$listeners["sort-change"]||this.$emit("sortChange",e)},rowClick:function(e,t,n){this.$listeners["row-click"]||this.$emit("rowClick",e,t,n)},cellClick:function(e,t,n){this.$listeners["cell-click"]||this.$emit("cellClick",e,t,n)},currentChange:function(e){this.$listeners["current-change"]||this.$emit("currentChange",e)},filtetag:function(e,t,n){return"function"==typeof e.filterMethod?e.filterMethod(e,t,n):n[e.prop]===t},goto:function(e){this.$emit("gotolink",e)},currentObj:function(e,t,n){this.$emit("currentObj",e.row,t,n,e.$index)}}},x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-table",e._g(e._b({ref:"commontable",attrs:{data:e.list,border:e.border,stripe:e.stripe,"summary-method":e.summarymethod||e.summaryDefault,"show-summary":e.isShowSummary},on:{"row-click":e.rowClick,"cell-click":e.cellClick,"selection-change":e.handleSelectionChange,"sort-change":e.sortChange,"current-change":e.currentChange}},"el-table",e.$attrs,!1),e.$listeners),[e.expand&&!e.isTree?n("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._t("expand",null,{row:t.row,$index:t.$index})]}}])}):e._e(),e._v(" "),e.selection&&e.list.length?n("el-table-column",{attrs:{type:"selection",selectable:e.selectable,"reserve-selection":e.reserveSelection,align:"center"}}):e._e(),e._v(" "),e.showNum&&e.list.length&&!e.isTree?n("el-table-column",{attrs:{label:e.numTitle,align:"center",width:"60",fixed:e.numFiexd||e.columns[0]&&e.columns[0].fixed},scopedSlots:e._u([{key:"default",fn:function(t){return[e._t("mnum",[n("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.$index+1+(e.page.pageNum-1)*e.page.pageSize))])],{row:t.row,num:t.$index+1+(e.page.pageNum-1)*e.page.pageSize,$index:t.$index})]}}])}):e._e(),e._v(" "),e._t("default"),e._v(" "),e._l(e.columns,function(t,r){return[n("el-table-column",e._b({key:e.getKey(t.prop),attrs:{"class-name":t.className||t.el,align:t.align||"center","filter-method":t.filters?e.filtetag.bind(null,t):null},scopedSlots:e._u([{key:"default",fn:function(o){return n("span",{class:e.isTree&&0===r?"first-columns":null},[o.row.treeLevel&&0===r?n("span",{style:{minWidth:15*o.row.treeLevel+"px"}}):e._e(),e._v(" "),void 0!==o.row.expandAll&&0===r?n("span",{staticClass:"expan-icon",on:{click:function(t){e.expandClick(o)}}},[n("i",{class:o.row.expandAll?"el-icon-minus":"el-icon-plus"}),e._v(" \n            ")]):e._e(),e._v(" "),e._t(t.prop,[n("m-item",{staticClass:"m-item",attrs:{column:e.getColumns(t,o),row:o.row,index:o.$index},on:{currentObj:function(t,n){return e.currentObj(o,t,n)}}})],{row:o.row,$index:o.$index,column:t})],2)}}])},"el-table-column",t,!1))]}),e._v(" "),e.$scopedSlots.button?n("el-table-column",{attrs:{align:e.buttonAlign||"center",fixed:e.buttonFixed,width:e.buttonWidth,label:e.buttonLabel},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row,r=t.$index;return[e._t("button",null,{row:n,$index:r})]}}])}):e._e()],2),e._v(" "),e._t("page",[e.showPage&&!e.isTree?n("el-pagination",{staticStyle:{"text-align":"right"},attrs:{"current-page":e.page.pageNum,"page-sizes":e.pageSizes,"page-size":e.page.pageSize,layout:e.layout,total:e.cTotal},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}):e._e()])],2)};x._withStripped=!0;var C=function(e,t,n,r,o,i,l,a){var u=("function"==typeof n?n.options:n)||{};return u.__file="/Users/hanyukai/work/githuab/mComponent/src/components/MTable.vue",u.render||(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0,o&&(u.functional=!0)),u._scopeId=r,u}({render:x,staticRenderFns:[]},0,_,void 0,!1),k={functional:!0,props:{row:Object,column:Object,index:Number,renderItem:[Function,Object],format:Function,value:[String,Number,Array,Object,Boolean]},name:"RenderItem",render:function(e,t){var n=t.props,r=n.row,o=n.renderItem,i=n.index,l=n.value,a=n.format,u=n.column,s="function"==typeof o?o(e,{row:r,column:u,$index:i}):o,c=a?a(r):l;return s||e("span",{},c)}};!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(".m-form{display:flex;flex-wrap:wrap}.el-date-editor--datetimerange.el-input,.el-date-editor--datetimerange.el-input__inner,.m-form,.m-select{width:100%}.first-columns{display:flex}.first-columns .expan-icon i{cursor:pointer;font-size:13px;font-weight:900}.el-table .cell.el-tooltip .m-item{line-height:23px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-break:break-all}.mform-item{white-space:nowrap}");var $=function e(t,n){if(!e.installed){if(!t.prototype.$ELEMENT)throw new Error("请先安装element-ui");t.component(a.name,a),t.component(d.name,d),t.component(g.name,g),t.component(C.name,C),t.component(k,k)}};return window.Vue&&$(window.Vue),{install:$,MForm:a,MItem:d,MSelect:g,MTable:C}});
