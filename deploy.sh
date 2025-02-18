#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 删除目录防止构建失败
rm -rf build/.vuepress/dist

# 生成静态文件
yarn docs:build

# 进入生成的文件夹
cd build/.vuepress/dist

# 如果是发布到自定义域名
echo 'linux-tutorial.fengzhao.me' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:fengzhao/linux-tutorial.git master:gh-pages

cd -
