export default {
  async fetch(request, env, ctx) {
    const res = await fetch("https://script.google.com/macros/s/AKfycby9Lc_FOVZ21Zr3brki8mxTJqKvjL1QfWZYx8vh6HNSeRarirbuvrpZ3R0MaxHLzNIteQ/exec");
    const json = await res.json();
    const phone = json.phone;

    const msg = "hi , salam saya nak tempah baju harga kilang , anggaran kuantiti = ";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;

    return Response.redirect(url, 302);
  }
}
