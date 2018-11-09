

describe("index.html", () => {
  it("includes div", () => {
    expect(document.querySelector('body').innerHTML).to.include('<div>')
  })
})


describe("index.js", () => {
  it("has each codealong function", () => {
    expect(addingEventListener).to.exist
    expect(preventingDefault).to.exist
    expect(stoppingPropagation).to.exist
  })
})
