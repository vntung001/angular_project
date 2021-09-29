module.exports = {
    mode: process.env.TAILWIND_MODE ? 'jit' : '',
    purge: ['./src/**/*.{ts,html}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}