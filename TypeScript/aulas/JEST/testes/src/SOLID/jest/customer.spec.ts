
import { IndividualCustomer, EnterpriseCustomer } from "../classes/customer";

const createIndividualCustomer = (first_name: string, last_name: string, cpf: string): IndividualCustomer => new IndividualCustomer(first_name, last_name, cpf);
const createEnterpriseCustomer =  (first_name: string, cnpj: string): EnterpriseCustomer => new EnterpriseCustomer(first_name, cnpj);


describe('IndividualCustomer', () => {
    afterEach(() => jest.clearAllMocks());

    it('Should...', () => {
        const sut = createIndividualCustomer('Gabriel', 'Carvalho', '456.260.598-73');

        expect(sut).toHaveProperty('firstName', 'Gabriel');
        expect(sut).toHaveProperty('lastName', 'Carvalho');
        expect(sut).toHaveProperty('cpf', '456.260.598-73');

    });

    it('Should...', () => {
        const sut = createIndividualCustomer('Gabriel', 'Carvalho', '456.260.598-73');
        expect(sut.getName()).toBe('Gabriel Carvalho');
    });
});

describe('EnterpriseCustomer', () => {
    afterEach(() => jest.clearAllMocks());

    it('Should...', () => {
        const sut = createEnterpriseCustomer('Gabriel', '456.260.598-73/1000');

        expect(sut).toHaveProperty('name', 'Gabriel');
        expect(sut).toHaveProperty('cnpj', '456.260.598-73/1000');
    });
});
