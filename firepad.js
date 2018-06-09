var editor;
function init() {
    var config = {
        apiKey: "AIzaSyAjZjSeuIkHqVShnTLueQdVYWUioEacLLM",
        authDomain: "learninfi-201000.firebaseapp.com",
        databaseURL: "https://learninfi-201000.firebaseio.com/"
    };
    firebase.initializeApp(config);
    // Get Firebase Database reference.
    var firepadRef = firebase.database().ref('wb/'+getQueryParam('roomId'));
    firepadRef.once('value', snapshot => {
        document.getElementById('loading').style.display = 'none';
    });
    // Create Ace editor.
    editor = ace.edit('firepad');
    editor.setOptions({enableLiveAutocompletion: true, showPrintMargin: false});
    editor.setTheme("ace/theme/cobalt"); // vibrant_ink, monokai
    // editor.setTheme("ace/theme/vibrant_ink");
    // editor.setTheme("ace/theme/monokai");
    editor.session.setUseWrapMode(true);
    editor.session.setMode("ace/mode/python");
    // Create Firepad.
    var firepad = Firepad.fromACE(firepadRef, editor);
}

const getQueryParam = (() => {
    let dict = {};
    try {
        let params = window.location.search.substr(1); // can raise exception if no `search`
        if (params !== "") {
            params.split("&").forEach(param => {
                let paramComponents = param.split('='); //split key, value pairs
                if (paramComponents.length === 2) {
                    let key = paramComponents[0];
                    let rawValue = paramComponents[1];
                    dict[key] = decodeURIComponent(rawValue.replace(/\+/g, " "));
                }
            });
        }
    } catch(e) {

    }

    return (key) => {
        if(key in dict){
            console.log(dict[key]);
            return dict[key];
        }
        return '';
    };
})();