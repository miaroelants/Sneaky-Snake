
#!/bin/bash
set -e
REPO_OWNER="Qrivi"
BOT_USER="Qrivi's Build Bot"
BOT_EMAIL="buildbot@qrivi.dev"

build_for_pages() {
  # Install dependencies and build the project
  npm install
  npm run build

  # Move build to the docs folder
  rm -rf ./docs
  mv ./build ./docs

  # Set git user credentials
  git config --global user.name "$BOT_USER"
  git config --global user.email "$BOT_EMAIL"

  # Push the production build
  git add .
  git commit -m "Created new build for GitHub Pages"
  git push
}

# Don't do anything if the remote is not the one we expect (eg. when repo was forked)
if [[ $(echo $GITHUB_REPOSITORY | cut -d / -f 1) == *$REPO_OWNER* ]]; then
    echo "The remote repository is not the repository I am supposed to push to. Aborting..."
    exit 0
fi

## Don't do anything if the last commit is from this bot (eg. it got triggered twice for some reason)
if [[ $(git log -1 --pretty=format:'%an') == *$BOT_USER* ]]; then
    echo "Last commit is one by me so no need to build and push this thing twice. Aborting..."
    exit 0
fi

build_for_pages
