# League With Friends

[https://leaguewithfriends.redcouch.at](https://leaguewithfriends.redcouch.at/)

# Riot Games API

To comply with CORS policy any call starting with `/api/:path*` are proxied to Riot Games API.

# ENV variables

**Required**  
`NEXT_PUBLIC_RIOT_GAMES_API_KEY` retrieved by Riot Games [for Developers](https://developer.riotgames.com/)

**For Deployment using Traefik**  
`APP_NAME=` Application's name used high level labeling such as Docker image and traefik routing label  
`APP_HOST=` The application's host e.g. thebestdomainnameicouldcomeupwith.com  
`APP_NETWORK` Your internal docker network used for backend communication (optional)
