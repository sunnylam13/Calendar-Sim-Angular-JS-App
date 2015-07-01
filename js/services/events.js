/*
* Visit events.json. It's a JSON object containing a date and an an array of events. Let's fetch this data and display it in the app.
* https://s3.amazonaws.com/codecademy-content/courses/ltp4/events-api/events.json
* Create a service named events for getting this data. In a file named js/services/events.js, create a new service named events that gets data from the events API. Include this new JavaScript file in the view as a new script element.
 */

app.factory('events', ['$http', function($http) { 
 return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/events-api/events.json') 
           .success(function(data) { 
             return data; 
           }) 
           .error(function(err) { 
             return err; 
           }); 
}]);