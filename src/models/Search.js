//Create search class
class Search {
    //Build object
    constructor() {
        this.client_id = "03f95a7a955ff9f61848";
        this.client_secret = "e4b06d1fae9c94c7e62e72a7400051c8822acc55";
        this.repos_count = 5;
        this.repos_sort = "created: asc"; 
    }

    //Create methods
    async searchUsers(user) {

        //Make http request to get profile data
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        //Make http request to get repo data
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);


        //Parse response data and return
        let profileData = await profileResponse.json();
        let repoData = await repoResponse.json();

        return {
            profileData,
            repoData
        }
    };
}

export default Search;