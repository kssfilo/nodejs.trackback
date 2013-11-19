var Request=require('request')
var DOMParser=require('xmldom').DOMParser

function Trackback(){
}

Trackback.ping=function(targetUrl,sourceUrl,options,callback){
	var form={
		url:sourceUrl
	}
	if(options.title)form.title=options.title;
	if(options.excerpt)form.excerpt=options.excerpt;
	if(options.blog_name)form.blog_name=options.blog_name;
	
	var options={
		uri:targetUrl,
		form:form
	}

	Request.post(options,function(e,r){
		if(e||r.statusCode!=200){
			callback(e||"status="+r.statusCode,null)
			return
		}
		var dom=new DOMParser().parseFromString(r.body)

		var e=dom.getElementsByTagName('error')
		if(e.length>0&&e[0].firstChild.nodeValue!="0"){
			var m=dom.getElementsByTagName('message')
			callback(m.length>0?m[0].firstChild.nodeValue:"error",null)
			return
		}
		callback(null,null)
	})
}

module.exports=Trackback
