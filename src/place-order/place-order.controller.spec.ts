import { Test, TestingModule } from '@nestjs/testing';
import { PlaceOrderController } from './place-order.controller';
import { PlaceOrderService } from './place-order.service';

describe('PlaceOrderController', () => {
  let controller: PlaceOrderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlaceOrderController],
      providers: [PlaceOrderService],
    }).compile();

    controller = module.get<PlaceOrderController>(PlaceOrderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
