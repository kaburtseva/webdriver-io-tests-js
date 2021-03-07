const Page = require('./page');
export class RegistrationPage extends Page {

    get inputNewEmail () { return $('#email_create') }
    get password () { return  $('#passwd') }
    get btnSubmit () { return $('button[type="submit"]') }
    get emailField() { return $('#email_create')}
    get accountForm(){ return $('#account-creation_form')}
    get genderOptionFemale() { return $('#id_gender2')}
    get customerFirstName() { return $('#customer_firstname') }
    get customerLastName() { return  $('#customer_lastname') }
    get firstName() { return $('#firstname') }
    get lastName() { return $('#lastname') }
    get addressInfo() { return $('#address1')}
    get cityInput() { return  $('#city')}
    get selectStateInfo() { return $('select[id="id_state"]')}
    get postcodeInput() { return $('#postcode')}
    get phoneNumberInput() { return $('#phone_mobile')}
    get aliasInput() { return $('#alias') }
    get submitButton() { return $('#submitAccount')}

    startRegisterAndWaitForForm (email) {
        this.inputNewEmail.setValue(email);
        this.btnSubmit.click(); 
        this.accountForm.waitForDisplayed();
    }

    fillAccountFormAndSubmit(customerFirstName, customerLastName, firstName, lastName, addressInfo, cityInput, 
        selectStateInfo, postcode, phoneNumberInput, alias){
        this.genderOptionFemale.click();
        this.customerFirstName.setValue(customerFirstName);
        this.customerLastName.setValue(customerLastName);
        this.firstName.setValue(firstName);
        this.lastName.setValue(lastName);
        this.addressInfo.setValue(addressInfo);
        this.cityInput.setValue(cityInput);
        this.selectStateInfo.selectByVisibleText(selectStateInfo);
        this.postcodeInput.setValue(postcode);
        this.phoneNumberInput.setValue(phoneNumberInput);
        this.aliasInput.setValue(alias);
        this.submitButton.click();
    }

    open () {
        return super.open('index.php?controller=authentication&back=my-account');
    }
}

module.exports = new RegistrationPage();
