//Sistema de módulos do Node é o Commom JS !== Sistema de módulos do JavaScript (ES6)

const path = require("path");

//Configuração do WebPack
module.exports = {
    mode: "production",                                           //"development" > bundle.js !minificado | "production" > bundle.js minificado
    entry: "./src/index.js",                                      //Recebe o arquivo de entrada.
    output: {
      path: path.resolve(__dirname, "public", "assets", "js"),    //Este modo torna mais compatível o output em diferentes SO.
      filename: "bundle.js"                                       //Arquivo final, de agrupamento de todos os outros.
    },
    module: {                                                     //Aqui pediremos para que o webpack passe no código do babel.
        rules: [{
            exclude: /node_modules/,                              //Aumento de performance por excluir a análise da pasta node.
            test: /\.js$/,                                        // \ > escapa o . , $ indica que o arquivo vai terminar com .js
            use: {
                loader: "babel-loader",                           //Solicita que use o babel.
                options: {
                    presets: ["@babel/env"]                       //Pré configuração desejada.
                }
            }
        }]
    },
    devtool: "source-map"                                         //Garantirá que quando houver um erro, indique no código original.

};