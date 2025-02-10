# Base image: Jekyll 4
FROM jekyll/jekyll:4

# Copy Gemfile and Gemfile.lock into the container
COPY Gemfile Gemfile.lock ./

# Install Ruby gems
RUN bundle install
