'use strict';

const fs = require('fs');
const yaml = require('js-yaml');
const Handlebars = require('handlebars');
const readme = _read('README.md');
const template = Handlebars.compile(_read('src/ng-zorro.hbs'));
const docHbs = Handlebars.compile(_read('src/doc.hbs'));
const templates = yaml.safeLoad(readTemplates());
const data = [];

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
        template += _read('./src/templates/' + file) + '\n'
    });
    return template;
}


function yaml2xml() {
    Object.keys(templates).forEach(k => {
        const t = templates[k];
        let tpl = t.tpl;
        
        // 处理 defaultValue
        if (Array.isArray(t.variables)) {
            t.variables = t.variables.map(val => {
                val.defaultValue = _replaceDefaultValue(val.defaultValue);
                val.expression = _replaceDefaultValue(val.expression);
                if (typeof val.alwaysStopAt !== 'boolean' ) {
                    val.alwaysStopAt = true;
                }
                return val;
            })
        }
        const snippet = {
            name: k,
            description: _replaceDescription(t.description ? JSON.stringify(t.description) : _replaceTemplate(tpl)),
            tpl: _replaceTemplate(tpl),
            variables: t.variables || [],
            tplRaw: tpl
        };
        data.push(snippet);
    });
    return template(data);
}

function getTestString() {
    return Object.keys(templates)
    .map(k => {
        if (k.indexOf('.') !== -1 || k.indexOf('@') !== -1 ) {
            return `<div ${k}></div>`;
        } else {
            return k;
        }
    }).join('\n');
}

fs.writeFileSync('./ng-zorro/ng-zorro.xml', yaml2xml());
fs.writeFileSync('README.md', readme.replace(
    /(<!--DOC_START-->)[\s\S]*(<!--DOC_END-->)/g,
    function(match, $1, $2) {
        return $1 + '\n' + '\n| 关键字 | 描述 | \n| ----  | ---  | \n' + docHbs(data) + '\n' + $2;
    }));
fs.writeFileSync('./src/test.html', getTestString());
