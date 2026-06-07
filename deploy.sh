#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# cria o arquivo CNAME para o domínio
echo "taynafarria.com" > CNAME

git init
git checkout -b main
git add -A
git commit -m 'deploy'

git push -f git@github.com:brunoandradebr/taynafarria.git main:page

cd -

rm -fr dist