const {returnTwo, greeting, add, multiply, divide, subtract} = require(`./functions`);

test(`Check to see if the function returns two`, () => {
    expect(returnTwo()).toEqual(2)
})

describe(`greeting Function Test`, () => {
    test(`Check greeting to return "Hello, James"`, () => {
        expect(greeting(`James`)).toBe(`Hello James`)
    })

    test(`Check greeting to return "Hello, James"`, () => {
        expect(greeting(`Jill`)).toBe(`Hello Jill`)
    })
})

describe(`Math functions`, () => {
    test(`Check add to equal 7`, () => {
        expect(add(2, 5)).toEqual(7)
    })

    test(`Check multiply to equal 9`, () => {
        expect(multiply(3,3)).toEqual(9)
    })

    test(`Check divide to equal 3`, () => {
        expect(divide(9,3)).toEqual(3)
    })

    test(`Check subtract to equal 0`, () => {
        expect(subtract(3,3)).toEqual(0)
    })

})