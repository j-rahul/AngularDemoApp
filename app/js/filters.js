'use strict';

eventsApp.filter('durations',function(){
    return function (duration) {
        switch (duration){
            case 1:
                return '1 Hour';
            case 2:
                return '5 Hours';
            case 3 :
                return '1 Day';
        }
    }
})