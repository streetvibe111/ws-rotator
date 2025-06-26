export default {
  async fetch(request) {
    return Response.redirect("https://wa.me/60134503255?text=Hi", 302);
  }
}
