import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Category } from './pages/categories/shared/category.model';

export class InMemoryDatabase implements InMemoryDbService {
  createDb() {
    const categories: Category[] = [
      { id: 1, name: 'Moradia', description: 'Pagamentos de Contas da Casa' },
      { id: 1, name: 'Saúde', description: 'Plano de saúde e remédios' },
      { id: 1, name: 'Lazer', description: 'Cinema, parques, praia, etc' },
      { id: 1, name: 'Salário', description: 'Recebimento de salário' },
      { id: 1, name: 'Freelas', description: 'Trabalhos como freelancer' }
    ];

    return { categories };
  }
}
