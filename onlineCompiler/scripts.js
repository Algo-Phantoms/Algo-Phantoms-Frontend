//Personal judge0 api key
API_KEY = "7ee183bc0dmshf04759af5da78d2p18f425jsncf3dbc40ad64";
var language_to_id = {
    "Bash": 46,
    "C": 50,
    "C#": 51,
    "C++": 54,
    "Java": 62,
    "Python": 71,
    "Ruby": 72
};

function encode(str) {
    return btoa(unescape(encodeURIComponent(str || "")));
}

function decode(bytes) {
    var escaped = escape(atob(bytes || ""));
    try {
        return decodeURIComponent(escaped);
    } catch {
        return unescape(escaped);
    }
}

function errorHandler(jqXHR, textStatus, errorThrown) {
    $("#output").val(`${JSON.stringify(jqXHR, null, 4)}`);
    $("#run").prop("disabled", false);
}

function check(token) {
    $("#output").val($("#output").val() + "\nChecking submission status...");
    $.ajax({
        url: `https://judge0-ce.p.rapidapi.com/submissions/${token}?base64_encoded=true`,
        type: "GET",
        headers: {
            "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
            "x-rapidapi-key": API_KEY
        },
        success: function (data, textStatus, jqXHR) {
            if ([1, 2].includes(data["status"]["id"])) {
                $("#output").val($("#output").val() + "\nStatus: " + data["status"]["description"]);
                setTimeout(function () {
                    check(token)
                }, 1000);
            } else {
                var output = [decode(data["compile_output"]), decode(data["stdout"])].join("\n").trim();
                $("#output").val(output);
                $("#run").prop("disabled", false);
            }
        },
        error: errorHandler
    });
}

function run() {
    $("#run").prop("disabled", true);
    $("#output").val("Creating submission...");
    $.ajax({
        url: "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true",
        type: "POST",
        contentType: "application/json",
        headers: {
            "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
            "x-rapidapi-key": API_KEY
        },
        data: JSON.stringify({
            "language_id": language_to_id[$("#lang").val()],
            "source_code": encode($("#source").val()),
            "stdin": encode($("#input").val()),
            "redirect_stderr_to_stdout": true
        }),
        success: function (data, textStatus, jqXHR) {
            $("#output").val($("#output").val() + "\nSubmission created by TPX-Compiler.");
            setTimeout(function () {
                check(data["token"])
            }, 1000);
        },
        error: errorHandler
    });

}
$("body").keydown(function (e) {
    if (e.ctrlKey && e.keyCode == 13) {
        run();

    }
});


$("textarea").keydown(function (e) {

    if (e.keyCode == 9) {
        e.preventDefault();
        var start = this.selectionStart;
        var end = this.selectionEnd;
        var append = "    ";
        $(this).val($(this).val().substring(0, start) + append + $(this).val().substring(end));
        this.selectionStart = this.selectionEnd = start + append.length;
    }

});

$("#source").focus();

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

function darkModeText() {
    var element = document.body;
    element.classList.toggle("dark-mode-txt");
}

function toggleBtn() {
    var x = document.getElementById("myDIV");
    if (x.innerHTML === "Dark mode") {
        x.innerHTML = "Light mode";
    } else {
        x.innerHTML = "Dark mode";
    }
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

// Alert Box
var userClosePopup = false;

$(document).ready(function () {
    if (getCookie('closed_popup') == 'true') {
        return
    } else {
        setTimeout(function () {
            $(".bl-popup").addClass("scale-in-bl");
        }, 3000);
        $("#close-bl-popup").click(function () {
            userClosePopup = true;
            $(".bl-popup").removeClass("scale-in-bl");
            $(".bl-popup").addClass("scale-out-bl");
            var now = new Date();
            var time = now.getTime();
            var expireTime = time + 1000 * 36000;
            now.setTime(expireTime);
            document.cookie = 'closed_popup=true; expires=' + now.toUTCString() + ';path=/';
        });
    }
});