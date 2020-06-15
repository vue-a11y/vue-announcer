export default {
  name: 'spell',
  handler (pass) {
    if (pass) pass.split('').forEach((char, index) => setTimeout(() => this.polite(char), index * 100))
  }
}
