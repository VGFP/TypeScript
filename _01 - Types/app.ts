function add(n1: number, n2: number) {
  console.log("n1 type: " + typeof n1 + ", n2 type: " + typeof n2);
  return n1 + n2;
}

const number1 = 5;
const number2 = 5.3;

const result = add(number1, number2);
console.log(result);

/****************************/
/************TUPLE***********/
/****************************/

// Not present in JavaScript
// Fixed length and type array

const obj2: {
  object_name: string;
  value: number;
  //Time is a tuple
  //Day - number, Month - string, Year - number
  time: [number, string, number];
} = {
  object_name: `Test object`,
  value: 44,

  time: [12, "April", 1967],
};

/****************************/
/*************ENUM***********/
/****************************/

// Not present in JavaScript

let role_names: string[];
role_names = ["ADMIN", "READ_ONLY", "AUTHOR"];

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const user = {
  name: "TestUser01",
  age: 21,
  role: Role.AUTHOR,
};

console.log("User role: " + role_names[user.role]);

/****************************/
/************UNION***********/
/****************************/

function fun01(
  inp1: number | string | boolean,
  inp2: number | string | boolean
) {
  let out;
  if (typeof inp1 === "number" && typeof inp2 === "number") {
    out = inp1 + inp2;
  }
  if (typeof inp1 === "boolean" && typeof inp2 === "boolean") {
    out = inp1 && inp2;
  } else {
    out = inp1.toString() + inp2.toString();
  }

  console.log(
    "Fun01 out for inp1 type: " + typeof inp1 + " and inp2 type: " + typeof inp2 + ", is: " + out
  );

  return out;
}

const output1 = fun01("Hello", true);

const output2 = fun01(false, true);

const output3 = fun01(12, "1");

