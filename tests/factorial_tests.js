describe('Factorial tests', function(){
  var app;

  beforeEach(function(){
    app = YoApp.create();
  });

  it('should exist', function () {
    expect(app.factorial).toBeDefined();
  });

  it("should know how to factorial", function() {
    expect(app.factorial(5)).toEqual(120);
    expect(app.factorial(10)).toEqual(3628800);
  });

  it("should return the number of times the app has been executed via app.getExecutionCount()", function() {
    app.factorial(5);
    app.factorial(10);
    expect(app.getExecutionCount()).toEqual(2);
  });

  it("should cache the result of an execution", function() {
    app.factorial(5);
    app.factorial(5);
    expect(app.getExecutionCount()).toEqual(1);
  });
});