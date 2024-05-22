const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');
let chaptersArray = (getChapterList() || []);

chaptersArray.forEach(chapter => {
    displayList(chapter);   
});

button.addEventListener("click", function() {
    if (input.value.trim() != '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus();
    }
});

function displayList(item) {
    let li = document.createElement('li');
    li.textContent = item;
    let deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener("click", function() {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    })
};

function setChapterList() {
    window.localStorage.setItem("chapters", JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(window.localStorage.getItem("chapters"));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}