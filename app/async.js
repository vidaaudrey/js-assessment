exports = (typeof window === 'undefined') ? global : window;

// don't know how, got answer from answers 
// Promise.resolve()  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
// 
exports.asyncAnswers = {
  async : function(value) {
    return new Promise(function(resolve, reject){
        return resolve(value);
    });
    // var dfd = $.Deferred();
    // setTimeout(function(){
    //     dfd.resolve(value);
    // }, 0);

    // return dfd.promise();
  },

  manipulateRemoteData : function(url) {
    var httpRequest = new XMLHttpRequest(); 
    return new Promise(function(resolve, reject){
        httpRequest.onreadystatechange = function(){
            if(httpRequest.readyState === XMLHttpRequest.DONE){
                if(httpRequest.status === 200){
                    var people = JSON.parse(httpRequest.responseText).people;
                    var names = people.map(function(person){
                        return person.name;
                    });
                    resolve(names.sort());

                } else {
                    reject();
                }
            }
        };
        httpRequest.open('GET', url);
        httpRequest.send();
    });
    // var dfd = $.Deferred();
    // $.ajax(url).then(function(res){
    //     var people = $.map(res.people, function(person){
    //         return person.name;
    //     });
    //     alert(people.sort());
    //     dfd.resolve(people.sort());
    // });
    // return dfd.promise();
  }
};
