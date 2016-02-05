import Ember from 'ember';

let rentals = [{
  id: 1,
  title: 'Grant Old Mansion',
  owner: 'Veruca Salt',
  city: 'San Francisco'
}, {
  id: 2,
  title: 'Urban Living',
  owner: 'Mike tv',
  city: 'Seatle'

}];

export default Ember.Route.extend({
  model() {
    return rentals;
  }
});

//# sourceMappingURL=index-compiled.js.map