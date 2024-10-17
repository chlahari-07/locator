module.exports.homelist = function (req, res) {
    res.render('locations-list', {
        title: 'Hostel Explorer - Find a place to stay',
        pageHeader: {
            title: 'Hostel Explorer',
            strapline: 'Find places to stay!'
        },
        sidebar: "Looking for good place to stay? Hostel Explorer helps you find places to stay near to your work or study place.Let Hostel Explorer help you find the place you're looking for.",
        locations: [{
            name: 'Nextgen Hostels',
            address: 'Swarnagiri colony, Pocharam, Hyderabad',
            rating: 4,
            cost:'Rooms Starting From: 7k - 10k',
            facilities: ['Homely food', 'Premium wifi','bus facility','washing machine'],
            distance: '2km'
        }, {
            name: 'Ganapathi Hostels',
            address: 'Arundathi colony, Jodimetla, Hyderabad',
            rating: 3,
            cost:'Rooms Starting From: 6k - 9k',
            facilities: ['Homely food', 'Premium wifi','washing machine'],
            distance: '1.5km'
        }, {
            name: 'Harika Hostels',
            address: 'chowdariguda, Hyderabad',
            rating: 2,
            cost:'Rooms Starting From: 5k - 8k',
            facilities: ['Homely food', 'Premium wifi','bus facility'],
            distance: '6km'
        }]
    });
};
module.exports.locationInfo = function (req, res) {
    res.render('locations-info', { title: 'LocationInfo' });
};
module.exports.locationInfo1 = function (req, res) {
    res.render('locations-info1', { title: 'LocationInfo1' });
};
module.exports.locationInfo2 = function (req, res) {
    res.render('locations-info2', { title: 'LocationInfo2' });
};
module.exports.addReview = function (req, res) {
    res.render('locations-review-form', { title: 'ADD REVIEW' });
};