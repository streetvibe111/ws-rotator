export default {
  async fetch(request, env, ctx) {
    const res = await fetch("https://script.google.com/macros/s/AKfycbx_Ef4iD8aUWqPbTSiHx64v4YyUDWwIZXN3h8V5ILm1/dev");
    const json = await res.json();
    const phone = json.phone;
    const msg = "hi, salam saya nak tempah baju harga kilang, anggaran kuantiti =";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    return Response.redirect(url, 302);
  }
}

