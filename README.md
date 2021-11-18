# svg-embedded-display-plugin

The plugin augments the page so that embedded links (aka attachments) to svg content will be displayed inline,
without any placeholder. The plugin is meant for use with Atlassian Confluence Server.

## Motivation

There is actually a very simple solution, see

https://gist.github.com/silkentrance/917b6ba0017eeb9684379073a51b63aa

I wonder, why no one came up with that simpleton solution before, considering
the long standing issue, which had never been resolved since 13 yrs and counting...

- https://jira.atlassian.com/browse/CONFSERVER-1762

## How Does it Work?

The plugin will run the JQuery script presented in the GIST above,
that will augment all ``img``S.

## Usage

Install and enjoy.

## How to Build

You can build this yourself, but first you have to install the Atlassian SDK.
Using ``atlas-run`` allows you to try out the plugin locally.

## Additional License Information

Part of the logo (the hand icon) was adapted from the free Font Awesome icon library and is licensed 
under [CC BY 4.0 License](https://creativecommons.org/licenses/by/4.0/legalcode).
