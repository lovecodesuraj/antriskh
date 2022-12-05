import { Announcement , Post } from "../models/models.js";


export const announcement = (req, res) => {

    const title = req.body.title;
    const details = req.body.details;
    // const creator =req.body.creator;
    const date = new Date();

    const annoucement = new Announcement({
        title: title,
        details:details,
        date:date,
        creator:"tuktuk"
    })
    annoucement.save();
    console.log("annoncement ho gya")
    res.status(200).json({"success":"announcement posted sussecfully"});
}