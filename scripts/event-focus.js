var school = document.getElementById("school-select"),
    company = document.getElementById("company-select");

school.addEventListener("focusin", function(){
     document.styleSheets[0].deleteRule(0);
    company.style.visibility = "hidden";
}, false);

company.addEventListener("focusin", function(){
    document.styleSheets[0].deleteRule(0);
    company.style.visibility = "hidden";
    school.onfocus();
}, false);