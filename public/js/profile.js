$(document).ready(function () {
    $("#infoUpdateBox").hide()
    $("#addressUpdateBox").hide()
    
    $("#infoUpdate").click(function () { 
        $("#infoUpdateBox").show()
        $("#addressUpdateBox").hide()
    });

    $("#addressUpdate").click(function () { 
        $("#infoUpdateBox").hide()
        $("#addressUpdateBox").show()
    });
});