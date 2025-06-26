export default {
  async fetch(request, env, ctx) {
    const res = await fetch("https://script.google.com/macros/s/AKfycbw-isiRZWzF8CQRHz5JOFf2ropVZeOwQgLH8YMleNs4nret0ny0E6V3rx3zr79v1qrnaw/exec");
    const json = await res.json();
    const phone = json.phone;

    const msg = "hi , salam saya nak tempah baju harga kilang , anggaran kuantiti = ";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;

    return Response.redirect(url, 302);
  }
}
