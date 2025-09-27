/**
 * In Google Sheets,columns are name as a,b,c...z,aa,ab,ac,ad...az,aaa,aab,aac...aaz,aaaa,aaab and so on
 * Build a method that return the column index when the column name is passed
 * e.g. a : 1, 
 *      aa : 27, 
 *      af : 32
 *      aad : 56
 *      aaad : 82
 */

function calculateIndex(column){
    const columnArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    return columnArr.indexOf(column) + 1
}

function getColumnIndex(columnName){
    const length = columnName.length
    let columnIndex = 0
    if(length === 1) columnIndex = calculateIndex(columnName)

    if(length > 1){
        columnIndex = (26 * (length - 1))
        const columnSplitArr = columnName.split('')
        const lastElement = columnSplitArr[columnSplitArr.length - 1]
        columnIndex += calculateIndex(lastElement)
    }

    return columnIndex
}

console.log(getColumnIndex('aac'))