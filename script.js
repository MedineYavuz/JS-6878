
// london

function londonContent() {
    const tab1Content = document.getElementById("tab1-content");
    const tab2Content = document.getElementById("tab2-content");
    const tab3Content = document.getElementById("tab3-content");

    // London aktif, diğerlerini gizle
    tab1Content.classList.remove("noneContent");
    tab2Content.classList.add("noneContent");
    tab3Content.classList.add("noneContent");

     // button rengi

     const tab1button = document.getElementById("tab1-button");
     tab1button.style.backgroundColor = "aqua";
}


// paris

function parisContent() {
    const tab1Content = document.getElementById("tab1-content");
    const tab2Content = document.getElementById("tab2-content");
    const tab3Content = document.getElementById("tab3-content");

    // Paris aktif, diğerlerini gizle
    tab1Content.classList.add("noneContent");
    tab2Content.classList.remove("noneContent");
    tab3Content.classList.add("noneContent");

     // button rengi

     const tab2button = document.getElementById("tab2-button");
     tab2button.style.backgroundColor = "aqua";
}

// tokyo

function tokyoContent() {
    const tab1Content = document.getElementById("tab1-content");
    const tab2Content = document.getElementById("tab2-content");
    const tab3Content = document.getElementById("tab3-content");

    // Tokyo aktif, diğerlerini gizle
    tab1Content.classList.add("noneContent");
    tab2Content.classList.add("noneContent");
    tab3Content.classList.remove("noneContent");

     // button rengi

     const tab3button = document.getElementById("tab3-button");
     tab3button.style.backgroundColor = "aqua";
}