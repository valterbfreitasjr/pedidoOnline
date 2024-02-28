import { isValidCNPJ, isValidCPF, isValidPhone } from '@brazilian-utils/brazilian-utils'
import isValidCreditCard from 'card-validator'
import * as yup from 'yup'

export const schema = yup
  .object({
    fullName: yup
      .string()
      .required('O nome é obrigatório.')
      .min(3, 'O nome deve ser completo.')
      .matches(/(\w.+\s).+/gi, 'O nome deve conter o sobrenome.'),
    email: yup.string().required('O email é obrigatório.').email('O email deve ser válido.'),
    mobile: yup
      .string()
      .required('O celular é obrigatório.')
      .transform((value) => value.replace(/[^\d]/g, ''))
      .test('validateMobile', 'O celular inválido.', (value) => isValidPhone(value)),
    document: yup
      .string()
      .required('O CPF/CNPJ é obrigatório.')
      .transform((value) => value.replace(/[^\d]/g, ''))
      .test(
        'validateDocument',
        'O CPF/CNPJ é inválido.',
        (value) => isValidCPF(value) || isValidCNPJ(value),
      ),
    zipCode: yup
      .string()
      .required('O CEP é obrigatório.')
      .transform((val) => val.replace(/[^\d]+/g, '')),
    street: yup.string().required('O endereço é obrigatório.'),
    number: yup.string().required('O número é obrigatório.'),
    complement: yup.string(),
    neighborhood: yup.string().required('O bairro é obrigatório.'),
    city: yup.string().required('A cidade é obrigatória.'),
    state: yup.string().required('O estado é obrigatório.'),
    creditCardNumber: yup
      .string()
      .required('O número do cartão é obrigatório.')
      .transform((val) => val.replace(/[^\d]+/g, ''))
      .test(
        'validateCreditCardNumber',
        'O número do cartão é inválido.',
        (value) => isValidCreditCard.number(value).isValid,
      ),
    creditCardHolderName: yup
      .string()
      .required('O nome do titular é obrigatório.')
      .min(3, 'O nome do titular deve ser completo.')
      .matches(/(\w.+\s).+/gi, 'O nome do titular deve conter o sobrenome.'),
    creditCardExpiration: yup
      .string()
      .required('A data de validate é obrigatória.')
      .transform((value) => {
        const [month, year] = value.split('/')

        if (month && year && month.length === 2 && year.length === 2)
          return new Date(+`20${year}`, +month - 1, 1).toISOString()

        return value
      })
      .test(
        'validateCreditCardExpiration',
        'A data de validate é inválida.',
        (value) => new Date(value) >= new Date(),
      ),
    creditCardCode: yup
      .string()
      .required('O CVV é obrigatório.')
      .transform((value) => value.replace(/[^\d]+/g, ''))
      .min(3, 'O CVV deve possuir entre 3 e 4 dígitos.')
      .max(4, 'O CVV deve possuir entre 3 e 4 dígitos.'),
  })
  .required()

export type FieldValues = yup.InferType<typeof schema>
