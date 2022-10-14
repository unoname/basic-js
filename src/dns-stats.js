const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
	let result = {}
let reversedDomains =	domains.map(e=>{

	return	e.split('.').reverse();
		
	})
	 reversedDomains.forEach((item, index)=>{
		if(item[0]) result['.'+item[0]] = 0;
		if(item[1]) result['.'+item[0] +'.'+item[1]] = 0;
		if(item[2]) result['.'+item[0] +'.'+item[1]+'.'+item[2]] = 0;
	})
for(let i = 0; i < reversedDomains.length; i++){
	reversedDomains[i]='.'+reversedDomains[i].join('.');	
}

for(let i=0; i<reversedDomains.length;i++){
	for(let prop in result){
		let re = new RegExp(prop,'g')
	if(re.test(reversedDomains[i])){
		result[prop]++
	}
}
}
	
	return result
}

module.exports = {
  getDNSStats,
};
