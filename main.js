// Write your JavaScript code here!
var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
];

// regular iteration through array
// for (var i = 0; i < planets.length; i++) { 

$('input[name=pluto]').click(function() {
    console.log('i got clicked');
    if ($('input[name=pluto]').prop('checked')) {
        var plutoIndex = planets.findIndex(function(planet) {
            if (planet[0] === 'Pluto') {
                return true;
            } else {
                return false;
            }
        })
        planets.splice(plutoIndex, 1);
    } else {

        planets.unshift(['Pluto', 0.06]);
    }

    generatePlanets();
})

$('#showAdd').click(function() {
    $('.addFields').toggleClass('hidden');
})


function generatePlanets() {

    $('#planets').html('');

    for (var i = planets.length - 1; i >= 0; --i) {

        $('#planets').append('<option>' + planets[i][0] + '</option>');

    }
}

generatePlanets();

$('#add').click(function() {
    var newArray = []
    var addPlanet = $('#addPlanet').val();
    var addValues = parseFloat($('#addValue').val());

    newArray.push(addPlanet);
    newArray.push(addValues);

    planets.push(newArray);
    generatePlanets();
    $('#addPlanet').val('');
    $('#addValue').val('');
    window.alert('Your Planet has been added!');

})



function calculateWeight(weight, planetName) {

    var planetName = $('#planets').val();

    for (i = 0; i < planets.length; i++) {

        if (planets[i][0] === planetName) {

            return planets[i][1] * weight;

        }

    }
}

function handleClickEvent(e) {

    var userWeight = $('#user-weight').val();

    var planetName = $('#planets').val();

    var result = calculateWeight(userWeight, planetName);

    $('#output').text('If you were on ' + planetName + ', you would weigh ' + result + 'lbs!');

}

$('#calculate-button').click(function() {

    handleClickEvent();

})