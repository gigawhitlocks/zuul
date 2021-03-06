zuul.io
====
Ian's current pet project

##What is it?
It's a realtime web chat application.
Or, well, mostly it's ideas in this file.

##Why?
Hacker School needs a replacement for a piece of closed source abandonware. 
It does what it does very nicely, but won't be developed, and could be totally abandoned at any time.

I think a permanent solution to this problem is to clone the abandonware. I'd like to pitch Zuul.io to the community, but I'm going to wait until it's.. like.. pre-alpha. If you're a Hacker Schooler and you are interested regardless of whether I have made an announcement, please let me know :)

##What will it be?
Hopefully a nice realtime chat web application similar in functionality to Zulip (above) or HipChat (for those unfamiliar):

Improvements on Zulip:

  - Open source license.
    - I'm sure Hacker Schoolers want to be able to hack on their chat app.
    - A great chat app should be free (as in freedom) for even the smallest online communities.
  
  - Easy to deploy (run your own)
    - Hacker School is my primary target, but great software is reusable and it'd be fun to run a private one
      with my friends, so why wouldn't others want to do this?
    - Remember Diaspora? Like that.
      - But Zuulio's actually useful with just a few people, so momentum is less of an issue.
    - Also this way the software might have use if HS doesn't want to use it for some reason

  - Modular plugins for things like moderators and emoji which may be loaded or unloaded per deployment.
    - A serverside module system makes it easier to add features
    - Module hotplugging allows for greater flexibility and diversity between deployments
      - Only use the features your community needs

  - XMPP interop for private messages with client-side OTR available in the browser client
    - The OTR client implementation is going to be a fun challenge
      - Key exchange might be tough? Some other implementation concerns here.
    - True privacy in private messages, even if you don't trust the owner of your Zuul.io node
    - Technical limitations may limit this feature to one-on-one chat, but that's where it's most important imho

##Design

Right now I'm trying to use Angularjs & Bootstrap to get a move on with the UI. I'm not a designer so I'm going to keep it simple and extensible and I'm choosing popular technologies here so that once this software is useful, someone who actually knows JavaScript can at least help out.

On the server side I'm going to use Tornado/Python for a WebSockets interface/session management/authentication, probably with something like sockjs on the client side, which I believe is compatible with angularjs and Tornado, and then probably publish messages from the Tornado/Websockets interface to something like Redis or Kafka, and write services that consume the messages published to Kafka/Redis for persistent storage, XMPP interop (an XMPP proxy basically?), and searching/sorting. These services may be written in Python or any other language that can talk to Kafka/Redis (though of course a RESTful API should be built, but HTTP is slow, so the RESTful API is for third-party consumers).

