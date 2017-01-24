# Rob Graham - my personal web site

Welcome to the source code for my own personal [web site](https://altabyte.github.io/about-me/), which you can find at [robgraham.me](http://robgraham.me/).

This site is hosted on [GitHub Pages](https://pages.github.com/) so you will need to jump the `gh-pages`
[branch](https://github.com/altabyte/about-me/tree/gh-pages) to see the [Jekyll](http://jekyllrb.com/) source code.

## Setup

Clone this repository into a dir called `robgraham.me`

    $ git clone https://github.com/altabyte/about-me.git robgraham.me

Switch to the `gh-pages` branch

    $ git checkout gh-pages

Install the gems listed in [Gemfile](https://github.com/altabyte/about-me/blob/gh-pages/Gemfile).

    $ bundle install --path=.bundle

Launch the localhost server

    $ bundle exec jekyll serve --baseurl '' --port 4040

The site should then be available locally on port **4040** - [http://localhost:4040/](http://localhost:4040/)

#### Note 1
Without `--baseurl ''` the localhost URL will be
[http://localhost:4000/about-me/](http://localhost:4000/about-me/)

#### Note 2
The default port for Jekyll is 4000, however [NX Server](https://www.nomachine.com/)
also uses this port so I have decided to use port 4040 locally.
