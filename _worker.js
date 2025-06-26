export default {
  async fetch(request, env, ctx) {
    try {
      const apiUrl = 'https://script.google.com/macros/s/AKfycbx_Ef4iD8aUWqPbTSiHx64v4YyUDWwIZXN3h8V5ILm1/dev';
      const response = await fetch(apiUrl);
      const phone = (await response.text()).trim();

      const prefillText = 'hi , salam saya nak tempah baju harga kilang , anggaran kuantiti =';
      const redirectUrl = `https://wa.me/${phone}?text=${encodeURIComponent(prefillText)}`;

      return Response.redirect(redirectUrl, 302);

    } catch (err) {
      return new Response('Error fetching number: ' + err.message, { status: 500 });
    }
  },
};

