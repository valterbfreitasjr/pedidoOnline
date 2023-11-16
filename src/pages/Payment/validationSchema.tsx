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
      // sanitize
      .transform((value) => value.replace(/[^\d]/g, '')) // regex = tudo que não dígito será removido.
      .test('validateMobile', 'Número de celular inválido.', (value) => isValidPhone(value)),
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
      .transform((value) => value.replace(/[^\d]+/g, '')),
    street: yup.string().required('O endereço é obrigatório.'),
    number: yup.string().required('O número é obrigatório.'),
    complement: yup.string(),
    neighborhood: yup.string().required('O bairro é obrigatório.'),
    city: yup.string().required('A cidade é obrigatório.'),
    state: yup.string().required('O estado é obrigatório.'),
    creditCardNumber: yup
      .string()
      .required('O número do cartão é obrigatório.')
      .transform((value) => value.replace(/[^\d]/g, ''))
      .test(
        'validateCreditCardNumber',
        'O número do cartão é inválido.',
        (value) => isValidCreditCard.number(value).isValid,
      ),
    creditCardHolderName: yup
      .string()
      .required('O nome impresso no cartão é obrigatório.')
      .min(3, 'O nome do titular deve ser completo.')
      .matches(/(\w.+\s).+/gi, 'O nome do titular deve conter o sobrenome.'),
    creditCardExpiration: yup
      .string()
      .required('A data de validade é obrigatória.')
      .transform((value) => {
        const [month, year] = value.split('/')

        if (month && year && month.length === 2 && year.length === 2)
          return new Date(+`20${year}`, +month - 1, 1).toISOString() // parseInt = Number = + , casting para number.

        return value
      })
      .test('validateCreditCardExpirantion', 'A data de validade é inválida', (value) => {
        const expirationDate = new Date(value)
        const today = new Date()

        return expirationDate >= today
      }),
    creditCardCode: yup
      .string()
      .required('Código de segurança obrigatório.')
      .transform((value) => value.replace(/[^\d]+/g, ''))
      .min(3, 'O CVV deve possuir entre 3 e 4 dígitos.')
      .max(4, 'O CVV deve possuir entre 3 e 4 dígitos.'),
  })
  .required()

export type FieldValues = yup.InferType<typeof schema>
