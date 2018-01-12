# ng-zorro-live-templates
ng-zorro Live Templates for WebStorm

![GIT](https://github.com/HsuanXyz/ng-zorro-live-templates/blob/master/GIF.gif?raw=true)

模板还在添加中，欢迎提交 [issues](https://github.com/HsuanXyz/ng-zorro-live-templates/issues/new) 和 PR [贡献指南](https://github.com/HsuanXyz/ng-zorro-live-templates/blob/master/CONTRIBUTING.md)


## 安装

下载[这个文件](https://raw.githubusercontent.com/HsuanXyz/ng-zorro-live-templates/master/ng-zorro/ng-zorro.xml)保存到你的 templates 文件夹中，然后重启 IDE

- Windows: `<your home directory>\.<product name><version number>\config\templates`
- Linux: `~\.<product name><version number>\config\templates`
- OS X: `~/Library/Preferences/<product name><version number>/templates `

## 使用

关键字规律 `nz` + `组件名` + `属性`

输入 `nz` 按下 `Cmd + J`  编辑器会打开提示列表，并且跟随输入过滤列表。

当光标处于标签属性内，无需按下 `Cmd + J` ，输入 `nz` 编辑器会自动打开提示列表。

- 关键字带 `.` 表示输入属性
- 关键字带 `@` 表示输出属性

提示： 可以使用 Emmet 语法快速生成标签

`nzButtonGroup>nzButton*2`

```html
<nz-button-group>
    <button nz-button (click)=""></button>
    <button nz-button (click)=""></button>
</nz-button-group>
```

`nzMenu>nzMenuItem*3>nzIcon+span{item$}`

```html
<ul nz-menu>
    <li nz-menu-item><i class="anticon anticon-step-backward"></i><span>item1</span></li>
    <li nz-menu-item><i class="anticon anticon-step-backward"></i><span>item2</span></li>
    <li nz-menu-item><i class="anticon anticon-step-backward"></i><span>item3</span></li>
</ul>
```

## 文档

<!--DOC_START-->

| 关键字 | 描述 | 
| ----  | ---  | 
| `nzAffix` | "固钉" |
| `nzAffix@nzChange` | "固定状态改变时触发的回调函数" |
| `nzAffix.nzOffsetTop` | "距离窗口顶部达到指定偏移量后触发" |
| `nzAffix.nzTarget` | "设置需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数" |
| `nzAlert` | "警告提示" |
| `nzAlert.nzType` | "必选参数，指定警告提示的样式，有四种选择 success、info、warning、error" |
| `nzAlert.nzCloseable` | "可选参数，默认不显示关闭按钮" |
| `nzAlert.nzCloseText` | "可选参数，自定义关闭按钮" |
| `nzAlert.nzMessage` | "与alert-body标签二选一，警告提示内容" |
| `nzAlert.nzDescription` | "可选参数，警告提示的辅助性文字介绍" |
| `nzAlert@nzOnClose` | "可选参数，关闭时触发的回调函数" |
| `nzAlert.nzShowIcon` | "可选参数，是否显示辅助图标" |
| `nzAlert.nzBanner` | "是否用作顶部公告" |
| `nzAlert.alert-body` | "与nzMessage二选一，定义Message" |
| `nzAlert.alert-description` | "可选参数，定义Description" |
| `nzAnchor` | "锚点 - 用于跳转到页面指定位置。" |
| `nzAnchorLink` | "锚点 - 用于跳转到页面指定位置。" |
| `nzAnchor.nzOffsetTop` | "距离窗口顶部达到指定偏移量后触发" |
| `nzAnchor.nzBounds` | "锚点区域边界" |
| `nzAnchor.nzScroll` | "滚动至某锚点时触发" |
| `nzAnchorLink.nzHref` | "锚点链接" |
| `nzAnchorLink.nzTitle` | "文字内容" |
| `nzAvatar` | "头像 - 用来代表用户或事物，支持图片、图标或字符展示。" |
| `nzAvatar.nzShape` | "指定头像的形状" |
| `nzAvatar.nzSize` | "设置头像的大小" |
| `nzAvatar.nzText` | "文本类头像" |
| `nzAvatar.nzSrc` | "图片类头像的资源地址；倘若图片加载失败，自动显示 nzIcon &gt; nzText。" |
| `nzAvatar.nzIcon` | "设置头像的图标类型，参考 icon 组件" |
| `BackTop` | "回到顶部" |
| `BackTop.nzTemplate` | "自定义内容，见示例" |
| `BackTop.nzVisibilityHeight` | "滚动高度达到此参数值才出现 nz-back-top" |
| `BackTop@nzClick` | "点击按钮的回调函数" |
| `BackTop.nzTarget` | "设置需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数" |
| `nzBadge` | "徽标数 - 图标右上角的圆形徽标数字" |
| `nzBadge-dot` | "徽标数 - 只显示圆点" |
| `nzBadge-status` | "徽标数 - 带文字状态点" |
| `nzBadge.nzCount` | "展示的数字，大于 nzOverflowCount 时显示为 nzOverflowCount+为 0 时隐藏" |
| `nzBadge.nzOverflowCount` | "展示封顶的数字值" |
| `nzBadge.nzShowZero` | "当添加该属性时，当数值为 0 时，展示 Badge" |
| `nzBadge.nzDot` | "不展示数字，只有一个小红点" |
| `nzBadge.nzStatus` | "设置 Badge 为状态点" |
| `nzBadge.nzText` | "在设置了 nzStatus的前提下有效，设置状态点的文本" |
| `nzBreadcrumb` | "面包屑" |
| `nzBreadcrumb+` | "面包屑" |
| `nzBreadcrumbItem` | "面包屑 item" |
| `nzBreadcrumb.nzOffsetTop` | "分隔符自定义" |
| `nzButton` | "按钮" |
| `nzButtonGroup` | "按钮组, 可以将多个 nz-button 放入 nz-button-group 的容器中" |
| `nzButtonGroup+` | "&lt;nz-button-group&gt;&#10; &lt;button nz-button (click)=&quot;...&quot;&gt;...&lt;/button&gt;...&#10;&lt;/nz-button-group&gt;" |
| `nzButton.disabled` | "disabled" |
| `nzButton.nzType` | "设置按钮类型，可选值为 primary dashed danger default" |
| `nzButton.nzGhost` | "设置幽灵按钮" |
| `nzButton.nzLoading` | "设置按钮载入状态" |
| `nzButton.nzShape` | "设置按钮形状，可选值为 circle 或者不设" |
| `nzButton.nzSize` | "设置按钮大小，可选值为 small large 或者不设" |
| `nzCard` | "卡片 - 通用卡片容器。" |
| `nzCard.nzBordered` | "是否有边框" |
| `nzCard.nzNoHovering` | "取消鼠标移过浮起" |
| `nzCard.nzLoading` | "是否显示加载状态" |
| `nzCarousel` | "走马灯 - 旋转木马，一组轮播的区域。" |
| `nzCarousel.nz-carousel-content` | "用于标识滚动的slide内容" |
| `nzCarousel.nzEffect` | "动画效果函数，可取 scrollx, fade" |
| `nzCarousel.nzDots` | "是否显示面板指示点" |
| `nzCarousel.nzVertical` | "垂直显示" |
| `nzCarousel.nzAutoPlay` | "是否自动切换" |
| `nzCarousel.nzAutoPlaySpeed` | "自动切换速度, 单位毫秒" |
| `nzCarousel.nzPauseOnHover` | "鼠标悬停暂停" |
| `nzCarousel@nzAfterChange` | "切换面板后的回调, 参数为当前索引" |
| `nzCarousel@nzBeforeChange` | "切换面板前的回调, 参数为当前的索引与被切换到的索引" |
| `nzCascader` | "级联选择" |
| `nzCascader.nzSize` | "输入框大小，large 高度为 32px，small 为 22px，默认是 28px" |
| `nzCascader.nzDisabled` | "禁用" |
| `nzCascader.nzPlaceHolder` | "输入框的默认文字" |
| `nzCascader.nzShowInput` | "显示输入框。设置为false可隐藏输入框，但需要增加自定义显示内容。" |
| `nzCascader.nzShowSearch` | "是否支持搜索" |
| `nzCascader.nzAllowClear` | "是否显示清除按钮" |
| `nzCascader.nzClearText` | "清除按钮的标题" |
| `nzCascader.nzShowArrow` | "是否显示箭头" |
| `nzCascader.nzPopupClassName` | "弹出菜单的自定义样式" |
| `nzCascader.nzColumnClassName` | "弹出菜单中数据列的自定义样式" |
| `nzCascader.nzOptions` | "初始化列数据，用于第一列的数据，子列通过选项的 children 加载，或者通过 nzLoad事件异步加载。" |
| `nzCascader.nzEnableCache` | "是否缓存异步加载的数据，若每次异步加载的数据都是变化的，需将该值设置为 false" |
| `nzCascader.nzExpandTrigger` | "次级菜单的展开方式，可选 &apos;click&apos; 和 &apos;hover&apos;" |
| `nzCascader.nzChangeOnSelect` | "当此项为 true 时，点选每级菜单选项值都会发生变化，具体见上面的演示" |
| `nzCascader@nzChangeOn` | "可通过自定义的函数来判断点击菜单选项是否应该发生变化，当函数返回 true 时，将发生变化。函数说明：(option: CascaderOption, level: number): boolean" |
| `nzCascader.nzTriggerAction` | "触发菜单出现的行为，可选Array&lt;&apos;click&apos; | &apos;hover&apos;&gt;" |
| `nzCascader@nzDisplayRender` | "选择后展示的渲染函数。函数说明：(label: string[], selectedOptions: CascaderOption[]) =&gt; string" |
| `nzCascader.nzValueProperty` | "值value的属性名称" |
| `nzCascader.nzLabelProperty` | "值label的属性名称" |
| `nzCascader@nzVisibleChange` | "菜单实现或隐藏事件，参数为：(visible: boolean)" |
| `nzCascader@nzChange` | "选项值变更事件，参数为：(value: any[])" |
| `nzCascader@nzSelectionChange` | "选项变更事件，参数为：(options: CascaderOption[])" |
| `nzCascader@nzSelect` | "选项被选中事件，参数为：({ option: CascaderOption, index: number })。选项被选中，不代表值会发生变化。" |
| `nzCascader@nzLoad` | "异步加载事件，参数为：({ option: CascaderOption, index: number, resolve: (children: CascaderOption[]) =&gt; void, reject: () =&gt; void })。" |
| `nzCascader@nzClear` | "内容被清空事件，参数为：()。" |
| `nzCheckbox` | "多选框" |
| `nzCheckboxGroup` | "多选框组" |
| `nzCheckbox.nzIndeterminate` | "设置 indeterminate 状态，只负责样式控制" |
| `nzCheckbox.nzDisabled` | "是否可选" |
| `nzCollapseSet` | "折叠面板 - 容器区域。" |
| `nzCollapse` | "折叠面板 - 内容区域。" |
| `nzCollapseSet.nzBordered` | "是否有边框" |
| `nzCollapseSet.nzAccordion` | "是否是手风琴类型" |
| `nzCollapse.nzTitle` | "面板头内容" |
| `nzCollapse.nzActive` | "当前tab是否被选中" |
| `nzCollapse.nzDisabled` | "当前tab是否禁止选中" |
| `nzCollapse.collapse-title` | "与nzTitle二选一，定义面板头内容" |
| `nzDatepicker` | "日期选择框" |
| `nzRangePicker` | "日期范围选择框" |
| `nzDatepicker.nzSize` | "输入框大小，large 高度为 32px，small 为 22px，默认是 28px" |
| `nzDatepicker.nzFormat` | "展示的日期格式，配置参考 Moment.js文档" |
| `nzDatepicker.nzDisabled` | "禁用" |
| `nzDatepicker.nzAllowClear` | "是否显示清除按钮" |
| `nzDatepicker.nzShowTime` | "时间选项,参见 nz-timepicker 参数" |
| `nzDatepicker.nzDisabledDate` | "用于禁用日期的回调函数，返回true表示禁用此日期" |
| `nzRangePicker.nzSize` | "输入框大小，large 高度为 32px，small 为 22px，默认是 28px" |
| `nzRangePicker.nzFormat` | "展示的日期格式，配置参考 Moment.js文档" |
| `nzRangePicker.nzDisabled` | "禁用" |
| `nzRangePicker.nzAllowClear` | "是否显示清除按钮" |
| `nzRangePicker.nzShowTime` | "时间选项,参见 nz-timepicker 参数" |
| `nzRangePicker.nzDisabledDate` | "用于禁用日期的回调函数，返回true表示禁用此日期" |
| `nzDatepicker.nzPlaceholder` | "输入框提示文字" |
| `nzDatepicker.nzMode` | "选择器模式， month 只选择到月份，day 选择到天" |
| `nzRangePicker.nzPlaceholder` | "输入框提示文字" |
| `nzDropdown` | "下拉菜单" |
| `nzDropdownButton` | "下拉菜单 按钮样式" |
| `nzDropdown.nz-dropdown` | "用于定位触发下拉菜单的元素" |
| `nzDropdown.nz-dropdown-custom` | "自定义下拉菜单内容，不可与menu混用" |
| `nzDropdown.nzTrigger` | "触发下拉的行为" |
| `nzDropdown.nzClickHide` | "点击后是否隐藏菜单" |
| `nzDropdown.nzVisible` | "菜单是否显示" |
| `nzDropdown@nzVisibleChange` | "菜单显示状态改变时调用，参数为 nzVisible" |
| `nzDropdown.nzPlacement` | "菜单弹出位置：bottomLeft bottomCenter bottomRight topLeft topCenter topRight" |
| `nzDropdownButton.nzType` | "按钮类型" |
| `nzDropdownButton.nzSize` | "按钮大小" |
| `nzDropdownButton@nzClick` | "点击左侧按钮的回调" |
| `nzDropdownButton.nzTrigger` | "触发下拉的行为" |
| `nzDropdownButton.nzClickHide` | "点击后是否隐藏菜单" |
| `nzDropdownButton.nzVisible` | "菜单是否显示" |
| `nzDropdownButton@nzVisibleChange` | "菜单显示状态改变时调用，参数为 nzVisible" |
| `nzDropdownButton.nzPlacement` | "菜单弹出位置：bottomLeft bottomCenter bottomRight topLeft topCenter topRight" |
| `nzRow` | "栅格-行" |
| `nzCol` | "栅格-列" |
| `nzRow.nzGutter` | "栅格间隔" |
| `nzRow.nzType` | "布局模式，可选 flex，现代浏览器下有效" |
| `nzRow.nzAlign` | "flex 布局下的垂直对齐方式：top middle bottom" |
| `nzRow.nzJustify` | "flex 布局下的水平排列方式：start end center space-around space-between" |
| `nzCol.nzSpan` | "栅格占位格数，为 0 时相当于 display: none" |
| `nzCol.nzOrder` | "栅格顺序，flex 布局模式下有效" |
| `nzCol.nzOffset` | "栅格左侧的间隔格数，间隔内不可以有栅格" |
| `nzCol.nzPush` | "栅格向右移动格数" |
| `nzCol.nzPull` | "栅格向左移动格数" |
| `nzCol.nzXs` | "&lt;768px 响应式栅格，可为栅格数或一个包含其他属性的对象" |
| `nzCol.nzSm` | "≥768px 响应式栅格，可为栅格数或一个包含其他属性的对象" |
| `nzCol.nzMd` | "≥992px 响应式栅格，可为栅格数或一个包含其他属性的对象" |
| `nzCol.nzLg` | "≥1200px 响应式栅格，可为栅格数或一个包含其他属性的对象" |
| `nzCol.nzXl` | "≥1600px 响应式栅格，可为栅格数或一个包含其他属性的对象" |
| `nzIcon` | "图标" |
| `nzInputNumber` | "字输入框" |
| `nzInputNumber.nzPlaceHolder` | "placeholder" |
| `nzInputNumber.nzMin` | "最小值" |
| `nzInputNumber.nzMax` | "最大值" |
| `nzInputNumber.nzStep` | "每次改变步数，可以为小数" |
| `nzInputNumber.nzDisabled` | "禁用" |
| `nzInputNumber.nzSize` | "输入框大小" |
| `nzInputNumber@nzBlur` | "失去焦点回调" |
| `nzInputNumber@nzFocus` | "获取焦点回调" |
| `nzInputNumber.nzFormatter` | "function(value: number | string): string 指定输入框展示值的格式 " |
| `nzInputNumber.nzParser` | "指定从 nzFormatter 里转换回数字的方式，和 nzFormatter 搭配使用" |
| `nzInput` | "输入框" |
| `nzInputGroup` | "输入框组" |
| `nzTextarea` | "文本域" |
| `nzInput.nzType` | "【必须】声明 input 类型，同原生 input 标签的 type 属性。另外提供 nzType=&quot;textarea&quot;。" |
| `nzInput.nzPlaceHolder` | "在文字框中显示提示讯息" |
| `nzInput.nzSize` | "控件大小，默认值为 default 。注：标准表单内的输入框大小限制为 large。" |
| `nzInput.nzDisabled` | "是否禁用状态，默认为 false" |
| `nzInput.nzReadonly` | "是否只读状态，默认为 false" |
| `nzInput@nzBlur` | "失去焦点回调" |
| `nzInput@nzFocus` | "获取焦点回调" |
| `nzInput.addonBefore` | "设置前置标签 ng-template" |
| `nzInput.addonAfter` | "设置后置标签 ng-template" |
| `nzInput.prefix` | "带有前缀图标的 input ng-template" |
| `nzInput.suffix` | "#带有后缀图标的 input ng-template" |
| `nzInput.nzAutosize` | "自适应内容高度，可设置为 true|false 或对象：{ minRows: 2, maxRows: 6 }" |
| `nzInput.nzRows` | "控制固定框的行数" |
| `nzInputGroup.nzSize` | "nz-input-group 中所有的 nz-input 的大小" |
| `nzInput.nzCompact` | "是否用紧凑模式" |
| `nzMenu` | "导航菜单" |
| `nzMenuItem` | "菜单子项目" |
| `nzMenuItemDivider` | "菜单子项目分隔线" |
| `nzMenuSubmenu` | "子菜单" |
| `nzMenuGroup` | "子菜单组" |
| `nzMenu.nzTheme` | "主题颜色" |
| `nzMenu.nzMode` | "菜单类型，现在支持垂直、水平、和内嵌模式三种" |
| `nzMenu.nzInlineCollapsed` | "控制内嵌菜单的缩起/展开。" |
| `nzMenu.nzClickActive` | "点击后是否选中子菜单" |
| `nzMenuSubmenu.nzOpen` | "submenu是否展开，可双向绑定" |
| `nzMenuSubmenu@nzOpenChange` | "submenu展开关闭回调" |
| `nzMenuItem.nzSelected` | "当前菜单项是否被选中" |
| `nzModal` | "对话框 - 模态对话框。" |
| `nzModal.nzVisible` | "对话框是否可见" |
| `nzModal.nzConfirmLoading` | "确定按钮 loading" |
| `nzModal.nzTitle` | "标题" |
| `nzModal.nzClosable` | "是否显示右上角的关闭按钮" |
| `nzModal.nzBody` | "内容" |
| `nzModal@nzOnOk` | "点击确定回调" |
| `nzModal@nzOnCancel` | "点击遮罩层或右上角叉或取消按钮的回调" |
| `nzModal.nzWidth` | "宽度" |
| `nzModal.nzFooter` | "底部内容" |
| `nzModal.nzOkText` | "确认按钮文字" |
| `nzModal.nzCancelText` | "取消按钮文字" |
| `nzModal.nzMaskClosable` | "点击蒙层是否允许关闭" |
| `nzModal.nzZIndex` | "Modal zIndex属性，用于决定显示先后次序" |
| `nzModal.nzStyle` | "可用于设置浮层的样式，调整浮层位置等" |
| `nzModal.nzWrapClassName` | "对话框外层容器的类名" |
| `nzPagination` | "分页" |
| `nzPagination.nzPageIndex` | "当前页数(双向绑定)" |
| `nzPagination.nzTotal` | "数据总数" |
| `nzPagination.nzPageSize` | "每页条数 (双向绑定)" |
| `nzPagination.nzShowSizeChanger` | "是否可以改变 pageSize，当添加该属性时显示页面改变下拉菜单" |
| `nzPagination.nzPageSizeSelectorValues` | "每页显示条目数下拉框值" |
| `nzPagination.nzShowQuickJumper` | "是否可以快速跳转至某页，当添加该属性时显示快速跳转" |
| `nzPagination.nzSize` | "当为「small」时，是小尺寸分页" |
| `nzPagination.nzSimple` | "当添加该属性时，显示为简单分页" |
| `nzPagination.nzShowTotal` | "当添加该属性时，显示总共有多少条数据" |
| `nzPopconfirm` | "气泡确认框" |
| `nzPopconfirm.nzTitle` | "确认框描述" |
| `nzPopconfirm@nzOnConfirm` | "点击确认的回调" |
| `nzPopconfirm@nzOnCancel` | "点击取消的回调" |
| `nzPopconfirm.nzOkText` | "确认按钮文字" |
| `nzPopconfirm.nzCancelText` | "取消按钮文字" |
| `nzPopconfirm.nzCondition` | "是否直接执行确定方法" |
| `nzPopconfirm.nzPlacement` | "气泡框位置" |
| `nzPopconfirm.nzVisible` | "用于手动控制浮层显隐 双向绑定" |
| `nzPopconfirm@nzVisibleChange` | "显示隐藏的回调" |
| `nzPopconfirm.nzTrigger` | "触发行为，可选 hover/focus/click" |
| `nzPopconfirm.nzOverlayClassName` | "卡片类名" |
| `nzPopconfirm.nzOverlayStyle` | "卡片样式" |
| `nzPopconfirm.nzMouseEnterDelay` | "鼠标移入后延时多少才显示 Tooltip，单位：秒（nzTrigger=&apos;hover&apos;时有效）" |
| `nzPopconfirm.nzMouseLeaveDelay` | "鼠标移出后延时多少才隐藏 Tooltip，单位：秒（nzTrigger=&apos;hover&apos;时有效）" |
| `nzPopover` | "气泡卡片 - 点击/鼠标移入元素，弹出气泡式的卡片浮层。" |
| `nzPopover.nzPlacement` | "气泡框位置，可选" |
| `nzPopover.nzTemplate` | "用于定义Content内容" |
| `nzPopover.nzVisible` | "用于手动控制浮层显隐 双向绑定" |
| `nzPopover@nzVisibleChange` | "显示隐藏的回调" |
| `nzPopover.nzTrigger` | "触发行为，可选 hover/focus/click" |
| `nzPopover.nzOverlayClassName` | "卡片类名" |
| `nzPopover.nzOverlayStyle` | "卡片样式" |
| `nzPopover.nzMouseEnterDelay` | "鼠标移入后延时多少才显示 Tooltip，单位：秒（nzTrigger=&apos;hover&apos;时有效）" |
| `nzPopover.nzMouseLeaveDelay` | "鼠标移出后延时多少才隐藏 Tooltip，单位：秒（nzTrigger=&apos;hover&apos;时有效）" |
| `nzProgress` | "进度条 - 展示操作的当前进度。" |
| `nzProgress.nzType` | "类型，可选 linecircle" |
| `nzProgress.nzFormat` | "内容的模板函数" |
| `nzProgress.nzStatus` | "状态，可选：success exception active" |
| `nzProgress.nzShowInfo` | "是否显示进度数值或状态图标" |
| `nzProgress.nzStrokeWidthLine` | "进度条线的宽度，单位 px" |
| `nzProgress.nzStrokeWidthCircle` | "圆形进度条线的宽度，单位是进度条画布宽度的百分比" |
| `nzProgress.nzWidth` | "圆形进度条画布宽度，单位 px" |
| `nzRadio` | "单选框" |
| `nzRadioGroup` | "单选框组" |
| `nzRadioButtonGroup` | "按钮单选框组" |
| `nzRadioGroup.nzSize` | "大小，只对按钮样式生效" |
| `nzRadio.nzValue` | "当前Radio标示" |
| `nzRadio.nzDisabled` | "当前Radio是否不可选" |
| `nzRate` | "评分" |
| `nzRate.nzCount` | "star 总数" |
| `nzRate.nzDefaultValue` | "默认值" |
| `nzRate.nzAllowHalf` | "当添加该属性时允许半选" |
| `nzRate.nzDisabled` | "只读，无法进行交互" |
| `nzSelect` | "选择器" |
| `nzSelectOption` | "选择器选项" |
| `nzSelect@nzSearchChange` | "搜索内容变化回调函数，参数为搜索内容" |
| `nzSelect.nzMode` | "设置 Select 的模式" |
| `nzSelect@nzOpenChange` | "下拉菜单打开关闭回调函数" |
| `nzSelect.nzFilter` | "是否根据输入过滤选项" |
| `nzSelect.nzKeepUnListOptions` | "当添加该属性时，将保留不在当前选项框但已被选择的数据，仅对多选有效" |
| `nzSelect.nzAllowClear` | "当添加该属性时，支持清除, 单选模式有效" |
| `nzSelect@nzScrollToBottom` | "下拉菜单滚动到底部回调，可用于作为动态加载的触发条件" |
| `nzSelect.nzPlaceHolder` | "选择框默认文字" |
| `nzSelect.nzShowSearch` | "是否启用搜索框" |
| `nzSelect.nzNotFoundContent` | "当下拉列表为空时显示的内容" |
| `nzSelectOption.nzLabel` | "用于显示展示的option内容" |
| `nzSelectOption.nzOptionTemplate` | "用于定制下拉部分option的显示 ng-template" |
| `nzSelectOption.nzValue` | "option的value值，与nz-select选择option后的ngModel属性对应" |
| `nzSelectOption.nzDisabled` | "是否禁用" |
| `nzSlider` | "滑动输入条" |
| `nzSlider.nzRange` | "当添加该属性时，启动双滑块模式" |
| `nzSlider.nzMin` | "最小值" |
| `nzSlider.nzMax` | "最大值" |
| `nzSlider.nzStep` | "步长。取值必须大于 0，并且可被 (max - min) 整除。当 marks 不为空对象时，可以设置 step 为 null，此时 Slider 的可选值仅有 marks 标出来的部分。" |
| `nzSlider.nzMarks` | "刻度标记。key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标签可以单独设置样式。" |
| `nzSlider.nzDots` | "是否只能拖拽到刻度上" |
| `nzSlider.ngModel` | "设置/获取当前取值。当 range 为 false 时，使用 number，否则用 [number, number]" |
| `nzSlider.nzDefaultValue` | "设置初始取值。当 range 为 false 时，使用 number，否则用 [number, number]" |
| `nzSlider.nzIncluded` | "是否包含。marks 不为空对象时有效，值为 true 时表示值为包含关系，false 表示并列" |
| `nzSlider.nzDisabled` | "是否禁用。值为 true 时，滑块为禁用状态" |
| `nzSlider.nzVertical` | "竖直显示。添加该属性时，Slider 为垂直方向。" |
| `nzSlider@nzOnAfterChange` | "与 onmouseup 触发时机一致，把当前值作为参数传入。" |
| `nzSlider.nzTipFormatter` | "Slider 会把当前值传给 nzTipFormatter，并在 Tooltip 中显示 nzTipFormatter 的返回值，若为 null，则隐藏 Tooltip。" |
| `nzSpin` | "加载中 - 用于页面和区块的加载中状态。" |
| `nzSpin.nzSize` | "spin组件中点的大小，可选值为 small default large" |
| `nzSpin.nzSpinning` | "用于内嵌其他组件的模式，可以关闭 loading 效果" |
| `nzSpin.nzTip` | "自定义描述文案" |
| `nzSteps` | "步骤条" |
| `nzSteps+` | "步骤条" |
| `nzStep` | "步骤条子项" |
| `nzStepIcon` | "步骤条子项 代图标" |
| `nzSteps.nzCurrent` | "指定当前步骤，从 0 开始记数。在子 Step 元素中，可以通过 nzStatus 属性覆盖状态" |
| `nzSteps.nzStatus` | "指定当前步骤的状态，可选wait process finish error" |
| `nzSteps.nzSize` | "指定大小，目前支持普通（default）和迷你（small）" |
| `nzSteps.nzDirection` | "指定步骤条方向。目前支持水平（horizontal）和竖直（vertical）两种方向" |
| `nzSteps.nzProgressDot` | "通过添加该属性使用点状步骤条" |
| `nzStep.nzStatus` | "指定状态。当不配置该属性时，会使用 Steps 的 current 来自动指定状态。可选：wait process finish error" |
| `nzStep.nzTitle` | "标题" |
| `nzStep.nzDescription` | "步骤的详情描述，可选。如果需传入TemplateRef，可使用 template | string" |
| `nzSwitch` | "开关" |
| `nzSwitch.nzSize` | "开关大小" |
| `nzSwitch.nzDisabled` | "开关是否禁用" |
| `nzSwitch.checked` | "选中时的内容" |
| `nzSwitch.unchecked` | "非选中时的内容" |
| `nzTabset` | "标签页 - 选项卡切换组件。" |
| `nzTab` | "标签页 - 单独 Tab。" |
| `nzTabset.nzSelectedIndex` | "当前激活的Tab Index，支持双向绑定" |
| `nzTabset@nzSelectedIndexChange` | "当前激活的Tab Index回调" |
| `nzTabset@nzSelectChange` | "当前激活的Tab与Index值回调" |
| `nzTabset.nzShowPagination` | "超出高度或宽度后是否显示滑动按钮" |
| `nzTabset.nzTabBarExtraTemplate` | "用于指定 tab bar 上特定的额外的元素" |
| `nzTabset.nzTabBarExtraContent` | "tab bar 上额外的元素" |
| `nzTabset.nzType` | "页签的基本样式，可选 line、card 类型" |
| `nzTabset.nzSize` | "大小，提供 default 和 small 两种大小" |
| `nzTabset.nzAnimated` | "是否使用动画切换 Tabs，在 nzTabPosition=top|bottom 时有效" |
| `nzTabset.nzTabPosition` | "页签位置，可选值有 top right bottom left" |
| `nzTab.nzTabHeading` | "选项卡头显示内容" |
| `nzTab.nzDisabled` | "是否可被选中" |
| `nzTab@nzClick` | "点击选中事件回调" |
| `nzTab@nzSelect` | "被选中后事件回调" |
| `nzTab@nzDeselect` | "不被选中事件回调" |
| `nzTag` | "标签 - 进行标记和分类的小标签。" |
| `nzCheckableTag` | "标签 - 可选择。" |
| `nzCheckableTag.nzChecked` | "设置标签的选中状态" |
| `nzCheckableTag.nzClosable` | "标签是否可以关闭" |
| `nzCheckableTag.nzColor` | "标签色" |
| `nzCheckableTag@nzBeforeClose` | "关闭前的事件，参数为：(event: Event): void。可以通过设置 event.preventDefault(); 来阻止标签关闭。" |
| `nzCheckableTag@nzClose` | "关闭后事件，参数为：(event: Event): void，此时关闭的动画已完成。" |
| `nzCheckableTag@nzChange` | "点击标签时触发的事件，参数为：(checked: boolean): void。" |
| `nzTag.nzClosable` | "标签是否可以关闭" |
| `nzTag.nzColor` | "标签色" |
| `nzTag@nzBeforeClose` | "关闭前事件，参数为：(event: Event)。可以通过设置 event.preventDefault(); 来阻止标签关闭。" |
| `nzTag@nzClose` | "关闭后事件，参数为：(event: Event)，此时关闭的动画已完成。" |
| `nzTimePicker` | "时间选择框" |
| `nzTimePicker.nzSize` | "设置TimePicker大小" |
| `nzTimePicker.nzPlaceHolder` | "没有值的时候显示的内容" |
| `nzTimePicker.nzFormat` | "展示的时间格式" |
| `nzTimePicker.nzDisabled` | "禁用全部操作" |
| `nzTimePicker.nzDisabledHours` | "禁止选择部分小时选项" |
| `nzTimePicker.nzDisabledMinutes` | "禁止选择部分分钟选项" |
| `nzTimePicker.nzDisabledSeconds` | "禁止选择部分秒选项" |
| `nzTimePicker.nzHideDisabledOptions` | "添加该属性来隐藏禁止选择的选项" |
| `nzTimeline` | "时间轴 - 展示的时间流信息。" |
| `nzTimelineItem` | "时间轴子项" |
| `nzTimelineItem.nzColor` | "圈的颜色，固定为&quot;green&quot;，&quot;red&quot;，&quot;blue&quot;" |
| `nzTimelineItem.pending` | "幽灵节点元素" |
| `nzTimelineItem.custom` | "自定义元素" |
| `nzTooltip` | "文字提示 - 简单的文字提示气泡框。" |
| `nzTooltip.nzPlacement` | "气泡框位置，可选" |
| `nzTooltip.nzTitle` | "提示文字" |
| `nzTooltip.nzTemplate` | "用于定义Content内容" |
| `nzTooltip.nzVisible` | "用于手动控制浮层显隐 双向绑定" |
| `nzTooltip@nzVisibleChange` | "显示隐藏的回调" |
| `nzTooltip.nzTrigger` | "触发行为，可选 hover/focus/click" |
| `nzTooltip.nzOverlayClassName` | "卡片类名" |
| `nzTooltip.nzOverlayStyle` | "卡片样式" |
| `nzTooltip.nzMouseEnterDelay` | "鼠标移入后延时多少才显示 Tooltip，单位：秒（nzTrigger=&apos;hover&apos;时有效）" |
| `nzTooltip.nzMouseLeaveDelay` | "鼠标移出后延时多少才隐藏 Tooltip，单位：秒（nzTrigger=&apos;hover&apos;时有效）" |
| `nzTransfer` | "时间选择框" |
| `nzTransfer.render` | "每行数据渲染模板" |
| `nzTransfer.footer` | "底部渲染模板" |
| `nzTransfer.nzDataSource` | "数据源，其中若数据属性direction = &apos;right&apos;将会被渲染到右边一栏中" |
| `nzTransfer.nzTitles` | "标题集合，顺序从左至右" |
| `nzTransfer.nzOperations` | "操作文案集合，顺序从下至上" |
| `nzTransfer.nzListStyle` | "两个穿梭框的自定义样式，以ngStyle写法标题" |
| `nzTransfer.nzItemUnit` | "单数单位" |
| `nzTransfer.nzItemsUnit` | "复数单位" |
| `nzTransfer.nzShowSearch` | "是否显示搜索框" |
| `nzTransfer.nzFilterOption` | "接收inputValueoption 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false。" |
| `nzTransfer.nzSearchPlaceholder` | "搜索框的默认值" |
| `nzTransfer.nzNotFoundContent` | "当列表为空时显示的内容" |
| `nzTransfer.canMove` | "穿梭时二次校验。&#10;注意：穿梭组件内部始终只保留一份数据，二次校验过程中需取消穿梭项则直接删除该项；具体用法见示例。&#10;&#10;" |
| `nzTransfer@nzChange` | "选项在两栏之间转移时的回调函数" |
| `nzTransfer@nzSearchChange` | "搜索框内容时改变时的回调函数" |
| `nzTransfer@nzSelectChange` | "选中项发生改变时的回调函数" |

<!--DOC_END-->
