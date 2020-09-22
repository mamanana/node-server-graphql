const express = require('express');
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type Query {
        hello: String
    }
`);

const root = {
    hello: () => {
        return 'Hello Word!';
    },
};

const app = express()
app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}));

app.listen(3000);
console.log('Running a GraphQL API server at http://localhost:3000/graphql');

