// ISP: Clientes não devem ser forçados a usar dependências que eles não utilizam.

import { Civil_Protocol, Company_Protocol } from "./interfaces/customer_protocol";

export class Individual implements Civil_Protocol {
    public readonly first_name: string;
    public readonly last_name: string;
    public readonly cpf: string;

    constructor( public readonly first:string, public readonly last_n: string, public readonly _cpf: string){
        this.first_name = first;
        this.last_name = last_n;
        this.cpf = _cpf;
    }   
}

export class Company implements Company_Protocol {
    public readonly owner_name: string;
    public readonly company_name: string;
    public readonly cnpj: string;
    public readonly company_value: number;

    constructor(public readonly owner: string, public readonly company_n: string, public readonly _cnpj: string, public readonly company_v: number){
        this.owner_name = owner;
        this.company_name = company_n;
        this.cnpj = _cnpj;
        this.company_value = company_v;
    }
}