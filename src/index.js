module.exports = function check(str, bracketsConfig) {
    let count = 0;
    let buff=[];
    for(let i = 0; i<str.length ; i++){
        for (let j = 0 ; j < bracketsConfig.length; j++){
            if (str[i] === bracketsConfig[j][0]){
                if (str[i] === bracketsConfig[j][1]){
                    if (buff[buff.length - 1] !== bracketsConfig[j][0]) buff.push(str[i]);
                    else buff.pop();
                }
                else buff.push(str[i]);
            }
            else if (str[i] === bracketsConfig[j][1] && str.length > 0){
                if(buff[buff.length-1] === bracketsConfig[j][0]) buff.pop();
                else return false;
            }
        }
    }
    // if (buff.length) return false;
    // else return true;
    return buff.length === 0 ? true : false;
}
