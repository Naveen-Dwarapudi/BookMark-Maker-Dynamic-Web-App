// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/

let siteNameInputEl = document.getElementById("siteNameInput");
let siteNameErrMsgEl = document.getElementById("siteNameErrMsg");

let siteUrlInputEl = document.getElementById("siteUrlInput");
let siteUrlErrMsgEl = document.getElementById("siteUrlErrMsg");

let bookmarkFormEl = document.getElementById("bookmarkForm");
let submitBtnEl = document.getElementById("submitBtn");

let bookmarksListEl = document.getElementById("bookmarksList");

bookmarksListEl.classList.add("d-none");

let bookmarkData = {
    siteName: "",
    siteUrl: ""
};

siteNameInputEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteNameErrMsgEl.textContent = "Required*";
    } else {
        siteNameErrMsgEl.textContent = "";
    }
    bookmarkData.siteName = event.target.value;
});

siteUrlInputEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteUrlErrMsgEl.textContent = "Required*";
    } else {
        siteUrlErrMsgEl.textContent = "";
    }

    bookmarkData.siteUrl = event.target.value;
});

function validateBookmarkData(bookmarkData) {
    let {
        siteName,
        siteUrl
    } = bookmarkData;

    if (siteName === "") {
        siteNameErrMsgEl.textContent = "Required*";
    }
    if (siteUrl === "") {
        siteUrlErrMsgEl.textContent = "Required*";
    }
}

function createAndSaveBookmark(bookmarkData) {
    if (bookmarkData.siteName !== "" && bookmarkData.siteUrl !== "") {
        bookmarksListEl.classList.remove("d-none");
        let listEl = document.createElement("li");
        bookmarksListEl.appendChild(listEl);

        let bookmarkHeadingEl = document.createElement("h1");
        bookmarkHeadingEl.classList.add("list-item-heading");
        bookmarkHeadingEl.textContent = bookmarkData.siteName;
        listEl.appendChild(bookmarkHeadingEl);

        let bookmarkUrlEl = document.createElement("a");
        bookmarkUrlEl.href = bookmarkData.siteUrl;
        bookmarkUrlEl.target = "_blank";
        bookmarkUrlEl.textContent = bookmarkData.siteUrl;
        listEl.appendChild(bookmarkUrlEl);
    }
}

bookmarkFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    validateBookmarkData(bookmarkData);
    createAndSaveBookmark(bookmarkData);
});