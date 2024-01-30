# Notes

### Github
- It's important to have consistency in commit messages in order to keep them readable and make changes easy to find
- VScode is integrated with Github, which makes it easy to push/pull and sync with Github
- Small and consistent commits are the way to go, that way you have flexibility and an easily trackable changelog
- Commit your changes before leaving the page if working on GitHub, otherwise it won't save them.  (Learned that the hard way)

### EC2
- This website uses an elastic IP address, which means that the IP address itself will stay constant and won't reset whenever I close my server.
- However, I do have to pay for it if I were to close my server, so it doesn't necessarily save me money.  It just keeps the IP address consistent.
- Website IP address: 18.233.95.216
- Command to ssh into the server:  ssh -i [key pair file] ubuntu@18.233.95.216

### Domain name/Caddy
- http:tonyspizzagalleria.click
- Subdomains are also accepted (startup.tonyspizzagalleria.click and/or simon.tonyspizzagalleria.click)
- Caddy is the service that authenticates and makes things secure

### HTML
- Basic browser structuring
- There's a lot you can do within HTML that other things just do better (Inputs, drawings, etc)
- Allows for navigation between pages which is important