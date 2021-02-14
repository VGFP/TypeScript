function add(n1, n2) {
    console.log("n1 type: " + typeof n1 + ", n2 type: " + typeof n2);
    return n1 + n2;
}
var number1 = 5;
var number2 = 5.3;
var result = add(number1, number2);
console.log(result);
/****************************/
/************TUPLE***********/
/****************************/
// Not present in JavaScript
// Fixed length and type array
var obj2 = {
    object_name: "Test object",
    value: 44,
    time: [12, "April", 1967]
};
/****************************/
/*************ENUM***********/
/****************************/
// Not present in JavaScript
var role_names;
role_names = ["ADMIN", "READ_ONLY", "AUTHOR"];
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var user = {
    name: "TestUser01",
    age: 21,
    role: Role.AUTHOR
};
console.log("User role: " + role_names[user.role]);
/****************************/
/************UNION***********/
/****************************/
function fun01(inp1, inp2) {
    var out;
    if (typeof inp1 === "number" && typeof inp2 === "number") {
        out = inp1 + inp2;
    }
    if (typeof inp1 === "boolean" && typeof inp2 === "boolean") {
        out = inp1 && inp2;
    }
    else {
        out = inp1.toString() + inp2.toString();
    }
    console.log("Fun01 out for inp1 type: " + typeof inp1 + " and inp2 type: " + typeof inp2 + ", is: " + out);
    return out;
}
var output1 = fun01("Hello", true);
var output2 = fun01(false, true);
var output3 = fun01(12, "1");
