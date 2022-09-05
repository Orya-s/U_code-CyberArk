// const { default: test } = require('node:test')
const Exercises = require('./ex1')
const ex = new Exercises()

// ex 1
test("should return true if n is even, false otherwise", () => {
    let n = ex.isEven(20)
    expect(n).toBeTruthy()

    let n2 = ex.isEven(1)
    expect(n2).toBeFalsy()

    let n3 = ex.isEven(-1)
    expect(n3).toBeFalsy()

    let n4 = ex.isEven(0)
    expect(n4).toBeTruthy()

    let n5 = ex.isEven("a")
    expect(n5).toBeFalsy()

    expect(ex.isEven()).toBeFalsy()
})    

// ex 2
test("should remove at least one element from the array `arr`", () => {
    let arr = [2, 3, 4, 5, 6]
    expect(ex.removeAtLeastOne(arr)).not.toHaveLength(5);

    let arr2 = [2, 3, 4]
    expect(ex.removeAtLeastOne(arr2)).not.toHaveLength(3);

    let arr3 = []
    expect(ex.removeAtLeastOne(arr3)).toHaveLength(0);

    let arr4 = ["eeeee"]
    expect(ex.removeAtLeastOne(arr4)).toHaveLength(0);

    let arr5 = ["a", "d"]
    expect(ex.removeAtLeastOne(arr5)).not.toHaveLength(2);
})

// ex 3
test(`should return a clean string without these symbols: "!", "#", ".", ",", "'"`, () => {
    let str1 = "abc"    // a string containing a few characters, all legal
    expect(ex.simplify(str1)).toMatch(/abc/)

    let str2 = "a"      // a string with 1 legal char
    expect(ex.simplify(str2)).toMatch(/a/)

    let str3 = "!"      // a string with an illegal char
    expect(ex.simplify(str3)).not.toMatch(/!/)

    let str4 = ".!#"    // a string containing a few characters, all illegal
    expect(ex.simplify(str4)).not.toMatch(/.!#/)
    
    let str5 = "a,a"    // a string containing a few characters, with an illegal one in the middle
    expect(ex.simplify(str5)).not.toMatch(/,/)

    let str6 = ".bc,d'e!#"     // a string containing a few characters, with both legal and illegal, 
                            // some are consecutive, some are not. 
    expect(ex.simplify(str6)).toMatch(/bcde/)

})

// ex 4
test("should verify that there is at least one boolean in the array", () => {
    let arr1 = []
    expect(ex.validate(arr1)).toEqual({error: "Need at least one boolean"});

    let arr2 = [1]
    expect(ex.validate(arr2)).toEqual({error: "Need at least one boolean"});

    let arr3 = [true]
    expect(ex.validate(arr3)).toEqual(true);

    let arr4 = [false]
    expect(ex.validate(arr4)).toEqual(false);

    let arr5 = [1, true]
    expect(ex.validate(arr5)).toEqual(true);

    let arr6 = [3, "hh", false, 1]
    expect(ex.validate(arr6)).toEqual(false);

    let arr7 = [true, false, true]
    expect(ex.validate(arr7)).toEqual(true);

    let arr8 = [false, false, true]
    expect(ex.validate(arr8)).toEqual(false);

    let arr9 = [true,"", false, 1,true]
    expect(ex.validate(arr9)).toEqual(true);

    let arr10 = [false, 22, "e", false, true, 1]
    expect(ex.validate(arr10)).toEqual(false);
})
