console.log("Hello world");

// 1. function declaration
function globalFunction() {
  console.log("global function");
}

globalFunction();

// 2. function expression
// khai báo hàm, \\ parameter
const nameInfor = function (name, age) {
  console.log("global function nameInfor " + name + " age: " + age);
};
let nameInforClone = nameInfor;

//thực thi hàm
nameInforClone("Đức", 24); // argument

// C1
// const ages = [1, 2, 19, 20, 21];
// Array.prototype.findCustom = function (callback) {
//   if (Array.isArray(this) && this.length > 0) {
//     for (let element of this) {
//       const isTrue = callback(element);
//       if (isTrue) {
//         return element;
//       }
//     }
//     return undefined;
//   }
// };

// const result = ages.findCustom(function (value) {
//   if (value > 18) {
//     return true;
//   }
//   return false;
// });

// C2

// const ages = [1, 2, 19, 20, 21];
// const findCustom = function (callback, arrayInput) {
//   if (Array.isArray(arrayInput) && arrayInput.length > 0) {
//     for (let element of arrayInput) {
//       const isTrue = callback(element);
//       if (isTrue) {
//         return element;
//       }
//     }
//     return undefined;
//   }
// };

// const result = findCustom(function (value) {
//   if (value > 18) {
//     return true;
//   }
//   return false;
// }, ages);

// console.log(result);

/*
  ******* LƯU Ý ********
  1. Các hàm luôn nhận vào argument là 1 function do người dùng định nghĩa
  2. Function Argument luôn luôn đc thục thi với mỗi element trong hàm
  3. Function thực thi luôn luôn nhận vào element array và phải trả về kết quả nào đó
  4. Dựa vào kết quả trả về của function thực thi, function core sẽ trả về kết quả tương ứng
*/

/* 
  Hàm find nhận vào một callback và element array, nếu element nào trong array thoả mãn điều kiện thì return element đó, còn không có element nào thoả mãn thì return undefined.
*/

/*
 ******* Hàm findIndex *******
 */

Array.prototype.findIndexCustom = function (callback) {
  if (Array.isArray(this) && this.length > 0) {
    for (let index = 0; index < this.length; index++) {
      const isTrue = callback(this[index]);
      if (isTrue) {
        return index;
      }
    }
    return -1;
  }
};
const arr2 = [5, 12, 8, 130, 44];
const result2 = arr2.findIndexCustom(function (value) {
  if (value > 13) {
    return true;
  }
  return false;
});

console.log("result 2:", result2);

const arr3 = [1, 2, 3, 4, 5];
Array.prototype.someCustom = function (callback) {
  if (Array.isArray(this) && this.length > 0) {
    for (let item of this) {
      let isTrue = callback(item);
      if (isTrue) {
        return true;
      }
    }
    return false;
  }
};
const result3 = arr3.someCustom(function (value) {
  if (value % 2 === 0) {
    return true;
  }
  return false;
});
console.log("result 3:", result3);

const arr4 = [1, 30, 41, 29, 10, 13];
Array.prototype.everyCustom = function (callback) {
  let index = 0;
  if (Array.isArray(this) && this.length > 0) {
    for (let item of this) {
      let isTrue = callback(item);
      index++;
      if (!isTrue) {
        console.log(`Đã lặp ${index} lần`);
        return false;
      }
    }
    return true;
  }
};
const result4 = arr4.everyCustom(function (value) {
  if (value >= 40) {
    return false;
  }
  return true;
});
console.log("result 4:", result4);

const arr5 = [1, 4, 9, 16];
Array.prototype.mapCustom = function (callback) {
  let arr = [];
  for (let item of this) {
    arr.push(callback(item));
  }
  return arr;
};
const arr6 = arr5.mapCustom(function (value) {
  return value * 2;
});

console.log(arr6);

const users = [
  { name: "duc", email: "vietduc122@gmail.com" },
  { name: "dung", email: "dung@gmail.com" },
  { name: "minh", email: "minh@gmail.com" },
];

const arr7 = users.mapCustom((item) => {
  return {
    [item.email]: item,
  };
});
console.log(arr7);

Array.prototype.filterCustom = function (callback) {
  if (Array.isArray(this) && this.length > 0) {
    let arr = [];
    for (let item of this) {
      if (callback(item)) {
        arr.push(item);
      }
    }
    return arr;
  }
};

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
const result5 = words.filterCustom((item) => item.length > 6);
console.log(result5);

// Có giá trị khởi tạo
// Lượt chạy thứ nhất accumulator = initialValue, cụ thể là bằng 0
// Lượt chạy thứ 1: accumulator = 0, currentValue = 1 -> return 0 + 1 = 1
// Lượt chạy thứ 2: accumulator = 1, currentValue = 2 -> return 1 + 2 = 3
// Lượt chạy thứ 3: accumulator = 3, currentValue = 3 -> return 3 + 3 = 6
// Lượt chạy thứ 4: accumulator = 6, currentValue = 4 -> return 6 + 4 = 10

// Không có giá trị khởi tạo
// Lượt chạy thứ 1: accumulator = 1, currentValue = 2 -> return 1 + 2 = 3
// Lượt chạy thứ 2: accumulator = 3, currentValue = 3 -> return 3 + 3 = 6
// Lượt chạy thứ 3: accumulator = 6, currentValue = 4 -> return 6 + 4 = 10

const array8 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array8.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   []
// );

// console.log(sumWithInitial);
Array.prototype.reduceCustom = function (callback, initialValue) {
  let i = 0;
  let accumulator;
  if (initialValue === undefined) {
    accumulator = this[0];
    i++;
  } else {
    accumulator = initialValue;
  }
  while (i < this.length) {
    accumulator = callback(accumulator, this[i], i);
    i++;
  }
  return accumulator;
};
const result6 = array8.reduceCustom(function (
  accumulator,
  currentValue,
  index
) {
  return accumulator + currentValue;
},
0);
console.log(result6);

let arrayInput2 = [1, 2, 3, 1, 2, 2, 3, 3, 1, 1, 4, 4, 4, 4, 4, 4, 4];

function CountNumberOccurence(arrayInput, numberTest) {
  // const resultCount = arrayInput.reduce(function (acc, curr) {
  //   if (curr === numberTest) {
  //     acc += 1;
  //   }
  //   return acc;
  // }, 0);
  // return resultCount;

  const result = arrayInput.reduce(function (acc, curr) {
    let occur;
    if (curr === occur) {
      occur = 1;
    } else {
      occur = 0;
    }
    return acc + occur;
  }, 0);
  return result;
}

const resultCount = CountNumberOccurence(arrayInput2, 5);
console.log(resultCount);

const maxElementArray = function (arrayInput) {
  let result = arrayInput.reduce(function (acc, curr) {
    if (curr > acc) {
      return curr;
    } else {
      return acc;
    }
  });
  return result;
};
const numberMax = maxElementArray([19, 18, 30, 20, 40]);
console.log(numberMax);

Array.prototype.forEachCustom = function (callback) {
  if (Array.isArray(this) && this.length > 0) {
    let index = 0;
    for (let value of this) {
      callback(value, index);
      index++;
    }
  }
};

let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach((value, index) => {
  sum += value;
});
console.log(`Sum of forEach: ${sum}`);
