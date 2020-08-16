module.exports = [
    {
        name: 'home',
        id: 'home',
        sub: [
            {
                name: 'echart页面',
                componentName: 'EchartsView'
            },
            {
                name: 'Breadcrumb页面',
                componentName: 'BreadcrumbView'
            },
            {
                name: 'table页面',
                componentName: 'TableView'
                },
                {
                name: 'dialog页面',
                componentName: 'DialogView'
                },
        ]
    }, 
    {
        name: 'Form',
        id: 'form',
        sub: [
            {
            name: 'text页面',
            componentName: 'TextView'
            }, {
            name: 'Checkbox 多选框',
            componentName: 'FormCheckbox'
            }]
    }]