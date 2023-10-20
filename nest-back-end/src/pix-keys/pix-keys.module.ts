import { Module } from '@nestjs/common';
import { PixKeysService } from './pix-keys.service';
import { PixKeysController } from './pix-keys.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PixKey } from './entities/pix-key.entity';
import { BankAccount } from 'src/bank-accounts/entities/bank-account.entity';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forFeature([PixKey, BankAccount]),
    ClientsModule.register([
      {
        name: 'PIX_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: 'host.docker.internal:50051',
          package: 'github.com.williamasjr.codepix',
          protoPath: join(__dirname, 'proto', 'pix.proto'),
        },
      },
    ]),
  ],
  controllers: [PixKeysController],
  providers: [PixKeysService],
})
export class PixKeysModule {}
