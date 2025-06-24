import 'dotenv/config';
import express, { Application } from 'express';
import morgan from 'morgan';
import databaseConnectionString from './config/dbConfig/dbConfig';
import { rateLimit } from 'express-rate-limit'
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import authRoute from './controller/auth/auth.controller';
import { notFoundRoute } from './middleware/404/notFoundRoute.404';
import { serverError } from './middleware/500/serverError.500';
const app: Application = express();
//General Application-level Middleware config
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const APP_HOST: string = process.env.APP_HOST as string || 'localhost';
const APP_PORT: string | number = parseInt(process.env.APP_PORT || '8080', 10);
const API_VERSION: string | number = process.env.API_VERSION as string | number || 'v1';
const APP_NAME: string = process.env.APP_NAME as string || 'NodeExpenseTracker';
if (process.env.NODE_ENV as string === 'development') {
    app.use(morgan('dev'));
}
// Third-Party Security Middleware Config
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Redis, Memcached, etc. See below.
});
app.use(limiter);
app.use(cors({
    origin: process.env.FRONTEND_URL as string || '*',
    credentials: true,
}));
app.use(helmet());
app.use(compression());
// Route Registration Here...
app.use(`/api/${API_VERSION}/auth`, authRoute);
// Custom Middleware Config
app.use(notFoundRoute);
app.use(serverError);
async function serve() {
    try {
        await databaseConnectionString(),
            app.listen(APP_PORT, () => {
                console.log(`Server is running on ${APP_HOST}: on port ${APP_PORT} on /api/${API_VERSION}/ owned by ${APP_NAME}`);
            });
    } catch (error) {
        console.error('Connection to DB failed', error);
        if (error instanceof Error) {
            console.error("Failed to connect to the DB:", error.message);
        }
    }
}

serve();