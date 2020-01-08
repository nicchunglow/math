const add = function(a,b){
    return a+b;
};

const math ={
    add:add
    };

module.exports = math;

const result = math.add(3,5);
console.log(result);