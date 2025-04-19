    const fs=require('fs')
    fs.writeFileSync('F:/Web Development/Advanced Web Technology/Practice-3/ab.doc',"Hello")
    const a=fs.readFileSync('F:/Web Development/Advanced Web Technology/Practice-3/ab.doc','utf-8')
    console.log(a)