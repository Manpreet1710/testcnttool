source "https://rubygems.org"

gem "jekyll", "~> 3.9.0"
gem 'appscms-tools-theme', '~> 1.7.3'

gem "kramdown-parser-gfm"

# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
# gem "github-pages", group: :jekyll_plugins

gem 'jekyll-admin', group: :jekyll_plugins




# If you have any plugins, put them here!
group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-sitemap"
  gem "jekyll-include-cache"
  gem 'jekyll-paginate'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.0", :install_if => Gem.win_platform?

gem "webrick", "~> 1.7"
