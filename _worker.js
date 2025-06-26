export default {
  async fetch(request, env, ctx) {
    // Ambil nombor telefon dari KV
    const phone = await env.ws_rotator_kv.get("ws_current_phone");

    // Teks mesej WhatsApp
    const msg = "hi , salam saya nak tempah baju harga kilang , anggaran kuantiti = ";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;

    // Redirect ke WhatsApp
    return Response.redirect(url, 302);
  }
};
