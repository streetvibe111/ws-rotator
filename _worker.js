export default {
  async fetch(request, env, ctx) {
    const res = await fetch("https://script.google.com/macros/s/AKfycbxOddkM4rNdByIpAVRA911jQ_DvYvxyCrzZzSk0CiXy4nGriHotj7oUPFD3W2Ih4M9p/exec");
    const json = await res.json();
    const phone = json.phone;

    const msg = "hi , salam saya nak tempah baju harga kilang , anggaran kuantiti = ";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;

    return Response.redirect(url, 302);
  }
}
