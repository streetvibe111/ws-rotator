export default {
  async fetch(request) {
    const response = await fetch("https://script.google.com/macros/s/AKfycbx_Ef4iD8aUWqPbTSiHx64v4YyUDWwIZXN3h8V5ILm1/dev");
    const phone = await response.text();

    const url = `https://wa.me/${phone}?text=hi%20%2C%20salam%20saya%20nak%20tempah%20baju%20harga%20kilang%20%2C%20anggaran%20kuantiti%20%3D`;
    return Response.redirect(url, 302);
  }
}
