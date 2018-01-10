# ng-zorro-live-templates
ng-zorro Live Templates for WebStorm

![GIT](GIT.gif)

模板还在添加中，欢迎提交 [issues](https://github.com/HsuanXyz/ng-zorro-live-templates/issues/new) 和 PR


## 安装

下载这个文件保存到你的 templates 文件夹中，然后重启 IDE

- Windows: `<your home directory>\.<product name><version number>\config\templates`
- Linux: `~\.<product name><version number>\config\templates`
- OS X: `~/Library/Preferences/<product name><version number>/templates `

## 使用

输入 `nz` 按下 `Cmd + J`  编辑器会打开提示列表，并且跟随输入过滤列表。

当光标处于标签属性内，无需按下 `Cmd + J` ，输入 `nz` 编辑器会自动打开提示列表。

## 文档

<!--DOC_START-->

### `nzAffix`

> "固钉"

```html
<nz-affix>$END$</nz-affix>
```
### `nzAffix@nzChange`

> "固定状态改变时触发的回调函数"

```html
(nzChange)="$fun$($event)"
```
### `nzAffix.nzOffsetTop`

> "距离窗口顶部达到指定偏移量后触发"

```html
[nzOffsetTop]="$END$"
```
### `nzAffix.nzTarget`

> "设置需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数"

```html
[nzTarget]="$END$"
```
### `nzBreadcrumb`

> "面包屑"

```html
<nz-breadcrumb>$END$</nz-breadcrumb>
```
### `nzBreadcrumb+`

> "面包屑"

```html
<nz-breadcrumb>
  <nz-breadcrumb-item>$END$</nz-breadcrumb-item>
</nz-breadcrumb>
```
### `nzBreadcrumbItem`

> "面包屑 item"

```html
<nz-breadcrumb-item>$END$</nz-breadcrumb-item>
```
### `nzBreadcrumb.nzOffsetTop`

> "分隔符自定义"

```html
[nzSeparator]="$VAR0$"
```
### `nzButton`

> "按钮"

```html
<button $cpm$ (click)="$VAR0$">$VAR1$</button>$END$
```
### `nzButtonGroup`

> "按钮组, 可以将多个 nz-button 放入 nz-button-group 的容器中"

```html
<nz-button-group>$END$</nz-button-group>
```
### `nzButtonGroup+`

> "&lt;nz-button-group&gt;&#10; &lt;button nz-button (click)=&quot;...&quot;&gt;...&lt;/button&gt;...&#10;&lt;/nz-button-group&gt;"

```html
<nz-button-group>
  <button nz-button (click)="$VAR0$">$VAR1$</button>$END$
</nz-button-group>
```
### `nzButton.disabled`

> "disabled"

```html
disabled
```
### `nzButton.nzType`

> "设置按钮类型，可选值为 primary dashed danger default"

```html
[nzType]="'$VAR0$'"
```
### `nzButton.nzGhost`

> "设置幽灵按钮"

```html
nzGhost
```
### `nzButton.nzLoading`

> "设置按钮载入状态"

```html
[nzLoading]="$VAR0$"
```
### `nzButton.nzShape`

> "设置按钮形状，可选值为 circle 或者不设"

```html
[nzShape]="'$VAR0$'"
```
### `nzButton.nzSize`

> "设置按钮大小，可选值为 small large 或者不设"

```html
[nzSize]="'$VAR0$'"
```
### `nzDropdown`

> "下拉菜单"

```html
<nz-dropdown>
  <a class="ant-dropdown-link" nz-dropdown>
    $VAR0$ <i class="anticon anticon-down"></i>
  </a>
  <ul nz-menu>
    <li nz-menu-item>
      $END$
    </li>
  </ul>
</nz-dropdown>
```
### `nzDropdownButton`

> "下拉菜单 按钮样式"

```html
<nz-dropdown-button (nzClick)="$fun$($event)">
  $VAR0$
  <ul nz-menu>
    <li nz-menu-item>
      $END$
    </li>
  </ul>
</nz-dropdown-button>
```
### `nzDropdown.nz-dropdown`

> "用于定位触发下拉菜单的元素"

```html
nz-dropdown
```
### `nzDropdown.nz-dropdown-custom`

> "自定义下拉菜单内容，不可与menu混用"

```html
nz-dropdown-custom
```
### `nzDropdown.nzTrigger`

> "触发下拉的行为"

```html
[nzTrigger]="'$VAR0$'"
```
### `nzDropdown.nzClickHide`

> "点击后是否隐藏菜单"

```html
[nzClickHide]="$VAR0$"
```
### `nzDropdown.nzVisible`

> "菜单是否显示"

```html
[nzVisible]="$VAR0$"
```
### `nzDropdown@nzVisibleChange`

> "菜单显示状态改变时调用，参数为 nzVisible"

```html
(nzVisibleChange)="$fun$($event)"
```
### `nzDropdown.nzPlacement`

> "菜单弹出位置：bottomLeft bottomCenter bottomRight topLeft topCenter topRight"

```html
[nzPlacement]="'$VAR0$'"
```
### `nzDropdownButton.nzType`

> "按钮类型"

```html
[nzType]="'$VAR0$'"
```
### `nzDropdownButton.nzSize`

> "按钮大小"

```html
[nzSize]="'$VAR0$'"
```
### `nzDropdownButton@nzClick`

> "点击左侧按钮的回调"

```html
(nzClick)="$fun$($event)"
```
### `nzDropdownButton.nzTrigger`

> "触发下拉的行为"

```html
[nzTrigger]="'$VAR0$'"
```
### `nzDropdownButton.nzClickHide`

> "点击后是否隐藏菜单"

```html
[nzClickHide]="$VAR0$"
```
### `nzDropdownButton.nzVisible`

> "菜单是否显示"

```html
[nzVisible]="$VAR0$"
```
### `nzDropdownButton@nzVisibleChange`

> "菜单显示状态改变时调用，参数为 nzVisible"

```html
(nzVisibleChange)="$fun$($event)"
```
### `nzDropdownButton.nzPlacement`

> "菜单弹出位置：bottomLeft bottomCenter bottomRight topLeft topCenter topRight"

```html
[nzPlacement]="'$VAR0$'"
```
### `nzRow`

> "栅格-行"

```html
<div $cpm$>$END$</div>
```
### `nzCol`

> "栅格-列"

```html
<div $cpm$>$END$</div>
```
### `nzRow.nzGutter`

> "栅格间隔"

```html
[nzGutter]="$END$"
```
### `nzRow.nzType`

> "布局模式，可选 flex，现代浏览器下有效"

```html
[nzType]="'flex'"
```
### `nzRow.nzAlign`

> "flex 布局下的垂直对齐方式：top middle bottom"

```html
[nzAlign]="'$VAR0$'"
```
### `nzRow.nzJustify`

> "flex 布局下的水平排列方式：start end center space-around space-between"

```html
[nzJustify]="'$VAR0$'"
```
### `nzCol.nzSpan`

> "栅格占位格数，为 0 时相当于 display: none"

```html
[nzSpan]="$END$"
```
### `nzCol.nzOrder`

> "栅格顺序，flex 布局模式下有效"

```html
[nzOrder]="$END$"
```
### `nzCol.nzOffset`

> "栅格左侧的间隔格数，间隔内不可以有栅格"

```html
[nzOffset]="$END$"
```
### `nzCol.nzPush`

> "栅格向右移动格数"

```html
[nzPush]="$END$"
```
### `nzCol.nzPull`

> "栅格向左移动格数"

```html
[nzPull]="$END$"
```
### `nzCol.nzXs`

> "&lt;768px 响应式栅格，可为栅格数或一个包含其他属性的对象"

```html
[nzXs]="$END$"
```
### `nzCol.nzSm`

> "≥768px 响应式栅格，可为栅格数或一个包含其他属性的对象"

```html
[nzSm]="$END$"
```
### `nzCol.nzMd`

> "≥992px 响应式栅格，可为栅格数或一个包含其他属性的对象"

```html
[nzMd]="$END$"
```
### `nzCol.nzLg`

> "≥1200px 响应式栅格，可为栅格数或一个包含其他属性的对象"

```html
[nzLg]="$END$"
```
### `nzCol.nzXl`

> "≥1600px 响应式栅格，可为栅格数或一个包含其他属性的对象"

```html
[nzXl]="$END$"
```
### `nzIcon`

> "图标"

```html
<i class="anticon anticon-$VAR0$"></i>$END$
```
### `nzMenu`

> "导航菜单"

```html
<ul $cpm$>$END$</ul>
```
### `nzMenuItem`

> "菜单子项目"

```html
<li $cpm$>$END$</li>
```
### `nzMenuItemDivider`

> "菜单子项目分隔线"

```html
<li $cpm$></li>
```
### `nzMenuSubmenu`

> "子菜单"

```html
<li nz-submenu>
  <span title>$VAR0$</span>
  <ul>
    <li nz-menu-item>$END$</li>
  </ul>
</li>
```
### `nzMenuGroup`

> "子菜单组"

```html
<li nz-menu-group>
  <span title>$VAR0$</span>
  <ul>
    <li nz-menu-item>$END$</li>
  </ul>
</li>
```
### `nzMenu.nzTheme`

> "主题颜色"

```html
[nzTheme]="'$VAR0$'"
```
### `nzMenu.nzMode`

> "菜单类型，现在支持垂直、水平、和内嵌模式三种"

```html
[nzMode]="'$VAR0$'"
```
### `nzMenu.nzInlineCollapsed`

> "控制内嵌菜单的缩起/展开。"

```html
[nzInlineCollapsed]="$END$"
```
### `nzMenu.nzClickActive`

> "点击后是否选中子菜单"

```html
[nzClickActive]="$END$"
```
### `nzMenuSubmenu.nzOpen`

> "submenu是否展开，可双向绑定"

```html
[nzOpen]="$END$"
```
### `nzMenuSubmenu@nzOpenChange`

> "submenu展开关闭回调"

```html
(nzOpenChange)="$fun$($event)"
```
### `nzMenuItem.nzSelected`

> "当前菜单项是否被选中"

```html
[nzSelected]="$END$"
```
### `nzPagination`

> "分页"

```html
<nz-pagination [nzPageIndex]="$VAR0$" [nzTotal]="$VAR1$" [nzPageSize]="$VAR2$"></nz-pagination>
```
### `nzPagination.nzPageIndex`

> "当前页数(双向绑定)"

```html
[nzPageIndex]="$END$"
```
### `nzPagination.nzTotal`

> "数据总数"

```html
[nzTotal]="$END$"
```
### `nzPagination.nzPageSize`

> "每页条数 (双向绑定)"

```html
[nzPageSize]="$END$"
```
### `nzPagination.nzShowSizeChanger`

> "是否可以改变 pageSize，当添加该属性时显示页面改变下拉菜单"

```html
nzShowSizeChanger
```
### `nzPagination.nzPageSizeSelectorValues`

> "每页显示条目数下拉框值"

```html
[nzPageSizeSelectorValues]="$END$"
```
### `nzPagination.nzShowQuickJumper`

> "是否可以快速跳转至某页，当添加该属性时显示快速跳转"

```html
nzShowQuickJumper
```
### `nzPagination.nzSize`

> "当为「small」时，是小尺寸分页"

```html
[nzSize]="'$VAR0$'"
```
### `nzPagination.nzSimple`

> "当添加该属性时，显示为简单分页"

```html
nzSimple
```
### `nzPagination.nzShowTotal`

> "当添加该属性时，显示总共有多少条数据"

```html
nzShowTotal
```
### `nzSteps`

> "步骤条"

```html
<nz-steps [(nzCurrent)]="$VAR0$" [nzStatus]="'$VAR1$'" [nzSize]="'$VAR2$'" [nzDirection]="'$VAR3$'">
  <nz-step [nzTitle]="'$VAR4$'"></nz-step>
  $END$
</nz-steps>
<div class="steps-content">

</div>
```
### `nzSteps+`

> "步骤条"

```html
<nz-steps [(nzCurrent)]="$VAR0$" [nzStatus]="'$VAR1$'" [nzSize]="'$VAR2$'" [nzDirection]="'$VAR3$'">
  <nz-step [nzTitle]="'$VAR4$'" [nzDescription]="$VAR5$"></nz-step>
  <ng-template #$VAR5$>
    $END$
  </ng-template>
</nz-steps>
```
### `nzStep`

> "步骤条子项"

```html
<nz-step [nzTitle]="'$VAR0$'" [nzDescription]="'$VAR1$'" [nzStatus]="'$VAR2$'"></nz-step>$END$
```
### `nzStepIcon`

> "步骤条子项 代图标"

```html
<nz-step [nzTitle]="'$VAR0$'" [nzDescription]="'$VAR1$'">
  <ng-template #nzIcon>
    <i class="anticon anticon-$VAR2$"></i>
  </ng-template>
</nz-step>$END$
```
### `nzSteps.nzCurrent`

> "指定当前步骤，从 0 开始记数。在子 Step 元素中，可以通过 nzStatus 属性覆盖状态"

```html
[nzCurrent]="$END$"
```
### `nzSteps.nzStatus`

> "指定当前步骤的状态，可选wait process finish error"

```html
[nzStatus]="'$VAR0$'"
```
### `nzSteps.nzSize`

> "指定大小，目前支持普通（default）和迷你（small）"

```html
[nzSize]="'$VAR0$'"
```
### `nzSteps.nzDirection`

> "指定步骤条方向。目前支持水平（horizontal）和竖直（vertical）两种方向"

```html
[nzDirection]="$VAR0$"
```
### `nzSteps.nzProgressDot`

> "通过添加该属性使用点状步骤条"

```html
[nzProgressDot]="$END$"
```
### `nzStep.nzStatus`

> "指定状态。当不配置该属性时，会使用 Steps 的 current 来自动指定状态。可选：wait process finish error"

```html
[nzStatus]="'$VAR0$'"
```
### `nzStep.nzTitle`

> "标题"

```html
[nzTitle]="'$END$'"
```
### `nzStep.nzDescription`

> "步骤的详情描述，可选。如果需传入TemplateRef，可使用 template | string"

```html
[nzDescription]="$END$"
```

<!--DOC_END-->