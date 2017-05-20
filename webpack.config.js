const path = require('path');
const DtsBundleWebpackPlugin = require('./dts-bundle-webpack-plugin');

module.exports = {
    entry: {
        todo: './src/components/todo',
        todoList: './src/todo-list'
    },
    output: {
        path: path.join(__dirname, './dist'),
        publicPath: '/dist/',
        filename: '[name].js'
    },
    target: 'web',
    resolve: {
        extensions: ['.js', '.ts']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                use: 'ts-loader'
            }
        ]
    },
    plugins: [
        new DtsBundleWebpackPlugin({
            name: 'TodoListExample',
            main: path.join(__dirname, "/dist/tsd-files/components/todo.d.ts"),
            out: path.join(__dirname, "/dist/todo.d.ts"),
            removeSource: false,
            outputAsModuleFolder: true,
            headerText: "TypeScript Definition for Todo"
        }),
        new DtsBundleWebpackPlugin({
            name: 'TodoListExample',
            main: path.join(__dirname, "/dist/tsd-files/todo-list.d.ts"),
            out: path.join(__dirname, "/dist/todo-list.d.ts"),
            removeSource: false,
            outputAsModuleFolder: true,
            headerText: "TypeScript Definition for TodoList"
        })
    ]

};