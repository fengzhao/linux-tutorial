(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{682:function(s,a,t){"use strict";t.r(a);var n=t(16),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"检验软件的正确性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#检验软件的正确性"}},[s._v("#")]),s._v(" 检验软件的正确性")]),s._v(" "),t("p",[s._v("在网络上下载软件时，由于黑客无处不在，那么你这么保证你下载的文件是原版官方放出来的文件？这就需要通过 "),t("strong",[s._v("每个文件独特的指纹验证数据了")])]),s._v(" "),t("p",[s._v("每个文件的内容与文件大小都不同，如果一个文件被修改之后，必然会有部分信息不一样，利用这个特性，可以使用 MD5/sha1 或更严密的 sha256 等指纹验证机制来判断该文件是否被更改过")]),s._v(" "),t("h2",{attrs:{id:"md5sum、sha1sum、sha256sum"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#md5sum、sha1sum、sha256sum"}},[s._v("#")]),s._v(" md5sum、sha1sum、sha256sum")]),s._v(" "),t("p",[s._v("目前有多重机制可以计算文件的指纹码，我们选择使用较为广泛的 MD5、SHA1、SHA256 加密机制来处理。")]),s._v(" "),t("p",[s._v("这里使用前一小节下载的 NPT 软件，来测试。在 NTP 下载页面上，提供了一个 md5 文件的下载，把这个对应版本的 md5 文件下载下来，里面就写着他的指纹码")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("mrcode:Downloads mrcode$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" ntp-4.2.8p14.tar.gz.md5\nMD5 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ntp-4.2.8p14.tar.gz"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 783edaf1d68ddf651bde64eda54a579d\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("如果如下的方式获取我们下载的 ntp 软件的指纹码，语法为")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("md5sum/sha1sum/sha256sum "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-bct"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" filename\nmd5sum/sha1sum/sha256sum "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("--status"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("--warn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" --check filename\n\n-b：使用 binary 的读取方式，默认为 Windows/DOS 文件形态的读取方式\n-c：检验文件指纹\n-t：以文字形态来读取文件指纹\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 范例 1：获取刚刚 NTP 软件的指纹码")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# md5sum ntp-4.2.8p14.tar.gz ")]),s._v("\n783edaf1d68ddf651bde64eda54a579d  ntp-4.2.8p14.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用此指纹码对比刚刚官网下载下来的指纹码是否相同")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("你可以利用此特性将一些重要文件进行指纹数据库的建立，这样就能知道文件是否被修改过了")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将多个文件生成指纹码，并写入文件中")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# md5sum /etc/group /etc/passwd >> data.md5")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat data.md5 ")]),s._v("\nb75dbd8dc79305ad77c798ba1c9289e2  /etc/group\na60de527e76f0d5b31b0114098c8072a  /etc/passwd\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 校验指纹码是否匹配")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# md5sum -c data.md5                       ")]),s._v("\n/etc/group: OK\n/etc/passwd: OK\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);