const fs = require("fs");
const path = require("path");

module.exports = function(publicFolder) {
    return (req, res, next) => {
        const regex = /^[/]([^/]*)[/]$/;
        const match = req.url.match(regex);
    
        if (match) {
            const base = match[1];
            const realpath = path.resolve(publicFolder, base);            
        
            if (fs.existsSync(realpath)) {
                req.url = `/${base}/${base}.html`;
            }
        }
        
        next();
    }
}
