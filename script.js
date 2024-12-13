function js_render(t,d){return t.replace(/\n/g,"~").replace(/\{([^\:\}]+)\}|\{ds\:(\w+)\}(.*?)\{\/ds\}/g,function(a,n,s,ts){h='';try{if(n)return d[n];ds=d[s];for(c in ds){if(ds.hasOwnProperty(c))h+=js_render(ts,ds[c])}}catch(e){}return h}).replace(/~/g,'\n')};

//priprava sablony pro zobrazeni
function vypiskurzy(data){
	t = '<h3>Kurzy <a href="{url}">{banka}</a></h3><table style="width:360px"><tr><td>Měna</td><td>Jednotka</td><td>Kurz</td></tr>'
	t += '{ds:kurzy}<tr><td><a href="{url}">{nazev}</a></td><td align="right">{jednotka}</td><td align="right">{dev_stred}</td></tr>{/ds}'
	t += '</table>'  

	
	html = js_render(t,data)
	document.getElementById("kl").innerHTML = html
	
}