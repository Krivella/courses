let courses = [
    { name: "Courses in England", prices: [0, 100] }, 
    { name: "Courses in Germany", prices: [500, null] }, 
    { name: "Courses in Italy", prices: [100, 200] }, 
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

    let reqRange1 = [null, 100];
	let reqRange2 = [100, 350];
	let reqRange3 = [200, null];

document.querySelector('.content').innerHTML = `<table class = 'app'></table>`
for(let course of courses){
    
        let row = document.createElement('tr')
        row.innerHTML = `<td>${course.name}</td>`
        document.querySelector('.app').appendChild(row)
        
        let row1 = document.createElement('tr')
        if(course.prices[0] === null  && course.prices[1] != null){
            row1.innerHTML = `<td>Цена  до  ${course.prices[1]} руб.</td>` 
        } else if (course.prices[1] === null && course.prices[0] != null) {
            row1.innerHTML = `<td>Цена  от  ${course.prices[0]} руб.</td>` 
        } else if (course.prices[0] === null && course.prices[1] === null) {
            row1.innerHTML = `<td>Данные курсы сейчас не доступны</td>`   
        } else if(course.prices[0] === 0){
            row1.innerHTML = `<td>Цена  до  ${course.prices[1]} руб.</td>`
        } else  
            row1.innerHTML = `<td>Цена  от  ${course.prices[0]} до ${course.prices[1]} руб.</td>`
        

        document.querySelector('.app').appendChild(row1)
    }

    let result1 = filteringByRange(courses, reqRange1);
	console.log(result1);
	let result2 = filteringByRange(courses, reqRange2);
	console.log(result2);
	let result3 = filteringByRange(courses, reqRange3);
	console.log(result3);
	
	function filteringByRange(arr, reqRange){
		let reqLeftRange = reqRange[0] || 0, reqRightRange = reqRange[1] || Infinity;
		return arr.filter(({ prices })=>{
			let leftRangePrice = prices[0] || 0, rightRangePrice = prices[1] || Infinity;
			//Отсюда взята формула: https://protocoder.ru/alg/datescrossing
            
			return !(reqLeftRange > rightRangePrice || reqRightRange < leftRangePrice);	
            	
		});
	}
   