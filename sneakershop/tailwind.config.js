module.exports = {
    purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
    darkMode: false, // or 'media' or 'class'
    theme: {

        extend: {},

        colors: {
            mint: "#26f8e2",
            darkGrey: "#F6F6F6"
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};