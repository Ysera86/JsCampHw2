/*
1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız. (Araştırma konusu : şart blokları : if )

Örnek kullanım : findPrime(2,5,8,21, 13) findPrime(3,5)

2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız. (Arkadaş sayılar için google)

3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.

4- 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.
*/ 
console.log("Prime Numbers --------------->")

console.log(findPrime(2,5,6,8,21,13,17,2251) ) 
console.log(findPrime(1,2,3,5,8))

function findPrime(...array) {
    let primes = [...array];
    for (let i = 0; i < array.length; i++) {
        const num = array[i];

        let count = 0;
        for (let j = 1; j < num; j++) {    
           if (num % j == 0) {
               count++;
           }
        }

        // console.log(num, count)
        if (count == 0 || count > 1) {
            primes.splice(primes.findIndex((v,i)=>primes[i] === num),1); //not prime
        }
    }
    return primes;
}

console.log("Friend Numbers --------------->")

function AreNumbersFriends(number1, number2) {
    if (number1 > 0 && number2 > 0) {
        let count1 = 0,count2 = 0;
        for (let i = 0; i < number1; i++) {
            if (number1 % i === 0)
            count1 += i;
        }
        for (let y = 0; y < number2; y++) {
            if (number2 % y === 0) 
            count2 += y;
        }

        //console.log(`count1 : ${count1}, count2 : ${count2}`)

        if(count1 === number2 && count2 === number1)
        return true;
        else
        return false;
    }
}

console.log(AreNumbersFriends(220,284)); // true
console.log(AreNumbersFriends(17296 ,18416 )); // true
console.log(AreNumbersFriends(1184 ,1210 )); // true
console.log(AreNumbersFriends(220,283)); // false
console.log(AreNumbersFriends(220,1210 )); // false

console.log("Perfect Numbers --------------->")

function PerfectNumbers(maxNumber) {    
    let perfects = [];
    for (let number = 1; number < maxNumber ; number++) {
        let sum = 0;
        for (let divider = 1; divider < number; divider++) {
            if (number % divider === 0) {
                sum += divider;
            }
        }

        if (number === sum) {
            perfects.push(number);
        }
    }
    return perfects;
}

console.log(PerfectNumbers(1000));

console.log("Prime Numbers --------------->")

function PrimeNumbers(maxNumber) {
    let primes = [];
    for (let number = 2; number < maxNumber; number++) {
        let count = 0;
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                count ++;
            }
        }
        if (count === 0) {
            primes.push(number);
        }
    }
    return primes;
}

console.log(PrimeNumbers(1000));

/*
2	3	5	7	11	13	17	19	23	29	31	37	41	43	47	53	59	61	67	71
73	79	83	89	97	101	103	107	109	113	127	131	137	139	149	151	157	163	167	173
179	181	191	193	197	199	211	223	227	229	233	239	241	251	257	263	269	271	277	281
283	293	307	311	313	317	331	337	347	349	353	359	367	373	379	383	389	397	401	409
419	421	431	433	439	443	449	457	461	463	467	479	487	491	499	503	509	521	523	541
547	557	563	569	571	577	587	593	599	601	607	613	617	619	631	641	643	647	653	659
661	673	677	683	691	701	709	719	727	733	739	743	751	757	761	769	773	787	797	809
811	821	823	827	829	839	853	857	859	863	877	881	883	887	907	911	919	929	937	941
947	953	967	971	977	983	991	997
*/