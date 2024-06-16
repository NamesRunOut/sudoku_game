function ifSafe(a, h, w, num){
        let count = 0;
        for (let i=0;i<9;i++){
            if (a[h][i]===num) count++;      
        }
        if (count>1) return false;
        count=0;
        for (let i=0;i<9;i++){
            if (a[i][w]===num) count++;
        }
        if (count>1) return false;
        count=0;
        let squareRowStart=h-h%3;
        let squareColStart=w-w%3;
        for (let i=squareRowStart;i<squareRowStart+3;i++){
            for (let j=squareColStart;j<squareColStart+3;j++){
                if (a[i][j]===num) count++;
            }
        }
        if (count>1) return false;
        return true;
}

function check(board){
    let b2d = [[],[],[],[],[],[],[],[],[]];
    let bi = 0;
    for (let i=0;i<9;i++){
        for (let j=0;j<9;j++){
          if (board[bi]===0) return false;
          b2d[i][j] = board[bi++]
        }
    }
    for (let i=0;i<9;i++){
        for (let j=0;j<9;j++){        
          if(!ifSafe(b2d, i, j, b2d[i][j])) return false;
        }
    }
    return true
}

export default check;