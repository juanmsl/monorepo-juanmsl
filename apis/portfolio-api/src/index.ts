import { PortfolioPort } from './domain';
import { PortfolioController } from './infrastructure';

export class PortfolioAPI {
  static use(adapter: PortfolioPort) {
    return new PortfolioController(adapter);
  }
}

export * from './domain';
export * from './infrastructure/adapters';
