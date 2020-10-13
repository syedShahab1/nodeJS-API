# nodeJS-API ssignment
## Discription:
In this api you can get, add, update and delete the data.
##Usage:
- Clone this project from Github.
- Start The web server and run the project on command prompt.
```bash
node crud.js
```
- To get all data just hit the api on postman, select GET from dropdown and paste this url:
```bash
http://localhost:5000/
```
- To get a specific data copy the any id from the result of getting all the data and paste in url like this:
```bash
http://localhost:5000/:5f7e3ee816367e31d0de8b80
```
-To post data, select POST from dropdown and write a data in body in json format like this:
```bash
{
    "name": "uzair",
    "address": "dbrd",
    "phone": "765"
}
```
### Schema
```bash
const mongoose = require('mongoose');


const PostSchema = mongoose.Schema({
    name: String,
    address: String,
    phone: String
});

module.exports = mongoose.model('Posts', PostSchema);
```
- To update a data, select PATCH from dropdown, copy the any id from the result of getting all the data and paste in url like this:
```bash
http://localhost:5000/:5f7e3ee816367e31d0de8b80
```
And in body write a name which do you update for that specific id:
```bash
{
    "name": "uzair"
}
```
- To delete a data, select DELETE from dropdown, copy the any id from the result of getting all the data and paste in url like this:
```bash
http://localhost:5000/:5f7e3ee816367e31d0de8b80
```
