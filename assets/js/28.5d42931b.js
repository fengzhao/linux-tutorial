(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{437:function(s,t,n){s.exports=n.p+"assets/img/markdown-img-paste-20191004220015354.7eeada06.png"},544:function(s,t,n){"use strict";n.r(t);var a=n(16),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"多重引导安装流程与管理（option）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多重引导安装流程与管理（option）"}},[s._v("#")]),s._v(" 多重引导安装流程与管理（Option）")]),s._v(" "),a("p",[s._v("本节内容可选")]),s._v(" "),a("p",[s._v("笔者就不学习这章节了，记录下有哪些内容，这些内容在 "),a("a",{attrs:{href:"http://linux.vbird.org/linux_basic/0157installcentos7.php#ps4",target:"_blank",rel:"noopener noreferrer"}},[s._v("鸟哥网站"),a("OutboundLink")],1),s._v(" 上有")]),s._v(" "),a("ul",[a("li",[s._v("安装 CentOS 7.x + windows 7 的规划")]),s._v(" "),a("li",[s._v("进阶安装 CentOS 7.x 与 windows")])]),s._v(" "),a("h2",{attrs:{id:"救援-mbr-内的开机管理程序与设定多重引导"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#救援-mbr-内的开机管理程序与设定多重引导"}},[s._v("#")]),s._v(" 救援 MBR 内的开机管理程序与设定多重引导")]),s._v(" "),a("p",[s._v("同样，进入入口也是使用 DVD 镜像，前面安装 centos 的时候讲到过的一项菜单 「救援 CentOS 系统（Rcscue a CentOS system）」")]),s._v(" "),a("p",[s._v("进来之后，是进入了一个文字界面，通过以下指令救援 MBR 的开机管理程序")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chroot")]),s._v(" /mnt/sysimage\ngrub2-install /dev/vda\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ... 等待安装完成，出现以下类似的文案")]),s._v("\nInstalling "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" i386-pc platform\nInstallation finished. No error reported.\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 退出，并重启")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("reboot")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h2",{attrs:{id:"修改开机选单任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改开机选单任务"}},[s._v("#")]),s._v(" 修改开机选单任务")]),s._v(" "),a("p",[s._v("还需要修改开机选单，否则仅有 Linux 而已，正常登陆 linux 系统，切换身份到 root 后，进行下面的操作")]),s._v(" "),a("p",[a("img",{attrs:{src:n(437),alt:""}})]),s._v(" "),a("h2",{attrs:{id:"后续维护注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后续维护注意事项"}},[s._v("#")]),s._v(" 后续维护注意事项")]),s._v(" "),a("p",[s._v("多重引导设置完成之后，请特别注意：")]),s._v(" "),a("ol",[a("li",[s._v("windows 环境中最好将 linux 的根目录与 swap 取消挂载，")])]),s._v(" "),a("p",[s._v("否则未来打开文件总管时，会要求你格式化，那么 Linux 系统就毁了\n2. 你的 linux 不可以随便删除")]),s._v(" "),a("p",[s._v("因为 grub 会读取 Linux 根目录下的 /boot/ 目录内容，如果 Linux 被移除，那么 windows 也无法开机，\n因为整个开机选单都不见了")])])}),[],!1,null,null,null);t.default=e.exports}}]);