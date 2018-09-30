import { RequestAmountModule } from './request-amount.module';

describe('RequestAmountModule', () => {
  let requestAmountModule: RequestAmountModule;

  beforeEach(() => {
    requestAmountModule = new RequestAmountModule();
  });

  it('should create an instance', () => {
    expect(requestAmountModule).toBeTruthy();
  });
});
