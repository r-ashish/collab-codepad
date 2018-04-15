var editor;
function init() {
    // Initialize Firebase.
    // TODO: replace with your Firebase project configuration.
    var config = {
        apiKey: "AIzaSyAjZjSeuIkHqVShnTLueQdVYWUioEacLLM",
        authDomain: "learninfi-201000.firebaseapp.com",
        databaseURL: "https://learninfi-201000.firebaseio.com/"
    };
    firebase.initializeApp(config);
    // Get Firebase Database reference.
    var firepadRef = firebase.database().ref();
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