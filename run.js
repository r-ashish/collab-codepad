var LANGS = {
    10:["C#", "csharp"],
    7: ["C/C++", "c_cpp"],
    2: ["Clojure", "clojure"],
    8: ["Java", "java"],
    6: ["Go", "go"],
    4: ["JavaScript (Plain)", "javascript"],
    3: ["PHP", "php"],
    0: ["Python 2", "python"],
    16: ["Python 3", "python"],    
    1: ["Ruby", "ruby"],
    5: ["Scala", "scala"],
    9: ["VB.NET", "vbsccript"],
    11: ["Bash", "bash"],
    12: ["Objective-C","objectivec"],
    13: ["MySQL","sql"],
    14: ["Perl", "perl"],
    15: ["Rust", "rust"],
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
select.html(selectList)
select.prop("selectedIndex", 11);
select.on('change', function(){
    editor.session.setMode("ace/mode/"+ LANGS[parseInt(this.value)][1]);    
})

$('#run').on('click', function() {
    document.getElementById("output").innerHTML = "Running...";   
    document.getElementById("error").innerHTML = ""; 
    var langid = $('#lang-select').val();
    var codeF = editor.getValue();
    var stdin = $('#stdin').val();

    var json = {
        language: langid,
        code: codeF,
        stdin:stdin
    };
    console.log(json);

    $.post("http://localhost:9000/compile", json, function(data, error, xhr) {
        console.log(data);
        if(data.errors !== ""){
            document.getElementById("output").innerHTML = "";
            document.getElementById("error").innerHTML = data.errors;
        }else{
            document.getElementById("output").innerHTML = data.output;
        }
    });
});