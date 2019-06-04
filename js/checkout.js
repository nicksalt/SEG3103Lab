$(function() {
  renderPaymentDetails($("#payment-method")[0].value);

  $("#payment-method")[0].onchange = function(e) {
    let paymentMethod = e.target[e.target.selectedIndex].value;
    renderPaymentDetails(paymentMethod); 
  };

  $("#checkout-details").on("submit", function(e) {
    alert("Not implemented");
  });
});

function renderPaymentDetails(paymentMethod) {
  switch(paymentMethod) {
    case "credit-card":
      return $("#payment-details").html(creditCard());
    case "debit-card":
      return $("#payment-details").html(debitCard());
    case "cash-on-delivery":
      return $("#payment-details").html(cashOnDelivery());
    default:
      return $("#payment-details").html(selectPayment());
  }
}

function creditCard() {
  return `
    <div>
      <label for="card-number">Credit card #: </label>
      <input id="card-number" type="text" required="true" />
    </div>
    <div>
      <p>Expiry date</p>
      <label for="expiry-month">Month: </label>
      <select id="expiry-month" name="expiry-month" required="true">
        <option value=""></option>
        <option value="jan">January</option>
        <option value="feb">February</option>
        <option value="mar">March</option>
        <option value="apr">April</option>
        <option value="may">May</option>
        <option value="jun">June</option>
        <option value="jul">July</option>
        <option value="aug">August</option>
        <option value="sep">September</option>
        <option value="oct">October</option>
        <option value="nov">November</option>
        <option value="dev">December</option>
      </select>
      <label for="expiry-year">Year: </label>
      <select id="expiry-year" name="expiry-year" required="true">
        <option value=""></option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
        <option value="2026">2026</option>
      </select>
    </div>
  `
}

function debitCard() {
  return `
    <div>
      <label for="card-number">Debit card #: </label>
      <input id="card-number" type="text" required="true" />
    </div>
    <div>
      <label for="pin-password">PIN: </label>
      <input id="pin-password" type="password" required="true" />  
    </div>
  `
}

function cashOnDelivery() {
  return `
    <div>
      <p>Please make sure to have cash ready for when the delivery driver arrives at your door</p>
    </div>
  `
}

function selectPayment() {
  return `
    <div>
      <p>Please select a payment method</p>
    </div>
  `
}
