import { CreateChargeDto } from '@app/common';
import { IsEmail } from 'class-validator';

export class PaymentsCreateCharge extends CreateChargeDto {
  @IsEmail()
  email: string;
}
