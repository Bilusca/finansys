import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDatabase implements InMemoryDbService {
  createDb() {
    const categories = [
      { id: 1, name: 'Moradia', descriptio: 'Pagamentos de Contas da Casa' },
      { id: 1, name: 'Saúde', descriptio: 'Plano de saúde e remédios' },
      { id: 1, name: 'Lazer', descriptio: 'Cinema, parques, praia, etc' },
      { id: 1, name: 'Salário', descriptio: 'Recebimento de salário' },
      { id: 1, name: 'Freelas', descriptio: 'Trabalhos como freelancer' }
    ];

    return { categories };
  }
}
