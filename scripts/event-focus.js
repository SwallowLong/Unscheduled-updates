var school = document.getElementById("school"),
    company = document.getElementById("company"),
    schoolSelect = document.getElementById("school-select"),
    companySelect = document.getElementById("company-select"),
    myCount = 0;

    school.addEventListener("focusin", function(){
        if(myCount==0) {
            document.styleSheets[0].deleteRule(0);
            companySelect.style.visibility = "hidden";
            myCount++;
        } else {
                schoolSelect.style.visibility = "visible";       
                companySelect.style.visibility = "hidden";
        }   
    }, false)

    company.addEventListener("focusin", function(){
        if(myCount==0) {
            document.styleSheets[0].deleteRule(0);
            schoolSelect.style.visibility = "hidden";
            myCount++;
        } else {
                schoolSelect.style.visibility = "hidden";
                companySelect.style.visibility = "visible";             
        }   
    }, false)
