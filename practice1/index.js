let nums = [1, 2, 3]

// Задание №1 ------------------------------------
function sumArray(nums) {
    let sum = 0;
    for (let i = 0; i  < nums.length; i++) {
        sum += nums[i]
    }
    console.log("Сумма:", sum)
}

sumArray(nums)
// -----------------------------------------------

// Задание №2 ------------------------------------
function findMax(nums) {
    let max = 0;
    for (let i = 0; i  < nums.length; i++) {
        for (let j = 0; j  < nums.length - 1; j++) {
            if (nums[i] > nums[j]) {
                max = nums[i];
            }
        }
    }
    console.log("Максимальное значение:", max)
}

findMax(nums)
// -----------------------------------------------


// Задание №3 ------------------------------------
result = {
    "products": [
        { "id": 1, "name": "Laptop", "category": "Electronics", "price": 1000 },
        { "id": 2, "name": "Book", "category": "Education", "price": 20 },
        { "id": 3, "name": "Phone", "category": "Electronics", "price": 500 },
        { "id": 4, "name": "Pen", "category": "Office", "price": 2 }
    ]
};

function groupByCategory(data) {
    let filtered_products = result["products"]
    let categories = {}

    for (let i = 0; i  < filtered_products.length; i++) {
        if (categories[filtered_products[i]["category"]]) {
            categories[filtered_products[i]["category"]].push({
                "productName": filtered_products[i]["name"], 
                "price": filtered_products[i]["price"]
            })
        }
        else {
            categories[filtered_products[i]["category"]] = [{
                "productName": filtered_products[i]["name"], 
                "price": filtered_products[i]["price"]
            }]
        }
    } 

    console.log(categories)
}

groupByCategory(result)
// -----------------------------------------------