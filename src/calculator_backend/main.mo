actor Calculator {
  public func add(a: Nat, b: Nat) : async Nat {
    return a + b;
  };

  public func subtract(a: Int, b: Int) : async Int {
    return a - b;
  };

  public func multiply(a: Nat, b: Nat) : async Nat {
    return a * b;
  };

  public func divide(a: Nat, b: Nat) : async Nat {
    return a / b;
  };
};
