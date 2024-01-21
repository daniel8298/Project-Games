// import { Injectable, NestMiddleware } from '@nestjs/common';
// import { Request, Response, NextFunction } from 'express';

// @Injectable()
// export class LoggerMiddleware implements NestMiddleware {
//   use(req: Request, res: Response, next: NextFunction) {
//     if (req.body.operationName !== 'IntrospectionQuery') {
//       console.log('----------------------------------------------');

//       console.log(`${req.method} ${req.originalUrl}`);

//       console.log('Headers:', req.headers);

//       console.log('Body:', req.body);

//       console.log('Timestamp:', new Date().toISOString());

//       next();

//       res.on('finish', () => {
//         console.log(`Status: ${res.statusCode}`);
//         console.log('----------------------------------------------');
//       });
//     } else {
//       next();
//     }
//   }
// }

import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // Check if the request has a body and if it's an introspection query
    if (req.body && req.body.operationName !== 'IntrospectionQuery') {
      // Log request information
      const startTime = Date.now();
      this.logRequestInfo(req);

      // Continue to the next middleware or route handler
      next();

      // Log response information after the response has been sent
      res.on('finish', () => {
        const endTime = Date.now();
        const duration = endTime - startTime;
        this.logResponseInfo(res, duration);
      });
    } else {
      // Skip logging for introspection queries or requests without a body
      next();
    }
  }

  private logRequestInfo(req: Request): void {
    // Log request details
    console.log('----------------------------------------------');
    console.log(`${req.method} ${req.originalUrl}`);
    console.log('Headers:', req.headers);
    console.log('Body:', req.body);
    console.log('Timestamp:', new Date().toISOString());
  }

  private logResponseInfo(res: Response, duration: number): void {
    // Log response details
    console.log(`Status: ${res.statusCode}`);
    console.log(`Duration: ${duration.toFixed(2)} ms`);
    console.log('----------------------------------------------');
  }
}
