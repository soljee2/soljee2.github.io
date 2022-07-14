// Authenticate the user, and get permission to request payments from them:
const scopes = ['payments'];

// Read more about this callback in the SDK reference:
function onIncompletePaymentFound(payment) { /* ... */ };

Pi.authenticate(scopes, onIncompletePaymentFound).then(function(auth) {
  console.log(`Hi there! You're ready to make payments!`);
}).catch(function(error) {
  console.error(error);
});

// Pi.createPayment({
//     // Amount of π to be paid:
//     amount: 3.14,
//     // An explanation of the payment - will be shown to the user:
//     memo: "...", // e.g: "Digital kitten #1234",
//     // An arbitrary developer-provided metadata object - for your own usage:
//     metadata: { /* ... */ }, // e.g: { kittenId: 1234 }
//   }, {
//     // Callbacks you need to implement - read more about those in the detailed docs linked below:
//     onReadyForServerApproval: function(paymentId) { /* ... */ },
//     onReadyForServerCompletion: function(paymentId, txid) { /* ... */ },
//     onCancel: function(paymentId) { /* ... */ },
//     onError: function(error, payment) { /* ... */ },
//   });