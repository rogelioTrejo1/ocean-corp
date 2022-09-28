import { Request, Response, NextFunction } from "express";
import { hash, compare, genSalt } from "bcryptjs";

export const encryptPassword = async (password: string) => {
    const salt = await genSalt(10);
    const newPassword = await hash(password, salt);
    return newPassword;
};

export const descryptPassword = async (password: string, encryptPassword: string) => {
    return await compare(password, encryptPassword);
};

export const isLoggedIn = (req: Request, res: Response, next: NextFunction) => {
    if (req.isAuthenticated()) {
        return next();
    }
    return res.redirect('/Login');
};

export const isNotLoggedIn = (req: Request, res: Response, next: NextFunction) => {
    if (!req.isAuthenticated()) {
        return next();
    }
    return res.redirect('/Cuenta');
};

export const getRandow = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
