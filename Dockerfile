# Base image: Jekyll 3.8
FROM jekyll/jekyll:3.8

# Copy Gemfile and Gemfile.lock into the container
COPY Gemfile Gemfile.lock ./

# Install Ruby gems
RUN bundle install
