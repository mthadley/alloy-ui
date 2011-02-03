AUI.add("aui-editor-menu-plugin",function(d){var k=d.Lang,a=k.isString,f=d.ClassNameManager.getClassName,p="editormenu",c="editormenuplugin",m="menu",q="content",b=f(p,q,"list"),h=f(p,q,"text"),j=f(p,q,"item"),n="<{1}{2}>{0}</{1}>",l='<li class="'+j+'">'+n+"</li>",e='<ul class="'+b+'"></ul>',i='<li class="'+h+'"><span>{0}</span></li>';var g=d.Component.create({NAME:p,EXTENDS:d.OverlayContext,ATTRS:{headerContent:{value:"",setter:function(s){var r=this;r._headerContent=s;return"";}},host:{value:false},items:{value:null}},prototype:{renderUI:function(){var r=this;g.superclass.renderUI.apply(r,arguments);var x=r.get("host");var t=r.get("contentBox");var v=r._headerContent;var u=r.get("items");var w=d.Node.create(e);d.each(u,function(C,A,D){var z="";if(a(C)){z+=k.sub(i,[C]);}else{var y=r._generateTagAttr(C);z+=k.sub(l,[C.label,C.tag,y]);}var B=d.Node.create(z);B.setData(p,C);w.append(B);});var s=new d.Panel({collapsible:false,headerContent:v,icons:[{icon:"close",handler:{fn:r.hide,context:r}}]}).render(t);s.bodyNode.append(w);r._menuList=w;},bindUI:function(){var r=this;g.superclass.bindUI.apply(r,arguments);r._menuList.delegate("click",r._onMenuListItemClick,"."+j,r);},_generateTagAttr:function(x){var r=this;var s=[];var u="";var t=x.attributes;var w=x.styles;if(t){for(var v in t){s.push(" "+v+'="'+t[v]+'"');}}if(w){s=[' style="'];for(var v in w){s.push(v+": "+w[v]+";");}s.push('"');}return s.join("");},_onMenuListItemClick:function(x){var s=this;var w=x.currentTarget;var u=w.getData(p);var r=s._generateTagAttr(u);var t=k.sub(n,["{0}",u.tag,r]);var v=s.get("host");v.execCommand("wraphtml",t);v.focus();s.hide();},_uiSetHeight:function(u){var r=this;var s=r.get("boundingBox");var t=r._menuList;s.setStyle("height","auto");t.setStyle("height",u);},_uiSetWidth:function(u){var r=this;var s=r.get("boundingBox");var t=r._menuList;s.setStyle("width","auto");t.setStyle("width",u);}}});var o=d.Component.create({EXTENDS:d.Plugin.Base,NAME:c,NS:m,prototype:{add:function(s){var r=this;var t=r.get("host");return new g(d.mix({host:t},s)).render();}}});d.namespace("Plugin").EditorMenu=o;},"@VERSION@",{requires:["aui-base","editor-base","aui-overlay-context","aui-panel","aui-editor-tools-plugin"]});