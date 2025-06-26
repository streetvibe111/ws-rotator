export default {
  async fetch(request, env, ctx) {
    const phone = await env.ws_rotator_kv.get("ws_current_phone");

    if (!phone) {
      return new Response("No phone number found", { status: 404 });
    }

    const message = encodeURIComponent("hi , salam saya nak tempah baju harga kilang , anggaran kuantiti =");
    const waURL = `https://wa.me/${phone}?text=${message}`;
    return Response.redirect(waURL, 301);
  },
};
