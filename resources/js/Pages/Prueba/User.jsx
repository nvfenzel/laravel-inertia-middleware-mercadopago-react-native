import React from 'react'
import { useEffect } from 'react'
import { Inertia } from '@inertiajs/inertia'
import './User.css'

const User = () => {

  useEffect(() => {
    const mp = new MercadoPago("TEST-dc900d97-cc70-45f1-ad46-2f71a0cd3ab9");

    // Inicializar campos de tarjeta

    const cardNumberElement = mp.fields.create('cardNumber', {
      placeholder: "Número de la tarjeta"
    }).mount('form-checkout__cardNumber');
    const expirationDateElement = mp.fields.create('expirationDate', {
      placeholder: "MM/YY",
    }).mount('form-checkout__expirationDate');
    const securityCodeElement = mp.fields.create('securityCode', {
      placeholder: "Código de seguridad"
    }).mount('form-checkout__securityCode');


    // Obtener tipos de documentos

    (async function getIdentificationTypes() {
      try {
        const identificationTypes = await mp.getIdentificationTypes();
        const identificationTypeElement = document.getElementById('form-checkout__identificationType');

        createSelectOptions(identificationTypeElement, identificationTypes);
      } catch (e) {
        return console.error('Error getting identificationTypes: ', e);
      }
    })();

    function createSelectOptions(elem, options, labelsAndKeys = { label: "name", value: "id" }) {
      const { label, value } = labelsAndKeys;

      elem.options.length = 0;

      const tempOptions = document.createDocumentFragment();

      options.forEach(option => {
        const optValue = option[value];
        const optLabel = option[label];

        const opt = document.createElement('option');
        opt.value = optValue;
        opt.textContent = optLabel;

        tempOptions.appendChild(opt);
      });

      elem.appendChild(tempOptions);
    }

    // Obtener métodos de pago de la tarjeta

    const paymentMethodElement = document.getElementById('paymentMethodId');
    const issuerElement = document.getElementById('form-checkout__issuer');
    const installmentsElement = document.getElementById('form-checkout__installments');

    const issuerPlaceholder = "Banco emisor";
    const installmentsPlaceholder = "Cuotas";

    let currentBin;
    cardNumberElement.on('binChange', async (data) => {
      const { bin } = data;
      try {
        if (!bin && paymentMethodElement.value) {
          clearSelectsAndSetPlaceholders();
          paymentMethodElement.value = "";
        }

        if (bin && bin !== currentBin) {
          const { results } = await mp.getPaymentMethods({ bin });
          const paymentMethod = results[0];

          paymentMethodElement.value = paymentMethod.id;
          updatePCIFieldsSettings(paymentMethod);
          updateIssuer(paymentMethod, bin);
          updateInstallments(paymentMethod, bin);
        }

        currentBin = bin;
      } catch (e) {
        console.error('error getting payment methods: ', e)
      }
    });

    function clearSelectsAndSetPlaceholders() {
      clearHTMLSelectChildrenFrom(issuerElement);
      createSelectElementPlaceholder(issuerElement, issuerPlaceholder);

      clearHTMLSelectChildrenFrom(installmentsElement);
      createSelectElementPlaceholder(installmentsElement, installmentsPlaceholder);
    }

    function clearHTMLSelectChildrenFrom(element) {
      const currOptions = [...element.children];
      currOptions.forEach(child => child.remove());
    }

    function createSelectElementPlaceholder(element, placeholder) {
      const optionElement = document.createElement('option');
      optionElement.textContent = placeholder;
      optionElement.setAttribute('selected', "");
      optionElement.setAttribute('disabled', "");

      element.appendChild(optionElement);
    }

    // Este paso mejora las validaciones de cardNumber y securityCode

    function updatePCIFieldsSettings(paymentMethod) {
      const { settings } = paymentMethod;

      const cardNumberSettings = settings[0].card_number;
      cardNumberElement.update({
        settings: cardNumberSettings
      });

      const securityCodeSettings = settings[0].security_code;
      securityCodeElement.update({
        settings: securityCodeSettings
      });
    }


    // Obtener banco emisor

    async function updateIssuer(paymentMethod, bin) {
      const { additional_info_needed, issuer } = paymentMethod;
      let issuerOptions = [issuer];

      if (additional_info_needed.includes('issuer_id')) {
        issuerOptions = await getIssuers(paymentMethod, bin);
      }

      createSelectOptions(issuerElement, issuerOptions);
    }

    async function getIssuers(paymentMethod, bin) {
      try {
        const { id: paymentMethodId } = paymentMethod;
        return await mp.getIssuers({ paymentMethodId, bin });
      } catch (e) {
        console.error('error getting issuers: ', e)
      }
    };

 
    // Obtener cantidad de cuotas

          
    async function updateInstallments(paymentMethod, bin) {
      try {
        const installments = await mp.getInstallments({
          amount: document.getElementById('transactionAmount').value,
          bin,
          paymentTypeId: 'credit_card'
        });
        const installmentOptions = installments[0].payer_costs;
        const installmentOptionsKeys = { label: 'recommended_message', value: 'installments' };
        createSelectOptions(installmentsElement, installmentOptions, installmentOptionsKeys);
      } catch (error) {
        console.error('error getting installments: ', e)
      }
    }


    // Crear token de la tarjeta


    const formElement = document.getElementById('form-checkout');
    formElement.addEventListener('submit', createCardToken);

    async function createCardToken(event) {
      try {
        const tokenElement = document.getElementById('token');
        if (!tokenElement.value) {
          event.preventDefault();
          const token = await mp.fields.createCardToken({
            cardholderName: document.getElementById('form-checkout__cardholderName').value,
            identificationType: document.getElementById('form-checkout__identificationType').value,
            identificationNumber: document.getElementById('form-checkout__identificationNumber').value,
          });
          tokenElement.value = token.id;
          formElement.requestSubmit();
        }
      } catch (e) {
        console.error('error creating card token: ', e)
      }
    }


  }, []);

  // const submitPayment = (event) =>{
  //   event.preventDefault()
  //   console.log(event.target[0].value)
  //   console.log(event.target[1][0].value)
  //   console.log(event.target[2].value)
  //   console.log(event.target[3].value)
  //   console.log(event.target[4].value)
  //   console.log(event.target[5].value)
  //   console.log(event.target[6].value)
  //   console.log(event.target[7].value)
  //   console.log(event.target[8].value)
  //   console.log(event.target[9].value)
  //   console.log(event.target[10][0].value)

  //   // Nicolas Sebastian Valdivia Fenzel 
  //   // 1 ---> issuer
  //   // <empty string> 
  //   {/* DNI  */} ---> identificationType
  //   {/* 37097860  */} ---> identificationNumber
  //   {/* nicov704@gmail.com  */} ---> email
  //   {/* df4043e664a985747aa7ba38a46044ec  */} ---> token
  //   {/* debvisa  */} ---> paymentMethodId
  //   {/* 100  */} ---> transactionAmount
  //   {/* Nombre del producto */} ---> description
  


  // }


return (
    <div>
    <form id="form-checkout" 
    action="/process_payment" method="POST"
    // onSubmit={submitPayment}
    >
    <div id="form-checkout__cardNumber"  className='divs_pyments'></div>
    <div id="form-checkout__expirationDate"  className='divs_pyments'></div>
    <div id="form-checkout__securityCode"  className='divs_pyments'></div>
    <input type="text" id="form-checkout__cardholderName" placeholder="Titular de la tarjeta" />
    <select id="form-checkout__issuer" name="issuer">
      <option value="" disabled selected>Banco emissor</option>
    </select>
    <select id="form-checkout__installments" name="installments">
      <option value="" disabled selected>Cuotas</option>
    </select>
    <select id="form-checkout__identificationType" name="identificationType">
      <option value="" disabled selected>Tipo de documento</option>
    </select>
    <input type="text" id="form-checkout__identificationNumber" name="identificationNumber" placeholder="Número de documento" />
    <input type="email" id="form-checkout__email" name="email" placeholder="E-mail" />

    <input id="token" name="token" type="hidden"/>
    <input id="paymentMethodId" name="paymentMethodId" type="hidden"/>
    <input id="transactionAmount" name="transactionAmount" type="hidden" value="100"/>
    <input id="description" name="description" type="hidden" value="Nombre del producto"/>

    <button type="submit" id="form-checkout__submit">Pagar</button>
  </form>
    </div>
  )
}

export default User