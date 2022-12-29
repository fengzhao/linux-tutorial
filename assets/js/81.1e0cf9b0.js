(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{576:function(s,t,a){"use strict";a.r(t);var n=a(16),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"打包指令：tar"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打包指令：tar"}},[s._v("#")]),s._v(" 打包指令：tar")]),s._v(" "),a("p",[s._v("前面讲解的 gzip、bzip2、xz 也能够针对目录进行压缩，但是是将目录内所有文件 "),a("strong",[s._v("分别")]),s._v(" 压缩的。而在 windows 下可以使用 winRAR 之类的压缩文件，将好多数据包成一个文件的样式。")]),s._v(" "),a("p",[s._v("这种将多个文件或目录包成一个大文件的指令功能，就可以称呼为 "),a("strong",[s._v("打包指令")]),s._v("，tar 就是这样一个功能的打包指令，同时还可以通过压缩指令将该文件进行压缩。windows 中的 WinRAR 也支持 .tar.gz 的解压缩")]),s._v(" "),a("p",[s._v("tar 的选项与参数非常多，这里只接受几个常用的选项")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("打包与压缩："),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-z"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-j"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-J"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("cv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-f 待建立的文件名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" filename"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n观察文件：  "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-z"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-j"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-J"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("tv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-f file.tar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n解压缩：\t  "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-z"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-j"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-J"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("xf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-f file.tar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-C 目录"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n\n特别注意："),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-z"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-j"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-J"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" 不可同时出现在一串指令中\n特殊注意：c、t、x 也不可同时出现在一串指令中\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("选项与参数")]),s._v(" "),a("ul",[a("li",[s._v("c：建立打包文件，可搭配 "),a("code",[s._v("-v")]),s._v("来观察过程中被打包的文件名")]),s._v(" "),a("li",[s._v("t：查看打包文件的内容含有哪些文件，重点在查看文件名")]),s._v(" "),a("li",[s._v("x：接打包或解压缩的功能，可搭配 -C 在特定目录解开，特别注意 "),a("strong",[s._v("c、t、x 不能同时出现在一起")])]),s._v(" "),a("li",[s._v("z：通过 gzip 的支持进行压缩、解压缩；此时文件名最好为 "),a("code",[s._v("*.tar.gz")])]),s._v(" "),a("li",[s._v("j：通过 bzip2 的支持进行压缩、解压缩；此时文件名最好为 "),a("code",[s._v("*.tar.bz2")])]),s._v(" "),a("li",[s._v("J：通过 xz  的支持进行压缩、解压缩；此时文件名最好为 "),a("code",[s._v("*.tar.xz")])]),s._v(" "),a("li",[s._v("v：在压缩、解压缩的过程中，将正在处理的文件名显示出来")]),s._v(" "),a("li",[s._v("f：后面要立刻接要被处理的文件名，建议 -f 单独写一个选项（不容易忘记）")]),s._v(" "),a("li",[s._v("C：在指定目录解压缩")]),s._v(" "),a("li",[s._v("p：保留备份数据的原本权限与属性，常用语备份（-c）重要的配置文件")]),s._v(" "),a("li",[s._v("P：保留绝对路径，保留 root 跟路径")]),s._v(" "),a("li",[a("code",[s._v("--exclude=FILE")]),s._v("：在压缩过程中，排除指定的文件，不打包")])]),s._v(" "),a("p",[s._v("最常用的是以下命令：")]),s._v(" "),a("ul",[a("li",[s._v("压    缩："),a("code",[s._v("tar -jcv -f filename.tar.bz2 要被压缩的文件或目录")])]),s._v(" "),a("li",[s._v("查    询："),a("code",[s._v("tar -jtv -f filename.tar.bz2")])]),s._v(" "),a("li",[s._v("解压缩："),a("code",[s._v("tar -jxv -f filename.tar.bz2 -C 指定目录解开")])])]),s._v(" "),a("p",[s._v("小提示：上面 -jcvf 可以写一起，但是阅读起来就没有上面这样分开好理解")]),s._v(" "),a("h2",{attrs:{id:"使用-tar-加入-z、-j-或-j-的参数备份-etc-目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-tar-加入-z、-j-或-j-的参数备份-etc-目录"}},[s._v("#")]),s._v(" 使用 tar 加入 -z、-j 或 -J 的参数备份 /etc/ 目录")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 备份 /etc/ 需要 root 权限，否则会出现一堆错误")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mrcode@study ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" -\nPassword:\nLast login: Sun Oct "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("27")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":38:34 CST "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v(" on pts/0\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# time tar -zpcv -f /root/etc.tar.gz /etc")]),s._v("\ntar: 从成员名中删除开头的“/”\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注意这里的警告")]),s._v("\n/etc/\n/etc/fstab\n/etc/crypttab\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nreal    0m2.329s\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 耗时 2.329 秒")]),s._v("\nuser    0m1.322s\nsys     0m0.308s\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -p 重点是保留文件的权限与属性")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下面去掉了 -v，所以不会显示处理的文件名")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# time tar -jpc -f /root/etc.tar.bz2 /etc")]),s._v("\ntar: 从成员名中删除开头的“/”\n\nreal    0m3.012s\nuser    0m2.710s\nsys     0m0.078s\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# time tar -Jpc -f /root/etc.tar.xz /etc")]),s._v("\ntar: 从成员名中删除开头的“/”\n\nreal    0m14.836s\nuser    0m13.511s\nsys     0m0.224s\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ll -h /root/etc*")]),s._v("\n-rw-r--r--. "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root  11M "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("月 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("29")]),s._v(" 00:05 /root/etc.tar.bz2\n-rw-r--r--. "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root  12M "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("月 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("29")]),s._v(" 00:01 /root/etc.tar.gz\n-rw-r--r--. "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(".2M "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("月 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("29")]),s._v(" 00:06 /root/etc.tar.xz\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# etc 占用 42M")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# du -sh /etc/")]),s._v("\n42M     /etc/\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br")])]),a("p",[s._v("前面讲解 cp 指令复制的时候也涉及到复制后的文件权限与属性问题，这里的 -p 选项也是这样")]),s._v(" "),a("h2",{attrs:{id:"查阅-tar-文件的数据内容（可查看文件名）与备份文件名是否有根目录的意义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查阅-tar-文件的数据内容（可查看文件名）与备份文件名是否有根目录的意义"}},[s._v("#")]),s._v(" 查阅 tar 文件的数据内容（可查看文件名）与备份文件名是否有根目录的意义")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -v 把权限属性也列出来了")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里查看文件名前面无根路径的")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tar -jtv -f /root/etc.tar.bz2")]),s._v("\ndrwxr-xr-x root/root         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-10-04 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(":38 etc/\n-rw-r--r-- root/root       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("808")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-10-27 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(":43 etc/fstab\n-rw------- root/root         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-10-04 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(":20 etc/crypttab\nlrwxrwxrwx root/root         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-10-04 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(":20 etc/mtab -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /proc/self/mounts\n-rw-r--r-- root/root        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("51")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-10-04 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(":20 etc/resolv.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("为什么需要拿到根目录呢？主要是为了安全，使用 tar 备份的数据可能会需要解压缩回来使用，在 tar 所记录的文件名（上面 -jtv 显示的文件名）就是解压缩后的实际文件名。如果拿到了根目录，则会在当前目录解压。比如现在在 /tmp ，解压后就变成 /tmp/etc/xxx；如果不拿掉根目录，源文件就被覆盖了")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tar -jPc -f /root/etc.and.root.tar.bz2 /etc")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tar -jtv -f /root/etc.and.root.tar.bz2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tar -jtv -f /root/etc.and.root.tar.bz2")]),s._v("\ntar: 从成员名中删除开头的“/”\ndrwxr-xr-x root/root         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-10-04 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(":38 /etc/\n-rw-r--r-- root/root       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("808")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-10-27 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(":43 /etc/fstab\n-rw------- root/root         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-10-04 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(":20 /etc/crypttab\nlrwxrwxrwx root/root         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-10-04 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(":20 /etc/mtab -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /proc/self/mounts\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 对比下，确实是带上了根路径")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h2",{attrs:{id:"将备份的数据解压缩，并考虑指定目录压缩（-c-选项的应用）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将备份的数据解压缩，并考虑指定目录压缩（-c-选项的应用）"}},[s._v("#")]),s._v(" 将备份的数据解压缩，并考虑指定目录压缩（-C 选项的应用）")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# pwd")]),s._v("\n/root\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tar -jx -f etc.tar.bz2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ll -d etc*")]),s._v("\ndrwxr-xr-x. "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("143")]),s._v(" root root     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8192")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("月  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(":38 etc\n-rw-r--r--.   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10520237")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("月 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("29")]),s._v(" 00:15 etc.and.root.tar.bz2\n-rw-r--r--.   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10518433")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("月 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("29")]),s._v(" 00:05 etc.tar.bz2\n-rw-r--r--.   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12212046")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("月 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("29")]),s._v(" 00:01 etc.tar.gz\n-rw-r--r--.   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8580036")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("月 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("29")]),s._v(" 00:06 etc.tar.xz\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解压到指定目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zx -f etc.tar.gz -C /tmp\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 记得删除解压后的文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /tmp/etc/ /root/etc\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h2",{attrs:{id:"仅解开单一文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#仅解开单一文件"}},[s._v("#")]),s._v(" 仅解开单一文件")]),s._v(" "),a("p",[s._v("前面讲解的都是解开该压缩包中的所有文件。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 利用 -t 查看文件名，接管道查找 shadow")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tar -jtv -f /root/etc.tar.bz2 | grep 'shadow'")]),s._v("\n---------- root/root      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1271")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-10-04 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(":31 etc/shadow-\n---------- root/root       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("797")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-10-04 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(":31 etc/gshadow\n---------- root/root      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1266")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-10-04 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(":31 etc/shadow \t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 假设要提取出这个文件")]),s._v("\n---------- root/root       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("791")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-10-04 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(":31 etc/gshadow-\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 后面接需要提取出来的文件路径")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tar -jxv -f /root/etc.tar.bz2 etc/shadow")]),s._v("\netc/shadow\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ll etc")]),s._v("\n总用量 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n----------. "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1266")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("月  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(":31 shadow\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h2",{attrs:{id:"打包某目录，但不包含该目录下的某些文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打包某目录，但不包含该目录下的某些文件"}},[s._v("#")]),s._v(" 打包某目录，但不包含该目录下的某些文件")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tar -jc -f /root/system.tar.bz2 --exclude=/root/etc* --exclude=/root/system.tar.bz2 /etc /root")]),s._v("\ntar: 从成员名中删除开头的“/”\ntar: 从硬连接目标中删除开头的“/”\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"仅备份比某个时刻还要新的文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#仅备份比某个时刻还要新的文件"}},[s._v("#")]),s._v(" 仅备份比某个时刻还要新的文件")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 先找出比 /etc/passwd 还要新的文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 前面 touch 中介绍过 --newer 和 --newer-mtime")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# newer 包含 mtime 和 ctime，而 --newer-mtime 只包含 mtime")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# find /etc -newer /etc/passwd")]),s._v("\n/etc\n/etc/fstab\n/etc/group\n/etc/gshadow\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls --full-time  /etc/passwd")]),s._v("\n-rw-r--r--. "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2323")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-10-04 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(":31:08.332738182 +0800 /etc/passwd\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# tar -jcv -f /root/etc.newer.the.passwd.tar.bz2 --newer-mtime="2019-10-04" /etc/*')]),s._v("\ntar: 选项 --newer-mtime: 将日期 ‘2019-10-04’ 当作 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-10-04 00:00:00\ntar: 从成员名中删除开头的“/”\n/etc/abrt/\ntar: /etc/abrt/abrt-action-save-package-data.conf: 文件未改变；未输出\ntar: /etc/abrt/abrt.conf: 文件未改变；未输出\ntar: /etc/abrt/gpg_keys.conf: 文件未改变；未输出\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 验证下是否被打进去了，这里搜索都搜不到，确实没有被打进去")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tar -jtv -f etc.newer.the.passwd.tar.bz2 | grep 'etc/abrt/abrt.conf'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tar -jtv -f etc.newer.the.passwd.tar.bz2 | grep 'abrt.conf'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("p",[s._v("可以进行差异文件的记录与备份，例如：在一个月前进行过一次完整的数据备份，那么这个月备份至需要备份更改过的文件即可，直接写到上次备份的时间点即可")]),s._v(" "),a("h2",{attrs:{id:"基本名称：tarfile、tarball？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本名称：tarfile、tarball？"}},[s._v("#")]),s._v(" 基本名称：tarfile、tarball？")]),s._v(" "),a("p",[s._v("tar 可以只打包不压缩 "),a("code",[s._v("tar -c -f file.tar")]),s._v("，这种文件称为 tarfile，如果有压缩就称为 tarball。")]),s._v(" "),a("p",[s._v("此外 tar 还可以将文件打包到特别的装置中去，例如，"),a("code",[s._v("tar -c -f /dev/st0/home /root/etc")]),s._v(" ,把 etc 打包到磁带机去（磁带机是一次性读取、写入装置，因此不能使用 cp 等指令）")]),s._v(" "),a("h2",{attrs:{id:"特殊应用：利用管线命令与数据流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特殊应用：利用管线命令与数据流"}},[s._v("#")]),s._v(" 特殊应用：利用管线命令与数据流")]),s._v(" "),a("p",[s._v("关于数据流重导向与管线命令在胡须 bash 章节再详细讲解")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mrcode@study ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /tmp/\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mrcode@study tmp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -cv -f - /etc/ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -xv -f -\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 前面是将 /etc/ 打包到 - ，后面是吧 - 解压")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里的 - 表示标准的输出 和输出，可以吧 - 想成是内存中的一个缓冲区")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里命令像  cp -r /etc /tmp 的效果")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里不想用 -r 命令，所以使用 tar 打包到特殊的装置 - 中，然后管线前面输出的作为后面用来解压，没有产生中间文件，完成了复制的功能")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h1",{attrs:{id:"例题：系统备份范例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#例题：系统备份范例"}},[s._v("#")]),s._v(" # 例题：系统备份范例")]),s._v(" "),a("p",[s._v("系统上有非常多的目录需要进行备份，也不建议将备份数据放到 /root 目录下，假设目前已经知道重要的目录有：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("/etc/")]),s._v("：配置文件")]),s._v(" "),a("li",[a("code",[s._v("/home/")]),s._v(" ：用户的家目录")]),s._v(" "),a("li",[a("code",[s._v("/var/spool/mail/")]),s._v("：系统中所有的邮件信箱")]),s._v(" "),a("li",[a("code",[s._v("/var/spool/cron/")]),s._v("：所有账户的工作排成配置文件")]),s._v(" "),a("li",[a("code",[s._v("/root/")]),s._v("：系统管理员的家目录")])]),s._v(" "),a("p",[s._v("前面做过的练习，/home/loop* 不需要备份，/root 下的压缩文件也不需要备份，假设需要将备份的数据放到 /backups 中，并且该目录仅有 root 权限进入，此外，每次备份的文件名希望不相同。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建备份目录，并修改权限")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mkdir /backups")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chmod 700 /backups/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ll -d /backups/")]),s._v("\ndrwx------. "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("月 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("29")]),s._v(" 01:33 /backups/\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里的 xxx 需要手动写上想要的日期等字符串每次就不一样了，并不是用脚本变量啥的")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zcv -f /backups/xxx.tar.gz --exclude"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/home/loop*"')]),s._v(" --exclude"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/root/*.gz"')]),s._v(" --exclude"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/root/*.bz2"')]),s._v(" --exclude"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/root/*.xz"')]),s._v(" /etc/ /home/ /var/spool/mail /var/spool/cron /root \n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ll -h /backups/")]),s._v("\n总用量 13M\n-rw-r--r--. "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root 13M "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("月 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("29")]),s._v(" 01:37 xxx.tar.gz\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h2",{attrs:{id:"解压缩后的-selinux-课题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解压缩后的-selinux-课题"}},[s._v("#")]),s._v(" 解压缩后的 SELinux 课题")]),s._v(" "),a("p",[s._v("假如你的系统必须要以备份的数据来回填到原本的系统中，那么需要特别注意复原后的系统 SELinux 问题，尤其是在系统文件上面。比如：/etc 下的文件群。SElinux 是比较特别的细部权限设定，具体的会在第 16 章介绍。SELinux 的权限问题，可能让你的系统无法存取某些配置文件内容，导致影响到系统的正常使用权。")]),s._v(" "),a("p",[s._v("有一个例子，通过上面的 tar 备份，然后在另外一部系统上还原回来，但是无法正常的登录系统，在单位维护模式去操作系统，看起来一切都正常，但是这里就是无法登录。大部分原因就是因为 /etc/shadow 密码文件的 SELinux 类型在还原时被更改了，简单的处理方式有如下几个：")]),s._v(" "),a("ul",[a("li",[s._v("通过各种可行的救援方式登录系统，修改 /etc/seliux/config 文件，将 SELinux 改成 permissive 模式，重新启动系统就可以了")]),s._v(" "),a("li",[s._v("在第一次复原系统后，不要立即重新启动，先使用 "),a("code",[s._v("restorecon -Rv /etc")]),s._v(" 自动修复下 SELinux 的类型即可")]),s._v(" "),a("li",[s._v("通过各种可行的方式登录系统，建立 /.autorelabel 文件，重新启动后系统会自动修复 SELinux 的类型，并且又会再次重新启动，之后就正常了")])])])}),[],!1,null,null,null);t.default=r.exports}}]);