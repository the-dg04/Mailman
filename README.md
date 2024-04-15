# MailMan
suggest a better name plz ._.

### Video
https://github.com/the-dg04/mailman/assets/69722491/b0bfca8f-b606-40b5-b640-73eb8650259e

Link : https://drive.google.com/file/d/1cd9HmA3TfTfHZ16VmRQXwQfJP-y24gt9/view?usp=sharing
Vercel deployment link : https://mailman-ten.vercel.app/

### Overview
Built using Next.js, Tailwind.css and MongoDB.

### Installation

```bash
git clone https://github.com/the-dg04/mailman.git
cd mailman/
```

run ```npm i``` to install dependencies and create a ```.env.local``` file with :
```js
MONGODB_URI= #your_MongoDB_database_URI
```
run ```npm run dev``` to start the server.

### API routes

- ```/api/getAllRequests``` : [GET] get all requests
- ```/api/newRequest``` : [POST] create a new request
- ```/api/getRequestById/[id]``` : [GET] get request by id
- ```/api/updateRequestById/[id]``` : [POST] update request by id
- ```/api/deleteRequestById/[id]``` : [DELETE] delete request by id
