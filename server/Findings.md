To use an es module in node.js
use  add "type":"module" field in the package.json

To automatically restart a server on file save add 
"scripts":{
    "start":"nodemon dom.js"
}

Solved an error:
TypeError: database.on is not a function

by invoking the method instead of the clas as illustrated below:;
mongoose.connection instead of mongoose.Connection

React pagination
Inorder to paginate a react application, You use 'react-paginate' npm package.

To style the react pagination, you user the various props of classes illustrated on the official page eg you can use containerClassname

containerClassName={"you can use tailwind classes here like flex flex-row "}