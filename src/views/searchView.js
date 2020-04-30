//Create UI class
class UI {
    constructor() {
        this.profile = document.querySelector(".profile");
    }

    //Method to display user profile in UI
    displayProfile(data) {
        
        let html = `
        <div class="card profile__card">
            <h2>${data.profileData.name}</h2>
            <div class="profile__content">
                <div class="profile__content--pic">
                    <img class="profile__content--pic-img" src=${data.profileData.avatar_url}>
                    <a href=${data.profileData.html_url} target="_blank" class="btn btn-lg btn-warning profile__content--btn">View Profile</a>
                </div>

                <div class="profile__content--info">
                    <span class="display-btn display-btn--1">Public Repos: <span id="repos">${data.profileData.public_repos}</span></span>
                    <span class="display-btn display-btn--2">Public Gists: <span id="repos">${data.profileData.public_gists}</span></span>
                    <span class="display-btn display-btn--3">Public Followers: <span id="repos">${data.profileData.followers}</span></span>
                    <span class="display-btn display-btn--4">Public Public Following: <span id="repos">${data.profileData.following}</span></span>

                    <p class="profile__content--company">Company: <span id="company">${data.profileData.company}</span></p>
                    <p class="profile__content--web">Website/Blog: <span id="web">${data.profileData.blog}</span></p>
                    <p class="profile__content--location">Location: <span id="location">${data.profileData.location}</span></p>
                    <p class="profile__content--company">Member Since: <span id="member">${data.profileData.created_at}</span></p>
                </div>
            </div>
        </div>

        <h2>Latest Repos</h2>
        <div class="repos">
        </div>
        `

        this.profile.innerHTML = html;
    }

    //Method to display User repos to UI
    displayRepos(data) {
        let output = "";
        console.log(data);
        data.forEach(repo => {
            output += `
                <div class="repo">
                    <div class="repo__title">
                        <p>${repo.name}</p>
                    </div>
                <div class="repo__display">
                    <span class="display-btn display-btn--2">Stars: <span id="stars">${repo.stargazers_count}</span></span>
                    <span class="display-btn display-btn--3">Watchers: <span id="watchers">${repo.watchers_count}</span></span>
                    <span class="display-btn display-btn--4">Forks: <span id="forks">${repo.forks_count}</span></span>
                </div>
                </div>
    `

        });

    let repos = document.querySelector(".repos");

    repos.innerHTML = output;
    }

};

export default UI;