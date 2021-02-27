exports.CreateTable = () =>{
    let client = new Client({
        user: 'gimhong-gwon',
        host: 'localhost',
        database: 'client_info',
        password: 'khk1592',
        port: 5432
    });//call db
    client.connect();

    let query = `
        CREATE TABLE test1 (
        name char(10),
        age integer,
        email char(20)
        );
    `
    client.query(query, (err, res)=>{
        if(err){
            console.error(err);
            return;
        }
        console.log('Table is successfully created');
        client.end();
    });//table creater
}
exports.addClient = (name, gender, prefer_gender, prefer_count) =>{//let {client} = require('pg');
    let {Client} = require('pg');
        let client = new Client({
        user: 'gimhong-gwon',
        host: 'localhost',
        database: 'testdb1',
        password: 'khk1592',
        port: 5432
    });//call db
    client.connect();
    let query = `
        insert into client values ('${name}', ${gender}, ${prefer_gender}, ${prefer_count});
    `
    client.query(query, (err, res)=>{
        if(err){
            console.error(err);
            return;
        }
        console.log('client is successfully added');
    });//table creater
    let id = client.query('SELECT * FROM client WHERE id=(SELECT max(id) FROM client);',(err, res)=>{
        if(err){
            console.error(err);
        }else{
            let ids = res.rows[0].id;
            return ids;
        }
    });
    
    return id;
}
let getClientbyID = (client_id) =>{
    let client = new Client({
        user: 'gimhong-gwon',
        host: 'localhost',
        database: 'testdb1',
        password: 'khk1592',
        port: 5432
    });//call db
    client.connect();
    let query = `select * from client where id=${client_id}`;
    client.query(query, (err, res)=>{
        if(err){
            console.error(err);
        }
        console.log(res.rowCount);
        if(res.rows[0]!=null){
            let client = res.rows[0];
            console.log(client.name);
            console.log(client.gender+" "+client.prefer_gender);
            console.log(client.prefer_count);
            

        }else{
            console.log("there is no such data");
        }
        client.end();
    });
}
// let {Client} = require('pg');
// getClientbyID(6);
