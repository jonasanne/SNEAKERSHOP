module.exports = {
    purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
    darkMode: false, // or 'media' or 'class'
    theme: {

        extend: {},

        colors: {
            mint: "#26f8e2",
            grey: "#7C777D",
            darkGrey: "#F6F6F6",
            darkerGrey: "#DCDCDC",
            red: "#FF0000",
            blue: "#0E5FB0"
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};