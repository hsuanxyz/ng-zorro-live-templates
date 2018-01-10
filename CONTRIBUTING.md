# 开始

1. 安装依赖 `npm install`
2. 在 `src/templates` 目录下修改或新增
3. 运行 `npm run build`

`build` 之后会生成 `nz-zorro/nz-zorro.xml` 更新你 webstorm 的 tepmlates，你可以在 `src/test.html` 中测试你新增的项目。

# 例子

## 一般

```yaml
nzButton:
  description: 按钮
  tpl: <button>$END$</button>
```

## 按顺序输入

```yaml
nzButtonGroup:
  tpl: |-
    <nz-button-group>
      <button nz-button (click)="$VAR0$">$VAR1$</button>$END$
    </nz-button-group>
  variables:
    - {name: 'VAR0', defaultValue: ''}
    - {name: 'VAR1', defaultValue: ''}
```

## 自定义下拉选项

```yaml
nzButton.nzType:
  description: 设置按钮类型，可选值为 primary dashed danger default
  tpl: |-
     [nzType]="'$VAR0$'"
  variables:
    - {name: 'VAR0', defaultValue: '"default"', expression: 'enum("primary", "dashed", "danger", "default")'}

```

更多设置查看 [Live Templates](https://www.jetbrains.com/help/webstorm/live-templates.html) 文档。
