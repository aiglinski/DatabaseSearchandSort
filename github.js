class Github {
    constructor() {
        this.client_id = 'd5dc64e44975348f9f09';
        this.client_secret = '0e10be5223e0a7c9c906f9f5f59d3b7df8390d9b'
    };
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();
        return {
            profile
        }
    }
}