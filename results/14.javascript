(self.webpackChunkstatic=self.webpackChunkstatic||[]).push([[555],{197:(e,t,s)=>{"use strict";s.d(t,{D:()=>a});var o=s(7294),n=s(6872);o.Component;class i extends o.Component{constructor(e){super(e),this.state={nodes:this.props.nodes,topNode:this.props.topNode,curNode:this.props.curNode,curPath:[],curNodeChildren:[]}}componentDidMount(){this.setState({curPath:this._getNodePath(this.state.curNode),curNodeChildren:this._findNodeChildren(this.state.curNode,this.state.nodes)})}_findNodeChildren(e,t){let s=[];for(let o of t)o.pid===e.id&&s.push(o);return s}_getNodePath(e){let t=[e],s=e,o=1;for(;s.id!=this.state.topNode.id;){for(let e of this.state.nodes)if(s.pid===e.id){t.unshift(e),s=e;break}if(o+=1,o>30){console.log("循环太多次!");break}}return t}_hasChild(e){for(let t of this.state.nodes)if(e.id===t.pid)return!0;return!1}enterNode(e){e!==this.state.curNode&&(this._hasChild(e)?(this.state.curNode=e,this.state.curPath=this._getNodePath(e),this.setState({curNodeChildren:this._findNodeChildren(e,this.state.nodes)}),this.props.enterNode&&this.props.enterNode(e)):this.props.selectNode(e))}render(){return o.createElement("div",{style:{margin:"0 0 .3em 0"}},this.state.curPath.map((e=>o.createElement("span",{style:{color:"#2196F3",cursor:"pointer"},key:e.id,onClick:()=>{this.enterNode(e)}},e.text+(this.state.curNode===e?" : ":" > ")))),this.state.curNodeChildren.map((e=>o.createElement("span",{key:e.id,className:"tagcateory1",onClick:()=>{this.enterNode(e)}},e.text))))}}class r extends o.Component{constructor(e){super(e),this.state={},this.info={selectedNodes:this.props.selectedNodes}}componentDidMount(){}render(){return o.createElement(o.Fragment,null,this.props.treeList.length+this.info.selectedNodes.length===0?null:o.createElement("div",{style:{outline:"1px solid #ffffff",padding:".1em 0",fontSize:".95em"}},this.props.treeList.map((e=>o.createElement(i,{key:e.topNode.id,nodes:e.nodes,topNode:e.topNode,curNode:e.curNode,enterNode:e=>{this.props.enterNode&&this.props.enterNode(e)},selectNode:e=>{this.info.selectedNodes.includes(e)||(this.info.selectedNodes.push(e),this.props.selectionChange&&this.props.selectionChange(this.info.selectedNodes),this.forceUpdate())}}))),0===this.info.selectedNodes.length?null:o.createElement("div",{style:{marginTop:".2em",color:"#E91E63"}},"选中：",this.info.selectedNodes.map((e=>o.createElement("span",{key:e.id,className:"tagcateory1",onClick:()=>{this.info.selectedNodes=this.info.selectedNodes.filter((t=>t!==e)),this.props.selectionChange&&this.props.selectionChange(this.info.selectedNodes),this.forceUpdate()}},e.text))))))}}class a extends o.Component{constructor(e){super(e),this.state={curCategory:null},this.info={categoies:[],tags:[],selectedCategories:[],selectedTags:[]},this.FolderWithSelection=null,this.TagsWithSelection=null}async componentDidMount(){let e=await n._Y.rfetch("get","/api/category",{action:"get"},{trycache:!0});this.info.categoies=e.items,this.info.categoies.unshift({id:0,text:"分类",pid:-1}),e=await n._Y.rfetch("get","/api/tag",{action:"get"},{trycache:!0}),this.info.tags=e.items,this.info.selectedCategories=this.props.selections.selectedCategoryIds.map((e=>{for(const t of this.info.categoies)if(t.id===e)return t}));let t=[{nodes:this.info.categoies,topNode:this.info.categoies[0],curNode:this.info.categoies[0]}];this.FolderWithSelection=o.createElement(r,{treeList:t,selectedNodes:this.info.selectedCategories,selectionChange:e=>{this.categoriesSelectionChange(e)}}),this.info.selectedTags=this.props.selections.selectedTagIds.map((e=>{for(const t of this.info.tags)if(t.id===e)return t})),this.categoriesSelectionChange(this.info.selectedCategories)}async categoriesSelectionChange(e){if(this.info.selectedCategories=e,this.props.selections.selectedCategoryIds=e.map((e=>e.id)),this.props.categoriesSelectionChange&&this.props.categoriesSelectionChange(this.props.selections.selectedCategoryIds),0===e.length)return this.TagsWithSelection=o.createElement(r,{treeList:[],selectedNodes:this.info.selectedTags,selectionChange:e=>this.tagsSelectionChange(e)}),void this.forceUpdate();let t=(await n._Y.rfetch("get","/api/tag",{action:"get_category_related_tags",cid:e.map((e=>e.id)).join(",")},{trycache:!0})).tags.map((e=>{let t=null;for(const s of this.info.tags)if(s.id===e.id){t=s;break}if(null===t)throw`不存在的 tag ：${e.id} - ${e.text}`;return{nodes:this.info.tags,topNode:t,curNode:t}}));this.TagsWithSelection=o.createElement(r,{treeList:t,selectedNodes:this.info.selectedTags,selectionChange:e=>this.tagsSelectionChange(e)}),this.forceUpdate()}tagsSelectionChange(e){this.info.selectedTags=e,this.props.selections.selectedTagIds=e.map((e=>e.id)),this.props.tagsSelectionChange&&this.props.tagsSelectionChange(this.props.selections.selectedTagIds)}render(){return o.createElement(o.Fragment,null,this.FolderWithSelection,o.createElement("div",{style:{marginTop:"1em"}}),this.TagsWithSelection)}}},5008:(e,t,s)=>{"use strict";s.d(t,{Ll:()=>a,Fg:()=>c,zU:()=>p});var o=s(7294),n=s(6872),i=s(6239),r=s(5868);class a extends o.Component{constructor(e){super(e)}addOne(e){for(let t of this.props.items)if(t.id===e.id)return;this.props.items.push(e),this.forceUpdate()}addAll(){for(let e of n.R3.MAGIC_BAG[this.props.zone]){let t=!1;for(let s of this.props.items)if(e.id===s.id){t=!0;break}t||this.props.items.push(e)}this.forceUpdate()}render(){let e=n.R3.MAGIC_BAG;return o.createElement("div",{style:{outline:"#d9e1d9 solid 1px",padding:".5em"}},o.createElement("div",{className:"row"},o.createElement("div",{className:"col-md-6"},e.hasOwnProperty(this.props.zone)&&0!==e[this.props.zone].length?o.createElement(o.Fragment,null,o.createElement("span",null,"手推车（双击添加）"),o.createElement("span",{style:{cursor:"pointer",color:"#2196F3"},onClick:e=>{this.addAll()}},"全部添加"),o.createElement(i.u9,{zone:this.props.zone,displayAttr:this.props.displayAttr,doubleClickOne:e=>{this.addOne(e)}})):o.createElement("span",null,"手推车空空，可以先去挑选")),o.createElement("div",{className:"col-md-6"},o.createElement("span",null,"选中列表  "),o.createElement(i.cm,{displayAttr:this.props.displayAttr,items:this.props.items,background:"#f5efeb"}))))}}class l extends o.Component{constructor(e){super(e),this.fullTree=null,this.filebrowserData={curFolderPath:[],curFolderContent:[]}}async getFolderContent(e){return(await n._Y.rfetch("post","/api/folder",{action:"getfoldercontent",foldertype:this.props.foldertype,folderpath:e})).content}refreshCurFolder(){this.setCurFolder(this.filebrowserData.curFolderPath,!1)}async updateFolderFromServer(e){let t=await this.getFolderContent(e);if(0===e.length)this.fullTree=t;else{let s=this.fullTree;for(const t of e.slice(0,-1))s=s[t];s[e[e.length-1]]=t}return t}async setCurFolder(e,t=!0){let s=[];if(this.fullTree&&t){s=this.fullTree;for(const t of e)s=s[t]}else s=await this.updateFolderFromServer(e);s=Object.keys(s).sort().reduce(((e,t)=>(e[t]=s[t],e)),{});let o=this.filebrowserData.curFolderContent=[];for(const[e,t]of Object.entries(s))t.hasOwnProperty("id")||o.push({type:"folder",iconClass:"fb-node-icon-folder far fa-folder",name:e});for(const[e,t]of Object.entries(s))t.hasOwnProperty("id")&&o.push({type:"file",iconClass:"fb-node-icon-file far fa-file",name:e,id:t.id});this.filebrowserData.curFolderPath=e,this.forceUpdate()}componentDidMount(){this.refreshCurFolder()}render(){return o.createElement(o.Fragment,null,o.createElement(r.I,{resourceName:this.props.resourceName,data:this.filebrowserData,onCurFolderChange:e=>{this.setCurFolder(e)},onSelectItems:this.props.onSelectItems}))}}class c extends o.Component{constructor(e){super(e)}addOne(e){for(let t of e){for(let e of this.props.items)if(e.id===t.id)return;let e={id:t.id};e[this.props.displayAttr]=t[this.props.displayAttr],this.props.items.push(e)}this.forceUpdate()}render(){return o.createElement("div",{style:{outline:"#d9e1d9 solid 1px",padding:".5em"}},o.createElement("div",{className:"row"},o.createElement("div",{className:"col-md-6"},o.createElement(l,{resourceUrl:this.props.resourceUrl,foldertype:this.props.foldertype,onSelectItems:e=>{this.addOne(e)}})),o.createElement("div",{className:"col-md-6"},o.createElement("span",null,"选中列表  "),o.createElement(i.cm,{displayAttr:this.props.displayAttr,items:this.props.items,background:"#f5efeb"}))))}}class d extends o.Component{constructor(e){super(e),this.state={searchKeyword:"",searching:!1,items:[]}}async componentDidMount(){let e=await this.props.searchfunc(this.state.searchKeyword);this.setState({items:e})}ui_Part_SearchBox(){return this.state.items.length>8||this.state.searching?o.createElement("input",{className:"form-control",placeholder:"请输入关键字查找",style:{width:"50%",borderRadius:"0",border:"1px solid #aec4ae",height:"2em",borderBottom:"#d5d5e7",marginTop:".3em"},value:this.state.searchKeyword,onChange:e=>{this.setState({searchKeyword:e.target.value})},onKeyDown:async e=>{if("Enter"!==e.key)return;0===this.state.searchKeyword.length?this.state.searching=!1:this.state.searching=!0;let t=await this.props.searchfunc(this.state.searchKeyword);this.setState({items:t})}}):null}ui_Part_SelectBox(){return o.createElement(o.Fragment,null,o.createElement("span",null," 双击选择 "),o.createElement("span",{className:"fas fa-sync",style:{cursor:"pointer",color:"#3d9970"},onClick:async()=>{this.setState({items:[]});let e=await this.props.searchfunc(this.state.searchKeyword);this.setState({items:e})}}),o.createElement("select",{className:"form-control",id:this.eleId,size:this.props.listnum?this.props.listnum:5,style:{border:"1px #3c763d solid",marginRight:"1em",borderRadius:"0",fontSize:".92em",display:"inline"}},this.state.items.map((e=>o.createElement("option",{key:e.id,value:e[this.props.displayAttr],onDoubleClick:()=>{this.props.onSelectItems([e])}},e[this.props.displayAttr])))))}render(){return o.createElement(o.Fragment,null,o.createElement("div",null,this.ui_Part_SearchBox(),this.ui_Part_SelectBox()))}}class p extends o.Component{constructor(e){super(e)}addOne(e){for(let t of e){for(let e of this.props.items)if(e.id===t.id)return;this.props.items.push(t)}this.forceUpdate()}render(){return o.createElement("div",{style:{outline:"#d9e1d9 solid 1px",padding:".5em"}},o.createElement("div",{className:"row"},o.createElement("div",{className:"col-md-6"},o.createElement(d,{searchfunc:this.props.searchfunc,displayAttr:this.props.displayAttr,onSelectItems:e=>{this.addOne(e)}})),o.createElement("div",{className:"col-md-6"},o.createElement("span",null,"选中列表  "),o.createElement(i.cm,{displayAttr:this.props.displayAttr,items:this.props.items,background:"#f5efeb"}))))}}},4182:(e,t,s)=>{"use strict";s.d(t,{A:()=>r,j:()=>a});var o=s(7294),n=s(6872),i=s(6239);class r extends o.Component{constructor(e){super(e),this.uploaderId="image_upload_"+Math.random().toString(36).substring(2),this.state={imageUrl:this.props.imageUrl,errors:""}}componentDidMount(){let e=this;this.dropzone=new Dropzone("#"+this.uploaderId,{url:"/api/upload",acceptedFiles:".jpg,.png",createImageThumbnails:!0,clickable:!0,paramName:"upload1",success:function(t,s){this.removeFile(t),console.log(t.name+" success : "+s.name),e.props.imageChanged(s.url),e.setState({imageUrl:s.url})},error:function(t,s){this.removeFile(t),e.state.errors=`上传 ${t.name} 失败 : ${s.msg} | ${s}`,e.forceUpdate()},dictInvalidFileType:"不支持的文件类型"})}render(){return o.createElement(o.Fragment,null,o.createElement("div",{id:this.uploaderId,className:"dropzone",style:{minHeight:"1em",border:"1px dashed #85b2c7",padding:".5em"}},o.createElement("div",{className:"dz-default dz-message",style:{margin:"0"}},o.createElement("span",{style:{color:"#03a9f4",display:null===this.state.imageUrl?"inline":"none"}},"拖动文件到这里上传"),o.createElement("img",{src:null===this.state.imageUrl?"":this.state.imageUrl,style:{...this.props.imageStyle,display:null===this.state.imageUrl?"none":"inline"}}))),this.state.errors?o.createElement("div",{type:"text",style:{color:"red",cursor:"pointer"},onClick:()=>{this.state.errors=null,this.forceUpdate()}},this.state.errors):null)}}class a extends o.Component{constructor(e){super(e),this.uploaderId="video_upload_"+Math.random().toString(36).substring(2),this.state={errors:""},this.dndSrc={item:null}}componentDidMount(){let e=this;this.dropzone=new Dropzone("#"+this.uploaderId,{url:"/api/upload_video",acceptedFiles:".mp4,.mkv,.avi",createImageThumbnails:!1,clickable:!1,paramName:"upload1",success:function(t,s){this.removeFile(t),console.log(t.name+" success : "+s.name),e.props.items.push({id:s.id,name:s.name}),e.forceUpdate()},error:function(t,s){this.removeFile(t),e.state.errors=`上传 ${t.name} 失败 : ${s.msg} | ${s}`,e.forceUpdate()},dictInvalidFileType:"不支持的文件类型"})}render(){return o.createElement(o.Fragment,null,o.createElement("div",{id:this.uploaderId,className:"dropzone",style:{minHeight:"1em",border:"1px dashed #85b2c7",padding:".5em"}},o.createElement("div",{className:"dz-default dz-message",style:{margin:"0"}},o.createElement("span",{style:{color:"#03a9f4"}},"拖动文件到这里上传"))),this.state.errors?o.createElement("div",{type:"text",style:{color:"red",cursor:"pointer"},onClick:()=>{this.state.errors=null,this.forceUpdate()}},this.state.errors):null,o.createElement(i.cm,{items:this.props.items,displayAttr:"name",deleteOne:e=>{n._Y.ajax_delete("/api/video_meta",{action:"deleteone",id:e.id})}}))}}},6872:(e,t,s)=>{"use strict";s.d(t,{R3:()=>a,FO:()=>l,_Y:()=>c,Rj:()=>d,DR:()=>p});var o=s(3609),n=s.n(o),i=s(6489),r=s.n(i);window.mobilecheck=function(){var e,t=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0),t},window.UTCTimeString2Local=e=>{var t=new Date(e);return t.getFullYear().toString()+"-"+(2==(t.getMonth()+1).toString().length?(t.getMonth()+1).toString():"0"+(t.getMonth()+1).toString())+"-"+(2==t.getDate().toString().length?t.getDate().toString():"0"+t.getDate().toString())+" "+t.toTimeString().split(" ")[0]},window.SERVER_DATA_CACHE={};let a={ENV:{},MAGIC_BAG:{},searchKeywords:""},l="/api/upload",c={_updateTokenCache:{},magicBag:{addOne:(e,t)=>{let s=a.MAGIC_BAG;s.hasOwnProperty(e)||(s[e]=[]);for(let o of s[e])if(o.id===t.id)return;s[e].push(t)},removeOne:(e,t)=>{let s=a.MAGIC_BAG;if(s.hasOwnProperty(e))for(let o=0;o<s[e].length;o++)if(s[e][o].id===t.id)return void s[e].splice(o,1)}},getUrlParameter:function(e){var t=window.location.hash.split("?")[1];if(!t)return null;for(var s=t.split("&"),o=0;o<s.length;o++){var n=s[o].split("=");if(decodeURIComponent(n[0])==e)return decodeURIComponent(n[1])}return null},list2tree:function(e){var t,s,o={},n=[];for(s=0;s<e.length;s+=1)o[e[s].id]=s,e[s].children=[];for(s=0;s<e.length;s+=1)-1!==(t=e[s]).pid?e[o[t.pid]].children.push(t):n.push(t);return n},isMobile:mobilecheck(),rfetch:async function(e,t,s,o={}){let i={method:e,...o};if("get"===e){if(n().param(s).length>0&&(t+="?"+n().param(s)),o.trycache&&(delete i.trycache,SERVER_DATA_CACHE.hasOwnProperty(t)))return SERVER_DATA_CACHE[t]}else i.body=JSON.stringify(s);const r=await fetch(t,i);if(200!==r.status)throw alert("HTTP 错误 : "+r.status),"HTTP 错误 : "+r.status;let a=await r.json();if(0!=a.ret){if(302===a.ret||303===a.ret)return sessionStorage.setItem("redirect-from",window.location.href),void(window.top.location.href="/sign.html");if(a.ret>0)throw alert(a.msg),a.msg}return o.trycache&&(SERVER_DATA_CACHE[t]=a),a},ajax_base:function(e,t,s,o){n().ajax({url:t,type:e,data:"GET"==e?n().param(s):JSON.stringify(s),contentType:"GET"==e?"application/x-www-form-urlencoded":"application/json",cache:!1,success:function(e,t,s){if(0!=e.ret)return 302===e.ret||303===e.ret?(sessionStorage.setItem("redirect-from",window.location.href),void(window.top.location.href="/sign.html")):void alert(e.msg);o&&o(e)},error:function(e,t,s){0!=e.status&&alert("HTTP 错误 : "+e.status+s)}})},ajax_get:function(e,t,s){return this.ajax_base("GET",e,t,s)},ajax_post:function(e,t,s){return this.ajax_base("POST",e,t,s)},ajax_put:function(e,t,s){return this.ajax_base("PUT",e,t,s)},ajax_delete:function(e,t,s){return this.ajax_base("DELETE",e,t,s)},time:function(){return Math.round((new Date).getTime()/1e3)},getUploadToken:function(e,t){let s,o;"anonym"===e?(s="/api/others/publishpages",o="anonymCloudToke"):(s="/api/cust/tokens",o="custCloudToke");let n=!0,i=sessionStorage.getItem(o);if(i){let e=JSON.parse(i).ts;c.time()-e<3600&&(n=!1)}if(n)this.ajax_get(s,{action:"getuploadtokenphoto"},(e=>{sessionStorage[o]=JSON.stringify({token:e.uptoken,pf:e.pf,ts:c.time()}),t(e.uptoken,e.pf)}));else{let e=JSON.parse(i);t(e.token,e.pf)}},getUpdateToken:function(e,t){this._updateTokenCache.hasOwnProperty(e)?t(this._updateTokenCache[e]):this.ajax_get("/api/cust/tokens",{action:"getupdatetoken",keyname:e},(s=>{this._updateTokenCache[e]=s.uptoken,t(s.uptoken)}))},randomString:function(e=5){for(var t="",s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",o=0;o<e;o++)t+=s.charAt(Math.floor(Math.random()*s.length));return t},getJsonFileInQiniu:function(e,t,s,o,i=!1){let r=`http://mpo.121866.com/${e}`;n().ajax({url:r,type:"GET",dataType:"json",cache:i,success:e=>{t(e)},error:function(e,t,n){404===e.status?s&&s():o&&o()}})},addFileToQiniu:function(e,t,s,o,i=!0){this.getUploadToken(e,((e,r)=>{var a=new FormData;a.append("file",t),a.append("token",e),a.append("key",i?`${r}${s}`:s),n().ajax({url:"http://up.qiniu.com",data:a,processData:!1,contentType:!1,type:"POST",success:function(e){o(e)},error:function(e,t,s){0!=e.status&&alert("HTTP 错误 : "+e.status+s)}})}))},updateFileInQiniu:function(e,t,s){this.getUpdateToken(t,(o=>{var i=new FormData;i.append("file",e),i.append("token",o),i.append("key",t),n().ajax({url:"http://up.qiniu.com",data:i,processData:!1,contentType:!1,type:"POST",success:function(e){s(e)},error:function(e,t,s){0!=e.status&&alert("HTTP 错误 : "+e.status+s)}})}))},getTokenObj:function(){let e=sessionStorage.getItem("jwt");return r()(e)},getMyCid:function(){return this.getTokenObj().cid},DLG_COMMON_HEAD:'\n  <div class="GlobalModalDlg" id=\'GlobalModalDlg\'>\n  <div class="__Overlay" >\n  <div class="__Content" tabindex="-1" >\n  ',DLG_COMMON_END:"</div></div></div>",askValueDialog:function(e,t){window.dlg_callback=t;let s=`\n      ${this.DLG_COMMON_HEAD}\n      <div class="form-group">\n      <h4>${e}</h4>            \n      <input type="text" class="form-control" id="dlgaskonevalue_input">\n      </div>\n      <button class="btn btn-info " style="margin-left: 30%;"\n        onclick="$('#GlobalModalDlg').remove()">\n        取消</button>            \n      <button class="btn btn-info" style="margin-left: 1em;" \n        onclick="dlg_askonevalue_ret=$('#dlgaskonevalue_input').val();$('#GlobalModalDlg').remove();dlg_callback(dlg_askonevalue_ret)">\n        确定</button>            \n      ${this.DLG_COMMON_END}\n    `;n()("body").after(s)},confirmDialog:function(e,t){window.dlg_callback=t;let s=`\n      ${this.DLG_COMMON_HEAD}\n      <h4>${e}</h4>\n       \n      <button class="btn btn-info " style="margin-left: 30%;"\n        onclick="$('#GlobalModalDlg').remove()">\n        取消</button>            \n      <button class="btn btn-info" style="margin-left: 1em;" \n        onclick="$('#GlobalModalDlg').remove();dlg_callback()">\n        确定</button>            \n      ${this.DLG_COMMON_END}\n    `;n()("body").after(s)},notifyDialog:function(e,t){window.dlg_callback=t;let s=`\n      ${this.DLG_COMMON_HEAD}\n      <h4>${e}</h4>\n       \n            \n      <button class="btn btn-info" style="margin-left: 1em;" \n        onclick="$('#GlobalModalDlg').remove();if (dlg_callback) dlg_callback()">\n        知道了</button>            \n      ${this.DLG_COMMON_END}\n    `;n()("body").after(s)},qrCodeDialog:function(e,t){let s=`\n      ${this.DLG_COMMON_HEAD}\n      <h4>${e}</h4>\n      \n      <div id='qr-dlg-qrcode'></div>\n       \n           \n      <button class="btn btn-info" style="margin-left: 1em;" \n        onclick="$('#GlobalModalDlg').remove();">\n        确定</button>            \n      ${this.DLG_COMMON_END}\n    `;n()("body").after(s),setTimeout((()=>{n()("#qr-dlg-qrcode").qrcode({width:180,height:180,text:t})}),100)},modelStyle1:{overlay:{backgroundColor:"rgba(0, 0, 0, 0.3)"},content:{width:"40%",top:"40%",left:"30%",right:"auto",bottom:"auto",backgroundColor:"rgb(255, 254, 233)"}},getConfigHomePage:async()=>{if(a.hasOwnProperty("homePageConfig"))return a.homePageConfig;let e=await c.rfetch("get","/api/config",{action:"get",name:"homepage"});return a.homePageConfig=JSON.parse(e.value),null===a.homePageConfig&&(a.homePageConfig={banner:[],news:[],hot:[]}),a.homePageConfig},setConfigHomePage:async e=>{await c.rfetch("post","/api/config",{action:"set",name:"homepage",value:JSON.stringify(e)}),a.homePageConfig=e},findInHomePageLocation:(e,t,s)=>{for(let o=0;o<e.length;o++){let n=e[o];if(n.type===s&&n.id===t.id)return o}return-1}};var d=e=>{let t="";for(let s of e)for(let e in s){let o=s.name;if("check_string_len"===e){let n=s[e];(s.value.length<n[0]||s.value.length>n[1])&&(t+=`${o} 必须为 ${n[0]} - ${n[1]} 个字符\n`)}else if("check_int_range"===e){let n=s[e];if(isNaN(s.value))t+=`${o} 必须是数字 \n`;else{let e=parseInt(s.value);(e<n[0]||e>n[1])&&(t+=`${o} 必须在 ${n[0]} - ${n[1]} 之间\n`)}}else"check_not_null"===e&&(s[e],null===s.value&&(t+=`${o} 不能为空 \n`))}return t},p={mp4:"video",avi:"video",zip:"zip",rar:"zip","7z":"zip",xls:"excel",xlsx:"excel",py:"python"}},4470:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n});var o=s(7294);class n extends o.Component{constructor(e){super(e)}render(){const e="retoof".split("").reverse().join(""),t="retoof-niam".split("").reverse().join(""),s="kcolb-ms-d enon-d thgir-taolf".split("").reverse().join(""),n=["t","e","n",".","y","h","y","b",".","w","w","w","/","/",":","p","t","t","h"].reverse().join(""),i=["k","n","a","l","b","_"].reverse().join(""),r=decodeURIComponent("%E6%9C%AC%E7%BD%91%E7%AB%99%E4%BB%85%E4%BE%9B%E7%99%BD%E6%9C%88%E9%BB%91%E7%BE%BD%E6%95%99%E5%AD%A6%E4%BD%BF%E7%94%A8%EF%BC%8C%E7%82%B9%E5%87%BB%E5%AD%A6%E4%B9%A0%E6%95%99%E7%A8%8B"),a=decodeURIComponent("%E7%99%BD%E6%9C%88%E9%BB%91%E7%BE%BD%E7%89%88%E6%9D%83%E6%89%80%E6%9C%89");return o.createElement(e,{className:t},o.createElement("div",{className:s},o.createElement("a",{href:n,target:i},r)),o.createElement("a",{href:n,target:"_blank/"},a," "))}}}}]);