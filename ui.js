class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }
//   *Show Profile and Profile layout in bootstrap
  showProfile(user){
this.profile.innerHTML = `
       <div class ="card card-body mb-3">
          <div class='row'>
            <div class='col-md-3'>
              <img class='img-fluid mb-2' src="${user.avatar_url}" />
             <a
               href='${user.html_url}'
               target='_blank'
               class='btn btn-primary btn-block mb-4'
             > view profile
             </a>
           </div>
        <div class='col-md-9'> 
             <span class='badge badge-primary w-18 mt-2'>
               Public Repos: ${user.public_repos}
             </span>
             <span class='badge badge-secondary w-18 mt-2'>
               Public gists: ${user.public_gists}
             </span>
             <span class='badge badge-success w-18 mt-2'>
               Followers: ${user.followers}
             </span>
             <span class='badge badge-info w-18 mt-2'>
               Following: ${user.following}
             </span>
             <br />
             <br />
             <ul class='list-group'>
               <li class='list-group-item'>Company: ${user.company}</li>
               <li class='list-group-item'>Website: ${user.blog}</li>
               <li class='list-group-item'>Location: ${user.location}</li>
               <li class='list-group-item'>Member Since: ${user.created_at}</li>
             </ul>
           </div>
         </div>
       </div>
     <h3 class = "page-heading mb-3">Latest Repos</h3>
  `};

//   * Show Alert Message
showAlert(message, className){
    // *Clear any alerts so they don't build up
    this.clearAlert();
    const div = document.createElement('div');
    // *Add classes
    div.className = className;
    // *Add Text
    div.appendChild(document.createTextNode(message));
    // *get Parent
    const container = document.querySelector('.searchContainer');
    const search = document.querySelector('.search');
    container.insertBefore(div, search)

    setTimeout(() => {
        this.clearAlert();
    }, 3000)
}

// *Clear Alert message so it doesn't constantly append
clearAlert(){
    const currentAlert = document.querySelector('.alert');
    if(currentAlert){
        currentAlert.remove();
    }
}

// *Clear Profile Display
  clearProfile()
{this.profile.innerHTML = ''}
}
