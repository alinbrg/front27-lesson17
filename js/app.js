// 1. შექმენით 5 ელმენტიანი მასივი, რომლის თითოეული ელემენტი არის რიცხვი. კონსოლში გამოიტანეთ ამ რიცხვების ჯამი და საშუალო არითმეტიკული
const numbers = [10, 20, 30, 1, 100, 3000, 2, 3, 4, 5];
let sum = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4];
let len = numbers.length;
let avg = sum / len;
// console.log(sum, avg);

// 2. შექმენით ობიექტი რომელიმე წიგნის  შესახებ შემდეგი propertyებით: title, author, და yearPublished. ამ მნიშვნელობების დახმარებით კონსოლში გამოიტანეთ შემდეგი ტექსტი: "(აქ title ცვლადი) by (აქ author ცვლადი)  was published in (აქ yearPublished ცვლადი) ."
const book = {
	title: "Harry Potter",
	author: "J.K. Rowling",
	yearPublished: 1997,
};

// console.log(
// 	`${book.title} by ${book.author} was published in ${book.yearPublished}.`
// );

// 3. მე-2 დავალებაში შექმნილ ობეიქტში შეცვალეთ yearPublished მნიშვნელობა და კონსოლში გამოიტანეთ დარედაქტირებული ობიექტი.

book.yearPublished = 2000;
// console.log(book);

// 4. შექმენით 3 ელემენტიანი მასივი, რომლის თითოეული ელემენტი არის ობიექტი შემდეგი property-ებით: productName, price, და isAailable. კონსოლში გამოიტანეთ შექმნილი მასივი.
const products = [
	{
		productName: "phone",
		price: 1000,
		isAvailable: true,
	},
	{
		productName: "laptop",
		price: 2000,
		isAvailable: false,
	},
	{
		productName: "tablet",
		price: 1000,
		isAvailable: true,
	},
];
// console.log(products);

let a = 10;
let b = ++a;
// let c = b++;
// console.log(a, b);
// let c = a--;
// console.log(c);

let quantity = 1;
let int = 1;
// if clicked + button
quantity = quantity + 1;
quantity /= 5;
// if clicked - button
quantity = quantity - 1;
// quantity -= 10;

quantity++;
quantity--;
let text = "11";

// console.log(a, b, text);
// console.log(a === text);
let userName = "alina";

let price = 100;
let city = "Tbilisi";

// console.log(!price);
// if (!price) {
// 	console.log("price is ", price);
// }

// console.log(price > 1000 && city !== "Tbilisi");

// if (!price) {
// 	alert("price is 0");
// } else {
// 	console.log("price is", price);
// }

// if (!price) {
// 	alert("price is 0");
// } else if (price < 500) {
// 	console.log("price is less than 500");
// } else if (price >= 500 && price < 1000) {
// 	console.log("price is less than 1000, and more than 500");
// } else if (price >= 1000 && price < 5000) {
// 	console.log("price is more than 1000, and less than 5000");
// } else {
// 	console.log("price is", price);
// }

// console.log("after if");

let deliveryPrice = 0;

switch (city) {
	case "Tbilisi":
		// console.log("Tbilisi");
		deliveryPrice = 10;
		break;
	case "Rustavi":
	case "Kutaisi":
		console.log("Rustavi or Kutaisi");
		deliveryPrice = 15;
		break;
	case "Batumi":
		console.log("Batumi");
		deliveryPrice = 20;
		break;
	default:
		console.log("default");
		deliveryPrice = 30;
		break;
}

// console.log(deliveryPrice);
let discount = 0;

// if (price > 1000) {
// 	discount = 10;
// } else {
// 	discount = 5;
// }

discount = price > 1000 ? 10 : 5;

// console.log(discount);

// if (price === 100) {
// 	console.log("price is 100");
// } else {
// 	console.log("price is not 100");
// }

// price === 100 ? console.log("price is 100") : console.log("price is not 100");

// for (let i = 10; i > 0; i--) {
// 	console.log(i);
// }

// for (let i = 0; i < 10; i++) {
// 	if (i === 5 || i === 7) {
// 		continue;
// 	}
// 	console.log(i);
// }

// console.log("after for loop");
// console.log(i);

let i = 1;

// while (i < 10) {
// 	console.log(i);
// 	if (i === 3) {
// 		break;
// 	}
// 	i++;
// }

// console.log("after while loop");
// console.log(i);

// let j = 1;
// do {
// 	console.log(j);
// 	if (j === 5) {
// 		break;
// 	}
// 	j++;
// } while (j < 10);

let sum2 = 0;
for (let i = 0; i < len; i++) {
	// console.log(i);
	// console.log(numbers[i]);
	sum2 = sum2 + numbers[i];
}

console.log(sum2);
