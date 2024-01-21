import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { blue, whiteBright } from 'chalk';
const PORT = process.env.PORT || 4000;

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () => {
    console.log(blue(`🚀 server Listening on PORT: ${PORT}`));
    console.log(
      whiteBright(`🚀 GraphQL is running on http://localhost:${PORT}/graphql`),
    );
  });
};
bootstrap();
