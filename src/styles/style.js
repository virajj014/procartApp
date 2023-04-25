const { col1, col2 } = require("./colors");

module.exports = {
    vfruit: {
        width: 10,
        height: 10,
        borderRadius: 20,
        backgroundColor: '#9BE415',
    },
    vsweet: {
        width: 10,
        height: 10,
        borderRadius: 20,
        backgroundColor: '#9BE415',
    },
    navbtn: {
        backgroundColor: '#FFD51E',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,
        borderRadius: 50,
        borderTopLeftRadius: 0,
    },
    navbtnin: {
        color: 'white',
    },
    navbtnout: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 10,
    },
    bottomnav: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: 'white',
        zIndex: 20,
    }
}