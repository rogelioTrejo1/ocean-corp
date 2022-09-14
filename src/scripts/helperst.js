const bcrypt = require('bcryptjs');

const Helperst = {};

Helperst.encryptPassword = async (password) => {
    const hash = await bcrypt.genSalt(10);
    const newPassword = await bcrypt.hash(password, hash);
    return newPassword;
};

Helperst.descryptPassword = async (password, encryptPassword) => {
    return await bcrypt.compare(password, encryptPassword);
};

Helperst.isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    return res.redirect('/Login');
};

Helperst.isNotLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return next();
    }
    return res.redirect('/Cuenta');
};

Helperst.getRandow = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = Helperst;