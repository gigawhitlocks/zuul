zuul.io
====

Design doc for zuul.io/zuul/zuulio, whatever.
Chat application.

Functionality: 
  basically a clone of Zulip
  one-to-many (streams)
  one-to-one (PMs)

New functionality:
  XMPP for PMs
  
Frontend:
  Handle sending messages / displaying messages
  OTR for PMs
  
Backend:
  Receive stream messages & persist them to a database
  Act as proxy to XMPP so users can PM from web client or pidgin/etc
  
Authentication:
  OAuth for the time being? Maybe this is where I should start.
