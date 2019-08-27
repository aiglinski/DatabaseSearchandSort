// *Initialize github function
const github = new Github;

// *Entry point JS file,  Search input
const searchUser = document.getElementById('search-user');
//* search input event listenter
searchUser.addEventListener('keyup', (e) => {
    // get Input Text
    const userText = e.target.value;

    if (userText !== '') {
        //* make HTTP request
        github.getUser(userText)
            .then(data => console.log(data))
    }
})