var getValueInputBeforeChange = 0;
var setQuantity = function (elm, type) {
	// type = 1: input
	// type = 0: button
	
	let getInput = elm.closest('.content').find('.input-changeQuantity');
	let getMaxQuantity = getInput.prop('max');
	let getQuantityInput = parseInt(getInput.val());
	let getButtonDown = elm.closest('.content').find('.button-changeQuantity[data-type="2"]');
	
	
	if (type == 0) {
		let getTypeButton = parseInt(elm.data('type'));// Tăng - giảm số lương
		// let getInput = elm.closest('.content').find('.input-changeQuantity');
		// let getMaxQuantity = getInput.prop('max');
		// let getQuantityInput = parseInt(getInput.val());
		if (getTypeButton == 1) {
			if (getQuantityInput < getMaxQuantity) {
				getInput.prop('value', getQuantityInput += 1);
				getButtonDown.prop("disabled", false);
			} else {
				alert("Vượt quá số lượng sản phẩm trong kho");
			}
		} else {
			getInput.prop('value', getQuantityInput -= 1);
			if (getQuantityInput <= 1) {
				getButtonDown.prop("disabled", true);
			}
		}
	} else {
		if (getQuantityInput > 1) {
			if (getQuantityInput <= getMaxQuantity) {
				getButtonDown.prop("disabled", false);
			} else {
				getInput.val(getValueInputBeforeChange);
				alert("Vượt quá số lượng sản phẩm trong kho");
			}
		} else {
			getButtonDown.prop("disabled", true);
		}
	}
}

$(document).ready(function () {
	$(document).on("click", ".button-changeQuantity", function () {
		setQuantity($(this), 0);
	});
	
	$(document).on("focus", ".input-changeQuantity", function () {
		getValueInputBeforeChange = $(this).val();
	});
	
	
	$(document).on("change", ".input-changeQuantity", function () {
		setQuantity($(this), 1);
	});
});
