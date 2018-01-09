'use strict';

const fs = require('fs');
const yaml = require('js-yaml');
const Handlebars = require('handlebars');

const template = Handlebars.compile(_read('src/ng-zorro.hbs'));
const templates = yaml.safeLoad(readTemplates());

function _read(file) {
    return fs.readFileSync(file, 'utf8');
}

function _replaceSymbol(template) {
    template = template.replace(/\n/g, '&#10;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
    return JSON.stringify(template);
}

function readTemplates() {
    let template = '';
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
        const snippet = {
            name: k,
            description: `nz: ${t.description || t.tpl}`,
            tpl: _replaceSymbol(tpl),
            variables: t.variables || [],
            tplRaw: tpl
        };
        data.push(snippet);
    });
    return template(data);
}

fs.writeFileSync('./.tmp.xml', yaml2xml());
