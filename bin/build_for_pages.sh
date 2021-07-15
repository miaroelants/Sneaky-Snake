
#!/bin/bash
set -e
GITHUB_USER="$(echo ${GITHUB_REPOSITORY} | cut -d / -f 1)"

push_build() {
  # Install dependencies and build the project
  npm install
  npm run build

  # Move build to the docs folder
  rm -rf ./docs
  mv ./build ./docs

  # Set git user credentials
  git config --global user.name "${GITHUB_USER}'s Build Bot"
  git config --global user.email "buildbot@qrivi.dev"

  # Push the production build
  git add .
  git commit -m "Created new build for GitHub Pages"
  git push
}

## Don't push commits from the build bot, since those are already production builds
if [[ $(git log -1 --pretty=format:'%an') == *${GITHUB_USER}* ]]
  then
    echo "Last commit is already from the bot: no further action required."
  else
    push_build
fi
