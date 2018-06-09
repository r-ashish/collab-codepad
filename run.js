var LANGS = {
    // 10:["C#", "csharp"],
    7: ["C/C++", "c_cpp"],
    // 2: ["Clojure", "clojure"],
    8: ["Java", "java"],
    // 6: ["Go", "go"],
    4: ["JavaScript (Plain)", "javascript"],
    3: ["PHP", "php"],
    0: ["Python 2", "python"],
    16: ["Python 3", "python"],    
    // 1: ["Ruby", "ruby"],
    // 5: ["Scala", "scala"],
    // 9: ["VB.NET", "vbsccript"],
    11: ["Bash", "sh"],
    // 12: ["Objective-C","objectivec"],
    // 13: ["MySQL","sql"],
    // 14: ["Perl", "perl"],
    // 15: ["Rust", "rust"],
}
var select = $("#lang-select");

for(var lang in LANGS){
    select.append($('<option>', { 
        value: lang,
        text : LANGS[lang][0]
    }));
}
var selectList = $("#lang-select option");
selectList.sort(function(a,b){
    a = a.text;
    b = b.text;
    return a > b?1:-1;
})
select.html(selectList);

const runningTerminalMessage = '> run cool_dudes_code & show_output<br><br>';

$('#run').on('click', function() {
    document.getElementById("output").innerHTML = runningTerminalMessage + "Running...";
    document.getElementById("error").innerHTML = ""; 
    var langid = $('#lang-select').val();
    var codeF = editor.getValue();
    var stdin = $('#stdin').val();

    var json = {
        language: langid,
        code: codeF,
        stdin:stdin
    };
    // console.log(json);

    $.post("http://localhost:9000/compile", json, function(data) {
        // console.log(data);
        if(data.errors===undefined || data.errors === ""){
            document.getElementById("output").innerHTML = runningTerminalMessage + data.output;
        }else{
            setErrorMessage(data.errors);
        }
    }).fail(function(response) {
        setErrorMessage("Failed to connect to the server, try again later!");
    });
});

function setErrorMessage(msg){
    document.getElementById("output").innerHTML = runningTerminalMessage;
    document.getElementById("error").innerHTML = msg;
}

window.onload = (e) => {
    init();
    const langPrefFirepad = firebase.database().ref('wb/'+getQueryParam('roomId')+'-langPref');
    select.on('change', function(){
        langPrefFirepad.set(parseInt(this.value));
        editor.session.setMode("ace/mode/"+ LANGS[parseInt(this.value)][1]);
    });

    langPrefFirepad.once('value', snapshot => {
        const langPref = snapshot.val()!==null?snapshot.val():5;
        select.val(langPref);
        editor.session.setMode("ace/mode/"+ LANGS[langPref][1]);
    });
}