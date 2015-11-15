# Rob Graham - personal web site

This GitHub project hosts my own personal [web site](http://robgraham.me/). 
To see the [Jekyll](http://jekyllrb.com/) source code, please jump to the `gh-pages`
[branch](https://github.com/altabyte/about-me/tree/gh-pages)

## Setup

Clone this repository into a dir called `rob_graham_web_site`

    $ git clone https://github.com/altabyte/about-me.git rob_graham_web_site

Switch to the `gh-pages` branch

    $ git checkout gh-pages

Install the gems listed in [Gemfile](https://github.com/altabyte/about-me/blob/gh-pages/Gemfile).

    $ bundle install --path=.bundle

Launch the localhost server

    $ bundle exec jekyll serve --baseurl ''

The site should then be available locally on port **4000** [http://localhost:4000/](http://localhost:4000/)

Note that without `--baseurl ''` the localhost URL will be
[http://localhost:4000/about-me/](http://localhost:4000/about-me/)
