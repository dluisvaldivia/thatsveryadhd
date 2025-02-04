export default defineConfig({
  base: '/',
  plugins: [
    React(),
    {
      name: 'add-cname',
      closeBundle() {
        const cnamePath = path.resolve('dist/assets/CNAME')
        writeFileSync(cnamePath, 'thatsveryadhd.com')
      },
    },
  ],
})