
module.exports = {
	
	format(d, fn) {
		d.map( record => {
			record.css = fn(record.Population) 
		})
	return d;
	}
}