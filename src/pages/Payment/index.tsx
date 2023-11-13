import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { IMaskInput } from 'react-imask'

import { Head } from '../../components/Head'
import { PayOrder } from '../../components/OrderCloseAction/PayOrder'
import { OrderHeader } from '../../components/OrderHeader'

import { Container, Form, Inner } from './styles'
import { FieldValues, schema } from './validationSchema'

export default function Payment() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(schema),
  })
  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log('data', data)

  return (
    <Container>
      <Head title='Pagamento' />
      <OrderHeader />
      <Inner>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h4>Informações pessoais</h4>

          <div className='field'>
            <label htmlFor='fullName'>Nome e sobrenome</label>
            <Controller
              name='fullName'
              control={control}
              render={({ field }) => (
                <input type='text' id='fullName' autoComplete='name' {...field} />
              )}
            />
            {errors.fullName && <p className='error'>{errors.fullName.message}</p>}
          </div>

          <div className='grouped'>
            <div className='field'>
              <label htmlFor='email'>E-mail</label>
              <Controller
                name='email'
                control={control}
                render={({ field }) => (
                  <input type='text' id='email' autoComplete='email' {...field} />
                )}
              />

              {errors.email && <p className='error'>{errors.email.message}</p>}
            </div>

            <div className='field'>
              <label htmlFor='mobile'>Celular</label>
              <Controller
                name='mobile'
                control={control}
                render={({ field }) => (
                  <IMaskInput
                    type='tel'
                    id='mobile'
                    autoComplete='phone'
                    mask={'(00) 0 0000-0000'}
                    {...field}
                  />
                )}
              />
              {errors.mobile && <p className='error'>{errors.mobile.message}</p>}
            </div>

            <div className='field'>
              <label htmlFor='document'>CPF/CNPJ</label>
              <Controller
                name='document'
                control={control}
                render={({ field }) => (
                  <IMaskInput
                    type='text'
                    id='document'
                    mask={[{ mask: '000.000.000-00' }, { mask: '00.000.000/0000-00' }]}
                    {...field}
                  />
                )}
              />
              {errors.document && <p className='error'>{errors.document.message}</p>}
            </div>
          </div>

          <h4>Endereço de entrega</h4>

          <div className='field'>
            <label htmlFor='zipCode'>CEP</label>
            <Controller
              name='zipCode'
              control={control}
              render={({ field }) => (
                <IMaskInput
                  type='text'
                  id='zipCode'
                  style={{ width: '120px' }}
                  mask={[{ mask: '00000-000' }]}
                  {...field}
                />
              )}
            />
            {errors.zipCode && <p className='error'>{errors.zipCode.message}</p>}
          </div>

          <div className='field'>
            <label htmlFor='street'>Endereço</label>
            <Controller
              name='street'
              control={control}
              render={({ field }) => <input type='text' id='street' {...field} />}
            />
            {errors.street && <p className='error'>{errors.street.message}</p>}
          </div>

          <div className='grouped'>
            <div className='field'>
              <label htmlFor='number'>Número</label>
              <Controller
                name='number'
                control={control}
                render={({ field }) => <input type='text' id='number' {...field} />}
              />
              {errors.number && <p className='error'>{errors.number.message}</p>}
            </div>

            <div className='field'>
              <label htmlFor='complement'>Complemento</label>
              <Controller
                name='complement'
                control={control}
                render={({ field }) => <input type='text' id='complement' {...field} />}
              />
              {errors.complement && <p className='error'>{errors.complement.message}</p>}
            </div>
          </div>

          <div className='grouped'>
            <div className='field'>
              <label htmlFor='neighborhood'>Bairro</label>
              <Controller
                name='neighborhood'
                control={control}
                render={({ field }) => <input type='text' id='neighborhood' {...field} />}
              />
              {errors.neighborhood && <p className='error'>{errors.neighborhood.message}</p>}
            </div>

            <div className='field'>
              <label htmlFor='city'>Cidade</label>
              <Controller
                name='city'
                control={control}
                render={({ field }) => <input type='text' id='city' {...field} />}
              />
              {errors.city && <p className='error'>{errors.city.message}</p>}
            </div>

            <div className='field'>
              <label htmlFor='state'>Estado</label>
              <Controller
                name='state'
                control={control}
                render={({ field }) => (
                  <select id='state' {...field}>
                    <option value=''>Selecione</option>
                    <option value='SP'>São Paulo</option>
                    <option value='PR'>Paraná</option>
                    <option value='SC'>Santa Catarina</option>
                  </select>
                )}
              />
              {errors.state && <p className='error'>{errors.state.message}</p>}
            </div>
          </div>

          <h4>Pagamento</h4>

          <div className='field'>
            <label htmlFor='creditCardNumber'>Número do cartão</label>
            <Controller
              name='creditCardNumber'
              control={control}
              render={({ field }) => (
                <IMaskInput
                  type='text'
                  id='creditCardNumber'
                  mask={[
                    {
                      mask: '0000 00000 0000',
                    },
                    {
                      mask: '0000 00000 00000',
                    },
                    {
                      mask: '0000 0000 0000 0000',
                    },
                  ]}
                  {...field}
                />
              )}
            />
            {errors.creditCardNumber && <p className='error'>{errors.creditCardNumber.message}</p>}
          </div>

          <div className='field'>
            <label htmlFor='creditCardHolderName'>Nome impresso no cartão</label>
            <input type='text' id='creditCardHolderName' name='cc-name' />
          </div>

          <div className='grouped'>
            <div className='field'>
              <label htmlFor='creditCardExpiration'>Validade</label>
              <input
                type='text'
                id='creditCardExpiration'
                name='creditCardExpiration'
                autoComplete='cc-exp'
                placeholder='MM/AA'
              />
            </div>

            <div className='field'>
              <label htmlFor='creditCardCode'>Código de segurança</label>
              <input
                type='text'
                id='creditCardCode'
                name='creditCardCode'
                autoComplete='cc-csc'
                placeholder='CVV'
              />
            </div>
          </div>
          <PayOrder />
        </Form>
      </Inner>
    </Container>
  )
}
