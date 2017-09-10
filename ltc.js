'use strict';

var through = require('through2');
var jade=require('jade');
var fs=require('fs');

module.exports=function(opts){


    function template(file, encoding, callback) {

        var options = opts || {};
        var template = options.template||'./template.jade';
        var title = options.title||'markdown doc';


        if (file.isNull()) {
          return callback(null, file);
        }

        if (file.isStream()) {
          return callback(new PluginError(pluginName, 'Streaming not supported'));
        }

        fs.readFile(template, function (err, data) {
            console.log(data.toString());
            if (err) throw err;
            jade.render(data.toString(),{'markdoc':file.contents.toString(),'title':title},function(err,html){
                //console.log(html);
                file.contents=new Buffer(html);
                callback( null, file );

            });

        })

  }

    return through.obj(template);

}
