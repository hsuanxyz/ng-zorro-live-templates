'use strict';

const fs = require('fs');
const yaml = require('js-yaml');
const Handlebars = require('handlebars');

const template = Handlebars.compile(_read('src/ng-zorro.hbs'));
const templates = yaml.safeLoad(readTemplates());

function _read(file) {
    return fs.readFileSync(file, 'utf8');
}

/**
 * 替换模板特殊字符
 * @param template
 * @returns {string}
 * @private
 */
function _replaceTemplate(template) {
    template = template.replace(/\n/g, '&#10;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
    return JSON.stringify(template);
}

/**
 * 替换默认值特殊字符
 * @param defaultValue
 * @returns {*}
 * @private
 */
function _replaceDefaultValue(defaultValue) {
    if (defaultValue) {
        return defaultValue.replace(/"/g, '&quot;')
    } else {
        return '';
    }
}

/**
 * 替换描述特殊字符
 * @param description
 * @returns {string}
 * @private
 */
function _replaceDescription(description) {
    // 将模板变量替换成 ...
    // 并压缩成一行
    return description.replace(/\$.+?\$/g, '...')
    .replace(/\n/g, '')
    .replace(/\s\s/g, ' ')
}

/**
 * 读取 src/templates 下全部的 yaml 文件，合并返回
 * @returns {string}
 */
function readTemplates() {
    let template = '';
    // TODO 只读 .yaml
    const templateFiles = fs.readdirSync('./src/templates');
    templateFiles.forEach(file => {
        template += _read('./src/templates/' + file)
    });
    return template;
}


function yaml2xml() {
    const data = [];
    Object.keys(templates).forEach(k => {
        const t = templates[k];
        let tpl = t.tpl;
        
        // 处理 defaultValue 中的特殊字符
        if (Array.isArray(t.variables)) {
            t.variables = t.variables.map(val => {
                val.defaultValue = _replaceDefaultValue(val.defaultValue);
                return val;
            })
        }
        const snippet = {
            name: k,
            description: `nz: ${t.description || _replaceDescription(t.tpl)}`,
            tpl: _replaceTemplate(tpl),
            variables: t.variables || [],
            tplRaw: tpl
        };
        data.push(snippet);
    });
    return template(data);
}

fs.writeFileSync('./.tmp.xml', yaml2xml());
