(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{651:function(s,t,a){"use strict";a.r(t);var n=a(16),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"本章习题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本章习题"}},[s._v("#")]),s._v(" 本章习题")]),s._v(" "),a("h1",{attrs:{id:"情景模拟题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#情景模拟题"}},[s._v("#")]),s._v(" 情景模拟题")]),s._v(" "),a("p",[s._v("通过设置、启动、观察等机制，完整了解一个服务的启动与观察")]),s._v(" "),a("ul",[a("li",[s._v("目标：了解 daemon 的管控机制，以 sshd daemon 为例")]),s._v(" "),a("li",[s._v("前提：需要对本章已经了解，尤其是 systemd 的管理部分")]),s._v(" "),a("li",[s._v("需求：已经有 sshd 这个服务，但是没有修改过端口")])]),s._v(" "),a("p",[s._v("启动两个 sshd 服务，另一个一个使用端口 222")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1. 查看 sshd 服务是否存在")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemctl status sshd.service ")]),s._v("\n* sshd.service - OpenSSH server daemon\n   Loaded: loaded "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("/usr/lib/systemd/system/sshd.service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" enabled"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" vendor preset: enabled"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   Active: active "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("running"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" since Tue "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("-03-17 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(":49:56 CST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" days ago\n     Docs: man:sshd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n           man:sshd_config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n Main PID: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1378")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sshd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    Tasks: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n   CGroup: /system.slice/sshd.service\n           `-1378 /usr/sbin/sshd -D\n\nMar "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(":49:55 study.centos.mrcode systemd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": Starting OpenSSH server daemon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nMar "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(":49:56 study.centos.mrcode sshd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1378")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": Server listening on "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0 port "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(".\nMar "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(":49:56 study.centos.mrcode sshd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1378")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": Server listening on :: port "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(".\nMar "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(":49:56 study.centos.mrcode systemd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": Started OpenSSH server daemon.\nMar "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(":51:42 study.centos.mrcode sshd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2344")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": Accepted password "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" mrcode from "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".4.170 port "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("60750")]),s._v(" ssh2\nMar "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(":35:40 study.centos.mrcode sshd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7250")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": Accepted password "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" ftptest from "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".4.170 port "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("59071")]),s._v(" ssh2\nMar "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(":22:50 study.centos.mrcode sshd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10579")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": Accepted password "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" root from "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".4.170 port "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("59851")]),s._v(" ssh2\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看他的启动脚本文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat /usr/lib/systemd/system/sshd.service")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Unit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Description")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("OpenSSH server daemon\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Documentation")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("man:sshd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" man:sshd_config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("After")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("network.target sshd-keygen.service\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Wants")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("sshd-keygen.service\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("notify\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("EnvironmentFile")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/sysconfig/sshd\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/sbin/sshd -D "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$OPTIONS")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecReload")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/bin/kill -HUP "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MAINPID")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("KillMode")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("process\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Restart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("on-failure\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("RestartSec")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("42s\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WantedBy")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("multi-user.target\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 通过 man ssshd 中的 FILES 信息中，找到了他的配置文件地址")]),s._v("\n/etc/ssh/sshd_config\n             Contains configuration data "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" sshd.  The "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("format")]),s._v(" and configuration options are described "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" sshd_config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2. 复制该配置文件，并修改端口号为 222")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd /etc/ssh/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ssh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cp sshd_config sshd2_config")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ssh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vim sshd2_config")]),s._v("\nPort "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("222")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3. 修改启动脚本等文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ssh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd /etc/systemd/system/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study system"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cp /usr/lib/systemd/system/sshd.service sshd2.service")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study system"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vim sshd2.service")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Unit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Description")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("OpenSSH server daemon "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Documentation")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("man:sshd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" man:sshd_config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("After")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("network.target sshd-keygen.service\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Wants")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("sshd-keygen.service\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("notify\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("EnvironmentFile")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/sysconfig/sshd\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 主要是这里")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/sbin/sshd -f /etc/ssh/sshd2_config -D "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$OPTIONS")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecReload")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/bin/kill -HUP "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MAINPID")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("KillMode")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("process\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Restart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("on-failure\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("RestartSec")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("42s\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WantedBy")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("multi-user.target\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 上述增加了 -f 参数指定了刚刚我们复制出来的配置文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 该语法是从这个脚本中的 Documentation=man:sshd(8)，然后使用 man 8 sshd 资料中 SYNOPSIS 中的  [-f config_file] 得知，可以指定一个配置文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 所以，其实这一步应该在最开始的时候去查阅，然后才是来达成这个配置文件的操作")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 4. 重新加载配置与这个服务的启动等观察")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study system"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemctl daemon-reload ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study system"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemctl enable sshd2.service ")]),s._v("\nCreated symlink from /etc/systemd/system/multi-user.target.wants/sshd2.service to /etc/systemd/system/sshd2.service.\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study system"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemctl start sshd2.service  ")]),s._v("\nJob "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" sshd2.service failed because the control process exited with error code. See "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"systemctl status sshd2.service"')]),s._v(" and "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"journalctl -xe"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" details.\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study system"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemctl status sshd2.service ")]),s._v("\n* sshd2.service - OpenSSH server daemon "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n   Loaded: loaded "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("/etc/systemd/system/sshd2.service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" enabled"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" vendor preset: disabled"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   Active: activating "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("auto-restart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Result: exit-code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" since Fri "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("-03-20 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(":04:25 CST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" 12s ago\n     Docs: man:sshd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n           man:sshd_config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  Process: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21511")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/sbin/sshd -f /etc/ssh/sshd2_config -D "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$OPTIONS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("code"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("exited, "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("status")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("255")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n Main PID: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21511")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("code"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("exited, "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("status")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("255")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nMar "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(":04:25 study.centos.mrcode systemd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": sshd2.service: main process exited, "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("code")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("exited, "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("status")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("255")]),s._v("/n/a\nMar "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(":04:25 study.centos.mrcode systemd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": Failed to start OpenSSH server daemon "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".\nMar "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(":04:25 study.centos.mrcode systemd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": Unit sshd2.service entered failed state.\nMar "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(":04:25 study.centos.mrcode systemd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": sshd2.service failed.\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 发现没有启动起来，启动失败了，去观察他的日志记录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study system"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tail -n 20 /var/log/messages")]),s._v("\nMar "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(":05:08 study python: SELinux is preventing /usr/sbin/sshd from name_bind access on the tcp_socket port "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("222")]),s._v("."),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#012#012*****  Plugin bind_ports (99.5 confidence) suggests   ************************#012#012If you want to allow /usr/sbin/sshd to bind to network port 222#012Then you need to modify the port type.#012Do#012# semanage port -a -t PORT_TYPE -p tcp 222#012    where PORT_TYPE is one of the following: ssh_port_t, vnc_port_t, xserver_port_t.#012#012*****  Plugin catchall (1.49 confidence) suggests   **************************#012#012If you believe that sshd should be allowed name_bind access on the port 222 tcp_socket by default.#012Then you should report this as a bug.#012You can generate a local policy module to allow this access.#012Do#012allow this access for now by executing:#012# ausearch -c 'sshd' --raw | audit2allow -M my-sshd#012# semodule -i my-sshd.pp#012")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 会发现触发了 SELInux ，没有通过检查， 99.5 的那个配置方案的解决告知我们需要执行")]),s._v("\nsemanage port -a -t ssh_port_t -p tcp "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("222")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study system"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# netstat -tlnp | grep ssh")]),s._v("\ntcp        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:6010          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:*               LISTEN      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2350")]),s._v("/sshd: mrcode@p \ntcp        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:6011          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:*               LISTEN      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10579")]),s._v("/sshd: root@pt \ntcp        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:222             "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:*               LISTEN      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21918")]),s._v("/sshd          \ntcp        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:22              "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:*               LISTEN      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1378")]),s._v("/sshd           \ntcp6       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" ::1:6010                :::*                    LISTEN      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2350")]),s._v("/sshd: mrcode@p \ntcp6       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" ::1:6011                :::*                    LISTEN      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10579")]),s._v("/sshd: root@pt \ntcp6       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" :::222                  :::*                    LISTEN      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21918")]),s._v("/sshd          \ntcp6       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" :::22                   :::*                    LISTEN      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1378")]),s._v("/sshd\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 就会发现已经启动成功了")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br"),a("span",{staticClass:"line-number"},[s._v("89")]),a("br"),a("span",{staticClass:"line-number"},[s._v("90")]),a("br"),a("span",{staticClass:"line-number"},[s._v("91")]),a("br"),a("span",{staticClass:"line-number"},[s._v("92")]),a("br"),a("span",{staticClass:"line-number"},[s._v("93")]),a("br"),a("span",{staticClass:"line-number"},[s._v("94")]),a("br"),a("span",{staticClass:"line-number"},[s._v("95")]),a("br"),a("span",{staticClass:"line-number"},[s._v("96")]),a("br"),a("span",{staticClass:"line-number"},[s._v("97")]),a("br"),a("span",{staticClass:"line-number"},[s._v("98")]),a("br"),a("span",{staticClass:"line-number"},[s._v("99")]),a("br"),a("span",{staticClass:"line-number"},[s._v("100")]),a("br"),a("span",{staticClass:"line-number"},[s._v("101")]),a("br"),a("span",{staticClass:"line-number"},[s._v("102")]),a("br"),a("span",{staticClass:"line-number"},[s._v("103")]),a("br"),a("span",{staticClass:"line-number"},[s._v("104")]),a("br"),a("span",{staticClass:"line-number"},[s._v("105")]),a("br"),a("span",{staticClass:"line-number"},[s._v("106")]),a("br"),a("span",{staticClass:"line-number"},[s._v("107")]),a("br"),a("span",{staticClass:"line-number"},[s._v("108")]),a("br"),a("span",{staticClass:"line-number"},[s._v("109")]),a("br"),a("span",{staticClass:"line-number"},[s._v("110")]),a("br"),a("span",{staticClass:"line-number"},[s._v("111")]),a("br"),a("span",{staticClass:"line-number"},[s._v("112")]),a("br"),a("span",{staticClass:"line-number"},[s._v("113")]),a("br")])]),a("h2",{attrs:{id:"简单部分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简单部分"}},[s._v("#")]),s._v(" 简单部分")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("使用 "),a("code",[s._v("netstat -tul")]),s._v(" 与 "),a("code",[s._v("netstat -tunl")]),s._v(" 有什么差别")]),s._v(" "),a("p",[s._v("使用 n 时，netstat 不会使用主机名与服务名表示，而是以 IP 和 端口来显示。IP 的分析与 "),a("code",[s._v("/etc/hosts")]),s._v(" 和 "),a("code",[s._v("/etc/resolv.conf")]),s._v(" 有关，port 则与 "),a("code",[s._v("/etc/services")]),s._v(" 有关")])]),s._v(" "),a("li",[a("p",[s._v("找到 port 3306 的端口号的服务是什么")]),s._v(" "),a("p",[s._v("可以通过搜索 "),a("code",[s._v("/etc/services")]),s._v(" 搜索到 3306 对应与 mysql 服务。")]),s._v(" "),a("p",[s._v("并且通过 "),a("code",[s._v("netstat -tlnp | grep 3306")]),s._v(" 的方式也能得到他的服务名称（如果运行中的话）")])]),s._v(" "),a("li",[a("p",[s._v("可以通过哪些指令查询到目前系统默认开机启动的服务")]),s._v(" "),a("p",[a("code",[s._v("systemctl list-units")]),s._v(" 和 "),a("code",[s._v("systemctl list-unit-files")])])]),s._v(" "),a("li",[a("p",[s._v("获取哪些服务在启动状态?")]),s._v(" "),a("p",[s._v("通过上面查询出来的服务，应该使用 "),a("code",[s._v("systemctl status [unit.service]")]),s._v(" 一项一项查询")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);