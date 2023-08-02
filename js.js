// cách khai báo hàm
// cách 1 sử dụng từ khóa function : declaration  function
function name(params) {
    
}
// cách 2 sử dụng biến được gán bởi 1 function : expression function
const sum = function (params) { 

}
// cách 3 sử dụng hàm mũ tên : arrow funcion
const add = (params)=> {
    
}

//các phương thức làm việc với mảng ES6
//forEach(); dùng để duyệt mảng
let arrInt = [1, 2, 3, 4, 5, 6];
arrInt.forEach((current, index, array) => {
    console.log("vong lap thu" + index);
    console.log("gia tri phan tu hien tai" + current); // khong can dung array [i]
    console.log("mang chi doc" + array);
})
// reduce(); dùng để ghi nhớ giá trị sau mỗi lần lặp
// tính tổng các số chẵn trong mảng trên
let total = arrInt.reduce((sum, value, index, array) => {
// bắt buộc phải return cho biến sum
//sum = sum + value
    return value % 2 == 0 ? sum + value : sum;
    return sum + value;
}, 0)
console.log(total);
// Map(); dùng để tạoo ra 1 mảng mới có độ dài bằng mảng đã cho nhưng theo điều kiện nhất định
//ví dụ tính bình phương của từng phần tử trong mảng
let arrayPow = arrInt.map((value, index) => {
    return value%2 == 0 ? value/2: value*value
})
console.log(arrayPow);
// filter(); là bộ lọc các phần tử theo điều kiện xác định
//lọc các phần tử > 3
let arrayFilter = arrInt.filter((value, index) => {
    return value > 3
}) 
console.log(arrayFilter);

let arrString = ["táo", "nho", "vải", "sầu riêng", "mít", "ổi", "sung"];
// lọc những loại quả có chưa kí tự i : sử dụng includes 
let arrFilter = arrString.filter((value, index) => { 
    return value.includes("i");
})
console.log(arrFilter);