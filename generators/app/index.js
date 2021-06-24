const Generator = require('yeoman-generator')

module.exports = class extends Generator {
    prompting () {
        return this.prompt(
            [
                {
                    type: 'input',
                    name: 'name',
                    message: 'Your project name ',
                    default: this.appname
                }
            ])
            .then(answers => {
                this.answers = answers
            })
    }

    writing () {
        // 把每一个文件都通过模板转换到目标路径
        const templates = [
            '.gitignore',
            'babel.config.js',
            'package-lock.json',
            'package.json',
            'public',
            'README.md',
            'src',
            'public/favicon.ico',
            'public/index.html',
            'src/App.vue',
            'src/assets',
            'src/components',
            'src/main.js',
            'src/assets/logo.png',
            'src/components/HelloWorld.vue'
        ]

        templates.forEach(item => {
            // 把对应的模板映射到输出文件目录上
            this.fs.copyTpl(
                // 模板文件
                this.templatePath(item),
                // 输出目标路径
                this.destinationPath(item),
                // 模板内容
                this.answers
            )
        })

    }
};