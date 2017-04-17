var log = (name,value)=>{
	console.log('*'.repeat(30))
    value==null||value=='undefined' ? console.log(name) : console.log(' -'+name+": ",value)
    console.log('*'.repeat(30))
}

export {log}