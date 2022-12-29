(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{542:function(v,_,t){"use strict";t.r(_);var d=t(16),i=Object(d.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"练习机的规划，重点是分区参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#练习机的规划，重点是分区参数"}},[v._v("#")]),v._v(" 练习机的规划，重点是分区参数")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("linux 主机的角色定位")]),v._v(" "),t("p",[v._v("主要用于练习 linux 的相关技术，几乎所有数据都要安装进来，包括 x windows")])]),v._v(" "),t("li",[t("p",[v._v("选择的 distribution")]),v._v(" "),t("p",[v._v("定位为服务器的角色，所以使用号称完全兼容商业版 RHEL 的社群版，CentOS  7.x")])]),v._v(" "),t("li",[t("p",[v._v("计算机系统硬件配备")]),v._v(" "),t("p",[v._v("鸟哥使用 KVM 所搭建出来的虚拟硬件环境，笔记是在 mac 上，所以使用 virtualbox。")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("CPU 等级类别：本机的 CPU 类型")])]),v._v(" "),t("li",[t("p",[v._v("内存：提供大约 1.2 G 左右的内存")])]),v._v(" "),t("li",[t("p",[v._v("硬盘：")]),v._v(" "),t("p",[v._v("用一颗 40 GB 的 VirtI/O 芯片组的磁盘，因此磁盘文件名应该会是 "),t("code",[v._v("/dev/vda")]),v._v("才对。\n同时提供一颗 2GB 左右的 IDE 界面的磁盘，仅测试使用，不安装系统，因此还存在 "),t("code",[v._v("/dev/sda")]),v._v(" 才对")])]),v._v(" "),t("li",[t("p",[v._v("网络卡：使用 bridge（桥接）方式，同样使用 VirtI/O 的芯片。CentOS 本身有提供驱动程序")])]),v._v(" "),t("li",[t("p",[v._v("显示适配器（VGA)：使用 linux 环境下运作还算顺畅的 QXL 显示适配器，给 60 M 左右的内存")])]),v._v(" "),t("li",[t("p",[v._v("其他输入/输出装置：仿真光驱、USB 鼠标、USB 键盘等以及 17 寸屏幕输出等设备")])])])]),v._v(" "),t("li",[t("p",[v._v("硬盘分区配置")]),v._v(" "),t("p",[v._v("如果你的磁盘有超过 2 TB 的话，linux 默认是会以 MBR 模式来处理分区表。\n我们只切除 40 GB 的磁盘来玩，所以预设上会以 MBR 来配置。\n可以在安装的时候加上某些参数，强制使用 GPT 分区表来配置我们的磁盘。\n实际的分区情况如下")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("所需目录/装置")]),v._v(" "),t("th",[v._v("磁盘容量")]),v._v(" "),t("th",[v._v("文件系统")]),v._v(" "),t("th",[v._v("分区格式")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("BIOS boot")]),v._v(" "),t("td",[v._v("2 MB")]),v._v(" "),t("td",[v._v("系统自定义")]),v._v(" "),t("td",[v._v("主分区")])]),v._v(" "),t("tr",[t("td",[v._v("/boot")]),v._v(" "),t("td",[v._v("1 GB")]),v._v(" "),t("td",[v._v("xfs")]),v._v(" "),t("td",[v._v("主分区")])]),v._v(" "),t("tr",[t("td",[v._v("/")]),v._v(" "),t("td",[v._v("10 GB")]),v._v(" "),t("td",[v._v("xfs")]),v._v(" "),t("td",[v._v("LVM 方式")])]),v._v(" "),t("tr",[t("td",[v._v("/home")]),v._v(" "),t("td",[v._v("5 GB")]),v._v(" "),t("td",[v._v("xfs")]),v._v(" "),t("td",[v._v("LVM")])]),v._v(" "),t("tr",[t("td",[v._v("swap")]),v._v(" "),t("td",[v._v("1 GB")]),v._v(" "),t("td",[v._v("swap")]),v._v(" "),t("td",[v._v("LVM")])])])]),v._v(" "),t("p",[v._v("由于使用 GPT，无需考虑主、延伸、逻辑分区的差异。不过由于 CentOS 预设会使用 LVM 的方式来管理你的文件系统，\n后续会讲解 LVM，这里就使用 LVM")])]),v._v(" "),t("li",[t("p",[v._v("开机管理程序（boot loader）")]),v._v(" "),t("p",[v._v("使用 CentOS 7 默认的 grub2，并且安装到 MBR 上面，也必须安装到 MBR 上面，因为硬盘全用在 LInux 上面的。（这里不太明白）")])]),v._v(" "),t("li",[t("p",[v._v("选择软件")]),v._v(" "),t("p",[v._v("练习机是要作为服务器用的，可能会用到图形界面来管理系统，会使用包含 x window 的服务器软件的方式来安装。\n要注意的是，从 7.x 开始，默认选择的软件模式是以最小安装的。")])])])])}),[],!1,null,null,null);_.default=i.exports}}]);