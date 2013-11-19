#Trackback

Sending trackback ping to blog posts

##Example

	var Trackback=require('trackback');

	var options={
		title:'Title of post',
		blog_name:'Name of blog',
		excerpt:'Description'
	}

	var sourceUrl='http://url/from/trackback';
	var targetUrl='http://url/to/trackback';

	Trackback.ping(targetUrl,sourceUrl,options,function(e,r){
		if(e){
			console.error("error:"+e);
			return;
		}
		console.log('succeeded');
	});

##Functions

###ping(targetUrl,sourceUrl,options,callback)

* targetUrl: an url which receive a trackback ping
* sourceUrl: an url of post which will be send to targetUrl
* options:
	title/excerpt/blog_name
* callback: function(err,response) err=null:succeeded/string:error message
 
