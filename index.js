// Your code here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
function mondayWork(activity2 = "go to the office"){
    return `This Monday, I will ${activity2}.`;
}
function wrapAdjective(highlight="*"){
    return function (parameter ="special"){
        return `You are ${highlight}${parameter}${highlight}!`;
    
    }
}
wrapAdjective("%")("a dedicated programmer")