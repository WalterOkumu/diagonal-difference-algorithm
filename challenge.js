function diagonalDifference(arr) {
    // Write your code here

    let mainSum = 0
    let secondarySum = 0
    
    for (let i = 0; i < arr.length; i++) {
        mainSum += arr[i][i]
        secondarySum += arr[i][arr.length - 1 - i]
    }
    
    return Math.abs(mainSum - secondarySum)
}
