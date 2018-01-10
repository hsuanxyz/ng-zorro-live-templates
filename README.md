# ng-zorro-live-templates
ng-zorro Live Templates for WebStorm

![GIT](https://github.com/HsuanXyz/ng-zorro-live-templates/blob/master/GIF.gif?raw=true)

模板还在添加中，欢迎提交 [issues](https://github.com/HsuanXyz/ng-zorro-live-templates/issues/new) 和 PR [贡献指南](https://github.com/HsuanXyz/ng-zorro-live-templates/blob/master/CONTRIBUTING.md)


## 安装

下载这个文件保存到你的 templates 文件夹中，然后重启 IDE

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

<!--DOC_END-->
