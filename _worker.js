export default {
  async fetch(request) {
    const response = await fetch("https://script.google.com/macros/s/AKfycbx_Ef4iD8aUWqPbTSiHx64v4YyUDWwIZXN3h8V5ILm1/dev");
    const number = await response.text();
    const redirectUrl = `https://wa.me/${number}?text=Hi%20bang%2C%20saya%20nak%20tempah%20jersey%20harga%20kilang`;

    return Response.redirect(redirectUrl, 302);
  }
}
