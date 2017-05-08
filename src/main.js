function defalutDiscountRate() {
	return .10;
}

function applyDiscount(cost, discount = defalutDiscountRate()) {

	// discount = discount || .10;
	
	return cost - (cost * discount);
}

alert(applyDiscount(100));