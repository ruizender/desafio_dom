function header() {
  let div = document.createElement("div");
  div.className = "py-5 text-center";
  let image = document.createElement("img");
  image.className = "d-block mx-auto mb-4";
  image.src = "bootstrap-solid.svg";
  image.width = 72;
  image.height = 72;
  div.appendChild(image);

  let h2 = document.createElement("h2");
  h2.appendChild(document.createTextNode("Checkout form"));
  div.appendChild(h2);

  let p = document.createElement("p");
  p.className = "lead";
  p.appendChild(
    document.createTextNode(
      "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it."
    )
  );
  div.appendChild(p);

  return div;
}

function form() {
  let div = document.createElement("div");
  div.classname = "col-md-8 order-md-1";
  let h4 = document.createElement("h4");
  h4.className = "mb-3";
  h4.appendChild(document.createTextNode("Billing address"));
  div.appendChild(h4);

  let form = document.createElement("form");
  form.className = "needs-validation";
  form.noValidate = true;
  div.appendChild(form);

  let row = document.createElement("row");
  row.className = "row";
  form.appendChild(row);

  let divName = document.createElement("div");
  divName.className = "col-md-6 mb-3";
  row.appendChild(divName);

  let labelName = document.createElement("label");
  labelName.htmlFor = "firstName";
  labelName.appendChild(document.createTextNode("First Name"));
  divName.appendChild(labelName);

  let input = document.createElement("input");
  input.type = "text";
  input.className = "form-control";
  input.id = "firstName";
  input.required = true;
  divName.appendChild(input);

  let invalidName = document.createElement("div");
  invalidName.className = "invalid-feedback";
  invalidName.appendChild(
    document.createTextNode("Valid first name is required.")
  );
  divName.appendChild(invalidName);

  let divLast = document.createElement("div");
  divLast.className = "col-md-6 mb-3";
  row.appendChild(divLast);

  let labelLast = document.createElement("label");
  labelLast.htmlFor = "lastName";
  labelLast.appendChild(document.createTextNode("Last name"));
  divLast.appendChild(labelLast);

  let inputLast = document.createElement("input");
  inputLast.type = "text";
  inputLast.className = "form-control";
  inputLast.id = "lastName";
  divLast.appendChild(inputLast);

  let invalidLast = document.createElement("div");
  invalidLast.className = "invalid-feedback";
  invalidLast.appendChild(
    document.createTextNode("Valid last name is required.")
  );
  divLast.appendChild(invalidLast);

  let divUser = document.createElement("div");
  divUser.className = "col-md-6 mb-3";
  row.appendChild(divUser);

  let labelUser = document.createElement("label");
  labelUser.htmlFor = "username";
  labelUser.appendChild(document.createTextNode("Username"));
  divUser.appendChild(labelUser);

  let inputOne = document.createElement("div");
  inputOne.className = "input-group";
  divUser.appendChild(inputOne);
  let inputPrepend = document.createElement("div");
  inputPrepend.className = "input-group-prepend";
  inputOne.appendChild(inputPrepend);

  let at = document.createElement("span");
  at.className = "input-group-text";
  at.appendChild(document.createTextNode("@"));
  inputPrepend.appendChild(at);

  let inputUser = document.createElement("input");
  inputUser.type = "text";
  inputUser.className = "form-control";
  inputUser.id = "username";
  inputUser.placeholder = "Username";
  inputOne.appendChild(inputUser);

  let invalidUser = document.createElement("div");
  invalidUser.className = "invalid-feedback";
  invalidUser.appendChild(
    document.createTextNode("Your username is required.")
  );

  let divEmail = document.createElement("div");
  divEmail.className = "col-12 mb-3";
  row.appendChild(divEmail);

  let labelEmail = document.createElement("label");
  labelEmail.htmlFor = "email";
  labelEmail.appendChild(document.createTextNode("Email"));
  divEmail.appendChild(labelEmail);
  
  let spanEmail = document.createElement("span");
  spanEmail.className = "ml-2 text-muted";
  spanEmail.appendChild(document.createTextNode("(Optional)"));
  labelEmail.appendChild(spanEmail);

  let inputEmail = document.createElement("input");
  inputEmail.type = "email";
  inputEmail.className = "form-control";
  inputEmail.id = "email";
  inputEmail.placeholder = "you@example.com";
  divEmail.appendChild(inputEmail);

  let invalidEmail = document.createElement("div");
  invalidEmail.className = "invalid-feedback";
  invalidEmail.appendChild(
    document.createTextNode(
      "Please enter a valid email address for shipping updates."
    )
  );
  divEmail.appendChild(invalidEmail);
  
  let divAddress = document.createElement("div");
  row.appendChild(divAddress);

  let labelAdress = document.createElement("label");
  labelAdress.htmlFor = "address";
  labelAdress.appendChild(document.createTextNode("Address"));
  divEmail.appendChild(labelAdress);

  let inputAddress = document.createElement("input");
  inputAddress.type = "text";
  inputAddress.className = "form-control";
  inputAddress.id = "address";
  inputAddress.placeholder = "1234 Main St";
  divEmail.appendChild(inputAddress);

  let invalidAdress = document.createElement("div");
  invalidAdress.className = "invalid-feedback";
  invalidAdress.appendChild(
    document.createTextNode("Please enter your shipping address.")
  );
  divAddress.appendChild(invalidAdress);

  divAdressTwo = document.createElement("div");
  divAdressTwo.className = "mb-3";
  row.appendChild(divAdressTwo);

  let labelAdressTwo = document.createElement("label");
  labelAdressTwo.htmlFor = "address2";
  labelAdressTwo.appendChild(document.createTextNode("Address 2"));
  divEmail.appendChild(labelAdressTwo);

  let inputAddressTwo = document.createElement("input");
  inputAddressTwo.type = "text";
  inputAddressTwo.className = "form-control";
  inputAddressTwo.id = "address2";
  inputAddressTwo.placeholder = "Apartment or suite";
  divEmail.appendChild(inputAddressTwo);

  let row2 = document.createElement("div");
  row2.className = "row";
  div.appendChild(row2);

  let divCountry = document.createElement("div");
  divCountry.className = "col-md-5 mb-3";
  row2.appendChild(divCountry);

  let labelCountryOne = document.createElement("label");
  labelCountryOne.htmlFor = "country";
  labelCountryOne.appendChild(document.createTextNode("Country"));
  divCountry.appendChild(labelCountryOne);

  let selectCountryOne = document.createElement("select");
  selectCountryOne.className = "custom-select d-block w-100";
  selectCountryOne.id = "country";
  selectCountryOne.required = true;
  divCountry.appendChild(selectCountryOne);

  let optionCountryOne = document.createElement("option");
  optionCountryOne.appendChild(document.createTextNode("Choose..."));
  selectCountryOne.appendChild(optionCountryOne);

  let optionCountryTwo = document.createElement("option");
  optionCountryTwo.appendChild(document.createTextNode("United States"));
  selectCountryOne.appendChild(optionCountryTwo);

  let divCountryTwo = document.createElement("div");
  divCountryTwo.className = "invalid-feedback";
  divCountryTwo.appendChild(document.createTextNode("Please select a valid country"));
  divCountry.appendChild(divCountryTwo);


  let divState = document.createElement("div");
  divState.className = "col-md-4 mb-3";
  row2.appendChild(divState);

  let labelStateOne = document.createElement("label");
  labelStateOne.htmlFor = "state";
  labelStateOne.appendChild(document.createTextNode("State"));
  divState.appendChild(labelStateOne);

  let selectStateOne = document.createElement("select");
  selectStateOne.className = "custom-select d-block w-100";
  selectStateOne.id = "state";
  selectStateOne.required = true;
  divState.appendChild(selectStateOne);

  let optionStateOne = document.createElement("option");
  optionStateOne.appendChild(document.createTextNode("Choose..."));
  selectStateOne.appendChild(optionStateOne);

  let optionStateTwo = document.createElement("option");
  optionStateTwo.appendChild(document.createTextNode("California"));
  selectStateOne.appendChild(optionStateTwo);

  let divStateTwo = document.createElement("div");
  divStateTwo.className = "invalid-feedback";
  divStateTwo.appendChild(document.createTextNode("Please provide a valid State"));
  divState.appendChild(divStateTwo);
  
  let divZip = document.createElement("div");
  divZip.className = "col-md-3 mb-3";
  row2.appendChild(divZip);
  
  let labelZip = document.createElement("label");
  labelZip.htmlFor = "zip";
  labelZip.appendChild(document.createTextNode("Zip"));
  divZip.appendChild(labelZip);

  let inputZip = document.createElement("input");
  inputZip.type = "text";
  inputZip.className = "form-control";
  inputZip.id = "zip";
  inputZip.placeholder = ""
  inputZip.required = true
  divZip.appendChild(inputZip);

  let divZipInvalid = document.createElement("div");
  divZipInvalid.className = "invalid-feedback";
  divZipInvalid.appendChild(document.createTextNode("Zip code required."));
  divZip.appendChild(divZipInvalid);

// Desde aqui copmenzo Miguel
  function hrMb(){
    let hrMb = document.createElement("hr");
    hrMb.className = "mb-4"
    div.appendChild(hrMb);
  }


  function checkBoxAddress() {
    let divCustomControls = document.createElement("div");
    divCustomControls.className= "custom-control custom-checkbox";
    div.appendChild(divCustomControls);

    let inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.className = "custom-control-input";
    inputCheckbox.id = "same-address";
    divCustomControls.appendChild(inputCheckbox);

    let labelSameAddress= document.createElement("label");
    labelSameAddress.className ="custom-control-label"
    labelSameAddress.htmlFor = "same-address";
    labelSameAddress.appendChild(document.createTextNode("Shipping address is the same as my billing address"));
    divCustomControls.appendChild(labelSameAddress);
  }

  function checkBoxSaveInfo() {
    let divCustomControls = document.createElement("div");
    divCustomControls.className= "custom-control custom-checkbox";
    div.appendChild(divCustomControls);

    let inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.className = "custom-control-input";
    inputCheckbox.id = "save-info";
    divCustomControls.appendChild(inputCheckbox);

    let labelSaveInfo= document.createElement("label");
    labelSaveInfo.className ="custom-control-label"
    labelSaveInfo.htmlFor = "save-info";
    labelSaveInfo.appendChild(document.createTextNode("Save this information for next time"));
    divCustomControls.appendChild(labelSaveInfo);
  }

  function payment(){
    let h4Payment =document.createElement("h4");
    h4Payment.className="mb-3"
    h4Payment.appendChild(document.createTextNode("Payment"));
    div.appendChild(h4Payment);

    let divPayment = document.createElement("div");
    divPayment.className= "d-block my-3";
    div.appendChild(divPayment);

    function creditCard(){

      let divPaymentCustomControls = document.createElement("div");
      divPaymentCustomControls.className= "custom-control custom-radio";
      divPayment.appendChild(divPaymentCustomControls);

      let inputPayment = document.createElement("input");
      inputPayment.id = "credit";
      inputPayment.name="paymentMethod"
      inputPayment.type = "radio";
      inputPayment.checked = true;
      inputPayment.className="custom-control-input";
      inputPayment.required=true;
      divPaymentCustomControls.appendChild(inputPayment);

      let labelCredits= document.createElement("label");
      labelCredits.className ="custom-control-label"
      labelCredits.htmlFor = "credit";
      labelCredits.appendChild(document.createTextNode("Credit card"));
      divPaymentCustomControls.appendChild(labelCredits);
    }
    function debitCard(){

      let divPaymentCustomControls = document.createElement("div");
      divPaymentCustomControls.className= "custom-control custom-radio";
      divPayment.appendChild(divPaymentCustomControls);

      let inputPayment = document.createElement("input");
      inputPayment.id = "debit";
      inputPayment.name="paymentMethod"
      inputPayment.type = "radio";
      inputPayment.className="custom-control-input";
      inputPayment.required=true;
      divPaymentCustomControls.appendChild(inputPayment);

      let labelDebits= document.createElement("label");
      labelDebits.className ="custom-control-label"
      labelDebits.htmlFor = "debit";
      labelDebits.appendChild(document.createTextNode("Debit card"));
      divPaymentCustomControls.appendChild(labelDebits);
    }
    function paypal(){

      let divPaymentCustomControls = document.createElement("div");
      divPaymentCustomControls.className= "custom-control custom-radio";
      divPayment.appendChild(divPaymentCustomControls);

      let inputPayment = document.createElement("input");
      inputPayment.id = "paypal";
      inputPayment.required=true;
      inputPayment.name="paymentMethod"
      inputPayment.type = "radio";
      inputPayment.className="custom-control-input";
      divPaymentCustomControls.appendChild(inputPayment);

      let labelPaypal= document.createElement("label");
      labelPaypal.className ="custom-control-label";
      labelPaypal.htmlFor = "paypal";
      labelPaypal.appendChild(document.createTextNode("Paypal"));
      divPaymentCustomControls.appendChild(labelPaypal);
    }

    creditCard();
    debitCard();
    paypal();
  }

  function infoPay(){
    let divInfoPay = document.createElement("div");
    divInfoPay.className= "row";
    div.appendChild(divInfoPay);

    let divColmd = document.createElement("div");
    divColmd.className= "col-md-6 mb-3";
    divInfoPay.appendChild(divColmd);

    let divColmdnumbre = document.createElement("div");
    divColmdnumbre.className= "col-md-6 mb-3";
    divInfoPay.appendChild(divColmdnumbre);
    
    function nameCard(){
      let labelNameCard= document.createElement("label");
      labelNameCard.htmlFor = "cc-name";
      labelNameCard.appendChild(document.createTextNode("Name on card"));
      divColmd.appendChild(labelNameCard);

      let inputName = document.createElement("input");
      inputName.id = "cc-name";
      inputName.type = "text";
      inputName.className="form-control";
      inputName.placeholder=""
      inputName.required=true;
      divColmd.appendChild(inputName);

      let smallNameCard = document.createElement("small");
      smallNameCard.className="text-muted"
      smallNameCard.appendChild(document.createTextNode("Full name as displayed on card"));
      divColmd.appendChild(smallNameCard);

      let divSmallName = document.createElement("div");
      divSmallName.className= "invalid-feedback";
      divSmallName.appendChild(document.createTextNode("Name on card is required"));
      divColmd.appendChild(divSmallName);
    }
    function numberCard(){
      let labelNumberCard= document.createElement("label");
      labelNumberCard.htmlFor = "cc-number";
      labelNumberCard.appendChild(document.createTextNode("Credit card number"));
      divColmdnumbre.appendChild(labelNumberCard);

      let inputName = document.createElement("input");
      inputName.id = "cc-number";
      inputName.type = "text";
      inputName.className="form-control";
      inputName.placeholder=""
      inputName.required=true;
      divColmdnumbre.appendChild(inputName);

      let divIvalidNumber = document.createElement("div");
      divIvalidNumber.className= "invalid-feedback";
      divIvalidNumber.appendChild(document.createTextNode("Credit card number is required"));
      divColmdnumbre.appendChild(divIvalidNumber);
    }
    nameCard();
    numberCard();
  }
  function expiracion(){
    let divExpiracion = document.createElement("div");
    divExpiracion.className= "row";
    div.appendChild(divExpiracion);

    
    function expiracionLabel(){
      
      let divColmdExp = document.createElement("div");
      divColmdExp.className= "col-md-3 mb-3";
      divExpiracion.appendChild(divColmdExp);

      let labelExpiracion= document.createElement("label");
      labelExpiracion.htmlFor = "cc-expiration";
      labelExpiracion.appendChild(document.createTextNode("Expiration"));
      divColmdExp.appendChild(labelExpiracion);

      let inputExpiration = document.createElement("input");
      inputExpiration.id = "cc-expiration";
      inputExpiration.type = "text";
      inputExpiration.className="form-control";
      inputExpiration.placeholder=""
      inputExpiration.required=true;
      divColmdExp.appendChild(inputExpiration);

      let divIvalidExpiration = document.createElement("div");
      divIvalidExpiration.className= "invalid-feedback";
      divIvalidExpiration.appendChild(document.createTextNode("Expiration date required"));
      divColmdExp.appendChild(divIvalidExpiration);
    }

    function cvv(){
      let divCvv = document.createElement("div");
      divCvv.className= "col-md-3 mb-3";
      divExpiracion.appendChild(divCvv);

      let labelCvv= document.createElement("label");
      labelCvv.htmlFor = "cc-cvv";
      labelCvv.appendChild(document.createTextNode("CVV"));
      divCvv.appendChild(labelCvv);

      let inputCvv = document.createElement("input");
      inputCvv.id = "cc-cvv";
      inputCvv.type = "text";
      inputCvv.className="form-control";
      inputCvv.placeholder=""
      inputCvv.required=true;
      divCvv.appendChild(inputCvv);

      let divIvalidCvv = document.createElement("div");
      divIvalidCvv.className= "invalid-feedback";
      divIvalidCvv.appendChild(document.createTextNode("Security code required"));
      divCvv.appendChild(divIvalidCvv);
    }
    expiracionLabel();
    cvv();
  }

  function buttonContinue(){
    let buttonContinue = document.createElement("button");
    buttonContinue.className="btn btn-primary btn-lg btn-block";
    buttonContinue.type = "submit";
    buttonContinue.appendChild(document.createTextNode("Continue to checkout"));
    div.appendChild(buttonContinue);
    
  }
  
  function footer(){
    let footer = document.createElement("footer");
    footer.className="my-5 pt-5 text-muted text-center text-small";
    div.appendChild(footer);
    
    let pCompanyName= document.createElement("p");
    pCompanyName.className="mb-1";
    pCompanyName.appendChild(document.createTextNode("© 2017-2019 Company Name"));
    footer.appendChild(pCompanyName);

    function ulFooter(){
      let ulFooter= document.createElement("ul");
      ulFooter.className="list-inline";
      footer.appendChild(ulFooter);
    
    function liPrivacy(text){
      let liPrivacy= document.createElement("li");
      liPrivacy.className="list-inline-item";
      ulFooter.appendChild(liPrivacy);

      let a= document.createElement("a");
      a.href="#";
      a.appendChild(document.createTextNode(text));
      liPrivacy.appendChild(a);
    }
    liPrivacy("Privacy");
    liPrivacy("Terms");
    liPrivacy("Suport");
  } 
    ulFooter();
  }

hrMb();
checkBoxAddress();
checkBoxSaveInfo();
hrMb();
payment();
infoPay();
expiracion();
hrMb();
buttonContinue();
footer();
return div;
}

let body = document.getElementsByTagName("body")[0];
body.className = "bg-light";
let container = document.createElement("div");
container.className = "container";
body.appendChild(container);
container.appendChild(header());
container.appendChild(form());