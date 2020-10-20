module.exports.handler = async (event) => {
  event.request.userAttributes.email_verified = true
  console.log(JSON.stringify(event))

  return event
}
