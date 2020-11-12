
const saveUser = () => {
  let userName = $("#userName").val
  let userLastName = $("userLastName").val
  let userEmail = $("userEmail").val
  let userPassword = $("userPassword").val
  let userBuyer = $("userBuyer").val
  let userSeller = $("userSeller").val
  let user = { userName, userLastName, userEmail, userPassword, userSeller, userBuyer }

  $.ajax({
    url: ``,
    method:"POST",
    data: JSON.stringify(user),
    success: ( response ) => {
      console.log("usuario creado")
    },
    error: ( error ) => {
      console.log("Usuario No agregado")
    }
  })
}

