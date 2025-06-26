export default {
  async fetch(request, env, ctx) {
    try {
      // Ganti URL Apps Script kau di sini
      const apiUrl = 'https://script.google.com/macros/s/AKfycbx_Ef4iD8aUWqPbTSiHx64v4YyUDWwIZXN3h8V5ILm1/dev';

      // Fetch nombor dari Google Sheet (Apps Script)
      const response = await fetch(apiUrl);
      const phone = (await response.text()).trim();

      // WhatsApp link dengan ayat prefill
      const prefillText = 'hi , salam saya nak tempah baju harga kilang , anggaran kuantiti =';
      const redirectUrl = `https://wa.me/${phone}?text=${encodeURIComponent(prefillText)}`;

      // Redirect user
      return Response.redirect(redirectUrl, 302);

    } catch (err) {
      return new Response('Error fetching number: ' + err.message, { status: 500 });
    }
  },
};
