describe("triangulate", function() {
  it("is not a triangle if two sides are less or equal to third side", function() {
    expect(triangulate(1, 2, 1)).to.equal(false);
  });

  it("is equilateral if all sides are the same", function(){
    expect(triangulate(3, 3, 3)).to.equal("equilateral");
  });

  it("is isosceles if two sides are the same", function(){
    expect(triangulate(4, 4, 6)).to.equal("isosceles");
  });

  it("is scalene if no two sides are equal", function() {
    expect(triangulate(4, 2, 3)).to.equal("scalene");
  });
});
