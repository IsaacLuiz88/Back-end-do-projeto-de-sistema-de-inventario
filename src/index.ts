import express from 'express';
import cors from 'cors';
import { getGraphQLParameters, processRequest, shouldRenderGraphiQL, renderGraphiQL, sendResult } from 'graphql-helix';
import { schema } from './schema';
import { contextFactory } from './context';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/graphql', async (req, res) => {
  const request = {
    headers: req.headers,
    method: req.method,
    query: req.query,
    body: req.body,
  };

  if (shouldRenderGraphiQL(request)) {
    res.send(renderGraphiQL({ endpoint: '/graphql' }));
  } else {
    const { operationName, query, variables } = getGraphQLParameters(request);
    const result = await processRequest({
      request,
      schema,
      operationName,
      contextFactory,
      query,
      variables,
    });

    sendResult(result, res);
  }
});

app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000/graphql');
});
