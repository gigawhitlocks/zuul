zuul.io
====
Ian's current pet project

##What is it?
It's a realtime web chat application.
Or, well, mostly it's ideas in this file.

##Why?
Hacker School needs a replacement for a piece of closed source abandonware. 
It does what it does very nicely, but won't be developed, and could be totally abandoned at any time.

##What will it be?
Hopefully a nice realtime chat web application similar in functionality to Zulip (above) or HipChat (for those unfamiliar).

I think a permanent solution to this problem is to clone the abandonware with improvements:

  - Open source license.
    - I'm sure Hacker Schoolers want to be able to hack on their chat app.
    - A great chat app should be free (as in freedom) for even the smallest online communities.
  
  - Easy to deploy 
    - Remember Diaspora? Like that. Run your own
      - But Zuulio's actually useful with just a few people, so momentum is less of an issue.
    
  - Modular plugins for things like moderators and emoji which may be loaded or unloaded per deployment.
    - Hacker School is my primary target, but great software is reusable and it'd be fun to run a private one
      with my friends, so why wouldn't others want to do this?
    - A module system also makes it easier to add features
      - I have to figure out how to do this though
      - We also want to be able to enable/disable things like local authentication vs OAuth
        - OAuth is first though

  - XMPP interop for private messages with client-side OTR available in the browser client
    - The OTR client implementation is going to be a fun challenge
    - True privacy in private messages, even if you don't trust the owner of your Zuul.io node
    - Technical limitations may limit this feature to one-on-one chat, but that's where it's most important imho
  
