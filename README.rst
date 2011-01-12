About
======

Octokitty is a GitHub client for the WebOS operating system, built using the standard WebOS Mojo framework and CoffeeScript instead of the usual JavaScript. This is mainly for me to tinker with CoffeeScript a bit since I haven't had a chance to use it for anything "real" yet.

Building
========

To make CoffeeScript work with WebOS/Mojo you have to compile using the --bare or -b option so that the JavaScript comes without the top level safety wrapper::

    coffee -b -c octokitty

Once the .coffee files have been turned into .js files, the normal WebOS build and deploy process can continue. When building a final IPK for distribution, remember to ignore the .coffee files as those aren't used in a production environment::

    palm-package --exclude="*.coffee" <remainder of package options>