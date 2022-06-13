// [ISP] Clientes não devem ser obrigados a usar dependências que eles não utilizam.


export interface Civil_Protocol {
    first_name: string;
    last_name: string;
    cpf: string;
}

export interface Company_Protocol {
    company_name: string;
    owner_name: string;
    cnpj: string;
    company_value: number;
}