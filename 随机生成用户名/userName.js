window.fn = {
    //随机生成用户名charBit[字母数量], starNum[星号数量], isFrontStar[星号是否在前面]
    randomName: function (charBit, starNum, isFrontStar) {
        let char = "", star = "";
        for (let i = 0; i < charBit; i++) {
            let charCode, rand = Math.random();
            //用户名必须是字母开头     空格：32； 0：48； A：65； a：97；
            if (i === 0) {
                charCode = rand < 0.5 ? 97 : 65;
                charCode += Math.floor(Math.random() * 26);
            } else {
                let lt = rand <= 0.25;
                charCode = lt ? 48 : (rand < 0.5 ? 97 : 65);
                charCode += Math.floor(Math.random() * (lt ? 10 : 26));
            }
            char += String.fromCharCode(charCode);
        }
        for (let i = 0; i < starNum; i++) {
            star += "*";
        }
        return isFrontStar ? (star + char) : (char + star);
    },
};