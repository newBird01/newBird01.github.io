(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{483:function(t,i,l){"use strict";l.r(i);var a=l(26),v=Object(a.a)({},(function(){var t=this,i=t.$createElement,l=t._self._c||i;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"常用操作"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#常用操作"}},[t._v("#")]),t._v(" 常用操作")]),t._v(" "),l("h2",{attrs:{id:"状态管理"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#状态管理"}},[t._v("#")]),t._v(" 状态管理")]),t._v(" "),l("ol",[l("li",[t._v("git status\n"),l("ul",[l("li",[t._v("Changes not staged for commit\n"),l("ul",[l("li",[t._v("表示得大概就是工作区有该内容，但是缓存区没有，需要我们git add")])])]),t._v(" "),l("li",[t._v("Changes to be committed\n"),l("ul",[l("li",[t._v("一般而言，这个时候，文件放在缓存区了，我们需要git commit")])])]),t._v(" "),l("li",[t._v("nothing to commit, working tree clean\n"),l("ul",[l("li",[t._v("这个时候，我们将本地的代码推送到远端即可")])])]),t._v(" "),l("li",[t._v("git reflog, 查看历史操作记录,包括已删除的commit")]),t._v(" "),l("li",[t._v("git log, 查看日志")]),t._v(" "),l("li",[t._v("git log --oneline ，不包含已删除的commit")])])])]),t._v(" "),l("h2",{attrs:{id:"配置管理"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#配置管理"}},[t._v("#")]),t._v(" 配置管理")]),t._v(" "),l("ol",{attrs:{start:"2"}},[l("li",[t._v("git config --list\n"),l("ul",[l("li",[t._v("列出当前配置")])])]),t._v(" "),l("li",[t._v("git config --local --list\n"),l("ul",[l("li",[t._v("列出Repository配置")])])]),t._v(" "),l("li",[t._v("git config --global --list\n"),l("ul",[l("li",[t._v("列出全局配置")])])]),t._v(" "),l("li",[t._v("git config --system --list\n"),l("ul",[l("li",[t._v("列出系统配置")])])]),t._v(" "),l("li",[t._v("配置用户名\n"),l("ul",[l("li",[t._v('git config --global user.name "your name"')])])]),t._v(" "),l("li",[t._v("配置用户邮箱\n"),l("ul",[l("li",[t._v('git config --global user.email "youremail@github.com"')])])])]),t._v(" "),l("h2",{attrs:{id:"分支管理"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#分支管理"}},[t._v("#")]),t._v(" 分支管理")]),t._v(" "),l("ol",{attrs:{start:"8"}},[l("li",[t._v("git branch --merged\n"),l("ul",[l("li",[t._v("查看哪些分支已经合并到当前分支")])])]),t._v(" "),l("li",[t._v("git branch --no-merged\n"),l("ul",[l("li",[t._v("查看哪些分支没有合并到当前分支")])])]),t._v(" "),l("li",[t._v("git branch -v\n"),l("ul",[l("li",[t._v("查看各个分支最后一个提交对象的信息")])])]),t._v(" "),l("li",[t._v("git push origin -d <\\branch-name>\n"),l("ul",[l("li",[t._v("删除远程分支")])])]),t._v(" "),l("li",[t._v("git branch -m <\\oldbranch-name> <\\newbranch-name>\n"),l("ul",[l("li",[t._v("重命名分支")])])]),t._v(" "),l("li",[t._v("git checkout -b dev origin/master\n"),l("ul",[l("li",[t._v("拉取远程分支master并创建本地分支dev")])])]),t._v(" "),l("li",[t._v("git fetch origin <\\branch-name>:<\\local-branch-name>\n"),l("ul",[l("li",[t._v("一般而言，这个origin是远程主机名，一般默认就是origin。")]),t._v(" "),l("li",[t._v("branch-name 你要拉取的分支")]),t._v(" "),l("li",[t._v("local-branch-name 通常而言，就是你本地新建一个新分支，将origin下的某个分支代码下载到本地分支。")])]),t._v(" "),l("div",{staticClass:"custom-block tip"},[l("p",{staticClass:"custom-block-title"},[t._v("示例")]),t._v(" "),l("div",{staticClass:"language- line-numbers-mode"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v("git fetch origin master:develop\n从远处master分支拉取，并在本地新建 develop分支。同时切换到develop\n")])]),t._v(" "),l("div",{staticClass:"line-numbers-wrapper"},[l("span",{staticClass:"line-number"},[t._v("1")]),l("br"),l("span",{staticClass:"line-number"},[t._v("2")]),l("br")])])])]),t._v(" "),l("li",[t._v("git fetch origin\n"),l("ul",[l("li",[t._v("将某个远程主机的所有更新，全部取回本地。")])])]),t._v(" "),l("li",[t._v("git fetch origin master\n"),l("ul",[l("li",[t._v("取回master分支的更新")])])])]),t._v(" "),l("h2",{attrs:{id:"撤销操作"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#撤销操作"}},[t._v("#")]),t._v(" 撤销操作")]),t._v(" "),l("ol",{attrs:{start:"17"}},[l("li",[t._v("git checkout .\n"),l("ul",[l("li",[t._v("撤销工作区修改")])])]),t._v(" "),l("li",[t._v("git reset HEAD\n"),l("ul",[l("li",[t._v("暂存区文件撤销 (不覆盖工作区)")])])]),t._v(" "),l("li",[t._v("git reset --(soft | mixed | hard ) < HEAD ~(num) > |\n"),l("ul",[l("li",[t._v("版本回退")]),t._v(" "),l("li",[t._v("--hard: 回退全部，包括HEAD，index，working tree")]),t._v(" "),l("li",[t._v("--mixed: 回退部分,包括HEAD，index")]),t._v(" "),l("li",[t._v("--soft: 只回退HEAD")])])])]),t._v(" "),l("h2",{attrs:{id:"文档暂存"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#文档暂存"}},[t._v("#")]),t._v(" 文档暂存")]),t._v(" "),l("blockquote",[l("p",[t._v("暂存是倒序，最新的在最开始。最近保存的stash 是 stash{0}")])]),t._v(" "),l("ol",{attrs:{start:"20"}},[l("li",[t._v("git stash save -a “message”\n"),l("ul",[l("li",[t._v("添加改动到stash")])])]),t._v(" "),l("li",[t._v("git stash drop stash@{ID}\n"),l("ul",[l("li",[t._v("删除暂存")])])]),t._v(" "),l("li",[t._v("git stash list\n"),l("ul",[l("li",[t._v("查看stash列表")])])]),t._v(" "),l("li",[t._v("git stash clear\n"),l("ul",[l("li",[t._v("删除全部缓存")])])]),t._v(" "),l("li",[t._v("git stash pop stash@{ID}\n"),l("ul",[l("li",[t._v("恢复改动")])])])]),t._v(" "),l("h2",{attrs:{id:"差异比较"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#差异比较"}},[t._v("#")]),t._v(" 差异比较")]),t._v(" "),l("ol",{attrs:{start:"25"}},[l("li",[t._v("git diff\n"),l("ul",[l("li",[t._v("比较工作区与缓存区")])])]),t._v(" "),l("li",[t._v("git diff -- cached\n-比较缓存区与本地库最近一次commit内容")]),t._v(" "),l("li",[t._v("git diff HEAD\n-比较工作区与本地最近一次commit内容")]),t._v(" "),l("li",[t._v("git diff 《commit id》《commit id》\n-比较两个commit之间差异")])]),t._v(" "),l("h2",{attrs:{id:"分支名"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#分支名"}},[t._v("#")]),t._v(" "),l("a",{attrs:{href:"https://juejin.im/post/6844903635533594632",target:"_blank",rel:"noopener noreferrer"}},[t._v("分支名"),l("OutboundLink")],1)]),t._v(" "),l("ol",{attrs:{start:"29"}},[l("li",[t._v("master 分支\n"),l("ul",[l("li",[t._v("主分支，用于部署生产环境的分支，确保稳定性。由release分支合入")])])]),t._v(" "),l("li",[t._v("develop 分支\n-develop为开发分支，通常情况下，保存最新完成以及bug修复后的代码。")]),t._v(" "),l("li",[t._v("feature分支\n"),l("ul",[l("li",[t._v("由develop分支开出，feature/新功能 命名")])])]),t._v(" "),l("li",[t._v("release分支\n"),l("ul",[l("li",[t._v("release 为预上线分支，发布提测阶段，会release分支代码为基准提测")])])]),t._v(" "),l("li",[t._v("hotfix分支e\n"),l("ul",[l("li",[t._v("分支命名：hotfix/ 开头的为修复分支，它的命名规则与 feature 分支类似。")]),t._v(" "),l("li",[t._v("线上出现紧急问题时，需要及时修复，以master分支为基线，创建hotfix分支，修复完成后，需要合并到master分支和develop分支。")])])])]),t._v(" "),l("h2",{attrs:{id:"tag"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#tag"}},[t._v("#")]),t._v(" tag")]),t._v(" "),l("ol",{attrs:{start:"34"}},[l("li",[t._v("git tag -a v1.0.0 -m 测试包\n"),l("ul",[l("li",[t._v("新增版本号为v1.0.0，信息为测试包 的tag")])])]),t._v(" "),l("li",[t._v("git tag -l 或者git tag\n"),l("ul",[l("li",[t._v("列出当前的tag")])])]),t._v(" "),l("li",[t._v("git tag -d v1.0.0\n"),l("ul",[l("li",[t._v("删除v1.0.0这个tag")])])]),t._v(" "),l("li",[t._v("git push origin v1.0.0\n"),l("ul",[l("li",[t._v("将v1.0.0这个tag推送到远程仓库")])])]),t._v(" "),l("li",[t._v("git push origin --tags\n"),l("ul",[l("li",[t._v("将所有的tag推送到远程仓库")])])]),t._v(" "),l("li",[t._v("git push origin :refs/tags/v1.0.2 或者 git push origin --delete v1.0.2\n"),l("ul",[l("li",[t._v("删除远程仓库的 v1.0.2 这个tag")])])]),t._v(" "),l("li",[t._v("git show-ref --tag 查看远程分支")])]),t._v(" "),l("h2",{attrs:{id:"git-帮助"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#git-帮助"}},[t._v("#")]),t._v(" git 帮助")]),t._v(" "),l("ol",{attrs:{start:"40"}},[l("li",[t._v("git help (--help)\n"),l("ul",[l("li",[t._v("展示Git命令大纲")])])]),t._v(" "),l("li",[t._v("git help -a\n"),l("ul",[l("li",[t._v("展示Git命令大纲全部列表")])])]),t._v(" "),l("li",[t._v("git help\n"),l("ul",[l("li",[t._v("展示具体命令说明手册")])])])]),t._v(" "),l("h2",{attrs:{id:"补充"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#补充"}},[t._v("#")]),t._v(" 补充")]),t._v(" "),l("ol",{attrs:{start:"43"}},[l("li",[t._v("git stash save 'xxxx'\n"),l("ul",[l("li",[t._v("保存未提交的修改，同时自定义 stash 栈中的信息名称：")])])]),t._v(" "),l("li",[t._v("git stash list")])]),t._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",[l("code",[t._v("- 查看现有 stash\n")])])]),l("ol",{attrs:{start:"45"}},[l("li",[t._v("git stash apply 等价于 git stash apply stash@{0}\n"),l("ul",[l("li",[t._v("恢复最近的一个缓存。释放之后，刚才的记录还存在 list 中")])])]),t._v(" "),l("li",[t._v("git stash pop\n"),l("ul",[l("li",[t._v("恢复最近的一个缓存。释放之后，刚才的记录不存在 list 中")])])])])])}),[],!1,null,null,null);i.default=v.exports}}]);