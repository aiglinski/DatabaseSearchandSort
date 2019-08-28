// *Initialize github function
const github = new Github;
// *Initialize UI JS
const ui = new UI;

// *Entry point JS file,  Search input
const searchUser = document.getElementById('search-user');
//* search input event listenter
searchUser.addEventListener('keyup', e => {
    // get Input Text
    const userText = e.target.value;

    if (userText !== "") {
        //* make HTTP request
        github.getUser(userText).then(data => {
            if (data.profile.message === 'Not Found') {
                // *Show Error
            } else {
                // *Show profile
                ui.showProfile(data.profile);
            }
        });
    }
     else {
        // *Clear profile if search is empty
        ui.clearProfile();
      }
});