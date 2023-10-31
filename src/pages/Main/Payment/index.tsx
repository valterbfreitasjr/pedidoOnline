import { Head } from '../../../components/Head'
import { OrderHeader } from '../../../components/OrderHeader'
import { Container, Form, Inner } from './styles'

import { PayOrder } from '../../../components/OrderCloseAction/PayOrder'

export default function Payment() {
  return (
    <Container>
      <Head title='Payment' />
      <OrderHeader />
      <Inner>
        <Form>
          <h4>Informações pessoais</h4>

          <div className='field'>
            <label htmlFor='full-name'>Nome e sobrenome</label>
            <input type='text' id='full-name' name='full-name' autoComplete='name' />
          </div>

          <div className='grouped'>
            <div className='field'>
              <label htmlFor='email'>E-mail</label>
              <input type='email' id='email' name='email' autoComplete='email' />
            </div>

            <div className='field'>
              <label htmlFor='mobile'>Celular</label>
              <input type='tel' id='mobile' name='mobile' autoComplete='phone' />
            </div>

            <div className='field'>
              <label htmlFor='document'>CPF/CNPJ</label>
              <input type='text' id='document' name='document' />
            </div>
          </div>

          <h4>Endereço de entrega</h4>

          <div className='field'>
            <label htmlFor='zipcode'>CEP</label>
            <input
              type='text'
              id='zipcode'
              name='zipcode'
              autoComplete='postal-code'
              style={{ width: '140px' }}
            />
          </div>

          <div className='field'>
            <label htmlFor='street'>Endereço</label>
            <input type='text' id='street' name='street' autoComplete='street-address' />
          </div>

          <div className='grouped'>
            <div className='field'>
              <label htmlFor='number'>Número</label>
              <input type='text' id='number' name='number' />
            </div>

            <div className='field'>
              <label htmlFor='complement'>Complemento</label>
              <input type='text' id='complement' name='complement' />
            </div>
          </div>

          <div className='grouped'>
            <div className='field'>
              <label htmlFor='neighborhood'>Bairro</label>
              <input type='text' id='neighborhood' name='neighborhood' />
            </div>
            <div className='field'>
              <label htmlFor='city'>Cidade</label>
              <input type='text' id='city' name='city' />
            </div>
            <div className='field'>
              <label htmlFor='state'>Estado</label>
              <select name='state' id='state'>
                <option value=''>Selecione</option>
                <option value='SP'>São Paulo</option>
                <option value='PR'>Paraná</option>
                <option value='SC'>Santa Catarina</option>
              </select>
            </div>
          </div>

          <h4>Pagamento</h4>

          <div className='field'>
            <label htmlFor='credit-card-number'>Número do cartão</label>
            <input
              type='text'
              id='credit-card-number'
              name='credit-card-number'
              autoComplete='cc-number'
            />
          </div>

          <div className='field'>
            <label htmlFor='credit-card-holder-name'>Nome impresso no cartão</label>
            <input type='text' id='credit-card-holder-name' name='cc-name' />
          </div>

          <div className='grouped'>
            <div className='field'>
              <label htmlFor='credit-card-expiration'>Validade</label>
              <input
                type='text'
                id='credit-card-expiration'
                name='credit-card-expiration'
                autoComplete='cc-exp'
                placeholder='MM/AA'
              />
            </div>

            <div className='field'>
              <label htmlFor='credit-card-code'>Código de segurança</label>
              <input
                type='text'
                id='credit-card-code'
                name='credit-card-code'
                autoComplete='cc-csc'
                placeholder='CVV'
              />
            </div>
          </div>
        </Form>
        <PayOrder />
      </Inner>
    </Container>
  )
}
