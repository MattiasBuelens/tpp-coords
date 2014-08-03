// Binding checkboxes to state observables
ko.bindingHandlers.tppState = {
    init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
        $(element).on("change", function(e) {
			var value = valueAccessor();
			value(value().next);
			e.preventDefault();
		});
    },
    update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
        var state = ko.unwrap(valueAccessor());
		$(element)
			.prop("checked", state === State2.HIT)
			.prop("indeterminate", state === State2.MISS);
    }
};