import express, { Request, Response, NextFunction, RequestHandler } from 'express';
const PORT = 3000;
type ServerError = {
  log: string,
  status:number,
  message: {}
}

const app = express();
app.use(express.json());
app.get('/', (req,res,next)=> {
    res.send('Sanity Check')
});
// Error Handling
app.use('/', (err:ServerError, req:Request, res:Response, next:NextFunction) => {
    const defaultErr:ServerError = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  })
  
app.listen(PORT, ()=> console.log(`Listening on ${PORT}`))