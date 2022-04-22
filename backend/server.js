const express = require('express');
const {Client} = require('pg');
const Plaid  =require('plaid');

const configuration = new Plaid.Configuration({
    basePath: Plaid.PlaidEnvironments.sandbox,
    baseOptions: {
      headers: {
        'PLAID-CLIENT-ID': '6248423533388c001a213331',
        'PLAID-SECRET': '0adb601a2da3d04a0ab6be4ebb58a0',
      },
    },
  });
const plaidClient = new Plaid.PlaidApi(configuration)
const app = express();

app.get('/plaid/link', (req, res)=>{

    console.log("trying to get plaid token")


    getPlaidToken(req, res);

    

  })

const client = new Client({
    user:"postgres",
    host:"localhost",
    database:'edporium',
    password:'test',
    port:5432
});

database = async ()=>{

    client.
    res = await client.connect();

    client.query("INSERT INTO people (firstname, lastname) VALUES ('chris', 'lucas')", (err, res) => {
        console.log(err, res)
        client.end()
      })





    
}



async function getPlaidToken(req, res){


    const request = {
        user: {
          client_user_id: '5346345435',
        },
        client_name: 'Plaid Test App',
        products: ['auth', 'transactions'],
        country_codes: ['US'],
        language: 'en',
        webhook: 'https://sample-web-hook.com',
        
        account_filters: {
          depository: {
            account_subtypes: ['checking'],
          },
        },
      };
      try {
        
        const response = await plaidClient.linkTokenCreate(request);
        const linkToken = response.data.link_token;

        res.set('Access-Control-Allow-Origin', '*');
        
        res.send({token:linkToken});
      } catch (error) {
        console.log(error)
      }




}


app.listen(5000)
// database()

