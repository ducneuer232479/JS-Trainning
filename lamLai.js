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

const ages = [1, 2, 19, 20, 21];

Array.prototype.findCustom = function (callback) {
  if (Array.isArray(this) && this.length > 0) {
    let index = 0;
    for (let value of this) {
      let isTrue = callback(value, index);
      if (isTrue) {
        return value;
      }
      index++;
    }
    return undefined;
  }
};
const resultFind = ages.findCustom(function (value, index) {
  if (value > 18) {
    return true;
  } else {
    return false;
  }
});
console.log("Result find method:", resultFind);

const arrFindIndex = [5, 12, 8, 130, 44];

Array.prototype.findIndexCustom = function (callback) {
  if (Array.isArray(this) && this.length > 0) {
    let index = 0;
    for (let value of this) {
      let isTrue = callback(value, index);
      if (isTrue) {
        return index;
      }
      index++;
    }
    return -1;
  }
};

const resultFindIndex = arrFindIndex.findIndexCustom(function (value) {
  if (value === 20) {
    return true;
  }
  return false;
});
console.log("Result find index method:", resultFindIndex);

const arrSome = [1, 2, 3, 4, 5];
Array.prototype.someCustom = function (callback) {
  if (Array.isArray(this) && this.length > 0) {
    let index = 0;
    for (let value of this) {
      let isTrue = callback(value, index);
      if (isTrue) {
        return true;
      }
      index++;
    }
    return false;
  }
};
const resultSome = arrSome.someCustom(function (value, index) {
  if (value % 2 === 0) {
    return true;
  }
  return false;
});
console.log("Result some method:", resultSome);

const arrEvery = [1, 30, 39, 29, 10, 13, 20];
Array.prototype.everyCustom = function (callback) {
  if (Array.isArray(this) && this.length > 0) {
    let index = 0;
    for (let value of this) {
      let isTrue = callback(value, index);
      if (!isTrue) {
        return false;
      }
      index++;
    }
    return true;
  }
};
const resultEvery = arrEvery.everyCustom(function (value, index) {
  if (value < 40) {
    return true;
  }
  return false;
});
console.log("Result every method:", resultEvery);

const arrMap = [1, 4, 9, 16];
Array.prototype.mapCustom = function (callback) {
  if (Array.isArray(this) && this.length > 0) {
    let arr = [];
    let index = 0;
    for (let value of this) {
      arr.push(callback(value, index));
      index++;
    }
    return arr;
  }
};

const newArrMap = arrMap.mapCustom(function (value, index) {
  return value * 2;
});
console.log("New array map:", newArrMap);

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
Array.prototype.filterCustom = function (callback) {
  if (Array.isArray(this) && this.length > 0) {
    let index = 0;
    let arr = [];
    for (let value of this) {
      let isTrue = callback(value, index);
      if (isTrue) {
        arr.push(value);
      }
      index++;
    }
    return arr;
  }
};
const resultFilter = words.filterCustom(function (value, index) {
  return value.length > 6;
});
console.log(resultFilter);

const arrReduce = [1, 2, 3, 4];
Array.prototype.reduceCustom = function (callback, intialValue) {
  if (Array.isArray(this) && this.length > 0) {
    let accumulator;
    let index = 0;
    if (intialValue !== undefined) {
      accumulator = intialValue;
    } else {
      accumulator = this[0];
      index++;
    }
    while (index < this.length) {
      accumulator = callback(accumulator, this[index], index);
      index++;
    }
    return accumulator;
  }
};
const resultReduce = arrReduce.reduceCustom(function (
  accumulator,
  currentValue,
  index
) {
  return accumulator + currentValue;
});
console.log(resultReduce);

const multiArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const resultReduce2 = multiArr.reduceCustom(function (
  accumulator,
  currentValue
) {
  return accumulator.concat(currentValue);
},
[]);
console.log(resultReduce2);

let arrayInput = [1, 2, 3, 1, 2, 2, 3, 3, 1, 1, 4, 4, 4, 4, 4, 4, 4];

const countOccur = function (arrayInput, number) {
  // let occur = arrayInput.reduceCustom(function (accumulator, currentValue) {
  //   if (currentValue === number) {
  //     accumulator += 1;
  //   }
  //   return accumulator;
  // }, 0);
  // return occur;
  let result = arrayInput.reduceCustom(function (
    accumulator,
    currentValue,
    index
  ) {
    let occur = currentValue === number ? 1 : 0;
    // if (currentValue === number) {
    //   occur = 1;
    // } else {
    //   occur = 0;
    // }
    return accumulator + occur;
  },
  0);
  return result;
};
const numberOccur = countOccur(arrayInput, 1);
console.log(numberOccur);

const maxElementArray = function (arrayInput) {
  let result = arrayInput.reduceCustom(function (
    accumulator,
    currentValue,
    index
  ) {
    return currentValue > accumulator ? currentValue : accumulator;
  });
  return result;
};
console.log(maxElementArray([10, 2, 3, 11]));
