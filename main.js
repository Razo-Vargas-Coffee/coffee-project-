(function() {
    "use strict"

    function renderCoffee(coffee) {

        let html = '<div class="coffee d-block col-4 mx-auto p-auto">';
        html += '<h1>' + coffee.name + '</h1>';
        html += '<p>' + coffee.roast + '</p>';
        html += '</div>';

        return html;

    }

    function renderCoffees(coffees) {
        let html = '';
        for (let i = 0; i < coffees.length; i++) {
            html += renderCoffee(coffees[i]);
        }
        return html;
    }



function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    coffees.forEach(function (coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        } else if (roastSelection.value === 'all') {
            filteredCoffees.push(coffee);
        }
    });
        tbody.innerHTML = renderCoffees(filteredCoffees);

}
    function searchCoffees() {
        let searchRoast = searchBox.value.toUpperCase();
        let filteredCoffees = [];
        // console.log(searchRoast);
        coffees.forEach(function(coffee) {
            if (coffee.name.toUpperCase().includes(searchRoast)) {
                filteredCoffees.push(coffee);
                // console.log(filteredCoffees);
            }
        });
        tbody.innerHTML = renderCoffees(filteredCoffees);
    }
    function addCoffees (input) {
        var addID = coffees.length+1;
        var addName = inputName.value.toString();
        var addRoast = inputRoast.value.toString();
        input = {id: addID, name: addName, roast: addRoast};
        coffees.push(input);
        console.log(coffees);
        tbody.innerHTML = renderCoffees(coffees);

    }


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
        var coffees = [
            {id: 1, name: 'Light City', roast: 'light'},
            {id: 2, name: 'Half City', roast: 'light'},
            {id: 3, name: 'Cinnamon', roast: 'light'},
            {id: 4, name: 'City', roast: 'medium'},
            {id: 5, name: 'American', roast: 'medium'},
            {id: 6, name: 'Breakfast', roast: 'medium'},
            {id: 7, name: 'High', roast: 'dark'},
            {id: 8, name: 'Continental', roast: 'dark'},
            {id: 9, name: 'New Orleans', roast: 'dark'},
            {id: 10, name: 'European', roast: 'dark'},
            {id: 11, name: 'Espresso', roast: 'dark'},
            {id: 12, name: 'Viennese', roast: 'dark'},
            {id: 13, name: 'Italian', roast: 'dark'},
            {id: 14, name: 'French', roast: 'dark'},
        ];

    // function addCoffees (input) {
    //     var addID = coffees.length+1;
    //     var addName = inputName.value.toString();
    //     var addRoast = inputRoast.value.toString();
    //     input = {id: addID, name: addName, roast: addRoast};
    //     coffees.push(input);
    //     console.log(coffees);
    //     tbody.innerHTML = renderCoffees(coffees);
    //
    // }
    var tbody = document.querySelector('#coffees');
    var submitButton = document.querySelector('#submit');
    var roastSelection = document.querySelector('#roast-selection');
    var searchBox = document.querySelector('#searchBox');

    tbody.innerHTML = renderCoffees(coffees);

    // submitButton.addEventListener('click', updateCoffees);
    roastSelection.addEventListener('change', updateCoffees);
    searchBox.addEventListener('keyup', searchCoffees);

	// coffee-selection = 1; //var that keeps track of which table is visible (1 or 2)
	// function change_table() {
	// 	t1 = document.getElementById("TABLE1");
	// 	t2 = document.getElementById("TABLE2");
	// 	if(visible == 1) {
	// 		visible = 2;
	// 		t1.style.display = 'none';
	// 		t2.style.display = 'block';
	// 	} else {
	// 		visible = 1;
	// 		t1.style.display = 'block';
	// 		t2.style.display = 'none';
	// 	}
	// }

})();