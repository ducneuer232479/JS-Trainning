// Bài 1: Viết 1 Chương Trình Đảo Ngược Số
let x = 12345;
let numberReverse = 0;
let lastNumber;
while (x != 0) {
  lastNumber = x % 10;
  numberReverse = numberReverse * 10 + lastNumber;
  x = Math.floor(x / 10);
}
console.log(numberReverse);

// Bài 2: Viết 1 hàm chấp nhận argument là 1 string cách nhau khoảng trắng và thực hiện uppercase each word
const doUpperCase = function (str) {
  if (typeof str === "string") {
    let strLowerCase = str;
    let arrLowerCase = strLowerCase.split(" ");
    for (let index = 0; index < arrLowerCase.length; index++) {
      arrLowerCase[index] =
        arrLowerCase[index].charAt(0).toUpperCase() +
        arrLowerCase[index].substring(1);
    }
    let strUpperCase = arrLowerCase.join(" ");
    console.log(strUpperCase);
  }
};
doUpperCase("get product list");

// Bài 3: Viết 1 hàm chấp nhận string như a parameter and counts the number of vowels within the string
const countNumberVowels = function (str) {
  if (typeof str === "string") {
    let vowel_list = "aeiouAEIOU";
    let arrVowelList = vowel_list.split("");
    let arrOfStr = str.split("");
    let count = 0;
    for (let item of arrOfStr) {
      for (let letter of arrVowelList) {
        if (item === letter) {
          count += 1;
        }
      }
    }
    console.log(count);
  }
};
countNumberVowels("do viet duc");

// Bài 4: Viết 1 Hàm chấp nhận đầu vào là 1 số và kiểm tra số đó có phải số nguyên tố hay không
const checkPrime = function (num) {
  if (Number.isInteger(num)) {
    if (num < 2) {
      return false;
    } else {
      for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) {
          return false;
        }
      }
    }
    return true;
  }
};
console.log(checkPrime(1)); // false
console.log(checkPrime(2)); // true
console.log(checkPrime(4)); // false
console.log(checkPrime(5)); // true
console.log(checkPrime(7)); // true
console.log(checkPrime(100)); // false

// Bài 5:  Viết 1 hàm tính tổng được lấy ra từ các con số trong mảng
const calcSum = function (num) {
  if (Number.isInteger(num)) {
    let nums = [25, 10, 5, 2, 1];
    let arr = [];
    let i;
    for (let index = 0; index < nums.length; index++) {
      if (num - nums[index] >= 0) {
        i = index;
        break;
      }
    }
    while (num > 0) {
      let numFake = num;
      num = num - nums[i];
      if (num >= 0) {
        arr.push(nums[i]);
      } else {
        num = numFake;
      }
      if (num < nums[i]) {
        i++;
      }
    }
    console.log(arr.join(", "));
  }
};
calcSum(47);

// Bài 6: Viết chương trình đếm số lần kí tự  xuất hiện trong chuỗi với đầu vào là chuỗi và kí tự
const countLetterOccur = function (strInput, letter) {
  let count = 0;
  strInput = strInput.split("");
  strInput.forEach(function (value) {
    if (letter === value) {
      count++;
    }
  });
  console.log(count);
};
countLetterOccur("inplace.como", "o");

// Bài 7: Viết a JavaScript function to find the first not repeated character
let strTest = "abacddbec";
const firstNonRepeatedChar = function (str) {
  let arrOfStr = str.replace(" ", "").split("");

  // for (let item of arrOfStr) {
  //   if (arrOfStr.indexOf(item) === arrOfStr.lastIndexOf(item)) {
  //     return item;
  //   }
  // }
  let flag;
  for (let x = 0; x < arrOfStr.length; x++) {
    flag = 0;
    for (let y = 0; y < arrOfStr.length; y++) {
      if (arrOfStr[x] === arrOfStr[y]) {
        flag += 1;
      }
    }
    if (flag === 1) {
      return arrOfStr[x];
    }
  }
  return -1;
};
console.log(firstNonRepeatedChar(strTest));

// Bài 9: Viết lại Bubble Sort algorithm với hàm sort nhận vào hàm do người dùng định nghĩa và chạy 1 lần đối với phần tử mảng, thực hiện sắp xếp mảng tăng dần
const sortBubble = function (arr) {
  let len = arr.length;
  let haveSwap = false;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        haveSwap = true;
      }
    }
    if (!haveSwap) {
      break;
    }
  }
};
let arrBubbleSort = [3, 7, 1, 2];
sortBubble(arrBubbleSort);
console.log(arrBubbleSort);

// Bài 10: Viết 1 hàm chấp nhận đầu vào là mảng country name and Trả về longest country name as output
const longestCountryName = function (arr) {
  const result = arr.reduce(function (acc, curr) {
    if (acc.length < curr.length) {
      return curr;
    } else {
      return acc;
    }
  });
  console.log(result);
};
let Longest_Country_Name = ["Australia", "Germany", "United States of America"];
longestCountryName(Longest_Country_Name);

// Bài 11: Write a JavaScript function to filter false, null, 0 and blank values from an array
const checkFalsyValue = function (arr) {
  let trueArrayValue = arr.filter(function (value) {
    if (value) {
      return value;
    }
  });
  console.log(trueArrayValue);
};
let filter_array_value = [58, "", "abcd", true, null, false, 0];
checkFalsyValue(filter_array_value);

// Bài 12: Write a JavaScript function to remove a specific element from an array
const removeSpecificElement = function (arr, removeItem) {
  let newArr = arr.filter(function (value) {
    return value !== removeItem;
  });
  console.log(newArr);
};
let remove_array_element = [2, 5, 9, 6];
removeSpecificElement(remove_array_element, 5);

// Bài 13: Write a JavaScript function to find an array contains a specific element.
const checkContainElement = function (arr, checkItem) {
  let isTrue = false;
  arr.forEach(function (value) {
    if (value === checkItem) {
      isTrue = true;
    }
  });
  return isTrue;
};
let arrCheckContain = [2, 5, 9, 6];
console.log(checkContainElement(arrCheckContain, 5));

//  Bài 14: Write a JavaScript function to merge two arrays and removes all duplicates elements
const mergeArray = function (arr1, arr2) {
  let newArr = arr1.filter(function (value) {
    let isTrue = true;
    for (let i = 0; i < arr2.length; i++) {
      if (value === arr2[i]) {
        isTrue = false;
        break;
      }
    }
    if (isTrue) {
      return value;
    }
  });
  newArr = newArr.concat(arr2);
  console.log(newArr);
};
let mergeArr1 = [1, 2, 3];
let mergeArr2 = [2, 30, 1];
mergeArray(mergeArr1, mergeArr2);

// Bài 15: Write a JavaScript program to find duplicate values in a JavaScript array
const findDuplicateValue = function (arr) {
  const arrDuplicateValue = arr.filter(function (value, index) {
    return arr.indexOf(value) !== index;
  });
  const newArr = [];
  arrDuplicateValue.forEach(function (value) {
    if (!newArr.includes(value)) {
      newArr.push(value);
    }
  });
  console.log(newArr);
};
let arrDuplicateValue = [1, 2, 3, 4, 1, 3, 5, 3, 1];
findDuplicateValue(arrDuplicateValue);
