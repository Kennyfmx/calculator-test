let task = prompt("введите числа в формате 'a + b' римскими или арабскими цифрами")
//проверяем значение "введено ли число"
function isNum(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
//Конвертер из римских в арабские цифры
function converterR(romanNum) {
  let values = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
  let digits = Object.keys(values);

  romanNum = romanNum.toUpperCase();
  let arabic = 0;

  for (let q=0; q<romanNum.length; ++q) {
    if (digits.indexOf(romanNum[q]) < digits.indexOf(romanNum[q+1])) {
      arabic -= values[romanNum[q]];
    } else {
      arabic += values[romanNum[q]];
    }
  }
  return arabic;
}
console.log(converterR("cxx"));
//Конвертируем из арабских в римские цифры
function converterA(arabicNum) {
	roman = "";
	for (let i = 0; i < arabicNum; i++) {
	    if (!(arabicNum % 1000)) { 
	    	roman += "M"; arabicNum -= 1000; 
	    } else if (!(arabicNum % 500)) { 
	    	roman += "D"; arabicNum -= 500; 
	    } else if (!(arabicNum % 100)) { 
	    	roman += "C"; arabicNum -= 100; 
	    } else if (!(arabicNum % 50)) {
	    	roman += "L"; arabicNum -= 50; 
	    } else if (!(arabicNum % 10)) { 
	    	roman += "X"; arabicNum -= 10; 
	    } else if (!(arabicNum % 5)) {
	    	roman += "V"; arabicNum -= 5;
	    } else if (!(arabicNum % 1)) { 
	    	roman += "I"; arabicNum -= 1; 
	    }
	}
	roman = roman.split('').reverse().join('');
  	let translationMap = {
	    DCCCC : 'CM',
	    CCCC : 'CD',
	    LXXXX : 'XC',
	    XXXX : 'XL',
	    VIIII : 'IX',
	    IIII : 'IV',
		};
	for (let i in translationMap) {
    	roman = roman.replace(new RegExp(i,'g'), translationMap[i]);
  	}
  	return roman;
}
console.log(converterA(150));

//Конструируем объект для функции
function Calculator() {
	let method = {
			"-": function(a, b) {
				return a - b;
			},
			"+": function(a, b) {
	      		return a + b;
	    	},
	    	"*": function(a, b) {
	    		return a * b;
	    	},
	    	"/": function(a, b) {
	    		return a / b;
	    	}
  		};
	this.calculate = function(str) {
		let split = str.split(' '),
	    	a = split[0],
	    	op = split[1],
	    	b = split[2]
	 	if (!method[op] || !isNum(a) || !isNum(b)) {
	    		return NaN;
	    	//не принимаем на вход числа больше 10
		  	} else if ( a > 10 || b > 10 ) {
		  		return NaN
		  	} else {
		  		return method[op](Math.round(+a), Math.round(+b)); //Math.floor для округления не к ближайшему целому, а к наименьшему числу, отбросив часть после запятой.
		  	}
		}
	};
//создаем новый объект
let calc = new Calculator;
//вводим данные
let result = calc.calculate(task);
//выводим результат
// alert(result);
console.log(result);
